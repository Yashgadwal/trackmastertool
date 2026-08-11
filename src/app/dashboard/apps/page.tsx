'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import DashboardSidebar from '@/components/DashboardSidebar';
import { Smartphone, ArrowLeft, ShieldCheck, Search, Lock, Unlock, CheckCircle2, AlertCircle, Save } from 'lucide-react';

interface AppItem {
  id: string;
  name: string;
  category: string;
  usageToday: string;
  isBlocked: boolean;
  timeLimit: string;
}

export default function DashboardAppsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [apps, setApps] = useState<AppItem[]>([
    { id: 'tiktok', name: 'TikTok', category: 'Social Media', usageToday: '1h 15m', isBlocked: true, timeLimit: '45m' },
    { id: 'instagram', name: 'Instagram', category: 'Social Media', usageToday: '40m', isBlocked: false, timeLimit: '30m' },
    { id: 'roblox', name: 'Roblox', category: 'Gaming', usageToday: '50m', isBlocked: true, timeLimit: '30m' },
    { id: 'youtube', name: 'YouTube', category: 'Entertainment', usageToday: '35m', isBlocked: false, timeLimit: '1h' },
    { id: 'duolingo', name: 'Duolingo', category: 'Education', usageToday: '45m', isBlocked: false, timeLimit: 'Unlimited' },
    { id: 'whatsapp', name: 'WhatsApp', category: 'Messaging', usageToday: '20m', isBlocked: false, timeLimit: '1h' },
    { id: 'viber', name: 'Viber', category: 'Messaging', usageToday: '15m', isBlocked: false, timeLimit: '1h' },
    { id: 'minecraft', name: 'Minecraft', category: 'Gaming', usageToday: '0m', isBlocked: false, timeLimit: '45m' },
  ]);

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const toggleAppBlock = (id: string) => {
    setApps(
      apps.map((app) => {
        if (app.id === id) {
          const nextState = !app.isBlocked;
          setToastMessage(nextState ? `🔒 ${app.name} is now Blocked!` : `🔓 ${app.name} is now Allowed.`);
          setTimeout(() => setToastMessage(null), 2500);
          return { ...app, isBlocked: nextState };
        }
        return app;
      })
    );
  };

  const filteredApps = apps.filter((app) =>
    app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      
      {/* Toast Notification */}
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
              <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">App Usage & App Locker</h1>
            </div>

            <div className="relative">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search installed apps..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-slate-900 border border-slate-800 text-white text-xs rounded-xl pl-9 pr-4 py-2.5 outline-none focus:border-purple-500 w-64"
              />
            </div>
          </div>

          {/* Apps List */}
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3 text-xs font-bold uppercase text-slate-400">
              <span>Application Details</span>
              <span>Locker Status & Action</span>
            </div>

            <div className="space-y-3">
              {filteredApps.map((app) => (
                <div
                  key={app.id}
                  className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-purple-950/80 border border-purple-800/80 text-purple-400">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white flex items-center gap-2">
                        <span>{app.name}</span>
                        <span className="text-[10px] font-semibold text-purple-400 bg-purple-950 px-2 py-0.5 rounded-md border border-purple-800">
                          {app.category}
                        </span>
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        Usage Today: <span className="text-slate-200 font-semibold">{app.usageToday}</span> • Daily Budget: {app.timeLimit}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => toggleAppBlock(app.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all border ${
                        app.isBlocked
                          ? 'bg-purple-950 text-purple-300 border-purple-700 shadow-md'
                          : 'bg-emerald-950 text-emerald-300 border-emerald-800'
                      }`}
                    >
                      {app.isBlocked ? (
                        <>
                          <Lock className="w-3.5 h-3.5 text-purple-400" /> App Blocked
                        </>
                      ) : (
                        <>
                          <Unlock className="w-3.5 h-3.5 text-emerald-400" /> App Allowed
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
