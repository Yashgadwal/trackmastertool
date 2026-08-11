'use client';

import React, { useState } from 'react';
import { Smartphone, CheckCircle, AlertCircle, HelpCircle } from 'lucide-react';

export default function CompatibilityChecker() {
  const [platform, setPlatform] = useState('android');
  const [osVersion, setOsVersion] = useState('android-14');

  const androidOptions = [
    { value: 'android-14', label: 'Android 14 (Latest)', status: 'SUPPORTED', desc: 'Full support for Screen Time, App Usage, Web Filtering & GPS Sharing without root.' },
    { value: 'android-13', label: 'Android 13', status: 'SUPPORTED', desc: 'Full support for all parental supervision & geofencing features.' },
    { value: 'android-12', label: 'Android 12 / 11', status: 'SUPPORTED', desc: 'Full support across Samsung, Google Pixel, Xiaomi, OnePlus & Moto.' },
    { value: 'android-legacy', label: 'Android 8.0 - 10.0', status: 'PARTIALLY_SUPPORTED', desc: 'Supported. Web filtering and GPS available; some app limit UI elements vary.' },
  ];

  const iosOptions = [
    { value: 'ios-17', label: 'iOS 17 / iOS 18', status: 'SUPPORTED', desc: 'Full support via standard Apple Family Sharing & authorized parental profile.' },
    { value: 'ios-16', label: 'iOS 16 / iOS 15', status: 'SUPPORTED', desc: 'Supported without jailbreaking via authorized cloud sync.' },
    { value: 'ios-legacy', label: 'iOS 12 - 14', status: 'PARTIALLY_SUPPORTED', desc: 'Supported for basic screen time & location sharing.' },
  ];

  const currentOptions = platform === 'android' ? androidOptions : iosOptions;
  const currentSelection = currentOptions.find(opt => opt.value === osVersion) || currentOptions[0];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80" id="compatibility">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-3">
          <Smartphone className="w-4 h-4 text-purple-600" /> Device Compatibility Check
        </div>
        
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
          Check If Your Family Device Is <span className="gradient-text">Supported</span>
        </h2>

        <p className="text-slate-600 text-base max-w-xl mx-auto mb-10">
          TrackMasterTool supports standard Android devices (phones & tablets) and iOS devices (iPhones & iPads) with 100% transparent authorization.
        </p>

        {/* Checker Box */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl max-w-2xl mx-auto text-left">
          
          {/* Platform Selector Tabs */}
          <div className="flex rounded-xl bg-slate-100 p-1 mb-6">
            <button
              onClick={() => { setPlatform('android'); setOsVersion('android-14'); }}
              className={`flex-1 py-3 rounded-lg font-semibold text-sm transition-all text-center ${platform === 'android' ? 'bg-white text-purple-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              🤖 Android Phone / Tablet
            </button>
            <button
              onClick={() => { setPlatform('ios'); setOsVersion('ios-17'); }}
              className={`flex-1 py-3 rounded-lg font-semibold text-sm transition-all text-center ${platform === 'ios' ? 'bg-white text-purple-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              🍏 Apple iPhone / iPad
            </button>
          </div>

          {/* OS Version Selector */}
          <div className="mb-6">
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Select Operating System Version:
            </label>
            <select
              value={osVersion}
              onChange={(e) => setOsVersion(e.target.value)}
              className="w-full p-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {currentOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Result Card */}
          <div className={`p-5 rounded-xl border ${currentSelection.status === 'SUPPORTED' ? 'bg-emerald-50/70 border-emerald-200 text-emerald-900' : 'bg-amber-50/70 border-amber-200 text-amber-900'}`}>
            <div className="flex items-center gap-2 font-bold text-base mb-1">
              {currentSelection.status === 'SUPPORTED' ? (
                <>
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span>Fully Supported (100% Compatible)</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                  <span>Partially Supported</span>
                </>
              )}
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {currentSelection.desc}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
