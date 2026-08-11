'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Shield, ChevronDown, Menu, X, Smartphone, MapPin, Clock, Lock, AlertTriangle, Activity, LayoutDashboard, Compass, BookOpen, FileText, HelpCircle, CheckCircle2, Heart, LayoutGrid } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0 lg:mr-8">
          <img
            src="/logo.png"
            alt="TrackMasterTool Logo"
            className="h-10 w-auto rounded-lg group-hover:scale-105 transition-transform"
          />
          <span className="font-heading font-extrabold text-2xl tracking-tight text-slate-900">
            Track<span className="text-purple-600">Master</span>Tool
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
          
          {/* Solutions Hub */}
          <Link href="/solutions" className="font-medium text-slate-700 hover:text-purple-600 flex items-center gap-1.5 py-2 transition-colors">
            <Heart className="w-4 h-4 text-purple-600" />
            <span>Solutions</span>
          </Link>

          {/* Features Hub */}
          <Link href="/features" className="font-medium text-slate-700 hover:text-purple-600 flex items-center gap-1.5 py-2 transition-colors">
            <LayoutGrid className="w-4 h-4 text-purple-600" />
            <span>Features</span>
          </Link>

          {/* Features Dropdown Menu */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('features')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1.5 font-medium text-slate-700 hover:text-purple-600 py-2 transition-colors">
              <span>All Capabilities</span>
              <ChevronDown className="w-4 h-4 opacity-70" />
            </button>

            {activeDropdown === 'features' && (
              <div className="absolute top-full -left-12 w-[640px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-150">
                <Link href="/parental-control-app" className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="p-2 rounded-lg bg-purple-50 text-purple-600"><MapPin className="w-5 h-5" /></div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">Family GPS Location</div>
                    <div className="text-xs text-slate-500">Real-time location sharing with consent.</div>
                  </div>
                </Link>

                <Link href="/geofencing-for-families" className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600"><Compass className="w-5 h-5" /></div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">Geofencing</div>
                    <div className="text-xs text-slate-500">Custom safe-zone arrival alerts.</div>
                  </div>
                </Link>

                <Link href="/screen-time-monitoring" className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="p-2 rounded-lg bg-purple-50 text-purple-600"><Clock className="w-5 h-5" /></div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">Screen Time</div>
                    <div className="text-xs text-slate-500">Daily device limits & healthy boundaries.</div>
                  </div>
                </Link>

                <Link href="/app-usage-monitor" className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600"><Smartphone className="w-5 h-5" /></div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">App Usage</div>
                    <div className="text-xs text-slate-500">Categorized daily application insights.</div>
                  </div>
                </Link>

                <Link href="/web-filtering-for-families" className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="p-2 rounded-lg bg-purple-50 text-purple-600"><Lock className="w-5 h-5" /></div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">Web Filtering</div>
                    <div className="text-xs text-slate-500">Filter inappropriate content automatically.</div>
                  </div>
                </Link>

                <Link href="/website-blocker" className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="p-2 rounded-lg bg-red-50 text-red-600"><Lock className="w-5 h-5" /></div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">Website Blocking</div>
                    <div className="text-xs text-slate-500">Block specific web URLs on target devices.</div>
                  </div>
                </Link>

                <Link href="/device-activity-reports" className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="p-2 rounded-lg bg-amber-50 text-amber-600"><Activity className="w-5 h-5" /></div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">Digital Activity Reports</div>
                    <div className="text-xs text-slate-500">Weekly family digital wellbeing summaries.</div>
                  </div>
                </Link>

                <Link href="/dashboard" className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="p-2 rounded-lg bg-teal-50 text-teal-600"><LayoutDashboard className="w-5 h-5" /></div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">Family Dashboard</div>
                    <div className="text-xs text-slate-500">Central management portal for all devices.</div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          <Link href="/pricing" className="font-medium text-slate-700 hover:text-purple-600 transition-colors">
            Pricing
          </Link>

          {/* Resources Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('resources')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1.5 font-medium text-slate-700 hover:text-purple-600 py-2 transition-colors">
              <span>Resources</span>
              <ChevronDown className="w-4 h-4 opacity-70" />
            </button>

            {activeDropdown === 'resources' && (
              <div className="absolute top-full -left-4 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 flex flex-col gap-1 animate-in fade-in duration-150">
                <Link href="/blog" className="p-2.5 rounded-lg hover:bg-slate-50 font-medium text-slate-800 text-sm flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-purple-600" /> Safety Blog & Articles
                </Link>
                <Link href="/help" className="p-2.5 rounded-lg hover:bg-slate-50 font-medium text-slate-800 text-sm flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-purple-600" /> Help Center
                </Link>
                <Link href="/glossary" className="p-2.5 rounded-lg hover:bg-slate-50 font-medium text-slate-800 text-sm flex items-center gap-2">
                  <FileText className="w-4 h-4 text-purple-600" /> Digital Safety Glossary
                </Link>
                <Link href="/#faq" className="p-2.5 rounded-lg hover:bg-slate-50 font-medium text-slate-800 text-sm">FAQ</Link>
              </div>
            )}
          </div>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/dashboard" className="font-medium text-slate-700 hover:text-purple-600 px-3 py-2 transition-colors text-sm">
            View Demo
          </Link>
          <Link href="/pricing" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold px-5 py-2.5 rounded-xl shadow-md shadow-purple-900/30 hover:shadow-lg transition-all text-sm uppercase tracking-wider">
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-slate-700 hover:text-purple-600 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
            <img src="/logo.png" alt="TrackMasterTool Logo" className="h-8 w-auto rounded-lg" />
            <span className="font-heading font-bold text-slate-900 text-lg">TrackMaster<span className="text-purple-600">Tool</span></span>
          </div>

          <Link href="/solutions" onClick={() => setMobileOpen(false)} className="font-medium text-slate-800 py-2 border-b border-slate-100 flex items-center gap-2">
            <Heart className="w-4 h-4 text-purple-600" />
            <span>All Solutions</span>
          </Link>
          <Link href="/features" onClick={() => setMobileOpen(false)} className="font-medium text-slate-800 py-2 border-b border-slate-100 flex items-center gap-2">
            <LayoutGrid className="w-4 h-4 text-purple-600" />
            <span>All Features</span>
          </Link>
          <Link href="/pricing" onClick={() => setMobileOpen(false)} className="font-medium text-slate-800 py-2 border-b border-slate-100">Pricing</Link>
          <Link href="/blog" onClick={() => setMobileOpen(false)} className="font-medium text-slate-800 py-2 border-b border-slate-100 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-purple-600" />
            <span>Safety Blog</span>
          </Link>

          <div className="flex flex-col gap-3 pt-2">
            <Link href="/dashboard" onClick={() => setMobileOpen(false)} className="w-full text-center font-semibold py-2.5 bg-slate-100 rounded-xl text-slate-800">View Demo</Link>
            <Link href="/pricing" onClick={() => setMobileOpen(false)} className="w-full text-center font-extrabold py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl shadow-md uppercase tracking-wider">Get Started ($30)</Link>
          </div>
        </div>
      )}
    </header>
  );
}
