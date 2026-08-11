import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin,
  Shield,
  Clock,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Lock,
  HelpCircle,
  ShieldCheck,
  Zap,
  Compass,
  Settings,
  Users,
  AlertCircle
} from 'lucide-react';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'How to Track My Kids Location on iPhone & Stay Alert',
  description: 'Complete 2000+ word parent guide to iOS location tracking. Learn to set up Apple Find My, Family Sharing, and TrackMasterTool custom polygonal geofencing with real-time alerts.',
  canonical: 'https://www.trackmastertool.com/blog/parental-control/how-to-track-kids-location-on-iphone',
});

export default function TrackKidsLocationOnIPhoneGuidePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'How to Track My Kids Location on iPhone and Stay Alert (Parent’s Safety Guide)',
    description: 'Learn step-by-step how to configure location tracking on iOS using Apple Find My and Family Sharing, and explore how TrackMasterTool adds advanced polygonal geofencing, location history, and tamper-resistant alerts for complete family safety.',
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
    mainEntityOfPage: 'https://www.trackmastertool.com/blog/parental-control/how-to-track-kids-location-on-iphone',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is it legal to track my child\'s iPhone location without their consent?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For minor children under your legal guardianship, parents have the legal right and responsibility to supervise their location and safety. However, open communication is highly recommended. TrackMasterTool operates as a transparent family application, showing visible alerts on the device to build mutual trust and satisfy safety standards.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is a polygonal geofence, and why is it better than a circular geofence?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A circular geofence only tracks a fixed radius around a point, which often overlaps with roads, rivers, or neighboring properties, causing false alerts. A polygonal geofence allows you to draw custom multi-point shapes matching exact property boundaries, such as school yards, friends\' backyards, or soccer fields, for highly accurate arrival/departure alerts.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can my teenager turn off location tracking on their iPhone, and will I be notified?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, a child can disable location sharing in native iOS settings. However, when using TrackMasterTool, the application is locked using Screen Time profiles and system restrictions. If location services or GPS permissions are tampered with or disabled, TrackMasterTool immediately sends an offline tamper alert to the parent dashboard.'
        }
      },
      {
        '@type': 'Question',
        name: 'Does tracking my kid\'s iPhone require jailbreaking the device?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. TrackMasterTool operates 100% jailbreak-free. It utilizes official Apple configuration profiles, location APIs, and secure family sharing standards, ensuring the iPhone remains secure, receiving iOS updates, and maintaining its factory warranty.'
        }
      },
      {
        '@type': 'Question',
        name: 'How long does TrackMasterTool store my child\'s location history?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TrackMasterTool retains secure, encrypted location histories and route trails for up to 90 days. This allows parents to review historical routes, frequent stop locations, travel speed, and dwell times on an interactive calendar map.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is it legal and safe to use location tracking software to track an adult spouse or partner?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Tracking an adult (spouse, partner, boyfriend, or girlfriend) without their explicit, documented consent is illegal under wiretapping and computer fraud laws. TrackMasterTool is strictly an authorized, transparent family device safety application. Be cautious of stalkerware applications that claim to track adults secretly, as they are illegal and often steal personal data.'
        }
      },
      {
        '@type': 'Question',
        name: 'How does TrackMasterTool minimize battery drain on my child\'s iPhone?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TrackMasterTool utilizes intelligent, low-energy geofence triggers and motion-coprocessor synchronization. Unlike apps that continuously poll GPS, our software only updates location coordinates when significant motion is detected or when crossing custom polygonal geofence boundaries, conserving battery life.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I track both iOS (iPhone/iPad) and Android devices on the same parent account?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. TrackMasterTool features a unified cross-platform parent dashboard. You can supervise and manage location alerts, polygonal safe-zones, and historical routes for both iOS and Android family devices under a single multi-device license.'
        }
      },
      {
        '@type': 'Question',
        name: 'What are the subscription plans and prices for TrackMasterTool?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TrackMasterTool offers three affordable pricing tiers: a 2-Month License for $30 (protects 1 device), a 6-Month License for $50 (protects up to 3 devices), and a Lifetime License for $100 (protects up to 5 devices).'
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
          <span className="text-purple-600 font-semibold truncate">Track Kids Location on iPhone</span>
        </div>

        {/* Hero Article Header */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm mb-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-purple-600" /> Complete iOS Safety Guide
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            How to Track My Kids Location on iPhone and Stay Alert
          </h1>

          <p className="text-slate-600 text-lg sm:text-xl leading-relaxed font-sans">
            Navigating your child's physical freedom while maintaining absolute peace of mind can be challenging. Discover how to configure native Apple Find My tools, utilize advanced polygonal geofencing with TrackMasterTool, and build transparent digital trust within your family.
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
              alt="Parent setting up iPhone location permissions and configuring safety rules"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-center text-xs text-slate-500 mt-3 font-medium px-4">
            Figure 1: Configuring correct location-sharing settings and geofences on an iPhone provides a crucial safety layer for children commuting to school or extracurricular activities.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-purple-50/80 border border-purple-200/90 p-6 sm:p-8 rounded-3xl mb-12 space-y-4">
          <div className="font-heading font-bold text-base text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <Shield className="w-5 h-5 text-purple-600" /> Table of Contents
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 font-medium list-decimal pl-5">
            <li><a href="#why-location-safety" className="hover:text-purple-700 hover:underline">The Importance of Location Safety for Modern Kids</a></li>
            <li><a href="#configuring-ios-native" className="hover:text-purple-700 hover:underline">Configuring iOS Native Tracking (Find My & Family Sharing)</a></li>
            <li><a href="#limitations-native" className="hover:text-purple-700 hover:underline">Limitations of iOS Native Tracking: Why Parents Need More</a></li>
            <li><a href="#introducing-trackmastertool" className="hover:text-purple-700 hover:underline">Introducing TrackMasterTool for Advanced Location Tracking</a></li>
            <li><a href="#polygonal-geofencing" className="hover:text-purple-700 hover:underline">Polygonal Geofencing: Setting Up True Safe Zones</a></li>
            <li><a href="#location-history-trails" className="hover:text-purple-700 hover:underline">Historical Route Tracking & Location Logs</a></li>
            <li><a href="#ethics-consent" className="hover:text-purple-700 hover:underline">Child Autonomy and Transparent Consent (Stalkerware Warning)</a></li>
            <li><a href="#comparison-matrix" className="hover:text-purple-700 hover:underline">Comparison Matrix: Native Find My vs. TrackMasterTool</a></li>
            <li><a href="#faq" className="hover:text-purple-700 hover:underline">Frequently Asked Questions (8+ FAQs)</a></li>
          </ol>
        </div>

        {/* Main Body Content */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-12 text-slate-700 leading-relaxed font-sans">
          
          {/* SECTION 1: Importance of Location Safety */}
          <section id="why-location-safety" className="space-y-5 scroll-mt-10">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 text-sm font-bold flex items-center justify-center flex-shrink-0">1</span>
              The Importance of Location Safety for Modern Kids
            </h2>

            <p className="text-base leading-relaxed">
              In an increasingly fast-paced and connected world, the safety of minor children is the top priority for parents and legal guardians. Gone are the days when children stayed inside their neighborhood blocks until the streetlights came on. Today, children commute long distances for specialized schooling, attend regional sports practices, hang out at metropolitan shopping complexes, and visit friends across town.
            </p>

            <p className="text-base leading-relaxed">
              While granting independence is a vital part of a child's psychological development, this mobility introduces unique challenges. As cyber threats and real-world safety concerns intersect, knowing where your child is—and being alerted when they deviate from their expected routine—is a crucial element of digital and physical parenting.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" /> Safety Concerns & Commuting Risks
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  Whether children are using public transport, biking, or walking to school, parents worry about route deviations, delays, accidents, or encounters with strangers.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-purple-50/70 border border-purple-200/80 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <Clock className="w-5 h-5 text-purple-600 flex-shrink-0" /> Unplanned Route Changes
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  It is common for teenagers to change locations after school (such as walking to a nearby fast food place or a friend's house) without remembering to call or text their parents.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-red-50/70 border border-red-200/80 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" /> Emergency Response Preparedness
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  In critical situations, such as extreme weather events, local lock-downs, or accidents, having access to real-time location details allows parents to coordinate with emergency services.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" /> Reassurance and Peace of Mind
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  Rather than micro-managing a child with constant text messages ("Are you there yet?", "Where are you now?"), location tracking allows parents to check discreetly and respect their child's space.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 2: Configuring iOS Native Tracking */}
          <section id="configuring-ios-native" className="space-y-5 scroll-mt-10 pt-6 border-t border-slate-100">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 text-sm font-bold flex items-center justify-center flex-shrink-0">2</span>
              Configuring iOS Native Tracking (Find My & Family Sharing)
            </h2>

            <p className="text-base leading-relaxed">
              Apple provides built-in tools that make basic location tracking possible without installing third-party apps. These systems rely on <strong>Apple Family Sharing</strong> and the <strong>Find My</strong> network. Below is the step-by-step process to set up native location sharing on your child's iPhone.
            </p>

            <div className="space-y-6">
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-4">
                <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-600" /> Part 1: Setting Up Apple Family Sharing
                </h3>
                <p className="text-sm text-slate-600">
                  Family Sharing links Apple IDs together, allowing parents to manage content restrictions, purchase approvals, and location sharing under a single family group.
                </p>
                <ol className="space-y-3 text-sm text-slate-700 list-decimal pl-5">
                  <li className="pl-1">
                    On your parent iPhone, open the <strong>Settings</strong> app and tap your <strong>Apple ID profile banner</strong> at the top of the menu.
                  </li>
                  <li className="pl-1">
                    Tap on the <strong>Family Sharing</strong> option, then tap <strong>Set Up Your Family</strong> (or tap the member icon in the top right to add a new member).
                  </li>
                  <li className="pl-1">
                    Tap <strong>Add Member</strong>, and choose <strong>Create an Account for a Child</strong> if they do not have an Apple ID. If they already have an Apple ID, select <strong>Invite Others</strong> and enter their account details.
                  </li>
                  <li className="pl-1">
                    Follow the on-screen instructions to verify your parent credentials, set up parental consent parameters, and finalize the child account.
                  </li>
                </ol>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-4">
                <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                  <Compass className="w-5 h-5 text-purple-600" /> Part 2: Activating Location Sharing in Find My
                </h3>
                <p className="text-sm text-slate-600">
                  Once your child's device is linked to Family Sharing, you must enable location sharing on their device to view it in the Find My app.
                </p>
                <ol className="space-y-3 text-sm text-slate-700 list-decimal pl-5">
                  <li className="pl-1">
                    Hold your child's physical iPhone, open the <strong>Settings</strong> app, and tap on their <strong>Apple ID profile banner</strong>.
                  </li>
                  <li className="pl-1">
                    Tap on <strong>Find My</strong>. Ensure that the toggle for <strong>Share My Location</strong> is switched <strong>ON</strong>.
                  </li>
                  <li className="pl-1">
                    Tap <strong>My Location</strong> and ensure it is set to "This Device" (rather than an iPad or secondary Apple device they might leave at home).
                  </li>
                  <li className="pl-1">
                    Now, open the native <strong>Find My app</strong> on the child's iPhone and navigate to the <strong>People</strong> tab.
                  </li>
                  <li className="pl-1">
                    Tap the <strong>+</strong> button, choose <strong>Share My Location</strong>, enter your parent email address/phone number, and click <strong>Send</strong>.
                  </li>
                  <li className="pl-1">
                    Select the option to <strong>Share Indefinitely</strong> from the prompt. This prevents iOS from stopping location sharing after 1 hour or 24 hours.
                  </li>
                </ol>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-4">
                <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                  <Zap className="w-5 h-5 text-purple-600" /> Part 3: Setting Up Basic Location Alerts in Find My
                </h3>
                <p className="text-sm text-slate-600">
                  Apple Find My allows you to set up notifications when your child arrives at or departs a specific location.
                </p>
                <ol className="space-y-3 text-sm text-slate-700 list-decimal pl-5">
                  <li className="pl-1">
                    Open the <strong>Find My app</strong> on your parent iPhone and go to the <strong>People</strong> tab.
                  </li>
                  <li className="pl-1">
                    Tap on your child's name from the contact list. Scroll down to the <strong>Notifications</strong> section and tap <strong>Add</strong>.
                  </li>
                  <li className="pl-1">
                    Choose <strong>Notify Me</strong>. Decide whether you want to receive alerts when they <strong>arrive</strong> or <strong>leave</strong> a location.
                  </li>
                  <li className="pl-1">
                    Enter the street address for the location (e.g., school or home). Note that Apple only supports simple circular fences. You can drag the slider to adjust the radius (minimum radius is approximately 100 meters).
                  </li>
                  <li className="pl-1">
                    Choose to receive this notification **Only Once** or **Every Time** they cross the boundary. Tap **Add** in the top-right corner to save the alert.
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* SECTION 3: Limitations of iOS Native Tracking */}
          <section id="limitations-native" className="space-y-5 scroll-mt-10 pt-6 border-t border-slate-100">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 text-sm font-bold flex items-center justify-center flex-shrink-0">3</span>
              Limitations of iOS Native Tracking: Why Parents Need More
            </h2>

            <p className="text-base leading-relaxed">
              While Apple's Find My is a fantastic tool for finding lost devices or verifying a family member's current location during travel, it was not built to serve as a comprehensive parental control location suite. As a result, parents face several gaps and limitations when using native tools alone.
            </p>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-red-50/60 border border-red-100 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600" /> Lack of Location History
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Apple Find My only displays where a device is *right now*. If your child walks somewhere they shouldn't, spends hours at an unauthorized location, and then returns to school before you check the app, you will have no record of their movement. There is no route history, map trail, or record of stops.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-100 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600" /> Circular-Only Geofences & False Positives
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Apple's location notifications rely entirely on radial (circular) boundaries. A circular geofence centered on a school will naturally overlap with adjacent public streets, nearby commercial areas, or residential properties. This leads to frequent false alarms (e.g., alerting that the child has "left school" when they are just sitting in a classroom near the property line), causing alert fatigue.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Lock className="w-4 h-4 text-slate-600" /> No Tamper-Proof Safeguards
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Teens are technologically adaptive. In standard iOS settings, a child can simply turn off cellular data, toggle off "Share My Location" in the Settings app, or enable Airplane Mode. When they do, Find My displays a generic "Location Not Available" message. Parents receive no active alert that tracking has been disabled.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Settings className="w-4 h-4 text-slate-600" /> Single-Device Limitation
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  If your child owns an iPhone and an iPad, they can select the iPad (which they leave in their locker or bedroom) as their active location device. While the child leaves the school premises with their iPhone, Find My will show them as still static at school because it is tracking the inactive iPad.
                </p>
              </div>
            </div>
          </section>

          {/* MIDDLE CTA CARD */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white text-center space-y-6 shadow-2xl border border-slate-800 my-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" /> SECURE FAMILY PLATFORM
            </div>

            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              Get Tamper-Resistant GPS Tracking for Your Child's iPhone
            </h3>

            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Step up from basic location sharing. Protect your family with TrackMasterTool's robust, consent-based, multi-device tracking plans.
            </p>

            {/* Pricing Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto pt-2 text-left">
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-center">
                <div className="text-[10px] text-slate-400 uppercase font-semibold">2-Month License</div>
                <div className="text-xl font-extrabold text-white mt-1">$30</div>
                <div className="text-[9px] text-slate-400 mt-0.5">1 Device Supervision</div>
              </div>

              <div className="p-4 rounded-xl bg-purple-600/30 border border-purple-500/50 text-center relative">
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-purple-500 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase text-white">Popular</div>
                <div className="text-[10px] text-purple-200 uppercase font-semibold">6-Month License</div>
                <div className="text-xl font-extrabold text-white mt-1">$50</div>
                <div className="text-[9px] text-purple-200 mt-0.5">Up to 3 Devices</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-center">
                <div className="text-[10px] text-amber-400 uppercase font-semibold">Lifetime License</div>
                <div className="text-xl font-extrabold text-white mt-1">$100</div>
                <div className="text-[9px] text-slate-400 mt-0.5">Up to 5 Devices</div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/pricing" 
                className="px-6 py-3.5 bg-purple-600 hover:bg-purple-500 font-bold rounded-xl text-white text-xs shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center gap-2"
              >
                <span>View Pricing & Plans</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/checkout" 
                className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 font-semibold rounded-xl text-slate-200 text-xs border border-slate-700 transition-colors flex items-center justify-center"
              >
                <span>Buy License Now</span>
              </Link>
            </div>
          </div>

          {/* SECTION 4: Introducing TrackMasterTool */}
          <section id="introducing-trackmastertool" className="space-y-5 scroll-mt-10 pt-6 border-t border-slate-100">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 text-sm font-bold flex items-center justify-center flex-shrink-0">4</span>
              Introducing TrackMasterTool for Advanced Location Tracking
            </h2>

            <p className="text-base leading-relaxed">
              To solve the functional gaps of native tools, parents need a solution designed specifically for family safety. <strong>TrackMasterTool</strong> is a professional parental control platform that bridges the gap between child safety and privacy. It functions as an authorized, consent-based utility, ensuring that device monitoring is carried out transparently and with mutual agreement.
            </p>

            <p className="text-base leading-relaxed">
              Unlike unstable stalkerware, TrackMasterTool is built using official, secure Apple MDM (Mobile Device Management) protocols and standard configuration profiles. This means there is no need to jailbreak the child's iPhone, which would bypass native iOS security, void the Apple warranty, and make the device susceptible to hackers and malware.
            </p>

            <div className="bg-purple-50/70 border border-purple-200 p-6 rounded-2xl space-y-4">
              <h3 className="font-bold text-slate-900 text-base">Key Benefits of TrackMasterTool's iOS Location Integration:</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-1" />
                  <span><strong>Zero Battery Drain Concerns:</strong> Intelligent GPS polling algorithms communicate with the iPhone's motion coprocessor to sync coordinates only when the child moves.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-1" />
                  <span><strong>Cross-Platform Parent Dashboard:</strong> Track iOS and Android devices side-by-side on a central web panel accessible from any browser.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-1" />
                  <span><strong>Tamper Notifications:</strong> If location services are disabled or the profile is deleted, parents receive an immediate notification, preventing blind spots.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 5: Polygonal Geofencing */}
          <section id="polygonal-geofencing" className="space-y-5 scroll-mt-10 pt-6 border-t border-slate-100">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 text-sm font-bold flex items-center justify-center flex-shrink-0">5</span>
              Polygonal Geofencing: Setting Up True Safe Zones
            </h2>

            <p className="text-base leading-relaxed">
              Standard circular geofences are often too simple. Property boundaries are rarely perfect circles; they are shaped by street alignments, parks, school yards, and natural terrain. An arbitrary circle can lead to constant, false alerts if your child stands near the edge of the campus, or it might miss that they crossed the street into an unapproved zone.
            </p>

            <p className="text-base leading-relaxed">
              TrackMasterTool addresses this by offering <strong>Polygonal Geofencing</strong>. This feature allows parents to draw custom, multi-point boundaries directly on a digital map, creating precise perimeters that match actual locations (e.g., school campuses, homes, soccer fields, or skate parks).
            </p>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-4">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <MapPin className="w-5 h-5 text-purple-600" /> How to Set Up a Polygonal Geofence in TrackMasterTool:
              </h3>
              
              <ol className="space-y-3 text-sm text-slate-700 list-decimal pl-5">
                <li className="pl-1">
                  Log in to your <strong>TrackMasterTool Parent Dashboard</strong> on any computer or mobile browser.
                </li>
                <li className="pl-1">
                  Navigate to the <strong>Geofencing</strong> tab in the sidebar menu and select your child's iPhone.
                </li>
                <li className="pl-1">
                  Click on <strong>Create Geofence</strong> and select the <strong>Polygonal Tool</strong> instead of the default circular radius.
                </li>
                <li className="pl-1">
                  Search for your child's school, soccer field, or home on the interactive satellite map.
                </li>
                <li className="pl-1">
                  Tap the map to drop vertices (points) and connect them to outline the exact property line. You can create complex shapes matching playground perimeters, campus structures, and parking lots.
                </li>
                <li className="pl-1">
                  Name the zone (e.g., "Lincoln High School", "Oak Park", "Soccer Practice") and customize the alert options.
                </li>
                <li className="pl-1">
                  Toggle on alerts for both <strong>Arrival (Entry)</strong> and <strong>Departure (Exit)</strong>.
                </li>
                <li className="pl-1">
                  Click <strong>Save Zone</strong>. The rules are pushed to the child's iPhone in real time.
                </li>
              </ol>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50 border-l-4 border-amber-500 text-xs text-slate-700 space-y-2">
              <span className="font-bold text-slate-900 text-sm block">Understanding Ray-Casting & Coordinate Precision</span>
              <p>
                In the background, TrackMasterTool uses coordinate-based polygon testing (ray-casting algorithms) on the device. Instead of constantly transmitting battery-heavy raw GPS coordinates, the child's phone evaluates its position locally against the saved coordinates. Once a state transition (in-to-out or out-to-in) occurs, it alerts the server, preserving battery and cellular data.
              </p>
            </div>
          </section>

          {/* SECTION 6: Historical Route Tracking & Location Logs */}
          <section id="location-history-trails" className="space-y-5 scroll-mt-10 pt-6 border-t border-slate-100">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 text-sm font-bold flex items-center justify-center flex-shrink-0">6</span>
              Historical Route Tracking & Location Logs
            </h2>

            <p className="text-base leading-relaxed">
              Knowing where your child is currently located is only one half of the security equation. The other half is knowing how they got there and where they stopped along the way.
            </p>

            <p className="text-base leading-relaxed">
              TrackMasterTool's <strong>Historical Location Route Tracking</strong> records location details continuously and stores them for up to 90 days. This gives parents visibility into route consistency and frequent stops.
            </p>

            {/* Featured Image 2 */}
            <div className="my-8 overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-100">
                <Image 
                  src="/images/blog/phone_monitoring.jpg" 
                  alt="Detailed parental dashboard with route playback, speed logs, and timestamps"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-xs text-slate-500 mt-3 font-medium px-4">
                Figure 2: The location history logs in TrackMasterTool display exact time-stamped routes, stop durations (dwell time), and travel speeds on an interactive map.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-4">
              <h3 className="font-bold text-slate-900 text-base">What Does Location History Record?</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-1" />
                  <span><strong>Time-Stamped Route Playback:</strong> Animate the child's travel path over the course of a day or week. See the exact roads walked, biked, or driven.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-1" />
                  <span><strong>Dwell Time Analysis:</strong> See exactly how long your child spent at a particular stop (e.g., "Stopped at Oak Cafe for 42 minutes").</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-1" />
                  <span><strong>Velocity Log:</strong> Monitors transit speed to let you know if they were in a fast-moving vehicle, indicating public transit, a ride-share, or a teenage friend driving.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-1" />
                  <span><strong>Offline Queueing:</strong> If your child walks into an area with poor cellular service (like a subway tunnel or rural trail), coordinates are securely queued on the device and uploaded once a signal is re-established.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 7: Child Autonomy and Transparent Consent (Stalkerware Warning) */}
          <section id="ethics-consent" className="space-y-5 scroll-mt-10 pt-6 border-t border-slate-100">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 text-sm font-bold flex items-center justify-center flex-shrink-0">7</span>
              Child Autonomy and Transparent Consent (Stalkerware Warning)
            </h2>

            <p className="text-base leading-relaxed">
              At TrackMasterTool, we follow a clear rule: <strong>software should protect, not spy</strong>. Our application is designed to be a transparent family safety tool. We do not support, encourage, or facilitate secret monitoring or stalking.
            </p>

            <div className="p-6 rounded-2xl bg-red-50 border border-red-200 space-y-4">
              <h3 className="font-bold text-red-950 text-base flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0" /> Important Warning on Stalkerware & Spying Scams
              </h3>
              <p className="text-xs text-red-900 leading-relaxed">
                Many online search results suggest "secretly tracking a girlfriend/boyfriend" or "spying on a spouse without them knowing." These are often dangerous scams or highly illegal spyware products. 
              </p>
              <ul className="list-disc pl-5 text-xs text-red-900 space-y-1.5">
                <li>
                  <strong>Legal Issues:</strong> Tracking an adult spouse, partner, or colleague without their explicit, documented, and ongoing consent is a crime under wiretapping, computer access, and stalking laws. It carries heavy legal and civil penalties.
                </li>
                <li>
                  <strong>Data Threats:</strong> Secret "spying" apps are frequently untrustworthy operations that compromise and leak private details (including GPS coordinates, messages, and files) to third parties or hackers.
                </li>
                <li>
                  <strong>TrackMasterTool Position:</strong> TrackMasterTool is strictly for parental control of minor children under your legal guardianship, or for family device safety with clear consent. The software operates with visible notifications and must be installed transparently.
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-4">
              <h3 className="font-bold text-slate-900 text-base">How to Talk to Your Children About Location Safety</h3>
              <p className="text-sm text-slate-600">
                To build mutual digital trust, we recommend talking with your child when installing tracking software:
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded bg-purple-100 text-purple-600 text-[11px] font-bold flex items-center justify-center mt-0.5 flex-shrink-0">1</span>
                  <span><strong>Explain the Purpose:</strong> Reassure your child that the tracking application is there for their safety and emergency response, not because you don't trust them.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded bg-purple-100 text-purple-600 text-[11px] font-bold flex items-center justify-center mt-0.5 flex-shrink-0">2</span>
                  <span><strong>Establish Clear Boundaries:</strong> Clarify that you will not constantly check their location during the day unless they fail to arrive at school or there is an unexpected schedule change.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded bg-purple-100 text-purple-600 text-[11px] font-bold flex items-center justify-center mt-0.5 flex-shrink-0">3</span>
                  <span><strong>Create an Emergency Protocol:</strong> Agree on what happens if they leave a safe zone or need assistance, so everyone is on the same page.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 8: Feature Comparison Matrix */}
          <section id="comparison-matrix" className="space-y-5 scroll-mt-10 pt-6 border-t border-slate-100">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 text-sm font-bold flex items-center justify-center flex-shrink-0">8</span>
              Comparison Matrix: Native Apple Find My vs. TrackMasterTool
            </h2>

            <p className="text-base leading-relaxed">
              Review this detailed feature comparison matrix to understand the differences between Apple's native Find My tools and TrackMasterTool's location tracking platform.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200">
                    <th className="p-3 sm:p-4 font-bold text-slate-900">Feature</th>
                    <th className="p-3 font-bold text-slate-900 text-center">Apple Find My</th>
                    <th className="p-3 font-bold text-slate-900 text-center bg-purple-50 text-purple-900">TrackMasterTool</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-slate-900">Live GPS Location</td>
                    <td className="p-3 text-center text-emerald-600 font-medium">Yes</td>
                    <td className="p-3 text-center text-emerald-600 font-bold bg-purple-50">Yes (Optimized)</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-slate-900">Location History</td>
                    <td className="p-3 text-center text-red-500 font-medium">No (Current only)</td>
                    <td className="p-3 text-center text-emerald-600 font-bold bg-purple-50">Yes (Up to 90 Days)</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-slate-900">Geofencing Types</td>
                    <td className="p-3 text-center text-slate-500 font-medium">Circular Only</td>
                    <td className="p-3 text-center text-emerald-600 font-bold bg-purple-50">Custom Polygonal & Circles</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-slate-900">Tamper Alerts</td>
                    <td className="p-3 text-center text-red-500 font-medium">No (Displays offline)</td>
                    <td className="p-3 text-center text-emerald-600 font-bold bg-purple-50">Yes (Instant alerts)</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-slate-900">Cross-Platform Dashboard</td>
                    <td className="p-3 text-center text-slate-500 font-medium">Apple Devices Only</td>
                    <td className="p-3 text-center text-emerald-600 font-bold bg-purple-50">Yes (Web, iOS, Android)</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-slate-900">Dwell Time Tracking</td>
                    <td className="p-3 text-center text-red-500 font-medium">No</td>
                    <td className="p-3 text-center text-emerald-600 font-bold bg-purple-50">Yes (Stop durations)</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-slate-900">Bypass Resistance</td>
                    <td className="p-3 text-center text-slate-500 font-medium">Low (Easy to disable)</td>
                    <td className="p-3 text-center text-emerald-600 font-bold bg-purple-50">High (Profile restricted)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 9: Frequently Asked Questions */}
          <section id="faq" className="space-y-6 scroll-mt-10 pt-6 border-t border-slate-100">
            <div className="space-y-2">
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight flex items-center gap-3">
                <HelpCircle className="w-8 h-8 text-purple-600 flex-shrink-0" />
                Frequently Asked Questions (8+ FAQs)
              </h2>
              <p className="text-sm text-slate-600">
                Find answers to common questions about setting up location tracking and alert tools on iOS.
              </p>
            </div>

            <div className="space-y-4 text-sm">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">1. Is it legal to track my child's iPhone location without their consent?</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Yes, for minor children under your custody, you have the legal right to supervise their location for safety reasons. However, open communication is recommended. TrackMasterTool displays visible notifications on the target device to promote transparency and build mutual trust.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">2. What is a polygonal geofence, and why is it better than a circular geofence?</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  A circular geofence only tracks a fixed radius around a point, which can overlap with streets or other properties, causing false alarms. A polygonal geofence lets you draw custom shapes matching exact property boundaries, such as school yards, playgrounds, or homes, for highly accurate alerts.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">3. Can my teenager turn off location tracking on their iPhone, and will I be notified?</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Yes, location sharing can be toggled off in standard iOS settings. However, TrackMasterTool uses Apple configuration profiles and restrictions to prevent unauthorized changes. If location services or permissions are tampered with or disabled, TrackMasterTool immediately sends an alert to the parent dashboard.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">4. Does tracking my kid's iPhone require jailbreaking the device?</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  No. TrackMasterTool operates 100% jailbreak-free. It utilizes official Apple developer profiles and APIs, keeping the iOS security structure intact, retaining the warranty, and allowing normal software updates.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">5. How long does TrackMasterTool store my child's location history?</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  TrackMasterTool stores historical location logs and route trails securely for up to 90 days. This allows parents to review travel history, stops, and durations on an interactive calendar map.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">6. Is it legal and safe to use location tracking software to track an adult spouse or partner?</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  No. Tracking an adult without their explicit, documented, and ongoing consent is illegal under wiretapping and computer access laws. TrackMasterTool is strictly an authorized parental control and family safety app. Avoid stalkerware apps that promise secret monitoring, as they are illegal and frequently compromise personal data.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">7. How does TrackMasterTool minimize battery drain on my child's iPhone?</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  TrackMasterTool uses energy-efficient geofence triggers and motion-coprocessor syncing. Instead of continuously polling GPS, coordinates are updated when movement is detected or boundaries are crossed, minimizing battery impact.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">8. Can I track both iOS (iPhone/iPad) and Android devices on the same parent account?</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Yes. TrackMasterTool features a unified cross-platform dashboard. You can manage settings and review alerts for both iOS and Android family devices under a single multi-device license.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">9. What are the subscription plans and prices for TrackMasterTool?</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  TrackMasterTool offers three clear pricing tiers: a 2-Month License for $30 (1 device), a 6-Month License for $50 (up to 3 devices), and a Lifetime License for $100 (up to 5 devices).
                </p>
              </div>
            </div>
          </section>

          {/* HIGH CONVERTING CTA CARD - END */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white text-center space-y-6 shadow-2xl border border-slate-800">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" /> AUTHORIZED FAMILY PROTECTION
            </div>

            <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
              Safeguard Your Child's Physical Journey Today
            </h3>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Establish reliable, transparent geofences and location tracking for your child's iOS device. Respect their independence while keeping them safe with TrackMasterTool.
            </p>

            {/* Pricing Tiers Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto pt-2 text-left">
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-center">
                <div className="text-xs text-slate-400 uppercase font-semibold">2 Months</div>
                <div className="text-2xl font-extrabold text-white mt-1">$30</div>
                <div className="text-[11px] text-slate-400 mt-0.5">1 Device • Full History</div>
              </div>

              <div className="p-4 rounded-xl bg-purple-600/30 border border-purple-500/50 text-center relative">
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-purple-50 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase text-purple-700">Popular</div>
                <div className="text-xs text-purple-200 uppercase font-semibold">6 Months</div>
                <div className="text-2xl font-extrabold text-white mt-1">$50</div>
                <div className="text-[11px] text-purple-200 mt-0.5">3 Devices • Advanced Alerts</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-center">
                <div className="text-xs text-amber-400 uppercase font-semibold">Lifetime</div>
                <div className="text-2xl font-extrabold text-white mt-1">$100</div>
                <div className="text-[11px] text-slate-400 mt-0.5">5 Devices • Lifetime Support</div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/pricing" 
                className="px-8 py-4 bg-purple-600 hover:bg-purple-500 font-bold rounded-2xl text-white text-sm shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center gap-2"
              >
                <span>View Pricing & Start Protection</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link 
                href="/checkout" 
                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 font-semibold rounded-2xl text-slate-200 text-sm border border-slate-700 transition-colors flex items-center justify-center gap-2"
              >
                <span>Proceed to Checkout</span>
              </Link>
            </div>

            <p className="text-[11px] text-slate-400 pt-2">
              Secure Checkout • 14-Day Money-Back Guarantee • Certified Authorized Kid-Safe Software
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
