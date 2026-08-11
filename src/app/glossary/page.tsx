import React from 'react';
import { BookOpen } from 'lucide-react';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Digital Safety Glossary - Parental Control Terms',
  description: 'Definitions of key family online safety terms including Geofencing, Screen Time, Web Filtering, SafeSearch, and Digital Wellbeing.',
  canonical: 'https://trackmastertool.vercel.app/glossary',
});

export default function GlossaryPage() {
  const terms = [
    { term: 'Parental Controls', def: 'Software tools that enable parents to establish digital boundaries, screen time limits, and web filtering on children’s devices.' },
    { term: 'Screen Time', def: 'The total amount of time a person spends using electronic devices with screens, such as smartphones, tablets, or computers.' },
    { term: 'Geofencing', def: 'A GPS feature that uses virtual perimeters around physical locations (e.g. School, Home) to trigger automated arrival/departure alerts.' },
    { term: 'Digital Wellbeing', def: 'A state of health where technology usage enhances personal relationships, academic focus, and physical sleep rather than causing distraction.' },
    { term: 'Content Filtering', def: 'Automated technology that screens and blocks access to inappropriate web pages, violent materials, gambling, or adult content.' },
    { term: 'SafeSearch', def: 'A setting within web search engines (such as Google and Bing) that filters explicit or sexual content out of search results.' },
  ];

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 font-semibold text-xs uppercase mb-3">
            <BookOpen className="w-4 h-4 text-purple-600" /> Educational Resource
          </div>
          <h1 className="font-heading font-extrabold text-4xl text-slate-900 mb-3">Digital Safety Glossary</h1>
          <p className="text-slate-600 text-base">Key terms and concepts in family digital safety, online protection, and device supervision.</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 space-y-6">
          {terms.map((item, idx) => (
            <div key={idx} className="border-b border-slate-100 pb-6 last:border-0 last:pb-0">
              <h2 className="font-heading font-bold text-xl text-slate-900 mb-2">{item.term}</h2>
              <p className="text-slate-600 text-sm leading-relaxed">{item.def}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
