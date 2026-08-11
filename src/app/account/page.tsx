'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, Smartphone, CreditCard, Lock, CheckCircle2, AlertCircle, FileText, Settings, User } from 'lucide-react';

export default function AccountPage() {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-heading font-extrabold text-3xl text-slate-900">Customer Account Portal</h1>
          <p className="text-slate-600 text-sm">Manage your subscription, authorized family devices, consent records, and security settings.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-1">
            <Link href="/account" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-purple-600 text-white font-semibold text-sm shadow-sm">
              <User className="w-4 h-4" /> Account Overview
            </Link>
            <Link href="/account/devices" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 hover:bg-slate-50 font-medium text-sm">
              <Smartphone className="w-4 h-4" /> Authorized Devices
            </Link>
            <Link href="/account/subscriptions" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 hover:bg-slate-50 font-medium text-sm">
              <CreditCard className="w-4 h-4" /> Subscriptions & Billing
            </Link>
            <Link href="/account/invoices" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 hover:bg-slate-50 font-medium text-sm">
              <FileText className="w-4 h-4" /> Invoices
            </Link>
            <Link href="/account/security" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 hover:bg-slate-50 font-medium text-sm">
              <Lock className="w-4 h-4" /> Security & 2FA
            </Link>
          </aside>

          {/* Account Overview Main */}
          <main className="lg:col-span-9 space-y-6">
            
            {/* Account Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-heading font-bold text-xl text-slate-900">Sarah Miller</h2>
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified Customer
                  </span>
                </div>
                <div className="text-slate-500 text-sm mt-1">parent@example.com • United States</div>
              </div>
              <Link href="/dashboard" className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl text-sm shadow-md">
                Open Product Dashboard
              </Link>
            </div>

            {/* Subscription Summary */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h3 className="font-heading font-bold text-lg text-slate-900 mb-4 border-b border-slate-100 pb-3">Active Subscription</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500">Plan Name</div>
                  <div className="font-bold text-slate-900 text-base mt-1">TrackMaster Pro (Yearly)</div>
                  <div className="text-xs text-purple-600 font-semibold mt-1">Up to 3 Devices</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500">Next Renewal Date</div>
                  <div className="font-bold text-slate-900 text-base mt-1">August 10, 2027</div>
                  <div className="text-xs text-slate-500 mt-1">$203.88 / year</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500">Subscription Status</div>
                  <div className="font-bold text-emerald-600 text-base mt-1">Active (Auto-Renew)</div>
                  <div className="text-xs text-slate-500 mt-1">14-Day Guarantee Active</div>
                </div>
              </div>
            </div>

            {/* Connected Devices & Consent Summary */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-3">
                <h3 className="font-heading font-bold text-lg text-slate-900">Connected Authorized Devices</h3>
                <Link href="/account/devices" className="text-purple-600 hover:text-purple-700 font-semibold text-xs">Manage All Devices →</Link>
              </div>

              <div className="space-y-3 text-sm">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-purple-100 text-purple-600"><Smartphone className="w-5 h-5" /></div>
                    <div>
                      <div className="font-bold text-slate-900">Sarah's iPhone 15 Pro</div>
                      <div className="text-xs text-slate-500">iOS 17.4 • Battery 92% • Sync: Just now</div>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                    ✓ Consent Authorized
                  </span>
                </div>
              </div>
            </div>

          </main>

        </div>
      </div>
    </div>
  );
}
