'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import DashboardSidebar from '@/components/DashboardSidebar';
import { Globe, ArrowLeft, ShieldCheck, Plus, Trash2, CheckCircle2, Lock, AlertTriangle } from 'lucide-react';

export default function DashboardWebPage() {
  const [isSafeSearchActive, setIsSafeSearchActive] = useState(true);
  const [isAdultCategoryBlocked, setIsAdultCategoryBlocked] = useState(true);
  const [isGamblingBlocked, setIsGamblingBlocked] = useState(true);
  const [newDomain, setNewDomain] = useState('');
  const [blacklistedDomains, setBlacklistedDomains] = useState([
    'gambling-online-example.com',
    'violent-content-site.net',
    'distracting-games-hub.org',
  ]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleAddDomain = (e: React.FormEvent) => {
    e.preventDefault();
    if (newDomain.trim()) {
      const clean = newDomain.trim().toLowerCase().replace(/^https?:\/\//, '');
      setBlacklistedDomains([...blacklistedDomains, clean]);
      setNewDomain('');
      setToastMessage(`🛡️ Added ${clean} to Web Blacklist!`);
      setTimeout(() => setToastMessage(null), 2500);
    }
  };

  const handleRemoveDomain = (domain: string) => {
    setBlacklistedDomains(blacklistedDomains.filter((d) => d !== domain));
    setToastMessage(`Removed ${domain} from Blacklist.`);
    setTimeout(() => setToastMessage(null), 2500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {toastMessage && (
        <div className="fixed top-16 right-6 z-50 bg-slate-900 border border-purple-500 text-white text-xs font-bold px-4 py-3 rounded-xl shadow-2xl animate-fade-in flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-purple-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="flex-1 flex flex-col lg:flex-row">
        <DashboardSidebar />

        <main className="flex-1 p-6 lg:p-8 space-y-6">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <Link href="/dashboard" className="text-xs text-purple-400 hover:underline flex items-center gap-1 mb-1">
                <ArrowLeft className="w-3.5 h-3.5" /> Back to Overview
              </Link>
              <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">Web Filtering & SafeSearch</h1>
            </div>

            <span className="text-xs text-emerald-400 bg-emerald-950 border border-emerald-800 px-3.5 py-1.5 rounded-xl font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> Cross-Browser Shield Active (Safari, Chrome, Edge)
            </span>
          </div>

          {/* Core Web Category Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-4">
              <div>
                <div className="font-bold text-lg text-white mb-1">Force SafeSearch</div>
                <div className="text-xs text-slate-400 leading-relaxed">Enforce strict image and search filtering on Google, Bing & YouTube</div>
              </div>
              <button
                onClick={() => setIsSafeSearchActive(!isSafeSearchActive)}
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all border ${
                  isSafeSearchActive
                    ? 'bg-purple-600 text-white border-purple-500'
                    : 'bg-slate-950 text-slate-400 border-slate-800'
                }`}
              >
                {isSafeSearchActive ? 'SafeSearch Enabled' : 'SafeSearch Disabled'}
              </button>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-4">
              <div>
                <div className="font-bold text-lg text-white mb-1">Adult 18+ Category</div>
                <div className="text-xs text-slate-400 leading-relaxed">Automatically block adult material, explicit imagery, and mature content</div>
              </div>
              <button
                onClick={() => setIsAdultCategoryBlocked(!isAdultCategoryBlocked)}
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all border ${
                  isAdultCategoryBlocked
                    ? 'bg-purple-600 text-white border-purple-500'
                    : 'bg-slate-950 text-slate-400 border-slate-800'
                }`}
              >
                {isAdultCategoryBlocked ? 'Adult Shield Active' : 'Adult Shield Paused'}
              </button>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-4">
              <div>
                <div className="font-bold text-lg text-white mb-1">Gambling & Threats</div>
                <div className="text-xs text-slate-400 leading-relaxed">Block online casinos, gambling platforms, and phishing threats</div>
              </div>
              <button
                onClick={() => setIsGamblingBlocked(!isGamblingBlocked)}
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all border ${
                  isGamblingBlocked
                    ? 'bg-purple-600 text-white border-purple-500'
                    : 'bg-slate-950 text-slate-400 border-slate-800'
                }`}
              >
                {isGamblingBlocked ? 'Gambling Shield Active' : 'Gambling Shield Paused'}
              </button>
            </div>

          </div>

          {/* Custom Domain Blacklist */}
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
            <div className="flex justify-between items-center border-b border-slate-800 pb-4">
              <div>
                <h2 className="font-heading font-bold text-xl text-white">Custom Domain Blacklist</h2>
                <div className="text-xs text-slate-400">Block specific web URLs or domain names on family devices</div>
              </div>
            </div>

            {/* Add Domain Form */}
            <form onSubmit={handleAddDomain} className="flex gap-3 text-xs">
              <input
                type="text"
                placeholder="e.g. distraction-site.com"
                value={newDomain}
                onChange={(e) => setNewDomain(e.target.value)}
                className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white outline-none focus:border-purple-500"
                required
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" /> Block URL
              </button>
            </form>

            {/* Blacklisted Domains List */}
            <div className="space-y-2 text-xs">
              {blacklistedDomains.map((domain, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center">
                  <span className="font-mono text-purple-300 font-semibold">{domain}</span>
                  <button
                    onClick={() => handleRemoveDomain(domain)}
                    className="p-1.5 text-slate-500 hover:text-red-400 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
