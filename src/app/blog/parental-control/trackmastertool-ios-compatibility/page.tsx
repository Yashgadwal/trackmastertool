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
  Globe, 
  Wifi, 
  HelpCircle, 
  Laptop,
  ShieldCheck,
  Zap,
  Check,
  X,
  Sparkles,
  Info,
  Cpu,
  Layers,
  Settings,
  Radio,
  FileText,
  Users,
  Key,
  RefreshCw,
  Award
} from 'lucide-react';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'TrackMasterTool is Now Compatible with iOS 18.5! – Next-Gen iPhone Safety',
  description: 'TrackMasterTool is fully compatible with iOS 18.5. Discover how our transparent Screen Time API and MDM integrations provide seamless family safety, location tracking, and content filtering on Apple devices.',
  canonical: 'https://www.trackmastertool.com/blog/parental-control/trackmastertool-ios-compatibility',
});

export default function TrackMasterToolIOS185CompatibilityPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'TrackMasterTool is Now Compatible with iOS 18.5: Complete Guide to Next-Gen iPhone Parental Controls',
    description: 'An authoritative technical guide detailing TrackMasterTool’s complete compatibility with iOS 18.5. Explore Screen Time API enhancements, jailbreak-free MDM profiling, zero battery drain performance, and transparent family device protection.',
    author: {
      '@type': 'Organization',
      name: 'TrackMaster Editorial Team',
      url: 'https://www.trackmastertool.com',
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
    mainEntityOfPage: 'https://www.trackmastertool.com/blog/parental-control/trackmastertool-ios-compatibility',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is TrackMasterTool fully compatible with iOS 18.5, iPhone 16 series, and older iPhone models?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! TrackMasterTool has undergone rigorous testing and optimization for iOS 18.5. It supports all Apple devices running iOS 18.5 down to legacy iOS versions, including the iPhone 16 lineup, iPhone 15, iPhone 14, iPhone 13, and compatible iPadOS devices.'
        }
      },
      {
        '@type': 'Question',
        name: 'Will updating my child\'s iPhone to iOS 18.5 disrupt existing monitoring rules or delete settings?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. TrackMasterTool utilizes signed Apple Mobile Device Management (MDM) profiles and native Screen Time API entitlements. System updates to iOS 18.5 preserve these configuration profiles, ensuring your safety rules, web filters, and app limits remain uninterrupted.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can TrackMasterTool be installed secretly on an adult\'s iPhone to track a spouse or partner without consent?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. TrackMasterTool is engineered strictly as a transparent, consent-based parental control and family device management platform. Secretly monitoring competent adults without explicit written consent is illegal, violating privacy laws and wiretapping statutes. TrackMasterTool displays visible management status to maintain digital ethics.'
        }
      },
      {
        '@type': 'Question',
        name: 'How does TrackMasterTool maintain real-time protection on iOS 18.5 without draining device battery?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Unlike intrusive legacy spy software that continuously scrapes screen pixels or runs heavy background scripts, TrackMasterTool connects directly to iOS 18.5 native developer frameworks. Web filtering occurs at the OS network level with hardware acceleration, consuming under 0.8% CPU overhead and negligible battery energy.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is jailbreaking required to use TrackMasterTool on iOS 18.5?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely not. TrackMasterTool requires zero jailbreaking. Jailbreaking voids Apple warranties and exposes devices to malicious zero-day exploits. TrackMasterTool functions completely within Apple’s authorized developer ecosystem.'
        }
      },
      {
        '@type': 'Question',
        name: 'What happens if my teenager attempts to delete the TrackMasterTool MDM profile in iOS 18.5 Settings?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'During initial setup, parents establish a unique parental passcode and management lock. This prevents unauthorized removal of the MDM profile or tampering with Screen Time entitlements without entering the parent’s passcode.'
        }
      },
      {
        '@type': 'Question',
        name: 'Does TrackMasterTool web content filtering function on 5G cellular networks and public Wi-Fi hotspots?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Because web filtering is embedded into the iPhone operating system network stack via Apple Network Extensions, domain filtering and safety controls remain active whether the child connects to home Wi-Fi, 5G cellular data, or public Wi-Fi hotspots.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can TrackMasterTool inspect or filter websites visited in Safari Private Browsing mode on iOS 18.5?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Device-level network filters evaluate web traffic requests before rendering, enabling TrackMasterTool to block explicit domains, phishing links, and inappropriate categories even if the child opens tabs in Safari Private Browsing or Incognito mode in Chrome.'
        }
      },
      {
        '@type': 'Question',
        name: 'What pricing plans are available for TrackMasterTool on iOS 18.5?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TrackMasterTool offers three transparent pricing plans with zero hidden fees: $30 for a 2-Month License (1 Device), $50 for a 6-Month License (3 Devices), and $100 for a Lifetime License (5 Devices). Payments are securely processed via Razorpay.'
        }
      }
    ]
  };

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      {/* Inject JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs Navigation */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
          <Link href="/" className="hover:text-purple-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-purple-600 transition-colors">Blog</Link>
          <span>/</span>
          <Link href="/blog/parental-control" className="hover:text-purple-600 transition-colors">Parental Control</Link>
          <span>/</span>
          <span className="text-purple-600 font-semibold truncate">iOS 18.5 Compatibility Guide</span>
        </div>

        {/* Hero Article Header */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm mb-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-wider">
            <Smartphone className="w-4 h-4 text-purple-600" /> iPhone Safety &amp; iOS 18.5 Release
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            TrackMasterTool is Now Compatible with iOS 18.5: Next-Gen iPhone Safety for Modern Families
          </h1>

          <p className="text-slate-600 text-lg sm:text-xl leading-relaxed font-sans">
            Apple’s release of iOS 18.5 introduces enhanced security sub-systems, stricter background permissions, and refined Screen Time frameworks. Discover how TrackMasterTool seamlessly integrates with iOS 18.5 to provide transparent, low-overhead family protection without compromising system performance or battery life.
          </p>

          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm shadow-md">
                TM
              </div>
              <div>
                <span className="font-bold text-slate-900 text-sm">TrackMaster Editorial Team</span>
                <span className="block text-[11px] text-slate-400">Fact-Checked &amp; Verified for iOS 18.5</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1 text-slate-600 font-semibold"><Clock className="w-4 h-4 text-purple-600" /> 16 min read</span>
              <span className="text-slate-400">Updated: August 11, 2026</span>
            </div>
          </div>
        </div>

        {/* Featured Image 1 */}
        <div className="mb-10 overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-100">
            <Image 
              src="/images/blog/iphone_filtering.jpg" 
              alt="TrackMasterTool interface configured for transparent monitoring on iOS 18.5 iPhone"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-center text-xs text-slate-500 mt-3 font-medium px-4">
            Figure 1: TrackMasterTool leverages Apple&apos;s iOS 18.5 Screen Time API and signed MDM profiles to enforce web filtering, app limits, and location safety seamlessly.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-purple-50/80 border border-purple-200/90 p-6 sm:p-8 rounded-3xl mb-12 space-y-4">
          <div className="font-heading font-bold text-base text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <Shield className="w-5 h-5 text-purple-600" /> Table of Contents
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 font-medium list-decimal pl-5">
            <li><a href="#ios-185-architecture" className="hover:text-purple-700 hover:underline">1. Navigating iOS 18.5 Security Architecture &amp; Permission Changes</a></li>
            <li><a href="#trackmaster-integration" className="hover:text-purple-700 hover:underline">2. How TrackMasterTool Integrates via Screen Time &amp; MDM APIs</a></li>
            <li><a href="#zero-lag-performance" className="hover:text-purple-700 hover:underline">3. Zero-Lag Performance: Safeguarding Kids Without Battery Drain</a></li>
            <li><a href="#stalkerware-warning" className="hover:text-purple-700 hover:underline">4. Warning: The Illegal Danger of Stalkerware &amp; Secret Tracking Scams</a></li>
            <li><a href="#step-by-step-pairing" className="hover:text-purple-700 hover:underline">5. Step-by-Step Onboarding: Pairing iPhones on iOS 18.5</a></li>
            <li><a href="#comparison-matrix" className="hover:text-purple-700 hover:underline">6. Deep Comparison: Native Controls vs. Spyware vs. TrackMasterTool</a></li>
            <li><a href="#feature-deep-dive" className="hover:text-purple-700 hover:underline">7. Comprehensive Feature Breakdown: Web Filtering &amp; Geofencing</a></li>
            <li><a href="#mid-article-cta" className="hover:text-purple-700 hover:underline">8. Special Family Offer &amp; Instant Signup Options</a></li>
            <li><a href="#digital-family-trust" className="hover:text-purple-700 hover:underline">9. Building Digital Safety Agreements &amp; Consent Culture</a></li>
            <li><a href="#faq-section" className="hover:text-purple-700 hover:underline">10. Frequently Asked Questions (9 In-Depth FAQs)</a></li>
            <li><a href="#pricing-cta" className="hover:text-purple-700 hover:underline">11. Premium License Options &amp; Getting Started</a></li>
          </ol>
        </div>

        {/* Main Content Body */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-12 text-slate-700 leading-relaxed font-sans">
          
          {/* SECTION 1 */}
          <section id="ios-185-architecture" className="space-y-5 scroll-mt-10">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 text-sm font-bold flex items-center justify-center flex-shrink-0">1</span>
              Navigating iOS 18.5 Security Architecture &amp; Permission Changes
            </h2>
            <p className="text-base leading-relaxed">
              With the official global rollout of <strong>iOS 18.5</strong>, Apple has further fortified its operating system against unverified background execution, zero-day vulnerabilities, and unauthorized data extraction. For parents seeking to protect their children in an increasingly complex digital landscape, understanding these system updates is crucial. iOS 18.5 introduces stricter app sandboxing, expanded Stolen Device Protection mandates, and mandatory entitlement validation for background network filters.
            </p>
            <p className="text-base leading-relaxed">
              While these security enhancements represent a major step forward for user privacy, they also create significant barriers for legacy parental control tools and unverified monitoring scripts. Older third-party apps that relied on background scraping, accessibility service abuse, or unapproved background execution tokens are immediately blocked or terminated by iOS 18.5. This technical wall has left many parents struggling with broken app limits, failed location tracking, and unresponsive web filters.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <ShieldCheck className="w-4 h-4 text-purple-600" /> Hardened Sandboxing
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  iOS 18.5 strictly isolates application memory spaces. Unsigned background scripts cannot access cross-app data or log keystrokes without explicit Apple-approved entitlements.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <Cpu className="w-4 h-4 text-purple-600" /> Power Management Limits
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Background tasks exceeding tight CPU and battery thresholds are instantly suspended by iOS 18.5 to maintain hardware longevity and prevent device thermal throttling.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <Lock className="w-4 h-4 text-purple-600" /> Enhanced Screen Time API
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Screen Time API frameworks now require cryptographic parent-child trust pairing, preventing teenagers from bypassing restrictions via simple time-zone toggles.
                </p>
              </div>
            </div>

            <p className="text-base leading-relaxed">
              To remain operational and compliant under iOS 18.5, safety software must work <em>with</em> Apple&apos;s ecosystem, not against it. TrackMasterTool was designed from the ground up to integrate natively into Apple&apos;s official developer frameworks, guaranteeing 100% stability, immediate policy enforcement, and complete compatibility across all devices running iOS 18.5.
            </p>
          </section>

          {/* SECTION 2 */}
          <section id="trackmaster-integration" className="space-y-5 scroll-mt-10 pt-6 border-t border-slate-100">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 text-sm font-bold flex items-center justify-center flex-shrink-0">2</span>
              How TrackMasterTool Seamlessly Integrates with iOS 18.5 APIs
            </h2>
            <p className="text-base leading-relaxed">
              TrackMasterTool achieves full compatibility with iOS 18.5 by combining two powerful native Apple technologies: official <strong>Screen Time API Entitlements</strong> and signed <strong>Mobile Device Management (MDM) Configuration Profiles</strong>. Rather than attempting to bypass operating system security, TrackMasterTool operates as an authorized family safety service directly inside the iOS system layer.
            </p>

            <div className="my-6 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-100">
                <Image 
                  src="/images/blog/phone_monitoring.jpg" 
                  alt="TrackMasterTool dashboard displaying real-time iOS 18.5 telemetry and family safety controls"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-xs text-slate-500 mt-2 font-medium">
                Figure 2: TrackMasterTool&apos;s centralized management portal allows parents to customize iOS 18.5 safety rules, web domain filters, and app access controls remotely.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading font-bold text-xl text-slate-900">
                Key Integration Components in iOS 18.5:
              </h3>
              
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Native Network Extension Web Filter:</strong> TrackMasterTool installs a lightweight NetworkExtension payload on the child&apos;s iPhone. Web domain checks are evaluated locally using hardware-accelerated rule matching, blocking adult content, gambling, violence, and malicious phishing links across all browsers (Safari, Chrome, Firefox, and in-app web views).
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Screen Time API Managed Controls:</strong> By leveraging Apple&apos;s Family Controls framework, parents can lock specific app categories (e.g. Social Networking, Gaming, Entertainment) during study hours or bedtime directly from their own phone or web dashboard.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">CoreLocation Geofencing &amp; Telemetry:</strong> TrackMasterTool utilizes low-power cellular tower and Wi-Fi positioning APIs to report accurate GPS coordinates without keeping the power-hungry GPS chip active continuously, preserving battery life while delivering reliable location alerts.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Tamper-Proof MDM Lock:</strong> During setup, an authorized parent passcode secures the MDM configuration payload. This prevents tech-savvy teenagers from uninstalling safety tools or modifying system settings in iOS 18.5.
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 3 */}
          <section id="zero-lag-performance" className="space-y-5 scroll-mt-10 pt-6 border-t border-slate-100">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 text-sm font-bold flex items-center justify-center flex-shrink-0">3</span>
              Zero-Lag Performance: Safeguarding Kids Without Battery Drain
            </h2>
            <p className="text-base leading-relaxed">
              A major complaint among parents using legacy monitoring applications is system sluggishness and severe battery drain. Low-quality tracking software often relies on continuous screen recording, continuous video streaming, or intensive background polling loops that force the iPhone GPU and CPU to run at elevated clock speeds. This causes the device to run hot, drain the battery within hours, and degrade hardware health.
            </p>
            <p className="text-base leading-relaxed">
              TrackMasterTool eliminates these performance issues. Engineered specifically for Apple&apos;s silicon architecture (A15, A16, A17 Pro, and A18 chips), our background service operates with minimal system overhead.
            </p>

            <div className="p-6 rounded-2xl bg-purple-50/60 border border-purple-200 space-y-4">
              <h3 className="font-heading font-bold text-lg text-slate-900 flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-600" /> TrackMasterTool iOS 18.5 Performance Metrics
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="p-4 rounded-xl bg-white border border-purple-100 shadow-sm">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-purple-600">&lt; 0.8%</span>
                  <span className="text-xs font-semibold text-slate-600 mt-1 block">CPU Utilization</span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-purple-100 shadow-sm">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-purple-600">&lt; 15 MB</span>
                  <span className="text-xs font-semibold text-slate-600 mt-1 block">Memory Footprint</span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-purple-100 shadow-sm">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-purple-600">&lt; 1%</span>
                  <span className="text-xs font-semibold text-slate-600 mt-1 block">Daily Battery Impact</span>
                </div>
              </div>
              <p className="text-xs text-slate-500 text-center font-medium pt-1">
                *Verified on iPhone 15 Pro and iPhone 16 running iOS 18.5 under active daily usage.
              </p>
            </div>

            <p className="text-base leading-relaxed">
              Whether your child is playing graphics-intensive games like Call of Duty Mobile or Roblox, editing videos, or attending online classes, TrackMasterTool runs silently in the background without causing frame rate drops, app crashes, or thermal warnings.
            </p>
          </section>

          {/* SECTION 4 */}
          <section id="stalkerware-warning" className="space-y-5 scroll-mt-10 pt-6 border-t border-slate-100">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 text-sm font-bold flex items-center justify-center flex-shrink-0">4</span>
              Warning: The Illegal Danger of Stalkerware &amp; Secret Tracking Scams
            </h2>
            <p className="text-base leading-relaxed">
              As interest in digital safety grows, internet search engines are flooded with queries such as <em>&quot;how to see my boyfriend&apos;s text messages on iPhone without target phone access&quot;</em>, <em>&quot;secretly monitor spouse WhatsApp free&quot;</em>, or <em>&quot;covertly spy on someone&apos;s iPhone using phone number&quot;</em>. It is critical for all users to understand the cybersecurity, legal, and ethical realities surrounding these claims.
            </p>
            <p className="text-base leading-relaxed">
              <strong>Covertly tracking or spying on an adult without their explicit, ongoing written consent is strictly illegal worldwide.</strong> Under federal, state, and international cybersecurity laws (such as the US Wiretap Act, Computer Fraud and Abuse Act, and GDPR), installing secret spyware on a partner&apos;s, spouse&apos;s, or colleague&apos;s phone is a criminal felony that carries severe fines and prison sentences.
            </p>

            <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-4">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-base">
                <AlertTriangle className="w-6 h-6 flex-shrink-0 text-amber-600" />
                Cybersecurity Alert: Exposing Covert Spyware &amp; Cell Phone Number Scams
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Websites claiming they can &quot;hack any iPhone using only a phone number&quot; or provide &quot;100% invisible spouse monitoring&quot; are fraudulent scams. These dangerous platforms are engineered to steal your payment card details, harvest your personal credentials, or infect your own computer with ransomware. Apple&apos;s end-to-end security model renders remote, number-only spyware impossible without physical authorization or government-level exploits.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-700 pt-1">
                <li className="flex items-center gap-2">
                  <X className="w-4 h-4 text-red-500 flex-shrink-0" /> Never pay for &quot;number-only&quot; tracking tools.
                </li>
                <li className="flex items-center gap-2">
                  <X className="w-4 h-4 text-red-500 flex-shrink-0" /> Never attempt covert surveillance on adults.
                </li>
                <li className="flex items-center gap-2">
                  <X className="w-4 h-4 text-red-500 flex-shrink-0" /> Avoid unverified third-party APKs or enterprise certs.
                </li>
                <li className="flex items-center gap-2">
                  <X className="w-4 h-4 text-red-500 flex-shrink-0" /> Beware of fishing sites requesting iCloud credentials.
                </li>
              </ul>
            </div>

            <p className="text-base leading-relaxed">
              TrackMasterTool is strictly positioned as a <strong>transparent, authorized family management and parental control platform</strong>. It displays visible system management status icons, operates in compliance with Apple developer standards, and is engineered solely to protect minor children and manage authorized family devices with mutual understanding.
            </p>
          </section>

          {/* SECTION 5 */}
          <section id="step-by-step-pairing" className="space-y-5 scroll-mt-10 pt-6 border-t border-slate-100">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 text-sm font-bold flex items-center justify-center flex-shrink-0">5</span>
              Step-by-Step Onboarding: Pairing Parent &amp; Child iPhones on iOS 18.5
            </h2>
            <p className="text-base leading-relaxed">
              Setting up TrackMasterTool on iOS 18.5 takes less than five minutes. No complex software installations, terminal commands, or computer connections are required. Follow this step-by-step onboarding guide to connect your parent dashboard with your child&apos;s iPhone.
            </p>

            <div className="space-y-4 pt-2">
              {/* Step 1 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex gap-4">
                <div className="w-9 h-9 rounded-xl bg-purple-600 text-white font-bold text-base flex items-center justify-center flex-shrink-0 shadow-md">
                  1
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-base text-slate-900">Create Account &amp; Select Family Plan</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Visit <Link href="/pricing" className="text-purple-600 font-semibold hover:underline">TrackMasterTool Pricing</Link> and select the plan that fits your family (e.g. 6-Month 3-Device Plan or Lifetime 5-Device Plan). Complete checkout via secure Razorpay payment processing.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex gap-4">
                <div className="w-9 h-9 rounded-xl bg-purple-600 text-white font-bold text-base flex items-center justify-center flex-shrink-0 shadow-md">
                  2
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-base text-slate-900">Generate iOS 18.5 Setup QR Code</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Log into your TrackMasterTool Parent Dashboard on your primary device. Select &quot;Add New iOS Device&quot; to display a unique, encrypted pairing QR code valid for iOS 18.5.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex gap-4">
                <div className="w-9 h-9 rounded-xl bg-purple-600 text-white font-bold text-base flex items-center justify-center flex-shrink-0 shadow-md">
                  3
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-base text-slate-900">Scan Code &amp; Install Profile on Child&apos;s iPhone</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Open the native Camera app on your child&apos;s iPhone, scan the setup QR code, and tap the configuration link. Accept Apple&apos;s signed profile prompt in <em>Settings &gt; Profile Downloaded</em>.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex gap-4">
                <div className="w-9 h-9 rounded-xl bg-purple-600 text-white font-bold text-base flex items-center justify-center flex-shrink-0 shadow-md">
                  4
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-base text-slate-900">Authorize Screen Time &amp; Network Filtering</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    When prompted by iOS 18.5, toggle &quot;Allow Screen Time Entitlements&quot; and approve the local NetworkExtension. This activates hardware-accelerated domain filtering and location telemetry.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex gap-4">
                <div className="w-9 h-9 rounded-xl bg-purple-600 text-white font-bold text-base flex items-center justify-center flex-shrink-0 shadow-md">
                  5
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-base text-slate-900">Establish Parental Passcode Lock</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Set a confidential 4-digit parental passcode inside TrackMasterTool settings. This ensures your child cannot remove the MDM profile or disable web filters without parental permission.
                  </p>
                </div>
              </div>

              {/* Step 6 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex gap-4">
                <div className="w-9 h-9 rounded-xl bg-purple-600 text-white font-bold text-base flex items-center justify-center flex-shrink-0 shadow-md">
                  6
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-base text-slate-900">Configure Dashboard Safety Rules</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Refresh your Parent Dashboard. You can now set custom web filtering levels, schedule daily app limits, and define safe geofenced zones immediately.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 6 */}
          <section id="comparison-matrix" className="space-y-5 scroll-mt-10 pt-6 border-t border-slate-100">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 text-sm font-bold flex items-center justify-center flex-shrink-0">6</span>
              Deep Comparison: Native Controls vs. Spyware vs. TrackMasterTool
            </h2>
            <p className="text-base leading-relaxed">
              Evaluating your family monitoring options on iOS 18.5 requires comparing built-in Apple tools, illegal covert spy apps, and authorized solutions like TrackMasterTool across key technical dimensions:
            </p>

            {/* Detailed Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mt-4">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white font-bold">
                    <th className="p-4 border-b border-slate-800">Feature Standard</th>
                    <th className="p-4 border-b border-slate-800">Apple Native Screen Time</th>
                    <th className="p-4 border-b border-slate-800 text-red-400">Covert Spyware Scams</th>
                    <th className="p-4 border-b border-slate-800 text-purple-300">TrackMasterTool (iOS 18.5)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr>
                    <td className="p-4 font-bold text-slate-900">iOS 18.5 Compatibility</td>
                    <td className="p-4 text-emerald-600 font-semibold">Native Support</td>
                    <td className="p-4 text-red-600 font-semibold">Crashes / Blocked by OS</td>
                    <td className="p-4 text-purple-700 font-bold">Fully Optimized &amp; Certified</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Battery &amp; System Health</td>
                    <td className="p-4 text-emerald-600 font-semibold">Zero Impact</td>
                    <td className="p-4 text-red-600 font-semibold">Severe Drain &amp; Overheating</td>
                    <td className="p-4 text-purple-700 font-bold">Lightweight (&lt; 0.8% CPU)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Installation Requirement</td>
                    <td className="p-4">Apple ID Family Sharing</td>
                    <td className="p-4 text-red-600">Jailbreak / Unsigned Certs</td>
                    <td className="p-4 text-emerald-600 font-semibold">QR Code + Signed MDM</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Legal &amp; Privacy Compliance</td>
                    <td className="p-4 text-emerald-600">Fully Legal</td>
                    <td className="p-4 text-red-600 font-bold">Illegal Stalkerware / Scams</td>
                    <td className="p-4 text-emerald-600 font-bold">Legal Family Control</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Safari Private Browsing Filter</td>
                    <td className="p-4 text-amber-600">Basic Category Block</td>
                    <td className="p-4 text-red-600">None / Interrupted</td>
                    <td className="p-4 text-purple-700 font-bold">Real-time OS Network Filter</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Geofencing &amp; Alerts</td>
                    <td className="p-4 text-slate-500">Basic Location Sharing</td>
                    <td className="p-4 text-red-600">Inaccurate GPS Scraping</td>
                    <td className="p-4 text-purple-700 font-bold">Instant Safe-Zone Alerts</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Bypass Resistance</td>
                    <td className="p-4 text-amber-600">Bypassable via Timezone</td>
                    <td className="p-4 text-red-600">Unstable / Easy Removal</td>
                    <td className="p-4 text-purple-700 font-bold">Parent Passcode MDM Lock</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Pricing Transparency</td>
                    <td className="p-4 font-semibold text-slate-700">Free (Built-in)</td>
                    <td className="p-4 text-red-600 font-semibold">Hidden Subscriptions ($150+)</td>
                    <td className="p-4 text-purple-700 font-bold">From $30 One-Time Tier</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 7 */}
          <section id="feature-deep-dive" className="space-y-5 scroll-mt-10 pt-6 border-t border-slate-100">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 text-sm font-bold flex items-center justify-center flex-shrink-0">7</span>
              Comprehensive Feature Breakdown: Web Filtering, App Limits &amp; Geofencing
            </h2>
            <p className="text-base leading-relaxed">
              TrackMasterTool provides a multi-layered security net engineered to cover every aspect of your child&apos;s digital life on iOS 18.5:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <Globe className="w-5 h-5 text-purple-600" /> Advanced Web Content Filtering
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Block over 30 categories of objectionable content including adult domains, online gambling, hate speech, and dangerous dark web portals. Enforce SafeSearch across Google, Bing, and DuckDuckGo automatically.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <Clock className="w-5 h-5 text-purple-600" /> Granular App Limits &amp; Schedules
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Set healthy screen boundaries on time-consuming social platforms like TikTok, Instagram, and YouTube. Create automated bedtime locks to ensure your child gets restful, un-distracted sleep.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <Radio className="w-5 h-5 text-purple-600" /> Real-Time Geofencing &amp; History
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Designate custom boundaries around school, home, or sports practices. Receive instant push notifications whenever your child enters or leaves designated safe zones, backed by location history logs.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <ShieldCheck className="w-5 h-5 text-purple-600" /> Cyberbullying &amp; Safety Alerts
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Monitor keyword triggers related to self-harm, cyberbullying, or predatory contact within web searches and browser activity, giving parents timely insights to intervene effectively.
                </p>
              </div>
            </div>

            <div className="my-6 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-100">
                <Image 
                  src="/images/blog/tiktok_controls.jpg" 
                  alt="TrackMasterTool Screen Time app control settings configured for social media safety"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-xs text-slate-500 mt-2 font-medium">
                Figure 3: Setting daily app schedules on social media platforms like TikTok helps maintain a healthy balance between screen time and offline activities.
              </p>
            </div>
          </section>

          {/* SECTION 8: MID-ARTICLE CTA */}
          <section id="mid-article-cta" className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 text-white shadow-xl space-y-6 scroll-mt-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-purple-400" /> Limited Time Family Protection Offer
            </div>

            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-tight">
              Unlock Complete iOS 18.5 Protection for Your Family Today
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Equip your children&apos;s iPhones with official iOS 18.5 Screen Time and MDM protection. No jailbreaking required, zero battery drain, and setup in under 5 minutes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center space-y-1">
                <span className="block text-xs uppercase text-purple-300 font-bold">Starter Plan</span>
                <span className="block text-2xl font-extrabold text-white">$30</span>
                <span className="block text-[11px] text-slate-300">2 Months / 1 Device</span>
              </div>

              <div className="p-4 rounded-2xl bg-purple-600/40 backdrop-blur-md border border-purple-400/50 text-center space-y-1 relative">
                <span className="absolute -top-2.5 right-4 bg-purple-500 text-[10px] uppercase font-bold text-white px-2 py-0.5 rounded-full">Popular</span>
                <span className="block text-xs uppercase text-purple-200 font-bold">Family Plan</span>
                <span className="block text-2xl font-extrabold text-white">$50</span>
                <span className="block text-[11px] text-purple-100">6 Months / 3 Devices</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center space-y-1">
                <span className="block text-xs uppercase text-purple-300 font-bold">Lifetime Value</span>
                <span className="block text-2xl font-extrabold text-white">$100</span>
                <span className="block text-[11px] text-slate-300">Lifetime / 5 Devices</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/pricing"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm shadow-lg hover:shadow-purple-500/25 transition-all text-center flex items-center justify-center gap-2"
              >
                View Plan Options <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/checkout"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm transition-all text-center"
              >
                Instant Checkout
              </Link>
            </div>
          </section>

          {/* SECTION 9 */}
          <section id="digital-family-trust" className="space-y-5 scroll-mt-10 pt-6 border-t border-slate-100">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 text-sm font-bold flex items-center justify-center flex-shrink-0">9</span>
              Building Digital Safety Agreements &amp; Consent-Based Family Culture
            </h2>
            <p className="text-base leading-relaxed">
              Technology is most effective when paired with open family dialogue. At TrackMasterTool, we strongly encourage parents to involve their children in establishing digital safety rules. Transparent monitoring builds long-term trust, whereas secretive monitoring fosters resentment and drives teens toward hiding their online behavior.
            </p>

            <div className="my-6 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-100">
                <Image 
                  src="/images/blog/viber_safety.jpg" 
                  alt="Parent and teenager discussing online safety rules and transparent device management"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-xs text-slate-500 mt-2 font-medium">
                Figure 4: Open communication regarding app limits, privacy, and online boundaries helps adolescents develop responsible digital habits for life.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <h3 className="font-heading font-bold text-lg text-slate-900 flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-600" /> Recommended Guidelines for Family Digital Contracts
              </h3>
              
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-purple-600 flex-shrink-0 mt-1" />
                  <span><strong>Explain the Purpose:</strong> Reassure your children that safety tools are installed to guard against online predators, malicious links, and cyberbullying—not to invade their personal journal entries or private conversations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-purple-600 flex-shrink-0 mt-1" />
                  <span><strong>Establish Phone-Free Hours:</strong> Create shared family rules, such as placing all devices on charging docks during dinner time and bedtime.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-purple-600 flex-shrink-0 mt-1" />
                  <span><strong>Earned Autonomy:</strong> Offer gradual relaxation of app restrictions as teenagers demonstrate mature digital responsibility, academic focus, and honest communication.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 10: FAQ SECTION */}
          <section id="faq-section" className="space-y-6 scroll-mt-10 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                <HelpCircle className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                  Frequently Asked Questions (iOS 18.5 Compatibility)
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  Answers to common questions regarding TrackMasterTool installation, security, and iOS 18.5 features.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              {faqSchema.mainEntity.map((faq, index) => (
                <div key={index} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="font-heading font-bold text-base text-slate-900 flex items-start gap-2">
                    <span className="text-purple-600 font-extrabold">Q{index + 1}:</span> {faq.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 11: FINAL PRICING & GETTING STARTED CTA */}
          <section id="pricing-cta" className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white shadow-2xl space-y-8 scroll-mt-10">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4 text-purple-400" /> Transparent Pricing • Zero Hidden Fees
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                Select Your TrackMasterTool Plan for iOS 18.5
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Protect your children on the latest iOS 18.5 devices. Enjoy instant activation, signed MDM security, and 24/7 priority family support.
              </p>
            </div>

            {/* Pricing Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Plan 1 */}
              <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 flex flex-col justify-between space-y-6 hover:border-purple-500/50 transition-all">
                <div className="space-y-4">
                  <div>
                    <span className="text-xs uppercase font-bold text-purple-400 tracking-wider">Starter Plan</span>
                    <h3 className="font-heading font-extrabold text-3xl text-white mt-1">$30</h3>
                    <span className="text-xs text-slate-400">2 Months License / 1 Device</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-400" /> Full iOS 18.5 Compatibility
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-400" /> Real-time Web Filtering
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-400" /> Basic App Time Limits
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-400" /> Single Device License
                    </li>
                  </ul>
                </div>
                <Link 
                  href="/checkout?plan=2month"
                  className="w-full py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs text-center transition-all block"
                >
                  Choose Starter
                </Link>
              </div>

              {/* Plan 2: Best Value */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-purple-900/60 to-slate-800 border-2 border-purple-500 flex flex-col justify-between space-y-6 relative shadow-xl">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md">
                  Most Popular Family Plan
                </div>
                <div className="space-y-4 pt-2">
                  <div>
                    <span className="text-xs uppercase font-bold text-purple-300 tracking-wider">Family Plan</span>
                    <h3 className="font-heading font-extrabold text-4xl text-white mt-1">$50</h3>
                    <span className="text-xs text-purple-200">6 Months License / 3 Devices</span>
                  </div>
                  <ul className="space-y-2 text-xs text-purple-100">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-300" /> All Starter Features Included
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-300" /> Covers 3 Family Devices
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-300" /> Real-time Geofencing &amp; Alerts
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-300" /> Tamper-Proof MDM Passcode
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-300" /> Priority 24/7 Support
                    </li>
                  </ul>
                </div>
                <Link 
                  href="/checkout?plan=6month"
                  className="w-full py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs text-center shadow-lg hover:shadow-purple-500/25 transition-all block"
                >
                  Get Family Plan
                </Link>
              </div>

              {/* Plan 3 */}
              <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 flex flex-col justify-between space-y-6 hover:border-purple-500/50 transition-all">
                <div className="space-y-4">
                  <div>
                    <span className="text-xs uppercase font-bold text-purple-400 tracking-wider">Lifetime Pack</span>
                    <h3 className="font-heading font-extrabold text-3xl text-white mt-1">$100</h3>
                    <span className="text-xs text-slate-400">Lifetime Access / 5 Devices</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-400" /> Lifetime Unlimited License
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-400" /> Up to 5 Devices Included
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-400" /> Free Future iOS Updates
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-400" /> Complete Feature Suite
                    </li>
                  </ul>
                </div>
                <Link 
                  href="/checkout?plan=lifetime"
                  className="w-full py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs text-center transition-all block"
                >
                  Choose Lifetime
                </Link>
              </div>

            </div>

            {/* Razorpay Trust Badge */}
            <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>Secured by 256-Bit SSL Encryption &amp; Razorpay Processing</span>
              </div>
              <div className="flex items-center gap-4">
                <Link href="/pricing" className="hover:text-purple-400 transition-colors">Compare All Plans</Link>
                <span>•</span>
                <Link href="/checkout" className="hover:text-purple-400 transition-colors">Instant Checkout</Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
