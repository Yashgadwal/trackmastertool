'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import DashboardSidebar from '@/components/DashboardSidebar';
import { AlertTriangle, ArrowLeft, ShieldCheck, CheckCircle2, MapPin, Globe, Smartphone, Bell, Trash2 } from 'lucide-react';

interface AlertItem {
  id: string;
  type: 'geofence' | 'web' | 'contact' | 'battery';
  title: string;
  desc: string;
  time: string;
  device: string;
  resolved: boolean;
}

export default function DashboardAlertsPage() {
  const [filter, setFilter] = useState<'all' | 'geofence' | 'web' | 'contact'>('all');
  const [alerts, setAlerts] = useState<AlertItem[]>([
    {
      id: '1',
      type: 'geofence',
      title: 'Geofence Safe Zone Entrance',
      desc: 'Supervised iPhone 15 Pro entered Lincoln High School perimeter.',
      time: '8:15 AM Today',
      device: "Alex's iPhone 15 Pro",
      resolved: false,
    },
    {
      id: '2',
      type: 'web',
      title: 'Web SafeSearch Block Event',
      desc: 'Blocked 1 unverified domain search query attempt under strict adult category rule.',
      time: 'Yesterday 6:40 PM',
      device: "Alex's iPhone 15 Pro",
      resolved: false,
    },
    {
      id: '3',
      type: 'contact',
      title: 'Unknown Incoming Phone Number Alert',
      desc: 'Received incoming SMS query from unlisted phone contact (+1 555-0192).',
      time: 'Yesterday 4:15 PM',
      device: "Emma's Samsung S24",
      resolved: true,
    },
  ]);

  const toggleResolve = (id: string) => {
    setAlerts(
      alerts.map((a) => (a.id === id ? { ...a, resolved: !a.resolved } : a))
    );
  };

  const filteredAlerts = alerts.filter((a) => filter === 'all' || a.type === filter);

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
              <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">Family Safety Alerts</h1>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-2 text-xs">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1.5 rounded-xl font-semibold border ${
                  filter === 'all' ? 'bg-purple-600 text-white border-purple-500' : 'bg-slate-900 text-slate-400 border-slate-800'
                }`}
              >
                All Alerts
              </button>
              <button
                onClick={() => setFilter('geofence')}
                className={`px-3 py-1.5 rounded-xl font-semibold border ${
                  filter === 'geofence' ? 'bg-purple-600 text-white border-purple-500' : 'bg-slate-900 text-slate-400 border-slate-800'
                }`}
              >
                Geofence
              </button>
              <button
                onClick={() => setFilter('web')}
                className={`px-3 py-1.5 rounded-xl font-semibold border ${
                  filter === 'web' ? 'bg-purple-600 text-white border-purple-500' : 'bg-slate-900 text-slate-400 border-slate-800'
                }`}
              >
                Web Filter
              </button>
            </div>
          </div>

          {/* Alerts Feed */}
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
            <h2 className="font-heading font-bold text-lg text-white border-b border-slate-800 pb-3">Recent Security & Safety Feed</h2>

            <div className="space-y-3">
              {filteredAlerts.map((item) => (
                <div
                  key={item.id}
                  className={`p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all ${
                    item.resolved ? 'bg-slate-950/60 border-slate-800/60 opacity-60' : 'bg-slate-950 border-purple-900/40 shadow-lg'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-purple-950 text-purple-400 border border-purple-800">
                      {item.type === 'geofence' && <MapPin className="w-5 h-5" />}
                      {item.type === 'web' && <Globe className="w-5 h-5" />}
                      {item.type === 'contact' && <Smartphone className="w-5 h-5" />}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white flex items-center gap-2">
                        <span>{item.title}</span>
                        {item.resolved && <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950 px-2 py-0.5 rounded">Resolved</span>}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">{item.desc}</div>
                      <div className="text-[11px] text-purple-400 mt-1 font-mono">{item.device} • {item.time}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleResolve(item.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                      item.resolved
                        ? 'bg-slate-900 text-slate-400 border-slate-800'
                        : 'bg-emerald-950 text-emerald-300 border-emerald-800 hover:bg-emerald-900'
                    }`}
                  >
                    {item.resolved ? 'Reopen Alert' : 'Mark Resolved'}
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
