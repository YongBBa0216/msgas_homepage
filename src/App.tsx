import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CoreCompetencies } from './components/CoreCompetencies';
import { ProductPortfolio } from './components/ProductPortfolio';
import { QualityAndFacilities } from './components/QualityAndFacilities';
import { NetworkStats } from './components/NetworkStats';
import { NewsSection } from './components/NewsSection';
import { QuickActions } from './components/QuickActions';
import { Footer } from './components/Footer';

// Modals
import { InquiryModal } from './components/modals/InquiryModal';
import { ProductCatalogModal } from './components/modals/ProductCatalogModal';
import { ProductDetailModal } from './components/modals/ProductDetailModal';
import { NetworkModal } from './components/modals/NetworkModal';
import { NewsDetailModal } from './components/modals/NewsDetailModal';
import { CertificationModal } from './components/modals/CertificationModal';

import { GasProduct, NewsItem, Language } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('ko');
  const [activeSection, setActiveSection] = useState('products');

  // Modals state
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryProduct, setInquiryProduct] = useState<string | undefined>(undefined);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [networkOpen, setNetworkOpen] = useState(false);
  const [certOpen, setCertOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<GasProduct | null>(null);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  // Monitor scroll for nav link highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'products', 'services', 'equipment', 'esg', 'notice'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenInquiry = (productName?: string) => {
    setInquiryProduct(productName);
    setInquiryOpen(true);
  };

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'ko' ? 'en' : 'ko'));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#131b2e] antialiased">
      {/* Top Navigation */}
      <Header
        lang={lang}
        onToggleLang={handleToggleLang}
        onOpenInquiry={() => handleOpenInquiry()}
        activeSection={activeSection}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          lang={lang}
          onExploreProducts={() => setCatalogOpen(true)}
          onOpenInquiry={() => handleOpenInquiry()}
        />

        {/* 2. Core Competencies (3 Pillars) */}
        <div id="services">
          <CoreCompetencies lang={lang} />
        </div>

        {/* 3. Product Portfolio Bento Grid */}
        <ProductPortfolio
          lang={lang}
          onOpenCatalog={() => setCatalogOpen(true)}
          onSelectProduct={(product) => setSelectedProduct(product)}
        />

        {/* 4. R&D, Quality & Facilities */}
        <QualityAndFacilities
          lang={lang}
          onOpenCertifications={() => setCertOpen(true)}
        />

        {/* 5. Nationwide Network & Metrics (Dark Navy) */}
        <NetworkStats
          lang={lang}
          onOpenNetwork={() => setNetworkOpen(true)}
        />

        {/* 6. News, Awards & ESG */}
        <div id="esg">
          <NewsSection
            lang={lang}
            onSelectNews={(news) => setSelectedNews(news)}
          />
        </div>

        {/* 7. Quick Action Shortcut Hub */}
        <QuickActions
          lang={lang}
          onOpenInquiry={() => handleOpenInquiry()}
          onOpenNetwork={() => setNetworkOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenInquiry={() => handleOpenInquiry()}
        onOpenNetwork={() => setNetworkOpen(true)}
        onOpenCertifications={() => setCertOpen(true)}
        onOpenCatalog={() => setCatalogOpen(true)}
      />

      {/* Interactive Modals */}
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        lang={lang}
        preselectedProduct={inquiryProduct}
      />

      <ProductCatalogModal
        isOpen={catalogOpen}
        onClose={() => setCatalogOpen(false)}
        lang={lang}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onOpenInquiry={(pName) => {
          setCatalogOpen(false);
          handleOpenInquiry(pName);
        }}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        lang={lang}
        onOpenInquiry={(pName) => handleOpenInquiry(pName)}
      />

      <NetworkModal
        isOpen={networkOpen}
        onClose={() => setNetworkOpen(false)}
        lang={lang}
      />

      <NewsDetailModal
        news={selectedNews}
        onClose={() => setSelectedNews(null)}
        lang={lang}
      />

      <CertificationModal
        isOpen={certOpen}
        onClose={() => setCertOpen(false)}
        lang={lang}
      />
    </div>
  );
}
