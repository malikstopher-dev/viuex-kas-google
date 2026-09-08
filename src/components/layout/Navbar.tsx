import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useRfq } from '../../context/RfqContext';
import { useTheme } from '../../context/ThemeContext';
import { Logo } from '../brand/Logo';
import { RouteId } from '../../types';
import { Phone, Mail, Menu, X, ArrowRight, FileText, Sun, Moon } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, setLanguage, currentRouteId, navigate, t } = useLanguage();
  const { items } = useRfq();
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Active items count in RFQ (excluding empty default)
  const activeItemsCount = items.filter((i) => i.description.trim().length > 0).length;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: RouteId; label: string }[] = [
    { id: 'about', label: t.nav.company },
    { id: 'products', label: t.nav.products },
    { id: 'procurement', label: t.nav.procurement },
    { id: 'industries', label: t.nav.industries },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (id: RouteId) => {
    navigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Utility Bar - Subtle Corporate Metadata */}
      <div className="bg-[#0D0F13] text-[#D9DBDE] text-[11px] tracking-wider font-medium border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="text-[#A21A8D] font-semibold tracking-widest uppercase text-[10px]">
              {t.stationery.geoTag}
            </span>
            <span className="text-white/30">•</span>
            <span className="text-white/60">
              {t.stationery.geoSub}
            </span>
            <span className="text-white/30">•</span>
            <span className="text-white/60">
              {t.stationery.regNumber}
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="tel:+27829556071"
              className="flex items-center space-x-1.5 text-white/80 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-[#A21A8D]" />
              <span>{t.stationery.phone}</span>
            </a>
            <span className="text-white/30">•</span>
            <a
              href="mailto:aakasongo.77@gmail.com"
              className="flex items-center space-x-1.5 text-white/80 hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3 text-[#A21A8D]" />
              <span>{t.stationery.primaryEmail}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Corporate Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#F7F7F5]/95 dark:bg-[#111318]/95 backdrop-blur-md shadow-sm border-b border-[#D9DBDE]/80 dark:border-[#25282E] py-3.5'
            : 'bg-[#F7F7F5] dark:bg-[#111318] border-b border-[#D9DBDE]/60 dark:border-[#25282E] py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Official Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none group cursor-pointer"
            aria-label="AKGLOBAL TRADING PTY Home"
          >
            {/* Desktop Full Master Logo */}
            <div className="hidden sm:block">
              <Logo variant={isDark ? 'dark' : 'light'} size="md" />
            </div>
            {/* Mobile Compact Master Logo */}
            <div className="sm:hidden">
              <Logo variant={isDark ? 'dark' : 'light'} size="sm" />
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentRouteId === link.id || (link.id === 'products' && currentRouteId.startsWith('products'));
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 text-[13px] font-semibold tracking-wider uppercase transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#111318] dark:text-white'
                      : 'text-[#666B73] dark:text-[#A0A5AD] hover:text-[#111318] dark:hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#A21A8D]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Action Area: Theme Toggle + Language Switcher + RFQ CTA */}
          <div className="hidden sm:flex items-center space-x-3.5">
            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-8 h-8 rounded-sm border border-[#D9DBDE] dark:border-[#25282E] bg-white dark:bg-[#1A1D24] text-[#111318] dark:text-[#F7F7F5] hover:border-[#A21A8D] dark:hover:border-[#A21A8D] transition-colors cursor-pointer shadow-xs"
              title={isDark ? (language === 'fr' ? 'Passer au mode clair' : 'Switch to light mode') : (language === 'fr' ? 'Passer au mode sombre' : 'Switch to dark mode')}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-[#666B73] hover:text-[#111318] transition-colors" />
              )}
            </button>

            {/* Language Selector (EN | FR) */}
            <div className="flex items-center text-xs font-semibold tracking-wider border border-[#D9DBDE] dark:border-[#25282E] rounded-sm p-0.5 bg-white dark:bg-[#1A1D24]">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-xs transition-colors cursor-pointer ${
                  language === 'en'
                    ? 'bg-[#111318] dark:bg-white dark:text-[#111318] text-white'
                    : 'text-[#666B73] dark:text-[#A0A5AD] hover:text-[#111318] dark:hover:text-white'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <span className="text-[#D9DBDE] dark:text-[#25282E] px-0.5">|</span>
              <button
                onClick={() => setLanguage('fr')}
                className={`px-2.5 py-1 rounded-xs transition-colors cursor-pointer ${
                  language === 'fr'
                    ? 'bg-[#111318] dark:bg-white dark:text-[#111318] text-white'
                    : 'text-[#666B73] dark:text-[#A0A5AD] hover:text-[#111318] dark:hover:text-white'
                }`}
                aria-label="Passer au Français"
              >
                FR
              </button>
            </div>

            {/* Request a Quote Button */}
            <button
              onClick={() => handleNavClick('rfq')}
              className="relative inline-flex items-center space-x-2 bg-[#111318] dark:bg-[#A21A8D] text-white hover:bg-[#25282E] dark:hover:bg-[#871375] text-xs font-semibold tracking-widest uppercase px-4 py-2.5 rounded-sm transition-colors border border-black dark:border-[#A21A8D] cursor-pointer shadow-xs group"
            >
              <FileText className="w-3.5 h-3.5 text-[#A21A8D] dark:text-white" />
              <span>{t.nav.rfq}</span>
              <ArrowRight className="w-3.5 h-3.5 text-white/60 group-hover:translate-x-0.5 transition-transform" />

              {/* Active Items Badge */}
              {activeItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#A21A8D] dark:bg-white dark:text-[#111318] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white dark:border-[#111318]">
                  {activeItemsCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Right Controls: Theme Toggle + Compact EN/FR + RFQ + Menu Toggle */}
          <div className="flex items-center space-x-2 sm:hidden">
            {/* Mobile Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-[#111318] dark:text-[#F7F7F5] border border-[#D9DBDE] dark:border-[#25282E] rounded-xs bg-white dark:bg-[#1A1D24] transition-colors"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-[#666B73]" />
              )}
            </button>

            <div className="flex items-center text-[11px] font-bold border border-[#D9DBDE] dark:border-[#25282E] rounded-xs bg-white dark:bg-[#1A1D24]">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 ${
                  language === 'en'
                    ? 'bg-[#111318] dark:bg-white dark:text-[#111318] text-white'
                    : 'text-[#666B73] dark:text-[#A0A5AD]'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('fr')}
                className={`px-2 py-1 ${
                  language === 'fr'
                    ? 'bg-[#111318] dark:bg-white dark:text-[#111318] text-white'
                    : 'text-[#666B73] dark:text-[#A0A5AD]'
                }`}
              >
                FR
              </button>
            </div>

            <button
              onClick={() => handleNavClick('rfq')}
              className="relative p-2 text-[#111318] dark:text-white border border-[#D9DBDE] dark:border-[#25282E] rounded-xs bg-white dark:bg-[#1A1D24]"
              aria-label={t.nav.rfq}
            >
              <FileText className="w-4 h-4 text-[#A21A8D]" />
              {activeItemsCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#A21A8D] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {activeItemsCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#111318] dark:text-white hover:text-[#A21A8D] border border-[#D9DBDE] dark:border-[#25282E] rounded-xs bg-white dark:bg-[#1A1D24] transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#D9DBDE] dark:border-[#25282E] bg-[#F7F7F5] dark:bg-[#111318] px-6 py-6 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = currentRouteId === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full text-left py-3 px-3 rounded-xs text-sm font-semibold tracking-wider uppercase flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-[#111318] dark:bg-[#1A1D24] text-white'
                        : 'text-[#111318] dark:text-[#D9DBDE] hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#A21A8D]" />}
                  </button>
                );
              })}
            </div>

            {/* Dark Mode toggle inside mobile drawer */}
            <div className="pt-2 border-t border-[#D9DBDE] dark:border-[#25282E]">
              <button
                onClick={toggleTheme}
                className="w-full py-2.5 px-3 rounded-xs border border-[#D9DBDE] dark:border-[#25282E] bg-white dark:bg-[#1A1D24] flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-[#111318] dark:text-white"
              >
                <div className="flex items-center space-x-2">
                  {isDark ? (
                    <Sun className="w-4 h-4 text-amber-400" />
                  ) : (
                    <Moon className="w-4 h-4 text-[#666B73]" />
                  )}
                  <span>{isDark ? (language === 'fr' ? 'Thème: Sombre' : 'Theme: Dark') : (language === 'fr' ? 'Thème: Clair' : 'Theme: Light')}</span>
                </div>
                <span className="text-[11px] text-[#A21A8D] font-bold">
                  {isDark ? (language === 'fr' ? 'Changer en clair' : 'Switch to light') : (language === 'fr' ? 'Changer en sombre' : 'Switch to dark')}
                </span>
              </button>
            </div>

            <div className="pt-3 border-t border-[#D9DBDE] dark:border-[#25282E] space-y-3">
              <button
                onClick={() => handleNavClick('rfq')}
                className="w-full py-3 bg-[#111318] dark:bg-[#A21A8D] text-white rounded-xs text-xs font-semibold tracking-widest uppercase flex items-center justify-center space-x-2"
              >
                <FileText className="w-4 h-4 text-[#A21A8D] dark:text-white" />
                <span>{t.nav.rfq}</span>
                {activeItemsCount > 0 && (
                  <span className="bg-[#A21A8D] dark:bg-white dark:text-[#111318] px-2 py-0.5 rounded-full text-[10px] text-white font-bold ml-1">
                    {activeItemsCount}
                  </span>
                )}
              </button>

              <div className="text-[11px] text-[#666B73] dark:text-[#A0A5AD] space-y-1.5 pt-2">
                <div className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-[#A21A8D]" />
                  <a href="tel:+27829556071" className="hover:underline">
                    082 955 6071
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-[#A21A8D]" />
                  <a href="mailto:aakasongo.77@gmail.com" className="hover:underline">
                    aakasongo.77@gmail.com
                  </a>
                </div>
                <div className="text-[10px] text-[#666B73]/80 dark:text-[#A0A5AD]/80 pt-1">
                  1 Broadacres Drive, Fourways, Sandton, South Africa
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
