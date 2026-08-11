'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, Lock, ChevronRight, CheckCircle2, Smartphone, MapPin, Eye } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-slate-950 text-white border-b border-slate-800">
      
      {/* Background Radial Glow Matching Logo Purple */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Text */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-800/80 text-purple-300 text-xs font-semibold uppercase tracking-wider">
              <Shield className="w-4 h-4 text-purple-400" /> Transparent Family Safety Platform
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
              Empower Your Family with <span className="gradient-text">TrackMasterTool</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              The ethical, consent-based parental control and authorized device safety software. Protect your children online with screen time balance, web content filtering, and real-time family location sharing.
            </p>

            {/* Benefit Checkmarks */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-xs sm:text-sm font-medium text-slate-300 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                <span>100% Transparent Parental Consent</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                <span>Android & iOS Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                <span>14-Day Money Back Guarantee</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/pricing"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 font-extrabold rounded-2xl text-white text-base shadow-xl shadow-purple-900/40 transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <span>Get Started ($30 for 2 Months)</span>
                <ChevronRight className="w-5 h-5" />
              </Link>

              <Link
                href="/dashboard"
                className="px-8 py-4 bg-slate-900 hover:bg-slate-800 font-semibold rounded-2xl text-slate-200 text-base border border-slate-800 transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Live Demo Map</span>
              </Link>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-400 pt-2">
              <span className="flex items-center gap-1"><Lock className="w-3.5 h-3.5 text-emerald-400" /> Bank Grade 256-Bit Encryption</span>
              <span>•</span>
              <span>Razorpay Live Verified</span>
            </div>

          </div>

          {/* Right Preview Card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-purple-950/40 relative overflow-hidden backdrop-blur-xl">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <img
                    src="/logo.png"
                    alt="TrackMasterTool Logo"
                    className="h-9 w-auto rounded-lg shadow-md"
                  />
                  <div>
                    <div className="font-heading font-extrabold text-sm text-white">Family Security Map</div>
                    <div className="text-[11px] text-purple-400">Live Authorized Device Status</div>
                  </div>
                </div>
                <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2.5 py-1 rounded-full">
                  Online Syncing
                </span>
              </div>

              {/* Status List */}
              <div className="space-y-4 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-4 h-4 text-purple-400" />
                    <div>
                      <div className="font-semibold text-white">Supervised iPhone 15 Pro</div>
                      <div className="text-[11px] text-slate-400">Lincoln High School (Safe Zone)</div>
                    </div>
                  </div>
                  <span className="text-emerald-400 font-semibold font-mono text-[11px]">88% Battery</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-indigo-400" />
                    <div>
                      <div className="font-semibold text-white">Supervised Samsung Galaxy</div>
                      <div className="text-[11px] text-slate-400">Home Safe Perimeter</div>
                    </div>
                  </div>
                  <span className="text-emerald-400 font-semibold font-mono text-[11px]">Active</span>
                </div>

                <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-800/50 flex items-center justify-between text-purple-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400" />
                    <span>Bedtime Screen Schedule Enforced</span>
                  </div>
                  <span className="text-[11px] font-mono text-purple-300">9:00 PM</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center text-[11px] text-slate-400">
                <span>Authorized Devices: 2 / 3 Active</span>
                <Link href="/dashboard" className="text-purple-400 hover:underline font-semibold">Open Control Panel →</Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
