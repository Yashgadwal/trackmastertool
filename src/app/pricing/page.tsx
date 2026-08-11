import React from 'react';
import PricingCards from '@/components/PricingCards';
import FAQAccordion from '@/components/FAQAccordion';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'TrackMasterTool Pricing - Simple Family Safety Plans',
  description: 'Flexible monthly and yearly parental control plans. 100% transparent consent-based device supervision with 14-day money-back guarantee.',
  canonical: 'https://trackmastertool.vercel.app/pricing',
});

export default function PricingPage() {
  return (
    <div className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <h1 className="font-heading font-extrabold text-4xl text-slate-900 mb-3">Simple Plans for Smarter Family Digital Safety</h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">Select the subscription plan that fits your family requirements. Cancel anytime.</p>
      </div>

      <PricingCards />
      <FAQAccordion />
    </div>
  );
}
