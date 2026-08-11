import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-6">
          <ShieldCheck className="w-4 h-4 text-purple-400" /> Start Protecting Today
        </div>

        <h2 className="font-heading font-extrabold text-3xl sm:text-5xl tracking-tight mb-6 leading-tight">
          Build Healthier Digital Habits With Your Family
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Join over 1.5 million parents empowering their children with safe online boundaries, screen-time balance, and transparent device supervision.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-base shadow-xl shadow-purple-600/30 transition-all transform hover:-translate-y-0.5"
          >
            <span>Get Started Risk-Free</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            href="/dashboard"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-base border border-slate-700 transition-all"
          >
            <span>View Interactive Demo</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
