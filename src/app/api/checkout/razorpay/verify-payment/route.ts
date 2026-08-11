import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { db } from '@/lib/db';

const keySecret = process.env.RAZORPAY_KEY_SECRET || 'VY588mfIOzIgTuXVZjlhrjYI';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      email,
      name,
      planId = 'pro',
    } = body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { success: false, error: 'Missing required Razorpay payment details' },
        { status: 400 }
      );
    }

    // Perform HMAC SHA256 Signature Verification
    const generatedSignature = crypto
      .createHmac('sha256', keySecret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    if (generatedSignature !== razorpay_signature) {
      return NextResponse.json(
        { success: false, error: 'Invalid payment signature. Verification failed.' },
        { status: 400 }
      );
    }

    // Signature verified! Record payment in database
    if (email) {
      const user = await db.user.findUnique({ where: { email } });
      if (user) {
        await db.auditLog.create({
          data: {
            userId: user.id,
            action: 'RAZORPAY_PAYMENT_SUCCESS',
            details: `Order: ${razorpay_order_id}, Payment: ${razorpay_payment_id}, Plan: ${planId}`,
          },
        });
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Razorpay payment verified successfully!',
      transactionId: razorpay_payment_id,
      orderId: razorpay_order_id,
    });
  } catch (error: any) {
    console.error('Razorpay Verify Error:', error);
    return NextResponse.json(
      { success: false, error: error?.message || 'Payment verification failed' },
      { status: 500 }
    );
  }
}
