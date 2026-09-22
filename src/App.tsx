/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Currency, Language, PageId, Theme } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ConversionTrackerModal } from './components/ConversionTrackerModal';
import { AuditModal } from './components/AuditModal';
import { usePageSeo } from './utils/seo';

// Pages
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { AboutPage } from './pages/AboutPage';
import { CorporatePage } from './pages/CorporatePage';
import { CoachingPage } from './pages/CoachingPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  // Page Routing State
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    if (['guide-ia', 'a-propos', 'solutions-entreprises', 'coaching', 'contact'].includes(hash)) {
      return hash as PageId;
    }
    return 'home';
  });

  // Language state (French / English)
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('kc_lang');
    return (saved === 'en' || saved === 'fr') ? saved : 'fr';
  });

  // Theme state (Dark / Light)
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('kc_theme');
    return (saved === 'light' || saved === 'dark') ? saved : 'dark';
  });

  // Currency state default to XAF (FCFA)
  const [currency, setCurrency] = useState<Currency>('XAF');

  // Modals
  const [isTrackerOpen, setIsTrackerOpen] = useState(false);
  const [isAuditOpen, setIsAuditOpen] = useState(false);

  // Dynamic SEO meta tags (title, description, og:title, og:description, canonical, schema.org)
  usePageSeo(currentPage, language);

  // Sync theme with document element
  useEffect(() => {
    localStorage.setItem('kc_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Sync language with localStorage
  useEffect(() => {
    localStorage.setItem('kc_lang', language);
  }, [language]);

  // Sync URL hash with currentPage for browser navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (['home', 'guide-ia', 'a-propos', 'solutions-entreprises', 'coaching', 'contact'].includes(hash)) {
        setCurrentPage(hash as PageId);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = `/${page === 'home' ? '' : page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0c111d] text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200 selection:bg-blue-600 selection:text-white">
      
      {/* Top Multi-page Header & Navigation (Devise removed, follower count removed from header, new blue logo) */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        language={language}
        onLanguageChange={setLanguage}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Discrete Page View with Motion Smooth Animation */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {currentPage === 'home' && (
              <HomePage
                onNavigate={handleNavigate}
                language={language}
                currency={currency}
              />
            )}

            {currentPage === 'guide-ia' && (
              <ProductsPage
                currency={currency}
                language={language}
              />
            )}

            {currentPage === 'a-propos' && (
              <AboutPage
                onNavigate={handleNavigate}
                language={language}
              />
            )}

            {currentPage === 'solutions-entreprises' && (
              <CorporatePage
                language={language}
                onOpenAudit={() => setIsAuditOpen(true)}
              />
            )}

            {currentPage === 'coaching' && (
              <CoachingPage
                currency={currency}
                language={language}
              />
            )}

            {currentPage === 'contact' && (
              <ContactPage
                language={language}
                onOpenAudit={() => setIsAuditOpen(true)}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer
        currentPage={currentPage}
        onNavigate={handleNavigate}
        language={language}
        onOpenTracker={() => setIsTrackerOpen(true)}
        onOpenAudit={() => setIsAuditOpen(true)}
      />

      {/* Floating Direct WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Conversion Tracker Drawer / Modal */}
      <ConversionTrackerModal
        isOpen={isTrackerOpen}
        onClose={() => setIsTrackerOpen(false)}
      />

      {/* Startupic Consulting Corporate Audit Modal */}
      <AuditModal
        isOpen={isAuditOpen}
        onClose={() => setIsAuditOpen(false)}
      />

    </div>
  );
}
