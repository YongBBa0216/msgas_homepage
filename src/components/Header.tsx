import React, { useState } from 'react';
import { Flame, Globe, ArrowRight, Menu, X } from 'lucide-react';
import { Language } from '../types';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenInquiry: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLang,
  onOpenInquiry,
  activeSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'about', labelKo: '회사소개', labelEn: 'About MS' },
    { id: 'products', labelKo: '제품소개', labelEn: 'Products' },
    { id: 'services', labelKo: '서비스', labelEn: 'Services' },
    { id: 'equipment', labelKo: '생산설비', labelEn: 'Facilities' },
    { id: 'esg', labelKo: 'ESG', labelEn: 'ESG' },
    { id: 'notice', labelKo: '고객지원', labelEn: 'Support & News' },
  ];

  return (
    <header className="bg-white/95 dark:bg-[#0B1B3D]/95 backdrop-blur-md sticky top-0 z-40 border-b border-slate-200/80 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-[#0B1B3D] flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-105">
            <Flame className="w-6 h-6 text-[#41befd] fill-[#41befd]/30" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold text-[#0B1B3D] tracking-tight leading-none">
              MS GAS
            </span>
            <span className="text-[10px] tracking-widest text-[#64748B] font-bold mt-0.5">
              (주)MS가스
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isProducts = link.id === 'products';
            const isActive = activeSection === link.id || (isProducts && activeSection === 'products');
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? 'text-[#0079C2] border-b-2 border-[#0079C2] pb-1'
                    : 'text-slate-600 hover:text-[#0079C2]'
                }`}
              >
                {lang === 'ko' ? link.labelKo : link.labelEn}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center space-x-3">
          <button
            onClick={onToggleLang}
            className="flex items-center space-x-1.5 text-xs font-semibold text-slate-700 hover:text-[#0079C2] px-2.5 py-1.5 rounded-lg border border-slate-300 hover:border-[#0079C2] transition-colors"
            type="button"
            title="Toggle Language"
          >
            <Globe className="w-4 h-4 text-slate-500" />
            <span>{lang === 'ko' ? 'ENG' : 'KOR'}</span>
          </button>

          <button
            onClick={onOpenInquiry}
            className="inline-flex items-center gap-1.5 bg-[#003a53] hover:bg-[#0B1B3D] text-white px-4 py-2.5 rounded-md font-semibold text-xs sm:text-sm shadow-sm hover:shadow transition-all duration-150"
          >
            <span>{lang === 'ko' ? '온라인 문의' : 'Inquiry / Quote'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onToggleLang}
            className="p-1.5 text-xs font-semibold text-slate-700 rounded border border-slate-300"
          >
            {lang === 'ko' ? 'ENG' : 'KOR'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 rounded-lg hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-200 bg-white px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-slate-700 hover:text-[#0079C2]"
            >
              {lang === 'ko' ? link.labelKo : link.labelEn}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#0079C2] text-white py-2.5 rounded-lg text-sm font-semibold"
            >
              <span>{lang === 'ko' ? '온라인 문의 신청' : 'Online Quote'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
