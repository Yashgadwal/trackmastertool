import React from 'react';
import { Shield, HeartHandshake, Lock } from 'lucide-react';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'About Us - TrackMasterTool Responsible Family Safety',
  description: 'Learn about TrackMasterTool philosophy: transparent parental supervision, responsible technology, and digital wellbeing.',
  canonical: 'https://www.trackmastertool.com/about',
});

export default function AboutPage() {
  return (
    <div className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 font-semibold text-xs uppercase mb-3">Our Philosophy</div>
          <h1 className="font-heading font-extrabold text-4xl text-slate-900 mb-4">Empowering Families Through Responsible Technology</h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            TrackMasterTool was founded on a simple principle: parental controls should build family trust and protect children, never infringe on dignity or operate in secret.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6 text-slate-700 leading-relaxed text-sm">
          <h2 className="font-heading font-bold text-2xl text-slate-900">Why TrackMasterTool Exists</h2>
          <p>
            As smartphones become ubiquitous, children face unprecedented exposure to screen addiction, online safety risks, and digital fatigue. We created TrackMasterTool to provide parents clear visibility into screen time, location sharing, and web safety while maintaining complete transparency.
          </p>

          <h2 className="font-heading font-bold text-2xl text-slate-900">Our Core Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <Shield className="w-6 h-6 text-purple-600 mb-2" />
              <h3 className="font-bold text-slate-900">Transparency First</h3>
              <p className="text-xs text-slate-600 mt-1">100% consent-verified parental authorization.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <Lock className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="font-bold text-slate-900">Privacy & Security</h3>
              <p className="text-xs text-slate-600 mt-1">Bank-grade SSL encryption for all family data.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <HeartHandshake className="w-6 h-6 text-purple-600 mb-2" />
              <h3 className="font-bold text-slate-900">Digital Wellbeing</h3>
              <p className="text-xs text-slate-600 mt-1">Encouraging healthy screen balance.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
