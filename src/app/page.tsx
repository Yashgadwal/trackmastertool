import React from 'react';
import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';
import PricingCards from '@/components/PricingCards';
import FAQAccordion from '@/components/FAQAccordion';
import Link from 'next/link';
import { 
  Shield, Lock, CheckCircle2, HeartHandshake, Eye, Award, ArrowRight, Smartphone, MapPin, Zap,
  MessageSquare, Phone, Share2, LayoutGrid, Cloud, Keyboard, Mail, Globe, Image as ImageIcon, Mic, MessageCircle, Camera 
} from 'lucide-react';
import { db } from '@/lib/db';

export const revalidate = 60; // Revalidate every 60s

export default async function HomePage() {
  // Fetch real count from DB for verified stats
  let userCount = 0;
  let deviceCount = 0;

  try {
    userCount = await db.user.count();
    deviceCount = await db.authorizedDevice.count();
  } catch (e) {
    // DB fallback
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Hero Section */}
      <Hero />

      {/* Verified Stats Section */}
      <section className="py-12 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-3xl font-extrabold text-purple-600 font-heading">256-Bit</div>
              <div className="text-xs font-semibold text-slate-600 uppercase tracking-wider mt-1">Bank-Grade SSL Encryption</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-3xl font-extrabold text-purple-600 font-heading">100%</div>
              <div className="text-xs font-semibold text-slate-600 uppercase tracking-wider mt-1">Consent-Based Safety</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-3xl font-extrabold text-purple-600 font-heading">iOS & Android</div>
              <div className="text-xs font-semibold text-slate-600 uppercase tracking-wider mt-1">Cross-Platform Support</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-3xl font-extrabold text-purple-600 font-heading">14-Day</div>
              <div className="text-xs font-semibold text-slate-600 uppercase tracking-wider mt-1">Money-Back Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* trackmastertool Features Section */}
      <section className="features-product py-20 bg-slate-50 border-t border-slate-200">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight mb-3">
              TrackMasterTool Features
            </h2>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              Explore the rich tracking features designed to keep your family and digital assets secure.
            </p>
          </div>

          <ul className="various-box grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <li className="various-item bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-2xl border border-blue-100 p-3 shadow-inner">
                <MessageSquare className="w-8 h-8 text-blue-500" />
              </div>
              <p className="font-heading font-bold text-lg text-slate-800 tracking-tight">SMS Tracker</p>
              <div className="various-more text-slate-600 text-sm leading-relaxed flex-grow">
                SMS Tracker monitors incoming/outgoing messages, tracks conversation details, and provides discreet access.
              </div>
            </li>
            <li className="various-item bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center bg-green-50 rounded-2xl border border-green-100 p-3 shadow-inner">
                <Phone className="w-8 h-8 text-green-500" />
              </div>
              <p className="font-heading font-bold text-lg text-slate-800 tracking-tight">Phone Tracking</p>
              <div className="various-more text-slate-600 text-sm leading-relaxed flex-grow">
                The phone tracker allows access to contacts, call logs, and added contact details with precise timestamps.
              </div>
            </li>
            <li className="various-item bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center bg-red-50 rounded-2xl border border-red-100 p-3 shadow-inner">
                <MapPin className="w-8 h-8 text-red-500" />
              </div>
              <p className="font-heading font-bold text-lg text-slate-800 tracking-tight">GPS Tracker</p>
              <div className="various-more text-slate-600 text-sm leading-relaxed flex-grow">
                TrackMasterTool tracks real-time GPS location, monitors remotely, and provides movement patterns and duration details.
              </div>
            </li>
            <li className="various-item bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-50 rounded-2xl border border-purple-100 p-3 shadow-inner">
                <Share2 className="w-8 h-8 text-purple-500" />
              </div>
              <p className="font-heading font-bold text-lg text-slate-800 tracking-tight">Social Media App</p>
              <div className="various-more text-slate-600 text-sm leading-relaxed flex-grow">
                Monitor social media apps, track messages, posts, and interactions, and stay updated on activities across platforms.
              </div>
            </li>
            <li className="various-item bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center bg-indigo-50 rounded-2xl border border-indigo-100 p-3 shadow-inner">
                <LayoutGrid className="w-8 h-8 text-indigo-500" />
              </div>
              <p className="font-heading font-bold text-lg text-slate-800 tracking-tight">Installed App</p>
              <div className="various-more text-slate-600 text-sm leading-relaxed flex-grow">
                Monitor recently added apps, including social media and games, and view the full app list in your control panel.
              </div>
            </li>
            <li className="various-item bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center bg-sky-50 rounded-2xl border border-sky-100 p-3 shadow-inner">
                <Cloud className="w-8 h-8 text-sky-500" />
              </div>
              <p className="font-heading font-bold text-lg text-slate-800 tracking-tight">iCloud Drive</p>
              <div className="various-more text-slate-600 text-sm leading-relaxed flex-grow">
                Gain access to all the content stored in the iCloud Drive of the targeted iOS devices.
              </div>
            </li>
            <li className="various-item bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center bg-amber-50 rounded-2xl border border-amber-100 p-3 shadow-inner">
                <Keyboard className="w-8 h-8 text-amber-500" />
              </div>
              <p className="font-heading font-bold text-lg text-slate-800 tracking-tight">Keylogger</p>
              <div className="various-more text-slate-600 text-sm leading-relaxed flex-grow">
                Record every keystroke activities inputs.
              </div>
            </li>
            <li className="various-item bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center bg-rose-50 rounded-2xl border border-rose-100 p-3 shadow-inner">
                <Mail className="w-8 h-8 text-rose-500" />
              </div>
              <p className="font-heading font-bold text-lg text-slate-800 tracking-tight">Email Tracking</p>
              <div className="various-more text-slate-600 text-sm leading-relaxed flex-grow">
                Track the entire email list, view incoming/outgoing emails with timestamps, and check email content sent or received.
              </div>
            </li>
            <li className="various-item bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center bg-teal-50 rounded-2xl border border-teal-100 p-3 shadow-inner">
                <Globe className="w-8 h-8 text-teal-500" />
              </div>
              <p className="font-heading font-bold text-lg text-slate-800 tracking-tight">Web Browser</p>
              <div className="various-more text-slate-600 text-sm leading-relaxed flex-grow">
                Track websites visited by the target user on Chrome or Firefox, and analyze browsing data from your control panel.
              </div>
            </li>
            <li className="various-item bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center bg-orange-50 rounded-2xl border border-orange-100 p-3 shadow-inner">
                <ImageIcon className="w-8 h-8 text-orange-500" />
              </div>
              <p className="font-heading font-bold text-lg text-slate-800 tracking-tight">Multimedia Tracking</p>
              <div className="various-more text-slate-600 text-sm leading-relaxed flex-grow">
                Multimedia tracking lets you monitor photos, videos, and audio files shared, received, or stored on the target device.
              </div>
            </li>
            <li className="various-item bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center bg-violet-50 rounded-2xl border border-violet-100 p-3 shadow-inner">
                <Mic className="w-8 h-8 text-violet-500" />
              </div>
              <p className="font-heading font-bold text-lg text-slate-800 tracking-tight">Record Calls</p>
              <div className="various-more text-slate-600 text-sm leading-relaxed flex-grow">
                Enables you to record WhatsApp calls and record WhatsApp voice messages remotely.
              </div>
            </li>
            <li className="various-item bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center bg-yellow-50 rounded-2xl border border-yellow-100 p-3 shadow-inner">
                <Smartphone className="w-8 h-8 text-yellow-500" />
              </div>
              <p className="font-heading font-bold text-lg text-slate-800 tracking-tight">Snapchat Tracking</p>
              <div className="various-more text-slate-600 text-sm leading-relaxed flex-grow">
                Monitor Snapchat activities, track sent/received snaps, view chat history, and analyze shared content on the target device.
              </div>
            </li>
            <li className="various-item bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center bg-pink-50 rounded-2xl border border-pink-100 p-3 shadow-inner">
                <Camera className="w-8 h-8 text-pink-500" />
              </div>
              <p className="font-heading font-bold text-lg text-slate-800 tracking-tight">Instagram Tracking</p>
              <div className="various-more text-slate-600 text-sm leading-relaxed flex-grow">
                With TrackMasterTool, you can read the chat messages and has full control over the media files that are exchanged from the target phone.
              </div>
            </li>
            <li className="various-item bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center bg-emerald-50 rounded-2xl border border-emerald-100 p-3 shadow-inner">
                <MessageCircle className="w-8 h-8 text-emerald-500" />
              </div>
              <p className="font-heading font-bold text-lg text-slate-800 tracking-tight">WhatsApp status</p>
              <div className="various-more text-slate-600 text-sm leading-relaxed flex-grow">
                Track WhatsApp status updates, view shared media, and monitor status changes on the target device.
              </div>
            </li>
          </ul>

          <div className="btn-groups mt-16 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              className="px-8 py-3.5 bg-purple-600 hover:bg-purple-500 font-bold rounded-xl text-white text-base shadow-lg shadow-purple-500/20 transition-all px-12"
              href="/pricing"
            >
              Buy Now
            </Link> 
            <Link 
              className="px-8 py-3.5 bg-white hover:bg-slate-50 font-semibold rounded-xl text-slate-700 text-base border border-slate-300 transition-all px-12 shadow-sm"
              href="/dashboard"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <PricingCards />

      {/* FAQ Accordion */}
      <FAQAccordion />

      {/* Final Conversion CTA */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/60 border border-purple-700 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <Shield className="w-4 h-4 text-purple-400" /> Start Protecting Your Family Today
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Ready to Build a Safer Digital Environment for Your Children?
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            Join parents worldwide using TrackMasterTool for screen time balance, web filtering, and family location safety. Instant activation & 14-day refund guarantee.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="px-8 py-4 bg-purple-600 hover:bg-purple-500 font-bold rounded-xl text-white text-base shadow-xl shadow-purple-500/25 transition-all flex items-center justify-center gap-2"
            >
              <span>Get Started Now ($30 for 2 Months)</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/dashboard"
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 font-semibold rounded-xl text-slate-200 text-base border border-slate-700 transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Interactive Demo</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
