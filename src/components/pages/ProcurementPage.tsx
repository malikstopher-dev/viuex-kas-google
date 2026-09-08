import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, FileCheck, Search, Truck, Layers, CheckCircle2 } from 'lucide-react';

export const ProcurementPage: React.FC = () => {
  const { t, navigate } = useLanguage();

  return (
    <div className="bg-[#F7F7F5] text-[#111318]">
      {/* Header Banner */}
      <section className="border-b border-[#D9DBDE] bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A21A8D] block">
              {t.procurement.headerBadge}
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-normal text-[#111318] leading-tight">
              {t.procurement.headerTitle}
            </h1>
            <p className="text-base text-[#666B73] leading-relaxed">
              {t.procurement.headerLead}
            </p>
          </div>
        </div>
      </section>

      {/* Sourcing Narrative & Image */}
      <section className="py-16 lg:py-24 border-b border-[#D9DBDE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-serif text-[#111318]">
                {t.procurement.channelTitle}
              </h2>
              <p className="text-sm sm:text-base text-[#25282E] leading-relaxed">
                {t.procurement.channelDesc1}
              </p>
              <p className="text-sm text-[#666B73] leading-relaxed">
                {t.procurement.channelDesc2}
              </p>

              <div className="border-l-2 border-[#A21A8D] pl-4 py-1">
                <p className="text-xs font-semibold text-[#111318] uppercase tracking-wide">
                  {t.procurement.sourcingPledge}
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-xs overflow-hidden border border-[#D9DBDE] bg-[#25282E]">
                <img
                  src="/assets/akglobal/categories/procurement-sourcing.jpg"
                  alt="Industrial procurement and consolidation warehouse"
                  className="w-full h-full object-cover grayscale contrast-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                  <span className="text-[#A21A8D] font-mono text-[10px] uppercase block tracking-widest">
                    Consolidated Supply
                  </span>
                  <p className="font-medium text-white/90">
                    Comprehensive Bill of Materials (BOM) consolidation and export staging
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Process: How Procurement Operates */}
      <section className="py-16 lg:py-24 border-b border-[#D9DBDE] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A21A8D] block mb-2">
              Operational Workflow
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#111318]">
              {t.procurement.stepsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="border border-[#D9DBDE] p-6 rounded-xs bg-[#F7F7F5] flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] font-mono font-bold text-[#A21A8D] block">
                  STEP 01
                </span>
                <h3 className="text-base font-serif text-[#111318]">
                  {t.procurement.step1Title}
                </h3>
                <p className="text-xs text-[#666B73] leading-relaxed">
                  {t.procurement.step1Desc}
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="border border-[#D9DBDE] p-6 rounded-xs bg-[#F7F7F5] flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] font-mono font-bold text-[#A21A8D] block">
                  STEP 02
                </span>
                <h3 className="text-base font-serif text-[#111318]">
                  {t.procurement.step2Title}
                </h3>
                <p className="text-xs text-[#666B73] leading-relaxed">
                  {t.procurement.step2Desc}
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="border border-[#D9DBDE] p-6 rounded-xs bg-[#F7F7F5] flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] font-mono font-bold text-[#A21A8D] block">
                  STEP 03
                </span>
                <h3 className="text-base font-serif text-[#111318]">
                  {t.procurement.step3Title}
                </h3>
                <p className="text-xs text-[#666B73] leading-relaxed">
                  {t.procurement.step3Desc}
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="border border-[#D9DBDE] p-6 rounded-xs bg-[#F7F7F5] flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] font-mono font-bold text-[#A21A8D] block">
                  STEP 04
                </span>
                <h3 className="text-base font-serif text-[#111318]">
                  {t.procurement.step4Title}
                </h3>
                <p className="text-xs text-[#666B73] leading-relaxed">
                  {t.procurement.step4Desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 bg-[#111318] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <h3 className="text-2xl font-serif">
              {t.procurement.readyTitle}
            </h3>
            <p className="text-xs text-[#D9DBDE]/70">
              {t.procurement.readySubtitle}
            </p>
          </div>

          <button
            onClick={() => navigate('rfq')}
            className="inline-flex items-center space-x-2 bg-white text-[#111318] hover:bg-[#F7F7F5] px-7 py-3.5 rounded-xs text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer group shrink-0"
          >
            <span>{t.nav.rfq}</span>
            <ArrowRight className="w-4 h-4 text-[#A21A8D] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};
