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
  FileText,
  AlertCircle
} from 'lucide-react';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'How to Use WhatsApp Spy App in Android & iPhone: Safety Guide',
  description: 'Learn the legal and safety facts about WhatsApp spy apps on Android and iPhone. Discover why covert spyware fails and how transparent family parental control keeps children safe.',
  canonical: 'https://www.trackmastertool.com/blog/parental-control/how-to-use-whatsapp-spy-app',
});

export default function WhatsAppSpyAppGuidePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Use WhatsApp Spy App in Android and iPhone: Legal Limits & Safety Guide',
    description: 'A comprehensive, technical, and educational guide for families exploring WhatsApp supervision. Understand the cybersecurity risks of covert stalkerware and set up transparent, authorized parental controls.',
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
        name: 'Is it legal to use a WhatsApp spy app to monitor my child’s device?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Legal parents and guardians have the full authority and responsibility to supervise mobile devices provided to their minor children (under 18) to protect them from online predators, cyberbullying, and harmful content. However, monitoring must be conducted transparently on devices owned by the parents or authorized by family boundaries.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I use TrackMasterTool to secretly track my spouse or boyfriend?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. TrackMasterTool is strictly a transparent, consent-verified parental control and authorized family device management platform. We do not support, condone, or provide covert surveillance, spouse tracking, or stalkerware capabilities. The app displays persistent system notifications to ensure the device user is fully aware of parental supervision.'
        }
      },
      {
        '@type': 'Question',
        name: 'Does WhatsApp monitoring require rooting or jailbreaking the target phone?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Unlike covert spyware apps that compromise operating system integrity, TrackMasterTool does NOT require rooting your Android device or jailbreaking your iPhone. Rooting and jailbreaking void manufacturer warranties, disable system encryption, and expose family devices to malware and identity theft.'
        }
      },
      {
        '@type': 'Question',
        name: 'How does TrackMasterTool monitor WhatsApp activity on Android safely?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'On Android, TrackMasterTool utilizes official system Accessibility APIs and Notification Access to capture on-screen events and alert parents to dangerous keywords or cyberbullying incidents. This is done securely without modifying system files or compromising device cybersecurity.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I track WhatsApp activity on an iPhone or iPad?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. On iOS, TrackMasterTool integrates with official Apple Screen Time rules, Web Content Filters, and Mobile Device Management (MDM) configuration profiles to enforce app blockouts, schedule message-free periods, and restrict access to malicious web links without compromising iOS sandbox protections.'
        }
      },
      {
        '@type': 'Question',
        name: 'Will installing a WhatsApp supervision app drain my child’s phone battery?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Shady spy apps run resource-heavy keyloggers and continuous background screen-recorders that drain batteries rapidly and overheat processors. TrackMasterTool is lightweight, optimized for power efficiency, and designed to run smoothly without affecting daily smartphone performance.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can my teenager easily bypass or uninstall the TrackMaster companion app?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. TrackMasterTool features robust tamper-resistance and uninstall protection. If a child attempts to delete the companion app or disable configuration profiles, the system immediately locks access to the phone and requires the master parental PIN code to restore functionality.'
        }
      },
      {
        '@type': 'Question',
        name: 'What happens if my child receives a disappearing message on WhatsApp?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Disappearing chats and self-destructing media are frequently used to hide online harassment. Because TrackMasterTool works via screen-level accessibility logs and active notification monitoring, it captures alerts of incoming chats in real-time, helping parents identify risky interactions before they disappear.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does TrackMasterTool cost for family device protection?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TrackMasterTool offers three premium licensing options: a 2 Months License (1 Device) for $30, a 6 Months License (3 Devices) for $50, and a Lifetime License (5 Devices) for $100. All plans come with a 30-day money-back guarantee and live technical customer support.'
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
        name: 'WhatsApp Supervision Guide',
        item: 'https://www.trackmastertool.com/blog/parental-control/how-to-use-whatsapp-spy-app'
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
          <span className="text-purple-600 font-semibold truncate">WhatsApp Supervision Guide</span>
        </nav>

        {/* Article Header Card */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-4 h-4 text-purple-600" /> WhatsApp Supervision &amp; Safety (2026)
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            How to Use a WhatsApp Spy App on Android and iPhone: Legal Limits &amp; Safety Guide
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed">
            Searching for a WhatsApp spy app? Separate marketing myths from security facts. Discover the severe risks of covert stalkerware, understand mobile OS security boundaries, and learn how to implement transparent, legal parental controls with TrackMasterTool.
          </p>

          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 text-white font-bold flex items-center justify-center shadow-sm">
                TM
              </div>
              <div>
                <span className="font-bold text-slate-900 block text-sm">TrackMaster Editorial Team</span>
                <span className="text-[11px] text-slate-400">Fact-Checked &amp; Peer Reviewed by Cybersecurity Experts</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-slate-500">
              <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1 rounded-full">
                <Clock className="w-3.5 h-3.5 text-slate-500" /> 16 min read
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
              <a href="#understanding-the-query" className="hover:text-purple-700 hover:underline transition-all">
                Addressing the Query: How to Monitor WhatsApp on Android and iOS
              </a>
            </li>
            <li>
              <a href="#the-dangers-of-spyware" className="hover:text-purple-700 hover:underline transition-all">
                The Technical Risks of Covert Spyware: Rooting, Jailbreaking, and Scams
              </a>
            </li>
            <li>
              <a href="#why-spyware-fails" className="hover:text-purple-700 hover:underline transition-all">
                Why Stealth Monitoring Fails: OS Protections and Battery Drain
              </a>
            </li>
            <li>
              <a href="#transparent-monitoring-framework" className="hover:text-purple-700 hover:underline transition-all">
                Setting Up Transparent Supervision: Android Accessibility APIs &amp; iOS Screen Time
              </a>
            </li>
            <li>
              <a href="#step-by-step-setup" className="hover:text-purple-700 hover:underline transition-all">
                Step-by-Step Onboarding Guide with TrackMasterTool
              </a>
            </li>
            <li>
              <a href="#protecting-children-hazards" className="hover:text-purple-700 hover:underline transition-all">
                Protecting Children from Cyberbullying and Strangers on WhatsApp
              </a>
            </li>
            <li>
              <a href="#comparison-matrix" className="hover:text-purple-700 hover:underline transition-all">
                Supervision Comparison Matrix: Spyware vs. TrackMasterTool vs. Native Controls
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-purple-700 hover:underline transition-all">
                Frequently Asked Questions (9+ Detailed Parent FAQs)
              </a>
            </li>
          </ol>
        </div>

        {/* Main Body Content */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-12 text-slate-700 leading-relaxed font-sans">
          
          {/* SECTION 1 */}
          <section id="understanding-the-query" className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-xl text-purple-700">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                1. Addressing the Query: How to Monitor WhatsApp on Android and iOS
              </h2>
            </div>

            <p>
              In today’s hyper-connected landscape, WhatsApp has emerged as the leading global instant messaging application, boasting over 2.7 billion active users. From media swapping and group text threads to HD video calling, it is the primary communication hub for teenagers, young adults, and families alike. Consequently, a high volume of internet searches centers around queries like <span className="italic font-semibold">&quot;how to install a WhatsApp spy app&quot;</span> or <span className="italic font-semibold">&quot;how to read messages on another phone.&quot;</span>
            </p>

            <p>
              Many users seeking these tools are driven by a variety of intentions: parents aiming to protect vulnerable children, but also adults attempting to secretly track spouses, boyfriends, or partners without their knowledge. As an industry-leading family security and parental control brand, TrackMasterTool establishes a clear, absolute ethical boundary:
            </p>

            <div className="p-5 rounded-2xl bg-red-50 border-l-4 border-red-600 text-xs sm:text-sm text-red-950 space-y-2">
              <span className="font-bold flex items-center gap-2 text-red-900 text-sm">
                <Ban className="w-5 h-5 text-red-600 flex-shrink-0" /> Important Legal Notice: Stalkerware &amp; Privacy Law Violations
              </span>
              <p>
                Installing covert surveillance software, keyloggers, or hidden tracker apps on an adult’s mobile phone without their explicit, written, and informed consent is a criminal offense in most jurisdictions. Such acts violate federal wiretapping laws, state privacy statutes, and international regulations (such as GDPR and the Electronic Communications Privacy Act). They carry severe penalties, including hefty fines and prison sentences. Furthermore, the market for &quot;stealth spy apps&quot; is heavily saturated with cyber scams designed to compromise your personal data.
              </p>
            </div>

            <p>
              TrackMasterTool does not offer hidden spying capabilities, password harvesting tools, or covert tracking. Instead, we provide an authorized, consent-verified device management platform designed to protect minor children, foster open family discussions, and manage screen time. This guide is educational—outlining the security mechanics of mobile operating systems, warning you against dangerous malware scams, and detailing how to build a healthy, transparent digital environment.
            </p>
          </section>

          {/* SECTION 2 */}
          <section id="the-dangers-of-spyware" className="space-y-6 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-xl text-purple-700">
                <Shield className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                2. The Technical Risks of Covert Spyware: Rooting, Jailbreaking, and Scams
              </h2>
            </div>

            <p>
              To understand why covert WhatsApp spy apps are highly dangerous to install, you must look at how modern mobile operating systems are engineered. Both Google’s Android and Apple’s iOS implement strict application isolation mechanisms known as <strong>sandboxing</strong>. Sandboxing ensures that no app has access to the memory space, data directories, or communications of another app without explicit user interaction and system permission.
            </p>

            <p>
              Because WhatsApp enforces end-to-end encryption, its messaging database is stored in a secure, local, sandboxed database directory on the phone (such as <code className="bg-slate-100 text-purple-700 px-1.5 py-0.5 rounded font-mono text-xs">/data/data/com.whatsapp</code> on Android). To read this database directly or log keystrokes silently, spyware applications require parents or users to bypass the OS security model completely. This requires two highly destructive procedures:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                  <Smartphone className="w-5 h-5 text-purple-600" /> Rooting (Android Devices)
                </div>
                <p className="text-xs sm:text-sm text-slate-600">
                  Rooting grants administrative control over the Android subsystem. While it allows spyware to extract raw WhatsApp database files, it also disables Google Play Protect, breaks hardware-level encryption protocols, voids manufacturer warranties, and leaves the device vulnerable to silent malware installation, credential-stealing trojans, and financial fraud apps.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                  <Lock className="w-5 h-5 text-purple-600" /> Jailbreaking (iOS/iPhone Devices)
                </div>
                <p className="text-xs sm:text-sm text-slate-600">
                  Jailbreaking removes Apple&apos;s digital rights management controls. By jailbreaking an iPhone, you open it up to buffer overflow attacks, disable the iOS secure enclave, degrade system stability, and prevent the device from installing official iOS security patches—leaving your child exposed to network-level exploits.
                </p>
              </div>
            </div>

            <div className="my-8 space-y-2 text-center">
              <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 flex items-center justify-center">
                <img 
                  src="/images/blog/phone_monitoring.jpg" 
                  alt="Risks of Rooting and Jailbreaking for Mobile Spyware Apps"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-slate-500 italic max-w-2xl mx-auto">
                Figure 1: Bypassing operating system security constraints through rooting or jailbreaking strips away crucial defenses, leaving family devices exposed to dangerous malware and remote hacks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-2 text-xs sm:text-sm text-amber-900">
              <span className="font-bold flex items-center gap-2 text-amber-800">
                <AlertCircle className="w-5 h-5 text-amber-600" /> Beware of Online WhatsApp Hacking Scams
              </span>
              <p>
                Many websites claim that they can hack any WhatsApp account remotely with just the target phone number. These services are 100% fraudulent. They function as phishing portals, designed to trick you into entering your own email addresses, passwords, or credit card details. Some even distribute malicious desktop executables disguised as &quot;spy viewers&quot; which act as ransomware, encrypting your personal computers.
              </p>
            </div>
          </section>

          {/* MID-ARTICLE CTA BOX */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 text-white text-center space-y-4 shadow-xl border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
            <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider">
              Legal &amp; Consent-Based Device Supervision
            </span>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
              Avoid Dangerous Malware. Supervise Devices Securely.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              TrackMasterTool works without jailbreaking, rooting, or illegal spying tricks. Protect up to 5 family devices starting from just $30.
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <Link href="/pricing" className="px-5 py-2.5 bg-purple-600 hover:bg-purple-500 font-bold rounded-xl text-white text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5">
                <span>View Licensing Plans</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* SECTION 3 */}
          <section id="why-spyware-fails" className="space-y-6 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-xl text-purple-700">
                <Ban className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                3. Why Stealth Monitoring Fails: OS Protections and Battery Drain
              </h2>
            </div>

            <p>
              Even if a user manages to install a covert spyware package, Google and Apple have built active defense features that render stealth operation practically impossible in 2026.
            </p>

            <div className="space-y-4">
              <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-purple-600" /> Active Security Shields and Technical Realities
              </h3>
              
              <ul className="space-y-4 text-xs sm:text-sm text-slate-700">
                <li className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong>Google Play Protect Scans:</strong> Android’s built-in antivirus, Play Protect, scans the device continuously in the background. It identifies behavior patterns matching stalkerware (such as background screen capture, keylogging, and silent network activity). Once detected, the OS displays a high-priority warning box urging the child or user to immediately uninstall the application.
                </li>
                <li className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong>iOS Safety Notifications &amp; Location Indicator:</strong> Apple has introduced strict system alerts. If an app tries to access the device location or run background services persistently, iOS triggers recurring alerts asking: <span className="italic font-semibold">&quot;[App Name] has been tracking your activity in the background. Do you want to continue allowing this?&quot;</span> This renders stealth spying impossible.
                </li>
                <li className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong>Battery Exhaustion and Heat Warnings:</strong> Running an spy tool requires constant capture and transmission of media files, text streams, and location logs. The continuous utilization of the CPU, cellular radio, and GPU causes massive battery drain (often emptying a full charge in under 3 hours) and makes the device hot to the touch. The user will immediately spot the lag, inspect settings, and find the culprit.
                </li>
                <li className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong>The Stalkerware Data Breach Threat:</strong> Because spy app vendors operate on the fringes of the software industry, they rarely invest in adequate cloud cybersecurity. Over the past several years, prominent stalkerware databases have been repeatedly breached by security researchers and hackers. This means that if you install a spy app, your child’s private chat histories, images, location data, and your own credit card information could end up leaked onto the public dark web.
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 4 */}
          <section id="transparent-monitoring-framework" className="space-y-6 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-100 rounded-xl text-emerald-700">
                <Sliders className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                4. Setting Up Transparent Supervision: Android Accessibility APIs &amp; iOS Screen Time
              </h2>
            </div>

            <p>
              Instead of compromising your family&apos;s cybersecurity, TrackMasterTool offers a highly effective, legal, and completely transparent supervision environment. By working closely with official mobile developer APIs rather than hacking them, our platform remains lightweight, secure, and undetectable to external bad actors while remaining fully transparent to your child.
            </p>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-purple-50/60 border border-purple-200 space-y-3">
                <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-purple-600" /> Android Monitoring: Official Accessibility Services &amp; Notification Listeners
                </h3>
                <p className="text-xs sm:text-sm text-slate-700">
                  Rather than exploiting security holes, TrackMasterTool utilizes the official Android <strong>Accessibility Service API</strong> (designed to help interact with screen interfaces) and the <strong>Notification Listener Service</strong>. 
                </p>
                <p className="text-xs sm:text-sm text-slate-700">
                  This setup allows TrackMasterTool to securely capture incoming notification titles and text contents without needing root access. It logs safety-related text patterns (such as mentions of violence, grooming, or self-harm) and pushes them to your Parent Dashboard. Crucially, the app maintains a persistent notification in the status bar, complying with Google&apos;s Developer Guidelines and ensuring your child knows they are protected.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-indigo-50/60 border border-indigo-200 space-y-3">
                <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                  <Lock className="w-5 h-5 text-indigo-600" /> iOS Supervision: Apple Screen Time &amp; Configuration Profiles
                </h3>
                <p className="text-xs sm:text-sm text-slate-700">
                  Apple’s iOS environment enforces a strict sandbox. To supervise an iPhone, TrackMasterTool uses Apple&apos;s official <strong>Screen Time API</strong> and secure Mobile Device Management (MDM) configuration profiles. 
                </p>
                <p className="text-xs sm:text-sm text-slate-700">
                  Instead of attempting to break system encryption to read messages, TrackMasterTool blocks access to WhatsApp during school hours or bedtime, restricts the installation of new chat applications, and monitors web content clicked from within the WhatsApp app through a secure, encrypted loopback DNS filter.
                </p>
              </div>
            </div>

            <div className="my-8 space-y-2 text-center">
              <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 flex items-center justify-center">
                <img 
                  src="/images/blog/iphone_filtering.jpg" 
                  alt="Parental Control Setup on iPhone and iPad"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-slate-500 italic max-w-2xl mx-auto">
                Figure 2: iOS-based parental control utilizes Apple&apos;s official Screen Time API and configuration profiles to regulate app access and filter web contents securely.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50 border-l-4 border-emerald-600 text-xs sm:text-sm text-emerald-950 space-y-2">
              <span className="font-bold block text-sm text-emerald-900">The Power of Open Communication:</span>
              <p>
                Psychological research shows that teenagers are significantly less likely to bypass digital limits when they understand that the platform is in place for safety rather than control. Transparent notifications encourage honest conversations. Explain to your child that TrackMasterTool is active to guard them against external online dangers, cyberbullying, and scams—not to spy on their personal thoughts.
              </p>
            </div>
          </section>

          {/* SECTION 5 */}
          <section id="step-by-step-setup" className="space-y-6 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-100 rounded-xl text-indigo-700">
                <Sliders className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                5. Step-by-Step Onboarding Guide with TrackMasterTool
              </h2>
            </div>

            <p>
              Setting up authorized, transparent supervision on your family devices is simple and requires less than 10 minutes of initial setup. Follow this standard onboarding procedure:
            </p>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 relative pl-12">
                <div className="absolute left-4 top-5 w-6 h-6 rounded-full bg-purple-600 text-white font-bold text-xs flex items-center justify-center">
                  1
                </div>
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">Register and Purchase a Premium License</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Navigate to the official <Link href="/pricing" className="text-purple-600 hover:underline font-semibold">TrackMaster Pricing Page</Link> and select a license tailored to your device requirements. Complete your secure payment to activate your central Parent Dashboard.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 relative pl-12">
                <div className="absolute left-4 top-5 w-6 h-6 rounded-full bg-purple-600 text-white font-bold text-xs flex items-center justify-center">
                  2
                </div>
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">Install the Companion App on the Target Device</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  With your child present, download the authorized TrackMaster Companion app onto their smartphone. Open the installation wizard to walk through the joint agreement page.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 relative pl-12">
                <div className="absolute left-4 top-5 w-6 h-6 rounded-full bg-purple-600 text-white font-bold text-xs flex items-center justify-center">
                  3
                </div>
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">Configure System Permissions</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Enable the system permissions requested by the wizard. On Android, toggle on **Accessibility Services** and **Notification Access**. On iOS, follow the prompts to trust the family management profile. Enter a unique 4-digit Parent PIN to lock app changes.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 relative pl-12">
                <div className="absolute left-4 top-5 w-6 h-6 rounded-full bg-purple-600 text-white font-bold text-xs flex items-center justify-center">
                  4
                </div>
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">Activate WhatsApp Safety Rules in the Parent Dashboard</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Log in to your Parent Dashboard from your desktop or phone browser. Go to **Dashboard &gt; App Settings &gt; WhatsApp Controls** to define daily usage schedules, block hours, and input safety keywords.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 6 */}
          <section id="protecting-children-hazards" className="space-y-6 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-pink-100 rounded-xl text-pink-700">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                6. Protecting Children from Cyberbullying and Strangers on WhatsApp
              </h2>
            </div>

            <p>
              WhatsApp is a highly personal communication channel, making it a hotspot for cyber risks that native device filters often fail to prevent. Because messages are encrypted end-to-end, network firewalls cannot inspect the data. Parents must be aware of the following hazards:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm sm:text-base">Stranger Direct Contacts</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 text-xs font-bold">Critical Risk</span>
                </div>
                <p className="text-xs text-slate-600">
                  If a child shares their phone number in online gaming forums or public social media profiles, bad actors can message them directly on WhatsApp. Predators frequently use fake child avatars to groom minors, build trust, and eventually request private media or meetups.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm sm:text-base">Disappearing Chat Exploits</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 text-xs font-bold">Critical Risk</span>
                </div>
                <p className="text-xs text-slate-600">
                  WhatsApp allows chats to disappear after 24 hours, 7 days, or 90 days. Cyberbullies frequently coordinate attacks using disappearing messages to insult, threaten, or harass a victim, leaving the child with no evidence to present to parents or school authorities.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm sm:text-base">Phishing Links &amp; Malware</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">Moderate Risk</span>
                </div>
                <p className="text-xs text-slate-600">
                  Spam accounts and peer groups frequently distribute viral &quot;gift cards&quot; or fake website links on WhatsApp. Clicking these links can lead to malware downloads or phishing portals designed to harvest the child&apos;s home location and private logins.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm sm:text-base">Sleep Cycle Disruptions</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">Moderate Risk</span>
                </div>
                <p className="text-xs text-slate-600">
                  Late-night group chats create sleep deprivation, leading to clinical anxiety, fatigue, and a severe decline in school performance. Adolescents often feel socially pressured to reply to messages at all hours of the night.
                </p>
              </div>
            </div>

            <div className="my-8 space-y-2 text-center">
              <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 flex items-center justify-center">
                <img 
                  src="/images/blog/tiktok_controls.jpg" 
                  alt="Managing Messaging Screen Time Limits"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-slate-500 italic max-w-2xl mx-auto">
                Figure 3: Limiting screen time and setting evening lockouts prevents sleep disruption and gives adolescents a necessary break from the pressures of group chat notifications.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="font-bold text-slate-900 text-xl flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-600" /> Active Safeguards via TrackMasterTool
              </h3>
              
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Daily App Screen Budgets:</strong> Limit WhatsApp usage (e.g., 1 hour daily). Once reached, the app shuts down automatically, though vital calls and SMS functions remain available.</span>
                </li>
                <li className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Custom Keyword Triggers:</strong> Receive immediate dashboard notifications if phrases related to self-harm, drug abuse, or adult content are displayed on screen.</span>
                </li>
                <li className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Bedtime and Focus Locks:</strong> Create recurring schedules (e.g., 9:30 PM to 6:30 AM on weekdays) to ensure screens stay off when your child should be sleeping or in class.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="font-bold text-slate-900 text-xl">The Family Digital Device Agreement Blueprint</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                A digital parent-child contract is a proven way to align family expectations. Write a simple physical document and sign it together, committing to the following principles:
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <Shield className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Verification before Adding:</strong> No joining group chats or accepting direct messages from users you haven&apos;t verified or met in the physical world.</span>
                </li>
                <li className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <Shield className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Personal Data Sharing:</strong> Never send physical addresses, pictures of school uniforms, banking details, or passwords over chat.</span>
                </li>
                <li className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <Shield className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Bedtime Docking Station:</strong> All smart devices must be placed on the family charger in the living room past 9:00 PM.</span>
                </li>
                <li className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <Shield className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span><strong>No-Punishment Clause:</strong> If you receive an inappropriate message or feel threatened, bring the phone to parents. You will not lose your device privileges for reporting digital hazards.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 7 */}
          <section id="comparison-matrix" className="space-y-6 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-100 rounded-xl text-indigo-700">
                <Sliders className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                7. Supervision Comparison Matrix: Spyware vs. TrackMasterTool vs. Native Controls
              </h2>
            </div>

            <p>
              To help you select the safest path, let&apos;s compare the technical and safety profiles of illegal spyware, native tools, and TrackMasterTool:
            </p>

            <div className="overflow-x-auto pt-2">
              <table className="w-full text-left border-collapse bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white font-heading">
                    <th className="p-4 font-bold">Feature Category</th>
                    <th className="p-4 font-bold">Covert Spyware Apps</th>
                    <th className="p-4 font-bold">Native Controls (Apple/Google)</th>
                    <th className="p-4 font-bold">TrackMasterTool</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Legal Authorization</td>
                    <td className="p-4 text-red-600 font-semibold">Illegal (Without Consent)</td>
                    <td className="p-4 text-emerald-600 font-semibold">100% Legal (Parental)</td>
                    <td className="p-4 text-emerald-600 font-semibold">100% Legal &amp; Authorized</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Rooting / Jailbreaking</td>
                    <td className="p-4 text-red-600">Required (Dangerous)</td>
                    <td className="p-4">Not Required</td>
                    <td className="p-4 text-emerald-600">Not Required (Safe APIs)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Dashboard Transparency</td>
                    <td className="p-4">Hidden (Stalkerware)</td>
                    <td className="p-4">Transparent</td>
                    <td className="p-4 font-semibold">Transparent System Bar Alerts</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Power &amp; Performance</td>
                    <td className="p-4 text-red-600">High battery drain &amp; heat</td>
                    <td className="p-4 text-emerald-600">Ultra-lightweight</td>
                    <td className="p-4 text-emerald-600">Highly optimized, zero lag</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Keyword Security Alerts</td>
                    <td className="p-4 text-red-600">Steals all keystrokes</td>
                    <td className="p-4">None (Simple time limits)</td>
                    <td className="p-4 text-emerald-600 font-semibold">Real-time Safety Alert Logging</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Malicious Link Filters</td>
                    <td className="p-4 text-red-600">No content filtering</td>
                    <td className="p-4">Basic browser-only limits</td>
                    <td className="p-4 text-emerald-600">Active system-wide DNS loops</td>
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
                <h3 className="font-bold text-slate-900 text-base">Is it legal to use a WhatsApp spy app to monitor my child’s device?</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Yes, under current family and privacy laws, legal parents or guardians have full legal authority and parental responsibility to manage the digital activities of minor children (under 18) using devices provided by the family. This is to guarantee child safety, prevent cyberbullying, and protect against online grooming.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Can I use TrackMasterTool to secretly track my spouse or boyfriend?</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  No. TrackMasterTool is built exclusively as an authorized family management tool. Covertly tracking an adult spouse, partner, or friend without consent is highly illegal and violates federal wiretapping statutes. TrackMasterTool is not stalkerware; it operates with persistent system notifications that inform the device user that parental settings are active.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Does WhatsApp monitoring require rooting or jailbreaking the target phone?</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  No. Unlike suspicious spy tools that require you to root Android or jailbreak iPhones, TrackMasterTool works entirely via official system interfaces (Android Accessibility Services &amp; iOS Screen Time profiles). This preserves system encryption, avoids security voids, and ensures the target device remains fully secure against malware.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">How does TrackMasterTool monitor WhatsApp activity on Android safely?</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  On Android, TrackMasterTool utilizes official system Accessibility APIs and Notification Access to capture on-screen events and alert parents to dangerous keywords or cyberbullying incidents. This is done securely without modifying system files or compromising device cybersecurity.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Can I track WhatsApp activity on an iPhone or iPad?</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Yes. On iOS, TrackMasterTool integrates with official Apple Screen Time rules, Web Content Filters, and Mobile Device Management (MDM) configuration profiles to enforce app blockouts, schedule message-free periods, and restrict access to malicious web links without compromising iOS sandbox protections.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Will installing a WhatsApp supervision app drain my child’s phone battery?</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  No. Covert tracking apps run keyloggers and continuous background screen recorders that drain batteries rapidly and overheat processors. TrackMasterTool is lightweight, optimized for power efficiency, and designed to run smoothly without affecting daily smartphone performance.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Can my teenager easily bypass or uninstall the TrackMaster companion app?</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  No. TrackMasterTool features robust tamper resistance and uninstall protection. If a child attempts to delete the companion app or disable configuration profiles, the system immediately locks access to the phone and requires the master parental PIN code to restore functionality.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">What happens if my child receives a disappearing message on WhatsApp?</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Disappearing chats and self-destructing media are frequently used to hide online harassment. Because TrackMasterTool works via screen-level accessibility logs and active notification monitoring, it captures alerts of incoming chats in real-time, helping parents identify risky interactions before they disappear.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">How much does TrackMasterTool cost for family device protection?</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  TrackMasterTool offers three premium licensing options: a 2 Months License (1 Device) for $30, a 6 Months License (3 Devices) for $50, and a Lifetime License (5 Devices) for $100. All plans come with a 30-day money-back guarantee and live technical customer support.
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
              Secure Your Child’s WhatsApp Usage &amp; Digital Safety Today
            </h3>

            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Join thousands of proactive families using TrackMasterTool to manage screen time budgets, filter dangerous web content, and foster healthier family phone habits.
            </p>

            {/* Pricing Tiers Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto pt-2 text-left">
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Standard</span>
                <div className="font-extrabold text-2xl text-white">$30</div>
                <span className="text-xs text-purple-400 font-semibold block">2 Months Access</span>
                <p className="text-[11px] text-slate-400">1 Managed Device. Full parental dashboard &amp; screen time controls</p>
              </div>

              <div className="p-4 rounded-2xl bg-purple-900/40 border border-purple-500/50 space-y-2 relative">
                <div className="absolute -top-2.5 right-3 px-2 py-0.5 bg-purple-600 text-[10px] font-extrabold rounded-full text-white uppercase tracking-wider">
                  Popular
                </div>
                <span className="text-xs font-bold text-purple-300 uppercase tracking-wider block">Value Plan</span>
                <div className="font-extrabold text-2xl text-white">$50</div>
                <span className="text-xs text-purple-400 font-semibold block">6 Months Access</span>
                <p className="text-[11px] text-slate-400">Up to 3 Managed Devices. Save 45% with semi-annual protection</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Ultimate</span>
                <div className="font-extrabold text-2xl text-white">$100</div>
                <span className="text-xs text-purple-400 font-semibold block">Lifetime Access</span>
                <p className="text-[11px] text-slate-400">Up to 5 Managed Devices. One-time payment, lifetime updates</p>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/pricing" 
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 font-bold rounded-2xl text-white text-base shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/checkout" 
                className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 font-semibold rounded-2xl text-slate-200 text-base border border-slate-700 transition-all text-center"
              >
                <span>Proceed to Checkout</span>
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
