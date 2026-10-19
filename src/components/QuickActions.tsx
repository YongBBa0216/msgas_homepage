import React from 'react';
import { Building2, MessageSquare, Megaphone, MapPin } from 'lucide-react';
import { Language } from '../types';

interface QuickActionsProps {
  lang: Language;
  onOpenInquiry: () => void;
  onOpenNetwork: () => void;
}

export const QuickActions: React.FC<QuickActionsProps> = ({
  lang,
  onOpenInquiry,
  onOpenNetwork
}) => {
  return (
    <section className="bg-[#0B1B3D] py-16 text-white border-t border-white/10" id="shortcuts">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Action 1: 회사소개 */}
          <a
            href="#about"
            className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-6 transition-all duration-200 group flex items-center justify-between"
          >
            <div>
              <h4 className="text-lg font-bold text-white mb-1 group-hover:text-[#41befd] transition-colors">
                {lang === 'ko' ? '회사소개' : 'About Us'}
              </h4>
              <p className="text-xs text-slate-300">
                {lang === 'ko' ? 'MS가스에 대해 소개합니다.' : 'Discover our 50-year legacy.'}
              </p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-[#41befd] group-hover:scale-110 transition-transform">
              <Building2 className="w-6 h-6" />
            </div>
          </a>

          {/* Action 2: 온라인 문의 */}
          <button
            onClick={onOpenInquiry}
            className="text-left bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-6 transition-all duration-200 group flex items-center justify-between cursor-pointer"
          >
            <div>
              <h4 className="text-lg font-bold text-white mb-1 group-hover:text-[#41befd] transition-colors">
                {lang === 'ko' ? '온라인 문의' : 'Online Quote'}
              </h4>
              <p className="text-xs text-slate-300">
                {lang === 'ko' ? '온라인을 통해 신속한 상담 가능' : 'Rapid quotation within 24h.'}
              </p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-[#41befd] group-hover:scale-110 transition-transform">
              <MessageSquare className="w-6 h-6" />
            </div>
          </button>

          {/* Action 3: 새로운 소식 */}
          <a
            href="#notice"
            className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-6 transition-all duration-200 group flex items-center justify-between"
          >
            <div>
              <h4 className="text-lg font-bold text-white mb-1 group-hover:text-[#41befd] transition-colors">
                {lang === 'ko' ? '새로운 소식' : 'Latest News'}
              </h4>
              <p className="text-xs text-slate-300">
                {lang === 'ko' ? 'MS가스의 새로운 소식 안내' : 'Official press releases & awards.'}
              </p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-[#41befd] group-hover:scale-110 transition-transform">
              <Megaphone className="w-6 h-6" />
            </div>
          </a>

          {/* Action 4: 오시는 길 */}
          <button
            onClick={onOpenNetwork}
            className="text-left bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-6 transition-all duration-200 group flex items-center justify-between cursor-pointer"
          >
            <div>
              <h4 className="text-lg font-bold text-white mb-1 group-hover:text-[#41befd] transition-colors">
                {lang === 'ko' ? '오시는 길' : 'Locations'}
              </h4>
              <p className="text-xs text-slate-300">
                {lang === 'ko' ? '지역별 영업지점 및 관계사 안내' : 'Nationwide branches & hub offices.'}
              </p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-[#41befd] group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
