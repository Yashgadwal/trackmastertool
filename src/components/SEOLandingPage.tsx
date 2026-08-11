import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Shield, Lock, Smartphone, Clock, MapPin, AlertCircle, HelpCircle } from 'lucide-react';

export interface SEOLandingPageProps {
  title: string;
  subtitle: string;
  badge: string;
  problemTitle: string;
  problemDesc: string;
  benefits: string[];
  featuresList: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  slug: string;
  heroImage?: string;
  detailImage?: string;
}

export default function SEOLandingPage({
  title,
  subtitle,
  badge,
  problemTitle,
  problemDesc,
  benefits,
  featuresList,
  faqs,
  slug,
  heroImage = '/images/blog/phone_monitoring.jpg',
  detailImage = '/images/blog/iphone_filtering.jpg',
}: SEOLandingPageProps) {
  return (
    <div className="flex flex-col bg-slate-50">
      
      {/* Hero Header */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 mb-6 font-medium">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/features" className="hover:text-white">Features</Link>
            <span>/</span>
            <span className="text-purple-400">{badge}</span>
          </div>

          <div className="text-center max-w-4xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-800/80 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-6">
              <Shield className="w-4 h-4 text-purple-400" /> {badge}
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white tracking-tight mb-6 leading-tight">
              {title}
            </h1>

            <p className="text-slate-300 text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-base shadow-xl shadow-purple-950/40 transition-all uppercase tracking-wider"
              >
                <span>Get Started ($30 for 2 Months)</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/dashboard"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-base border border-slate-800 transition-all"
              >
                <span>View Interactive Demo</span>
              </Link>
            </div>
          </div>

          {/* Hero Feature Screenshot Preview */}
          <div className="mt-12 max-w-4xl mx-auto rounded-3xl overflow-hidden border border-slate-800 shadow-2xl shadow-purple-950/50">
            <img
              src={heroImage}
              alt={title}
              className="w-full h-80 sm:h-96 object-cover"
            />
          </div>

        </div>
      </section>

      {/* Problem & Solution with Image */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="text-purple-600 font-semibold text-xs uppercase tracking-wider">Why Families Choose TrackMasterTool</div>
              <h2 className="font-heading font-extrabold text-3xl text-slate-900 leading-tight">{problemTitle}</h2>
              <p className="text-slate-600 text-base leading-relaxed">{problemDesc}</p>

              <div className="pt-4 space-y-3">
                <h3 className="font-heading font-bold text-lg text-slate-900">Key Family Benefits</h3>
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900">
                <img
                  src={detailImage}
                  alt={problemTitle}
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading font-extrabold text-3xl text-slate-900">Capabilities & Feature Details</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuresList.map((feat, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all">
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">{feat.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading font-extrabold text-3xl text-slate-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="font-heading font-bold text-base text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl mb-4">Start Protecting Your Family Today</h2>
          <p className="text-slate-300 text-base mb-8">Join thousands of parents using TrackMasterTool for transparent digital safety.</p>
          <Link href="/pricing" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-2xl font-extrabold text-white shadow-xl shadow-purple-950/40 uppercase tracking-wider">
            <span>Choose Your Plan ($30 for 2m)</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
