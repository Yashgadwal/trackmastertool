import React from 'react';
import { Check, X, ShieldCheck } from 'lucide-react';

export default function ComparisonTable() {
  const features = [
    { name: 'Transparent Parental Authorization', trackmaster: true, basic: false },
    { name: 'Screen Time Schedules & App Limits', trackmaster: true, basic: true },
    { name: 'App Usage Categorization & Analytics', trackmaster: true, basic: false },
    { name: 'Real-Time Family GPS Location Sharing', trackmaster: true, basic: true },
    { name: 'Geofence Safe Zone Arrival Notifications', trackmaster: true, basic: false },
    { name: 'Web Content Filtering & SafeSearch Enforcement', trackmaster: true, basic: true },
    { name: 'Specific Website URL Blocker', trackmaster: true, basic: false },
    { name: 'Weekly Family Digital Wellbeing Digests', trackmaster: true, basic: false },
    { name: 'Multi-Device Cross-Platform (Android & iOS)', trackmaster: true, basic: true },
    { name: 'Encrypted Data Privacy Controls', trackmaster: true, basic: false },
    { name: '24/7 Technical Customer Support', trackmaster: true, basic: false },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-purple-600 font-semibold text-sm uppercase tracking-wider mb-2">Feature Breakdown</div>
          <h2 className="font-heading font-extrabold text-3xl text-slate-900 tracking-tight mb-3">
            TrackMasterTool vs <span className="gradient-text">Basic Controls</span>
          </h2>
          <p className="text-slate-600 text-sm">
            Discover why modern parents choose TrackMasterTool for comprehensive family digital protection.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-sm">
                  <th className="p-4 font-bold font-heading">Key Safety Capabilities</th>
                  <th className="p-4 font-bold font-heading text-center bg-purple-600 w-48">
                    <span className="flex items-center justify-center gap-1.5"><ShieldCheck className="w-4 h-4" /> TrackMasterTool</span>
                  </th>
                  <th className="p-4 font-bold font-heading text-center text-slate-300 w-44">Basic OS Controls</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {features.map((item, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                    <td className="p-4 font-medium text-slate-800">{item.name}</td>
                    <td className="p-4 text-center bg-purple-50/40">
                      {item.trackmaster ? (
                        <span className="inline-flex p-1 rounded-full bg-purple-600 text-white"><Check className="w-3.5 h-3.5" /></span>
                      ) : (
                        <span className="inline-flex p-1 rounded-full bg-slate-200 text-slate-500"><X className="w-3.5 h-3.5" /></span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {item.basic ? (
                        <span className="inline-flex p-1 rounded-full bg-emerald-100 text-emerald-700"><Check className="w-3.5 h-3.5" /></span>
                      ) : (
                        <span className="inline-flex p-1 rounded-full bg-slate-100 text-slate-400"><X className="w-3.5 h-3.5" /></span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
