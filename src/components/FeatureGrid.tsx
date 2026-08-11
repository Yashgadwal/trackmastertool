'use client';

import React from 'react';
import { Smartphone, MapPin, Clock, Shield, Lock, LayoutGrid, CheckCircle2, MessageSquare } from 'lucide-react';

export default function FeatureGrid() {
  const features = [
    {
      icon: MapPin,
      color: 'text-purple-600 bg-purple-50 border-purple-200',
      title: 'Real-Time Family GPS Location Sharing',
      desc: 'View authorized family member locations on an interactive live map with 30-day location route history logs.',
    },
    {
      icon: Shield,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
      title: 'Geofence Safe Zone Arrival Alerts',
      desc: 'Set virtual perimeters around School, Home, and Coaching. Receive automated push notifications upon entrance or exit.',
    },
    {
      icon: Clock,
      color: 'text-purple-600 bg-purple-50 border-purple-200',
      title: 'Screen Time Limits & Bedtime Downtime',
      desc: 'Configure custom daily screen quotas and automatic bedtime app lockouts to support healthy sleep and study balance.',
    },
    {
      icon: LayoutGrid,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
      title: 'Categorized App Budgets & App Blocker',
      desc: 'Set daily allowances for mobile games and social media while whitelisting educational utilities like Duolingo.',
    },
    {
      icon: Lock,
      color: 'text-purple-600 bg-purple-50 border-purple-200',
      title: 'Strict Web Filtering & SafeSearch Force',
      desc: 'Block 18+ adult content, gambling, and violent sites across Safari, Chrome, and mobile browsers with automatic SafeSearch.',
    },
    {
      icon: MessageSquare,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
      title: 'Messaging App Safety & Unknown Alerts',
      desc: 'Set time limits for WhatsApp and Viber while receiving automated safety notifications for unknown incoming phone numbers.',
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-purple-600 font-semibold text-xs uppercase tracking-wider mb-2">Comprehensive Family Protection</div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
            Powerful Parental Supervision <span className="gradient-text">Features</span>
          </h2>
          <p className="text-slate-600 text-base">
            TrackMasterTool delivers total visibility into digital habits while preserving open family communication and trust.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border mb-6 ${item.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
