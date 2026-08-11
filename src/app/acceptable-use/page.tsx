import React from 'react';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Acceptable Use Policy - TrackMasterTool',
  description: 'TrackMasterTool Acceptable Use Policy. Explicitly prohibiting unauthorized surveillance, stalkerware, credential theft, and non-consensual monitoring.',
  canonical: 'https://www.trackmastertool.com/acceptable-use',
});

export default function AcceptableUsePage() {
  return (
    <div className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h1 className="font-heading font-extrabold text-3xl text-slate-900 mb-2">Acceptable Use Policy</h1>
        <p className="text-xs text-slate-500 mb-8">Last Updated: August 10, 2026 • Policy Version 1.0.0</p>

        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6 text-sm text-slate-700 leading-relaxed">
          
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-900 font-semibold">
            STRICT PROHIBITION NOTICE: TrackMasterTool is software intended exclusively for lawful parental supervision of minor children or authorized device management with explicit informed consent.
          </div>

          <h2 className="font-heading font-bold text-xl text-slate-900">1. Prohibited Uses</h2>
          <p>You explicitly agree NOT to use TrackMasterTool for any of the following activities:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Secret surveillance or covert monitoring of any adult without their express written authorization.</li>
            <li>Stalkerware operation, harassment, or unauthorized tracking of spouses, partners, or employees.</li>
            <li>Credential theft, bypassing operating system security controls, or hacking accounts.</li>
            <li>Intercepting calls or activating microphones without explicit legal authority and consent.</li>
            <li>Any activity that violates local, state, federal, or international privacy laws.</li>
          </ul>

          <h2 className="font-heading font-bold text-xl text-slate-900">2. Account Termination for Violations</h2>
          <p>
            TrackMasterTool reserves the right to immediately suspend or terminate any account found in violation of this Acceptable Use Policy without refund, and report unlawful activities to law enforcement authorities.
          </p>

        </div>

      </div>
    </div>
  );
}
