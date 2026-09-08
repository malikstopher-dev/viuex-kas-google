import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Logo } from '../brand/Logo';
import { RouteId } from '../../types';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, setLanguage, navigate, t } = useLanguage();

  const handleNav = (routeId: RouteId) => {
    navigate(routeId);
  };

  return (
    <footer className="bg-[#111318] text-[#D8D8D5] border-t border-[#25282E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Identity & Legal Registration */}
          <div className="md:col-span-4 space-y-4">
            <Logo variant="dark" size="md" />
            <div className="space-y-1 text-xs text-[#71747A] pt-2">
              <p className="font-semibold text-white tracking-wider uppercase">
                {t.stationery.companyName}
              </p>
              <p className="font-mono text-[11px] text-[#A21A8D]">
                Reg. 202074701907
              </p>
              <p className="text-xs text-[#71747A] pt-2 max-w-xs leading-relaxed">
                {language === 'fr'
                  ? 'Fourniture industrielle et approvisionnement technique. Afrique du Sud & République démocratique du Congo.'
                  : 'Industrial supply and technical procurement. South Africa & Democratic Republic of the Congo.'}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-white">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs text-[#A0A5AD]">
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
                  onClick={() => handleNav('products')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.products}
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
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-5 space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-white">
              {t.nav.contact}
            </h4>
            <div className="space-y-2.5 text-xs text-[#A0A5AD]">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#A21A8D] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  1 Broadacres Drive, Fourways, Sandton, 2055, South Africa
                </span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-3.5 h-3.5 text-[#A21A8D] shrink-0" />
                <a href="tel:+27829556071" className="hover:text-white transition-colors font-mono">
                  082 955 6071
                </a>
              </div>

              <div className="space-y-1 pt-1">
                <div className="flex items-center space-x-2.5">
                  <Mail className="w-3.5 h-3.5 text-[#A21A8D] shrink-0" />
                  <a href="mailto:aakasongo.77@gmail.com" className="hover:text-white transition-colors font-mono text-[11px]">
                    aakasongo.77@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-2.5 pl-6">
                  <a href="mailto:AkilimaliglobalT@gmail.com" className="hover:text-white transition-colors font-mono text-[11px] text-[#71747A]">
                    AkilimaliglobalT@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Language Switcher */}
            <div className="pt-3 flex items-center space-x-3 text-xs">
              <span className="text-[#71747A] text-[11px] uppercase tracking-wider">Language:</span>
              <button
                onClick={() => setLanguage('en')}
                className={`text-xs font-semibold tracking-wider transition-colors cursor-pointer ${
                  language === 'en' ? 'text-white underline underline-offset-4 decoration-[#A21A8D]' : 'text-[#71747A] hover:text-white'
                }`}
              >
                EN
              </button>
              <span className="text-[#25282E]">|</span>
              <button
                onClick={() => setLanguage('fr')}
                className={`text-xs font-semibold tracking-wider transition-colors cursor-pointer ${
                  language === 'fr' ? 'text-white underline underline-offset-4 decoration-[#A21A8D]' : 'text-[#71747A] hover:text-white'
                }`}
              >
                FR
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal Band */}
        <div className="mt-12 pt-6 border-t border-[#25282E] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#71747A] gap-3">
          <div>
            © {new Date().getFullYear()} AKGLOBAL TRADING PTY (LTD). {t.footer.rights}
          </div>
          <div className="flex items-center space-x-3">
            <span>Fourways • Sandton • South Africa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

