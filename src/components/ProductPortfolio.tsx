import React from 'react';
import { Factory, Flame, Cpu, Stethoscope, TestTube2, SlidersHorizontal, ArrowRight } from 'lucide-react';
import { Language, GasProduct } from '../types';
import { GAS_PRODUCTS } from '../data/mockData';

interface ProductPortfolioProps {
  lang: Language;
  onOpenCatalog: () => void;
  onSelectProduct: (product: GasProduct) => void;
}

export const ProductPortfolio: React.FC<ProductPortfolioProps> = ({
  lang,
  onOpenCatalog,
  onSelectProduct
}) => {
  return (
    <section className="py-20 bg-[#F1F5F9]/70 border-y border-slate-200/80" id="products">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold text-[#0079C2] uppercase tracking-widest block mb-2">
              {lang === 'ko' ? '제품소개' : 'PRODUCTS'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight">
              {lang === 'ko' 
                ? '다양한 산업분야를 아우르는 고부가가치형 가스산업' 
                : 'High-Value Gas Energy Solutions Across Diverse Industries'}
            </h2>
          </div>

          <button
            onClick={onOpenCatalog}
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-[#003a53] font-semibold text-sm hover:text-[#0079C2] transition-colors group cursor-pointer"
          >
            <span>{lang === 'ko' ? '전체 가스 품목 상세조회' : 'View Full Gas Portfolio'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Bento Grid Cards matching mockup */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 1. Industrial Gas */}
          <div 
            onClick={() => {
              const p = GAS_PRODUCTS.find(item => item.category === 'industrial');
              if (p) onSelectProduct(p);
            }}
            className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded bg-[#c6e7ff]/50 text-[#001e2d] text-xs font-semibold">
                  {lang === 'ko' ? '산업 인프라' : 'Industrial Infra'}
                </span>
                <Factory className="w-5 h-5 text-slate-400 group-hover:text-[#0079C2] transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1B3D] mb-2 group-hover:text-[#0079C2] transition-colors">
                {lang === 'ko' ? '산업용 가스' : 'Industrial Gases'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {lang === 'ko' 
                  ? '산소(O₂), 질소(N₂), 아르곤(Ar), 탄산가스(CO₂) 등 철강, 조선, 화학 플랜트 등 전 산업 제조공정에 무중단 공급됩니다.' 
                  : 'Continuous high-purity supply of Oxygen, Nitrogen, Argon, and Carbon Dioxide across steel, shipbuilding, and chemical complexes.'}
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
              <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">산소(O₂)</span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">질소(N₂)</span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">아르곤(Ar)</span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">탄산가스</span>
            </div>
          </div>

          {/* 2. Fuel Gas */}
          <div 
            onClick={() => {
              const p = GAS_PRODUCTS.find(item => item.category === 'fuel');
              if (p) onSelectProduct(p);
            }}
            className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded bg-[#0079C2]/10 text-[#0079C2] text-xs font-semibold">
                  {lang === 'ko' ? '에너지 솔루션' : 'Energy Solution'}
                </span>
                <Flame className="w-5 h-5 text-slate-400 group-hover:text-[#0079C2] transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1B3D] mb-2 group-hover:text-[#0079C2] transition-colors">
                {lang === 'ko' ? '연료용 가스' : 'Fuel Gases'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {lang === 'ko' 
                  ? '프로판, 프라멕스, 에탄, 부탄, 이소부탄 등 산업 현장 열원 및 친환경 연소 효율을 극대화한 고품질 연료 가스군입니다.' 
                  : 'High-calorie fuels including Propane, Flammex, Ethane, and Butane engineered for industrial heating and cutting.'}
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
              <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">프로판</span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">프라멕스</span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">에탄/부탄</span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">이소부탄</span>
            </div>
          </div>

          {/* 3. Specialty Gas (Highlighted Navy Surface) */}
          <div 
            onClick={() => {
              const p = GAS_PRODUCTS.find(item => item.category === 'specialty');
              if (p) onSelectProduct(p);
            }}
            className="bg-[#002B49] text-white rounded-xl p-6 border border-[#00658d]/50 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group cursor-pointer hover:-translate-y-1 flex flex-col justify-between"
          >
            <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-[#41befd]/15 blur-2xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded bg-[#41befd]/20 text-[#c6e7ff] text-xs font-semibold border border-[#41befd]/30">
                  {lang === 'ko' ? '반도체 & 하이테크' : 'Semiconductor & Hi-Tech'}
                </span>
                <Cpu className="w-5 h-5 text-[#41befd]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {lang === 'ko' ? '특수 가스' : 'Specialty Gases'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {lang === 'ko' 
                  ? '반도체, 디스플레이, 초정밀 전자 제조 공정용 초고순도 전자소재 가스 및 특수 환경 조성용 핵심 가스입니다.' 
                  : 'Ultra-high purity electronic material gases tailored for semiconductor CVD deposition, etching, and cleanroom processes.'}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/15 relative z-10">
              <span className="text-[11px] px-2 py-0.5 rounded bg-white/10 text-[#c6e7ff] font-medium">초고순도 N2/H2</span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-white/10 text-[#c6e7ff] font-medium">SiH4</span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-white/10 text-[#c6e7ff] font-medium">에칭/증착용</span>
            </div>
          </div>

          {/* 4. Medical Gas */}
          <div 
            onClick={() => {
              const p = GAS_PRODUCTS.find(item => item.category === 'medical');
              if (p) onSelectProduct(p);
            }}
            className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 text-xs font-semibold">
                  {lang === 'ko' ? '생명 & 헬스케어' : 'Life & Healthcare'}
                </span>
                <Stethoscope className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1B3D] mb-2 group-hover:text-emerald-700 transition-colors">
                {lang === 'ko' ? '의료용 가스' : 'Medical Gases'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {lang === 'ko' 
                  ? '엄격한 KGMP 기준을 통과한 의료용 산소, 아산화질소 등 병원 수술실 및 응급 의료시설 맞춤형 순도 보증 가스입니다.' 
                  : 'KGMP certified medicinal gases including Medical Oxygen and Nitrous Oxide for hospitals, ICU, and surgery centers.'}
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
              <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">의료용 산소</span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">아산화질소(N2O)</span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">의료혼합가스</span>
            </div>
          </div>

          {/* 5. Standard Gas */}
          <div 
            onClick={() => {
              const p = GAS_PRODUCTS.find(item => item.category === 'standard');
              if (p) onSelectProduct(p);
            }}
            className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded bg-purple-50 text-purple-700 text-xs font-semibold">
                  {lang === 'ko' ? '연구 & 교정' : 'Research & Calibration'}
                </span>
                <TestTube2 className="w-5 h-5 text-slate-400 group-hover:text-purple-600 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1B3D] mb-2 group-hover:text-purple-700 transition-colors">
                {lang === 'ko' ? '표준 가스' : 'Standard Gases'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {lang === 'ko' 
                  ? '분석 기기 교정 및 정밀 R&D 연구실을 위한 다성분 혼합 표준가스로 정확한 ppm 단위 배합 농도를 보증합니다.' 
                  : 'High-accuracy calibration standards certified under KOLAS for GC analyzers, environmental TMS, and R&D labs.'}
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
              <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">교정용 가스</span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">정밀 다성분가스</span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">공인성적서</span>
            </div>
          </div>

          {/* 6. Equipment & Engineering */}
          <div 
            onClick={() => {
              const p = GAS_PRODUCTS.find(item => item.category === 'equipment');
              if (p) onSelectProduct(p);
            }}
            className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded bg-amber-50 text-amber-800 text-xs font-semibold">
                  {lang === 'ko' ? '설비 & 엔지니어링' : 'Equipment & EPC'}
                </span>
                <SlidersHorizontal className="w-5 h-5 text-slate-400 group-hover:text-amber-700 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1B3D] mb-2 group-hover:text-amber-800 transition-colors">
                {lang === 'ko' ? '기타 장비 & 설비' : 'Equipment & Engineering'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {lang === 'ko' 
                  ? '초저온 저장탱크, 실린더 번들, 자동 절체기(Manifold), 고압 감압 밸브 등 고신뢰성 가스 유통 설비를 설계 시공합니다.' 
                  : 'Design and construction of cryogenic storage tanks, automatic manifold switchovers, and high-pressure valves.'}
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
              <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">초저온 저장탱크</span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">실린더 캐비닛</span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">배관 시공</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
