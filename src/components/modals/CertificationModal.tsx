import React from 'react';
import { X, Award, ShieldCheck, CheckCircle2, FileCheck, Cpu, Microscope } from 'lucide-react';
import { Language } from '../../types';

interface CertificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const CertificationModal: React.FC<CertificationModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  const certifications = [
    {
      titleKo: 'ISO 9001 : 2015 품질경영시스템 인증',
      titleEn: 'ISO 9001:2015 Quality Management System',
      authority: '한국품질재단 (KFQ) / IQNet',
      scopeKo: '산업용, 의료용, 특수가스의 제조, 충전 및 직영 운송 공급 서비스',
      scopeEn: 'Manufacturing, filling, and logistics of industrial, medical, and specialty gases.'
    },
    {
      titleKo: 'ISO 14001 : 2015 환경경영시스템 인증',
      titleEn: 'ISO 14001:2015 Environmental Management',
      authority: '한국품질재단 (KFQ) / IQNet',
      scopeKo: '온실가스 저감형 청정 에너지 전환 및 유통 사업장 환경 관리',
      scopeEn: 'Environmental management for clean energy logistics and carbon reduction.'
    },
    {
      titleKo: 'KOLAS 국제공인시험기관 인정',
      titleEn: 'KOLAS Accredited Testing Laboratory',
      authority: '국가기술표준원 (KATS)',
      scopeKo: '가스 분석 및 정밀 다성분 표준가스 조성비 국가표준 소급성 확보',
      scopeEn: 'Traceability to national standards in gas analysis and multicomponent mixtures.'
    },
    {
      titleKo: '의약품 제조 및 품질관리기준 (KGMP) 적합판정',
      titleEn: 'KGMP Pharmaceutical Compliance',
      authority: '식품의약품안전처 (MFDS)',
      scopeKo: '의료용 산소, 마취용 아산화질소 등 병원 공급용 의약품 가스 전 항목',
      scopeEn: 'Full compliance for medical oxygen and medicinal gases supplied to hospitals.'
    }
  ];

  const equipmentList = [
    {
      nameKo: '초고순도 가스 크로마토그래피 (GC-DID/FID/TCD)',
      nameEn: 'Ultra-Trace Gas Chromatography Systems',
      descKo: 'N2, O2, Ar, CO2 내의 불순물(수분, 탄화수소, CO, 일산화질소 등)을 ppb 단위까지 정밀 계측',
      spec: '측정 한계: 0.1 ppb 이하'
    },
    {
      nameKo: '전해식 미량 수분 분석기 (Trace Moisture Analyzer)',
      nameEn: 'Electrolytic Trace Moisture Analyzers',
      descKo: '초저온 액화가스 및 고압 실린더 내의 수분(H2O) 잔류량을 0.01 ppm 단위로 실시간 모니터링',
      spec: '측정 범위: 0.01 ~ 1,000 ppm'
    },
    {
      nameKo: '자동 절체 가스 매니폴드 및 실린더 캐비닛',
      nameEn: 'Automatic Changeover Manifold & Safety Cabinets',
      descKo: '1차 실린더 소진 시 무중단 자동 전환 및 비상 누출 감지 시 0.1초 내 솔레노이드 차단',
      spec: '설계 압력: 최대 300 bar'
    },
    {
      nameKo: '실린더 전용 내면 쇼트블라스트 & 진공 가열 베이킹',
      nameEn: 'Cylinder Internal Shot-Blasting & Vacuum Baking',
      descKo: '고순도 특수가스 충전 전 실린더 내부 오염물질 완벽 제거 및 10^-5 torr 고진공 탈기',
      spec: '진공도: 10^-5 torr / 가열 250℃'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
      <div 
        className="relative bg-white rounded-2xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 transition-all flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between pb-4 border-b border-slate-200 shrink-0">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#0079C2]/10 text-[#0079C2] text-xs font-semibold mb-1">
              <span>{lang === 'ko' ? '품질 경영 및 시험 분석' : 'Quality Management & Testing'}</span>
            </div>
            <h3 className="text-2xl font-bold text-[#0B1B3D] tracking-tight">
              {lang === 'ko' ? '인증서 및 첨단 시험분석 설비 현황' : 'Certifications & Testing Facilities'}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              {lang === 'ko' 
                ? '국가 공인 시험 기준과 국제 표준을 준수하여 모든 제품에 결점 없는 신뢰를 공급합니다.' 
                : 'Fully certified under ISO, KOLAS, and KGMP standards with state-of-the-art analytical equipment.'}
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

        <div className="overflow-y-auto py-4 space-y-6">
          {/* Section 1: Certifications */}
          <div>
            <h4 className="text-sm font-bold text-[#0B1B3D] mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#0079C2]" />
              <span>{lang === 'ko' ? '국제 표준 및 국가 공인 인증서' : 'International & Government Certifications'}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certifications.map((cert, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span className="font-bold text-sm text-[#0B1B3D]">
                      {lang === 'ko' ? cert.titleKo : cert.titleEn}
                    </span>
                    <FileCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  </div>
                  <div className="text-xs text-[#0079C2] font-semibold mb-2">
                    {cert.authority}
                  </div>
                  <div className="text-xs text-slate-600">
                    {lang === 'ko' ? cert.scopeKo : cert.scopeEn}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Laboratory Equipment */}
          <div>
            <h4 className="text-sm font-bold text-[#0B1B3D] mb-3 flex items-center gap-2">
              <Microscope className="w-4 h-4 text-[#0079C2]" />
              <span>{lang === 'ko' ? '첨단 정밀 가스 시험·분석 설비 인프라' : 'Precision Analytical Laboratory Infrastructure'}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {equipmentList.map((eq, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="font-bold text-sm text-[#0B1B3D] mb-1">
                    {lang === 'ko' ? eq.nameKo : eq.nameEn}
                  </div>
                  <p className="text-xs text-slate-600 mb-2">
                    {lang === 'ko' ? eq.descKo : eq.nameEn}
                  </p>
                  <div className="inline-block px-2 py-0.5 rounded bg-blue-50 text-[#0079C2] font-mono text-xs font-semibold">
                    {eq.spec}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

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
