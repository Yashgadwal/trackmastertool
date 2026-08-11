import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Smartphone,
  Shield,
  Clock,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Lock,
  Eye,
  HeartHandshake,
  User,
  Globe,
  MapPin,
  Activity,
  FileText,
  Sliders,
  Zap,
  Check,
  X,
  HelpCircle,
  Laptop,
  ChevronRight,
  Info,
  Users,
  CheckSquare
} from 'lucide-react';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: "How Can I Monitor My Child's Phone Activity? A Practical Guide for Modern Parents (2026)",
  description: "Comprehensive guide for parents on how to transparently monitor child phone activity, manage screen time, block web hazards, track GPS location, and foster digital trust with TrackMasterTool.",
  canonical: "https://www.trackmastertool.com/blog/parental-control/how-can-i-monitor-my-childs-phone-activity",
});

export default function ChildPhoneMonitoringGuidePage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How Can I Monitor My Child's Phone Activity? A Practical Guide for Modern Parents",
    "description": "A detailed, step-by-step parental control guide on supervising children's smartphone usage, screen time management, app monitoring, instant messaging safety, and transparent digital parenting.",
    "author": {
      "@type": "Organization",
      "name": "TrackMaster Editorial Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "TrackMasterTool",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.trackmastertool.com/logo.png"
      }
    },
    "datePublished": "2026-08-10",
    "dateModified": "2026-08-10",
    "mainEntityOfPage": "https://www.trackmastertool.com/blog/parental-control/how-can-i-monitor-my-childs-phone-activity"
  };

  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is it legal and ethical to monitor my child's phone activity?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, as a parent or legal guardian, you have a legal right and ethical duty to protect your minor children from digital hazards. TrackMasterTool strictly advocates for open, transparent supervision where children are informed about safety monitoring."
        }
      },
      {
        "@type": "Question",
        "name": "Can my child bypass or uninstall TrackMasterTool?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TrackMasterTool features robust anti-tamper protections. Removing the companion application requires parental admin privileges and password verification, preventing children from stealthily deleting protection filters."
        }
      },
      {
        "@type": "Question",
        "name": "Should I tell my child that I am monitoring their phone?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Transparent monitoring fosters trust and accountability. Explaining that supervision software acts as digital training wheels helps children view safety controls as protective rather than punitive."
        }
      },
      {
        "@type": "Question",
        "name": "How does TrackMasterTool differ from illegal spy software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TrackMasterTool is explicit, consent-verified parental control software. We strictly prohibit clandestine surveillance of non-consenting adults, stalkerware practices, keylogging, and credential theft."
        }
      },
      {
        "@type": "Question",
        "name": "Can TrackMasterTool monitor messaging apps like WhatsApp and Viber?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TrackMasterTool provides overall app screen time limits, usage schedules, installed app management, and contact safety oversight for instant messaging applications like WhatsApp, Viber, Telegram, and Messenger."
        }
      },
      {
        "@type": "Question",
        "name": "Does phone activity monitoring work cross-platform across Android and iOS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! TrackMasterTool offers unified cross-platform management. A parent using an Android device can monitor a child using an iPhone, and vice-versa, through a unified web dashboard."
        }
      },
      {
        "@type": "Question",
        "name": "Will activity monitoring slow down my child's device or drain battery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. TrackMasterTool companion software is lightweight and optimized for background execution with negligible CPU overhead and minimal impact on battery health."
        }
      },
      {
        "@type": "Question",
        "name": "What should I do if TrackMasterTool flags inappropriate content or dangerous contacts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use flagged activity as a constructive teaching moment. Sit down with your child, review the event neutrally, discuss the digital risks involved, and reinforce family internet guidelines."
        }
      },
      {
        "@type": "Question",
        "name": "How much does TrackMasterTool cost and is there a lifetime option?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TrackMasterTool offers flexible pricing tiers: $30 for 2 months, $50 for 6 months, and a $100 Lifetime Access plan with no recurring monthly fees."
        }
      }
    ]
  };

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-purple-600 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <Link href="/blog" className="hover:text-purple-600 transition-colors">Blog</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <Link href="/blog" className="hover:text-purple-600 transition-colors">Parental Control</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-purple-600 font-semibold truncate">How Can I Monitor My Child's Phone Activity?</span>
        </nav>

        {/* Article Header Header */}
        <header className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold uppercase tracking-wider">
            <Shield className="w-4 h-4 text-purple-600" /> Ultimate Digital Parenting Guide
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            How Can I Monitor My Child's Phone Activity? A Practical Guide for Modern Parents
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed">
            In an era where smartphones connect children to endless knowledge and instant entertainment, parents face an unprecedented challenge. Learn how transparent phone monitoring, smart screen limits, web filtering, and open dialogue create a safe, healthy digital environment for your family.
          </p>

          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center shadow-sm">TM</div>
              <div>
                <span className="font-bold text-slate-900 block text-sm">TrackMaster Editorial Team</span>
                <span className="text-[11px] text-slate-400">Fact-Checked & Tech Verified</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-slate-500">
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-purple-600" /> 14 min read</span>
              <span className="text-slate-300">|</span>
              <span>Updated: August 10, 2026</span>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        <div className="bg-purple-50/80 border border-purple-200 p-6 sm:p-8 rounded-2xl mb-12 space-y-4 shadow-sm">
          <div className="font-heading font-bold text-sm text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <FileText className="w-4 h-4 text-purple-600" /> Table of Contents
          </div>
          <ol className="list-decimal pl-5 text-xs sm:text-sm text-slate-700 space-y-2 font-medium">
            <li><a href="#section-1" className="hover:text-purple-700 transition-colors">The Modern Smartphone Dilemma Facing Parents</a></li>
            <li><a href="#section-2" className="hover:text-purple-700 transition-colors">Why Transparent Supervision Outperforms Covert Surveillance</a></li>
            <li><a href="#section-3" className="hover:text-purple-700 transition-colors">Essential Pillars of Complete Phone Activity Monitoring</a></li>
            <li><a href="#section-4" className="hover:text-purple-700 transition-colors">Comparing Built-in OS Controls vs TrackMasterTool</a></li>
            <li><a href="#section-5" className="hover:text-purple-700 transition-colors">Step-by-Step Setup Guide for Android and iOS</a></li>
            <li><a href="#section-6" className="hover:text-purple-700 transition-colors">Age-Appropriate Phone Safety Rules & Device Agreements</a></li>
            <li><a href="#section-7" className="hover:text-purple-700 transition-colors">Detailed Frequently Asked Questions (FAQs)</a></li>
          </ol>
        </div>

        {/* Main Article Content */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-12 text-slate-700 leading-relaxed font-sans">
          
          {/* SECTION 1 */}
          <section id="section-1" className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-bold uppercase">
              Section 1
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              1. The Modern Smartphone Dilemma Facing Parents
            </h2>
            <p className="text-base sm:text-lg">
              Raising children in the digital age presents a dual reality. On one hand, smartphones provide unprecedented educational tools, instant access to knowledge, and effortless connection with family. On the other hand, an unrestricted mobile device acts as an unmonitored portal to explicit content, social pressure, screen addiction, and predatory risks.
            </p>
            <p>
              According to recent child safety statistics, teenagers spend an average of <strong>7.5 hours per day</strong> staring at digital entertainment screens. For pre-teens (ages 8 to 12), screen time averages over 4.5 hours daily. Without structured guidance, this digital exposure can impair physical sleep, undermine academic concentration, and increase vulnerabilities to cyberbullying and online solicitation.
            </p>

            <div className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <div className="relative w-full h-72 sm:h-96 bg-slate-100">
                <Image 
                  src="/images/blog/phone_monitoring.jpg" 
                  alt="Parents using modern phone activity monitoring software to ensure child safety"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
              <div className="p-4 bg-slate-900 text-white text-xs sm:text-sm font-medium">
                <span className="font-bold text-purple-400">Figure 1.1:</span> Modern parental control tools enable parents to establish healthy digital boundaries, monitor screen habits, and protect children from web hazards without invading personal trust.
              </div>
            </div>

            <h3 className="font-heading font-bold text-xl text-slate-900">
              The Top 5 Digital Risks Confronting Children Today
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  <span>1. Compulsive Screen Addiction & Dopamine Loops</span>
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  Algorithms in social platforms and mobile games are engineered to trigger continuous dopamine spikes. Infinite scrolling feed mechanics lead to midnight device usage, sleep deprivation, and reduced attention spans.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-rose-900 text-sm">
                  <Lock className="w-5 h-5 text-rose-600 flex-shrink-0" />
                  <span>2. Cyberbullying & Social Harassment</span>
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  Peer harassment, intentional exclusion from group chats, offensive comments, and non-consensual photo sharing occur rapidly across social networks, causing anxiety and emotional distress.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-purple-900 text-sm">
                  <Users className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span>3. Online Predators & Stranger Solicitation</span>
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  Bad actors exploit direct messaging features in popular mobile apps, mobile games, and chat forums to initiate communication with minors, often pretending to be peers.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-purple-900 text-sm">
                  <Globe className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span>4. Inappropriate Content Exposure</span>
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  Without active domain filtering, simple search queries can unintentionally lead children to pornographic websites, graphic violence, dangerous online challenges, or suicide-encouraging forums.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2 mt-4">
              <div className="flex items-center gap-2 font-bold text-emerald-900 text-sm">
                <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>5. Physical Safety & Location Vulnerabilities</span>
              </div>
              <p className="text-xs text-slate-600 leading-normal">
                Children walking home from school or visiting friends can wander into unfamiliar areas or face unexpected emergencies. Real-time location oversight provides parents with vital physical security.
              </p>
            </div>
          </section>

          {/* SECTION 2 */}
          <section id="section-2" className="space-y-6 pt-6 border-t border-slate-100">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-bold uppercase">
              Section 2
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              2. Why Transparent Supervision Outperforms Covert Surveillance
            </h2>
            <p>
              When parents search for ways to monitor their child's phone activity, they are often bombarded with advertisements for covert "spyware" apps promising invisible keylogging, secret call recording, and stealthy tracking. At <strong>TrackMasterTool</strong>, we strictly condemn illicit stalkerware and advocate for <strong>100% transparent, consent-verified parental supervision</strong>.
            </p>

            <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4">
              <div className="flex items-center gap-3 text-emerald-400 font-bold text-base">
                <HeartHandshake className="w-6 h-6" />
                <span>The Core Principle: Digital Mentorship, Not Stealth Spying</span>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Secret surveillance breaks down mutual trust between parents and children. When children discover hidden spyware on their devices, they inevitably feel violated and seek drastic workarounds—such as using hidden secondary phones, clearing browser caches, running unauthorized VPNs, or installing secretive vault apps. Transparent parental supervision, by contrast, establishes digital boundaries through mutual agreement and clear family safety guidelines.
              </p>
            </div>

            <h3 className="font-heading font-bold text-xl text-slate-900 pt-2">
              Comparing Transparent Parental Control vs. Covert Spyware
            </h3>

            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-xs sm:text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                    <th className="p-4">Feature / Metric</th>
                    <th className="p-4 text-emerald-700 bg-emerald-50/50">TrackMasterTool (Transparent Supervision)</th>
                    <th className="p-4 text-red-700 bg-red-50/50">Covert Spyware / Stalkerware</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr>
                    <td className="p-4 font-semibold text-slate-900">Child Knowledge & Consent</td>
                    <td className="p-4 bg-emerald-50/20 text-emerald-800 font-medium">Explicit onboarding with clear safety agreement</td>
                    <td className="p-4 bg-red-50/20 text-red-800 font-medium">Hidden background execution without notice</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-900">Primary Objective</td>
                    <td className="p-4">Protect minors & guide healthy digital habits</td>
                    <td className="p-4">Stealth monitoring, keylogging, credential harvesting</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-900">Legal Compliance</td>
                    <td className="p-4 text-emerald-800 font-medium">100% Legal authorized family management</td>
                    <td className="p-4 text-red-800 font-medium">High risk of wiretapping & privacy law violations</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-900">Impact on Family Relationship</td>
                    <td className="p-4">Builds digital trust, communication & safety habits</td>
                    <td className="p-4">Destroys trust, causes resentment & deceptive workarounds</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-900">OS Security Compatibility</td>
                    <td className="p-4">Uses official Android Accessibility & Apple MDM/Screen Time APIs</td>
                    <td className="p-4">Requires rooting, jailbreaking, or disabling security protocols</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-3">
              <h4 className="font-heading font-bold text-lg text-slate-900">The 4 Pillars of Transparent Digital Parenting</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Full Disclosure:</strong> Inform your child that safety software is installed on their phone as a condition of receiving device privileges.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Clear Expectations:</strong> Explain exactly what metrics are monitored—such as screen time allowances, web filter alerts, and GPS location checking.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Gradual Freedom Milestones:</strong> Offer to relax specific app limits or web categories as your child demonstrates maturity and responsible digital behavior.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Non-Punitive Teaching Moments:</strong> Treat flagged websites or screen limit violations as opportunities for constructive conversation rather than immediate punishment.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 3 */}
          <section id="section-3" className="space-y-6 pt-6 border-t border-slate-100">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-bold uppercase">
              Section 3
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              3. Essential Pillars of Complete Phone Activity Monitoring
            </h2>
            <p>
              Effective phone supervision is not about reading every single text message or micro-managing every tap on the screen. True digital protection relies on <strong>five comprehensive safety pillars</strong> that safeguard physical security, online interactions, and mental well-being.
            </p>

            <div className="space-y-6">
              
              {/* Pillar 1 */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-purple-600 text-white font-bold flex items-center justify-center">1</div>
                  <h3 className="font-heading font-bold text-xl text-slate-900">Screen Time Management & Bedtime Schedules</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Excessive smartphone use directly compromises children's sleep quality and academic productivity. Parents can set daily usage budgets (e.g., 2 hours per day on school days) and enforce automatic bedtime lockouts. During bedtime hours, entertainment apps are disabled, while essential emergency phone calls remain accessible.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-semibold">
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-slate-700">Daily App Budgets</span>
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-slate-700">Bedtime Downtime Lock</span>
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-slate-700">Study Mode Whitelisting</span>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-purple-600 text-white font-bold flex items-center justify-center">2</div>
                  <h3 className="font-heading font-bold text-xl text-slate-900">App Usage Supervision & New Install Alerts</h3>
                </div>
                <p className="text-sm text-slate-600">
                  TrackMasterTool provides detailed breakdowns of time spent in each application. Whenever a child downloads a new application from the Google Play Store or Apple App Store, parents receive instant notifications on their management dashboard, allowing them to review app age ratings and approve or block the installation.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-semibold">
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-slate-700">Instant Install Notifications</span>
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-slate-700">One-Tap App Blocking</span>
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-slate-700">Category-Based Limits</span>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white font-bold flex items-center justify-center">3</div>
                  <h3 className="font-heading font-bold text-xl text-slate-900">Web Filtering & Search Engine Protection</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Web filtering blocks explicit content across all mobile web browsers (Chrome, Safari, Firefox, Edge). TrackMasterTool automatically enforces Google SafeSearch and Bing SafeSearch modes, while allowing parents to block specific content categories such as Adult Content, Gambling, Violent Media, or Unvetted Online Gaming.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-semibold">
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-slate-700">30+ Filter Categories</span>
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-slate-700">SafeSearch Enforcement</span>
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-slate-700">Custom URL Blacklist/Whitelist</span>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-600 text-white font-bold flex items-center justify-center">4</div>
                  <h3 className="font-heading font-bold text-xl text-slate-900">Real-Time GPS Tracking & Custom Geofences</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Know where your child is at any given moment. TrackMasterTool delivers live GPS pinpoints on an interactive map, complete with location movement history. Parents can set up custom Geofence safe zones (such as "Home", "School", or "Soccer Practice") and receive instant entry and exit push alerts.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-semibold">
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-slate-700">Live Map Coordinates</span>
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-slate-700">Geofence Safe Zone Alerts</span>
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-slate-700">Route Location History</span>
                </div>
              </div>

              {/* Pillar 5 */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-rose-600 text-white font-bold flex items-center justify-center">5</div>
                  <h3 className="font-heading font-bold text-xl text-slate-900">Contact Oversight & Instant Messaging Safety</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Instant messaging applications like Viber, WhatsApp, and Telegram are standard communication channels for modern youth. Supervising contact lists and receiving alerts when unknown numbers contact your child prevents predatory grooming and unwanted stranger interactions.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-semibold">
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-slate-700">Unknown Contact Alerts</span>
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-slate-700">Messaging Time Limits</span>
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-slate-700">Unvetted App Lockout</span>
                </div>
              </div>

            </div>

            <div className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <div className="relative w-full h-72 sm:h-96 bg-slate-100">
                <Image 
                  src="/images/blog/viber_safety.jpg" 
                  alt="Supervising instant messaging apps like Viber for child online safety"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
              <div className="p-4 bg-slate-900 text-white text-xs sm:text-sm font-medium">
                <span className="font-bold text-emerald-400">Figure 3.1:</span> Managing messaging platforms like Viber and WhatsApp ensures children communicate safely with known friends while remaining shielded from stranger outreach and harmful web links.
              </div>
            </div>
          </section>

          {/* SECTION 4 */}
          <section id="section-4" className="space-y-6 pt-6 border-t border-slate-100">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-bold uppercase">
              Section 4
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              4. Comparing Built-in OS Controls (Apple Screen Time & Google Family Link) vs TrackMasterTool
            </h2>
            <p>
              Many parents wonder: <em>"Can't I just use Apple Screen Time or Google Family Link for free?"</em> While native operating system controls provide a basic starting point, they have significant architectural limitations—especially in multi-device households where parents and children use different mobile operating systems.
            </p>

            <h3 className="font-heading font-bold text-xl text-slate-900 pt-2">
              Comprehensive Feature Comparison Matrix
            </h3>

            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-xs sm:text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white font-bold">
                    <th className="p-4">Parental Feature</th>
                    <th className="p-4 bg-slate-800">Apple Screen Time</th>
                    <th className="p-4 bg-slate-800">Google Family Link</th>
                    <th className="p-4 bg-purple-600 text-white">TrackMasterTool</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                  <tr>
                    <td className="p-4 font-semibold text-slate-900">Cross-Platform (Android Parent / iOS Child)</td>
                    <td className="p-4 text-red-600 font-medium">No (Requires Apple ID ecosystem)</td>
                    <td className="p-4 text-amber-600 font-medium">Partial (Limited features on iOS)</td>
                    <td className="p-4 font-bold text-emerald-600 bg-emerald-50/50">Full Cross-Platform Support</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-900">Web Filtering & Category Controls</td>
                    <td className="p-4 text-slate-600">Basic Adult Content Filter</td>
                    <td className="p-4 text-slate-600">Basic SafeSearch Filter</td>
                    <td className="p-4 font-bold text-emerald-600 bg-emerald-50/50">30+ Categories & Real-time URL Block</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-900">Real-Time GPS Location Tracking</td>
                    <td className="p-4 text-slate-600">Via Find My App (Separate)</td>
                    <td className="p-4 text-slate-600">Basic Location Updates</td>
                    <td className="p-4 font-bold text-emerald-600 bg-emerald-50/50">Live Coordinates & Custom Geofences</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-900">Anti-Tamper Uninstallation Protection</td>
                    <td className="p-4 text-amber-600">Passcode easily bypassed by teens</td>
                    <td className="p-4 text-slate-600">Requires Google Passcode</td>
                    <td className="p-4 font-bold text-emerald-600 bg-emerald-50/50">Admin Lockout Shield</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-900">Detailed App & Web Usage Analytics</td>
                    <td className="p-4 text-slate-600">Basic Graphs (7-day window)</td>
                    <td className="p-4 text-slate-600">Basic Weekly Summary</td>
                    <td className="p-4 font-bold text-emerald-600 bg-emerald-50/50">In-Depth Reports & Exportable Logs</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-900">Transparent Safety Agreement Dashboard</td>
                    <td className="p-4 text-red-600">No</td>
                    <td className="p-4 text-red-600">No</td>
                    <td className="p-4 font-bold text-emerald-600 bg-emerald-50/50">Included Family Trust Portal</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-4">
              <h4 className="font-heading font-bold text-lg text-slate-900">Why a Dedicated Parental Control Tool like TrackMasterTool is Superior</h4>
              <p>
                Native OS controls often suffer from "ecosystem lock-in." If a mother uses an Android phone and her teenager has an iPad or iPhone, Apple Screen Time cannot be easily managed remotely from the mother's Android device. Furthermore, teenagers quickly discover online tutorials showing how to bypass built-in OS passcodes by changing time zones, clearing app caches, or using third-party browser plugins.
              </p>
              <p>
                <strong>TrackMasterTool</strong> bridges this gap by providing a unified web dashboard accessible from any browser on any phone, tablet, or desktop. It operates seamlessly across Android and iOS, enforcing robust web filters, live location tracking, app budgets, and anti-tamper security that teenagers cannot bypass.
              </p>
            </div>
          </section>

          {/* SECTION 5 */}
          <section id="section-5" className="space-y-6 pt-6 border-t border-slate-100">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-bold uppercase">
              Section 5
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              5. Step-by-Step Setup Guide for Android and iOS
            </h2>
            <p>
              Setting up TrackMasterTool on your family's devices is quick, straightforward, and transparent. Follow this step-by-step onboarding guide to activate complete protection in under 10 minutes.
            </p>

            <div className="space-y-4">
              
              {/* Step 1 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-purple-600 text-white font-bold flex items-center justify-center flex-shrink-0 text-lg">
                  1
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-base">Select Subscription Plan & Create Parent Account</h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Visit the <Link href="/pricing" className="text-purple-600 font-bold hover:underline">TrackMasterTool Pricing Page</Link> and choose a subscription plan: <strong>2 Months ($30)</strong>, <strong>6 Months ($50)</strong>, or <strong>Lifetime ($100)</strong>. Complete account registration to gain instant access to your centralized Parent Dashboard.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-purple-600 text-white font-bold flex items-center justify-center flex-shrink-0 text-lg">
                  2
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-base">Have the Digital Safety Conversation with Your Child</h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Sit down with your child before installing the software. Explain that the app is installed to keep them safe from online hazards, manage screen balance, and provide emergency GPS tracking. Review the family agreement rules together.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-purple-600 text-white font-bold flex items-center justify-center flex-shrink-0 text-lg">
                  3
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-base">Install TrackMaster Companion App on Child's Device</h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Download the TrackMaster companion app on your child's Android or iOS device. Open the app and log in using your authorized parent credentials or pair the device via QR code scan.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-purple-600 text-white font-bold flex items-center justify-center flex-shrink-0 text-lg">
                  4
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-base">Grant Necessary System Safety Permissions</h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Follow the step-by-step permissions wizard. On Android, enable Accessibility Services, Location Access, and Device Admin status. On iOS, approve the Mobile Device Management / Screen Time API profile to enable web filtering and app controls.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-purple-600 text-white font-bold flex items-center justify-center flex-shrink-0 text-lg">
                  5
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-base">Configure Rules & Geofence Zones in Parent Dashboard</h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Log in to your Parent Dashboard from any phone or browser. Set up daily screen time limits, block undesirable web categories, set bedtime lockouts, and draw geofence zones around home, school, and sports facilities.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* SECTION 6 */}
          <section id="section-6" className="space-y-6 pt-6 border-t border-slate-100">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-bold uppercase">
              Section 6
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              6. Age-Appropriate Phone Safety Rules & Family Device Agreements
            </h2>
            <p>
              Children of different ages require different levels of supervision. A 7-year-old using a tablet for educational games requires strict whitelisting, whereas a 16-year-old preparing for college needs space to build self-regulation skills under light oversight.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              
              {/* Group 1 */}
              <div className="p-6 rounded-2xl bg-purple-50/70 border border-purple-200 space-y-3">
                <div className="px-3 py-1 rounded-md bg-purple-600 text-white text-xs font-bold w-fit">
                  Ages 6 to 10
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900">Young Children</h3>
                <ul className="text-xs text-slate-600 space-y-2">
                  <li>• <strong>Screen Limit:</strong> Max 1 hour/day entertainment screen time.</li>
                  <li>• <strong>Social Media:</strong> Zero social media accounts permitted.</li>
                  <li>• <strong>Web Access:</strong> Whitelist-only educational browsing.</li>
                  <li>• <strong>Device Charging:</strong> Phone remains in kitchen charging dock overnight.</li>
                  <li>• <strong>Supervision:</strong> 100% parental approval for new app installs.</li>
                </ul>
              </div>

              {/* Group 2 */}
              <div className="p-6 rounded-2xl bg-purple-50/70 border border-purple-200 space-y-3">
                <div className="px-3 py-1 rounded-md bg-purple-600 text-white text-xs font-bold w-fit">
                  Ages 11 to 14
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900">Pre-Teens & Tweens</h3>
                <ul className="text-xs text-slate-600 space-y-2">
                  <li>• <strong>Screen Limit:</strong> 2 hours/day on school days; bedtime lock at 8:30 PM.</li>
                  <li>• <strong>Messaging:</strong> Approved messaging with known friends only.</li>
                  <li>• <strong>Web Access:</strong> Strict category blocking (Adult, Gambling, Violence).</li>
                  <li>• <strong>Location:</strong> Geofence alerts for home and school arrival.</li>
                  <li>• <strong>Review:</strong> Weekly digital health review with parents.</li>
                </ul>
              </div>

              {/* Group 3 */}
              <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-3">
                <div className="px-3 py-1 rounded-md bg-emerald-600 text-white text-xs font-bold w-fit">
                  Ages 15 to 18
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900">Teenagers</h3>
                <ul className="text-xs text-slate-600 space-y-2">
                  <li>• <strong>Screen Limit:</strong> Self-regulated with 10:30 PM sleep downtime lock.</li>
                  <li>• <strong>Social Media:</strong> Active accounts under mutual safety ground rules.</li>
                  <li>• <strong>Web Access:</strong> SafeSearch & phishing protection enabled.</li>
                  <li>• <strong>Location:</strong> GPS sharing for emergency safety and travel transit.</li>
                  <li>• <strong>Independence:</strong> Monthly milestones for responsible behavior.</li>
                </ul>
              </div>

            </div>

            {/* Family Agreement Checklist Box */}
            <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4 shadow-md">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-base">
                <CheckSquare className="w-5 h-5" />
                <span>Sample Printable Family Smartphone Safety Contract</span>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm">
                Copy or print this agreement to set clear, transparent expectations before giving your child a mobile device:
              </p>
              <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 text-xs font-mono space-y-2 text-slate-200">
                <p>1. I understand that my phone is owned by my parents and provided for my safety and learning.</p>
                <p>2. TrackMasterTool is installed to protect me from online risks, and I will not try to disable or remove it.</p>
                <p>3. I will turn in my phone at designated bedtime hours and avoid late-night scrolling.</p>
                <p>4. I will never share my personal address, phone number, or passwords with strangers online.</p>
                <p>5. If I encounter hurtful content or unknown contacts, I will immediately tell my parents without fear of losing phone privileges.</p>
              </div>
            </div>
          </section>

          {/* SECTION 7 - FAQS */}
          <section id="section-7" className="space-y-6 pt-6 border-t border-slate-100">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-bold uppercase">
              Section 7
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              7. Frequently Asked Questions (FAQs)
            </h2>

            <div className="space-y-4">
              
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  Is it legal and ethical to monitor my child's phone activity?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 pl-7">
                  Yes. As a parent or legal guardian, you have both a legal right and a moral duty to protect your minor children from digital harms, predatory outreach, and dangerous content. TrackMasterTool advocates for transparent supervision where children are fully informed about safety monitoring.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  Can my child bypass or uninstall TrackMasterTool?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 pl-7">
                  TrackMasterTool includes built-in anti-tamper security shields. Deleting or disabling the app on Android or iOS requires parental account credentials and admin password verification, preventing children from stealthily bypassing protections.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  Should I tell my child that I am monitoring their phone?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 pl-7">
                  Yes, absolutely. Open disclosure builds mutual trust and accountability. When you explain that safety software functions like digital training wheels to protect them, children view monitoring as a protective measure rather than an invasion of privacy.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  How does TrackMasterTool differ from illegal spy software?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 pl-7">
                  TrackMasterTool is explicit, consent-verified family safety software. We strictly prohibit hidden spying on adults or spouses, keylogging, password theft, and stalkerware practices. Our app is designed exclusively for authorized parental control of minor children.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  Can TrackMasterTool monitor instant messaging apps like WhatsApp and Viber?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 pl-7">
                  Yes. TrackMasterTool provides comprehensive app time limits, bedtime lockouts, unknown contact notifications, and installation controls for popular instant messaging platforms including WhatsApp, Viber, Telegram, and Messenger.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  Does phone activity monitoring work across different operating systems?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 pl-7">
                  Yes! TrackMasterTool features true cross-platform functionality. Parents using Android smartphones can effortlessly manage children using iPhones or iPads, and vice-versa, through a single web dashboard.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  Will monitoring software slow down my child's device or drain the battery?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 pl-7">
                  No. TrackMasterTool companion software is lightweight and engineered for background efficiency, consuming less than 1% CPU overhead and negligible battery resources.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  What should I do if TrackMasterTool flags inappropriate content or unknown contact activity?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 pl-7">
                  Treat the alert as a constructive teaching moment. Sit down with your child, review the flagged item without escalating into immediate anger, explain the potential digital risks, and reinforce your family safety rules.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  How much does TrackMasterTool cost and is there a lifetime option?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 pl-7">
                  TrackMasterTool offers flexible, transparent pricing with no hidden fees: <strong>$30 for 2 Months</strong>, <strong>$50 for 6 Months</strong>, and a popular <strong>$100 Lifetime Access</strong> plan with zero monthly subscriptions.
                </p>
              </div>

            </div>
          </section>

          {/* HIGH CONVERTING CTA CARD */}
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white text-center space-y-6 shadow-2xl relative overflow-hidden border border-slate-800">
            <div className="absolute -right-12 -top-12 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
              <Zap className="w-4 h-4 text-purple-400" /> Start Protecting Your Child Today
            </div>

            <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-tight">
              Ready to Establish Balanced Digital Safety for Your Family?
            </h3>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Join thousands of modern parents who rely on TrackMasterTool to manage screen time, block web hazards, track real-time location, and foster digital trust.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto pt-2 text-xs">
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="block text-slate-400 font-medium">Starter Pack</span>
                <span className="text-xl font-bold text-white">$30</span>
                <span className="block text-slate-400 text-[11px]">2 Months Coverage</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/80 border border-purple-500/50 relative">
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-purple-600 text-[10px] font-bold text-white px-2 py-0.5 rounded-full">POPULAR</span>
                <span className="block text-slate-400 font-medium">Standard Pack</span>
                <span className="text-xl font-bold text-white">$50</span>
                <span className="block text-slate-400 text-[11px]">6 Months Coverage</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/80 border border-emerald-500/50">
                <span className="block text-emerald-400 font-medium">Best Value</span>
                <span className="text-xl font-bold text-white">$100</span>
                <span className="block text-slate-400 text-[11px]">Lifetime Access</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/pricing" 
                className="w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-500 font-bold rounded-2xl text-white text-base shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center gap-2 group"
              >
                <span>View All Pricing Plans</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/dashboard" 
                className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 font-semibold rounded-2xl text-slate-200 text-base border border-slate-700 transition-colors flex items-center justify-center"
              >
                <span>Explore Live Demo</span>
              </Link>
            </div>

            <div className="pt-2 text-slate-400 text-xs flex items-center justify-center gap-4">
              <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-emerald-400" /> Instant Activation</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-emerald-400" /> Cross-Platform Android & iOS</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-emerald-400" /> No Hidden Fees</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
