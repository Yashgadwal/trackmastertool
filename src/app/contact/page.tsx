'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="font-heading font-extrabold text-4xl text-slate-900 mb-3">Contact Support & Customer Care</h1>
          <p className="text-slate-600 text-base">Have a question about TrackMasterTool, installation, or your subscription? Our 24/7 technical team is here to help.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Contact Details */}
          <div className="md:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-4 shadow-xl">
              <h2 className="font-heading font-bold text-xl text-white border-b border-slate-800 pb-3">Get in Touch</h2>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-purple-400 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-200">Email Support</div>
                    <div className="text-slate-400">support@trackmastertool.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-emerald-400 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-200">Phone Hotline</div>
                    <div className="text-slate-400">+1 (800) 555-TRACK</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-purple-400 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-200">Headquarters</div>
                    <div className="text-slate-400">TrackMasterTool Inc., San Francisco, CA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-7 bg-white p-8 rounded-2xl border border-slate-200 shadow-xl">
            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-bold text-xl text-slate-900">Message Received!</h3>
                <p className="text-slate-600 text-xs">Support Ticket #TM-{Math.floor(Math.random()*90000+10000)} created. A representative will respond within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Your Name</label>
                  <input type="text" required className="w-full p-3 rounded-xl border border-slate-200 text-sm" placeholder="Sarah Miller" />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Email Address</label>
                  <input type="email" required className="w-full p-3 rounded-xl border border-slate-200 text-sm" placeholder="parent@example.com" />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Support Category</label>
                  <select className="w-full p-3 rounded-xl border border-slate-200 text-sm bg-slate-50">
                    <option value="general">General Inquiry</option>
                    <option value="billing">Billing & Razorpay</option>
                    <option value="setup">Device Onboarding & Setup</option>
                    <option value="compatibility">Compatibility Check</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Message Details</label>
                  <textarea required rows={4} className="w-full p-3 rounded-xl border border-slate-200 text-sm" placeholder="How can our technical support team assist you today?"></textarea>
                </div>

                <button type="submit" className="w-full py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm shadow-md flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" /> Send Ticket Message
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
