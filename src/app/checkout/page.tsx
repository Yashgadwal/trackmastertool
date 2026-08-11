'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Shield, Lock, CreditCard, CheckCircle2, AlertCircle } from 'lucide-react';

declare global {
  interface Window {
    Razorpay: any;
  }
}

function CheckoutForm() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const planId = searchParams.get('plan') || '6-months';

  const [email, setEmail] = useState('parent@example.com');
  const [name, setName] = useState('Sarah Miller');
  const [phone, setPhone] = useState('+91 9876543210');
  const [targetPlatform, setTargetPlatform] = useState('android');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const planDetails: Record<string, { name: string; priceUsd: number; priceInr: number; desc: string }> = {
    '2-months': { name: 'TrackMaster 2 Months Plan', priceUsd: 30, priceInr: 2499, desc: '1 Authorized Device • 2 Months Full Access' },
    '6-months': { name: 'TrackMaster 6 Months Plan', priceUsd: 50, priceInr: 4199, desc: 'Up to 3 Authorized Devices • 6 Months Full Access' },
    'lifetime': { name: 'TrackMaster Lifetime Plan', priceUsd: 100, priceInr: 8299, desc: 'Up to 5 Authorized Devices • One-Time Payment for Lifetime' },
    'plan-2months': { name: 'TrackMaster 2 Months Plan', priceUsd: 30, priceInr: 2499, desc: '1 Authorized Device • 2 Months Full Access' },
    'plan-6months': { name: 'TrackMaster 6 Months Plan', priceUsd: 50, priceInr: 4199, desc: 'Up to 3 Authorized Devices • 6 Months Full Access' },
    'plan-lifetime': { name: 'TrackMaster Lifetime Plan', priceUsd: 100, priceInr: 8299, desc: 'Up to 5 Authorized Devices • One-Time Payment for Lifetime' },
  };

  const selectedPlan = planDetails[planId] || planDetails['6-months'];

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleRazorpayPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/checkout/razorpay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planId, currency: 'INR' }),
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.error || 'Failed to initialize order');
      }

      const options = {
        key: data.keyId || 'rzp_live_TO9mHPvzKV5v9F',
        amount: data.amount,
        currency: data.currency,
        name: 'TrackMasterTool',
        description: selectedPlan.name,
        order_id: data.orderId,
        prefill: {
          name: name,
          email: email,
          contact: phone,
        },
        theme: {
          color: '#7c3aed',
        },
        handler: async function (response: any) {
          const verifyRes = await fetch('/api/checkout/razorpay/verify-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              email,
              name,
              planId,
            }),
          });

          const verifyData = await verifyRes.json();

          if (verifyData.success) {
            router.push(`/payment-success?txn=${response.razorpay_payment_id}&plan=${encodeURIComponent(selectedPlan.name)}`);
          } else {
            router.push(`/payment-failed?error=${encodeURIComponent(verifyData.error || 'Verification failed')}`);
          }
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
          },
        },
      };

      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || 'Payment initialization error');
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
      {/* Left Form */}
      <div className="md:col-span-7 bg-white p-8 rounded-2xl border border-slate-200 shadow-xl space-y-6">
        {errorMessage && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleRazorpayPayment} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
              Full Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="e.g. Sarah Miller"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
              Email Address (For Account License)
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="parent@example.com"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="+91 9876543210"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
              Target Device Platform
            </label>
            <select
              value={targetPlatform}
              onChange={(e) => setTargetPlatform(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:ring-2 focus:ring-purple-500 focus:outline-none font-medium"
            >
              <option value="android">Android</option>
              <option value="ios">iOS</option>
            </select>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-purple-600 hover:from-purple-500 hover:to-purple-500 text-white font-bold rounded-xl text-base shadow-lg shadow-purple-900/30 transition-all flex items-center justify-center gap-2"
            >
              <CreditCard className="w-5 h-5" />
              <span>{loading ? 'Initializing Razorpay...' : `Pay $${selectedPlan.priceUsd} (₹${selectedPlan.priceInr}) via Razorpay`}</span>
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center gap-4 text-xs text-slate-500 pt-2 border-t border-slate-100">
          <span className="flex items-center gap-1"><Lock className="w-3.5 h-3.5 text-emerald-500" /> 256-Bit SSL Secured</span>
          <span>•</span>
          <span>Supports UPI, Cards, NetBanking, Wallet</span>
        </div>
      </div>

      {/* Right Summary */}
      <div className="md:col-span-5 space-y-6">
        <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-purple-400">Order Summary</div>

          <div className="border-b border-slate-800 pb-4">
            <div className="font-heading font-extrabold text-xl">{selectedPlan.name}</div>
            <div className="text-xs text-slate-400 mt-1">{selectedPlan.desc}</div>
          </div>

          <div className="flex justify-between items-baseline py-2 border-b border-slate-800">
            <span className="text-sm text-slate-300">Total Price</span>
            <span className="text-2xl font-extrabold text-white">${selectedPlan.priceUsd} <span className="text-xs text-slate-400 font-normal">(₹{selectedPlan.priceInr})</span></span>
          </div>

          <div className="space-y-2 text-xs text-slate-300 pt-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Instant license email activation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>100% Transparent consent verification</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>14-Day full money back guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-3 mb-4">
            <img
              src="/logo.png"
              alt="TrackMasterTool Logo"
              className="h-10 w-auto rounded-lg shadow-md"
            />
            <span className="font-heading font-extrabold text-2xl tracking-tight text-slate-900">
              Track<span className="text-purple-600">Master</span>Tool
            </span>
          </Link>
          <h1 className="font-heading font-extrabold text-3xl text-slate-900">Secure Razorpay Checkout</h1>
          <p className="text-slate-600 text-sm mt-1">100% Encrypted SSL • Instant License Activation • 14-Day Money Back Guarantee</p>
        </div>

        <Suspense fallback={<div className="text-center text-slate-500 py-12">Loading Razorpay Checkout...</div>}>
          <CheckoutForm />
        </Suspense>
      </div>
    </div>
  );
}
