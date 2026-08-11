'use client';

import React from 'react';
import Link from 'next/link';
import { Check, Shield, Zap, Sparkles } from 'lucide-react';

export default function PricingCards() {
  const plans = [
    {
      name: '2 MONTHS PLAN',
      badge: null,
      duration: '2 Months Access',
      desc: 'Standard parental supervision, screen time & family GPS location sharing.',
      priceUsd: 30,
      priceInr: 2499,
      periodLabel: 'for 2 months access',
      features: [
        'Supervise 1 Authorized Device',
        'Real-Time Family GPS Location Sharing',
        'Screen Time Schedules & Limits',
        'Web Category Content Filtering',
        'Battery Status & Sync Alerts',
        'Standard Email Support',
      ],
      isFeatured: false,
      ctaText: 'Get 2 Months ($30)',
      planId: '2-months',
    },
    {
      name: '6 MONTHS PLAN',
      badge: 'MOST POPULAR & RECOMMENDED',
      duration: '6 Months Access',
      desc: 'Complete digital wellbeing, geofences & app limits for multi-child families.',
      priceUsd: 50,
      priceInr: 4199,
      periodLabel: 'for 6 months access',
      features: [
        'Supervise up to 3 Authorized Devices',
        'Real-Time Family GPS & Geofences',
        'Advanced App Usage Limits & Blocker',
        'Strict SafeSearch & Web Content Filter',
        'Weekly Digital Wellbeing Reports',
        'Priority 24/7 Support',
      ],
      isFeatured: true,
      ctaText: 'Get 6 Months ($50)',
      planId: '6-months',
    },
    {
      name: 'LIFETIME PLAN',
      badge: 'BEST VALUE • ONE-TIME PAYMENT',
      duration: 'Lifetime Unlimited Access',
      desc: 'Pay once, use forever. Maximum protection for up to 5 family devices.',
      priceUsd: 100,
      priceInr: 8299,
      periodLabel: 'one-time payment for lifetime',
      features: [
        'Supervise up to 5 Authorized Devices',
        'Lifetime Access & All Future Updates',
        'Unlimited Geofence Safe Zone Alerts',
        'Cross-Platform Android & iOS Support',
        'Custom Web & App Category Blockers',
        '14-Day 100% Money Back Guarantee',
      ],
      isFeatured: false,
      ctaText: 'Get Lifetime Access ($100)',
      planId: 'lifetime',
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200/80" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-purple-600 font-semibold text-sm uppercase tracking-wider mb-2">Simple & Transparent Pricing</div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
            Select Your <span className="gradient-text">TrackMasterTool Plan</span>
          </h2>
          <p className="text-slate-600 text-base">
            Choose between 2 Months ($30), 6 Months ($50), or Lifetime Unlimited Access ($100). No hidden fees, instant activation.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-200 ${
                plan.isFeatured
                  ? 'bg-slate-950 text-white shadow-2xl shadow-purple-950/40 border-2 border-purple-500 lg:-translate-y-2'
                  : 'bg-white text-slate-900 border border-slate-200 shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[11px] font-extrabold px-4 py-1 rounded-full uppercase tracking-wider shadow-md whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <div>
                <h3 className={`font-heading font-extrabold text-xl tracking-tight mb-1 ${plan.isFeatured ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <div className="text-xs font-semibold text-purple-400 mb-3">{plan.duration}</div>

                <p className={`text-xs mb-6 leading-relaxed ${plan.isFeatured ? 'text-slate-300' : 'text-slate-600'}`}>
                  {plan.desc}
                </p>

                <div className="flex items-baseline gap-1.5 mb-6">
                  <span className="text-4xl font-extrabold font-heading">${plan.priceUsd}</span>
                  <span className={`text-xs font-medium ${plan.isFeatured ? 'text-slate-400' : 'text-slate-500'}`}>
                    (₹{plan.priceInr}) {plan.periodLabel}
                  </span>
                </div>

                <ul className="space-y-3 text-xs mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.isFeatured ? 'text-purple-400' : 'text-purple-600'}`} />
                      <span className={plan.isFeatured ? 'text-slate-200' : 'text-slate-700'}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={`/checkout?plan=${plan.planId}`}
                className={`w-full text-center font-bold py-3.5 px-6 rounded-xl transition-all shadow-md text-sm ${
                  plan.isFeatured
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-purple-900/40'
                    : 'bg-slate-950 hover:bg-slate-900 text-white'
                }`}
              >
                {plan.ctaText}
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
