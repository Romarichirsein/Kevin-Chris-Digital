import React, { useState } from 'react';
import { Language, PageId, Theme } from '../types';
import { translations } from '../i18n/translations';
import { trackConversion } from '../services/tracker';
import { OFFICIAL_CONTACT, getWhatsAppLink } from '../data/contact';
import { Logo } from './Logo';
import { 
  Menu, 
  X, 
  Home, 
  MessageSquare, 
  Sun, 
  Moon, 
  BookOpen, 
  User, 
  Briefcase, 
  Calendar, 
  PhoneCall, 
  Mail,
  Zap
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  theme: Theme;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  language,
  onLanguageChange,
  theme,
  onToggleTheme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations[language];

  const handleWhatsAppClick = () => {
    trackConversion('whatsapp_direct', 'Navbar WhatsApp Click');
    const msg = language === 'fr'
      ? "Bonjour Kevin Chris, je visite votre site officiel et je souhaite échanger directement avec vous."
      : "Hello Kevin Chris, I am visiting your official website and would like to chat directly.";
    window.open(getWhatsAppLink(msg), '_blank');
  };

  const navItems: { id: PageId; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'home', label: t.nav.home, icon: Home },
    { id: 'guide-ia', label: t.nav.guide, icon: BookOpen },
    { id: 'a-propos', label: t.nav.about, icon: User },
    { id: 'solutions-entreprises', label: t.nav.services, icon: Briefcase },
    { id: 'coaching', label: t.nav.coaching, icon: Calendar },
    { id: 'contact', label: t.nav.contact, icon: PhoneCall },
  ];

  const handlePageClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 dark:bg-[#0c111d]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-200">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo directly wired to home page (with new blue emblem and no digital badge) */}
          <Logo onClick={() => handlePageClick('home')} />

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  id={`nav-link-${item.id}`}
                  onClick={() => handlePageClick(item.id)}
                  className={`relative px-3.5 py-2 text-xs font-semibold rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 font-bold border border-blue-200 dark:border-blue-800/60 shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Controls (Language, Theme, WhatsApp CTA — Currency Removed) */}
          <div className="hidden sm:flex items-center gap-2.5">
            
            {/* Language Toggle (FR / EN) */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800/90 rounded-xl p-1 border border-slate-200 dark:border-slate-700">
              <button
                type="button"
                id="lang-fr-btn"
                onClick={() => onLanguageChange('fr')}
                className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-all ${
                  language === 'fr'
                    ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Passer en Français"
              >
                FR
              </button>
              <button
                type="button"
                id="lang-en-btn"
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-all ${
                  language === 'en'
                    ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Switch to English"
              >
                EN
              </button>
            </div>

            {/* Dark / Light Mode Toggle */}
            <button
              type="button"
              id="theme-toggle-btn"
              onClick={onToggleTheme}
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all hover:scale-105"
              title={theme === 'dark' ? t.nav.lightMode : t.nav.darkMode}
              aria-label="Basculer le thème clair / sombre"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Direct WhatsApp CTA in Electric Blue with subtle glow */}
            <button
              type="button"
              id="header-whatsapp-btn"
              onClick={handleWhatsAppClick}
              className="cta-pulse-glow flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-xl shadow-md shadow-blue-600/30 hover-glow-blue active:scale-95 transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>{t.nav.whatsappCta}</span>
            </button>

          </div>

          {/* Mobile Actions: Theme, Lang & Menu Button */}
          <div className="flex sm:hidden items-center gap-1.5">
            <button
              type="button"
              onClick={onToggleTheme}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800"
              aria-label="Thème"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              type="button"
              onClick={() => onLanguageChange(language === 'fr' ? 'en' : 'fr')}
              className="px-2 py-1 text-xs font-bold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
            >
              {language.toUpperCase()}
            </button>

            <button
              type="button"
              id="mobile-nav-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Menu de navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d1322] px-4 pt-3 pb-6 space-y-4 shadow-xl">
          
          {/* Navigation links */}
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handlePageClick(item.id)}
                  className={`w-full text-left py-2.5 px-3.5 rounded-xl text-sm font-semibold flex items-center gap-3 transition-colors ${
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 font-bold border border-blue-200 dark:border-blue-800'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Direct WhatsApp Mobile Action */}
          <div className="pt-2">
            <button
              type="button"
              onClick={handleWhatsAppClick}
              className="cta-pulse-glow w-full py-3 px-4 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2 shadow-md shadow-blue-600/30"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>{t.nav.whatsappCta}</span>
            </button>
          </div>

        </div>
      )}
    </header>
  );
};
