import React from 'react';
import { ArrowUpRight, MessageSquare, History, Truck, FlaskConical, Shield, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { HERO_IMAGE } from '../data/mockData';

interface HeroProps {
  lang: Language;
  onExploreProducts: () => void;
  onOpenInquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onExploreProducts,
  onOpenInquiry
}) => {
  return (
    <section className="relative min-h-[640px] lg:min-h-[720px] bg-[#0B1B3D] overflow-hidden flex items-center">
      {/* Hero Background Image (Fleet) */}
      <div className="absolute inset-0 z-0">
        <img
          alt="MS Gas nationwide tank lorry transport fleet"
          className="w-full h-full object-cover object-center opacity-40 select-none pointer-events-none"
          src={HERO_IMAGE}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B3D] via-[#0B1B3D]/85 to-[#0B1B3D]/40" />
        <div className="absolute inset-0 technical-grid opacity-20 pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0079C2]/20 border border-[#41befd]/40 text-[#c6e7ff] mb-6 backdrop-blur-md">
            <CheckCircle2 className="w-4 h-4 text-[#41befd]" />
            <span className="text-xs font-bold tracking-wider uppercase">
              {lang === 'ko' ? '1974년 설립 이래 50년의 신뢰' : '50 Years of Trust Since 1974'}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            {lang === 'ko' ? (
              <>
                가스 설계부터 공급, 유지까지 <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-[#41befd]">
                  전 공정을 아우르는 원스톱 토탈 솔루션
                </span>
              </>
            ) : (
              <>
                From Gas Design to Supply & Maintenance <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-[#41befd]">
                  One-Stop Total Gas Energy Solutions
                </span>
              </>
            )}
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-slate-200 mb-10 max-w-2xl leading-relaxed">
            {lang === 'ko' 
              ? '보이지 않는 에너지를 통해 사람들의 삶을 따뜻하게 연결합니다. 언제나 그 자리에, 변함없이 MS가스는 오늘도 당신의 일상을 지키고 있습니다.' 
              : 'Connecting lives warmly through invisible energy. Always steadfast, MS Gas safeguards your industrial operations and daily moments.'}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreProducts}
              className="inline-flex items-center gap-2 bg-[#0079C2] hover:bg-[#00658d] text-white px-6 py-3.5 rounded-md text-sm sm:text-base font-semibold shadow-lg shadow-[#0079C2]/30 transition-all duration-200"
            >
              <span>{lang === 'ko' ? '제품 둘러보기' : 'Browse Products'}</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white px-6 py-3.5 rounded-md text-sm sm:text-base font-semibold backdrop-blur-md transition-all duration-200"
            >
              <span>{lang === 'ko' ? '온라인 문의' : 'Online Inquiry'}</span>
              <MessageSquare className="w-5 h-5 text-cyan-300" />
            </button>
          </div>
        </div>

        {/* Quick Industrial Floating Status Strip */}
        <div className="mt-16 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#41befd]">
              <History className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-300 font-semibold">{lang === 'ko' ? '업력' : 'History'}</div>
              <div className="text-lg sm:text-xl font-bold font-mono">50+ Years</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#41befd]">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-300 font-semibold">{lang === 'ko' ? '운송 인프라' : 'Logistics'}</div>
              <div className="text-lg sm:text-xl font-bold">{lang === 'ko' ? '전국 당일 공급체계' : 'Same-Day Supply'}</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#41befd]">
              <FlaskConical className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-300 font-semibold">{lang === 'ko' ? '정밀 분석' : 'Precision R&D'}</div>
              <div className="text-lg sm:text-xl font-bold">{lang === 'ko' ? '고순도/특수가스' : 'High Purity & Spec'}</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#41befd]">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-300 font-semibold">{lang === 'ko' ? '안전 관리' : 'Safety IoT'}</div>
              <div className="text-lg sm:text-xl font-bold">{lang === 'ko' ? '실시간 모니터링' : 'Real-time Tracking'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
