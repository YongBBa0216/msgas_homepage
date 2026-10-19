import React, { useState } from 'react';
import { X, MapPin, Phone, Printer, Truck, Database, ShieldCheck, Navigation } from 'lucide-react';
import { Language, RegionalHub } from '../../types';
import { REGIONAL_HUBS } from '../../data/mockData';

interface NetworkModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const NetworkModal: React.FC<NetworkModalProps> = ({ isOpen, onClose, lang }) => {
  const [selectedHub, setSelectedHub] = useState<RegionalHub>(REGIONAL_HUBS[0]);

  if (!isOpen) return null;

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
              <span>{lang === 'ko' ? '전국 공급 인프라 현황' : 'Nationwide Supply Infrastructure'}</span>
            </div>
            <h3 className="text-2xl font-bold text-[#0B1B3D] tracking-tight">
              {lang === 'ko' ? '8개 권역 거점 및 17개 직영 영업소 네트워크' : '8 Regional Hubs & 17 Direct Branches'}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              {lang === 'ko' 
                ? '수도권, 영남권, 호남권, 충청권을 아우르는 촘촘한 직영 네트워크로 365일 24시간 당일 긴급 공급을 보장합니다.' 
                : 'Dense logistics network providing 24/7 same-day delivery throughout the peninsula.'}
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

        {/* Content Body: Left Hub List & Map, Right Hub Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-4 overflow-y-auto">
          {/* Left: Hub Selection Cards & Simple Korea Visual Locator */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              {lang === 'ko' ? '권역별 핵심 공급 거점 목록' : 'Regional Supply Nodes'}
            </div>

            <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
              {REGIONAL_HUBS.map((hub) => (
                <button
                  key={hub.id}
                  onClick={() => setSelectedHub(hub)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start justify-between gap-3 ${
                    selectedHub.id === hub.id
                      ? 'bg-[#002B49] text-white border-[#0079C2] shadow-md'
                      : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                        selectedHub.id === hub.id ? 'bg-[#0079C2] text-white' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {hub.type}
                      </span>
                    </div>
                    <div className="font-bold text-sm mt-1.5">
                      {lang === 'ko' ? hub.nameKo : hub.nameEn}
                    </div>
                    <div className={`text-xs mt-1 truncate max-w-[240px] ${
                      selectedHub.id === hub.id ? 'text-slate-300' : 'text-slate-500'
                    }`}>
                      {lang === 'ko' ? hub.addressKo : hub.addressEn}
                    </div>
                  </div>
                  <MapPin className={`w-4 h-4 shrink-0 mt-1 ${
                    selectedHub.id === hub.id ? 'text-[#41befd]' : 'text-slate-400'
                  }`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Selected Hub Detailed Dossier */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-4">
                <div>
                  <span className="text-xs font-semibold text-[#0079C2]">
                    {selectedHub.type}
                  </span>
                  <h4 className="text-xl font-bold text-[#0B1B3D]">
                    {lang === 'ko' ? selectedHub.nameKo : selectedHub.nameEn}
                  </h4>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#0079C2]/10 text-[#0079C2] flex items-center justify-center">
                  <Navigation className="w-5 h-5" />
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                {lang === 'ko' ? selectedHub.descriptionKo : selectedHub.descriptionEn}
              </p>

              {/* Infrastructure Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
                    <Database className="w-4 h-4 text-[#0079C2]" />
                    <span>{lang === 'ko' ? '저장 설비 용량' : 'Storage Capacity'}</span>
                  </div>
                  <div className="text-sm font-bold text-[#0B1B3D]">
                    {selectedHub.tankCapacity}
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
                    <Truck className="w-4 h-4 text-[#0079C2]" />
                    <span>{lang === 'ko' ? '자체 운송 편대' : 'Dedicated Fleet'}</span>
                  </div>
                  <div className="text-sm font-bold text-[#0B1B3D]">
                    {selectedHub.fleetCount}
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-2 text-xs bg-white p-4 rounded-xl border border-slate-200 mb-6">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-700">{lang === 'ko' ? '주소: ' : 'Address: '}</span>
                    <span className="text-slate-600">{lang === 'ko' ? selectedHub.addressKo : selectedHub.addressEn}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-700">{lang === 'ko' ? '대표전화: ' : 'Phone: '}</span>
                    <a href={`tel:${selectedHub.phone}`} className="text-[#0079C2] font-semibold hover:underline">
                      {selectedHub.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Printer className="w-4 h-4 text-slate-400 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-700">{lang === 'ko' ? '팩스: ' : 'Fax: '}</span>
                    <span className="text-slate-600">{selectedHub.fax}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-200">
              <span className="text-xs text-slate-500 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{lang === 'ko' ? '실시간 GPS 안전 운송 관제 가동 중' : 'Live GPS & Tank Telemetry Active'}</span>
              </span>

              <button
                type="button"
                onClick={() => {
                  alert(lang === 'ko' ? `${selectedHub.nameKo} 안내 데스크로 연결합니다: ${selectedHub.phone}` : `Dialing ${selectedHub.phone}`);
                }}
                className="bg-[#003a53] hover:bg-[#0079C2] text-white px-4 py-2 rounded-lg text-xs font-semibold transition-colors"
              >
                {lang === 'ko' ? '직영 지점 전화 연결' : 'Direct Call'}
              </button>
            </div>
          </div>
        </div>

        {/* Modal Bottom */}
        <div className="pt-3 border-t border-slate-200 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
          >
            {lang === 'ko' ? '닫기' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
