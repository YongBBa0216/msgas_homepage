import React from 'react';
import { X, Check, FileDown, ShieldAlert, Award, Truck, AlertTriangle } from 'lucide-react';
import { GasProduct, Language } from '../../types';

interface ProductDetailModalProps {
  product: GasProduct | null;
  onClose: () => void;
  lang: Language;
  onOpenInquiry: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  lang,
  onOpenInquiry
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 transition-all max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="px-2.5 py-1 text-xs font-semibold rounded bg-[#0079C2]/10 text-[#0079C2]">
            {lang === 'ko' ? product.categoryLabelKo : product.categoryLabelEn}
          </span>
          <span className="px-2.5 py-1 text-xs font-bold font-mono rounded bg-blue-50 text-blue-700 border border-blue-200">
            {lang === 'ko' ? `순도: ${product.purity}` : `Purity: ${product.purity}`}
          </span>
          <span className="text-xs text-slate-400 font-mono">
            {product.msdsCode}
          </span>
        </div>

        {/* Product Title */}
        <div className="flex items-baseline gap-3 mb-3">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D] tracking-tight">
            {lang === 'ko' ? product.nameKo : product.nameEn}
          </h3>
          {product.formula && (
            <span className="text-lg sm:text-xl font-bold font-mono text-[#0079C2]">
              {product.formula}
            </span>
          )}
        </div>

        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {lang === 'ko' ? product.descriptionKo : product.descriptionEn}
        </p>

        {/* Key Applications */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
            <Award className="w-4 h-4 text-[#0079C2]" />
            <span>{lang === 'ko' ? '주요 산업 적용 분야' : 'Industrial Applications'}</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {product.applications.map((app, idx) => (
              <div key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-xs text-slate-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{app}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Supply Options */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
            <Truck className="w-4 h-4 text-[#0079C2]" />
            <span>{lang === 'ko' ? '공급 패키지 & 운송 형태' : 'Supply & Packaging Options'}</span>
          </h4>
          <ul className="space-y-1.5">
            {product.supplyForms.map((form, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 bg-white border border-slate-200 px-3 py-2 rounded-lg">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0079C2]" />
                <span className="font-medium">{form}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quality and Safety Assurance */}
        <div className="bg-[#0B1B3D] text-white p-4 rounded-xl mb-6">
          <div className="flex items-center gap-2 mb-2 text-[#41befd]">
            <ShieldAlert className="w-4 h-4" />
            <span className="text-xs font-bold">{lang === 'ko' ? '품질 및 안전 관리 규격' : 'Quality & Safety Compliance'}</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {lang === 'ko'
              ? '고압가스 안전관리법 및 화학물질관리법 기준에 따라 엄격한 용기 재검사, 내면 수분 제어, 초정밀 GC 분석을 거쳐 출하됩니다. 납품 시 공인 시험성적서(COA) 및 최신 MSDS가 동봉 제공됩니다.'
              : 'Manufactured and analyzed in strict accordance with ISO 9001 and KGS safety codes. Certificate of Analysis (COA) and verified MSDS provided with every shipment.'}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-200">
          <div className="text-xs text-slate-500">
            {lang === 'ko' ? '대량 벌크로리 및 실린더 납품 가능' : 'Bulk lorry and cylinder supply available'}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => {
                alert(lang === 'ko' ? `${product.nameKo} 물질안전보건자료(MSDS) 최신 규격 문서가 다운로드 큐에 추가되었습니다.` : `MSDS for ${product.nameEn} downloaded.`);
              }}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              <FileDown className="w-4 h-4 text-slate-600" />
              <span>{lang === 'ko' ? 'MSDS 다운로드' : 'Download MSDS'}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenInquiry(product.nameKo);
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-[#0079C2] hover:bg-[#00658d] text-white px-5 py-2 text-xs font-semibold rounded-lg shadow-md transition-colors"
            >
              <span>{lang === 'ko' ? '이 품목 견적 신청' : 'Request Quote'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
