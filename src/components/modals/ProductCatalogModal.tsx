import React, { useState } from 'react';
import { X, Search, Filter, ArrowUpRight, Flame, Layers, ShieldAlert, Sparkles, Check } from 'lucide-react';
import { GasProduct, Language } from '../../types';
import { GAS_PRODUCTS } from '../../data/mockData';

interface ProductCatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onSelectProduct: (product: GasProduct) => void;
  onOpenInquiry: (productName: string) => void;
}

export const ProductCatalogModal: React.FC<ProductCatalogModalProps> = ({
  isOpen,
  onClose,
  lang,
  onSelectProduct,
  onOpenInquiry
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const categories = [
    { id: 'all', labelKo: '전체 품목', labelEn: 'All Gases' },
    { id: 'industrial', labelKo: '산업용 가스', labelEn: 'Industrial' },
    { id: 'fuel', labelKo: '연료용 가스', labelEn: 'Fuel Gases' },
    { id: 'specialty', labelKo: '특수 가스 (반도체)', labelEn: 'Specialty Gases' },
    { id: 'medical', labelKo: '의료용 가스', labelEn: 'Medical' },
    { id: 'standard', labelKo: '표준/교정 가스', labelEn: 'Standard / Calibration' },
    { id: 'equipment', labelKo: '설비 & 엔지니어링', labelEn: 'Equipment & Piping' },
  ];

  const filteredProducts = GAS_PRODUCTS.filter((prod) => {
    const matchesCategory = selectedCategory === 'all' || prod.category === selectedCategory;
    const matchesQuery = 
      prod.nameKo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (prod.formula && prod.formula.toLowerCase().includes(searchQuery.toLowerCase())) ||
      prod.descriptionKo.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
      <div 
        className="relative bg-white rounded-2xl max-w-5xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 transition-all flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-200 shrink-0">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#0079C2]/10 text-[#0079C2] text-xs font-semibold mb-1">
              <span>{lang === 'ko' ? '제품 카탈로그 & 기술 규격' : 'Product Technical Directory'}</span>
            </div>
            <h3 className="text-2xl font-bold text-[#0B1B3D] tracking-tight">
              {lang === 'ko' ? '전체 가스 품목 및 설비 엔지니어링' : 'Comprehensive Gas Products & Solutions'}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              {lang === 'ko' 
                ? '철강, 조선, 반도체 및 의료 전 분야에 공급되는 초순도 가스 포트폴리오를 확인하세요.' 
                : 'Browse our full portfolio of high-purity industrial, electronic, medical, and specialty gases.'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="py-4 space-y-3 shrink-0 border-b border-slate-100">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder={lang === 'ko' ? '가스 명칭, 화학식(O2, N2, SiH4), 용도 검색...' : 'Search by gas name, formula (O2, N2, SiH4), or application...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0079C2]"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-[#003a53] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {lang === 'ko' ? cat.labelKo : cat.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="overflow-y-auto py-4 pr-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className={`rounded-xl p-5 border transition-all duration-200 flex flex-col justify-between group ${
                prod.highlight
                  ? 'bg-gradient-to-br from-[#002B49] to-[#0B1B3D] text-white border-[#0079C2]/40 shadow-md'
                  : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-[#0079C2]/50 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                    prod.highlight ? 'bg-[#0079C2]/30 text-[#81cfff]' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {lang === 'ko' ? prod.categoryLabelKo : prod.categoryLabelEn}
                  </span>
                  <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded ${
                    prod.highlight ? 'bg-white/10 text-cyan-300' : 'bg-blue-50 text-[#0079C2]'
                  }`}>
                    {prod.purity}
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mb-1.5">
                  <h4 className={`text-lg font-bold ${prod.highlight ? 'text-white' : 'text-[#0B1B3D]'}`}>
                    {lang === 'ko' ? prod.nameKo : prod.nameEn}
                  </h4>
                  {prod.formula && (
                    <span className={`font-mono text-sm font-semibold ${prod.highlight ? 'text-cyan-200' : 'text-slate-500'}`}>
                      {prod.formula}
                    </span>
                  )}
                </div>

                <p className={`text-xs leading-relaxed mb-4 line-clamp-2 ${prod.highlight ? 'text-slate-300' : 'text-slate-600'}`}>
                  {lang === 'ko' ? prod.descriptionKo : prod.descriptionEn}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-white/10 text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className={`font-medium ${prod.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                      {lang === 'ko' ? '공급 형태:' : 'Supply:'}
                    </span>
                    <span className={`truncate ${prod.highlight ? 'text-slate-200' : 'text-slate-700'}`}>
                      {prod.supplyForms[0]} {prod.supplyForms.length > 1 ? `외 ${prod.supplyForms.length - 1}종` : ''}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/10 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => onSelectProduct(prod)}
                  className={`text-xs font-semibold inline-flex items-center gap-1 hover:underline ${
                    prod.highlight ? 'text-cyan-300' : 'text-[#0079C2]'
                  }`}
                >
                  <span>{lang === 'ko' ? '기술 스펙 및 MSDS 보기' : 'View Specs & MSDS'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => onOpenInquiry(prod.nameKo)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                    prod.highlight
                      ? 'bg-[#0079C2] hover:bg-[#41befd] text-white hover:text-[#0B1B3D]'
                      : 'bg-[#003a53] hover:bg-[#0079C2] text-white'
                  }`}
                >
                  {lang === 'ko' ? '견적 문의' : 'Inquire Quote'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500 shrink-0">
          <span>
            {lang === 'ko' 
              ? `총 ${filteredProducts.length}개의 가스 규격 등록됨 (전 품목 KGS & ISO 9001/14001 품질 보증)` 
              : `${filteredProducts.length} certified gas products registered.`}
          </span>
          <button
            onClick={onClose}
            className="text-slate-600 hover:text-slate-900 font-semibold"
          >
            {lang === 'ko' ? '닫기' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
