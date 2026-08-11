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
  Info
} from 'lucide-react';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Best Tracking Software for iPhone – The Ultimate Solution for Monitoring',
  description: 'Compare the best tracking software for iPhone in 2026. Discover how transparent, authorized MDM platforms like TrackMasterTool offer secure, jailbreak-free family monitoring.',
  canonical: 'https://trackmastertool.vercel.app/blog/parental-control/best-tracking-software-for-iphone',
});

export default function BestIPhoneTrackingSoftwarePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Best Tracking Software for iPhone: The Ultimate Solution for Family Monitoring',
    description: 'An in-depth, expert review comparing the best iPhone tracking software categories in 2026. Analyze MDM profiles, battery consumption, and the safety differences between covert stalkerware and transparent authorized monitoring.',
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
    datePublished: '2026-08-11',
    dateModified: '2026-08-11',
    mainEntityOfPage: 'https://trackmastertool.vercel.app/blog/parental-control/best-tracking-software-for-iphone',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is it legal to track an iPhone secretly without the user\'s consent?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Covertly tracking an adult spouse, boyfriend, girlfriend, or employee without their explicit, written, and active consent is strictly illegal and violates wiretapping, hacking, and privacy laws worldwide. TrackMasterTool is designed exclusively for transparent, consent-based parental control and authorized family device management, displaying visible banners to promote trust.'
        }
      },
      {
        '@type': 'Question',
        name: 'Will TrackMasterTool drain the target iPhone\'s battery life or cause overheating?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Unlike low-quality covert tracking apps that run continuous, intensive background scripts, TrackMasterTool operates via Apple’s native Mobile Device Management (MDM) configuration. This framework runs at the OS level with negligible system overhead, ensuring standard battery longevity and smooth device performance.'
        }
      },
      {
        '@type': 'Question',
        name: 'Does this iPhone tracking software require jailbreaking the target device?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, jailbreaking is 100% unnecessary. TrackMasterTool uses standard, authorized Apple family management configuration profiles. This avoids the severe security hazards, voided warranties, and vulnerability to malware associated with traditional jailbreaks.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can my child bypass or uninstall TrackMasterTool from their iPhone settings?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, if configured correctly. During setup, parents can use a unique, separate parental passcode to lock the MDM profile, which prevents the child from deleting the configuration or removing the safety rules without parental authorization.'
        }
      },
      {
        '@type': 'Question',
        name: 'Does the software log history inside private browsing or incognito tabs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. By leveraging secure network configuration filters at the device level, TrackMasterTool can monitor and log visited domains and search queries even if the child opens Private Browsing tabs in Safari or Incognito mode in third-party browsers.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can TrackMasterTool monitor apps like WhatsApp, TikTok, Viber, and Instagram?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. It allows parents to log web activity within in-app browsers, block access to specific app categories, set strict usage schedules, and prevent the installation of unapproved apps from the App Store.'
        }
      },
      {
        '@type': 'Question',
        name: 'Does the tracking software work when the iPhone is on cellular 4G/5G or public Wi-Fi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Because the MDM and network filters are installed directly onto the iOS operating system, the protection and monitoring rules remain active regardless of the network connection, whether the device is on home Wi-Fi, public hotspots, or mobile cellular data.'
        }
      },
      {
        '@type': 'Question',
        name: 'Are there any hidden fees, and what payment methods do you accept?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'There are absolutely no hidden fees or auto-billing tricks. TrackMasterTool offers three simple, transparent pricing tiers: $30 for a 2-Month License (1 Device), $50 for a 6-Month License (3 Devices), and $100 for a Lifetime License (5 Devices). Payments are securely processed via Razorpay.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the main difference between TrackMasterTool and covert spy apps?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TrackMasterTool is a legitimate, transparent cybersecurity utility built in compliance with Apple’s security guidelines. Covert spy apps are often malware scams that compromise data privacy, run unstable code that drains the battery, and expose user credentials to hacker groups on the dark web.'
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
          <span className="text-purple-600 font-semibold truncate">Best Tracking Software for iPhone</span>
        </div>

        {/* Hero Article Header */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm mb-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-wider">
            <Smartphone className="w-4 h-4 text-purple-600" /> iPhone Safety & Security
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            Best Tracking Software for iPhone – The Ultimate Solution for Monitoring
          </h1>

          <p className="text-slate-600 text-lg sm:text-xl leading-relaxed font-sans">
            Navigating the complex landscape of iOS monitoring in 2026 requires understanding the crucial boundaries between system-safe parental controls and dangerous covert stalkerware. Learn how to compare and select the best authorized tracking software for family devices.
          </p>

          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm shadow-md">
                TM
              </div>
              <div>
                <span className="font-bold text-slate-900 text-sm">TrackMaster Editorial Team</span>
                <span className="block text-[11px] text-slate-400">Fact-Checked & Reviewed by Cybersecurity Experts</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1 text-slate-600 font-semibold"><Clock className="w-4 h-4 text-purple-600" /> 18 min read</span>
              <span className="text-slate-400">Updated: August 11, 2026</span>
            </div>
          </div>
        </div>

        {/* Featured Image 1 */}
        <div className="mb-10 overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-100">
            <Image 
              src="/images/blog/iphone_filtering.jpg" 
              alt="Parent configuring authorized iPhone safety settings and monitoring dashboard rules"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-center text-xs text-slate-500 mt-3 font-medium px-4">
            Figure 1: Safe and authorized tracking software on iOS must operate through standard Apple developer APIs, protecting data privacy and keeping system security intact.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-purple-50/80 border border-purple-200/90 p-6 sm:p-8 rounded-3xl mb-12 space-y-4">
          <div className="font-heading font-bold text-base text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <Shield className="w-5 h-5 text-purple-600" /> Table of Contents
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 font-medium list-decimal pl-5">
            <li><a href="#understanding-ios" className="hover:text-purple-700 hover:underline">1. Understanding iOS Monitoring: Parental Control vs. Stalkerware</a></li>
            <li><a href="#comparison-criteria" className="hover:text-purple-700 hover:underline">2. The 4 Essential Comparison Criteria for iPhone Tracking Tools</a></li>
            <li><a href="#review-categories" className="hover:text-purple-700 hover:underline">3. Review of Top iPhone Tracking Software Categories in 2026</a></li>
            <li><a href="#stalkerware-warnings" className="hover:text-purple-700 hover:underline">4. Warning: The Dangers of Covert &quot;Secret Tracking&quot; Scams</a></li>
            <li><a href="#how-mdm-works" className="hover:text-purple-700 hover:underline">5. Deep-Dive: How MDM Configuration Profiles Safeguard iOS</a></li>
            <li><a href="#why-trackmastertool" className="hover:text-purple-700 hover:underline">6. Why TrackMasterTool Stands Out for Family Devices</a></li>
            <li><a href="#comparison-table" className="hover:text-purple-700 hover:underline">7. Detailed Feature & Pricing Comparison Table</a></li>
            <li><a href="#onboarding-guide" className="hover:text-purple-700 hover:underline">8. Step-by-Step Onboarding & Authorized Setup Guide</a></li>
            <li><a href="#family-agreements" className="hover:text-purple-700 hover:underline">9. Building a Healthy Digital Safety Agreement</a></li>
            <li><a href="#faq" className="hover:text-purple-700 hover:underline">10. Frequently Asked Questions (9+ Detailed FAQs)</a></li>
          </ol>
        </div>

        {/* Main Body Content */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-12 text-slate-700 leading-relaxed font-sans">
          
          {/* SECTION 1 */}
          <section id="understanding-ios" className="space-y-5 scroll-mt-10">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 text-sm font-bold flex items-center justify-center flex-shrink-0">1</span>
              Understanding iOS Monitoring: Parental Control vs. Stalkerware
            </h2>
            <p className="text-base leading-relaxed">
              When searching for the <strong>best tracking software for iPhone</strong>, users are often met with a chaotic mix of marketing promises. Some tools promote themselves as complete &quot;ghost mode&quot; spy apps, while others position themselves as transparent family safety utilities. To choose a solution that protects both your family and your legal standing, you must first understand the fundamental differences between legitimate parental control and illegal stalkerware.
            </p>
            <p className="text-base leading-relaxed">
              Legitimate tracking software is designed exclusively for minor children under parental supervision or authorized company-owned assets. It operates transparently, is installed with full admin privileges, and complies with Apple’s rigid developer guidelines. In contrast, stalkerware attempts to monitor adult users covertly. In almost all legal jurisdictions worldwide, installing tracking software on an adult’s phone without their explicit, ongoing consent is a severe criminal offense, violating wiretapping, computer access, and digital privacy statutes.
            </p>

            <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-4">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <AlertTriangle className="w-5 h-5 flex-shrink-0" /> Important Legal Notice: Covert Monitoring of Adults
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Covertly monitoring a spouse, partner, or boyfriend on iOS is not only highly unethical, but it is also legally prosecutable under digital harassment and unauthorized wiretapping laws. If a website claims to offer a &quot;undetectable tracking solution&quot; to spy on adults, it is a critical security risk. These services are almost always phishing traps or data-stealing scams. Legitimate platforms like TrackMasterTool are engineered strictly as transparent, consent-based parental controls and family device managers.
              </p>
            </div>
          </section>

          {/* SECTION 2 */}
          <section id="comparison-criteria" className="space-y-5 scroll-mt-10 pt-6 border-t border-slate-100">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 text-sm font-bold flex items-center justify-center flex-shrink-0">2</span>
              The 4 Essential Comparison Criteria for iPhone Tracking Tools
            </h2>
            <p className="text-base leading-relaxed">
              To separate high-quality applications from unstable web scams, you should evaluate any iOS tracking tool against four fundamental technical standards:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-6 rounded-2xl bg-purple-50/70 border border-purple-200/80 space-y-3">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <ShieldCheck className="w-5 h-5 text-purple-600 flex-shrink-0" /> MDM Profiles vs. Jailbreaking
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Avoid any software that requires you to &quot;jailbreak&quot; an iPhone. Jailbreaking destroys Apple's sandbox security system, rendering the device highly vulnerable to credential theft and malware. Modern tracking software must utilize Apple's native, signed <strong>Mobile Device Management (MDM) configuration profiles</strong> to execute safety rules securely.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-3">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <Zap className="w-5 h-5 text-amber-600 flex-shrink-0" /> Battery & System Efficiency
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Poorly designed monitoring apps run heavy scripts continuously in the background, which rapidly drains battery life and causes the iPhone to overheat. Look for optimized tools that rely on lightweight APIs or network-level DNS configurations to keep battery usage imperceptible.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-red-50/70 border border-red-200/80 space-y-3">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <Lock className="w-5 h-5 text-red-600 flex-shrink-0" /> Data Privacy & End-to-End Encryption
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  When you monitor a child's web history or location, that sensitive information must remain confidential. Verify that the software provider encrypts all transit data and stores logs on secured cloud servers that comply with modern privacy frameworks (like COPPA and GDPR).
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-3">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <Smartphone className="w-5 h-5 text-emerald-600 flex-shrink-0" /> Ease of Onboarding & Setup
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  You should not need a computer engineering degree to protect your children. The best software offers a clean setup wizard that takes under five minutes to complete via a simple QR code scan or configuration link directly on the target iOS device.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 3 */}
          <section id="review-categories" className="space-y-5 scroll-mt-10 pt-6 border-t border-slate-100">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 text-sm font-bold flex items-center justify-center flex-shrink-0">3</span>
              Review of Top iPhone Tracking Software Categories in 2026
            </h2>
            <p className="text-base leading-relaxed">
              Evaluating the absolute &quot;best tracking software&quot; depends on your safety goals. In 2026, the market for iOS tracking is divided into four distinct categories:
            </p>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-base mb-1">Category A: Apple Built-In Tools (Screen Time & Find My)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Apple provides pre-installed tools like Screen Time for setting app limits and Find My for location tracking. While completely free, stable, and secure, they are easy for tech-savvy children to bypass. For example, kids can bypass Safari history filters by downloading alternative web browsers (like Opera or Brave) or utilizing virtual private networks (VPNs).
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-base mb-1">Category B: Network DNS Filters (OpenDNS, CleanBrowsing)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  These services alter the DNS settings on your home router to block adult and malicious web content. While highly effective at filtering all devices connected to your home Wi-Fi, they offer zero protection once your child switches to mobile cellular 4G/5G data or connects to a friend's Wi-Fi network.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-base mb-1">Category C: Legacy Stalkerware (Convert Spy Tools)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  These applications advertise &quot;stealth monitoring&quot; of SMS, calls, and keylogs. Because they violate Apple's terms of service, they cannot be listed on the App Store. Instead, they require complex jailbreaking procedures or ask parents to input the child's raw iCloud credentials (email and password), which creates massive privacy risks. These tools frequently steal login credentials and sell browsing data to data brokers.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-purple-50/50 border border-purple-200">
                <h3 className="font-bold text-purple-900 text-base mb-1">Category D: Premium MDM Parental Control (TrackMasterTool)</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  The modern standard for family safety. By using official iOS configuration profiles, tools in this category provide cross-browser web history logging, robust app blocker controls, real-time alert logs, and tamper-proof security rules. It requires no jailbreaking, causes zero battery drain, and works consistently across cellular data and external Wi-Fi networks.
                </p>
              </div>
            </div>
          </section>

          {/* Featured Image 2 */}
          <div className="mb-10 overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-100">
              <Image 
                src="/images/blog/phone_monitoring.jpg" 
                alt="Smartphone showing live map location tracking and device activity metrics"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center text-xs text-slate-500 mt-3 font-medium px-4">
              Figure 2: Modern tracking portals allow legal guardians to check live device coordinates and set custom geolocation parameters to verify arrival at safe zones like school or home.
            </p>
          </div>

          {/* SECTION 4 */}
          <section id="stalkerware-warnings" className="space-y-5 scroll-mt-10 pt-6 border-t border-slate-100">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 text-sm font-bold flex items-center justify-center flex-shrink-0">4</span>
              Warning: The Dangers of Covert &quot;Secret Tracking&quot; Scams
            </h2>
            <p className="text-base leading-relaxed">
              If you browse the web for mobile trackers, you will encounter numerous websites promising to &quot;secretly track any iPhone with just a phone number&quot; or &quot;read your boyfriend's messages without touching his phone.&quot; As security experts, we must emphasize that <strong>these claims are 100% fraudulent.</strong>
            </p>
            <p className="text-base leading-relaxed">
              Apple's security infrastructure makes it impossible to install software or retrieve data from an iPhone without physical access, a passcode, or Apple ID authentication. Websites that claim to offer &quot;remote phone number lookups&quot; that intercept live SMS or WhatsApp chats are deceptive scams designed to collect your credit card details or trick you into downloading adware. 
            </p>
            <p className="text-base leading-relaxed">
              Furthermore, attempting to bypass safety parameters to monitor a partner destroys trust and crosses clear legal boundaries. In the United States, under federal and state wiretapping laws, installing spy software on a device owned by another adult can result in felony charges, substantial fines, and imprisonment. Legitimacy, transparency, and explicit mutual consent are the only valid legal paths for device tracking.
            </p>
          </section>

          {/* SECTION 5 */}
          <section id="how-mdm-works" className="space-y-5 scroll-mt-10 pt-6 border-t border-slate-100">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 text-sm font-bold flex items-center justify-center flex-shrink-0">5</span>
              Deep-Dive: How MDM Configuration Profiles Safeguard iOS
            </h2>
            <p className="text-base leading-relaxed">
              To understand why the best tracking software for iPhone relies on MDM, you have to look at how Apple controls device rules. Mobile Device Management (MDM) is an administrative framework built directly into the iOS operating system by Apple. Initially designed for corporate enterprise environments to manage employee devices, the MDM framework is now the gold standard for parental control tools.
            </p>
            <p className="text-base leading-relaxed">
              When a parent installs a configuration profile on a child's iPhone, it registers the device with a secure parent server. The server can then configure restrictions at the system level. Because this happens natively, the profile does not require a background app to run constantly. This results in:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-slate-600">
              <li><strong>Zero Battery Loss:</strong> Network rules and app restrictions are handled directly by the iOS kernel, which uses no additional battery life.</li>
              <li><strong>Tamper Prevention:</strong> During configuration, parents can apply a restriction passcode that locks the profile in place. The child cannot remove the profile from Settings without the passcode.</li>
              <li><strong>Cross-Browser Authority:</strong> MDM profiles apply system-wide network routing filters. Visited domains are checked regardless of whether the child is browsing in Safari, Google Chrome, Firefox, or inside an app's built-in web-view (like the TikTok or Instagram in-app browsers).</li>
            </ul>
          </section>

          {/* Middle CTA Block */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white text-center space-y-6 shadow-2xl border border-slate-800 my-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" /> Recommended Family Solution
            </div>

            <h3 className="font-heading font-extrabold text-xl sm:text-3xl text-white tracking-tight">
              Get Started with Authorized iOS Monitoring Today
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Shield your family with TrackMasterTool. Enjoy transparent web filtering, cross-browser supervision, live alerts, and robust app limit controls.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto pt-2 text-left">
              <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 text-center">
                <div className="text-[10px] text-slate-400 uppercase font-semibold">2 Months License</div>
                <div className="text-xl font-extrabold text-white mt-1">$30</div>
                <div className="text-[10px] text-slate-400 mt-0.5">1 Authorized Device</div>
              </div>

              <div className="p-4 rounded-xl bg-purple-600/30 border border-purple-500/50 text-center">
                <div className="text-[10px] text-purple-200 uppercase font-semibold">6 Months License</div>
                <div className="text-xl font-extrabold text-white mt-1">$50</div>
                <div className="text-[10px] text-purple-200 mt-0.5">Up to 3 Devices</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 text-center">
                <div className="text-[10px] text-amber-400 uppercase font-semibold">Lifetime License</div>
                <div className="text-xl font-extrabold text-white mt-1">$100</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Up to 5 Devices</div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/pricing" 
                className="px-6 py-3.5 bg-purple-600 hover:bg-purple-50 font-bold rounded-xl text-white hover:text-purple-700 text-xs shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center gap-2"
              >
                <span>View Plans & Pricing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/checkout" 
                className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 font-semibold rounded-xl text-slate-200 text-xs border border-slate-700 transition-colors flex items-center justify-center"
              >
                <span>Buy Now via Razorpay</span>
              </Link>
            </div>
          </div>

          {/* SECTION 6 */}
          <section id="why-trackmastertool" className="space-y-5 scroll-mt-10 pt-6 border-t border-slate-100">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 text-sm font-bold flex items-center justify-center flex-shrink-0">6</span>
              Why TrackMasterTool Stands Out for Family Devices
            </h2>
            <p className="text-base leading-relaxed">
              TrackMasterTool was engineered specifically to solve the common drawbacks of standard iOS monitoring. It combines enterprise-grade MDM technology with an intuitive, family-focused interface.
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 flex-shrink-0 font-bold text-sm mt-0.5">✓</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Cross-Browser History Supervision</h4>
                  <p className="text-xs text-slate-600">
                    Unlike standard Screen Time which only logs details from Apple’s native Safari browser, TrackMasterTool monitors web traffic across Google Chrome, Firefox, Brave, and even the web-views embedded within apps like TikTok, Instagram, and Viber.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 flex-shrink-0 font-bold text-sm mt-0.5">✓</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Private & Incognito Protection</h4>
                  <p className="text-xs text-slate-600">
                    If your child switches Safari to Private Browsing or opens an Incognito tab in Chrome, TrackMasterTool’s network-level filter will still capture the domain name and log it safely on your dashboard.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 flex-shrink-0 font-bold text-sm mt-0.5">✓</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Category-Based Content Blocker</h4>
                  <p className="text-xs text-slate-600">
                    You don't need to manually type in thousands of adult websites. With one tap on your parent dashboard, you can block entire categories of risky content including Adult Media, Violence, Gambling, online gaming servers, and unapproved chatrooms.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 flex-shrink-0 font-bold text-sm mt-0.5">✓</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Ethical & Consent-First Structure</h4>
                  <p className="text-xs text-slate-600">
                    By showing a transparent banner on the device indicating that it is configured under family safety management, TrackMasterTool encourages mutual respect, open discussions, and safe digital behavior.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Image 3 */}
          <div className="mb-10 overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-100">
              <Image 
                src="/images/blog/tiktok_controls.jpg" 
                alt="Smartphone showing Screen Time restrictions and blocking screen for social media app"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center text-xs text-slate-500 mt-3 font-medium px-4">
              Figure 3: Enforcing app schedule limits and blocking in-app browsing access prevents kids from encountering cyberbullying and dangerous web links on popular social media.
            </p>
          </div>

          {/* SECTION 7: Comparison Table */}
          <section id="comparison-table" className="space-y-5 scroll-mt-10 pt-6 border-t border-slate-100">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 text-sm font-bold flex items-center justify-center flex-shrink-0">7</span>
              Detailed Feature & Pricing Comparison Table
            </h2>
            <p className="text-base leading-relaxed">
              Compare all four tracking software categories side-by-side to understand features, battery impact, setup procedures, and pricing:
            </p>

            <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 sm:p-4 font-bold border-b border-slate-800">Feature</th>
                    <th className="p-3 sm:p-4 font-bold border-b border-slate-800 text-center">Apple Screen Time</th>
                    <th className="p-3 sm:p-4 font-bold border-b border-slate-800 text-center">DNS Filters</th>
                    <th className="p-3 sm:p-4 font-bold border-b border-slate-800 text-center text-red-400">Covert Spy Apps</th>
                    <th className="p-3 sm:p-4 font-bold border-b border-slate-800 text-center bg-purple-600">TrackMasterTool</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-slate-900">Safari History Logs</td>
                    <td className="p-3 text-center text-emerald-600 font-bold"><Check className="w-4 h-4 mx-auto" /></td>
                    <td className="p-3 text-center text-slate-500">Domains Only</td>
                    <td className="p-3 text-center text-emerald-600 font-bold"><Check className="w-4 h-4 mx-auto" /></td>
                    <td className="p-3 text-center text-emerald-600 font-bold bg-purple-50"><Check className="w-4 h-4 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-slate-900">Chrome & Firefox Logging</td>
                    <td className="p-3 text-center text-red-500 font-bold"><X className="w-4 h-4 mx-auto" /></td>
                    <td className="p-3 text-center text-slate-500">Domains Only</td>
                    <td className="p-3 text-center text-red-500 font-bold"><X className="w-4 h-4 mx-auto" /></td>
                    <td className="p-3 text-center text-emerald-600 font-bold bg-purple-50"><Check className="w-4 h-4 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-slate-900">Incognito Mode Capture</td>
                    <td className="p-3 text-center text-slate-500">Bypassed</td>
                    <td className="p-3 text-center text-slate-500">DNS Logs</td>
                    <td className="p-3 text-center text-red-500 font-bold"><X className="w-4 h-4 mx-auto" /></td>
                    <td className="p-3 text-center text-emerald-600 font-bold bg-purple-50"><Check className="w-4 h-4 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-slate-900">Works on 4G/5G Networks</td>
                    <td className="p-3 text-center text-emerald-600 font-bold"><Check className="w-4 h-4 mx-auto" /></td>
                    <td className="p-3 text-center text-red-500 font-bold"><X className="w-4 h-4 mx-auto" /></td>
                    <td className="p-3 text-center text-emerald-600 font-bold"><Check className="w-4 h-4 mx-auto" /></td>
                    <td className="p-3 text-center text-emerald-600 font-bold bg-purple-50"><Check className="w-4 h-4 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-slate-900">Requires Jailbreaking</td>
                    <td className="p-3 text-center text-emerald-600 font-bold">No</td>
                    <td className="p-3 text-center text-emerald-600 font-bold">No</td>
                    <td className="p-3 text-center text-amber-600 font-semibold">Often Required</td>
                    <td className="p-3 text-center text-emerald-600 font-bold bg-purple-50">100% No</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-slate-900">Battery & CPU Impact</td>
                    <td className="p-3 text-center text-slate-500">Negligible</td>
                    <td className="p-3 text-center text-slate-500">Negligible</td>
                    <td className="p-3 text-center text-red-500 font-bold">Severe Drain</td>
                    <td className="p-3 text-center text-emerald-600 font-bold bg-purple-50">Negligible</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-slate-900">Pricing / Licensing</td>
                    <td className="p-3 text-center text-emerald-600 font-bold">Free</td>
                    <td className="p-3 text-center text-emerald-600 font-bold">Free / Cheap</td>
                    <td className="p-3 text-center text-red-500 font-bold">$40 - $70/mo</td>
                    <td className="p-3 text-center text-emerald-600 font-bold bg-purple-50">$30 (2mo) / $50 (6mo) / $100 (Lifetime)</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-slate-900">Legal Status & Safety</td>
                    <td className="p-3 text-center text-slate-500">Safe</td>
                    <td className="p-3 text-center text-slate-500">Safe</td>
                    <td className="p-3 text-center text-red-600 font-bold">Risky / Illegal</td>
                    <td className="p-3 text-center text-emerald-600 font-bold bg-purple-50">100% Legitimate</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Featured Image 4 */}
          <div className="mb-10 overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-100">
              <Image 
                src="/images/blog/viber_safety.jpg" 
                alt="Teen checking messaging app settings with visual interface on phone screen"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center text-xs text-slate-500 mt-3 font-medium px-4">
              Figure 4: Secure family software prevents children from logging into unvetted chat apps or clicking phishing links shared in messaging channels.
            </p>
          </div>

          {/* SECTION 8: Setup Guide */}
          <section id="onboarding-guide" className="space-y-5 scroll-mt-10 pt-6 border-t border-slate-100">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 text-sm font-bold flex items-center justify-center flex-shrink-0">8</span>
              Step-by-Step Onboarding & Authorized Setup Guide
            </h2>
            <p className="text-base leading-relaxed">
              Setting up TrackMasterTool on an authorized iOS device takes less than five minutes. Follow these simple steps to secure your child's iPhone:
            </p>

            <div className="space-y-4 text-sm text-slate-700">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm flex-shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">Choose a License Plan</h4>
                  <p className="text-xs text-slate-600">
                    Visit the <Link href="/pricing" className="text-purple-600 font-semibold hover:underline">TrackMasterTool Pricing Page</Link> and select your license tier ($30 for 2 months, $50 for 6 months, or $100 for a Lifetime subscription). Complete the checkout process securely via Razorpay.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm flex-shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">Register the Device</h4>
                  <p className="text-xs text-slate-600">
                    Log into your secure parent dashboard and select &quot;Add Device&quot;. Select &quot;iOS&quot; to generate a custom configuration QR code.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm flex-shrink-0">3</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">Install the MDM Configuration Profile</h4>
                  <p className="text-xs text-slate-600">
                    Scan the QR code with your child's iPhone camera. Tap the pop-up notification to download the profile, then open the iPhone <strong>Settings</strong> app. Navigate to <strong>Profile Downloaded</strong>, tap install, and enter your parental passcode when prompted to lock the configuration.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm flex-shrink-0">4</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">Manage Safety Rules Remotely</h4>
                  <p className="text-xs text-slate-600">
                    You can now manage the device remotely. Log into your parent dashboard from any smartphone or computer to check web logs, configure app schedules, and receive safety alerts.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 9: Family Agreements */}
          <section id="family-agreements" className="space-y-5 scroll-mt-10 pt-6 border-t border-slate-100">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 text-sm font-bold flex items-center justify-center flex-shrink-0">9</span>
              Building a Healthy Digital Safety Agreement
            </h2>
            <p className="text-base leading-relaxed">
              While technology provides the tools to safeguard devices, building trust and communication within the household is the true key to long-term digital safety. Rather than secretly installing software, sit down with your child to discuss why monitoring rules are necessary.
            </p>
            
            <div className="p-6 rounded-2xl bg-purple-50/50 border border-purple-200 space-y-4">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Info className="w-5 h-5 text-purple-600" /> Elements of a Strong Family Media Contract
              </h3>
              <ul className="list-decimal pl-6 space-y-2 text-xs text-slate-700">
                <li><strong>Clear Boundaries:</strong> Define when and where screens are allowed (e.g., no smartphones at the dinner table or in bedrooms after 9:00 PM).</li>
                <li><strong>Open Explanations:</strong> Explain that monitoring is a safety measure to protect them from cybersecurity threats, online predators, and inappropriate content—not a tool to restrict their personal curiosity.</li>
                <li><strong>Judgment-Free Zone:</strong> Encourage your child to report any uncomfortable, scary, or explicit content they encounter online. Assure them they will not face punishments or lose their phone for being honest.</li>
              </ul>
            </div>
          </section>

          {/* SECTION 10: FAQ Section */}
          <section id="faq" className="space-y-6 scroll-mt-10 pt-6 border-t border-slate-100">
            <div className="space-y-2">
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight flex items-center gap-3">
                <HelpCircle className="w-8 h-8 text-purple-600 flex-shrink-0" />
                Frequently Asked Questions (9+ Detailed FAQs)
              </h2>
              <p className="text-sm text-slate-600">
                Get expert answers to the most common questions regarding iPhone safety, legal tracking limits, and system configurations.
              </p>
            </div>

            <div className="space-y-4 text-sm">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">1. Is it legal to track an iPhone secretly without the user knowing?</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  No. Covert tracking of adult partners, spouses, or employees without their explicit, written, and active consent is illegal and punishable under wiretapping and cybersecurity statutes globally. Legitimate tracking utilities like TrackMasterTool are designed strictly for minor children under parental supervision and operate transparently with visible device notifications.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">2. Will TrackMasterTool drain the target iPhone's battery life or cause overheating?</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  No. Unlike low-quality spy apps that run heavy, unoptimized background scripts to steal data, TrackMasterTool works through Apple’s native MDM configuration. The iOS operating system handles the safety rules and content filters at the system level, consuming virtually no extra battery or network resources.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">3. Does this iPhone tracking software require jailbreaking the target device?</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  No, jailbreaking is completely unnecessary. TrackMasterTool uses standard, authorized Apple family management configuration profiles. This protects the device from security hazards, preserves Apple's warranty, and ensures system stability.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">4. Can my child bypass or uninstall TrackMasterTool from their iPhone settings?</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  No, if configured correctly. During setup, parents can use a unique, separate parental passcode to lock the MDM profile, which prevents the child from deleting the configuration or removing the safety rules without parental authorization.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">5. Does the software log history inside private browsing or incognito tabs?</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Yes. By leveraging secure network configuration filters at the device level, TrackMasterTool can monitor and log visited domains and search queries even if the child opens Private Browsing tabs in Safari or Incognito mode in third-party browsers.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">6. Can TrackMasterTool monitor apps like WhatsApp, TikTok, Viber, and Instagram?</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Yes. It allows parents to log web activity within in-app browsers, block access to specific app categories, set strict usage schedules, and prevent the installation of unapproved apps from the App Store.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">7. Does the tracking software work when the iPhone is on cellular 4G/5G or public Wi-Fi?</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Yes. Because the MDM and network filters are installed directly onto the iOS operating system, the protection and monitoring rules remain active regardless of the network connection, whether the device is on home Wi-Fi, public hotspots, or mobile cellular data.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">8. Are there any hidden fees, and what payment methods do you accept?</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  There are absolutely no hidden fees or auto-billing tricks. TrackMasterTool offers three simple, transparent pricing tiers: $30 for a 2-Month License (1 Device), $50 for a 6-Month License (3 Devices), and $100 for a Lifetime License (5 Devices). Payments are securely processed via Razorpay.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">9. What is the main difference between TrackMasterTool and covert spy apps?</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  TrackMasterTool is a legitimate, transparent cybersecurity utility built in compliance with Apple’s security guidelines. Covert spy apps are often malware scams that compromise data privacy, run unstable code that drains the battery, and expose user credentials to hacker groups on the dark web.
                </p>
              </div>
            </div>
          </section>

          {/* High-Converting CTA Box */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white text-center space-y-6 shadow-2xl border border-slate-800">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" /> Secure Family Safety
            </div>

            <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
              Protect Your Family with TrackMasterTool
            </h3>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Choose the license that fits your family's size and safeguard their iOS devices without compromising battery life, system stability, or user privacy.
            </p>

            {/* Pricing Tiers Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto pt-2 text-left">
              <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 text-center flex flex-col justify-between">
                <div>
                  <div className="text-xs text-slate-400 uppercase font-semibold">2 Months License</div>
                  <div className="text-3xl font-extrabold text-white mt-2">$30</div>
                </div>
                <div className="text-[11px] text-slate-500 mt-4">1 Device • Full Parental Controls</div>
              </div>

              <div className="p-5 rounded-2xl bg-purple-600/30 border border-purple-500/50 text-center relative flex flex-col justify-between">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-500 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase text-white shadow-md">Best Value</div>
                <div>
                  <div className="text-xs text-purple-200 uppercase font-semibold">6 Months License</div>
                  <div className="text-3xl font-extrabold text-white mt-2">$50</div>
                </div>
                <div className="text-[11px] text-purple-300 mt-4">3 Devices • Priority Customer Support</div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 text-center flex flex-col justify-between">
                <div>
                  <div className="text-xs text-amber-400 uppercase font-semibold">Lifetime Access</div>
                  <div className="text-3xl font-extrabold text-white mt-2">$100</div>
                </div>
                <div className="text-[11px] text-slate-500 mt-4">5 Devices • Free Updates Forever</div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/pricing" 
                className="px-8 py-4 bg-purple-600 hover:bg-purple-500 font-bold rounded-2xl text-white text-sm shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center gap-2"
              >
                <span>Choose Your Plan</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link 
                href="/checkout" 
                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 font-semibold rounded-2xl text-slate-200 text-sm border border-slate-700 transition-colors flex items-center justify-center"
              >
                <span>Checkout via Razorpay</span>
              </Link>
            </div>

            <p className="text-[11px] text-slate-400 pt-2">
              Secure Payments • 14-Day Guarantee • No Auto-Renewal Tricks
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
