import React, { useState } from 'react';
import { Handshake, Truck, Cpu, ChevronRight, Check } from 'lucide-react';
import { Language } from '../types';
import { CORE_PILLARS } from '../data/mockData';

interface CoreCompetenciesProps {
  lang: Language;
}

export const CoreCompetencies: React.FC<CoreCompetenciesProps> = ({ lang }) => {
  const [selectedPillarId, setSelectedPillarId] = useState<string | null>(null);

  const getIcon = (id: string) => {
    switch (id) {
      case '01':
        return <Handshake className="w-6 h-6" />;
      case '02':
        return <Truck className="w-6 h-6" />;
      case '03':
      default:
        return <Cpu className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 max-w-7xl mx-auto px-6" id="about">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div>
          <span className="text-xs font-bold text-[#0079C2] uppercase tracking-widest block mb-2">
            CORE COMPETENCIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight">
            {lang === 'ko' ? '반세기를 이어온 신뢰와 혁신' : 'Half a Century of Trust & Technological Innovation'}
          </h2>
        </div>
        <p className="text-sm sm:text-base text-slate-500 max-w-md leading-relaxed">
          {lang === 'ko' 
            ? '(주)MS가스는 국가 기간산업부터 첨단 반도체 라인까지 최상의 가스 제품과 안정적인 엔지니어링을 제공합니다.' 
            : 'From foundational heavy manufacturing to cutting-edge semiconductor fabs, MS Gas delivers the purest energy products.'}
        </p>
      </div>

      {/* 3 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {CORE_PILLARS.map((pillar) => (
          <div
            key={pillar.id}
            onClick={() => setSelectedPillarId(selectedPillarId === pillar.id ? null : pillar.id)}
            className="cursor-pointer bg-white p-8 rounded-xl border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
          >
            <div>
              <div className="w-12 h-12 rounded-lg bg-slate-100 text-[#003a53] flex items-center justify-center mb-6 group-hover:bg-[#003a53] group-hover:text-white transition-colors duration-200">
                {getIcon(pillar.id)}
              </div>
              
              <span className="text-xs font-bold text-[#0079C2] tracking-wider uppercase">
                {lang === 'ko' ? pillar.labelKo : pillar.labelEn}
              </span>
              
              <h3 className="text-xl font-bold text-[#0B1B3D] mt-2 mb-3 group-hover:text-[#0079C2] transition-colors">
                {lang === 'ko' ? pillar.titleKo : pillar.titleEn}
              </h3>
              
              <p className="text-sm text-slate-600 leading-relaxed">
                {lang === 'ko' ? pillar.descKo : pillar.descEn}
              </p>

              {/* Expandable highlight details */}
              {selectedPillarId === pillar.id && (
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 animate-in fade-in duration-200">
                  <div className="text-xs font-bold text-[#003a53] uppercase tracking-wider mb-2">
                    {lang === 'ko' ? '주요 실적 & 역량' : 'Key Milestones'}
                  </div>
                  {pillar.detailsKo.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2 rounded">
                      <Check className="w-3.5 h-3.5 text-[#0079C2] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-slate-500 group-hover:text-[#0079C2] transition-colors">
              <span className="text-xs font-semibold">
                {lang === 'ko' ? pillar.badgeKo : pillar.badgeEn}
              </span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
