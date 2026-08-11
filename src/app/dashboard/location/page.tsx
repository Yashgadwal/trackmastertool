'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import DashboardSidebar from '@/components/DashboardSidebar';
import { MapPin, ArrowLeft, ShieldCheck, RefreshCw, Plus, Play, Pause, Compass, CheckCircle2, Navigation, AlertCircle } from 'lucide-react';

export default function DashboardLocationPage() {
  const [selectedPin, setSelectedPin] = useState('school');
  const [isPlayingHistory, setIsPlayingHistory] = useState(false);
  const [historyTimestamp, setHistoryTimestamp] = useState('8:15 AM - Lincoln High School');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showAddGeofence, setShowAddGeofence] = useState(false);
  const [newZoneName, setNewZoneName] = useState('');
  const [newZoneRadius, setNewZoneRadius] = useState('200');

  const safeZones = [
    { id: 'school', name: 'Lincoln High School', radius: '300m', type: 'School', time: 'Arrived 8:15 AM' },
    { id: 'home', name: 'Home Safe Perimeter', radius: '150m', type: 'Residential', time: 'Left 7:45 AM' },
    { id: 'sports', name: 'Downtown Sports Complex', radius: '400m', type: 'Activities', time: 'Scheduled 4:00 PM' },
  ];

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  const handleAddZone = (e: React.FormEvent) => {
    e.preventDefault();
    if (newZoneName.trim()) {
      safeZones.push({
        id: newZoneName.toLowerCase().replace(/\s+/g, '-'),
        name: newZoneName,
        radius: `${newZoneRadius}m`,
        type: 'Custom Zone',
        time: 'Active Safe Zone',
      });
      setNewZoneName('');
      setShowAddGeofence(false);
    }
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
              <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">Family Location & Geofencing</h1>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleRefresh}
                className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-purple-400 text-xs font-semibold flex items-center gap-1.5"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} /> Refresh GPS
              </button>
              <button
                onClick={() => setShowAddGeofence(!showAddGeofence)}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-xs flex items-center gap-1.5 shadow-md"
              >
                <Plus className="w-4 h-4" /> Add Geofence Safe Zone
              </button>
            </div>
          </div>

          {/* Add Geofence Modal Form */}
          {showAddGeofence && (
            <form onSubmit={handleAddZone} className="p-6 rounded-2xl bg-slate-900 border border-purple-600/60 space-y-4 shadow-xl">
              <h3 className="font-heading font-bold text-base text-white">Create Custom Geofence Safe Zone</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-slate-400 mb-1">Safe Zone Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Grandparents House"
                    value={newZoneName}
                    onChange={(e) => setNewZoneName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white outline-none focus:border-purple-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Geofence Radius (Meters)</label>
                  <select
                    value={newZoneRadius}
                    onChange={(e) => setNewZoneRadius(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white outline-none focus:border-purple-500"
                  >
                    <option value="100">100 meters (Tight)</option>
                    <option value="200">200 meters (Standard)</option>
                    <option value="500">500 meters (Wide Area)</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setShowAddGeofence(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-purple-600 text-white font-bold"
                >
                  Save Safe Zone
                </button>
              </div>
            </form>
          )}

          {/* Interactive Live Map Simulator */}
          <div className="relative h-[420px] bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden flex flex-col justify-between p-6 shadow-2xl">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 bg-[radial-gradient(#334155_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

            {/* Top Status Overlay */}
            <div className="relative z-10 flex justify-between items-center bg-slate-950/80 backdrop-blur-md p-3.5 rounded-2xl border border-slate-800/80 text-xs">
              <div className="flex items-center gap-2 font-semibold">
                <Compass className="w-4 h-4 text-purple-400" />
                <span>Supervised iPhone 15 Pro • Live GPS Feed</span>
              </div>
              <span className="text-emerald-400 font-mono text-[11px] bg-emerald-950/80 border border-emerald-800 px-2.5 py-1 rounded-full">
                Accuracy: ± 2 meters
              </span>
            </div>

            {/* Map Pin Selector Cards */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3 my-auto">
              {safeZones.map((zone) => (
                <button
                  key={zone.id}
                  onClick={() => setSelectedPin(zone.id)}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    selectedPin === zone.id
                      ? 'bg-purple-950/90 border-purple-500 shadow-lg text-white'
                      : 'bg-slate-950/80 border-slate-800 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm">{zone.name}</span>
                    <MapPin className={`w-4 h-4 ${selectedPin === zone.id ? 'text-purple-400 animate-bounce' : 'text-slate-500'}`} />
                  </div>
                  <div className="text-[11px] text-purple-300 font-mono">{zone.radius} Safe Zone • {zone.type}</div>
                  <div className="text-[10px] text-slate-400 mt-2">{zone.time}</div>
                </button>
              ))}
            </div>

            {/* Bottom Timeline Controls */}
            <div className="relative z-10 bg-slate-950/80 backdrop-blur-md p-3.5 rounded-2xl border border-slate-800/80 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlayingHistory(!isPlayingHistory)}
                  className="p-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold"
                >
                  {isPlayingHistory ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <span className="font-semibold text-slate-300">Route History Playback</span>
              </div>
              <span className="text-slate-400 font-mono text-[11px]">{historyTimestamp}</span>
            </div>

          </div>

        </main>
      </div>
    </div>
  );
}
