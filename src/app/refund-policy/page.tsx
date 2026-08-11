import React from 'react';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: '14-Day 100% Refund Policy - TrackMasterTool',
  description: 'TrackMasterTool 14-day 100% money back refund policy guarantee for parental control subscriptions.',
  canonical: 'https://www.trackmastertool.com/refund-policy',
});

export default function RefundPolicyPage() {
  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading font-extrabold text-3xl text-slate-900 mb-2">14-Day Money Back Refund Policy</h1>
        <p className="text-xs text-slate-500 mb-8">Last Updated: August 10, 2026</p>

        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6 text-sm text-slate-700 leading-relaxed">
          <h2 className="font-heading font-bold text-xl text-slate-900">14-Day 100% Satisfaction Guarantee</h2>
          <p>
            We stand behind the quality of TrackMasterTool. If TrackMasterTool does not perform as described and our 24/7 technical support team cannot resolve your issue, you are eligible for a 100% full refund within 14 days of purchase.
          </p>

          <h2 className="font-heading font-bold text-xl text-slate-900">How to Request a Refund</h2>
          <p>
            Simply email <strong>support@trackmastertool.com</strong> or submit a ticket from your account portal with your order number. Refunds are processed back to your original payment method via Razorpay within 3 to 5 business days.
          </p>
        </div>
      </div>
    </div>
  );
}
