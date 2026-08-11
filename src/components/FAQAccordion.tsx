'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQAccordion({ dbFaqs }: { dbFaqs?: FAQItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const defaultFaqs: FAQItem[] = [
    {
      q: 'What is TrackMasterTool?',
      a: 'TrackMasterTool is a transparent, consent-based parental control and authorized family device safety platform. It enables parents to monitor screen time, app usage, family location sharing, and web safety across Android and iOS devices.',
    },
    {
      q: 'How does parental control software work?',
      a: 'TrackMasterTool connects to authorized family devices through official operating system APIs or lightweight parental supervision profiles. All digital wellbeing reports and safety notifications sync securely to the parent’s TrackMasterTool web dashboard.',
    },
    {
      q: 'Does TrackMasterTool work on Android devices?',
      a: 'Yes. TrackMasterTool supports standard Android smartphones and tablets (Android 4.0 through Android 14+ across Samsung, Google Pixel, Xiaomi, OnePlus, Motorola, and more) without requiring root access.',
    },
    {
      q: 'Does TrackMasterTool work on Apple iPhones and iPads?',
      a: 'Yes. TrackMasterTool supports iOS devices (iOS 12 through iOS 18+) via standard Apple Family Sharing and parental account credentials without jailbreaking.',
    },
    {
      q: 'Does TrackMasterTool require physical device access?',
      a: 'Initial authorization requires setup on the family device or logging into the target device’s official family management profile to grant consent.',
    },
    {
      q: 'Can I manage multiple family devices from one account?',
      a: 'Yes. Depending on your plan (2 Months, 6 Months, or Lifetime), you can supervise up to 5 family devices simultaneously from your central TrackMasterTool dashboard.',
    },
    {
      q: 'How does real-time family location sharing work?',
      a: 'Family location sharing uses high-accuracy GPS and Wi-Fi triangulation to display authorized family member locations on an interactive map, including custom geofence arrival/departure alerts.',
    },
    {
      q: 'Is TrackMasterTool secure and privacy-focused?',
      a: 'Absolutely. TrackMasterTool utilizes bank-grade 256-bit SSL encryption for data in transit and at rest. We strictly adhere to privacy regulations and never sell personal family data.',
    },
    {
      q: 'Can I cancel my subscription at any time?',
      a: 'Yes. You can cancel subscription renewals at any time with a single click directly inside your customer account portal under Billing Settings.',
    },
    {
      q: 'How does the 14-day refund policy work?',
      a: 'If TrackMasterTool does not perform as described and our 24/7 technical support team cannot resolve your issue, we issue a 100% full refund within 14 days of purchase.',
    },
    {
      q: 'What information does TrackMasterTool collect?',
      a: 'TrackMasterTool collects device metrics (battery status, OS version, last sync), aggregated screen time usage, app categories, visited URLs, and GPS location coordinates strictly for parental supervision.',
    },
    {
      q: 'How can I remove a connected authorized device?',
      a: 'You can remove or revoke any connected device instantly from your dashboard under Authorized Devices Settings.',
    },
  ];

  const faqs = dbFaqs && dbFaqs.length > 0 ? dbFaqs : defaultFaqs;

  return (
    <section className="py-20 bg-white border-b border-slate-200/80" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4 text-purple-600" /> Got Questions?
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-3">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-slate-600 text-base">
            Everything you need to know about TrackMasterTool parental control software, setup, and security.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className={`rounded-2xl border transition-all ${isOpen ? 'bg-purple-50/40 border-purple-200 shadow-md' : 'bg-slate-50/80 border-slate-200/80 hover:bg-slate-50'}`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 font-heading font-bold text-base text-slate-900 focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-purple-600 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-purple-100/60 pt-4 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
