'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import DashboardSidebar from '@/components/DashboardSidebar';
import { Users, ArrowLeft, ShieldCheck, Smartphone, Plus, QrCode, Trash2, CheckCircle2, BatteryCharging, Key } from 'lucide-react';

export default function DashboardDevicesPage() {
  const [showPairModal, setShowPairModal] = useState(false);
  const [devices, setDevices] = useState([
    {
      id: 'iphone-15',
      name: "Alex's iPhone 15 Pro",
      os: 'iOS 17.5.1',
      battery: '92%',
      sync: 'Just now',
      status: 'Supervised',
      pin: '4829',
    },
    {
      id: 'samsung-s24',
      name: "Emma's Samsung Galaxy S24",
      os: 'Android 14 (One UI 6.1)',
      battery: '78%',
      sync: '2 mins ago',
      status: 'Supervised',
      pin: '9102',
    },
  ]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleRemoveDevice = (id: string, name: string) => {
    setDevices(devices.filter((d) => d.id !== id));
    setToastMessage(`Device ${name} removed.`);
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
              <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">Authorized Supervised Devices</h1>
            </div>

            <button
              onClick={() => setShowPairModal(!showPairModal)}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-xs flex items-center gap-1.5 shadow-md uppercase tracking-wider"
            >
              <Plus className="w-4 h-4" /> Pair New Companion Device
            </button>
          </div>

          {/* Pair Modal */}
          {showPairModal && (
            <div className="p-6 rounded-3xl bg-slate-900 border border-purple-600/60 space-y-4 shadow-2xl animate-fade-in">
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <h3 className="font-heading font-bold text-base text-white flex items-center gap-2">
                  <QrCode className="w-5 h-5 text-purple-400" /> Pair New Companion Device (3-Minute Setup)
                </h3>
                <button onClick={() => setShowPairModal(false)} className="text-xs text-slate-400 hover:text-white">✕ Close</button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center text-xs">
                <div className="sm:col-span-8 space-y-2 text-slate-300">
                  <p><strong className="text-white">Step 1:</strong> Download TrackMaster Companion on child phone from App Store or Google Play Store.</p>
                  <p><strong className="text-white">Step 2:</strong> Scan this pair QR code or enter activation PIN <span className="font-mono text-purple-400 font-bold bg-purple-950 px-2 py-0.5 rounded border border-purple-800">TM-9821-SAFE</span>.</p>
                  <p><strong className="text-white">Step 3:</strong> Grant standard system Accessibility/Screen Time permissions with parental consent.</p>
                </div>
                <div className="sm:col-span-4 bg-white p-4 rounded-2xl flex flex-col items-center justify-center text-slate-950 font-bold text-center">
                  <div className="w-32 h-32 bg-slate-900 rounded-xl flex items-center justify-center text-white mb-2 font-mono text-xs">
                    [ QR CODE ]
                  </div>
                  <span className="text-[10px] text-slate-600 font-mono">SCAN VIA COMPANION APP</span>
                </div>
              </div>
            </div>
          )}

          {/* Devices Grid */}
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
            <h2 className="font-heading font-bold text-lg text-white border-b border-slate-800 pb-3">Active Supervised Family Devices ({devices.length})</h2>

            <div className="space-y-4">
              {devices.map((device) => (
                <div
                  key={device.id}
                  className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-2xl bg-purple-950/80 border border-purple-800 text-purple-400">
                      <Smartphone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-white">{device.name}</h3>
                      <div className="text-xs text-slate-400 mt-0.5">{device.os} • Battery: <span className="text-emerald-400 font-semibold">{device.battery}</span> • Sync: {device.sync}</div>
                      <div className="text-[11px] text-purple-300 mt-1 flex items-center gap-1">
                        <Key className="w-3 h-3 text-purple-400" /> Uninstall Anti-Tamper PIN: <span className="font-mono font-bold bg-purple-950 px-1.5 py-0.5 rounded border border-purple-800">{device.pin}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs font-semibold">
                      {device.status}
                    </span>
                    <button
                      onClick={() => handleRemoveDevice(device.id, device.name)}
                      className="p-2 text-slate-500 hover:text-red-400 transition-colors"
                      title="Remove Device"
                    >
                      <Trash2 className="w-4 h-4" />
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
