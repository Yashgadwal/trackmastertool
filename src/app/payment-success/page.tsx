'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const txn = searchParams.get('txn') || 'pay_live_mock12389';
  const plan = searchParams.get('plan') || 'TrackMaster Pro Ultimate Plan';

  return (
    <div className="max-w-xl mx-auto px-4 text-center">
      <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/20">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <h1 className="font-heading font-extrabold text-3xl text-slate-900 mb-2">Payment Successful!</h1>
      <p className="text-slate-600 text-base mb-6">
        Thank you for subscribing to <strong>{plan}</strong>. Your license key and installation instructions have been sent to your email.
      </p>

      <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 space-y-2 mb-8 shadow-sm text-left">
        <div className="flex justify-between border-b border-slate-100 pb-2">
          <span>Payment Gateway:</span>
          <strong className="text-slate-900">Razorpay Live Gateway</strong>
        </div>
        <div className="flex justify-between border-b border-slate-100 pb-2">
          <span>Transaction ID:</span>
          <strong className="text-slate-900 font-mono">{txn}</strong>
        </div>
        <div className="flex justify-between">
          <span>Status:</span>
          <strong className="text-emerald-600">VERIFIED & COMPLETED</strong>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/dashboard"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm shadow-md"
        >
          <span>Open Family Dashboard</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/account"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-800 font-semibold rounded-xl text-sm border border-slate-200"
        >
          <span>View Account Portal</span>
        </Link>
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <div className="py-20 bg-slate-50 min-h-screen flex items-center justify-center">
      <Suspense fallback={<div className="text-center text-slate-500">Loading receipt details...</div>}>
        <PaymentSuccessContent />
      </Suspense>
    </div>
  );
}
