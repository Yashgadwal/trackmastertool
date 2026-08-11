'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Shield, Lock, ChevronRight, LayoutGrid, MapPin, Clock, BookOpen, Heart } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 text-white shadow-xl shadow-purple-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Official Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center p-1 rounded-xl bg-slate-900 border border-purple-800/50 shadow-md shadow-purple-950/50 group-hover:border-purple-500 transition-all">
              <img
                src="/logo.png"
                alt="TrackMasterTool Logo"
                className="h-10 sm:h-11 w-auto rounded-lg group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-tight leading-none">
                TrackMaster<span className="text-purple-400">Tool</span>
              </span>
              <span className="text-[10px] font-semibold text-purple-400/80 uppercase tracking-widest hidden sm:inline">
                Family Digital Safety
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-slate-300">
            <Link href="/solutions" className="hover:text-purple-400 transition-colors flex items-center gap-1.5 py-1">
              <Heart className="w-4 h-4 text-purple-400" />
              <span>Solutions</span>
            </Link>
            <Link href="/features" className="hover:text-purple-400 transition-colors flex items-center gap-1.5 py-1">
              <LayoutGrid className="w-4 h-4 text-purple-400" />
              <span>Features</span>
            </Link>
            <Link href="/parental-control-app" className="hover:text-purple-400 transition-colors py-1">
              Parental Control
            </Link>
            <Link href="/family-location-tracker" className="hover:text-purple-400 transition-colors py-1">
              Location Tracker
            </Link>
            <Link href="/pricing" className="hover:text-purple-400 transition-colors py-1">
              Pricing
            </Link>
            <Link href="/blog" className="hover:text-purple-400 transition-colors flex items-center gap-1.5 py-1">
              <BookOpen className="w-4 h-4 text-purple-400" />
              <span>Blog</span>
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="text-xs font-bold text-slate-300 hover:text-white px-3 py-2 transition-colors"
            >
              Member Login
            </Link>
            <Link
              href="/pricing"
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-purple-950/50 transition-all flex items-center gap-1.5"
            >
              <span>Get Started</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-purple-400" /> : <Menu className="w-6 h-6 text-purple-400" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 pt-4 pb-6 space-y-3 text-sm font-semibold text-slate-300 shadow-2xl">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-900">
            <img
              src="/logo.png"
              alt="TrackMasterTool Logo"
              className="h-8 w-auto rounded-lg"
            />
            <span className="font-heading font-bold text-white text-base">TrackMaster<span className="text-purple-400">Tool</span></span>
          </div>

          <Link
            href="/solutions"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 hover:text-purple-400 border-b border-slate-900 flex items-center gap-2"
          >
            <Heart className="w-4 h-4 text-purple-400" />
            <span>All Solutions</span>
          </Link>
          <Link
            href="/features"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 hover:text-purple-400 border-b border-slate-900 flex items-center gap-2"
          >
            <LayoutGrid className="w-4 h-4 text-purple-400" />
            <span>All Features</span>
          </Link>
          <Link
            href="/parental-control-app"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 hover:text-purple-400 border-b border-slate-900"
          >
            Parental Control
          </Link>
          <Link
            href="/family-location-tracker"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 hover:text-purple-400 border-b border-slate-900"
          >
            Location Tracker
          </Link>
          <Link
            href="/pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 hover:text-purple-400 border-b border-slate-900"
          >
            Pricing Plans
          </Link>
          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 hover:text-purple-400 border-b border-slate-900 flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4 text-purple-400" />
            <span>Safety Blog</span>
          </Link>

          <div className="pt-3 flex flex-col gap-2">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl bg-slate-900 text-slate-200 border border-slate-800 font-bold"
            >
              Member Login
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-extrabold uppercase tracking-wider shadow-lg shadow-purple-950/50"
            >
              Get Started ($30)
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
