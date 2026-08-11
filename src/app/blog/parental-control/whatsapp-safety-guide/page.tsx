import React from 'react';
import Link from 'next/link';
import { MessageSquare, Shield, Clock, CheckCircle2, AlertTriangle, ArrowRight, Lock, Eye, HeartHandshake, User, Smartphone } from 'lucide-react';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'WhatsApp Parental Supervision & Family Safety Guide (2026)',
  description: 'Learn how to protect your children on WhatsApp, prevent cyberbullying, filter inappropriate media, and guide healthy messaging habits with TrackMasterTool.',
  canonical: 'https://trackmastertool.vercel.app/blog/parental-control/whatsapp-safety-guide',
});

export default function WhatsappSafetyGuidePage() {
  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
          <Link href="/" className="hover:text-purple-600">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-purple-600">Blog</Link>
          <span>/</span>
          <span className="text-purple-600 font-semibold">WhatsApp Safety Guide</span>
        </div>

        {/* Article Header */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-4 h-4 text-emerald-600" /> Messaging Safety Guide
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            The Complete Guide to WhatsApp Parental Supervision & Child Online Safety
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed">
            WhatsApp is the world's most popular messaging app for teenagers and children. Discover how transparent parental supervision protects your family from cyberbullying, online predators, and inappropriate media sharing.
          </p>

          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center">TM</div>
              <div>
                <span className="font-bold text-slate-900">TrackMaster Editorial Team</span>
                <span className="block text-[11px] text-slate-400">Fact-Checked & Reviewed</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 7 min read</span>
              <span>Updated: August 10, 2026</span>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-emerald-50/70 border border-emerald-200/80 p-6 rounded-2xl mb-12 space-y-3">
          <div className="font-heading font-bold text-sm text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-600" /> Table of Contents
          </div>
          <ol className="list-decimal pl-5 text-xs sm:text-sm text-slate-700 space-y-1.5 font-medium">
            <li><a href="#understanding-risks" className="hover:text-emerald-700">Understanding Online Risks on Messaging Apps</a></li>
            <li><a href="#how-supervision-works" className="hover:text-emerald-700">How TrackMasterTool Supervises WhatsApp Safely</a></li>
            <li><a href="#core-capabilities" className="hover:text-emerald-700">Key Features of WhatsApp Parental Control</a></li>
            <li><a href="#setup-guide" className="hover:text-emerald-700">Step-by-Step Onboarding Guide for Android & iPhone</a></li>
            <li><a href="#open-communication" className="hover:text-emerald-700">Building Digital Trust & Healthy Chat Boundaries</a></li>
            <li><a href="#faq" className="hover:text-emerald-700">Frequently Asked Questions (FAQs)</a></li>
          </ol>
        </div>

        {/* Article Body */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-10 text-slate-700 leading-relaxed font-sans">
          
          {/* Section 1 */}
          <section id="understanding-risks" className="space-y-4">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              1. Understanding Online Risks on Instant Messaging Apps
            </h2>
            <p>
              WhatsApp allows children to connect instantaneously with school classmates, friends, and family. However, the end-to-end encrypted nature of instant messaging can also expose young users to significant digital risks:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <AlertTriangle className="w-5 h-5 text-amber-600 mb-2" />
                <h3 className="font-bold text-slate-900 text-sm">Cyberbullying & Peer Pressure</h3>
                <p className="text-xs text-slate-600 mt-1">Exclusion from group chats, hurtful messaging, or peer harassment can cause severe emotional stress for children.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <Lock className="w-5 h-5 text-red-600 mb-2" />
                <h3 className="font-bold text-slate-900 text-sm">Unknown Contacts & Phishing Links</h3>
                <p className="text-xs text-slate-600 mt-1">Spam messages, fraudulent web links, or attempts by strangers to initiate contact with minors.</p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="how-supervision-works" className="space-y-4">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              2. How TrackMasterTool WhatsApp Supervision Works
            </h2>
            <p>
              TrackMasterTool provides a balanced, consent-verified approach to messaging safety. Rather than invading private conversations unnecessarily, parents receive high-level category reports, daily chat duration metrics, and automated safety alerts for suspicious interactions.
            </p>

            <div className="p-4 rounded-xl bg-emerald-50 border-l-4 border-emerald-600 text-xs sm:text-sm text-slate-700">
              <strong className="text-slate-900 block mb-1">Ethical Supervision Mandate:</strong>
              <span>TrackMasterTool operates with 100% transparent parental authorization. We promote open dialogue between parents and teenagers regarding digital safety agreements.</span>
            </div>
          </section>

          {/* Section 3 */}
          <section id="core-capabilities" className="space-y-4">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              3. Key Features of TrackMasterTool Messaging Control
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Messaging App Screen Time Limits:</strong> Set custom daily usage allowances specifically for WhatsApp to prevent late-night chatting.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Shared Media & Attachment Logs:</strong> Inspect incoming photos and video attachments for safety and appropriateness.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Unknown Contact Alerts:</strong> Receive notifications when your child receives messages from unrecognized phone numbers.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Bedtime Chat Downtime:</strong> Automatically block messaging apps during homework hours and sleep schedules.</span>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="setup-guide" className="space-y-4">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              4. Step-by-Step Setup Guide for Android & iPhone
            </h2>
            <div className="space-y-3 text-sm">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-base mb-1">Step 1: Choose Subscription Plan</h3>
                <p className="text-xs text-slate-600">Select 2 Months ($30), 6 Months ($50), or Lifetime ($100) and complete Razorpay checkout.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-base mb-1">Step 2: Connect Authorized Family Device</h3>
                <p className="text-xs text-slate-600">Complete standard device onboarding on your child’s phone with parental consent.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-base mb-1">Step 3: Review Activity via Parent Dashboard</h3>
                <p className="text-xs text-slate-600">Log in from any browser to manage app time limits, web filters, and safety alerts.</p>
              </div>
            </div>
          </section>

          {/* Section 5 - FAQs */}
          <section id="faq" className="space-y-6 pt-4 border-t border-slate-100">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              5. Frequently Asked Questions (FAQs)
            </h2>

            <div className="space-y-4 text-sm">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-1">Can I set time limits specifically for WhatsApp?</h3>
                <p className="text-slate-600 text-xs">Yes! TrackMasterTool allows parents to set app-specific time allowances and bedtime downtimes.</p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-1">Does this work on both Android and iPhone?</h3>
                <p className="text-slate-600 text-xs">Yes, TrackMasterTool supports both Android and iOS devices seamlessly.</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="p-8 rounded-3xl bg-slate-900 text-white text-center space-y-4 shadow-xl">
            <h3 className="font-heading font-extrabold text-2xl">Protect Your Child's Messaging Safety Today</h3>
            <p className="text-slate-300 text-sm max-w-xl mx-auto">Establish healthy screen time limits, app controls, and family safety rules with TrackMasterTool.</p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/pricing" className="px-6 py-3.5 bg-purple-600 hover:bg-purple-500 font-bold rounded-xl text-white text-sm shadow-md flex items-center justify-center gap-2">
                <span>View Subscription Plans</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/dashboard" className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 font-semibold rounded-xl text-slate-200 text-sm border border-slate-700">
                <span>Explore Live Demo</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
