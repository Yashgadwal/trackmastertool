'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { articles, Article } from '@/data/articles';

export default function ParentalControlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [recommended, setRecommended] = useState<Article[]>([]);

  useEffect(() => {
    // Extract current slug from pathname
    const parts = pathname.split('/');
    const currentSlug = parts[parts.length - 1] || '';

    // Filter out the current article
    const filtered = articles.filter((art) => art.slug !== currentSlug);

    // Shuffle and pick 3 random articles for dynamic interlinking
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    setRecommended(shuffled.slice(0, 3));
  }, [pathname]);

  return (
    <div>
      {/* Article Content */}
      {children}

      {/* Dynamic SEO Interlinking Section */}
      <section className="bg-slate-100 border-t border-slate-200 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-slate-200/60 pt-12">
            <div className="flex items-center gap-2 mb-8">
              <span className="p-1.5 rounded-lg bg-purple-50 border border-purple-200 text-purple-700">
                <BookOpen className="w-4 h-4" />
              </span>
              <h3 className="font-heading font-extrabold text-2xl text-slate-900 tracking-tight">
                Recommended Digital Safety Guides
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recommended.map((art, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="space-y-2">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-[10px] font-bold uppercase tracking-wider">
                      {art.category}
                    </span>
                    <h4 className="font-heading font-bold text-base text-slate-900 line-clamp-2 hover:text-purple-600 transition-colors leading-snug">
                      <Link href={`/blog/parental-control/${art.slug}`}>
                        {art.title}
                      </Link>
                    </h4>
                    <p className="text-slate-500 text-xs line-clamp-3 leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" /> {art.readTime}
                    </span>
                    <Link
                      href={`/blog/parental-control/${art.slug}`}
                      className="font-bold text-purple-600 hover:text-purple-500 flex items-center gap-0.5 group"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white border border-slate-300 hover:bg-slate-50 font-semibold rounded-xl text-slate-700 text-xs shadow-sm transition-all"
              >
                <span>Browse All Knowledge Hub Guides</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
