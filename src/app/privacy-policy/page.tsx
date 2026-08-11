import React from 'react';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Privacy Policy - TrackMasterTool',
  description: 'TrackMasterTool Privacy Policy. How we collect, encrypt, and protect your family data in accordance with international privacy laws.',
  canonical: 'https://www.trackmastertool.com/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading font-extrabold text-3xl text-slate-900 mb-2">Privacy Policy</h1>
        <p className="text-xs text-slate-500 mb-8">Last Updated: August 10, 2026 • Policy Version 1.0.0</p>

        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6 text-sm text-slate-700 leading-relaxed">
          <h2 className="font-heading font-bold text-xl text-slate-900">1. Data Collection & Purpose</h2>
          <p>TrackMasterTool collects device performance metrics, aggregated screen time, app categories, visited URLs, and GPS location coordinates strictly for parental supervision and family safety.</p>

          <h2 className="font-heading font-bold text-xl text-slate-900">2. Encryption & Data Protection</h2>
          <p>All data transmitted between authorized devices and TrackMasterTool servers is protected with bank-grade 256-bit SSL encryption. We never sell personal family data to third-party advertisers.</p>

          <h2 className="font-heading font-bold text-xl text-slate-900">3. Your Rights & Deletion</h2>
          <p>You can export or delete your personal account data and revoke connected devices at any time inside your customer account portal.</p>
        </div>
      </div>
    </div>
  );
}
