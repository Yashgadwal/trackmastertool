import React from 'react';
import { Lock, Eye, CreditCard, ShieldAlert, Headphones } from 'lucide-react';

export default function TrustBar() {
  const trustItems = [
    { icon: Lock, title: '256-Bit Encrypted Data', desc: 'Bank-grade security standards' },
    { icon: Eye, title: 'Transparent Monitoring', desc: 'Consent-verified supervision' },
    { icon: CreditCard, title: 'Secure Payments', desc: '100% encrypted checkout' },
    { icon: ShieldAlert, title: 'Privacy Controls', desc: 'Full account data management' },
    { icon: Headphones, title: '24/7 Customer Support', desc: 'Dedicated technical assistance' },
  ];

  return (
    <section className="py-8 bg-slate-900 border-y border-slate-800 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex flex-col items-center gap-2 p-2">
                <div className="w-10 h-10 rounded-xl bg-purple-600/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="font-heading font-semibold text-sm text-white">{item.title}</div>
                <div className="text-xs text-slate-400">{item.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
