import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const keyId = process.env.RAZORPAY_KEY_ID || 'rzp_live_TO9mHPvzKV5v9F';
const keySecret = process.env.RAZORPAY_KEY_SECRET || 'VY588mfIOzIgTuXVZjlhrjYI';

const razorpay = new Razorpay({
  key_id: keyId,
  key_secret: keySecret,
});

const planPrices: Record<string, { inr: number; usd: number; name: string }> = {
  '2-months': { inr: 2499, usd: 30, name: '2 Months Plan ($30)' },
  '6-months': { inr: 4199, usd: 50, name: '6 Months Plan ($50)' },
  'lifetime': { inr: 8299, usd: 100, name: 'Lifetime Access Plan ($100)' },
  'plan-2months': { inr: 2499, usd: 30, name: '2 Months Plan ($30)' },
  'plan-6months': { inr: 4199, usd: 50, name: '6 Months Plan ($50)' },
  'plan-lifetime': { inr: 8299, usd: 100, name: 'Lifetime Access Plan ($100)' },
  // Fallbacks for legacy plan names
  'essential': { inr: 2499, usd: 30, name: '2 Months Plan ($30)' },
  'pro': { inr: 4199, usd: 50, name: '6 Months Plan ($50)' },
  'family': { inr: 8299, usd: 100, name: 'Lifetime Access Plan ($100)' },
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { planId = '6-months', currency = 'INR' } = body;

    const plan = planPrices[planId] || planPrices['6-months'];
    const amountInCurrency = currency === 'INR' ? plan.inr : Math.round(plan.usd * 85);
    const amountInPaise = amountInCurrency * 100; // Razorpay expects amount in paise

    const options = {
      amount: amountInPaise,
      currency: 'INR',
      receipt: `rcpt_tm_${Date.now()}`,
      notes: {
        planName: plan.name,
        planId: planId,
        brand: 'TrackMasterTool',
      },
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: keyId,
      planName: plan.name,
      priceUsd: plan.usd,
      priceInr: plan.inr,
    });
  } catch (error: any) {
    console.error('Razorpay Create Order Error:', error);
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed to create Razorpay order' },
      { status: 500 }
    );
  }
}
