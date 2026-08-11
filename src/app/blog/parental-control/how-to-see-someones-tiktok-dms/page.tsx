import React from 'react';
import Link from 'next/link';
import { 
  Shield, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Lock, 
  Eye, 
  HeartHandshake, 
  User, 
  Smartphone, 
  XCircle, 
  Info, 
  HelpCircle, 
  ChevronDown, 
  Award, 
  Zap, 
  Check, 
  AlertCircle,
  MessageSquare,
  Sparkles,
  FileText,
  Sliders,
  Users,
  Settings,
  Ban,
  BookOpen,
  LockKeyhole,
  ExternalLink
} from 'lucide-react';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: "How to See Someone's TikTok DMs: Complete Parents Guide (2026)",
  description: "Learn how parents can supervise TikTok direct messaging, configure native TikTok Family Pairing, set screen time rules, and keep teens safe with TrackMasterTool.",
  canonical: "https://trackmastertool.vercel.app/blog/parental-control/how-to-see-someones-tiktok-dms",
});

export default function HowToSeeTikTokDMsPage() {
  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: "How to See Someone's TikTok DMs: Complete Parents Guide (2026)",
    description: "Comprehensive guide for parents seeking ethical, transparent, and effective ways to monitor TikTok direct messages, mitigate online risks, configure TikTok Family Pairing, and enforce healthy screen time habits.",
    author: {
      '@type': 'Organization',
      name: 'TrackMaster Editorial Team',
      url: 'https://trackmastertool.vercel.app',
    },
    publisher: {
      '@type': 'Organization',
      name: 'TrackMasterTool',
      logo: {
        '@type': 'ImageObject',
        url: 'https://trackmastertool.vercel.app/logo.png',
      },
    },
    datePublished: '2026-08-10',
    dateModified: '2026-08-10',
    mainEntityOfPage: 'https://trackmastertool.vercel.app/blog/parental-control/how-to-see-someones-tiktok-dms',
  };

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can parents see deleted TikTok DMs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Native TikTok tools do not store deleted messages once removed from both accounts. However, parents using authorized family device management can review screen time activity logs and enforce account privacy settings to prevent unauthorized private messaging.',
        },
      },
      {
        '@type': 'Question',
        name: "Is it legal for parents to monitor their minor child's TikTok account?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Parents and legal guardians have the legal right and responsibility to supervise digital devices and online accounts used by minor children under their care, provided it complies with local child safety regulations.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why does TikTok restrict direct messaging for users under 16?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TikTok automatically disables Direct Messaging for registered accounts between ages 13 and 15 as a safety safeguard against online predators, cyberbullying, unsolicited media, and unvetted contact from strangers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can strangers send dangerous links or malware through TikTok DMs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Scammers and bad actors frequently use direct messages to distribute phishing URLs, fraudulent giveaway links, malware downloads, or off-platform redirection requests.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between secret spy apps and TrackMasterTool?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Secret spy apps operate covertly, often violating legal consent, privacy standards, and platform security rules. TrackMasterTool operates 100% transparently as authorized family safety software, focusing on open communication, screen time budgets, app management, and bedtime protection.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does TikTok Family Pairing complement TrackMasterTool?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TikTok Family Pairing controls in-app settings such as DM privacy, search restrictions, and comment filtering. TrackMasterTool works at the system level to enforce strict daily app time limits, lock TikTok during bedtime, block unapproved web links, and provide comprehensive device safety metrics.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can teenagers bypass TikTok Family Pairing or parental controls?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If a teen unlinks Family Pairing, the parent receives an immediate notification. Combining in-app Family Pairing with system-level software like TrackMasterTool prevents teens from uninstalling software or overriding device safety rules without parental credentials.',
        },
      },
      {
        '@type': 'Question',
        name: 'What steps should I take if my child receives an inappropriate DM?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Immediately screenshot the message for evidence, block and report the account directly within TikTok, adjust the DM privacy setting to Friends Only or No One, and report serious threats to local enforcement or internet child safety authorities.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which TrackMasterTool subscription plan offers the best value for families?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TrackMasterTool offers three transparent subscription tiers: 2 Months ($30), 6 Months ($50), and Lifetime Access ($100). The Lifetime plan provides the best value for long-term child safety and device supervision.',
        },
      },
    ],
  };

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
          <Link href="/" className="hover:text-purple-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-purple-600 transition-colors">Blog</Link>
          <span>/</span>
          <Link href="/blog/parental-control" className="hover:text-purple-600 transition-colors">Parental Control</Link>
          <span>/</span>
          <span className="text-purple-600 font-semibold truncate">How to See Someone's TikTok DMs</span>
        </nav>

        {/* Article Header Header Card */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm mb-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-wider">
            <Shield className="w-4 h-4 text-purple-600" /> Authorized Parental Supervision Guide (2026)
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            How to See Someone's TikTok DMs: A Responsible Parent's Safety Guide (2026)
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            TikTok is one of the most widely used entertainment and communication platforms among teenagers today. However, direct messaging features inside TikTok present real risks—from online predators and dangerous viral challenges to cyberbullying and inappropriate content. Learn how parents can supervise TikTok direct messages ethically, enforce built-in Family Pairing, configure system-level controls with TrackMasterTool, and foster digital safety built on trust.
          </p>

          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                TM
              </div>
              <div>
                <span className="font-bold text-slate-900 text-sm block">TrackMaster Editorial Team</span>
                <span className="text-[11px] text-slate-500 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-500" /> Fact-Checked & Reviewed by Child Safety Experts
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-slate-500">
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-slate-400" /> 14 min read</span>
              <span>•</span>
              <span>Updated: August 10, 2026</span>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl mb-12 shadow-md space-y-4">
          <div className="font-heading font-bold text-base uppercase tracking-wider flex items-center gap-2.5 text-purple-400">
            <BookOpen className="w-5 h-5" /> Article Table of Contents
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300 font-medium pt-2">
            <li>
              <a href="#section-1" className="hover:text-purple-400 flex items-center gap-2 py-1 transition-colors">
                <span className="w-5 h-5 rounded-full bg-slate-800 text-purple-400 flex items-center justify-center text-xs font-bold">1</span>
                <span>The Online Risks of TikTok Direct Messaging for Minors</span>
              </a>
            </li>
            <li>
              <a href="#section-2" className="hover:text-purple-400 flex items-center gap-2 py-1 transition-colors">
                <span className="w-5 h-5 rounded-full bg-slate-800 text-purple-400 flex items-center justify-center text-xs font-bold">2</span>
                <span>Myth vs. Reality: Secret Spying vs. Ethical Parental Control</span>
              </a>
            </li>
            <li>
              <a href="#section-3" className="hover:text-purple-400 flex items-center gap-2 py-1 transition-colors">
                <span className="w-5 h-5 rounded-full bg-slate-800 text-purple-400 flex items-center justify-center text-xs font-bold">3</span>
                <span>Transparent Safety Controls via TrackMasterTool</span>
              </a>
            </li>
            <li>
              <a href="#section-4" className="hover:text-purple-400 flex items-center gap-2 py-1 transition-colors">
                <span className="w-5 h-5 rounded-full bg-slate-800 text-purple-400 flex items-center justify-center text-xs font-bold">4</span>
                <span>Configuring TikTok Built-in Family Pairing Controls</span>
              </a>
            </li>
            <li>
              <a href="#section-5" className="hover:text-purple-400 flex items-center gap-2 py-1 transition-colors">
                <span className="w-5 h-5 rounded-full bg-slate-800 text-purple-400 flex items-center justify-center text-xs font-bold">5</span>
                <span>Step-by-Step Onboarding & Setup Guide for Parents</span>
              </a>
            </li>
            <li>
              <a href="#section-6" className="hover:text-purple-400 flex items-center gap-2 py-1 transition-colors">
                <span className="w-5 h-5 rounded-full bg-slate-800 text-purple-400 flex items-center justify-center text-xs font-bold">6</span>
                <span>Recommended Age Limits & Parental Safety Checklist</span>
              </a>
            </li>
            <li>
              <a href="#section-7" className="hover:text-purple-400 flex items-center gap-2 py-1 transition-colors">
                <span className="w-5 h-5 rounded-full bg-slate-800 text-purple-400 flex items-center justify-center text-xs font-bold">7</span>
                <span>Frequently Asked Questions (9 Comprehensive FAQs)</span>
              </a>
            </li>
          </ol>
        </div>

        {/* Article Body */}
        <div className="bg-white p-8 sm:p-14 rounded-3xl border border-slate-200 shadow-sm space-y-14 text-slate-700 leading-relaxed font-sans">
          
          {/* Section 1 */}
          <section id="section-1" className="space-y-6 scroll-mt-10">
            <div className="space-y-2">
              <span className="text-xs font-bold text-purple-600 uppercase tracking-widest block">Section 1</span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                1. The Online Risks of TikTok Direct Messaging for Minors
              </h2>
            </div>
            
            <p>
              TikTok has evolved beyond a short-form video entertainment platform into a primary communication hub for adolescents worldwide. While watching viral dances, comedy skits, and educational tutorials can be harmless fun, the platform's Direct Messaging (DM) feature introduces significant digital exposure for young users.
            </p>
            <p>
              Unlike public video comments, direct messages take place behind closed digital doors. This private channel opens doors for harmful interactions if proper boundaries and parental controls are not active. Below are the primary safety concerns parents must understand regarding TikTok direct messaging:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
              <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-2.5">
                <div className="flex items-center gap-2.5 text-amber-900 font-bold text-base">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  <h3>Grooming & Predators</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Bad actors often scan popular video comment sections or search trending hashtags to identify vulnerable minors. Once contact is established, predators attempt to shift conversations into private DMs or third-party messaging apps where moderation is minimal.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-red-50/60 border border-red-200/80 space-y-2.5">
                <div className="flex items-center gap-2.5 text-red-900 font-bold text-base">
                  <Ban className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <h3>Dangerous Viral Challenges</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Teenagers frequently share unvetted video links and risky dare challenges via direct message. Peer pressure inside private group chats can push children into participating in dangerous physical or social stunts that they would otherwise avoid.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-purple-50/60 border border-purple-200/80 space-y-2.5">
                <div className="flex items-center gap-2.5 text-purple-900 font-bold text-base">
                  <MessageSquare className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <h3>Cyberbullying & Exclusion</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Direct message group chats can quickly become toxic breeding grounds for harassment, rumors, and deliberate social exclusion. Because DMs are hidden from public view, victims often suffer in silence out of fear of social retaliation.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-purple-50/60 border border-purple-200/80 space-y-2.5">
                <div className="flex items-center gap-2.5 text-purple-900 font-bold text-base">
                  <LockKeyhole className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <h3>Financial Scams & Phishing</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Scammers routinely target teenagers with direct messages promising free gaming currency (Robux, V-Bucks), fake gift cards, or account verification badges. These messages frequently contain phishing links designed to harvest personal information or compromise accounts.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Info className="w-5 h-5 text-purple-600" />
                The Impact on Teen Mental Health and Sleep
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Beyond acute safety threats, unmonitored late-night messaging leads to digital fatigue, heightened anxiety, and severe sleep deprivation. Constant notification pings keep the brain hyper-vigilant during hours that should be reserved for restorative sleep. Establishing structured digital boundaries is essential for protecting both physical health and emotional well-being.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="section-2" className="space-y-6 scroll-mt-10 pt-4 border-t border-slate-100">
            <div className="space-y-2">
              <span className="text-xs font-bold text-purple-600 uppercase tracking-widest block">Section 2</span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                2. Myth vs. Reality: Can You Secretly Spy on TikTok DMs?
              </h2>
            </div>

            <p>
              If you search online for <em>"how to see someone's TikTok DMs without them knowing"</em> or <em>"secret TikTok DM spy tools"</em>, you will encounter thousands of articles making bold claims. Promises of "one-click secret remote monitoring" or "untraceable password keyloggers" saturate search engines. However, parents must understand the critical technical, legal, and security realities behind these claims.
            </p>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2 text-red-600">
                  <XCircle className="w-5 h-5" /> The Myth of "Secret Remote TikTok Hacking"
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Modern mobile operating systems (iOS and Android) utilize advanced sandboxing, app encryption, and strict permission frameworks. TikTok encrypts data in transit between the client device and its secure servers. There is <strong>no legal technology</strong> that allows an external party to remotely read encrypted TikTok messages out of thin air simply by entering a username or phone number.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2 text-amber-800">
                  <AlertCircle className="w-5 h-5 text-amber-600" /> Beware of Online Scams & Malicious Stalkerware
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Websites that promise covert TikTok monitoring usually fall into two categories: <strong>survey scams</strong> designed to steal credit card details, or <strong>unauthorized stalkerware apps</strong> that install rootkits and spy payloads onto devices. Using such software compromises family data security, violates federal wiretapping laws, and exposes personal devices to malware.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2 text-emerald-800">
                  <HeartHandshake className="w-5 h-5 text-emerald-600" /> The TrackMasterTool Transparent Ethics Standard
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  TrackMasterTool rejects secret surveillance and illegal spy software. We advocate for <strong>transparent parental supervision</strong>. Effective child safety relies on open communication, mutual agreements, and authorized device management. When children understand <em>why</em> safety rules exist, they build healthier lifelong digital habits rather than attempting to covertly bypass software.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm text-left border-collapse rounded-xl overflow-hidden border border-slate-200">
                <thead className="bg-slate-100 text-slate-900 font-bold uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="p-4 border-b border-slate-200">Feature / Dimension</th>
                    <th className="p-4 border-b border-slate-200 text-red-600">Covert "Spyware" Apps</th>
                    <th className="p-4 border-b border-slate-200 text-emerald-600">TrackMasterTool Family Safety</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600">
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-semibold text-slate-900">User Consent</td>
                    <td className="p-4 text-red-600">Hidden / Covert (Creates mistrust)</td>
                    <td className="p-4 text-emerald-700 font-medium">100% Transparent & Authorized</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-semibold text-slate-900">Legal Compliance</td>
                    <td className="p-4 text-red-600">High Risk of Law Violations</td>
                    <td className="p-4 text-emerald-700 font-medium">Fully Legal Parental Control</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-semibold text-slate-900">Data Security</td>
                    <td className="p-4 text-red-600">Sells / Leaks Private Data</td>
                    <td className="p-4 text-emerald-700 font-medium">Bank-grade Encryption & Privacy</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-semibold text-slate-900">Core Approach</td>
                    <td className="p-4 text-red-600">Secret Remote Keylogging</td>
                    <td className="p-4 text-emerald-700 font-medium">Screen Time, App Rules, Bedtime Locks</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3 */}
          <section id="section-3" className="space-y-6 scroll-mt-10 pt-4 border-t border-slate-100">
            <div className="space-y-2">
              <span className="text-xs font-bold text-purple-600 uppercase tracking-widest block">Section 3</span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                3. Transparent TikTok Safety Controls via TrackMasterTool
              </h2>
            </div>

            <p>
              Rather than attempting covert interception, parents can achieve robust digital protection by combining TikTok's native settings with <strong>TrackMasterTool</strong>'s comprehensive family safety suite. TrackMasterTool equips parents with device-level controls that regulate app accessibility, enforce sleep schedules, and monitor general device usage patterns.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Daily TikTok Time Budgets</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Set precise daily usage allowances for TikTok (e.g., 45 minutes on weekdays, 90 minutes on weekends). Once the budget expires, TrackMasterTool automatically blocks app execution for the remainder of the day.
                </p>
              </div>

              <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Bedtime & Study Downtime Schedules</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Prevent late-night scrolling and private DM sessions under the covers. Program automated downtime windows (e.g., 9:00 PM to 7:00 AM) during which entertainment apps remain completely locked.
                </p>
              </div>

              <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Restricted Web Content & Phishing Defense</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Block malicious web domains, adult web portals, and unvetted URLs. Even if a teen receives a suspicious link inside a TikTok DM, TrackMasterTool prevents the browser from opening harmful sites.
                </p>
              </div>

              <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Transparent Activity & Notification Logs</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Receive detailed daily reports showing screen time distribution across apps, newly installed applications, system changes, and overall device usage trends from your unified dashboard.
                </p>
              </div>
            </div>

            {/* Image 1 */}
            <div className="my-8 rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-900">
              <img 
                src="/images/blog/phone_monitoring.jpg" 
                alt="TrackMasterTool Parental Control Supervision Dashboard on Smartphone" 
                className="w-full h-auto object-cover max-h-[420px]"
              />
              <div className="p-4 bg-slate-900 text-slate-300 text-xs sm:text-sm text-center border-t border-slate-800 italic">
                Figure 1: TrackMasterTool Parental Supervision Dashboard — View daily screen time budgets, enforce bedtime app locks, and analyze app category metrics in real time.
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="section-4" className="space-y-6 scroll-mt-10 pt-4 border-t border-slate-100">
            <div className="space-y-2">
              <span className="text-xs font-bold text-purple-600 uppercase tracking-widest block">Section 4</span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                4. Configuring TikTok Built-in Family Pairing Controls
              </h2>
            </div>

            <p>
              TikTok includes a robust native feature set called <strong>Family Pairing</strong>. This feature allows a parent to link their personal TikTok account directly to their teenager's account to manage privacy parameters remotely. Here is a breakdown of how to maximize Family Pairing settings:
            </p>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-purple-50/50 border border-purple-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-purple-600" /> Direct Message Restrictions
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Inside Family Pairing, parents can choose who is allowed to send direct messages to their teen: <strong>Everyone</strong>, <strong>Friends Only</strong> (accounts your teen follows back), or <strong>No One</strong>. Note that TikTok automatically sets DMs to "No One" for accounts registered to users under age 16.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-purple-50/50 border border-purple-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <Eye className="w-5 h-5 text-purple-600" /> Account Privacy & Search Visibility
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Parents can enforce a <strong>Private Account</strong> setting so that only approved followers can view videos, likes, and follower lists. You can also toggle off <em>"Suggest account to others"</em> to prevent strangers from discovering your child's profile via contacts or mutual connections.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-purple-50/50 border border-purple-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <Ban className="w-5 h-5 text-purple-600" /> Keyword & Content Filters (Restricted Mode)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Filter out mature, graphic, or inappropriate content from the "For You" feed and search results. Parents can also add custom keyword blocklists so that videos or hashtags containing specific words are excluded.
                </p>
              </div>
            </div>

            {/* Image 2 */}
            <div className="my-8 rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-900">
              <img 
                src="/images/blog/tiktok_controls.jpg" 
                alt="TikTok Family Pairing Settings and Privacy Management Interface" 
                className="w-full h-auto object-cover max-h-[420px]"
              />
              <div className="p-4 bg-slate-900 text-slate-300 text-xs sm:text-sm text-center border-t border-slate-800 italic">
                Figure 2: TikTok Family Pairing Interface — Manage account privacy, restrict direct messaging to friends only, and enable keyword content filters.
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="section-5" className="space-y-6 scroll-mt-10 pt-4 border-t border-slate-100">
            <div className="space-y-2">
              <span className="text-xs font-bold text-purple-600 uppercase tracking-widest block">Section 5</span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                5. Step-by-Step Setup Guide for Parents
              </h2>
            </div>

            <p>
              Follow this step-by-step setup walkthrough to implement a multi-layered digital protection system combining TikTok's native settings and TrackMasterTool's device-level safety features.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-extrabold flex items-center justify-center flex-shrink-0 text-sm">
                  1
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-base">Establish a Family Digital Safety Agreement</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Sit down with your teenager to discuss online safety, privacy risks, and responsible messaging. Explain clearly why parental controls are being configured: to protect them from harm, not to invade their personal trust.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-extrabold flex items-center justify-center flex-shrink-0 text-sm">
                  2
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-base">Choose Your TrackMasterTool Subscription Plan</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Visit the pricing page and select the plan that fits your family's needs: <strong>2 Months ($30)</strong>, <strong>6 Months ($50)</strong>, or <strong>Lifetime Access ($100)</strong>. Complete secure checkout.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-extrabold flex items-center justify-center flex-shrink-0 text-sm">
                  3
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-base">Install TrackMasterTool on Authorized Device</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Download and configure TrackMasterTool on your teen's Android or iOS device. Set up daily screen time quotas, web content filters, and automated bedtime app locks.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-extrabold flex items-center justify-center flex-shrink-0 text-sm">
                  4
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-base">Connect TikTok Family Pairing</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Open TikTok on your phone and your teen's phone. Navigate to <strong>Settings & Privacy &gt; Family Pairing</strong>. Scan the QR code on your teen's device to link the accounts.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-extrabold flex items-center justify-center flex-shrink-0 text-sm">
                  5
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-base">Restrict DM Permissions & Account Privacy</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under Family Pairing, set Direct Messages to <em>"Friends Only"</em> or <em>"No One"</em>. Turn on Restricted Mode and enable Private Account mode.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-extrabold flex items-center justify-center flex-shrink-0 text-sm">
                  6
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-base">Conduct Weekly Check-Ins</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Review weekly activity logs together in the TrackMasterTool dashboard. Use usage reports as conversation starters to praise responsible digital behavior.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="section-6" className="space-y-6 scroll-mt-10 pt-4 border-t border-slate-100">
            <div className="space-y-2">
              <span className="text-xs font-bold text-purple-600 uppercase tracking-widest block">Section 6</span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                6. Recommended Social Media Age Limits & Parent Checklist
              </h2>
            </div>

            <p>
              Different social platforms present varying degrees of risk regarding direct messaging and stranger contact. The comparative matrix below outlines minimum age rules, messaging policies, and safety ratings for top social apps:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm text-left border-collapse rounded-xl overflow-hidden border border-slate-200">
                <thead className="bg-slate-100 text-slate-900 font-bold uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="p-3.5 border-b border-slate-200">Platform</th>
                    <th className="p-3.5 border-b border-slate-200">Min. Age</th>
                    <th className="p-3.5 border-b border-slate-200">Default DM Settings</th>
                    <th className="p-3.5 border-b border-slate-200">Native Controls</th>
                    <th className="p-3.5 border-b border-slate-200">Safety Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600">
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900">TikTok</td>
                    <td className="p-3.5">13+</td>
                    <td className="p-3.5 text-emerald-700 font-medium">Disabled under 16</td>
                    <td className="p-3.5">Family Pairing</td>
                    <td className="p-3.5 font-bold text-amber-600">Moderate Risk</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900">Instagram</td>
                    <td className="p-3.5">13+</td>
                    <td className="p-3.5">Restricted adult DMs to teens</td>
                    <td className="p-3.5">Meta Family Center</td>
                    <td className="p-3.5 font-bold text-amber-600">Moderate Risk</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900">Snapchat</td>
                    <td className="p-3.5">13+</td>
                    <td className="p-3.5">Friends Only by default</td>
                    <td className="p-3.5">Family Center</td>
                    <td className="p-3.5 font-bold text-red-600">High Risk (Ephemerality)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900">Discord</td>
                    <td className="p-3.5">13+</td>
                    <td className="p-3.5">Open Server DMs enabled</td>
                    <td className="p-3.5">Family Center</td>
                    <td className="p-3.5 font-bold text-red-600">High Risk (Unvetted Servers)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900">WhatsApp</td>
                    <td className="p-3.5">13+</td>
                    <td className="p-3.5">Open to contact list</td>
                    <td className="p-3.5">Privacy & Group Controls</td>
                    <td className="p-3.5 font-bold text-emerald-600">Low/Moderate Risk</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-6 rounded-2xl bg-purple-50/60 border border-purple-200 space-y-4">
              <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-600" /> The 10-Point Parental Social Safety Checklist
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Verify official birth date on account creation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Toggle profile privacy to "Private Account".</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Set Direct Messaging to "Friends Only" or "No One".</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Enable TikTok Restricted Mode for content filtering.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Link accounts using TikTok Family Pairing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Install TrackMasterTool for system-level budgets.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Enforce nightly phone charging in a central living room area.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Disable location sharing in video posts & bio.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Discuss risks of sharing personal media with online contacts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Maintain an open, judgment-free policy for reporting threats.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
              <h3 className="font-bold text-amber-900 text-base flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" /> Behavioral Red Flags to Watch For
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Be attentive if your teen suddenly hides their phone screen when you walk into the room, receives excessive late-night notifications, shows sudden mood swings or anxiety after messaging sessions, or creates secret secondary accounts ("finstas"). These signs warrant a calm, supportive conversation about digital boundaries.
              </p>
            </div>
          </section>

          {/* Section 7 - FAQs */}
          <section id="section-7" className="space-y-6 scroll-mt-10 pt-4 border-t border-slate-100">
            <div className="space-y-2">
              <span className="text-xs font-bold text-purple-600 uppercase tracking-widest block">Section 7</span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                7. Frequently Asked Questions (FAQs)
              </h2>
            </div>

            <div className="space-y-4">
              <details className="group border border-slate-200 rounded-2xl bg-slate-50 overflow-hidden transition-all">
                <summary className="flex items-center justify-between p-5 font-bold cursor-pointer list-none text-slate-900 hover:bg-slate-100/70 transition-colors text-sm sm:text-base">
                  <span>1. Can parents see deleted TikTok DMs?</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60">
                  Native TikTok servers do not store messages once they have been deleted by users. However, parents using TrackMasterTool can monitor app screen time, receive alert logs for newly installed communication apps, and restrict unapproved private messaging entirely.
                </div>
              </details>

              <details className="group border border-slate-200 rounded-2xl bg-slate-50 overflow-hidden transition-all">
                <summary className="flex items-center justify-between p-5 font-bold cursor-pointer list-none text-slate-900 hover:bg-slate-100/70 transition-colors text-sm sm:text-base">
                  <span>2. Is it legal for parents to monitor their minor child's TikTok account?</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60">
                  Yes. In almost all legal jurisdictions, parents and legal guardians hold full legal responsibility and authority to supervise digital devices and software used by minor children under 18 years of age.
                </div>
              </details>

              <details className="group border border-slate-200 rounded-2xl bg-slate-50 overflow-hidden transition-all">
                <summary className="flex items-center justify-between p-5 font-bold cursor-pointer list-none text-slate-900 hover:bg-slate-100/70 transition-colors text-sm sm:text-base">
                  <span>3. Why does TikTok disable DMs for users under 16?</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60">
                  TikTok established a platform rule disabling Direct Messaging for registered accounts between ages 13 and 15 to protect younger teens from online predators, cyberbullying, unsolicited media sharing, and unvetted contact from strangers.
                </div>
              </details>

              <details className="group border border-slate-200 rounded-2xl bg-slate-50 overflow-hidden transition-all">
                <summary className="flex items-center justify-between p-5 font-bold cursor-pointer list-none text-slate-900 hover:bg-slate-100/70 transition-colors text-sm sm:text-base">
                  <span>4. Can strangers send dangerous links or malware through TikTok DMs?</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60">
                  Yes. Scammers and bad actors frequently attempt to send phishing URLs, fake gift card giveaways, or redirection links leading to malicious sites. TrackMasterTool's web protection filter automatically blocks access to known harmful domains even if clicked.
                </div>
              </details>

              <details className="group border border-slate-200 rounded-2xl bg-slate-50 overflow-hidden transition-all">
                <summary className="flex items-center justify-between p-5 font-bold cursor-pointer list-none text-slate-900 hover:bg-slate-100/70 transition-colors text-sm sm:text-base">
                  <span>5. What is the difference between secret spy apps and TrackMasterTool?</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60">
                  Secret spy apps market hidden surveillance, which often breaches legal standards, degrades child trust, and risks malware exposure. TrackMasterTool operates 100% transparently as authorized family safety software focused on app time limits, web safety, bedtime locks, and digital health.
                </div>
              </details>

              <details className="group border border-slate-200 rounded-2xl bg-slate-50 overflow-hidden transition-all">
                <summary className="flex items-center justify-between p-5 font-bold cursor-pointer list-none text-slate-900 hover:bg-slate-100/70 transition-colors text-sm sm:text-base">
                  <span>6. How does TikTok Family Pairing complement TrackMasterTool?</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60">
                  TikTok Family Pairing configures in-app settings (such as DM permissions and keyword filters). TrackMasterTool works at the device level, allowing parents to enforce strict daily app time limits, lock TikTok during bedtime, block unapproved web domains, and review overall device safety.
                </div>
              </details>

              <details className="group border border-slate-200 rounded-2xl bg-slate-50 overflow-hidden transition-all">
                <summary className="flex items-center justify-between p-5 font-bold cursor-pointer list-none text-slate-900 hover:bg-slate-100/70 transition-colors text-sm sm:text-base">
                  <span>7. Can teenagers bypass TikTok Family Pairing or parental controls?</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60">
                  If a teen attempts to unlink TikTok Family Pairing, the parent receives an instant notification. Combining in-app Family Pairing with TrackMasterTool's PIN-protected system controls prevents unauthorized uninstallation or setting overrides.
                </div>
              </details>

              <details className="group border border-slate-200 rounded-2xl bg-slate-50 overflow-hidden transition-all">
                <summary className="flex items-center justify-between p-5 font-bold cursor-pointer list-none text-slate-900 hover:bg-slate-100/70 transition-colors text-sm sm:text-base">
                  <span>8. What steps should I take if my child receives an inappropriate DM?</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60">
                  Take a screenshot of the message for documentation, block and report the account within TikTok, switch DM privacy to "Friends Only" or "No One", and report severe harassment or predatory behavior to local law enforcement or child safety organizations.
                </div>
              </details>

              <details className="group border border-slate-200 rounded-2xl bg-slate-50 overflow-hidden transition-all">
                <summary className="flex items-center justify-between p-5 font-bold cursor-pointer list-none text-slate-900 hover:bg-slate-100/70 transition-colors text-sm sm:text-base">
                  <span>9. Which TrackMasterTool subscription plan is best for long-term protection?</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60">
                  TrackMasterTool offers three transparent plans: 2 Months ($30), 6 Months ($50), and Lifetime Access ($100). The Lifetime plan provides the maximum value for continuous protection as your children grow.
                </div>
              </details>
            </div>
          </section>

          {/* High Converting CTA Box */}
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-purple-400" /> Start Protecting Your Teen Today
            </div>

            <h3 className="font-heading font-extrabold text-2xl sm:text-4xl tracking-tight text-white max-w-2xl mx-auto leading-tight">
              Secure Your Child's Digital Journey with TrackMasterTool
            </h3>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Combine native TikTok Family Pairing with system-level app controls, bedtime downtime locks, and transparent activity safety metrics. Simple, powerful, and built on family trust.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto pt-2">
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-1">
                <span className="text-xs font-semibold text-slate-400 block uppercase">2 Months Access</span>
                <span className="text-2xl font-extrabold text-white">$30</span>
                <span className="text-[11px] text-slate-400 block">Short-Term Trial</span>
              </div>
              <div className="p-4 rounded-2xl bg-purple-900/40 border border-purple-500/40 space-y-1 relative">
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-purple-600 text-[10px] font-bold uppercase text-white">Popular</span>
                <span className="text-xs font-semibold text-slate-300 block uppercase">6 Months Access</span>
                <span className="text-2xl font-extrabold text-white">$50</span>
                <span className="text-[11px] text-purple-300 block">Save $40</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-1">
                <span className="text-xs font-semibold text-slate-400 block uppercase">Lifetime Access</span>
                <span className="text-2xl font-extrabold text-emerald-400">$100</span>
                <span className="text-[11px] text-slate-400 block">Best Long-Term Value</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/pricing" 
                className="w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-500 font-bold rounded-2xl text-white text-base shadow-lg hover:shadow-purple-600/30 transition-all flex items-center justify-center gap-2 group"
              >
                <span>View Pricing Plans & Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/dashboard" 
                className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 font-semibold rounded-2xl text-slate-200 text-base border border-slate-700 transition-colors flex items-center justify-center gap-2"
              >
                <span>Explore Live Demo</span>
              </Link>
            </div>

            <div className="pt-2 text-xs text-slate-400 flex items-center justify-center gap-4 flex-wrap">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Instant Activation</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 100% Consent-Based</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 24/7 Dedicated Support</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
