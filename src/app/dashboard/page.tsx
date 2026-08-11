'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import DashboardSidebar from '@/components/DashboardSidebar';
import {
  LayoutDashboard, Users, MapPin, Clock, Smartphone, Globe, AlertTriangle, Settings,
  ShieldCheck, CheckCircle2, RefreshCw, Lock, Unlock, Zap, BatteryCharging, AlertCircle, Plus, ChevronRight
} from 'lucide-react';

export default function DashboardOverviewPage() {
  // Interactive Dashboard States
  const [selectedDevice, setSelectedDevice] = useState('iphone-15');
  const [isDeviceLocked, setIsDeviceLocked] = useState(false);
  const [isWebFilterActive, setIsWebFilterActive] = useState(true);
  const [isRefreshingGps, setIsRefreshingGps] = useState(false);
  const [lastGpsSync, setLastGpsSync] = useState('Just now');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Dynamic Device Metadata
  const devices = [
    {
      id: 'iphone-15',
      name: "Alex's iPhone 15 Pro",
      owner: 'Alex (14 yrs)',
      battery: '92%',
      location: 'Lincoln High School (Safe Zone)',
      screenTimeToday: '2h 45m',
      limit: '3h 30m',
      status: 'Online • Syncing',
    },
    {
      id: 'samsung-s24',
      name: "Emma's Samsung Galaxy S24",
      owner: 'Emma (11 yrs)',
      battery: '78%',
      location: 'Home Safe Perimeter',
      screenTimeToday: '1h 20m',
      limit: '2h 00m',
      status: 'Online • Syncing',
    },
    {
      id: 'ipad-air',
      name: "Family iPad Air",
      owner: 'Shared Family Device',
      battery: '100%',
      location: 'Home Safe Perimeter',
      screenTimeToday: '0h 40m',
      limit: '1h 30m',
      status: 'Standby',
    },
  ];

  const currentDevice = devices.find((d) => d.id === selectedDevice) || devices[0];

  // Helper Toast Alert
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Lock Device Action
  const handleToggleLock = () => {
    setIsDeviceLocked(!isDeviceLocked);
    showToast(!isDeviceLocked ? `🔒 ${currentDevice.name} locked instantly!` : `🔓 ${currentDevice.name} unlocked.`);
  };

  // Refresh GPS Action
  const handleRefreshGps = () => {
    setIsRefreshingGps(true);
    setTimeout(() => {
      setIsRefreshingGps(false);
      const times = ['Just now', '1 sec ago', 'Updated'];
      setLastGpsSync(times[Math.floor(Math.random() * times.length)]);
      showToast(`📍 Instant GPS Ping sent to ${currentDevice.name}!`);
    }, 1200);
  };

  // Toggle Web Filter
  const handleToggleWebFilter = () => {
    setIsWebFilterActive(!isWebFilterActive);
    showToast(!isWebFilterActive ? `🛡️ Strict Web Filter activated!` : `⚠️ Web Filter paused.`);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-2 shadow-md">
        <ShieldCheck className="w-4 h-4" />
        <span>TrackMasterTool Control Panel • Authorized Parental Supervision Mode Active</span>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-16 right-6 z-50 bg-slate-900 border border-purple-500 text-white text-xs font-bold px-4 py-3 rounded-xl shadow-2xl animate-fade-in flex items-center gap-2">
          <SparklesIcon className="w-4 h-4 text-purple-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="flex-1 flex flex-col lg:flex-row">
        
        {/* Sidebar */}
        <DashboardSidebar />

        {/* Main Dashboard Area */}
        <main className="flex-1 p-6 lg:p-8 space-y-6">
          
          {/* Header & Device Switcher */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">Family Device Oversight</h1>
              <p className="text-slate-400 text-xs sm:text-sm">Managing: <span className="text-purple-400 font-semibold">{currentDevice.name}</span> • Last Sync: {lastGpsSync}</p>
            </div>

            {/* Active Device Dropdown & Consent Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <select
                value={selectedDevice}
                onChange={(e) => setSelectedDevice(e.target.value)}
                className="bg-slate-900 border border-slate-800 text-white font-semibold text-xs rounded-xl px-3.5 py-2 focus:ring-2 focus:ring-purple-500 outline-none cursor-pointer"
              >
                {devices.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name} ({d.owner})
                  </option>
                ))}
              </select>

              <span className="px-3 py-2 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> 100% Consent Verified
              </span>
            </div>
          </div>

          {/* Locked Status Banner if Active */}
          {isDeviceLocked && (
            <div className="p-4 rounded-2xl bg-purple-950/80 border border-purple-600 text-white text-xs font-semibold flex items-center justify-between shadow-xl">
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-purple-400 animate-pulse" />
                <div>
                  <div className="font-bold text-sm">INSTANT LOCK ACTIVE on {currentDevice.name}</div>
                  <div className="text-purple-200 text-[11px]">All non-essential apps and web access are blocked until unlocked.</div>
                </div>
              </div>
              <button
                onClick={handleToggleLock}
                className="px-4 py-2 rounded-xl bg-white text-slate-950 font-bold text-xs hover:bg-slate-100 transition-all flex items-center gap-1.5"
              >
                <Unlock className="w-3.5 h-3.5 text-purple-600" /> Unlock Now
              </button>
            </div>
          )}

          {/* Quick Metrics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all">
              <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
                <span>Today Screen Time</span>
                <Clock className="w-4 h-4 text-purple-400" />
              </div>
              <div className="text-3xl font-extrabold text-white">{currentDevice.screenTimeToday}</div>
              <div className="text-xs text-emerald-400 mt-2 font-medium">Daily Budget: {currentDevice.limit}</div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all">
              <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
                <span>Current Location</span>
                <MapPin className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-base font-bold text-white leading-tight">{currentDevice.location}</div>
              <div className="text-xs text-emerald-400 mt-2">Verified Safe Zone • GPS ±2m</div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all">
              <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
                <span>Web Content Shield</span>
                <Globe className="w-4 h-4 text-indigo-400" />
              </div>
              <div className="text-xl font-bold text-white">{isWebFilterActive ? 'Strict SafeSearch' : 'Filter Paused'}</div>
              <div className="text-xs text-slate-400 mt-2">18+ Adult & Threat Shield</div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all">
              <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
                <span>Device Telemetry</span>
                <BatteryCharging className="w-4 h-4 text-green-400" />
              </div>
              <div className="text-3xl font-extrabold text-white">{currentDevice.battery}</div>
              <div className="text-xs text-slate-400 mt-2">{currentDevice.status}</div>
            </div>

          </div>

          {/* Interactive Controls Bar & Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Live Family Stream */}
            <div className="lg:col-span-8 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">Live Family Activity Stream</h3>
                  <div className="text-xs text-slate-400">Real-time safety events & geofence pings</div>
                </div>
                <button
                  onClick={handleRefreshGps}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-purple-400 text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-all"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isRefreshingGps ? 'animate-spin' : ''}`} /> Refresh Ping
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400"><MapPin className="w-4 h-4" /></div>
                    <div>
                      <div className="font-semibold text-slate-200">Arrived at Safe Zone: School</div>
                      <div className="text-slate-400">Lincoln High School • Geofence Entrance Notification</div>
                    </div>
                  </div>
                  <span className="text-slate-500 font-mono">8:15 AM</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400"><Smartphone className="w-4 h-4" /></div>
                    <div>
                      <div className="font-semibold text-slate-200">Educational Session Completed</div>
                      <div className="text-slate-400">Duolingo • 45 minutes study quota met</div>
                    </div>
                  </div>
                  <span className="text-slate-500 font-mono">Yesterday</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400"><Globe className="w-4 h-4" /></div>
                    <div>
                      <div className="font-semibold text-slate-200">Web SafeSearch Verified</div>
                      <div className="text-slate-400">Strict Adult Content Shield Active • 0 Security Threats</div>
                    </div>
                  </div>
                  <span className="text-slate-500 font-mono">Yesterday</span>
                </div>
              </div>
            </div>

            {/* Quick Interactive Parent Controls */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h3 className="font-heading font-bold text-lg text-white border-b border-slate-800 pb-3">Instant Parent Controls</h3>

              <div className="space-y-3">
                
                {/* Lock Device Instant Button */}
                <button
                  onClick={handleToggleLock}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md ${
                    isDeviceLocked
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                      : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white'
                  }`}
                >
                  {isDeviceLocked ? (
                    <>
                      <Unlock className="w-4 h-4" /> Unlock Device Now
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" /> Lock Device for Dinner (Instant)
                    </>
                  )}
                </button>

                {/* Request GPS Ping Button */}
                <button
                  onClick={handleRefreshGps}
                  className="w-full py-3.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-all"
                >
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>Request Instant GPS Location</span>
                </button>

                {/* Web Filter Toggle Button */}
                <button
                  onClick={handleToggleWebFilter}
                  className="w-full py-3.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-all"
                >
                  <Globe className="w-4 h-4 text-purple-400" />
                  <span>{isWebFilterActive ? 'Pause Web Filter' : 'Enable Strict Web Filter'}</span>
                </button>

              </div>
            </div>

          </div>

        </main>

      </div>
    </div>
  );
}

function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4m0 0v4m0-4h4m-4 0H1m12-4v4m0 0v4m0-4h4m-4 0h-4m-4 8v4m0 0v4m0-4h4m-4 0H1" />
    </svg>
  );
}
