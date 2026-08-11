'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import DashboardSidebar from '@/components/DashboardSidebar';
import { Clock, ArrowLeft, ShieldCheck, Lock, Unlock, Moon, BookOpen, Smartphone, CheckCircle2, Save } from 'lucide-react';

export default function DashboardScreenTimePage() {
  const [dailyLimitHours, setDailyLimitHours] = useState(3.5);
  const [isBedtimeActive, setIsBedtimeActive] = useState(true);
  const [bedtimeStart, setBedtimeStart] = useState('21:00');
  const [bedtimeEnd, setBedtimeEnd] = useState('07:00');
  const [isStudyModeActive, setIsStudyModeActive] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSaveRules = () => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <div className="flex-1 flex flex-col lg:flex-row">
        <DashboardSidebar />

        <main className="flex-1 p-6 lg:p-8 space-y-6">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <Link href="/dashboard" className="text-xs text-purple-400 hover:underline flex items-center gap-1 mb-1">
                <ArrowLeft className="w-3.5 h-3.5" /> Back to Overview
              </Link>
              <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">Screen Time & Bedtime Controls</h1>
            </div>

            <div className="flex items-center gap-3">
              {savedSuccess && (
                <span className="text-xs text-emerald-400 font-bold bg-emerald-950 border border-emerald-800 px-3 py-1.5 rounded-xl animate-fade-in flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Rules Saved & Synced!
                </span>
              )}
              <button
                onClick={handleSaveRules}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-xs flex items-center gap-1.5 shadow-md uppercase tracking-wider"
              >
                <Save className="w-4 h-4" /> Save Schedule Rules
              </button>
            </div>
          </div>

          {/* Daily Screen Time Limit Slider */}
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="font-heading font-bold text-xl text-white">Daily Screen Time Budget</h2>
                <div className="text-xs text-slate-400">Total allowed smartphone screen usage per day</div>
              </div>
              <span className="text-2xl font-extrabold text-purple-400 font-heading bg-purple-950/80 px-4 py-1.5 rounded-2xl border border-purple-800">
                {dailyLimitHours} Hours / Day
              </span>
            </div>

            <div className="space-y-3">
              <input
                type="range"
                min="1"
                max="8"
                step="0.5"
                value={dailyLimitHours}
                onChange={(e) => setDailyLimitHours(parseFloat(e.target.value))}
                className="w-full h-3 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />
              <div className="flex justify-between text-xs text-slate-500 font-medium">
                <span>1 Hour (Strict)</span>
                <span>3.5 Hours (Recommended)</span>
                <span>8 Hours (Max)</span>
              </div>
            </div>
          </div>

          {/* Bedtime Downtime Schedule */}
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-950 text-indigo-400 border border-indigo-800">
                  <Moon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-heading font-bold text-xl text-white">Bedtime Downtime Lockout</h2>
                  <div className="text-xs text-slate-400">Automatically lock non-essential apps during sleep hours</div>
                </div>
              </div>

              <button
                onClick={() => setIsBedtimeActive(!isBedtimeActive)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                  isBedtimeActive
                    ? 'bg-purple-600 text-white border-purple-500'
                    : 'bg-slate-950 text-slate-400 border-slate-800'
                }`}
              >
                {isBedtimeActive ? 'Bedtime Enabled' : 'Bedtime Disabled'}
              </button>
            </div>

            {isBedtimeActive && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <label className="block text-slate-400 font-semibold">Bedtime Starts (App Lockout)</label>
                  <input
                    type="time"
                    value={bedtimeStart}
                    onChange={(e) => setBedtimeStart(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-white font-mono text-sm focus:border-purple-500 outline-none"
                  />
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <label className="block text-slate-400 font-semibold">Morning Unlock Time</label>
                  <input
                    type="time"
                    value={bedtimeEnd}
                    onChange={(e) => setBedtimeEnd(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-white font-mono text-sm focus:border-purple-500 outline-none"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Homework Focus Mode Toggle */}
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-purple-950 text-purple-400 border border-purple-800">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-white">Homework & Study Focus Mode</h3>
                <div className="text-xs text-slate-400">Block gaming and social media while leaving educational apps active</div>
              </div>
            </div>

            <button
              onClick={() => setIsStudyModeActive(!isStudyModeActive)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                isStudyModeActive
                  ? 'bg-emerald-600 text-white border-emerald-500'
                  : 'bg-slate-950 text-slate-400 border-slate-800'
              }`}
            >
              {isStudyModeActive ? 'Study Mode Active' : 'Enable Study Mode'}
            </button>
          </div>

        </main>
      </div>
    </div>
  );
}
