import React from 'react';
import Link from 'next/link';
import { Lock, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="TrackMasterTool Logo"
                className="h-10 w-auto rounded-lg shadow-md"
              />
              <span className="font-heading font-extrabold text-2xl tracking-tight text-white">
                Track<span className="text-purple-400">Master</span>Tool
              </span>
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Transparent, consent-based parental control and authorized family device management software. Fostering digital safety, screen time balance, and family location protection.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-900 px-3 py-1.5 rounded-lg w-fit">
              <Lock className="w-3.5 h-3.5" /> 256-Bit Bank Grade Encryption
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <h4 className="font-heading font-bold text-white text-xs uppercase tracking-wider mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/parental-control-app" className="hover:text-white transition-colors">Parental Controls</Link></li>
                <li><Link href="/family-location-tracker" className="hover:text-white transition-colors">GPS Location</Link></li>
                <li><Link href="/screen-time-monitoring" className="hover:text-white transition-colors">Screen Time</Link></li>
                <li><Link href="/website-blocker" className="hover:text-white transition-colors">Web Filtering</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing Plans</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-white text-xs uppercase tracking-wider mb-4">Platforms</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/android-parental-control" className="hover:text-white transition-colors">Android Supervision</Link></li>
                <li><Link href="/iphone-parental-control" className="hover:text-white transition-colors">iPhone / iOS Safety</Link></li>
                <li><Link href="/dashboard" className="hover:text-white transition-colors">Live Web Dashboard</Link></li>
                <li><Link href="/account" className="hover:text-white transition-colors">Customer Portal</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-white text-xs uppercase tracking-wider mb-4">Resources</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/blog" className="hover:text-white transition-colors">Digital Safety Blog</Link></li>
                <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/glossary" className="hover:text-white transition-colors">Safety Glossary</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-white text-xs uppercase tracking-wider mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/acceptable-use" className="hover:text-white transition-colors">Acceptable Use</Link></li>
                <li><Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500">
          <div>© {new Date().getFullYear()} TrackMasterTool Inc. All Rights Reserved.</div>
          <div className="flex items-center gap-1">
            <span>Built for family safety with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" />
          </div>
        </div>
      </div>
    </footer>
  );
}
