'use client';

import React, { useState } from 'react';
import { LayoutDashboard, Users, MapPin, Clock, Smartphone, Globe, AlertTriangle, FileText, Settings, ShieldCheck, Battery, RefreshCw, CheckCircle2 } from 'lucide-react';

export default function LiveDemo() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section className="py-20 bg-slate-900 text-white" id="demo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-purple-400" /> Interactive Product Simulator
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Test Drive the <span className="text-purple-400">TrackMasterTool Dashboard</span>
          </h2>
          <p className="text-slate-400 text-base">
            Click through the dashboard tabs below to explore how parents manage family devices, location safety, screen time limits, and web security.
          </p>
        </div>

        {/* Demo Frame Shell */}
        <div className="bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden min-h-[580px] grid grid-cols-1 lg:grid-cols-12">
          
          {/* DEMO DATA Banner */}
          <div className="lg:col-span-12 bg-amber-500/10 border-b border-amber-500/20 px-4 py-2 text-center text-xs font-mono font-semibold text-amber-300 flex items-center justify-center gap-2">
            <span>⚠️ DEMO SIMULATION ONLY — ALL DATA BELOW IS SAMPLE DEMO CONTENT FOR PREVIEW PURPOSES</span>
          </div>

          {/* Sidebar Navigation */}
          <aside className="lg:col-span-3 bg-slate-900/90 border-r border-slate-800 p-4 flex flex-col gap-1.5">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 px-3 py-2">Demo Navigation</div>

            <button 
              onClick={() => setActiveTab('overview')}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-colors text-left ${activeTab === 'overview' ? 'bg-purple-600 text-white shadow-md' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
            >
              <LayoutDashboard className="w-4 h-4" /> Overview
            </button>

            <button 
              onClick={() => setActiveTab('location')}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-colors text-left ${activeTab === 'location' ? 'bg-purple-600 text-white shadow-md' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
            >
              <MapPin className="w-4 h-4" /> Family Location Map
            </button>

            <button 
              onClick={() => setActiveTab('screentime')}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-colors text-left ${activeTab === 'screentime' ? 'bg-purple-600 text-white shadow-md' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
            >
              <Clock className="w-4 h-4" /> Screen Time Limits
            </button>

            <button 
              onClick={() => setActiveTab('apps')}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-colors text-left ${activeTab === 'apps' ? 'bg-purple-600 text-white shadow-md' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
            >
              <Smartphone className="w-4 h-4" /> App Usage Reports
            </button>

            <button 
              onClick={() => setActiveTab('web')}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-colors text-left ${activeTab === 'web' ? 'bg-purple-600 text-white shadow-md' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
            >
              <Globe className="w-4 h-4" /> Web Filtering
            </button>

            <button 
              onClick={() => setActiveTab('alerts')}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-colors text-left ${activeTab === 'alerts' ? 'bg-purple-600 text-white shadow-md' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
            >
              <AlertTriangle className="w-4 h-4" /> Safety Alerts
            </button>

            <button 
              onClick={() => setActiveTab('devices')}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-colors text-left ${activeTab === 'devices' ? 'bg-purple-600 text-white shadow-md' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
            >
              <Users className="w-4 h-4" /> Authorized Devices
            </button>
          </aside>

          {/* Main Dashboard Content Pane */}
          <main className="lg:col-span-9 p-6 bg-slate-950 flex flex-col justify-between">
            
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="flex flex-col gap-6 animate-in fade-in duration-200">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-white">Family Safety Summary</h3>
                    <p className="text-xs text-slate-400">Supervised Devices: 2 Authorized • Consent Status: Verified</p>
                  </div>
                  <span className="text-xs text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> All Systems Normal
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-xs text-slate-400 mb-1">Today Screen Time</div>
                    <div className="text-2xl font-bold text-white">2h 45m</div>
                    <div className="text-[11px] text-emerald-400 mt-1">Within daily 3.5h limit</div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-xs text-slate-400 mb-1">Active Location</div>
                    <div className="text-base font-bold text-white">Lincoln High School</div>
                    <div className="text-[11px] text-slate-400 mt-1">Arrived at 8:15 AM (Safe Zone)</div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-xs text-slate-400 mb-1">Blocked Web Attempts</div>
                    <div className="text-2xl font-bold text-white">0 Unsafe Sites</div>
                    <div className="text-[11px] text-slate-400 mt-1">Strict Safe Search Active</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col gap-3">
                  <div className="text-sm font-semibold text-slate-200">Recent Family Activity Log</div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between p-2 rounded bg-slate-950 border border-slate-800/80">
                      <span>📍 School Geofence Departure → Heading Home</span>
                      <span className="text-slate-400">3:30 PM</span>
                    </div>
                    <div className="flex justify-between p-2 rounded bg-slate-950 border border-slate-800/80">
                      <span>📱 Khan Academy App Session Completed (45 mins)</span>
                      <span className="text-slate-400">2:15 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Location Tab */}
            {activeTab === 'location' && (
              <div className="flex flex-col gap-4 animate-in fade-in duration-200">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <h3 className="font-heading font-bold text-xl text-white">Authorized Family Location Sharing</h3>
                  <span className="text-xs text-purple-400 font-mono">GPS Ping: 37.7749° N, 122.4194° W</span>
                </div>
                <div className="h-64 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
                  <div className="relative z-10 bg-purple-600 text-white px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 text-xs font-semibold">
                    <MapPin className="w-4 h-4 animate-bounce" /> Supervised iPhone 15 (San Francisco High School)
                  </div>
                </div>
              </div>
            )}

            {/* Screen Time Tab */}
            {activeTab === 'screentime' && (
              <div className="flex flex-col gap-4 animate-in fade-in duration-200">
                <h3 className="font-heading font-bold text-xl text-white border-b border-slate-800 pb-4">Screen Time Schedules & Limits</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                    <div className="text-xs text-slate-400">Weekday Limit</div>
                    <div className="text-xl font-bold text-white mt-1">3 Hours / Day</div>
                    <div className="w-full bg-slate-800 h-2 rounded-full mt-3 overflow-hidden">
                      <div className="bg-purple-500 h-full w-[70%]" />
                    </div>
                  </div>
                  <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                    <div className="text-xs text-slate-400">Bedtime Downtime</div>
                    <div className="text-xl font-bold text-emerald-400 mt-1">9:00 PM – 7:00 AM</div>
                    <div className="text-xs text-slate-400 mt-2">App locking automatically enforced.</div>
                  </div>
                </div>
              </div>
            )}

            {/* Apps, Web, Alerts, Devices fallback view */}
            {['apps', 'web', 'alerts', 'devices'].includes(activeTab) && (
              <div className="flex flex-col gap-4 animate-in fade-in duration-200">
                <h3 className="font-heading font-bold text-xl text-white border-b border-slate-800 pb-4 capitalize">{activeTab} Dashboard Panel</h3>
                <div className="p-8 rounded-xl bg-slate-900 border border-slate-800 text-center text-slate-400 text-sm">
                  Interactive demo module active for {activeTab}. Real-time authorized device data updates seamlessly upon user sign-in.
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-xs text-slate-500">
              <span>TrackMasterTool Supervised Mode v2.4</span>
              <span>🔒 100% Consent Verified</span>
            </div>
          </main>
        </div>

      </div>
    </section>
  );
}
