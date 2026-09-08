import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { Logo } from '../brand/Logo';
import { RouteId } from '../../types';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, FileText, Sun, Moon } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, setLanguage, navigate, t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();

  const handleNav = (routeId: RouteId) => {
    navigate(routeId);
  };

  return (
    <footer className="bg-[#111318] text-[#D9DBDE] border-t-2 border-[#A21A8D]/40">
      {/* Top Statement Band */}
      <div className="border-b border-white/10 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#A21A8D] block mb-2">
              {t.stationery.geoTag}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif text-white font-normal leading-snug">
              {t.homepage.procurementTitle}
            </h3>
            <p className="text-sm text-[#D9DBDE]/70 mt-2">
              {t.homepage.procurementBody}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => handleNav('rfq')}
              className="inline-flex items-center space-x-2 bg-white text-[#111318] hover:bg-[#F7F7F5] px-6 py-3 rounded-xs text-xs font-semibold tracking-widest uppercase transition-colors group cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#A21A8D]" />
              <span>{t.nav.rfq}</span>
              <ArrowRight className="w-3.5 h-3.5 text-black/50 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="inline-flex items-center space-x-2 border border-white/20 text-white hover:border-white/50 px-6 py-3 rounded-xs text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer"
            >
              <span>{t.nav.contact}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Column 1 & 2: Master Identity */}
          <div className="lg:col-span-2 space-y-6">
            <Logo variant="dark" size="lg" />
            
            <p className="text-sm text-[#D9DBDE]/80 leading-relaxed max-w-md pt-2">
              {t.stationery.registeredEntity}
              <br />
              {t.stationery.regNumber}
            </p>

            <div className="p-4 bg-[#25282E]/40 border border-white/10 rounded-xs text-xs text-[#D9DBDE]/90 space-y-2">
              <div className="flex items-start space-x-2.5">
                <ShieldCheck className="w-4 h-4 text-[#A21A8D] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white font-medium">{t.footer.geographicScope}:</strong>{' '}
                  {t.footer.geographicDesc}
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-xs pt-1">
              <span className="text-white/40">{t.footer.language}:</span>
              <button
                onClick={() => setLanguage('en')}
                className={`font-semibold uppercase tracking-wider transition-colors ${
                  language === 'en' ? 'text-white underline underline-offset-4 decoration-[#A21A8D]' : 'text-white/50 hover:text-white'
                }`}
              >
                English
              </button>
              <span className="text-white/30">|</span>
              <button
                onClick={() => setLanguage('fr')}
                className={`font-semibold uppercase tracking-wider transition-colors ${
                  language === 'fr' ? 'text-white underline underline-offset-4 decoration-[#A21A8D]' : 'text-white/50 hover:text-white'
                }`}
              >
                Français
              </button>
            </div>
          </div>

          {/* Column 3: Corporate Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-white/10 pb-2.5">
              {t.footer.company}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D9DBDE]/80">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.company}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('procurement')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.procurement}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('industries')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.industries}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('rfq')}
                  className="hover:text-white transition-colors cursor-pointer text-[#A21A8D] font-medium"
                >
                  {t.nav.rfq}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Products & Categories */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-white/10 pb-2.5">
              {t.footer.products}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D9DBDE]/80">
              <li>
                <button
                  onClick={() => handleNav('products-lifting')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {t.categories.lifting.title}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products-fasteners')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {t.categories.fasteners.title}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products-hardware')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {t.categories.hardware.title}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('procurement')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {t.categories.procurement.title}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Official Contact & Base */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-white/10 pb-2.5">
              {t.footer.operatingBase}
            </h4>
            
            <div className="space-y-3 text-xs text-[#D9DBDE]/80">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#A21A8D] shrink-0 mt-0.5" />
                <span>
                  1 Broadacres Drive, Fourways<br />
                  Sandton, 2055<br />
                  South Africa
                </span>
              </div>

              <div className="flex items-center space-x-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#A21A8D] shrink-0" />
                <a href="tel:+27829556071" className="hover:text-white transition-colors">
                  082 955 6071
                </a>
              </div>

              <div className="space-y-1 pt-1">
                <div className="flex items-center space-x-2.5">
                  <Mail className="w-4 h-4 text-[#A21A8D] shrink-0" />
                  <a
                    href="mailto:aakasongo.77@gmail.com"
                    className="hover:text-white transition-colors break-all"
                  >
                    aakasongo.77@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-2.5 pl-6.5">
                  <a
                    href="mailto:AkilimaliglobalT@gmail.com"
                    className="hover:text-white transition-colors text-[11px] text-white/60 break-all"
                  >
                    AkilimaliglobalT@gmail.com
                  </a>
                </div>
              </div>

              <div className="text-[11px] text-white/50 pt-2 border-t border-white/10">
                {t.stationery.directorLabel}: {t.stationery.directorName}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Band */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#D9DBDE]/60 gap-4">
          <div>
            © {new Date().getFullYear()} AKGLOBAL TRADING PTY (LTD). {t.footer.rights}
          </div>
          <div className="flex items-center space-x-6">
            <span>{t.footer.honestNotice}</span>
            <span className="text-white/20">•</span>
            <span className="text-white/40">Sandton, Gauteng</span>
            <span className="text-white/20">•</span>
            <button
              onClick={toggleTheme}
              className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-xs bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer border border-white/10"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <>
                  <Sun className="w-3 h-3 text-amber-400" />
                  <span>{language === 'fr' ? 'Mode Clair' : 'Light Mode'}</span>
                </>
              ) : (
                <>
                  <Moon className="w-3 h-3 text-white/70" />
                  <span>{language === 'fr' ? 'Mode Sombre' : 'Dark Mode'}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
