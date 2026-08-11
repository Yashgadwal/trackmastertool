'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { AlertCircle, RefreshCw, HelpCircle } from 'lucide-react';

function PaymentFailedContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error') || 'Payment authorization was declined or cancelled.';

  return (
    <div className="max-w-xl mx-auto px-4 text-center">
      <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-red-500/20">
        <AlertCircle className="w-10 h-10" />
      </div>

      <h1 className="font-heading font-extrabold text-3xl text-slate-900 mb-2">Payment Could Not Be Completed</h1>
      <p className="text-slate-600 text-sm mb-6">{error}</p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/checkout"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm shadow-md"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Try Payment Again</span>
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-800 font-semibold rounded-xl text-sm border border-slate-200"
        >
          <HelpCircle className="w-4 h-4" />
          <span>Contact Support</span>
        </Link>
      </div>
    </div>
  );
}

export default function PaymentFailedPage() {
  return (
    <div className="py-20 bg-slate-50 min-h-screen flex items-center justify-center">
      <Suspense fallback={<div className="text-center text-slate-500">Loading error details...</div>}>
        <PaymentFailedContent />
      </Suspense>
    </div>
  );
}
