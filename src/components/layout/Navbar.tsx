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
      setIsScrolled(window.scrollY > 15);
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
          ? 'bg-[#FFFFFF]/96 backdrop-blur-sm border-b border-[#D8D8D5] py-3 shadow-[0_1px_3px_rgba(0,0,0,0.04)]'
          : 'bg-[#FFFFFF] border-b border-[#D8D8D5] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Official Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center text-left focus:outline-none group cursor-pointer"
          aria-label="AKGLOBAL TRADING PTY Home"
        >
          {/* Desktop Logo */}
          <div className="hidden sm:block">
            <Logo variant="light" size="md" />
          </div>
          {/* Mobile Logo */}
          <div className="sm:hidden">
            <Logo variant="light" size="sm" />
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
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
                    ? 'text-[#111318] font-semibold'
                    : 'text-[#71747A] hover:text-[#111318]'
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

        {/* Desktop Action Area: EN | FR + Request a Quote */}
        <div className="hidden sm:flex items-center space-x-4">
          {/* Language Selector (EN | FR) */}
          <div className="flex items-center text-xs font-semibold tracking-wider border border-[#D8D8D5] rounded-[2px] p-0.5 bg-[#F3F2EE]">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 rounded-[2px] transition-colors cursor-pointer text-[11px] font-bold ${
                language === 'en'
                  ? 'bg-[#111318] text-white'
                  : 'text-[#71747A] hover:text-[#111318]'
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <span className="text-[#D8D8D5] px-0.5">|</span>
            <button
              onClick={() => setLanguage('fr')}
              className={`px-2.5 py-1 rounded-[2px] transition-colors cursor-pointer text-[11px] font-bold ${
                language === 'fr'
                  ? 'bg-[#111318] text-white'
                  : 'text-[#71747A] hover:text-[#111318]'
              }`}
              aria-label="Passer au Français"
            >
              FR
            </button>
          </div>

          {/* Request a Quote Button - Institutional dark button with fine 2px radius and subtle magenta detail */}
          <button
            onClick={() => handleNavClick('rfq')}
            className="relative inline-flex items-center space-x-2 bg-[#111318] hover:bg-[#25282E] text-white text-xs font-semibold tracking-widest uppercase px-4.5 py-2.5 rounded-[2px] transition-colors border border-[#111318] cursor-pointer group"
          >
            <FileText className="w-3.5 h-3.5 text-white/90" />
            <span>{t.nav.rfq}</span>
            <ArrowRight className="w-3.5 h-3.5 text-white/70 group-hover:translate-x-1 transition-transform" />

            {/* Active Items Badge */}
            {activeItemsCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#A21A8D] text-white text-[10px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center border border-white">
                {activeItemsCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Right Controls: Compact EN/FR + RFQ Icon + Hamburger */}
        <div className="flex items-center space-x-2 sm:hidden">
          <div className="flex items-center text-[11px] font-bold border border-[#D8D8D5] rounded-[2px] bg-[#F3F2EE]">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 ${
                language === 'en'
                  ? 'bg-[#111318] text-white'
                  : 'text-[#71747A]'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('fr')}
              className={`px-2 py-1 ${
                language === 'fr'
                  ? 'bg-[#111318] text-white'
                  : 'text-[#71747A]'
              }`}
            >
              FR
            </button>
          </div>

          <button
            onClick={() => handleNavClick('rfq')}
            className="relative p-2 text-[#111318] border border-[#D8D8D5] rounded-[2px] bg-[#FFFFFF]"
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
            className="p-2 text-[#111318] hover:text-[#A21A8D] border border-[#D8D8D5] rounded-[2px] bg-[#FFFFFF] transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#D8D8D5] bg-[#FFFFFF] px-6 py-6 space-y-4 shadow-md animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = currentRouteId === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left py-3 px-3 rounded-[2px] text-xs font-semibold tracking-wider uppercase flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-[#F3F2EE] text-[#111318] font-bold'
                      : 'text-[#71747A] hover:bg-[#F3F2EE] hover:text-[#111318]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#A21A8D]" />}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#D8D8D5]">
            <button
              onClick={() => handleNavClick('rfq')}
              className="w-full py-3 bg-[#111318] hover:bg-[#25282E] text-white rounded-[2px] text-xs font-semibold tracking-widest uppercase flex items-center justify-center space-x-2 transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4 text-white" />
              <span>{t.nav.rfq}</span>
              {activeItemsCount > 0 && (
                <span className="bg-[#A21A8D] text-white px-2 py-0.5 rounded-full text-[10px] font-bold ml-1">
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

