import React from 'react';
import Link from 'next/link';
import { 
  MessageSquare, 
  Shield, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Lock, 
  Eye, 
  HeartHandshake, 
  Smartphone,
  HelpCircle,
  Sparkles,
  Zap,
  Sliders,
  Check,
  Ban,
  FileText
} from 'lucide-react';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'How to Monitor Viber Messages Safely in 2026: Complete Guide for Parents',
  description: 'Learn how to supervise your child’s Viber messaging activity safely, manage screen time, block inappropriate contacts, and prevent cyberbullying with TrackMasterTool.',
  canonical: 'https://www.trackmastertool.com/blog/parental-control/how-to-monitor-viber-messages-safely',
});

export default function ViberSafetyGuidePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Monitor Viber Messages Safely in 2026: Complete Guide for Parents',
    description: 'A comprehensive guide for parents on supervising Viber usage, understanding encryption and secret chats, preventing cyberbullying, and establishing family digital safety using TrackMasterTool.',
    image: 'https://www.trackmastertool.com/images/blog/viber_safety.jpg',
    author: {
      '@type': 'Organization',
      name: 'TrackMaster Editorial Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'TrackMasterTool',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.trackmastertool.com/logo.png',
      },
    },
    datePublished: '2026-08-10',
    dateModified: '2026-08-10',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is it legal for parents to monitor their child’s Viber messages?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Legal parents and legal guardians have the full legal right and ethical responsibility to supervise smartphones owned by or provided to their legal minor children (under 18 years old) to ensure digital safety, prevent cyberbullying, and block inappropriate interactions.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can TrackMasterTool monitor Viber secret chats without the child knowing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. TrackMasterTool operates strictly as a transparent, consent-verified parental control platform. It displays a persistent notification on the child’s authorized device and requires explicit parent-child setup. We strongly reject secret surveillance or covert spy software.'
        }
      },
      {
        '@type': 'Question',
        name: 'How does TrackMasterTool differ from illegal Viber spy apps or keyloggers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Unlike unauthorized stalkerware or malicious keyloggers that harvest passwords and covertly exfiltrate personal data, TrackMasterTool is an official, authorized family safety platform focused on screen time budgets, app lockouts, media safety logs, and keyword safety alerts with complete parental transparency.'
        }
      },
      {
        '@type': 'Question',
        name: 'Does Viber monitoring work on both Android and iPhone devices?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. TrackMasterTool provides comprehensive parental control capabilities for both Android and iOS smartphones, offering screen time limits, app scheduling, and activity insights across platforms.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can teenagers bypass or uninstall TrackMasterTool from their phone?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TrackMasterTool includes robust tamper protection and uninstall protection features. Children cannot remove or disable the companion service without entering the master parental PIN code configured in your parent dashboard.'
        }
      },
      {
        '@type': 'Question',
        name: 'How can parents block Viber during school hours or bedtime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Through the TrackMasterTool Parent Dashboard, you can set customized recurring schedules (e.g., Monday to Friday, 8:00 AM – 3:00 PM and 9:00 PM – 6:00 AM) to automatically lock access to Viber and other messaging apps during class or sleep time.'
        }
      },
      {
        '@type': 'Question',
        name: 'Will supervising Viber slow down my child’s smartphone battery or performance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. TrackMasterTool is light on CPU memory and optimized for minimal battery consumption, ensuring your child’s device operates smoothly without overheating or battery drain.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does TrackMasterTool cost for family device protection?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TrackMasterTool offers straightforward pricing plans: $30 for 2 Months, $50 for 6 Months, or $100 for a Lifetime Access License, all backed by a 30-day money-back guarantee.'
        }
      },
      {
        '@type': 'Question',
        name: 'How can parents protect kids from joining unmoderated public Viber Communities?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TrackMasterTool provides web filtering and app usage limits that restrict access to unknown community invitations and external link previews, while empowering parents with category alerts when kids join new social groups.'
        }
      }
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.trackmastertool.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://www.trackmastertool.com/blog'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Parental Control',
        item: 'https://www.trackmastertool.com/blog/parental-control'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Viber Safety Guide',
        item: 'https://www.trackmastertool.com/blog/parental-control/how-to-monitor-viber-messages-safely'
      }
    ]
  };

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
          <span className="text-purple-600 font-semibold truncate">Viber Safety Guide</span>
        </nav>

        {/* Article Header Card */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-4 h-4 text-purple-600" /> Messaging Safety &amp; Parental Controls (2026)
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            How to Monitor Viber Messages Safely in 2026: Complete Guide for Parents
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed">
            Viber remains one of the world’s most widely used instant messaging applications for group chats, HD voice calling, and digital Communities. Discover how to protect your children from secret chat risks, cyberbullying, unknown contacts, and screen addiction using transparent parental supervision tools and open family communication.
          </p>

          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-600 to-purple-600 text-white font-bold flex items-center justify-center shadow-sm">
                TM
              </div>
              <div>
                <span className="font-bold text-slate-900 block text-sm">TrackMaster Editorial Team</span>
                <span className="text-[11px] text-slate-400">Fact-Checked &amp; Peer Reviewed by Child Safety Experts</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-slate-500">
              <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1 rounded-full"><Clock className="w-3.5 h-3.5 text-slate-500" /> 14 min read</span>
              <span className="hidden sm:inline">•</span>
              <span>Updated: August 10, 2026</span>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-purple-50/80 border border-purple-200/80 p-6 sm:p-8 rounded-2xl mb-12 space-y-4">
          <div className="font-heading font-bold text-sm text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <Shield className="w-4 h-4 text-purple-600" /> Table of Contents
          </div>
          <ol className="list-decimal pl-5 text-xs sm:text-sm text-slate-700 space-y-2 font-medium">
            <li>
              <a href="#why-viber-requires-attention" className="hover:text-purple-700 hover:underline transition-all">
                Why Viber Requires Parental Attention in 2026: Encryption &amp; Hidden Risks
              </a>
            </li>
            <li>
              <a href="#transparent-supervision-vs-hacking" className="hover:text-purple-700 hover:underline transition-all">
                Transparent Viber Supervision vs. Unauthorized Hacking &amp; Spyware Myths
              </a>
            </li>
            <li>
              <a href="#key-features-viber-safety" className="hover:text-purple-700 hover:underline transition-all">
                Key Features of Viber Safety Control with TrackMasterTool
              </a>
            </li>
            <li>
              <a href="#step-by-step-onboarding" className="hover:text-purple-700 hover:underline transition-all">
                Step-by-Step Onboarding Guide for Android &amp; iPhone Setup
              </a>
            </li>
            <li>
              <a href="#parenting-guide-cyberbullying" className="hover:text-purple-700 hover:underline transition-all">
                How Parents Can Talk to Kids About Viber Safety &amp; Cyberbullying
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-purple-700 hover:underline transition-all">
                Frequently Asked Questions (8+ Parent FAQs)
              </a>
            </li>
          </ol>
        </div>

        {/* Main Body Content */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-12 text-slate-700 leading-relaxed font-sans">
          
          {/* SECTION 1 */}
          <section id="why-viber-requires-attention" className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-xl text-purple-700">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                1. Why Viber Requires Parental Attention in 2026
              </h2>
            </div>

            <p>
              With over 1.2 billion registered users worldwide, Viber has established itself as one of the cornerstone instant messaging platforms for teenagers, young adults, and international family communications. Its combination of high-definition voice and video calls, playful animated stickers, file-sharing features, and public Communities makes it extremely engaging for young minds.
            </p>

            <p>
              However, the very features that make Viber an enjoyable messaging app also present unique digital safety vulnerabilities that every parent must understand in 2026. As online interactions become increasingly decentralized, relying solely on basic device screen locks is no longer sufficient to protect teenagers from digital harms.
            </p>

            <div className="space-y-4 pt-2">
              <h3 className="font-bold text-slate-900 text-xl flex items-center gap-2">
                <Lock className="w-5 h-5 text-purple-600" /> Key Features &amp; Associated Risks on Viber
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-base">Secret Chats &amp; Self-Destruct Timers</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 text-xs font-bold">High Risk</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Viber allows users to initiate &quot;Secret Chats&quot; equipped with self-destruct timers ranging from 1 second to 7 days. Once the timer expires, messages, images, and videos are permanently erased from both handsets. While designed for privacy, adolescents frequently use disappearing chats to hide risky behaviors, explicit image exchanges, or severe peer harassment from parental view.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-base">End-to-End Encryption Blindspots</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">Medium Risk</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Viber enforces end-to-end encryption by default for standard one-on-one chats and group messages. Encryption ensures that third parties and network providers cannot intercept communication traffic. However, for parents, encryption creates a total diagnostic blind spot if a predator, scammer, or toxic peer initiates direct contact with a child.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-base">Public Viber Communities &amp; Channels</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 text-xs font-bold">High Risk</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Viber Communities allow millions of members to gather in massive public groups centered around sports, gaming, entertainment, or political topics. Because admin moderation in public groups is highly inconsistent, children are easily exposed to unflagged adult content, illegal gambling promotions, external phishing links, and hate speech.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-base">Unknown Contact Direct Messaging</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">Medium Risk</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    If a child’s phone number becomes visible in a public Viber Community or leak database, unknown accounts can message them directly. Cybercriminals and online grooming syndicates utilize automated messaging tools to reach out to minors under the guise of fake peer profiles.
                  </p>
                </div>
              </div>
            </div>

            {/* Image 1 Tag Insertion */}
            <div className="my-8 space-y-2 text-center">
              <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 flex items-center justify-center">
                <img 
                  src="/images/blog/viber_safety.jpg" 
                  alt="Viber Parental Control and Messaging Safety Guide"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-slate-500 italic max-w-2xl mx-auto">
                Figure 1: Viber&apos;s combination of secret chats, public communities, and direct messaging features requires proactive parental supervision and clear family digital boundaries.
              </p>
            </div>

            {/* Summary Risk Comparison Table */}
            <div className="overflow-x-auto pt-4">
              <table className="w-full text-left border-collapse bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white font-heading">
                    <th className="p-4 font-bold">Viber Feature</th>
                    <th className="p-4 font-bold">Primary Risk for Minors</th>
                    <th className="p-4 font-bold">Parental Safety Countermeasure</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Disappearing Messages</td>
                    <td className="p-4">Hidden cyberbullying, explicit photo swapping, zero message history</td>
                    <td className="p-4">TrackMasterTool Notification &amp; Screen Time Control</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Public Communities</td>
                    <td className="p-4">Exposure to adult materials, spam links, radicalized forums</td>
                    <td className="p-4">Category-level Web Filtering &amp; App Lockouts</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Direct Phone Number Lookup</td>
                    <td className="p-4">Stranger contact, unsolicited adult content, phishing scams</td>
                    <td className="p-4">Unknown Contact Safeguards &amp; Parental Privacy Rules</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Overnight Group Chatting</td>
                    <td className="p-4">Sleep deprivation, anxiety, decreased academic focus</td>
                    <td className="p-4">Scheduled Bedtime App Downtimes via TrackMaster Dashboard</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 2 */}
          <section id="transparent-supervision-vs-hacking" className="space-y-6 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-xl text-purple-700">
                <Shield className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                2. Transparent Viber Supervision vs. Unauthorized Hacking &amp; Spyware Myths
              </h2>
            </div>

            <p>
              When parents search online for methods to check their child’s Viber activity, they are often bombarded by deceptive advertising from unauthorized &quot;spyware&quot; vendors. Many shady websites promise secret, zero-touch Viber keyloggers or remote hacking solutions that claim to work without physical access or user consent.
            </p>

            <p>
              It is critical for responsible parents to separate marketing myths from cybersecurity reality. <strong>TrackMasterTool is strictly committed to transparent, consent-verified family digital safety.</strong> We do not offer or support unauthorized surveillance, stalkerware, password harvesting, or covert spying on adult spouses.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-6 rounded-2xl bg-red-50/70 border border-red-200 space-y-3">
                <div className="flex items-center gap-2 font-bold text-red-900 text-base">
                  <Ban className="w-5 h-5 text-red-600" /> Myth: Secret Spy Apps &amp; Covert Keyloggers
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-red-800">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>Illegal &amp; Unethical:</strong> Covert spying on non-consenting individuals violates federal privacy laws and wiretapping statutes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>Malware Risk:</strong> Third-party &quot;free Viber spy&quot; tools often bundle malicious trojans that compromise parents&apos; financial credentials.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>Destroys Family Trust:</strong> Secretly reading messages creates profound resentment and breaks parent-child trust when discovered.</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-3">
                <div className="flex items-center gap-2 font-bold text-emerald-900 text-base">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Reality: Authorized TrackMaster Family Safety
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-emerald-800">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>100% Transparent:</strong> Displays clear system notifications informing the child that device safety settings are managed by parents.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>Focus on Digital Health:</strong> Prioritizes screen time budgets, app lockouts, web filtering, and dangerous activity alerts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>Fosters Open Communication:</strong> Encourages parents and teenagers to establish healthy digital boundaries together.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-purple-50 border-l-4 border-purple-600 text-xs sm:text-sm text-purple-900 space-y-2">
              <span className="font-bold block text-sm">The Ethical Parenting Mandate:</span>
              <p>
                Child psychology research demonstrates that adolescents respond far better to collaborative digital management than secretive monitoring. By explaining that TrackMasterTool is installed to guard against external online hazards—rather than to police their personal thoughts—parents build long-term digital maturity and mutual respect.
              </p>
            </div>
          </section>

          {/* SECTION 3 */}
          <section id="key-features-viber-safety" className="space-y-6 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-100 rounded-xl text-emerald-700">
                <Sliders className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                3. Key Features of Viber Safety Control with TrackMasterTool
              </h2>
            </div>

            <p>
              TrackMasterTool equips parents with a comprehensive suite of device safety controls designed to manage Viber and other social messaging applications without invading personal privacy boundaries unnecessarily.
            </p>

            {/* Image 2 Tag Insertion */}
            <div className="my-8 space-y-2 text-center">
              <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 flex items-center justify-center">
                <img 
                  src="/images/blog/phone_monitoring.jpg" 
                  alt="TrackMasterTool Parent Dashboard for Phone Monitoring and Screen Time Limits"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-slate-500 italic max-w-2xl mx-auto">
                Figure 2: The TrackMasterTool Parent Dashboard gives parents instant visibility into messaging screen time budgets, app lockout schedules, and safety alert notifications.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="p-2.5 bg-purple-100 text-purple-700 rounded-xl w-fit">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">1. Custom Screen Time Budgets &amp; App Lockouts</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Set precise daily allowances for Viber usage (e.g., 45 minutes per day). Once the designated time limit is reached, TrackMasterTool automatically locks the app, allowing essential phone calls and emergency communications to remain active.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="p-2.5 bg-purple-100 text-purple-700 rounded-xl w-fit">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">2. Bedtime &amp; School Focus Schedules</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Establish automated downtime windows. Prevent late-night Viber messaging by locking the app between 9:00 PM and 6:30 AM, ensuring your child receives uninterrupted rest and arrives at school refreshed.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl w-fit">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">3. Smart Keyword &amp; Safety Alerts</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Receive instant dashboard notifications if text triggers associated with cyberbullying, depression, self-harm, or inappropriate adult topics appear on the managed device screen.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="p-2.5 bg-amber-100 text-amber-700 rounded-xl w-fit">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">4. Shared Media Safety Inspection</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Monitor photo and video downloads originating from Viber group chats to shield your child from accidental exposure to explicit graphics or dangerous content files.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="p-2.5 bg-indigo-100 text-indigo-700 rounded-xl w-fit">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">5. Malicious Link &amp; Phishing Filter</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Viber messages often contain external links to dangerous web domains. TrackMasterTool automatically blocks access to malicious, adult, or gambling websites clicked from within chat apps.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="p-2.5 bg-rose-100 text-rose-700 rounded-xl w-fit">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">6. Weekly Digital Wellness Reports</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Review clear graphical reports comparing time spent on Viber versus educational apps, enabling structured weekend discussions regarding digital habits and balance.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 4 */}
          <section id="step-by-step-onboarding" className="space-y-6 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-100 rounded-xl text-indigo-700">
                <Smartphone className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                4. Step-by-Step Onboarding Guide for Android &amp; iPhone Setup
              </h2>
            </div>

            <p>
              Configuring TrackMasterTool for authorized family safety is straightforward and takes less than 10 minutes. Follow this step-by-step guide to pair your child&apos;s smartphone with your central Parent Dashboard.
            </p>

            <div className="space-y-6 pt-2">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative pl-14">
                <div className="absolute left-4 top-6 w-7 h-7 rounded-full bg-purple-600 text-white font-bold text-sm flex items-center justify-center">
                  1
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">Create Your TrackMaster Account &amp; Select a Plan</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Visit the official <Link href="/pricing" className="text-purple-600 font-semibold hover:underline">TrackMaster Pricing Page</Link> and choose a subscription plan tailored to your family: 2 Months ($30), 6 Months ($50), or Lifetime Access ($100). Complete your secure Razorpay checkout.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative pl-14">
                <div className="absolute left-4 top-6 w-7 h-7 rounded-full bg-purple-600 text-white font-bold text-sm flex items-center justify-center">
                  2
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">Download Authorized Companion App on Child&apos;s Phone</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Take your child&apos;s physical phone (Android or iOS) and log into the TrackMaster onboarding portal. Download and install the official companion app. Engage with your child to review the installation agreement transparently.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative pl-14">
                <div className="absolute left-4 top-6 w-7 h-7 rounded-full bg-purple-600 text-white font-bold text-sm flex items-center justify-center">
                  3
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">Grant Authorized System Permissions</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Follow the step-by-step screen prompts to grant required Android Accessibility Services or iOS Management Profiles, Usage Statistics access, and Location Services. Set a unique 4-digit Parental PIN code to prevent unauthorized uninstallation.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative pl-14">
                <div className="absolute left-4 top-6 w-7 h-7 rounded-full bg-purple-600 text-white font-bold text-sm flex items-center justify-center">
                  4
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">Configure Viber Limits in Parent Dashboard</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Log in to your Parent Dashboard from any laptop or mobile browser. Navigate to <strong>App Management &gt; Viber Safety Rules</strong>. Set daily screen time allowances, define bedtime lockouts, and activate real-time web filtering.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative pl-14">
                <div className="absolute left-4 top-6 w-7 h-7 rounded-full bg-purple-600 text-white font-bold text-sm flex items-center justify-center">
                  5
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">Conduct a Joint Testing &amp; Boundary Check-In</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Test the settings alongside your teenager. Demonstrate how the persistent safety notification appears and confirm that messaging functions normally within agreed daily time windows.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 5 */}
          <section id="parenting-guide-cyberbullying" className="space-y-6 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-pink-100 rounded-xl text-pink-700">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                5. How Parents Can Talk to Kids About Viber Safety &amp; Cyberbullying
              </h2>
            </div>

            <p>
              Software controls provide a vital protective barrier, but parental guidance and open emotional communication form the foundation of lifelong online safety. Children who trust their parents are far more likely to seek help when facing digital threats or harassment.
            </p>

            <div className="space-y-4 pt-2">
              <h3 className="font-bold text-slate-900 text-xl flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" /> Cyberbullying Red Flags Checklist for Parents
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Watch for subtle changes in behavior that may indicate your teenager is experiencing peer harassment or bullying within Viber group chats:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                  <span>Becoming visibly upset, nervous, or withdrawn after receiving Viber notifications.</span>
                </div>
                <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                  <span>Suddenly turning off or hiding the phone screen when a parent walks into the room.</span>
                </div>
                <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                  <span>Unwillingness to attend school, extracurricular activities, or social events.</span>
                </div>
                <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                  <span>Changes in sleeping habits, frequent nightmares, or loss of appetite.</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="font-bold text-slate-900 text-xl">The Family Digital Device Agreement Blueprint</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Establish clear, agreed-upon smartphone rules by creating a written family contract containing these core principles:
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <Shield className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Secret Stranger Chats:</strong> Never accept private Viber messaging requests or join secret groups created by individuals you have not met in person.</span>
                </li>
                <li className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <Shield className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span><strong>No Private Media Swapping:</strong> Never send personal photographs, home location details, or school schedules to group chats or unknown users.</span>
                </li>
                <li className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <Shield className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Overnight Device Docking:</strong> Smart devices are docked in the living room charging station past 9:00 PM on school nights.</span>
                </li>
                <li className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <Shield className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Judgement-Free Reporting:</strong> If anyone sends inappropriate content or threatens you on Viber, you can report it to parents without fear of losing your phone privileges.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 6 - FAQ */}
          <section id="faq" className="space-y-6 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-xl text-purple-700">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                6. Frequently Asked Questions (Parent FAQs)
              </h2>
            </div>

            <div className="space-y-4 pt-2">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Is it legal for parents to monitor their child’s Viber messages?</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Yes. Under law, parents and legal guardians have full legal authority and parental responsibility to supervise mobile devices provided to their minor children (under 18) to ensure safety, prevent digital abuse, and manage online exposure.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Can TrackMasterTool monitor Viber secret chats without the child knowing?</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  No. TrackMasterTool strictly operates as a transparent, consent-verified family safety platform. It displays a persistent notification on the child’s authorized handset and requires transparent parental installation. We reject covert keylogging or hidden spyware.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">How does TrackMasterTool differ from illegal Viber spy apps or keyloggers?</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Unlike unauthorized stalkerware or malicious keyloggers designed to steal passwords covertly, TrackMasterTool is an official parental control suite focused on screen time budgets, app lockouts, media safety logs, and keyword safety alerts with complete parental transparency.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Does Viber monitoring work on both Android and iPhone devices?</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Yes. TrackMasterTool supports both Android and iOS smartphones, providing screen time allowances, app schedules, and parental safety controls across both mobile platforms.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Can teenagers bypass or uninstall TrackMasterTool from their phone?</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  TrackMasterTool features robust anti-tamper and uninstall protection. Children cannot remove or disable the companion application without entering the master parental PIN code configured in your Parent Dashboard.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">How can parents block Viber during school hours or bedtime?</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Through the TrackMaster Dashboard, you can create recurring time blocks (e.g., Monday through Friday from 8:00 AM to 3:00 PM and 9:00 PM to 6:00 AM) to automatically restrict Viber access during class or sleep schedules.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Will supervising Viber slow down my child’s smartphone battery or performance?</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  No. TrackMasterTool is lightweight, resource-efficient, and optimized for minimal battery consumption, ensuring smooth smartphone operation without performance degradation or battery drain.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">How much does TrackMasterTool cost, and is there a guarantee?</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  TrackMasterTool offers flexible pricing options: $30 for 2 Months, $50 for 6 Months, or $100 for a Lifetime Access License. All plans include full feature access and a 30-day money-back guarantee.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">How can parents protect kids from joining unmoderated public Viber Communities?</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  TrackMasterTool provides real-time web filtering and app usage limits that block malicious link previews originating from unknown Viber Communities while notifying parents of new app categories accessed on the device.
                </p>
              </div>
            </div>
          </section>

          {/* HIGH-CONVERTING CTA BOX */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-purple-400" /> Transparent Family Protection
            </div>

            <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-tight max-w-2xl mx-auto">
              Secure Your Child’s Viber Usage &amp; Digital Safety Today
            </h3>

            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Join thousands of proactive parents using TrackMasterTool to manage screen time budgets, filter dangerous web content, and foster healthier family phone habits.
            </p>

            {/* Pricing Tiers Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto pt-2 text-left">
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Standard</span>
                <div className="font-extrabold text-2xl text-white">$30</div>
                <span className="text-xs text-purple-400 font-semibold block">2 Months Access</span>
                <p className="text-[11px] text-slate-400">Full parental dashboard &amp; screen time controls</p>
              </div>

              <div className="p-4 rounded-2xl bg-purple-900/40 border border-purple-500/50 space-y-2 relative">
                <div className="absolute -top-2.5 right-3 px-2 py-0.5 bg-purple-600 text-[10px] font-extrabold rounded-full text-white uppercase tracking-wider">
                  Popular
                </div>
                <span className="text-xs font-bold text-purple-300 uppercase tracking-wider block">Value Plan</span>
                <div className="font-extrabold text-2xl text-white">$50</div>
                <span className="text-xs text-purple-400 font-semibold block">6 Months Access</span>
                <p className="text-[11px] text-slate-400">Save 45% with semi-annual protection</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Ultimate</span>
                <div className="font-extrabold text-2xl text-white">$100</div>
                <span className="text-xs text-purple-400 font-semibold block">Lifetime Access</span>
                <p className="text-[11px] text-slate-400">One-time payment, unlimited future updates</p>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/pricing" 
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-600 hover:from-purple-500 hover:to-purple-500 font-bold rounded-2xl text-white text-base shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/dashboard" 
                className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 font-semibold rounded-2xl text-slate-200 text-base border border-slate-700 transition-all text-center"
              >
                <span>Explore Interactive Demo</span>
              </Link>
            </div>

            <p className="text-xs text-slate-400 flex items-center justify-center gap-2 pt-2">
              <Shield className="w-4 h-4 text-emerald-400" /> 30-Day Money-Back Guarantee • 100% Consent-Based Parental Safety
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
