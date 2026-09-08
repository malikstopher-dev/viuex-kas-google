import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ShieldCheck, MapPin, Building2, CheckCircle2, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { t, navigate } = useLanguage();

  return (
    <div className="bg-[#F7F7F5] text-[#111318]">
      {/* Header Banner */}
      <section className="border-b border-[#D9DBDE] bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A21A8D] block">
              {t.about.headerBadge}
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-normal text-[#111318] leading-tight">
              {t.about.headerTitle}
            </h1>
            <p className="text-base text-[#666B73] leading-relaxed">
              {t.about.headerLead}
            </p>
          </div>
        </div>
      </section>

      {/* Institutional Profile & Image */}
      <section className="py-16 lg:py-24 border-b border-[#D9DBDE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-serif text-[#111318]">
                {t.about.identityTitle}
              </h2>
              <p className="text-sm sm:text-base text-[#25282E] leading-relaxed">
                {t.about.identityDesc1}
              </p>
              <p className="text-sm text-[#666B73] leading-relaxed">
                {t.about.identityDesc2}
              </p>

              {/* Official Corporate Facts Box */}
              <div className="border border-[#D9DBDE] bg-white p-6 rounded-xs space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#111318] border-b border-[#D9DBDE] pb-2">
                  {t.about.legalDetailsTitle}
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#25282E]">
                  <div>
                    <span className="text-[#666B73] block">{t.about.entityNameLabel}</span>
                    <span className="font-semibold">{t.stationery.registeredEntity}</span>
                  </div>
                  <div>
                    <span className="text-[#666B73] block">{t.about.regLabel}</span>
                    <span className="font-mono font-semibold">{t.stationery.regNumber}</span>
                  </div>
                  <div>
                    <span className="text-[#666B73] block">{t.about.operatingBaseLabel}</span>
                    <span className="font-semibold">Fourways, Sandton, South Africa</span>
                  </div>
                  <div>
                    <span className="text-[#666B73] block">{t.about.geographicReachLabel}</span>
                    <span className="font-semibold">South Africa & DR Congo</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-xs overflow-hidden border border-[#D9DBDE] bg-[#25282E]">
                <img
                  src="/assets/akglobal/support/corporate-architecture.jpg"
                  alt="AKGLOBAL Corporate headquarters and operations"
                  className="w-full h-full object-cover grayscale contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                  <span className="text-[#A21A8D] font-mono text-[10px] uppercase block tracking-widest">
                    Governance & Trade Compliance
                  </span>
                  <p className="font-medium text-white/90">
                    Transparent trade administration and cross-border commercial compliance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Philosophy: Clear & Honest Principles */}
      <section className="py-16 lg:py-24 border-b border-[#D9DBDE] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A21A8D] block mb-2">
              {t.about.valuesBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#111318]">
              {t.about.valuesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-[#D9DBDE] p-8 bg-[#F7F7F5] rounded-xs space-y-3">
              <div className="w-10 h-10 rounded-xs bg-[#111318] text-white flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#A21A8D]" />
              </div>
              <h3 className="text-lg font-serif text-[#111318] pt-2">
                {t.about.principle1Title}
              </h3>
              <p className="text-xs text-[#666B73] leading-relaxed">
                {t.about.principle1Desc}
              </p>
            </div>

            <div className="border border-[#D9DBDE] p-8 bg-[#F7F7F5] rounded-xs space-y-3">
              <div className="w-10 h-10 rounded-xs bg-[#111318] text-white flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-[#A21A8D]" />
              </div>
              <h3 className="text-lg font-serif text-[#111318] pt-2">
                {t.about.principle2Title}
              </h3>
              <p className="text-xs text-[#666B73] leading-relaxed">
                {t.about.principle2Desc}
              </p>
            </div>

            <div className="border border-[#D9DBDE] p-8 bg-[#F7F7F5] rounded-xs space-y-3">
              <div className="w-10 h-10 rounded-xs bg-[#111318] text-white flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#A21A8D]" />
              </div>
              <h3 className="text-lg font-serif text-[#111318] pt-2">
                {t.about.principle3Title}
              </h3>
              <p className="text-xs text-[#666B73] leading-relaxed">
                {t.about.principle3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact Callout */}
      <section className="py-16 bg-[#111318] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <h3 className="text-2xl font-serif">
              {t.about.directCalloutTitle}
            </h3>
            <p className="text-xs text-[#D9DBDE]/70">
              {t.about.directCalloutDesc}
            </p>
          </div>

          <button
            onClick={() => navigate('contact')}
            className="inline-flex items-center space-x-2 bg-white text-[#111318] hover:bg-[#F7F7F5] px-6 py-3.5 rounded-xs text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer group shrink-0"
          >
            <span>{t.nav.contact}</span>
            <ArrowRight className="w-4 h-4 text-[#A21A8D] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};
