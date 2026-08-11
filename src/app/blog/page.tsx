import React from 'react';
import Link from 'next/link';
import { BookOpen, Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Family Safety Blog & Parental Control Guides (2000+ Words Each)',
  description: 'In-depth, 2000+ word expert guides on cell phone monitoring, WhatsApp supervision, TikTok DM safety, iPhone web filtering, and GPS location tracking.',
  canonical: 'https://trackmastertool.vercel.app/blog',
});

import { articles } from '@/data/articles';

const ITEMS_PER_PAGE = 4;

export default function BlogIndexPage({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  const currentPage = Math.max(1, parseInt(searchParams?.page || '1', 10));
  const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);

  const paginatedArticles = articles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Blog Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-4 h-4 text-purple-600" /> Digital Safety Knowledge Hub
          </div>
          <h1 className="font-heading font-extrabold text-4xl text-slate-900 tracking-tight mb-4">
            Family Safety & <span className="gradient-text">Parental Control Blog</span>
          </h1>
          <p className="text-slate-600 text-base">
            In-depth 2,000+ word expert guides, device safety checklists, and actionable parenting articles to help your family thrive in the digital age.
          </p>
        </div>

        {/* Article Cards Grid - 4 Per Page */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {paginatedArticles.map((art, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between">
              
              {/* Image Thumbnail */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="font-bold text-white bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-lg text-xs border border-white/20">
                    {art.category}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1 font-medium"><Clock className="w-3.5 h-3.5" /> {art.readTime}</span>
                    <span className="text-slate-400 font-medium">{art.date}</span>
                  </div>

                  <h2 className="font-heading font-bold text-xl text-slate-900 mb-3 hover:text-purple-600 transition-colors leading-tight">
                    <Link href={`/blog/parental-control/${art.slug}`}>{art.title}</Link>
                  </h2>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{art.excerpt}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex justify-end">
                  <Link href={`/blog/parental-control/${art.slug}`} className="font-bold text-purple-600 flex items-center gap-1 hover:gap-2 transition-all text-sm">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Bar */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 pt-8 border-t border-slate-200">
            {currentPage > 1 ? (
              <Link
                href={`/blog?page=${currentPage - 1}`}
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-100 flex items-center gap-1 shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" /> Previous Page
              </Link>
            ) : (
              <span className="px-4 py-2 rounded-xl bg-slate-100 text-slate-400 font-semibold text-xs cursor-not-allowed flex items-center gap-1">
                <ChevronLeft className="w-4 h-4" /> Previous Page
              </span>
            )}

            <div className="flex items-center gap-1 px-4 text-xs font-semibold text-slate-600">
              Page <span className="text-purple-600 font-bold px-1">{currentPage}</span> of {totalPages}
            </div>

            {currentPage < totalPages ? (
              <Link
                href={`/blog?page=${currentPage + 1}`}
                className="px-4 py-2 rounded-xl bg-purple-600 text-white font-semibold text-xs hover:bg-purple-500 flex items-center gap-1 shadow-md"
              >
                Next Page <ChevronRight className="w-4 h-4" />
              </Link>
            ) : (
              <span className="px-4 py-2 rounded-xl bg-slate-100 text-slate-400 font-semibold text-xs cursor-not-allowed flex items-center gap-1">
                Next Page <ChevronRight className="w-4 h-4" />
              </span>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
