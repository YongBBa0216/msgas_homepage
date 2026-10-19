import React from 'react';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
  onOpenInquiry: () => void;
  onOpenNetwork: () => void;
  onOpenCertifications: () => void;
  onOpenCatalog: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onOpenInquiry,
  onOpenNetwork,
  onOpenCertifications,
  onOpenCatalog
}) => {
  return (
    <footer className="bg-[#0B1B3D] text-white border-t border-white/10">
      <div className="w-full py-12 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-5">
            <div className="text-2xl font-extrabold text-white tracking-tight mb-3">
              MS GAS
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-sm mb-4 leading-relaxed">
              {lang === 'ko'
                ? '(주)MS가스는 반세기 동안 축적된 고압·특수가스 전문기술과 전국 직영 물류망을 기반으로 고객사의 안전과 산업 생산성을 책임지고 있습니다.'
                : 'MS Gas safeguards your safety and industrial productivity backed by half a century of expertise in high-pressure and specialty gas engineering.'}
            </p>
            <div className="text-xs text-slate-400 space-y-1">
              <p>{lang === 'ko' ? '본사: 부산광역시 사상구 낙동대로 1378 (삼락동)' : 'Headquarters: 1378 Nakdong-daero, Sasang-gu, Busan'}</p>
              <p>{lang === 'ko' ? '대표전화: 051-303-3111 | 팩스: 051-303-3118' : 'Tel: +82-51-303-3111 | Fax: +82-51-303-3118'}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-7 flex flex-wrap justify-between gap-6">
            <div>
              <h5 className="text-sm font-bold text-[#41befd] mb-3">
                {lang === 'ko' ? '회사안내' : 'Company'}
              </h5>
              <ul className="space-y-2 text-xs">
                <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">{lang === 'ko' ? '회사소개' : 'About MS Gas'}</a></li>
                <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">{lang === 'ko' ? '인사말' : 'CEO Greeting'}</a></li>
                <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">{lang === 'ko' ? '연혁' : 'History'}</a></li>
                <li>
                  <button onClick={onOpenCertifications} className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left">
                    {lang === 'ko' ? '품질 및 인증현황' : 'Certifications'}
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-sm font-bold text-[#41befd] mb-3">
                {lang === 'ko' ? '가스 제품군' : 'Products'}
              </h5>
              <ul className="space-y-2 text-xs">
                <li><button onClick={onOpenCatalog} className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left">{lang === 'ko' ? '산업용 가스' : 'Industrial Gas'}</button></li>
                <li><button onClick={onOpenCatalog} className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left">{lang === 'ko' ? '연료용 가스' : 'Fuel Gas'}</button></li>
                <li><button onClick={onOpenCatalog} className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left">{lang === 'ko' ? '특수 가스' : 'Specialty Gas'}</button></li>
                <li><button onClick={onOpenCatalog} className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left">{lang === 'ko' ? '의료용 가스' : 'Medical Gas'}</button></li>
              </ul>
            </div>

            <div>
              <h5 className="text-sm font-bold text-[#41befd] mb-3">
                {lang === 'ko' ? '고객 및 지원' : 'Support'}
              </h5>
              <ul className="space-y-2 text-xs">
                <li><a href="#notice" className="text-slate-400 hover:text-white transition-colors">{lang === 'ko' ? '새로운 소식' : 'Latest News'}</a></li>
                <li>
                  <button onClick={onOpenInquiry} className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left">
                    {lang === 'ko' ? '온라인 문의' : 'Online Inquiry'}
                  </button>
                </li>
                <li>
                  <button onClick={() => alert(lang === 'ko' ? '2025 상반기 MS가스 생산·영업·엔지니어링 공채 채용이 진행 중입니다. 채용 문의: hr@msgas.co.kr' : 'Recruiting inquiries: hr@msgas.co.kr')} className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left">
                    {lang === 'ko' ? '인재채용' : 'Careers'}
                  </button>
                </li>
                <li>
                  <button onClick={onOpenNetwork} className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left">
                    {lang === 'ko' ? '오시는 길' : 'Locations'}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400">
            Copyright © 2025 (주)MS가스 All rights reserved.
          </p>

          <div className="flex items-center space-x-6 text-slate-400">
            <button 
              onClick={() => alert(lang === 'ko' ? '개인정보처리방침: (주)MS가스는 고객의 개인정보를 소중히 취급하며 관련 법령을 엄격히 준수합니다.' : 'Privacy Policy: MS Gas adheres to strict data privacy regulations.')}
              className="text-white font-semibold hover:text-[#41befd] transition-colors cursor-pointer"
            >
              {lang === 'ko' ? '개인정보처리방침' : 'Privacy Policy'}
            </button>
            <button 
              onClick={() => alert(lang === 'ko' ? '이용약관: 서비스 이용약관 및 가스 공급 표준계약 규정입니다.' : 'Terms of Service for gas supply and facility engineering.')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {lang === 'ko' ? '이용약관' : 'Terms of Service'}
            </button>
            <button 
              onClick={onOpenInquiry}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {lang === 'ko' ? '온라인 문의' : 'Inquiry'}
            </button>
            <button 
              onClick={onOpenNetwork}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {lang === 'ko' ? '오시는 길' : 'Locations'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
