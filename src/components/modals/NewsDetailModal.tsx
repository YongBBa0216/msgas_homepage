import React from 'react';
import { X, Calendar, Share2, Award, ChevronRight } from 'lucide-react';
import { Language, NewsItem } from '../../types';

interface NewsDetailModalProps {
  news: NewsItem | null;
  onClose: () => void;
  lang: Language;
}

export const NewsDetailModal: React.FC<NewsDetailModalProps> = ({ news, onClose, lang }) => {
  if (!news) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 transition-all max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Category & Date */}
        <div className="flex items-center gap-3 mb-3">
          <span className="px-2.5 py-1 text-xs font-semibold rounded bg-[#0079C2]/10 text-[#0079C2]">
            {lang === 'ko' ? news.category : news.categoryEn}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <Calendar className="w-3.5 h-3.5" />
            <span>{news.date}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-[#0B1B3D] tracking-tight leading-snug mb-4">
          {lang === 'ko' ? news.titleKo : news.titleEn}
        </h3>

        {/* Featured Image if available */}
        {news.imageUrl ? (
          <div className="rounded-xl overflow-hidden mb-6 border border-slate-200 shadow-sm max-h-80">
            <img 
              src={news.imageUrl} 
              alt={news.titleKo}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        ) : news.isSpecialProject ? (
          <div className="bg-gradient-to-br from-[#002B49] to-[#005274] text-white p-6 rounded-xl mb-6 shadow-sm">
            <div className="text-xs font-mono text-[#81cfff] mb-1">NATIONAL R&D PROJECT</div>
            <div className="text-lg font-bold">친환경 선박 암모니아 TTS 벙커링 인프라 구축 및 표준 개발</div>
            <p className="text-xs text-slate-200 mt-2">
              중소벤처기업부 울산 수소·친환경 규제자유특구 실증 사업단 주관
            </p>
          </div>
        ) : null}

        {/* Article Body */}
        <div className="text-sm text-slate-700 leading-relaxed space-y-4 whitespace-pre-line border-b border-slate-100 pb-6 mb-6">
          {lang === 'ko' ? news.contentKo : news.contentEn}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>(주)MS가스 홍보홍보실 / ESG경영추진단</span>
          <button
            type="button"
            onClick={onClose}
            className="bg-[#003a53] text-white hover:bg-[#0079C2] px-5 py-2 rounded-lg font-semibold transition-colors"
          >
            {lang === 'ko' ? '목록으로 돌아가기' : 'Back to News'}
          </button>
        </div>
      </div>
    </div>
  );
};
