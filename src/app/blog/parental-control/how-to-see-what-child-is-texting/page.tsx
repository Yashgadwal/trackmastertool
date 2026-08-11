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
  title: 'How Can I See What My Child Is Texting? Safe & Legal Guide for Parents',
  description: 'Learn how to monitor your child’s text messages transparently, manage screen time, set up keyword alerts, and protect them from cyberbullying without violating trust.',
  canonical: 'https://www.trackmastertool.com/blog/parental-control/how-to-see-what-child-is-texting',
});

export default function SeeWhatChildIsTextingPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How Can I See What My Child Is Texting? Safe & Legal Guide for Parents',
    description: 'A comprehensive, search-engine-optimized guide for parents looking to supervise child messaging activity safely and transparently on iOS and Android devices using built-in controls and TrackMasterTool.',
    image: 'https://www.trackmastertool.com/images/blog/phone_monitoring.jpg',
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
    datePublished: '2026-08-11',
    dateModified: '2026-08-11',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is it legal to see who my child is texting and monitor their messages?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Parents and legal guardians have the full legal right and ethical duty to monitor smartphones and communication platforms used by their minor children (under the age of 18) to protect them from safety risks such as grooming, cyberbullying, and malicious content.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I track my child’s messages secretly without them knowing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While parents may legally monitor their minors without consent in some jurisdictions, cybersecurity and child psychology experts strongly advise against covert spying. Secret tracking apps (stalkerware) compromise device security, break parent-child trust, and fail to teach digital safety. TrackMasterTool operates transparently with persistent notifications.'
        }
      },
      {
        '@type': 'Question',
        name: 'Does TrackMasterTool monitor WhatsApp, Viber, and Instagram messages as well?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. TrackMasterTool provides comprehensive digital safety monitoring across multiple communication channels including standard SMS, iMessage, WhatsApp, Viber, TikTok DMs, and Instagram DMs, alerting parents to potential safety concerns.'
        }
      },
      {
        '@type': 'Question',
        name: 'How does keyword alerting work in TrackMasterTool?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Instead of reading every message line-by-line—which invades your child’s privacy—TrackMasterTool uses a smart keyword scanning engine. If a text exchange contains words related to bullying, drugs, self-harm, or sexual topics, you receive an instant alert on your Parent Dashboard.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can my teenager bypass or uninstall TrackMasterTool?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. TrackMasterTool is equipped with robust anti-tampering defenses. The companion application on the child’s device cannot be uninstalled, disabled, or force-closed without entering the master Parental PIN configured in your parent account dashboard.'
        }
      },
      {
        '@type': 'Question',
        name: 'Will monitoring child text messages slow down the device battery or performance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. TrackMasterTool is engineered using optimized background processes that run efficiently without overheating the phone, consuming excessive battery power, or degrading overall system performance.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I use TrackMasterTool to monitor my spouse’s or boyfriend’s text messages?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely not. TrackMasterTool is designed exclusively for transparent, consent-based parental control and family device administration. Using software to track or spy on adult spouses, partners, or other adults without their explicit, documented consent is illegal, unethical, and violates our terms of service.'
        }
      },
      {
        '@type': 'Question',
        name: 'What should I do if my child receives an explicit photo or message?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'First, remain calm. Avoid immediately confiscating the device, as this discourages children from reporting future incidents. Use the alert from TrackMasterTool as an entry point for an open, non-judgmental dialogue about messaging safety, privacy, and digital boundaries.'
        }
      },
      {
        '@type': 'Question',
        name: 'How does TrackMasterTool protect my child’s private data?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We utilize bank-grade end-to-end data encryption. All communication logs and alert histories are securely encrypted during transmission and storage, ensuring that only authorized parents can access the information.'
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
        name: 'How to See Child Text Messages',
        item: 'https://www.trackmastertool.com/blog/parental-control/how-to-see-what-child-is-texting'
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
          <span className="text-purple-600 font-semibold truncate">How to See Child Text Messages</span>
        </nav>

        {/* Article Header Card */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-4 h-4 text-purple-600" /> Messaging Safety &amp; Parental Supervision
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            How Can I See What My Child Is Texting? Safe &amp; Legal Guide for Parents
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed">
            In the modern mobile age, text messaging is no longer confined to SMS. From WhatsApp and iMessage to Viber, Instagram DMs, and TikTok, digital communications run the gamut of public and private spheres. Discover how to supervise your child&apos;s chats safely, establish transparent parental controls, and avoid the dangerous traps of unethical spy apps.
          </p>

          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-600 to-purple-600 text-white font-bold flex items-center justify-center shadow-sm">
                TM
              </div>
              <div>
                <span className="font-bold text-slate-900 block text-sm">TrackMaster Editorial Team</span>
                <span className="text-[11px] text-slate-400">Fact-Checked &amp; Peer Reviewed by Cyber-Safety Experts</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-slate-500">
              <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1 rounded-full">
                <Clock className="w-3.5 h-3.5 text-slate-500" /> 18 min read
              </span>
              <span className="hidden sm:inline">•</span>
              <span>Updated: August 11, 2026</span>
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
              <a href="#modern-messaging-landscape" className="hover:text-purple-700 hover:underline transition-all">
                The Modern Messaging Landscape: Where Children Text &amp; The Risks They Encounter
              </a>
            </li>
            <li>
              <a href="#legal-ethical-boundaries" className="hover:text-purple-700 hover:underline transition-all">
                Legal &amp; Ethical Boundaries: Why Covert Spying is Dangerous (The Case Against Stalkerware)
              </a>
            </li>
            <li>
              <a href="#built-in-parental-controls" className="hover:text-purple-700 hover:underline transition-all">
                Built-In Parental Controls: How to Monitor Texts on iOS and Android Devices
              </a>
            </li>
            <li>
              <a href="#trackmaster-transparent-supervision" className="hover:text-purple-700 hover:underline transition-all">
                Real-Time Security Alerts: How TrackMasterTool Guards Messaging Without Violating Trust
              </a>
            </li>
            <li>
              <a href="#step-by-step-integration" className="hover:text-purple-700 hover:underline transition-all">
                Setting Up Transparent Messaging Management: Step-by-Step Parent Integration
              </a>
            </li>
            <li>
              <a href="#family-device-agreement" className="hover:text-purple-700 hover:underline transition-all">
                The Family Device Agreement: Fostering Open Conversations About Digital Safety
              </a>
            </li>
            <li>
              <a href="#os-comparison-table" className="hover:text-purple-700 hover:underline transition-all">
                Side-by-Side Comparison: Built-In OS Tools vs. Dedicated Family Safety Apps
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-purple-700 hover:underline transition-all">
                Frequently Asked Questions (9+ Detailed FAQs)
              </a>
            </li>
          </ol>
        </div>

        {/* Main Body Content */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-12 text-slate-700 leading-relaxed font-sans">
          
          {/* SECTION 1 */}
          <section id="modern-messaging-landscape" className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-xl text-purple-700">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                1. The Modern Messaging Landscape: Where Children Text &amp; The Risks
              </h2>
            </div>

            <p>
              Communication has evolved dramatically. A decade ago, parents could monitor text messages by simply examining the itemized SMS list on a monthly paper bill or checking their child&apos;s inbox on a flip phone. Today, messaging is decentralized, dynamic, and multi-layered. Children communicate using a variety of applications that bypass traditional cellular channels entirely, using internet-based protocols (IP) to transmit texts, disappearing photos, and encrypted audio clips.
            </p>

            <p>
              To effectively manage family device safety, parents must understand the main communication pipelines their children utilize. SMS and RCS remain standard for cross-platform texting, but applications like WhatsApp, iMessage, Viber, Instagram Direct Messages (DMs), TikTok DMs, and Discord are where adolescents spend the vast majority of their screen time.
            </p>

            {/* Warning Box */}
            <div className="p-5 rounded-2xl bg-amber-50 border-l-4 border-amber-500 text-xs sm:text-sm text-slate-700 space-y-2">
              <div className="flex items-center gap-2 text-amber-800 font-bold">
                <AlertTriangle className="w-4 h-4 text-amber-600" /> Key Dangers in Modern Kid Chat Rooms
              </div>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li><strong>Disappearing Media:</strong> Apps like Snapchat or Viber secret chats allow messages to vanish after viewing, encouraging impulsive photo sharing and eliminating audit trails.</li>
                <li><strong>Grooming and Contact from Strangers:</strong> Public communities, gaming discord servers, and social search tags expose child profiles to predatory accounts masquerading as teenagers.</li>
                <li><strong>Cyberbullying and Peer Exclusion:</strong> Toxic group chats, coordinate screenshot sharing, and online harassment often occur outside the direct view of teachers or parents.</li>
                <li><strong>Phishing &amp; Malware Delivery:</strong> Cybercriminals utilize social engineering to trick children into clicking links that download keystroke loggers or compromise family accounts.</li>
              </ul>
            </div>

            <div className="my-8 space-y-2 text-center">
              <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 flex items-center justify-center">
                <img 
                  src="/images/blog/viber_safety.jpg" 
                  alt="Viber safety guide and child messaging monitoring parameters"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-slate-500 italic max-w-2xl mx-auto">
                Figure 1: Traditional SMS has been replaced by rich messaging apps (like Viber or WhatsApp) that utilize end-to-end encryption, presenting new digital blindspots for family security.
              </p>
            </div>

            <p>
              Without a proactive structure, parents are often left entirely in the dark. Relying purely on trust is an ideal approach, but the impulsivity of the adolescent brain, coupled with sophisticated online traps, makes it necessary for parents to employ tools that act as safety nets. However, this must be handled with legal and ethical consideration.
            </p>
          </section>

          {/* SECTION 2 */}
          <section id="legal-ethical-boundaries" className="space-y-6 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-100 rounded-xl text-red-700">
                <Ban className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                2. Legal &amp; Ethical Boundaries: Why Covert Spying is Dangerous
              </h2>
            </div>

            <p>
              When a parent starts typing query terms like &quot;how to read text messages without my child knowing&quot; or &quot;sms tracking app,&quot; search engines return thousands of shady results promoting &quot;spyware&quot; or &quot;covert keyloggers.&quot; These products promise total stealth, claiming they can intercept messages without the phone owner ever detecting them.
            </p>

            <p>
              <strong>It is crucial to define the legal, ethical, and practical dangers of these spyware applications.</strong> First and foremost, stalkerware is illegal when used to monitor adults. Spying on a husband, wife, boyfriend, girlfriend, or employee without their explicit, legal, written consent is a criminal offense under federal wiretapping and computer fraud laws. 
            </p>

            {/* Stalkerware alert block */}
            <div className="p-6 rounded-2xl bg-red-50 border border-red-200 space-y-3">
              <span className="font-extrabold text-red-900 text-base flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-600" /> Cybersecurity Warning: Avoid Free SMS Spying Scams
              </span>
              <p className="text-xs sm:text-sm text-red-800">
                Many online portals claiming to offer &quot;free text trackers&quot; or &quot;no-access hacking utilities&quot; are malicious fronts operated by cybercriminals. Installing these tools onto a child&apos;s device often side-loads Trojan horses, banking stealers, or ransomware, placing your family&apos;s personal and financial credentials in severe jeopardy.
              </p>
            </div>

            <p>
              For children under the age of 18, parents generally have the legal right to monitor devices they own and provide. However, doing so covertly creates massive ethical risks:
            </p>

            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-2.5 text-xs sm:text-sm">
                <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span><strong>Erosion of Trust:</strong> If a teenager discovers you installed hidden tracking software, the resulting betrayal can permanently rupture the parent-child relationship. They will often react by acquiring burner phones or using encrypted offline messaging apps.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm">
                <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span><strong>Data Leakage Risk:</strong> Spyware platforms are notoriously insecure. They harvest vast amounts of private data (child photos, chats, location history) and upload them to unencrypted servers, leaving your child vulnerable to server breaches.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm">
                <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span><strong>Missed Educational Opportunity:</strong> Silent monitoring fails to teach digital literacy. The goal of parenting is to guide children to make safe decisions when you are *not* watching.</span>
              </li>
            </ul>

            <p>
              This is why TrackMasterTool champions <strong>transparent, consent-verified family administration</strong>. Our software does not hide in the background. It displays a clear, persistent notification that informs the child the device safety rules are actively managed by their parents. This fosters accountability, encourages open conversation, and remains 100% legal and ethical.
            </p>
          </section>

          {/* SECTION 3 */}
          <section id="built-in-parental-controls" className="space-y-6 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-100 rounded-xl text-indigo-700">
                <Smartphone className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                3. Built-In Parental Controls: How to Monitor Texts on iOS and Android
              </h2>
            </div>

            <p>
              Before opting for third-party tools, parents should maximize the built-in operating system security settings provided by Apple and Google. These utilities are free, deeply integrated, and require only a few minutes to configure.
            </p>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                  <Lock className="w-5 h-5 text-indigo-600" /> Apple iOS (iPhones &amp; iPads) Configuration
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Apple provides several methods to manage text safety using iCloud Family Sharing and native Screen Time parameters:
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-slate-600">
                  <li><strong>Messages in iCloud Syncing:</strong> If you supply your child with an iOS device under your Apple ID family ecosystem, you can enable &quot;Messages in iCloud&quot; under iCloud Settings. This allows text threads to sync across linked devices. However, this displays all chat messages, which may feel excessively invasive for mature teenagers.</li>
                  <li><strong>Communication Safety:</strong> Turn on this feature under **Settings &gt; Screen Time &gt; Communication Safety**. It uses on-device machine learning to detect and automatically blur sensitive explicit photos sent or received via iMessage, presenting the child with resources and warnings.</li>
                  <li><strong>iMessage Content Filters:</strong> Under **Settings &gt; Messages &gt; Filter Unknown Senders**, you can isolate texts originating from numbers not saved in your child&apos;s address book.</li>
                </ol>
              </div>

              <div className="my-6 space-y-2 text-center">
                <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 flex items-center justify-center">
                  <img 
                    src="/images/blog/iphone_filtering.jpg" 
                    alt="iPhone text message filtering and screen time settings screen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-slate-500 italic max-w-2xl mx-auto">
                  Figure 2: Apple&apos;s iOS includes built-in Communication Safety tools that scan on-device media files to blur inappropriate images automatically.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-indigo-600" /> Google Android Setup (Google Messages &amp; Family Link)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Android users can leverage Google&apos;s native tools to establish base-level messaging safety rules:
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-slate-600">
                  <li><strong>Google Family Link:</strong> Download the Google Family Link app on your parent device and connect your child&apos;s Google account. While Family Link does not let you read text contents directly, it allows you to restrict the download of messaging apps, set daily app usage budgets, and lock the phone completely during bedtime.</li>
                  <li><strong>Google Messages Spam Protection:</strong> Open the Google Messages app on your child&apos;s phone, tap the profile icon, navigate to **Settings &gt; Spam Protection**, and toggle it on. This filters out phishing attempts and malicious links sent by bots.</li>
                  <li><strong>SMS Backups:</strong> Setting up an auto-backup system to Google Drive under **Settings &gt; System &gt; Backup** ensures text database archives are retrievable in case of emergency device loss.</li>
                </ol>
              </div>
            </div>

            <p>
              <strong>The Limitation of Native Controls:</strong> While excellent for basic filtering, built-in solutions operate on an &quot;all-or-nothing&quot; basis. You either read *every single message* (which violates privacy and trust) or you see *nothing at all*. Furthermore, native settings do not provide safety alerts for third-party messaging apps like Viber, Instagram, or TikTok, which are highly favored by teens.
            </p>
          </section>

          {/* SECTION 4 */}
          <section id="trackmaster-transparent-supervision" className="space-y-6 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-100 rounded-xl text-emerald-700">
                <Shield className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                4. Real-Time Security Alerts: How TrackMasterTool Guards Messaging
              </h2>
            </div>

            <p>
              TrackMasterTool addresses the major flaws of native controls by offering a balanced, safety-first platform. Instead of invading your teenager&apos;s privacy by reading every message thread, our platform focuses on **context-aware protection, keyword alerts, and digital screen boundaries.**
            </p>

            <div className="my-8 space-y-2 text-center">
              <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 flex items-center justify-center">
                <img 
                  src="/images/blog/phone_monitoring.jpg" 
                  alt="TrackMasterTool Parent Dashboard displaying key parent alert matrices"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-slate-500 italic max-w-2xl mx-auto">
                Figure 3: The TrackMasterTool central dashboard displays notification logs, screen limits, and real-time safety warnings, allowing parents to guide digital habits without surveillance.
              </p>
            </div>

            <p>
              Our parental safety suite is built on three core pillars:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="p-2 bg-purple-100 text-purple-700 rounded-lg w-fit">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">Smart Keyword Alerts</h4>
                <p className="text-xs text-slate-600">
                  Specify alert keywords (e.g., &quot;hide,&quot; &quot;secret,&quot; &quot;meet,&quot; or slang terms for drugs). If these phrases are used in SMS or chat apps, parents receive an instant notification with the context, rather than having to read all texts.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="p-2 bg-purple-100 text-purple-700 rounded-lg w-fit">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">App Lockouts &amp; Budgets</h4>
                <p className="text-xs text-slate-600">
                  Establish custom daily time allowances. If your teenager uses WhatsApp or Viber for over 1 hour, the app locks down automatically while maintaining the phone&apos;s ability to dial parents or emergency services.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="p-2 bg-purple-100 text-purple-700 rounded-lg w-fit">
                  <Lock className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">Bedtime Downtime</h4>
                <p className="text-xs text-slate-600">
                  Block messaging entirely past bedtime (e.g., 9:30 PM to 6:00 AM) to eliminate late-night scrolling, reduce screen blue-light exposure, and ensure healthy, restorative sleep cycles.
                </p>
              </div>
            </div>

            <p>
              By utilizing TrackMasterTool, you establish a system where your child understands they have digital privacy, but that safety rules are in place. If an alert triggers, you address it as an educator, not as a spy.
            </p>
          </section>

          {/* MIDDLE CTA BLOCK */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-900 to-indigo-900 text-white text-center space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/30 border border-purple-400/20 text-purple-200 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-purple-300" /> Authorized Family Dashboard
            </span>

            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-tight">
              Bring Balanced Safety to Your Child&apos;s Mobile Experience
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
              TrackMasterTool offers transparent device limits, custom bedtime lockouts, and instant keyword safety notifications across Android and iOS platforms.
            </p>

            {/* Middle pricing options */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto pt-2 text-left">
              <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-700/50">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">2 Months License</span>
                <div className="font-extrabold text-xl text-white">$30</div>
                <p className="text-[9px] text-slate-400">1 Managed Device</p>
              </div>

              <div className="p-3.5 rounded-xl bg-purple-900/50 border border-purple-500/40 relative">
                <span className="text-[10px] font-bold text-purple-300 uppercase tracking-wider block">6 Months License</span>
                <div className="font-extrabold text-xl text-white">$50</div>
                <p className="text-[9px] text-slate-300">3 Managed Devices</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-700/50">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Lifetime License</span>
                <div className="font-extrabold text-xl text-white">$100</div>
                <p className="text-[9px] text-slate-400">5 Managed Devices</p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link 
                href="/pricing" 
                className="w-full sm:w-auto px-6 py-3 bg-purple-600 hover:bg-purple-500 font-bold rounded-xl text-white text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-1.5"
              >
                <span>View Plans &amp; Features</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/checkout" 
                className="w-full sm:w-auto px-6 py-3 bg-slate-800 hover:bg-slate-700 font-semibold rounded-xl text-slate-200 text-xs sm:text-sm border border-slate-700 transition-all text-center"
              >
                <span>Buy Now</span>
              </Link>
            </div>
          </div>

          {/* SECTION 5 */}
          <section id="step-by-step-integration" className="space-y-6 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-100 rounded-xl text-indigo-700">
                <Sliders className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                5. Setting Up Transparent Messaging Management: Parent Integration
              </h2>
            </div>

            <p>
              Setting up TrackMasterTool does not require deep technical knowledge or complex rooting or jailbreaking procedures. The system is designed to pair in under 10 minutes.
            </p>

            <div className="my-6 space-y-2 text-center">
              <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 flex items-center justify-center">
                <img 
                  src="/images/blog/tiktok_controls.jpg" 
                  alt="TikTok and social media parental locking screen layout"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-slate-500 italic max-w-2xl mx-auto">
                Figure 4: TrackMasterTool allows you to manage app installation rights and setup limits across highly active video and messaging social channels.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 text-base">Select Your Plan &amp; Register</h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Visit the <Link href="/pricing" className="text-purple-600 font-semibold hover:underline">TrackMaster Pricing Portal</Link> and register with your email address. Complete checkout for one of our licensing tiers.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 text-base">Install the Companion App</h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    With your child present, download the companion app onto the target phone. Our interactive installer walks you and your child through the transparent tracking authorization agreements.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 text-base">Grant System Permissions</h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Follow the on-screen prompts to enable accessibility permissions or profile configurations. Create a secure, 4-digit Parental PIN code that prevents your child from turning off the security software.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center flex-shrink-0">
                  4
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 text-base">Define Dashboard Safety Rules</h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Access your Parent Dashboard on your own browser. Add trigger terms to the keyword list, set app limits for Viber and other social portals, and schedule bedtimes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 6 */}
          <section id="family-device-agreement" className="space-y-6 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-pink-100 rounded-xl text-pink-700">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                6. The Family Device Agreement: Fostering Open Conversations
              </h2>
            </div>

            <p>
              Technology is only half of the parenting equation. Real safety comes from trust and mutual agreement. Before installing any software, schedule a family meeting to discuss digital safety rules and draft a **Family Device Agreement**. This written plan should outline standard rules for both parents and children:
            </p>

            <ul className="space-y-4">
              <li className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                <div className="p-1.5 bg-purple-100 text-purple-700 rounded-lg">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-slate-900 text-sm block">No Secret Stranger Contact</span>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Agree that under no circumstances should children accept direct messaging invitations or click external links sent by profiles they do not know in the real world.
                  </p>
                </div>
              </li>

              <li className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                <div className="p-1.5 bg-purple-100 text-purple-700 rounded-lg">
                  <Lock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-slate-900 text-sm block">No Sensitive Media Exchanges</span>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Discuss the permanence of digital photos. Outline rules prohibiting the sending of private selfies, home location indicators, or class schedules to online contacts.
                  </p>
                </div>
              </li>

              <li className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                <div className="p-1.5 bg-purple-100 text-purple-700 rounded-lg">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-slate-900 text-sm block">Bedtime Device Docking</span>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Establish a house rule where all smartphones and tablets are placed on a central charging dock in the living room past 9:00 PM on school nights.
                  </p>
                </div>
              </li>

              <li className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                <div className="p-1.5 bg-purple-100 text-purple-700 rounded-lg">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-slate-900 text-sm block">Non-Punitive Safety Reporting</span>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Ensure your child knows that if they receive inappropriate texts or experience bullying, they can tell you without the fear of having their device permanently confiscated.
                  </p>
                </div>
              </li>
            </ul>

            <p>
              When a keyword alert fires, do not immediately react with anger. Approach the conversation with curiosity and concern: *&quot;Our safety dashboard notified me of a text containing this word. Are you okay, and is someone making you feel uncomfortable online?&quot;* This response turns a potential digital boundary dispute into a constructive safety discussion.
            </p>
          </section>

          {/* SECTION 7 */}
          <section id="os-comparison-table" className="space-y-6 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-100 rounded-xl text-indigo-700">
                <FileText className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                7. Side-by-Side Comparison: Built-In OS Tools vs. Dedicated Family Apps
              </h2>
            </div>

            <p>
              To help you understand the differences between free built-in mobile controls and TrackMasterTool, review the detailed comparative matrix below:
            </p>

            {/* Comparison Table */}
            <div className="overflow-x-auto pt-2">
              <table className="w-full text-left border-collapse bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white font-heading">
                    <th className="p-4 font-bold">Safety Parameter</th>
                    <th className="p-4 font-bold">Apple Screen Time (iOS)</th>
                    <th className="p-4 font-bold">Google Family Link (Android)</th>
                    <th className="p-4 font-bold">TrackMasterTool</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr>
                    <td className="p-4 font-bold text-slate-900">SMS / iMessage Auditing</td>
                    <td className="p-4">Syncs all messages via iCloud (privacy invasion)</td>
                    <td className="p-4">No content auditing capabilities</td>
                    <td className="p-4 font-semibold text-purple-700">Smart Keyword Detection &amp; Context Alerts</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Third-Party Chat Apps</td>
                    <td className="p-4">Screen time limits only; no content filtering</td>
                    <td className="p-4">Screen time limits only; no content filtering</td>
                    <td className="p-4 font-semibold text-purple-700">Cross-app keyword tracking (Viber, WA, Insta)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Uninstall Protection</td>
                    <td className="p-4">Yes, via Screen Time Passcode</td>
                    <td className="p-4">Yes, via parent authorization locks</td>
                    <td className="p-4 font-semibold text-purple-700">Yes, reinforced by secure Parent PIN locks</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Transparency Notification</td>
                    <td className="p-4">Visible icon in settings menus</td>
                    <td className="p-4">Visible status bar alert</td>
                    <td className="p-4 font-semibold text-purple-700">Persistent status banner &amp; joint onboarding</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Web Filtering &amp; Link Blocking</td>
                    <td className="p-4">Filters Safari browsing defaults</td>
                    <td className="p-4">Filters Chrome browsing defaults</td>
                    <td className="p-4 font-semibold text-purple-700">Cross-app web filter (blocks in-app chat links)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 8 - FAQ */}
          <section id="faq" className="space-y-6 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-xl text-purple-700">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                8. Frequently Asked Questions (Parent FAQs)
              </h2>
            </div>

            <div className="space-y-4 pt-2">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Is it legal to see who my child is texting and monitor their messages?</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Yes. Under family safety regulations, parents and legal guardians have the legal right and responsibility to supervise communication channels on devices they provide to their minor children (under 18) to protect them from grooming, bullying, or exposure to adult contents.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Can I track my child’s messages secretly without them knowing?</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  While legally permissible for minors under your direct custody, cybersecurity experts strongly advise against hidden spy software. Covert spyware introduces high malware risks, can leak child data to hacker databases, and destroys family trust. TrackMasterTool operates transparently, helping kids develop digital maturity.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Does TrackMasterTool monitor WhatsApp, Viber, and Instagram messages?</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Yes. TrackMasterTool monitors activity and alerts parents to safety violations and keyword alerts across standard SMS/iMessage, WhatsApp, Viber, and Instagram/TikTok DMs, ensuring a wide safety net across popular communication apps.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">How does keyword alerting work in TrackMasterTool?</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Rather than parsing through every benign conversation—which compromises your teenager&apos;s privacy—TrackMasterTool scans on-device messages for pre-defined keyword matches. If a phrase associated with bullying, drug abuse, self-harm, or grooming is typed or received, an instant warning notification is dispatched to your parent account.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Can my teenager bypass or uninstall TrackMasterTool?</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  No. Our companion app contains built-in anti-tampering and uninstall protection shields. A child cannot remove the profile, modify background permissions, or disable service elements without inputting the secure, parent-configured Parental PIN code.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Will monitoring child text messages slow down the device battery or performance?</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  No. TrackMasterTool uses highly optimized background processes that run efficiently without overheating the smartphone, consuming excessive cellular data, or causing performance degradation.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Can I use TrackMasterTool to monitor my spouse’s or partner’s text messages?</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Absolutely not. TrackMasterTool is strictly a parental control and authorized family device administration platform. Using any application to track or monitor an adult spouse, boyfriend, girlfriend, or partner without their explicit, documented consent is a violation of federal laws and strictly violates our user agreement.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">What should I do if my child receives an explicit photo or message?</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Maintain composure and avoid immediate, reactive device confiscation. Calmly explain that the safety dashboard flagged the photo. Open a collaborative dialogue about privacy, the legal ramifications of explicit sharing, and how they can handle cyberbullying situations effectively.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">How does TrackMasterTool protect my child’s private data?</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  All activity reports, location coordinates, and alert history databases are encrypted in transit and at rest using bank-grade end-to-end encryption protocols. Only you, the verified account parent, have the credentials to decode and read this information.
                </p>
              </div>
            </div>
          </section>

          {/* HIGH-CONVERTING FINAL CTA BOX */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-purple-400" /> Transparent Family Protection
            </div>

            <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-tight max-w-2xl mx-auto">
              Secure Your Child’s Mobile Safety &amp; Digital Wellness Today
            </h3>

            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Join thousands of proactive parents using TrackMasterTool to manage messaging boundaries, secure app access, and build healthy digital routines.
            </p>

            {/* Pricing Tiers Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto pt-2 text-left">
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Standard</span>
                <div className="font-extrabold text-2xl text-white">$30</div>
                <span className="text-xs text-purple-400 font-semibold block">2 Months License</span>
                <p className="text-[11px] text-slate-400">1 Managed Device. Full app scheduling &amp; keyword alerts.</p>
              </div>

              <div className="p-4 rounded-2xl bg-purple-900/40 border border-purple-500/50 space-y-2 relative">
                <div className="absolute -top-2.5 right-3 px-2 py-0.5 bg-purple-600 text-[10px] font-extrabold rounded-full text-white uppercase tracking-wider">
                  Popular
                </div>
                <span className="text-xs font-bold text-purple-300 uppercase tracking-wider block">Value Plan</span>
                <div className="font-extrabold text-2xl text-white">$50</div>
                <span className="text-xs text-purple-400 font-semibold block">6 Months License</span>
                <p className="text-[11px] text-slate-400">3 Managed Devices. Save 45% on semi-annual protection.</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Ultimate</span>
                <div className="font-extrabold text-2xl text-white">$100</div>
                <span className="text-xs text-purple-400 font-semibold block">Lifetime License</span>
                <p className="text-[11px] text-slate-400">5 Managed Devices. One-time payment, lifetime updates.</p>
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
                href="/checkout" 
                className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 font-semibold rounded-2xl text-slate-200 text-base border border-slate-700 transition-all text-center"
              >
                <span>Buy Premium License</span>
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
