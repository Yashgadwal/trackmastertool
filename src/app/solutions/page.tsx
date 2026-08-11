import React from 'react';
import Link from 'next/link';
import { Shield, MapPin, Clock, Smartphone, Lock, Eye, ArrowRight, CheckCircle2, Heart, Users, Sparkles, HelpCircle, Check, BookOpen } from 'lucide-react';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Tailored Family Safety Solutions - Age Groups & Devices | TrackMasterTool',
  description: 'Discover specialized TrackMasterTool family safety solutions tailored for parents of teens, young children, Android families, iPhone ecosystems, and multi-device households.',
  canonical: 'https://trackmastertool.vercel.app/solutions',
});

const solutionCards = [
  {
    title: 'Parental Control & Screen Time Balance',
    targetAudience: 'For Parents of School-Aged Children',
    description: 'Establish healthy smartphone habits, manage daily screen time quotas, and block bedtime distractions to foster better sleep, focus, and academic achievement.',
    slug: 'parental-control-app',
    image: '/images/blog/phone_monitoring.jpg',
    keyBenefits: ['Custom Daily Time Budgets', 'Bedtime Downtime Lockout', 'Categorized App Budgets'],
  },
  {
    title: 'Family Location & Real-Time GPS Guard',
    targetAudience: 'For Busy Families & Commuters',
    description: 'Stay connected with real-time location sharing, 30-day travel route logs, and automated geofence arrival notifications for School, Home, and Coaching.',
    slug: 'family-location-tracker',
    image: '/images/blog/phone_monitoring.jpg',
    keyBenefits: ['Live 24/7 Map Tracking', 'Geofence Safe Zone Alerts', 'Battery & Signal Telemetry'],
  },
  {
    title: 'TikTok & Social Media Safety Shield',
    targetAudience: 'For Parents of Tweens & Teenagers',
    description: 'Protect teenagers from online predators, toxic viral challenges, direct messaging strangers, and harmful cyberbullying without damaging trust.',
    slug: 'child-online-safety',
    image: '/images/blog/tiktok_controls.jpg',
    keyBenefits: ['Restricted Mode Enforcement', 'Bedtime Social Media Lock', 'Unknown Number Alerts'],
  },
  {
    title: 'iPhone & iPad Family Security Solution',
    targetAudience: 'For Apple Ecosystem Households',
    description: 'Comprehensive iOS web filtering across Safari and Chrome, combined with Apple Screen Time rules, iCloud safety, and MDM anti-tamper profiles.',
    slug: 'iphone-parental-control',
    image: '/images/blog/iphone_filtering.jpg',
    keyBenefits: ['Safari & Chrome Web Shield', 'Force Google SafeSearch', 'MDM Profile Anti-Tamper'],
  },
  {
    title: 'Android Root-Free Device Supervision',
    targetAudience: 'For Android Smartphone Owners',
    description: 'Supervise Samsung Galaxy, Google Pixel, Xiaomi, and OnePlus phones without risk of device rooting, spyware vulnerabilities, or voiding warranties.',
    slug: 'android-parental-control',
    image: '/images/blog/phone_monitoring.jpg',
    keyBenefits: ['100% Root-Free Engine', 'Accessibility API Safety', 'Tamper-Proof Uninstall PIN'],
  },
  {
    title: 'Web Content Filtering & SafeSearch Force',
    targetAudience: 'For Household Web Browsing Safety',
    description: 'Block 18+ adult material, gambling, violence, and malicious phishing sites automatically across all mobile web browsers on cellular and Wi-Fi networks.',
    slug: 'web-filtering-for-families',
    image: '/images/blog/iphone_filtering.jpg',
    keyBenefits: ['Adult Category Shield', 'Custom Domain Blacklists', 'Private Browsing Protection'],
  },
  {
    title: 'Digital Wellbeing & Screen Addiction Relief',
    targetAudience: 'For Kids Struggling with Screen Overuse',
    description: 'Replace compulsive doomscrolling and excessive mobile gaming with structured daily screen budgets, study schedules, and positive digital hygiene.',
    slug: 'digital-wellbeing-for-kids',
    image: '/images/blog/viber_safety.jpg',
    keyBenefits: ['Gradual Screen Reduction', 'Homework Study Focus Mode', 'Weekly Wellbeing Digests'],
  },
  {
    title: 'Multi-Child Household Management',
    targetAudience: 'For Multi-Device Family Households',
    description: 'Manage up to 5 family devices from a single centralized parent dashboard with personalized rules, time quotas, and alerts for each child.',
    slug: 'family-safety-app',
    image: '/images/blog/viber_safety.jpg',
    keyBenefits: ['Up to 5 Devices Supervised', 'Individualized Child Profiles', 'Centralized Activity Logs'],
  },
  {
    title: 'Family Digital Trust & Safety Agreements',
    targetAudience: 'For Transparent Parenting Partnerships',
    description: 'Build open digital safety contracts between parents and children built on mutual respect, transparent consent, and clear family expectations.',
    slug: 'family-digital-safety',
    image: '/images/blog/phone_monitoring.jpg',
    keyBenefits: ['100% Consent Verified', 'Printable Family Agreement', 'Joint Check-In Framework'],
  },
];

const faqs = [
  {
    q: 'Why are specialized family safety solutions better than generic spy apps?',
    a: 'Generic spy apps operate secretly, breaking family trust, inviting legal liability, and installing malware risks. TrackMasterTool solutions are 100% transparent and consent-verified, empowering parents to protect their children through open communication and clear digital boundaries.',
  },
  {
    q: 'How do solutions differ for young children versus teenagers?',
    a: 'For young children (ages 6–10), solutions focus on strict web filtering and complete bedtime lockouts. For teenagers (ages 15–18), solutions prioritize location safety, geofencing alerts, and screen time balance while respecting private communication boundaries.',
  },
  {
    q: 'Can I apply different solution rules to different children in my account?',
    a: 'Yes. Each authorized child device in your TrackMasterTool parent dashboard operates under its own customizable profile with tailored app limits, web filters, and geofence safe zones.',
  },
  {
    q: 'Do TrackMasterTool solutions work on both Android and iOS devices simultaneously?',
    a: 'Yes. You can manage an iPhone for one child and an Android smartphone for another child under the exact same parent account without needing separate subscriptions.',
  },
  {
    q: 'What pricing plans are available for TrackMasterTool solutions?',
    a: 'We offer three simple, transparent pricing tiers: $30 for 2 Months Access (1 device), $50 for 6 Months Access (up to 3 devices), and $100 for Lifetime Unlimited Access (up to 5 devices). All plans include 100% consent verification.',
  },
  {
    q: 'How fast can I set up a TrackMasterTool solution for my family?',
    a: 'Initial device setup takes approximately 3 minutes. After selecting your plan, you pair the companion app on your child’s device, grant system permissions, and immediately configure your safety rules.',
  },
];

export default function AllSolutionsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'TrackMasterTool Family Safety Solutions - Specialized Guidance for Every Household',
    description: 'Tailored digital safety solutions for parents of teens, young children, Android families, iPhone users, and multi-device households.',
    author: {
      '@type': 'Organization',
      name: 'TrackMasterTool Parenting Solutions Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'TrackMasterTool',
      logo: {
        '@type': 'ImageObject',
        url: 'https://trackmastertool.vercel.app/logo.png',
      },
    },
    mainEntityOfPage: 'https://trackmastertool.vercel.app/solutions',
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
          <span className="text-purple-600 font-semibold">Solutions Hub</span>
        </div>

        {/* Header Hero */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Heart className="w-4 h-4 text-purple-600" /> Tailored Family Use Cases & Age Frameworks
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight mb-6 leading-tight">
            Tailored Digital Protection & <span className="gradient-text">Family Safety Solutions</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Every family is unique. Discover specialized TrackMasterTool solutions tailored for your children’s exact age groups, mobile device operating systems, and specific digital safety needs.
          </p>
        </div>

        {/* Solutions Grid with Visual Images */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading font-extrabold text-3xl text-slate-900 mb-3">Explore All 9 Family Solutions</h2>
            <p className="text-slate-600 text-sm">Select any solution card below to view detailed implementation blueprints and family frameworks.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionCards.map((sol, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between"
              >
                {/* Solution Image Thumbnail */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="font-bold text-white bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-lg text-xs border border-white/20">
                      {sol.targetAudience}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-slate-900 mb-2 hover:text-purple-600 transition-colors leading-tight">
                      <Link href={`/${sol.slug}`}>{sol.title}</Link>
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed mb-4">{sol.description}</p>

                    {/* Bullet Benefits */}
                    <div className="space-y-1.5 mb-6">
                      {sol.keyBenefits.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2 text-[11px] font-semibold text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 flex-shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-medium">Consent Verified</span>
                    <Link
                      href={`/${sol.slug}`}
                      className="font-bold text-purple-600 flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      <span>View Solution</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed SEO Prose Section: Age-Appropriate Safety Framework */}
        <section className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm mb-16 space-y-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-3 py-1 rounded-lg border border-purple-100">
              Parenting Methodology Framework
            </span>
            <h2 className="font-heading font-extrabold text-3xl text-slate-900 mt-4 mb-4">
              Age-Appropriate Digital Safety Frameworks for Every Development Stage
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Effective digital parenting requires evolving strategies as children grow. A rigid set of restrictions that works for a 7-year-old child will feel oppressive to a 16-year-old teenager. TrackMasterTool provides customizable solutions designed to adapt to your child’s emotional maturity and developmental needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-purple-50/50 border border-purple-100 space-y-3">
              <div className="text-xs font-bold text-purple-600 uppercase tracking-wider">Ages 6 to 10</div>
              <h3 className="font-heading font-bold text-lg text-slate-900">Young Explorers</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Focus on strict web content filtering, zero adult content, 1-hour daily screen budgets, and mandatory bedtime lockouts at 8:00 PM to protect early childhood development.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-purple-50/50 border border-purple-100 space-y-3">
              <div className="text-xs font-bold text-purple-600 uppercase tracking-wider">Ages 11 to 14</div>
              <h3 className="font-heading font-bold text-lg text-slate-900">Tweens & Early Teens</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Focus on social media app quotas, SafeSearch enforcement, homework focus modes, and geofence safe zone alerts around School and Sports practice.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-purple-50/50 border border-purple-100 space-y-3">
              <div className="text-xs font-bold text-purple-600 uppercase tracking-wider">Ages 15 to 18</div>
              <h3 className="font-heading font-bold text-lg text-slate-900">Young Adults</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Focus on transparent GPS location sharing, travel route histories, digital trust agreements, and collaborative check-ins to build lifelong digital independence.
              </p>
            </div>
          </div>
        </section>

        {/* Solution Comparison Matrix */}
        <section className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm mb-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-heading font-extrabold text-3xl text-slate-900 mb-3">
              Solution Matrix Across Family Needs
            </h2>
            <p className="text-slate-600 text-sm">
              Compare how our specialized solutions address different digital parenting challenges.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="py-4 px-4 font-bold text-slate-900">Family Need / Goal</th>
                  <th className="py-4 px-4 font-bold text-purple-600 bg-purple-50/50">Recommended Solution</th>
                  <th className="py-4 px-4 font-bold text-slate-700">Primary Protection Mechanisms</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-800">Child spending too much time gaming/scrolling</td>
                  <td className="py-3.5 px-4 font-bold text-purple-600 bg-purple-50/30">Screen Time & App Limits</td>
                  <td className="py-3.5 px-4 text-slate-600">Daily app budgets, bedtime lockouts, category caps</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-800">Child commuting independently to school</td>
                  <td className="py-3.5 px-4 font-bold text-purple-600 bg-purple-50/30">Family Location & Geofencing</td>
                  <td className="py-3.5 px-4 text-slate-600">Live GPS map, geofence entrance/exit alerts, route logs</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-800">Preventing exposure to adult websites</td>
                  <td className="py-3.5 px-4 font-bold text-purple-600 bg-purple-50/30">Web Content Filtering</td>
                  <td className="py-3.5 px-4 text-slate-600">Adult category blocker, Google SafeSearch, custom domain block</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-800">Protecting teenager on TikTok & Instagram</td>
                  <td className="py-3.5 px-4 font-bold text-purple-600 bg-purple-50/30">TikTok & Social Media Shield</td>
                  <td className="py-3.5 px-4 text-slate-600">Restricted Mode, bedtime social block, unknown number alerts</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-800">Managing multiple kids with different devices</td>
                  <td className="py-3.5 px-4 font-bold text-purple-600 bg-purple-50/30">Multi-Child Household Hub</td>
                  <td className="py-3.5 px-4 text-slate-600">Up to 5 devices, individual profiles, centralized parent dashboard</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm mb-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-heading font-extrabold text-3xl text-slate-900 mb-3">Solutions Frequently Asked Questions</h2>
            <p className="text-slate-600 text-sm">Have questions about selecting the right solution for your family? Check our detailed answers.</p>
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
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl mb-4">Start Protecting Your Family Today</h2>
            <p className="text-slate-300 text-sm mb-8">
              Select your plan: 2 Months ($30), 6 Months ($50), or Lifetime Unlimited ($100). All plans come with access to our specialized family solutions, 100% consent verification, and a 14-day money back guarantee.
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
