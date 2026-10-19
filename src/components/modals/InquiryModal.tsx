import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Phone, Mail, Building, FileText, ArrowRight } from 'lucide-react';
import { Language } from '../../types';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  preselectedProduct?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose, lang, preselectedProduct }) => {
  const [formData, setFormData] = useState({
    company: '',
    contactName: '',
    phone: '',
    email: '',
    gasCategory: preselectedProduct ? '특수 가스' : '산업용 가스',
    specificGas: preselectedProduct || '',
    supplyMode: '초저온 탱크로리 (Bulk)',
    region: '부산/경남권',
    monthlyVolume: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.company || !formData.contactName || !formData.phone) {
      alert(lang === 'ko' ? '회사명, 담당자명, 연락처를 입력해 주세요.' : 'Please fill in Company, Name, and Phone number.');
      return;
    }
    const generatedId = 'MSG-' + Math.floor(100000 + Math.random() * 900000);
    setInquiryId(generatedId);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 transition-all transform animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-1 text-xs font-semibold rounded bg-[#0079C2]/10 text-[#0079C2]">
                {lang === 'ko' ? '원스톱 가스 공급 견적' : 'One-Stop Gas Quotation'}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                {lang === 'ko' ? '24시간 내 전문 엔지니어 유선 회신' : 'Dedicated Engineer Reply within 24 Hours'}
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-[#0B1B3D] tracking-tight mb-2">
              {lang === 'ko' ? '온라인 문의 및 맞춤 견적 신청' : 'Online Gas Supply Inquiry'}
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              {lang === 'ko' 
                ? '(주)MS가스의 전문 엔지니어가 고객사의 사용 용도와 공정에 최적화된 가스 종류, 공급 형태 및 견적을 신속하게 안내해 드립니다.' 
                : 'MS Gas technical specialists will evaluate your requirements and offer the most reliable gas supply plan.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {lang === 'ko' ? '회사명 / 기관명 *' : 'Company Name *'}
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder={lang === 'ko' ? '(주)대한정밀' : 'e.g. Acme Industries'}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0079C2] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {lang === 'ko' ? '담당자 성함 및 직함 *' : 'Contact Person *'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={lang === 'ko' ? '홍길동 팀장' : 'John Doe, Manager'}
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0079C2] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {lang === 'ko' ? '연락처 (휴대전화/직통) *' : 'Phone Number *'}
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="010-0000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0079C2] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {lang === 'ko' ? '이메일 주소' : 'Email Address'}
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      placeholder="contact@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0079C2] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {lang === 'ko' ? '가스 분류' : 'Gas Category'}
                  </label>
                  <select
                    value={formData.gasCategory}
                    onChange={(e) => setFormData({ ...formData, gasCategory: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0079C2] bg-white"
                  >
                    <option value="산업용 가스">{lang === 'ko' ? '산업용 가스 (O2, N2, Ar, CO2)' : 'Industrial Gases'}</option>
                    <option value="연료용 가스">{lang === 'ko' ? '연료용 가스 (프로판, 프라멕스)' : 'Fuel Gases'}</option>
                    <option value="특수 가스">{lang === 'ko' ? '반도체/초고순도 특수가스' : 'Specialty Gases'}</option>
                    <option value="의료용 가스">{lang === 'ko' ? '의료용 가스 (KGMP 인증)' : 'Medical Gases'}</option>
                    <option value="표준 가스">{lang === 'ko' ? '표준/교정 혼합가스' : 'Standard Calibration Gas'}</option>
                    <option value="설비 & 엔지니어링">{lang === 'ko' ? '저장탱크 및 배관공사' : 'Tanks & Piping Engineering'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {lang === 'ko' ? '공급 형태' : 'Supply Format'}
                  </label>
                  <select
                    value={formData.supplyMode}
                    onChange={(e) => setFormData({ ...formData, supplyMode: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0079C2] bg-white"
                  >
                    <option value="초저온 탱크로리 (Bulk)">{lang === 'ko' ? '초저온 탱크로리 (대용량 Bulk)' : 'Cryogenic Tank Lorry'}</option>
                    <option value="고압 실린더 (용기)">{lang === 'ko' ? '고압 실린더 용기 (47L/40L)' : 'High-pressure Cylinders'}</option>
                    <option value="실린더 랙/번들">{lang === 'ko' ? '실린더 번들 (12/16/20병)' : 'Cylinder Bundles'}</option>
                    <option value="초저온 용기 (LGC)">{lang === 'ko' ? '초저온 용기 (LGC 160~240L)' : 'Liquid Cylinders (LGC)'}</option>
                    <option value="배관 인입 공사">{lang === 'ko' ? '배관 인입 및 설비 시공' : 'Piping / Tank Construction'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {lang === 'ko' ? '공급 희망 지역' : 'Delivery Region'}
                  </label>
                  <select
                    value={formData.region}
                    onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0079C2] bg-white"
                  >
                    <option value="부산/경남권">{lang === 'ko' ? '부산 / 경남권' : 'Busan / Gyeongnam'}</option>
                    <option value="울산 석유화학단지">{lang === 'ko' ? '울산 석유화학산단' : 'Ulsan Petrochemical'}</option>
                    <option value="여수/광양 호남권">{lang === 'ko' ? '여수 / 광양 / 호남' : 'Yeosu / Gwangyang'}</option>
                    <option value="수도권/인천/경기">{lang === 'ko' ? '수도권 / 인천 / 경기' : 'Seoul / Incheon / Gyeonggi'}</option>
                    <option value="충청/천안/아산">{lang === 'ko' ? '충청 / 천안 / 아산' : 'Chungcheong / Cheonan'}</option>
                    <option value="대구/경북권">{lang === 'ko' ? '대구 / 경북권' : 'Daegu / Gyeongbuk'}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  {lang === 'ko' ? '예상 월 사용량 (예: 5톤/월, 50병/월)' : 'Estimated Monthly Consumption'}
                </label>
                <input
                  type="text"
                  placeholder={lang === 'ko' ? '예: 액화질소 약 10톤/월 또는 고압용기 30병/월' : 'e.g. Liquid N2 10 tons/month'}
                  value={formData.monthlyVolume}
                  onChange={(e) => setFormData({ ...formData, monthlyVolume: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0079C2] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  {lang === 'ko' ? '세부 문의 내용 및 사용 용도' : 'Details & Intended Application'}
                </label>
                <textarea
                  rows={3}
                  placeholder={lang === 'ko' ? '원하시는 가스 순도, 배관 설치 여부, 납기 희망일 등을 적어주시면 더 정확한 상담이 가능합니다.' : 'Provide details regarding purity, lead time, or site specifications.'}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0079C2] focus:border-transparent resize-none"
                />
              </div>

              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs text-slate-500 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0079C2] shrink-0 mt-0.5" />
                <span>
                  {lang === 'ko' 
                    ? '제출하신 정보는 가스 공급 견적 및 기술 상담 목적으로만 안전하게 사용되며 개인정보보호법에 따라 엄격히 보호됩니다.' 
                    : 'Your information is safely handled strictly for gas supply quotation in accordance with data privacy laws.'}
                </span>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  {lang === 'ko' ? '취소' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#0079C2] hover:bg-[#00658d] text-white px-6 py-2.5 rounded-lg text-sm font-semibold shadow-md shadow-[#0079C2]/20 transition-all"
                >
                  <span>{lang === 'ko' ? '견적 신청서 전송' : 'Submit Inquiry'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-[#0B1B3D] mb-2">
              {lang === 'ko' ? '견적 문의가 정상 접수되었습니다' : 'Inquiry Submitted Successfully'}
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
              {lang === 'ko' 
                ? `접수번호 [${inquiryId}]로 등록되었습니다. 고객사의 공급 지역 담당 지점 및 전문 가스 엔지니어가 24시간 내 신속하게 유선 안내 드리겠습니다.` 
                : `Reference ID [${inquiryId}]. Our regional logistics engineer will contact you within 24 hours.`}
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left max-w-md mx-auto mb-8 text-xs space-y-1.5 text-slate-700">
              <div className="flex justify-between">
                <span className="text-slate-500">{lang === 'ko' ? '회사명' : 'Company'}:</span>
                <span className="font-semibold">{formData.company}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">{lang === 'ko' ? '담당자' : 'Contact'}:</span>
                <span className="font-semibold">{formData.contactName} ({formData.phone})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">{lang === 'ko' ? '희망 가스' : 'Category'}:</span>
                <span className="font-semibold text-[#0079C2]">{formData.gasCategory} ({formData.supplyMode})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">{lang === 'ko' ? '공급 권역' : 'Region'}:</span>
                <span className="font-semibold">{formData.region}</span>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button
                type="button"
                onClick={handleReset}
                className="bg-[#0B1B3D] text-white hover:bg-[#003a53] px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors"
              >
                {lang === 'ko' ? '확인 및 닫기' : 'Close'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
