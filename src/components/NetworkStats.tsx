import React from 'react';
import { Map } from 'lucide-react';
import { Language } from '../types';

interface NetworkStatsProps {
  lang: Language;
  onOpenNetwork: () => void;
}

export const NetworkStats: React.FC<NetworkStatsProps> = ({
  lang,
  onOpenNetwork
}) => {
  return (
    <section className="py-20 bg-[#0B1B3D] text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 custom-gradient-mesh opacity-30 pointer-events-none" />
      <div className="absolute inset-0 technical-grid opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Pill Badge */}
        <span className="inline-block px-3.5 py-1 rounded-full bg-[#0079C2]/20 border border-[#41befd]/30 text-[#c6e7ff] text-xs font-bold uppercase tracking-wider mb-4">
          NATIONWIDE NETWORK & SCALE
        </span>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight max-w-3xl mx-auto mb-16 leading-snug">
          {lang === 'ko' ? (
            <>
              전국적인 네트워크를 통한 <br className="hidden sm:inline" />
              유기적인 업무협력을 실현합니다.
            </>
          ) : (
            <>
              Achieving Seamless Synergies <br className="hidden sm:inline" />
              Through Our Nationwide Direct Network.
            </>
          )}
        </h2>

        {/* Metrics Grid matching screenshot */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* 8 Regional Hubs */}
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm relative group hover:border-[#41befd]/40 transition-colors">
            <div className="text-4xl sm:text-5xl font-extrabold text-[#41befd] font-mono tracking-tight mb-2">
              8<span className="text-2xl sm:text-3xl font-bold text-white ml-0.5">{lang === 'ko' ? '개' : ' Hubs'}</span>
            </div>
            <div className="text-base sm:text-lg font-bold text-white mb-1">
              {lang === 'ko' ? '지역 거점' : 'Regional Hubs'}
            </div>
            <div className="text-xs text-slate-300">
              {lang === 'ko' ? '수도권 및 영남·호남권 권역별 허브' : 'Key Hubs across Gyeonggi, Yeongnam & Honam'}
            </div>
          </div>

          {/* 17 Branch Offices */}
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm relative group hover:border-[#41befd]/40 transition-colors">
            <div className="text-4xl sm:text-5xl font-extrabold text-[#41befd] font-mono tracking-tight mb-2">
              17<span className="text-2xl sm:text-3xl font-bold text-white ml-0.5">{lang === 'ko' ? '개' : ' Offices'}</span>
            </div>
            <div className="text-base sm:text-lg font-bold text-white mb-1">
              {lang === 'ko' ? '영업소' : 'Branch Offices'}
            </div>
            <div className="text-xs text-slate-300">
              {lang === 'ko' ? '신속한 현장 대응 직영 지점망' : 'Rapid Direct-response Branch Network'}
            </div>
          </div>

          {/* 10 Global Partners */}
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm relative group hover:border-[#41befd]/40 transition-colors">
            <div className="text-4xl sm:text-5xl font-extrabold text-[#41befd] font-mono tracking-tight mb-2">
              10<span className="text-2xl sm:text-3xl font-bold text-white ml-0.5">{lang === 'ko' ? '개국' : ' Countries'}</span>
            </div>
            <div className="text-base sm:text-lg font-bold text-white mb-1">
              {lang === 'ko' ? '해외 네트워크' : 'Global Network'}
            </div>
            <div className="text-xs text-slate-300">
              {lang === 'ko' ? '글로벌 고순도 원자재 수급 인프라' : 'Global High-purity Raw Material Sourcing'}
            </div>
          </div>

          {/* 935 Billion KRW Revenue */}
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm relative group hover:border-[#41befd]/40 transition-colors">
            <div className="text-4xl sm:text-5xl font-extrabold text-[#41befd] font-mono tracking-tight mb-2">
              935<span className="text-2xl sm:text-3xl font-bold text-white ml-0.5">{lang === 'ko' ? '억' : 'B KRW'}</span>
            </div>
            <div className="text-base sm:text-lg font-bold text-white mb-1">
              {lang === 'ko' ? '매출액' : 'Annual Revenue'}
            </div>
            <div className="text-xs text-slate-300">
              {lang === 'ko' ? '2024 GAAP 기준 안정적 재무건전성' : 'Robust Financial Health (2024 GAAP)'}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-12">
          <button
            onClick={onOpenNetwork}
            className="inline-flex items-center gap-2 bg-white text-[#0B1B3D] hover:bg-slate-100 font-bold text-sm px-6 py-3 rounded-md transition-all shadow-md hover:shadow-lg cursor-pointer"
          >
            <span>{lang === 'ko' ? '네트워크 현황 자세히보기' : 'Explore Nationwide Network'}</span>
            <Map className="w-4 h-4 text-[#0079C2]" />
          </button>
        </div>
      </div>
    </section>
  );
};
