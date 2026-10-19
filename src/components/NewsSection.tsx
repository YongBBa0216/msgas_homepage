import React from 'react';
import { ArrowRight, Share2, Network } from 'lucide-react';
import { Language, NewsItem } from '../types';
import { NEWS_ITEMS } from '../data/mockData';

interface NewsSectionProps {
  lang: Language;
  onSelectNews: (news: NewsItem) => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({
  lang,
  onSelectNews
}) => {
  return (
    <section className="py-20 lg:py-28 max-w-7xl mx-auto px-6" id="notice">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span className="text-xs font-bold text-[#0079C2] uppercase tracking-widest block mb-2">
            {lang === 'ko' ? '공지사항 & 최신소식' : 'NOTICE & PRESS RELEASES'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight">
            {lang === 'ko' ? 'MS가스의 새로운 소식을 전달드립니다.' : 'Latest News & Press Releases from MS Gas'}
          </h2>
        </div>

        <button
          onClick={() => onSelectNews(NEWS_ITEMS[0])}
          className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-[#003a53] hover:text-[#0079C2] text-sm font-semibold transition-colors group cursor-pointer"
        >
          <span>{lang === 'ko' ? '새소식 전체보기' : 'View All Notices'}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* 3 Real News Feed Cards matching mockup */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {NEWS_ITEMS.map((item) => (
          <article
            key={item.id}
            onClick={() => onSelectNews(item)}
            className="bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between cursor-pointer hover:-translate-y-1"
          >
            <div>
              {/* Media banner or graphic */}
              {item.imageUrl ? (
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    alt={item.titleKo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 select-none"
                    src={item.imageUrl}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#0B1B3D]/80 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded">
                    {lang === 'ko' ? item.category : item.categoryEn}
                  </div>
                </div>
              ) : (
                <div className="relative h-48 bg-gradient-to-br from-[#002B49] to-[#005274] p-6 flex flex-col justify-between text-white">
                  <div className="flex items-center justify-between">
                    <span className="bg-white/20 backdrop-blur-sm text-[#c6e7ff] text-[11px] font-semibold px-2.5 py-1 rounded">
                      {lang === 'ko' ? item.category : item.categoryEn}
                    </span>
                    <Network className="w-5 h-5 text-[#41befd]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-300 font-mono tracking-wider">
                      BID & PROJECT
                    </span>
                    <div className="text-base font-bold text-white mt-1">
                      {lang === 'ko' ? '친환경 선박 암모니아 연료 벙커링' : 'Green Vessel Ammonia Bunkering'}
                    </div>
                  </div>
                </div>
              )}

              {/* Article Content */}
              <div className="p-6">
                <time className="text-xs text-slate-400 font-medium block mb-2 font-mono">
                  {item.date}
                </time>
                <h3 className="text-base sm:text-lg font-bold text-[#0B1B3D] group-hover:text-[#0079C2] transition-colors line-clamp-2 mb-3 leading-snug">
                  {lang === 'ko' ? item.titleKo : item.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                  {lang === 'ko' ? item.summaryKo : item.summaryEn}
                </p>
              </div>
            </div>

            {/* Bottom link */}
            <div className="px-6 pb-6 pt-2">
              <span className="inline-flex items-center gap-1 text-[#0079C2] text-xs font-bold group-hover:translate-x-1 transition-transform">
                <span>{lang === 'ko' ? '자세히 보기' : 'Read Full Article'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
