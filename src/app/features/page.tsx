import React from 'react';
import Link from 'next/link';
import { Shield, MapPin, Clock, Smartphone, Lock, Eye, ArrowRight, CheckCircle2, LayoutGrid, Zap, HelpCircle, Check, BookOpen } from 'lucide-react';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Complete Feature Suite - Parental Control & Location Tracking | TrackMasterTool',
  description: 'Explore the complete 15-feature suite of TrackMasterTool: Real-time family GPS, geofencing safe zones, screen time quotas, web content filtering, app usage limits, and activity reports.',
  canonical: 'https://trackmastertool.vercel.app/features',
});

const featureCards = [
  {
    title: 'Parental Control App Suite',
    category: 'Full Supervision',
    description: 'Comprehensive digital wellbeing suite providing screen time schedules, web content filters, and device safety rules across Android and iOS.',
    slug: 'parental-control-app',
    image: '/images/blog/phone_monitoring.jpg',
  },
  {
    title: 'Family Location Tracker',
    category: 'GPS Location',
    description: 'Live interactive map showing exact real-time coordinates of authorized family members with 30-day location route history logs.',
    slug: 'family-location-tracker',
    image: '/images/blog/phone_monitoring.jpg',
  },
  {
    title: 'Screen Time Monitoring',
    category: 'Digital Wellbeing',
    description: 'Set daily screen time quotas, bedtime downtimes, and homework lockouts to maintain healthy smartphone boundaries.',
    slug: 'screen-time-monitoring',
    image: '/images/blog/iphone_filtering.jpg',
  },
  {
    title: 'App Usage Monitor & Lockout',
    category: 'App Control',
    description: 'Track daily time spent across games, social media, and messaging platforms with automatic daily app lockouts.',
    slug: 'app-usage-monitor',
    image: '/images/blog/tiktok_controls.jpg',
  },
  {
    title: 'Website Content Blocker',
    category: 'Web Safety',
    description: 'Block 18+ adult material, gambling, violence, and phishing websites automatically across Safari, Chrome, and Edge browsers.',
    slug: 'website-blocker',
    image: '/images/blog/iphone_filtering.jpg',
  },
  {
    title: 'Geofencing Safe Zones',
    category: 'Location Alerts',
    description: 'Create custom virtual boundaries around School, Home, and Sports Practice with automated entrance and exit notifications.',
    slug: 'geofencing-for-families',
    image: '/images/blog/phone_monitoring.jpg',
  },
  {
    title: 'Android Parental Controls',
    category: 'Android Safety',
    description: 'Root-free Android device management compatible with Samsung Galaxy, Google Pixel, Xiaomi, and OnePlus smartphones.',
    slug: 'android-parental-control',
    image: '/images/blog/phone_monitoring.jpg',
  },
  {
    title: 'iPhone Parental Controls',
    category: 'iOS Safety',
    description: 'Seamless Apple Screen Time integration and Safari web restrictions for iPhone and iPad family devices.',
    slug: 'iphone-parental-control',
    image: '/images/blog/iphone_filtering.jpg',
  },
  {
    title: 'Family Safety App Hub',
    category: 'Family Wellbeing',
    description: 'Centralized family dashboard for multi-child households supporting up to 5 authorized devices simultaneously.',
    slug: 'family-safety-app',
    image: '/images/blog/viber_safety.jpg',
  },
  {
    title: 'Web Filtering for Families',
    category: 'Content Shield',
    description: 'Force SafeSearch across Google, Bing, and YouTube with customizable URL domain blacklists and category blocks.',
    slug: 'web-filtering-for-families',
    image: '/images/blog/iphone_filtering.jpg',
  },
  {
    title: 'Child Online Safety Guard',
    category: 'Child Protection',
    description: 'Protect young children from online predators, toxic viral challenges, and age-inappropriate digital media.',
    slug: 'child-online-safety',
    image: '/images/blog/tiktok_controls.jpg',
  },
  {
    title: 'Digital Wellbeing for Kids',
    category: 'Balanced Habits',
    description: 'Encourage healthier smartphone habits, reduced screen addiction, and better sleep routines for growing minds.',
    slug: 'digital-wellbeing-for-kids',
    image: '/images/blog/viber_safety.jpg',
  },
  {
    title: 'Device Activity Reports',
    category: 'Analytics',
    description: 'Receive weekly automated digest reports summarizing total screen time, top apps used, and location travel history.',
    slug: 'device-activity-reports',
    image: '/images/blog/phone_monitoring.jpg',
  },
  {
    title: 'Family Digital Safety Contracts',
    category: 'Digital Trust',
    description: 'Build open digital safety contracts between parents and children built on mutual respect and transparent consent.',
    slug: 'family-digital-safety',
    image: '/images/blog/viber_safety.jpg',
  },
  {
    title: 'Online Safety for Children',
    category: 'Parent Guidance',
    description: 'Actionable guidelines and age-appropriate device rules tailored for kids aged 6-10, 11-14, and 15-18.',
    slug: 'online-safety-for-children',
    image: '/images/blog/tiktok_controls.jpg',
  },
];

const faqs = [
  {
    q: 'Does TrackMasterTool require rooting Android or jailbreaking iOS devices?',
    a: 'No. TrackMasterTool operates 100% root-free on Android using standard system AccessibilityService and NotificationListener APIs, and uses native Apple MDM Screen Time frameworks on iOS. Device security and manufacturer warranties remain completely intact.',
  },
  {
    q: 'How accurate is the family location tracking feature?',
    a: 'TrackMasterTool utilizes multi-sensor hybrid positioning combining GPS satellite signals, Wi-Fi network triangulations, and cellular tower telemetry to deliver precise location coordinates typically accurate within 5 to 10 meters outdoors.',
  },
  {
    q: 'Can children uninstall TrackMasterTool without parent permission?',
    a: 'No. On Android, TrackMasterTool is protected by Device Admin uninstall protection requiring your secret parent PIN. On iOS, uninstallation is locked behind your Apple Screen Time passcode.',
  },
  {
    q: 'How many family devices can I monitor under one account?',
    a: 'Our 2 Months Plan supports 1 device ($30), our 6 Months Plan supports up to 3 devices ($50), and our Lifetime Plan supports up to 5 family devices ($100) under a single parent account.',
  },
  {
    q: 'Does TrackMasterTool work when the target device is on cellular mobile data?',
    a: 'Yes. TrackMasterTool synchronizes rules, web filters, and location coordinates continuously over 4G, 5G LTE cellular networks as well as Wi-Fi connections.',
  },
  {
    q: 'Is my family’s location and activity data secure and private?',
    a: 'Absolutely. TrackMasterTool uses bank-grade AES-256 data encryption in transit and at rest. Your family data is strictly accessible only through your authenticated parent account and is never sold to third-party data brokers.',
  },
];

export default function AllFeaturesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'TrackMasterTool Complete Feature Suite - Advanced Parental Control & Location Tracking',
    description: 'Comprehensive 15-feature suite for family location sharing, screen time quotas, web content filtering, and social media safety.',
    author: {
      '@type': 'Organization',
      name: 'TrackMasterTool Safety Engineering Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'TrackMasterTool',
      logo: {
        '@type': 'ImageObject',
        url: 'https://trackmastertool.vercel.app/logo.png',
      },
    },
    mainEntityOfPage: 'https://trackmastertool.vercel.app/features',
  };

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-xs text-slate-500 mb-6 font-medium">
          <Link href="/" className="hover:text-purple-600">Home</Link>
          <span>/</span>
          <span className="text-purple-600 font-semibold">Features Suite</span>
        </div>

        {/* Header Hero */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Shield className="w-4 h-4 text-purple-600" /> Complete 15-Feature Engineering Suite
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight mb-6 leading-tight">
            Comprehensive Family Protection & <span className="gradient-text">Parental Supervision Features</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Engineered for modern families, TrackMasterTool combines real-time GPS location tracking, automated geofence safe zones, screen time balance controls, and strict web content filtering into a unified, consent-verified parent platform.
          </p>
        </div>

        {/* Feature Cards Grid with Visual Images */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading font-extrabold text-3xl text-slate-900 mb-3">Explore All 15 Specialized Capabilities</h2>
            <p className="text-slate-600 text-sm">Click any feature card below to read detailed technical guides and setup instructions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureCards.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between"
              >
                {/* Feature Image Thumbnail */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                  <img
                    src={feat.image}
                    alt={feat.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="font-bold text-white bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-lg text-xs border border-white/20">
                      {feat.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-slate-900 mb-2 hover:text-purple-600 transition-colors leading-tight">
                      <Link href={`/${feat.slug}`}>{feat.title}</Link>
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed mb-6">{feat.description}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-medium">Consent Verified</span>
                    <Link
                      href={`/${feat.slug}`}
                      className="font-bold text-purple-600 flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      <span>Explore Feature</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed SEO Prose Section 1: Why Modern Supervision Requires Unified Features */}
        <section className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm mb-16 space-y-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-3 py-1 rounded-lg border border-purple-100">
              Technical Architecture Overview
            </span>
            <h2 className="font-heading font-extrabold text-3xl text-slate-900 mt-4 mb-4">
              Why Modern Parental Supervision Demands an Integrated Feature Suite
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              The modern smartphone is no longer just a communication tool; it is a gateway to unlimited digital media, social interactions, internet browsing, and mobile gaming. While mobile devices offer tremendous educational and social benefits, unsupervised access can expose young minds to cyberbullying, sleep deprivation, adult web content, and online predators.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              TrackMasterTool was built from the ground up to address these multi-faceted challenges. Rather than relying on single-purpose utility apps that can be easily bypassed or uninstalled, TrackMasterTool delivers an integrated 15-feature suite governed by unified policy enforcement. From root-free Android accessibility controls to Apple Screen Time MDM profiles, parents receive reliable, real-time control over their family’s digital wellbeing.
            </p>
          </div>

          {/* Core Feature Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <MapPin className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="font-heading font-bold text-base text-slate-900 mb-2">1. Location & Geofencing</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Multi-sensor hybrid GPS, Wi-Fi, and cellular positioning delivering live location coordinates and automated geofence safe zone alerts for School and Home.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <Clock className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="font-heading font-bold text-base text-slate-900 mb-2">2. Screen Time & App Limits</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Configure daily screen time quotas, homework focus schedules, and automatic bedtime app lockouts to maintain healthy sleep hygiene and study balance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <Lock className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="font-heading font-bold text-base text-slate-900 mb-2">3. Web Content Filtering</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Block 18+ adult content, gambling, and phishing websites automatically across all mobile web browsers while enforcing Google and YouTube SafeSearch.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Architecture Comparison Matrix */}
        <section className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm mb-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-heading font-extrabold text-3xl text-slate-900 mb-3">
              TrackMasterTool vs Built-in OS Controls
            </h2>
            <p className="text-slate-600 text-sm">
              See how our unified cross-platform feature set compares against default built-in smartphone settings.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="py-4 px-4 font-bold text-slate-900">Feature Capability</th>
                  <th className="py-4 px-4 font-bold text-purple-600 bg-purple-50/50">TrackMasterTool</th>
                  <th className="py-4 px-4 font-bold text-slate-700">Apple Screen Time</th>
                  <th className="py-4 px-4 font-bold text-slate-700">Google Family Link</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-800">Cross-Platform Sync (Android & iOS)</td>
                  <td className="py-3.5 px-4 font-bold text-purple-600 bg-purple-50/30">✓ Unified Dashboard</td>
                  <td className="py-3.5 px-4 text-slate-500">iOS Only</td>
                  <td className="py-3.5 px-4 text-slate-500">Android Focused</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-800">Real-Time GPS Location Tracking</td>
                  <td className="py-3.5 px-4 font-bold text-purple-600 bg-purple-50/30">✓ Continuous Live Map</td>
                  <td className="py-3.5 px-4 text-slate-500">Find My App Only</td>
                  <td className="py-3.5 px-4 text-slate-500">Periodic Updates</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-800">Geofence Safe Zone Entrance/Exit Alerts</td>
                  <td className="py-3.5 px-4 font-bold text-purple-600 bg-purple-50/30">✓ Automated Push Alerts</td>
                  <td className="py-3.5 px-4 text-slate-500">Manual Check-In</td>
                  <td className="py-3.5 px-4 text-slate-500">Basic Radius Only</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-800">Cross-Browser Web Content Filter</td>
                  <td className="py-3.5 px-4 font-bold text-purple-600 bg-purple-50/30">✓ Safari, Chrome, Edge</td>
                  <td className="py-3.5 px-4 text-slate-500">Safari Only</td>
                  <td className="py-3.5 px-4 text-slate-500">Chrome Only</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-800">Anti-Tamper PIN Protection</td>
                  <td className="py-3.5 px-4 font-bold text-purple-600 bg-purple-50/30">✓ Device Admin Locked</td>
                  <td className="py-3.5 px-4 text-slate-500">Passcode Based</td>
                  <td className="py-3.5 px-4 text-slate-500">Google Auth</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-800">Consent Verification & Ethical Rules</td>
                  <td className="py-3.5 px-4 font-bold text-purple-600 bg-purple-50/30">✓ 100% Consent Verified</td>
                  <td className="py-3.5 px-4 text-slate-500">OS Default</td>
                  <td className="py-3.5 px-4 text-slate-500">OS Default</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm mb-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-heading font-extrabold text-3xl text-slate-900 mb-3">Features Frequently Asked Questions</h2>
            <p className="text-slate-600 text-sm">Got questions about how our feature suite works? Here are answers to common parent inquiries.</p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="font-heading font-bold text-base text-slate-900 mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* High-Converting Pricing CTA Card */}
        <div className="bg-slate-950 rounded-3xl p-10 text-white text-center border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl mb-4">Start Using TrackMasterTool Today</h2>
            <p className="text-slate-300 text-sm mb-8">
              Select your plan: 2 Months ($30), 6 Months ($50), or Lifetime Unlimited ($100). All plans come with full access to our 15-feature suite, 100% consent verification, and a 14-day money back guarantee.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 font-extrabold rounded-2xl text-white shadow-xl shadow-purple-950/40 uppercase tracking-wider text-sm"
            >
              <span>Choose Your Plan ($30 for 2 Months)</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
