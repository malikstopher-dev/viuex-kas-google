import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { ArrowRight, ArrowUpRight, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';
import { RouteId } from '../../types';

export const HomePage: React.FC = () => {
  const { t, navigate } = useLanguage();
  const { isDark } = useTheme();

  const handleNav = (routeId: RouteId) => {
    navigate(routeId);
  };

  return (
    <div className="bg-[#F7F7F5] dark:bg-[#111318] text-[#111318] dark:text-[#F7F7F5] transition-colors duration-200">
      {/* 1. HERO SECTION: Minimal Editorial Composition */}
      <section className="relative border-b border-[#D9DBDE] dark:border-[#25282E] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Editorial Text Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6 lg:pr-8">
              {/* Route Indicator Micro-Accent */}
              <div className="inline-flex items-center space-x-2 border-b border-[#A21A8D] pb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A21A8D]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#111318] dark:text-[#F7F7F5]">
                  {t.homepage.heroBadge}
                </span>
              </div>

              {/* Refined Display Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#111318] dark:text-white font-normal leading-[1.08] tracking-tight">
                {t.homepage.heroTitle}
              </h1>

              {/* Subheading */}
              <p className="text-lg sm:text-xl font-medium text-[#25282E] dark:text-[#D9DBDE] max-w-xl">
                {t.homepage.heroSubtitle}
              </p>

              {/* Body Text */}
              <p className="text-sm sm:text-base text-[#666B73] dark:text-[#A0A5AD] leading-relaxed max-w-xl">
                {t.homepage.heroDescription}
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleNav('rfq')}
                  className="inline-flex items-center space-x-3 bg-[#111318] dark:bg-[#A21A8D] text-white hover:bg-[#25282E] dark:hover:bg-[#871375] px-7 py-3.5 rounded-xs text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer border border-black dark:border-[#A21A8D] group"
                >
                  <span>{t.homepage.heroCta}</span>
                  <ArrowRight className="w-4 h-4 text-[#A21A8D] dark:text-white group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => handleNav('products')}
                  className="inline-flex items-center space-x-2 border border-[#D9DBDE] dark:border-[#25282E] bg-white dark:bg-[#1A1D24] text-[#111318] dark:text-[#F7F7F5] hover:border-[#111318] dark:hover:border-white px-6 py-3.5 rounded-xs text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer"
                >
                  <span>{t.homepage.exploreProducts}</span>
                </button>
              </div>

              {/* Trust & Geography Micro Details */}
              <div className="pt-8 border-t border-[#D9DBDE]/80 dark:border-[#25282E] flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-[#666B73] dark:text-[#A0A5AD]">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-3.5 h-3.5 text-[#A21A8D]" />
                  <span>Sandton, South Africa Base</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#A21A8D]" />
                  <span>Reg: 202074701907</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A21A8D]" />
                  <span>DRC Cross-Border Coordination</span>
                </div>
              </div>
            </div>

            {/* Right Focal Image Column (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xs border border-[#D9DBDE] dark:border-[#25282E] bg-[#25282E]">
                <img
                  src={isDark ? '/assets/akglobal/hero/hero-minimal-dark-cable.jpg' : '/assets/akglobal/hero/hero-minimal-light-hook.jpg'}
                  alt="AKGLOBAL High-capacity certified lifting hardware"
                  className="w-full h-full object-cover grayscale contrast-110 hover:scale-[1.015] transition-transform duration-700 ease-out"
                  loading="eager"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/akglobal/categories/lifting-equipment.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                
                {/* Image Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#A21A8D] block">
                    Certified Hardware Supply
                  </span>
                  <p className="text-xs text-white/90 font-medium">
                    Verified specification & cross-border freight coordination
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CAPABILITY INDEX: 4 Elegant Minimal Text Links */}
      <section className="border-b border-[#D9DBDE] dark:border-[#25282E] bg-white dark:bg-[#14161C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#D9DBDE] dark:divide-[#25282E]">
            {/* Capability 1: Lifting */}
            <button
              onClick={() => handleNav('products-lifting')}
              className="p-8 text-left group hover:bg-[#F7F7F5] dark:hover:bg-[#1A1D24] transition-colors cursor-pointer flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono text-[#666B73] dark:text-[#A0A5AD] group-hover:text-[#A21A8D] transition-colors block mb-2">
                  01 / INDEX
                </span>
                <h3 className="text-lg font-serif text-[#111318] dark:text-white group-hover:text-[#A21A8D] transition-colors">
                  {t.categories.lifting.title}
                </h3>
                <p className="text-xs text-[#666B73] dark:text-[#A0A5AD] mt-2 line-clamp-2">
                  {t.categories.lifting.shortDesc}
                </p>
              </div>
              <div className="pt-6 flex items-center justify-between text-xs font-semibold tracking-wider text-[#111318] dark:text-[#F7F7F5]">
                <span>{t.common.learnMore}</span>
                <ArrowUpRight className="w-4 h-4 text-[#666B73] dark:text-[#A0A5AD] group-hover:text-[#A21A8D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </button>

            {/* Capability 2: Fasteners */}
            <button
              onClick={() => handleNav('products-fasteners')}
              className="p-8 text-left group hover:bg-[#F7F7F5] dark:hover:bg-[#1A1D24] transition-colors cursor-pointer flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono text-[#666B73] dark:text-[#A0A5AD] group-hover:text-[#A21A8D] transition-colors block mb-2">
                  02 / INDEX
                </span>
                <h3 className="text-lg font-serif text-[#111318] dark:text-white group-hover:text-[#A21A8D] transition-colors">
                  {t.categories.fasteners.title}
                </h3>
                <p className="text-xs text-[#666B73] dark:text-[#A0A5AD] mt-2 line-clamp-2">
                  {t.categories.fasteners.shortDesc}
                </p>
              </div>
              <div className="pt-6 flex items-center justify-between text-xs font-semibold tracking-wider text-[#111318] dark:text-[#F7F7F5]">
                <span>{t.common.learnMore}</span>
                <ArrowUpRight className="w-4 h-4 text-[#666B73] dark:text-[#A0A5AD] group-hover:text-[#A21A8D] group-hover:-translate-y-0.5 transition-all" />
              </div>
            </button>

            {/* Capability 3: Industrial Hardware */}
            <button
              onClick={() => handleNav('products-hardware')}
              className="p-8 text-left group hover:bg-[#F7F7F5] dark:hover:bg-[#1A1D24] transition-colors cursor-pointer flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono text-[#666B73] dark:text-[#A0A5AD] group-hover:text-[#A21A8D] transition-colors block mb-2">
                  03 / INDEX
                </span>
                <h3 className="text-lg font-serif text-[#111318] dark:text-white group-hover:text-[#A21A8D] transition-colors">
                  {t.categories.hardware.title}
                </h3>
                <p className="text-xs text-[#666B73] dark:text-[#A0A5AD] mt-2 line-clamp-2">
                  {t.categories.hardware.shortDesc}
                </p>
              </div>
              <div className="pt-6 flex items-center justify-between text-xs font-semibold tracking-wider text-[#111318] dark:text-[#F7F7F5]">
                <span>{t.common.learnMore}</span>
                <ArrowUpRight className="w-4 h-4 text-[#666B73] dark:text-[#A0A5AD] group-hover:text-[#A21A8D] group-hover:-translate-y-0.5 transition-all" />
              </div>
            </button>

            {/* Capability 4: Procurement */}
            <button
              onClick={() => handleNav('procurement')}
              className="p-8 text-left group hover:bg-[#F7F7F5] dark:hover:bg-[#1A1D24] transition-colors cursor-pointer flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono text-[#666B73] dark:text-[#A0A5AD] group-hover:text-[#A21A8D] transition-colors block mb-2">
                  04 / INDEX
                </span>
                <h3 className="text-lg font-serif text-[#111318] dark:text-white group-hover:text-[#A21A8D] transition-colors">
                  {t.categories.procurement.title}
                </h3>
                <p className="text-xs text-[#666B73] dark:text-[#A0A5AD] mt-2 line-clamp-2">
                  {t.categories.procurement.shortDesc}
                </p>
              </div>
              <div className="pt-6 flex items-center justify-between text-xs font-semibold tracking-wider text-[#111318] dark:text-[#F7F7F5]">
                <span>{t.common.learnMore}</span>
                <ArrowUpRight className="w-4 h-4 text-[#666B73] dark:text-[#A0A5AD] group-hover:text-[#A21A8D] group-hover:-translate-y-0.5 transition-all" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* 3. SOUTH AFRICA → DRC STATEMENT: Clear Geographic Discipline */}
      <section className="py-20 lg:py-28 border-b border-[#D9DBDE] dark:border-[#25282E] relative bg-[#F7F7F5] dark:bg-[#111318]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Focal Architectural / Cross-border image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden rounded-xs border border-[#D9DBDE] dark:border-[#25282E]">
                <img
                  src="/assets/akglobal/support/cross-border-bridge.jpg"
                  alt="Cross-border freight and industrial corridor"
                  className="w-full h-full object-cover grayscale contrast-110 hover:scale-[1.015] transition-transform duration-700 ease-out"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/akglobal/support/corporate-architecture.jpg';
                  }}
                />
                <div className="absolute bottom-3 left-3 bg-black/80 px-3 py-1 text-[10px] font-mono tracking-widest text-white uppercase">
                  Logistics & Sourcing Channel
                </div>
              </div>
            </div>

            {/* Statement Text */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2 lg:pl-6">
              <div className="inline-flex items-center space-x-2">
                <span className="w-6 h-[1px] bg-[#A21A8D]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#666B73] dark:text-[#A0A5AD]">
                  {t.homepage.corridorLabel}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif text-[#111318] dark:text-white font-normal leading-tight">
                {t.homepage.corridorTitle}
              </h2>

              <p className="text-base text-[#25282E] dark:text-[#D9DBDE] leading-relaxed">
                {t.homepage.corridorDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#D9DBDE] dark:border-[#25282E]">
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#111318] dark:text-white">
                    {t.homepage.saBaseTitle}
                  </h4>
                  <p className="text-xs text-[#666B73] dark:text-[#A0A5AD] leading-relaxed">
                    {t.homepage.saBaseDesc}
                  </p>
                </div>

                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#111318] dark:text-white">
                    {t.homepage.drcReachTitle}
                  </h4>
                  <p className="text-xs text-[#666B73] dark:text-[#A0A5AD] leading-relaxed">
                    {t.homepage.drcReachDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SELECTED SUPPLY AREAS: Two Strong Image / Text Compositions */}
      <section className="py-20 lg:py-28 border-b border-[#D9DBDE] dark:border-[#25282E] bg-white dark:bg-[#14161C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="max-w-2xl mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A21A8D] block mb-2">
              {t.homepage.selectedSupplyTitle}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#111318] dark:text-white font-normal">
              {t.homepage.selectedSupplySubtitle}
            </h2>
          </div>

          {/* Composition 1: Lifting Hardware */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-20 border-b border-[#D9DBDE] dark:border-[#25282E]">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-[10px] font-mono tracking-widest text-[#A21A8D] uppercase">
                Category 01 / Material Handling
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#111318] dark:text-white">
                {t.categories.lifting.title}
              </h3>
              <p className="text-sm text-[#666B73] dark:text-[#A0A5AD] leading-relaxed">
                {t.categories.lifting.longDesc}
              </p>
              
              <ul className="space-y-2 text-xs text-[#25282E] dark:text-[#D9DBDE] pt-2">
                {t.categories.lifting.items.slice(0, 4).map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#A21A8D]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-3">
                <button
                  onClick={() => handleNav('products-lifting')}
                  className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#111318] dark:text-white hover:text-[#A21A8D] dark:hover:text-[#A21A8D] group cursor-pointer"
                >
                  <span>{t.common.viewCategory}</span>
                  <ArrowRight className="w-4 h-4 text-[#A21A8D] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xs border border-[#D9DBDE] dark:border-[#25282E] bg-[#25282E]">
                <img
                  src="/assets/akglobal/categories/lifting-equipment.jpg"
                  alt="Industrial grade lifting and rigging chain blocks"
                  className="w-full h-full object-cover grayscale contrast-110 hover:scale-[1.015] transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Composition 2: Fasteners & Structural Bolting */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-20">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xs border border-[#D9DBDE] dark:border-[#25282E] bg-[#25282E]">
                <img
                  src="/assets/akglobal/support/fasteners-detail.jpg"
                  alt="High-tensile Grade 8.8 and 10.9 industrial fasteners and bolts"
                  className="w-full h-full object-cover grayscale contrast-110 hover:scale-[1.015] transition-transform duration-700 ease-out"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/akglobal/categories/fasteners-bolting.jpg';
                  }}
                />
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
              <span className="text-[10px] font-mono tracking-widest text-[#A21A8D] uppercase">
                Category 02 / Structural Joining
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#111318] dark:text-white">
                {t.categories.fasteners.title}
              </h3>
              <p className="text-sm text-[#666B73] dark:text-[#A0A5AD] leading-relaxed">
                {t.categories.fasteners.longDesc}
              </p>

              <ul className="space-y-2 text-xs text-[#25282E] dark:text-[#D9DBDE] pt-2">
                {t.categories.fasteners.items.slice(0, 4).map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#A21A8D]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-3">
                <button
                  onClick={() => handleNav('products-fasteners')}
                  className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#111318] dark:text-white hover:text-[#A21A8D] dark:hover:text-[#A21A8D] group cursor-pointer"
                >
                  <span>{t.common.viewCategory}</span>
                  <ArrowRight className="w-4 h-4 text-[#A21A8D] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROCUREMENT: ONE CLEAN STATEMENT */}
      <section className="py-20 lg:py-24 border-b border-[#D9DBDE] dark:border-[#25282E] bg-[#F7F7F5] dark:bg-[#111318]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#A21A8D]">
            {t.categories.procurement.title}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#111318] dark:text-white font-normal leading-snug">
            "{t.homepage.procurementQuote}"
          </h2>
          <p className="text-sm sm:text-base text-[#666B73] dark:text-[#A0A5AD] max-w-2xl mx-auto leading-relaxed">
            {t.homepage.procurementExplanation}
          </p>

          <div className="pt-4 flex justify-center">
            <button
              onClick={() => handleNav('procurement')}
              className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#111318] dark:text-white border-b-2 border-[#111318] dark:border-white pb-1 hover:text-[#A21A8D] hover:border-[#A21A8D] transition-colors cursor-pointer"
            >
              <span>{t.homepage.howProcurementWorks}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. MINIMAL RFQ CTA STRIP */}
      <section className="py-16 bg-[#0D0F13] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#A21A8D]">
              Direct Quotation Channel
            </span>
            <h3 className="text-2xl font-serif">
              {t.homepage.ctaTitle}
            </h3>
            <p className="text-xs text-[#D9DBDE]/70">
              {t.homepage.ctaSubtitle}
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => handleNav('rfq')}
              className="inline-flex items-center space-x-2 bg-[#A21A8D] hover:bg-[#8d167b] text-white px-7 py-3.5 rounded-xs text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer shadow-sm group"
            >
              <span>{t.nav.rfq}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="inline-flex items-center space-x-2 border border-white/20 hover:border-white/50 text-white px-6 py-3.5 rounded-xs text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer"
            >
              <span>{t.nav.contact}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
