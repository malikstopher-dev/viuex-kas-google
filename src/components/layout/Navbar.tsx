import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useRfq } from '../../context/RfqContext';
import { Logo } from '../brand/Logo';
import { RouteId } from '../../types';
import { Menu, X, ArrowRight, FileText } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, setLanguage, currentRouteId, navigate, t } = useLanguage();
  const { items } = useRfq();
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
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#111318]/95 backdrop-blur-md shadow-md border-b border-[#25282E] py-3'
          : 'bg-[#111318] border-b border-[#25282E] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Official Brand Logo (Enlarged by ~20-25% on desktop) */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center text-left focus:outline-none group cursor-pointer"
          aria-label="AKGLOBAL TRADING PTY Home"
        >
          {/* Desktop Logo */}
          <div className="hidden sm:block">
            <Logo variant="dark" size="md" />
          </div>
          {/* Mobile Logo */}
          <div className="sm:hidden">
            <Logo variant="dark" size="sm" />
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive =
              currentRouteId === link.id ||
              (link.id === 'products' && currentRouteId.startsWith('products'));
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative py-1 text-[12px] font-medium tracking-[0.08em] uppercase transition-colors cursor-pointer ${
                  isActive
                    ? 'text-white'
                    : 'text-[#D9DBDE]/75 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#A21A8D]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop Action Area: EN | FR + Request a Quote */}
        <div className="hidden sm:flex items-center space-x-4">
          {/* Language Selector (EN | FR) */}
          <div className="flex items-center text-xs font-semibold tracking-wider border border-[#25282E] rounded-[2px] p-0.5 bg-[#14161C]">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 rounded-[2px] transition-colors cursor-pointer ${
                language === 'en'
                  ? 'bg-white text-[#111318]'
                  : 'text-[#A0A5AD] hover:text-white'
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <span className="text-[#25282E] px-0.5">|</span>
            <button
              onClick={() => setLanguage('fr')}
              className={`px-2.5 py-1 rounded-[2px] transition-colors cursor-pointer ${
                language === 'fr'
                  ? 'bg-white text-[#111318]'
                  : 'text-[#A0A5AD] hover:text-white'
              }`}
              aria-label="Passer au Français"
            >
              FR
            </button>
          </div>

          {/* Request a Quote Button - 2px corner radius, restrained magenta */}
          <button
            onClick={() => handleNavClick('rfq')}
            className="relative inline-flex items-center space-x-2 bg-[#A21A8D] hover:bg-[#871375] text-white text-xs font-semibold tracking-widest uppercase px-4.5 py-2.5 rounded-[2px] transition-colors border border-[#A21A8D] cursor-pointer shadow-xs group"
          >
            <FileText className="w-3.5 h-3.5 text-white" />
            <span>{t.nav.rfq}</span>
            <ArrowRight className="w-3.5 h-3.5 text-white/70 group-hover:translate-x-0.5 transition-transform" />

            {/* Active Items Badge */}
            {activeItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-[#111318] text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#111318]">
                {activeItemsCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Right Controls: Compact EN/FR + RFQ Icon + Hamburger */}
        <div className="flex items-center space-x-2 sm:hidden">
          <div className="flex items-center text-[11px] font-bold border border-[#25282E] rounded-[2px] bg-[#14161C]">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 ${
                language === 'en'
                  ? 'bg-white text-[#111318]'
                  : 'text-[#A0A5AD]'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('fr')}
              className={`px-2 py-1 ${
                language === 'fr'
                  ? 'bg-white text-[#111318]'
                  : 'text-[#A0A5AD]'
              }`}
            >
              FR
            </button>
          </div>

          <button
            onClick={() => handleNavClick('rfq')}
            className="relative p-2 text-white border border-[#25282E] rounded-[2px] bg-[#14161C]"
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
            className="p-2 text-white hover:text-[#A21A8D] border border-[#25282E] rounded-[2px] bg-[#14161C] transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#25282E] bg-[#111318] px-6 py-6 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = currentRouteId === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left py-3 px-3 rounded-[2px] text-xs font-semibold tracking-wider uppercase flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-[#1A1D24] text-white'
                      : 'text-[#D9DBDE] hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#A21A8D]" />}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#25282E]">
            <button
              onClick={() => handleNavClick('rfq')}
              className="w-full py-3 bg-[#A21A8D] hover:bg-[#871375] text-white rounded-[2px] text-xs font-semibold tracking-widest uppercase flex items-center justify-center space-x-2 transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4 text-white" />
              <span>{t.nav.rfq}</span>
              {activeItemsCount > 0 && (
                <span className="bg-white text-[#111318] px-2 py-0.5 rounded-full text-[10px] font-bold ml-1">
                  {activeItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
