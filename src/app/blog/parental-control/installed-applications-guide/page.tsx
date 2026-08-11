import React from 'react';
import Link from 'next/link';
import { Smartphone, Shield, Clock, CheckCircle2, AlertTriangle, ArrowRight, Lock, LayoutGrid, Layers, User } from 'lucide-react';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Installed Applications & Parental App Control Guide (2026)',
  description: 'Learn how to manage installed applications on your child’s phone, block dangerous apps, set daily app budgets, and prevent screen addiction with TrackMasterTool.',
  canonical: 'https://trackmastertool.vercel.app/blog/parental-control/installed-applications-guide',
});

export default function InstalledApplicationsGuidePage() {
  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
          <Link href="/" className="hover:text-purple-600">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-purple-600">Blog</Link>
          <span>/</span>
          <span className="text-purple-600 font-semibold">Installed Applications Guide</span>
        </div>

        {/* Article Header */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold uppercase tracking-wider">
            <Smartphone className="w-4 h-4 text-purple-600" /> App Management Guide
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            The Ultimate Guide to Installed Application Management & Parental App Control
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed">
            With millions of apps available in app stores, children can easily download addictive games, unvetted social media platforms, or distracting tools. Discover how parents can manage installed applications and set healthy app boundaries.
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
        <div className="bg-purple-50/70 border border-purple-200/80 p-6 rounded-2xl mb-12 space-y-3">
          <div className="font-heading font-bold text-sm text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <Shield className="w-4 h-4 text-purple-600" /> Table of Contents
          </div>
          <ol className="list-decimal pl-5 text-xs sm:text-sm text-slate-700 space-y-1.5 font-medium">
            <li><a href="#why-app-management" className="hover:text-purple-700">Why Monitoring Installed Applications Matters</a></li>
            <li><a href="#how-it-works" className="hover:text-purple-700">How TrackMasterTool Manages Installed Applications</a></li>
            <li><a href="#key-features" className="hover:text-purple-700">Key Features of TrackMasterTool App Control</a></li>
            <li><a href="#setup-guide" className="hover:text-purple-700">Step-by-Step Setup Guide for Android & iPhone</a></li>
            <li><a href="#educational-whitelisting" className="hover:text-purple-700">Educational Whitelisting vs Entertainment Lockouts</a></li>
            <li><a href="#faq" className="hover:text-purple-700">Frequently Asked Questions (FAQs)</a></li>
          </ol>
        </div>

        {/* Article Body */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-10 text-slate-700 leading-relaxed font-sans">
          
          {/* Section 1 */}
          <section id="why-app-management" className="space-y-4">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              1. Why Monitoring Installed Applications Matters
            </h2>
            <p>
              Smartphones provide access to educational utilities alongside highly addictive mobile games, social media networks, and anonymous chatting applications. Without parental guidance, children can spend hours engrossed in passive entertainment or install apps with inadequate safety filters.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <AlertTriangle className="w-5 h-5 text-amber-600 mb-2" />
                <h3 className="font-bold text-slate-900 text-sm">Unvetted Social & Gaming Apps</h3>
                <p className="text-xs text-slate-600 mt-1">Some apps expose minors to open chatrooms, predatory in-app purchases, or inappropriate content.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <Clock className="w-5 h-5 text-purple-600 mb-2" />
                <h3 className="font-bold text-slate-900 text-sm">App Addiction & Bedtime Distraction</h3>
                <p className="text-xs text-slate-600 mt-1">Late-night gaming and video streaming disrupt essential sleep cycles and academic performance.</p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="how-it-works" className="space-y-4">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              2. How TrackMasterTool Manages Installed Applications
            </h2>
            <p>
              TrackMasterTool provides a consolidated view of all applications installed on supervised Android phones, tablets, iPhones, and iPads. Parents can categorize applications into Educational, Social, Gaming, and Entertainment groups, set specific time budgets, or block dangerous apps instantly.
            </p>
          </section>

          {/* Section 3 */}
          <section id="key-features" className="space-y-4">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              3. Key Features of TrackMasterTool App Control
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span><strong>New App Download Notifications:</strong> Receive automated alerts whenever a new app is installed on your child's phone.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span><strong>One-Touch Remote App Blocker:</strong> Instantly block any unwanted application with a single toggle from your parent dashboard.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span><strong>Categorized Usage Analytics:</strong> View detailed charts breaking down time spent on games vs educational apps.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span><strong>Scheduled App Downtime:</strong> Automatically lock social media and gaming apps during study hours and bedtime.</span>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="setup-guide" className="space-y-4">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              4. Step-by-Step Onboarding Guide for Android & iPhone
            </h2>
            <div className="space-y-3 text-sm">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-base mb-1">Step 1: Select Your Plan</h3>
                <p className="text-xs text-slate-600">Choose between 2 Months ($30), 6 Months ($50), or Lifetime Access ($100) and complete Razorpay checkout.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-base mb-1">Step 2: Complete Device Onboarding</h3>
                <p className="text-xs text-slate-600">Follow quick device-specific setup on your child’s phone with full parental consent.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-base mb-1">Step 3: Manage Installed Apps Remotely</h3>
                <p className="text-xs text-slate-600">Log in to your parent dashboard to view installed apps, set category limits, or block unwanted downloads.</p>
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
                <h3 className="font-bold text-slate-900 mb-1">Will my child know that an app has been blocked?</h3>
                <p className="text-slate-600 text-xs">Yes. When a blocked app is opened, a polite notification informs the user that daily limit or downtime rules apply.</p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-1">Does app control work on both Android and iPhone?</h3>
                <p className="text-slate-600 text-xs">Yes! TrackMasterTool supports installed app management across both platforms.</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="p-8 rounded-3xl bg-slate-900 text-white text-center space-y-4 shadow-xl">
            <h3 className="font-heading font-extrabold text-2xl">Take Control of Installed App Safety Today</h3>
            <p className="text-slate-300 text-sm max-w-xl mx-auto">Set healthy app boundaries, block dangerous downloads, and encourage digital wellbeing with TrackMasterTool.</p>
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
