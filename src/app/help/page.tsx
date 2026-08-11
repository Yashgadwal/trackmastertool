import React from 'react';
import Link from 'next/link';
import { HelpCircle, Search, Smartphone, Shield, CreditCard, Lock, ArrowRight } from 'lucide-react';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Help Center & Knowledge Base - TrackMasterTool',
  description: 'Searchable help guides, device onboarding instructions, billing FAQs, and troubleshooting for TrackMasterTool.',
  canonical: 'https://trackmastertool.vercel.app/help',
});

export default function HelpCenterPage() {
  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Help Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 text-purple-700 font-semibold text-xs uppercase mb-3">
            <HelpCircle className="w-4 h-4 text-purple-600" /> Support Knowledge Base
          </div>
          <h1 className="font-heading font-extrabold text-4xl text-slate-900 mb-4">How Can We Help You?</h1>
          <p className="text-slate-600 text-base">
            Search our guides or browse categories below for onboarding steps, billing help, and device compatibility.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-14">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search help articles (e.g. Android setup, geofence, cancel subscription)..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 bg-white shadow-lg text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Help Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">Getting Started</h3>
            <p className="text-slate-600 text-xs leading-relaxed mb-4">Device setup guides for Android & iPhone parental consent onboarding.</p>
            <Link href="/#how-it-works" className="text-xs font-semibold text-purple-600 flex items-center gap-1">View Guides →</Link>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
              <CreditCard className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">Billing & Account</h3>
            <p className="text-slate-600 text-xs leading-relaxed mb-4">Manage plans, Razorpay payments, receipts, and 14-day refunds.</p>
            <Link href="/account" className="text-xs font-semibold text-purple-600 flex items-center gap-1">Manage Account →</Link>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">Privacy & Safety</h3>
            <p className="text-slate-600 text-xs leading-relaxed mb-4">Learn about data encryption, consent verification, and security controls.</p>
            <Link href="/security" className="text-xs font-semibold text-purple-600 flex items-center gap-1">Read Policy →</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
