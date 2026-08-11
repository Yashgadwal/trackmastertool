import React from 'react';
import Link from 'next/link';
import { BookOpen, ArrowRight, Clock } from 'lucide-react';

interface ArticleItem {
  title: string;
  category: string;
  slug: string;
  readTime: string;
}

const allArticles: ArticleItem[] = [
  {
    title: "How Can I Monitor My Child's Phone Activity?",
    category: 'Child Monitoring',
    slug: 'how-can-i-monitor-my-childs-phone-activity',
    readTime: '14 min read',
  },
  {
    title: 'How to Monitor Viber Messages Safely in 2026',
    category: 'Messaging Safety',
    slug: 'how-to-monitor-viber-messages-safely',
    readTime: '14 min read',
  },
  {
    title: 'Android Parental Control App: Complete Guide',
    category: 'Android Safety',
    slug: 'android-parental-control-guide',
    readTime: '12 min read',
  },
  {
    title: "Can I Read My Child's WhatsApp Messages Without Them Knowing?",
    category: 'WhatsApp Supervision',
    slug: 'can-i-read-my-childs-whatsapp-messages',
    readTime: '14 min read',
  },
  {
    title: "How to See Someone's TikTok DMs (Parents Guide 2026)",
    category: 'TikTok Safety',
    slug: 'how-to-see-someones-tiktok-dms',
    readTime: '13 min read',
  },
  {
    title: 'How to See What Websites My Child Visits on iPhone',
    category: 'iPhone Web Filter',
    slug: 'how-to-see-what-websites-my-child-visits-on-iphone',
    readTime: '15 min read',
  },
  {
    title: 'Monitor App Without Target Phone Access',
    category: 'Setup & Security',
    slug: 'monitor-app-without-target-phone-access',
    readTime: '14 min read',
  },
  {
    title: "How to Monitor Someone's Instagram",
    category: 'Instagram Safety',
    slug: 'how-to-monitor-someones-instagram',
    readTime: '13 min read',
  },
  {
    title: 'Can Parents Monitor WhatsApp Messages on Android?',
    category: 'Android WhatsApp',
    slug: 'can-parents-monitor-whatsapp-messages-on-android',
    readTime: '14 min read',
  },
  {
    title: 'Best Parental Control App with Location Tracking',
    category: 'GPS Location',
    slug: 'best-parental-control-app-with-location-tracking',
    readTime: '14 min read',
  },
  {
    title: 'Cell Phone GPS Location Tracking & Geofencing',
    category: 'GPS Geofencing',
    slug: 'cellphone-gps-tracking',
    readTime: '12 min read',
  },
];

export default function RelatedArticles({ currentSlug }: { currentSlug: string }) {
  const filtered = allArticles.filter((item) => item.slug !== currentSlug).slice(0, 3);

  return (
    <section className="mt-12 pt-10 border-t border-slate-200">
      <div className="flex items-center gap-2 text-xs font-semibold text-purple-600 uppercase tracking-wider mb-2">
        <BookOpen className="w-4 h-4" /> Contextual Interlinking
      </div>
      <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-6">
        Related Family Digital Safety Guides
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((art, idx) => (
          <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 hover:border-purple-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2">
                <span className="font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded">{art.category}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {art.readTime}</span>
              </div>
              <h4 className="font-bold text-sm text-slate-900 mb-3 hover:text-purple-600 transition-colors leading-snug">
                <Link href={`/blog/parental-control/${art.slug}`}>{art.title}</Link>
              </h4>
            </div>

            <Link href={`/blog/parental-control/${art.slug}`} className="text-xs font-semibold text-purple-600 flex items-center gap-1 hover:gap-2 transition-all">
              <span>Read Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
