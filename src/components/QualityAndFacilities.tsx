import React from 'react';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { FACILITY_IMAGE_1, FACILITY_IMAGE_2 } from '../data/mockData';

interface QualityAndFacilitiesProps {
  lang: Language;
  onOpenCertifications: () => void;
}

export const QualityAndFacilities: React.FC<QualityAndFacilitiesProps> = ({
  lang,
  onOpenCertifications
}) => {
  return (
    <section className="py-20 lg:py-28 max-w-7xl mx-auto px-6" id="equipment">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Editorial */}
        <div className="lg:col-span-5">
          <span className="text-xs font-bold text-[#0079C2] uppercase tracking-widest block mb-2">
            {lang === 'ko' ? '품질 및 인증현황' : 'QUALITY & CERTIFICATIONS'}
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight mb-6 leading-tight">
            {lang === 'ko' ? (
              <>
                지속적인 연구를 통해 <br />
                품질 개선을 이어갑니다
              </>
            ) : (
              <>
                Continuous R&D Driving <br />
                Uncompromising Quality
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mb-8 leading-relaxed">
            {lang === 'ko' 
              ? '(주)MS가스는 국가공인 가스분석 설비와 엄격한 사후관리 시스템을 갖추고 있습니다. ISO 9001/14001 품질·환경경영인증을 획득하고 유해화학물질 및 고압가스 안전관리법을 철저히 준수하여 고객사 제조라인에 절대적 신뢰를 제공합니다.' 
              : 'Equipped with state-certified gas analytical labs and strict quality governance, MS Gas holds ISO 9001/14001 certifications ensuring flawless reliability for customer production lines.'}
          </p>

          {/* Bullet Highlights */}
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#0079C2]/10 text-[#0079C2] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div>
                <h4 className="text-sm text-[#0B1B3D] font-bold">
                  {lang === 'ko' ? '첨단 가스 크로마토그래피(GC) 정밀 분석' : 'Advanced Gas Chromatography (GC) Analysis'}
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  {lang === 'ko' ? '극미량 불순물 ppb 단위까지 측정 가능한 정밀 계측 시스템 상시 운영' : 'Permanent operation of ppb-level ultra-trace impurity measurement systems.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#0079C2]/10 text-[#0079C2] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div>
                <h4 className="text-sm text-[#0B1B3D] font-bold">
                  {lang === 'ko' ? '가스 퍼지(Purge) 및 배관 안전 진단 서비스' : 'Gas Purge & Pipeline Safety Diagnostics'}
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  {lang === 'ko' ? '플랜트 정기 보수 시 질소 퍼지 및 안전 점검 원스톱 솔루션 지원' : 'Turnaround nitrogen purging and comprehensive safety inspections for chemical plants.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#0079C2]/10 text-[#0079C2] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div>
                <h4 className="text-sm text-[#0B1B3D] font-bold">
                  {lang === 'ko' ? '체계적 물질안전보건자료(MSDS) 지원' : 'Standardized MSDS & Safety Documentation'}
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  {lang === 'ko' ? '전 품목에 대한 화학물질 규제 정보 및 안전 취급 지침 실시간 제공' : 'Real-time provision of regulatory data and safe handling procedures for all chemicals.'}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={onOpenCertifications}
            className="inline-flex items-center gap-2 bg-[#003a53] hover:bg-[#0B1B3D] text-white px-6 py-3 rounded-md text-sm font-semibold transition-colors shadow-sm"
          >
            <span>{lang === 'ko' ? '인증서 및 설비 현황 보기' : 'View Certifications & Equipment'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right Industrial Photos Gallery matching screenshot */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="rounded-xl overflow-hidden shadow-md border border-slate-200/90 group relative h-64 bg-slate-100">
              <img
                alt="Precision gas control and manifold piping system"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
                src={FACILITY_IMAGE_1}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-white text-sm font-bold">
                  {lang === 'ko' ? '고정밀 가스 제어 및 배관 시스템' : 'High-Precision Gas Control & Piping'}
                </span>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#F1F5F9] border border-slate-200/80 flex flex-col justify-center">
              <span className="text-[#0079C2] text-2xl font-extrabold font-mono mb-1">
                99.9999%
              </span>
              <span className="text-sm font-bold text-[#0B1B3D]">
                {lang === 'ko' ? '초고순도 정밀 정제 기술력' : 'Ultra-High Purity Refining'}
              </span>
              <p className="text-xs text-slate-500 mt-1">
                {lang === 'ko' ? '첨단 반도체 및 분석 공정 품질 기준 완벽 충족' : 'Meeting the most stringent semiconductor cleanroom standards.'}
              </p>
            </div>
          </div>

          <div className="space-y-4 sm:pt-6">
            <div className="p-6 rounded-xl bg-[#002B49] text-white border border-[#00658d]/40 flex flex-col justify-center shadow-md">
              <div className="flex items-center gap-2 text-[#41befd] mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">KOLAS & ISO 인증</span>
              </div>
              <span className="text-lg font-bold text-white">
                {lang === 'ko' ? '국제 표준 시험 인증' : 'International Standard Testing'}
              </span>
              <p className="text-xs text-slate-300 mt-1">
                {lang === 'ko' ? '다성분 표준가스 및 시험분석 데이터 공신력 확보' : 'Securing global credibility for multicomponent calibration gases.'}
              </p>
            </div>

            <div className="rounded-xl overflow-hidden shadow-md border border-slate-200/90 group relative h-64 bg-slate-100">
              <img
                alt="High-pressure gas cylinder facility and filling station"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
                src={FACILITY_IMAGE_2}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-white text-sm font-bold">
                  {lang === 'ko' ? '자동화 가스 충전 설비 및 용기 관리' : 'Automated Gas Filling & Cylinder Care'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
