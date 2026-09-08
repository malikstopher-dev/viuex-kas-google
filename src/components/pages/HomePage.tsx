import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, ArrowUpRight, MapPin, ShieldCheck, Check } from 'lucide-react';
import { RouteId } from '../../types';

export const HomePage: React.FC = () => {
  const { language, t, navigate } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleNav = (routeId: RouteId) => {
    navigate(routeId);
  };

  const capabilities = [
    {
      index: '01',
      title: language === 'fr' ? 'ÉQUIPEMENTS DE LEVAGE' : 'LIFTING EQUIPMENT',
      desc:
        language === 'fr'
          ? 'Palans manuels à chaîne, palans à levier, élingues Grade 80 & accessoires de gréage pour mines et ateliers.'
          : 'Manual chain blocks, lever hoists, Grade 80 alloy chain slings, and forged rigging accessories for mining and engineering.',
      route: 'products-lifting' as RouteId,
      previewImg: '/assets/akglobal/categories/lifting-equipment.jpg',
    },
    {
      index: '02',
      title: language === 'fr' ? 'FIXATIONS & BOULONNERIE' : 'FASTENERS & BOLTING',
      desc:
        language === 'fr'
          ? 'Boulonnerie hexagonale haute résistance Grade 8.8, tiges filetées continues, écrous et rondelles zingués ou galvanisés.'
          : 'Grade 8.8 high-tensile hexagon bolts, continuous threaded rods, heavy duty nuts, and galvanised fastening systems.',
      route: 'products-fasteners' as RouteId,
      previewImg: '/assets/akglobal/categories/fasteners-bolting.jpg',
    },
    {
      index: '03',
      title: language === 'fr' ? 'FOURNITURES INDUSTRIELLES' : 'INDUSTRIAL HARDWARE',
      desc:
        language === 'fr'
          ? 'Consommables d’atelier, outillage mécanique, profilés acier et quincaillerie de maintenance préventive.'
          : 'Workshop consumables, mechanical tooling, structural steel profiles, and routine maintenance hardware.',
      route: 'products-hardware' as RouteId,
      previewImg: '/assets/akglobal/categories/industrial-hardware.jpg',
    },
    {
      index: '04',
      title: language === 'fr' ? 'APPROVISIONNEMENT INDUSTRIEL' : 'INDUSTRIAL PROCUREMENT',
      desc:
        language === 'fr'
          ? 'Sourcing consolidé sur nomenclatures (BOQ), pièces de rechange techniques et emballages d’exportation.'
          : 'Consolidated Bill of Quantities (BOQ) sourcing, specialised spare parts cross-referencing, and export dispatch.',
      route: 'procurement' as RouteId,
      previewImg: '/assets/akglobal/categories/procurement-sourcing.jpg',
    },
  ];

  const procurementSteps = [
    {
      num: '01',
      title: language === 'fr' ? 'ENVOYEZ VOTRE DEMANDE' : 'SEND REQUIREMENT',
      body:
        language === 'fr'
          ? 'Transmettez votre nomenclature, fiche technique ou liste de pièces avec les spécifications et quantités requises.'
          : 'Submit your parts list, technical bill of materials, or drawing with target quantities and required material grades.',
    },
    {
      num: '02',
      title: language === 'fr' ? 'NOUS ÉVALUONS LE SOURCING' : 'WE ASSESS SOURCING',
      body:
        language === 'fr'
          ? 'Notre bureau commercial en Afrique du Sud vérifie la disponibilité, la conformité technique et les délais.'
          : 'Our commercial desk in South Africa verifies supplier availability, technical conformity, and lead times.',
    },
    {
      num: '03',
      title: language === 'fr' ? 'RECEVEZ VOTRE DEVIS' : 'RECEIVE QUOTATION',
      body:
        language === 'fr'
          ? 'Vous recevez une cotation formelle détaillée avec conditions commerciales transparentes et délais fermes.'
          : 'You receive an itemized, formal commercial quotation outlining pricing, packaging, and expected delivery dates.',
    },
    {
      num: '04',
      title: language === 'fr' ? 'FOURNITURE ORGANISÉE' : 'SUPPLY ARRANGED',
      body:
        language === 'fr'
          ? 'Conditionnement d’exportation soigné et coordination vers vos sites opérationnels ou transitaires désignés.'
          : 'Materials are securely packed to export standards and coordinated directly to your operational facility or freight forwarder.',
    },
  ];

  return (
    <div className="bg-[#F3F2EE] text-[#111318]">
      {/* 01 / HERO: Editorial Split-Screen Hero */}
      <section className="border-b border-[#D8D8D5] bg-[#F3F2EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Editorial Text Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6 lg:pr-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-[#A21A8D]" />
                <span className="text-[11px] font-mono font-semibold tracking-[0.2em] text-[#71747A] uppercase">
                  {t.homepage.heroBadge}
                </span>
              </div>

              {/* Large Editorial Headline in Refined Serif */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#111318] font-normal leading-[1.12] tracking-tight uppercase">
                {language === 'fr' ? (
                  <>
                    FOURNITURE<br />
                    INDUSTRIELLE.<br />
                    CONÇUE SELON<br />
                    VOS EXIGENCES.
                  </>
                ) : (
                  <>
                    INDUSTRIAL<br />
                    SUPPLY.<br />
                    BUILT AROUND<br />
                    YOUR REQUIREMENT.
                  </>
                )}
              </h1>

              {/* ONE Concise Paragraph */}
              <p className="text-base text-[#71747A] leading-relaxed max-w-xl">
                {t.homepage.heroSubtitle}
              </p>

              {/* Primary CTA + Secondary Link */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleNav('rfq')}
                  className="inline-flex items-center space-x-3 bg-[#111318] hover:bg-[#25282E] active:bg-black text-white px-7 py-3.5 rounded-[2px] text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer border border-[#111318] group"
                >
                  <span>{t.homepage.heroCta}</span>
                  <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => handleNav('products')}
                  className="inline-flex items-center space-x-2 border border-[#D8D8D5] bg-[#FFFFFF] text-[#111318] hover:border-[#111318] px-6 py-3.5 rounded-[2px] text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer"
                >
                  <span>{t.homepage.exploreProducts}</span>
                </button>
              </div>

              {/* Location micro-tag */}
              <div className="pt-6 border-t border-[#D8D8D5] flex items-center space-x-2 text-xs font-mono text-[#71747A]">
                <MapPin className="w-3.5 h-3.5 text-[#A21A8D]" />
                <span className="tracking-wider uppercase">
                  {language === 'fr' ? 'FOURWAYS • SANDTON • AFRIQUE DU SUD' : 'FOURWAYS • SANDTON • SOUTH AFRICA'}
                </span>
              </div>
            </div>

            {/* Right Focal Industrial Image Column (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] border border-[#D8D8D5] bg-[#FFFFFF]">
                <img
                  src="/assets/akglobal/hero/hero-minimal-light-hook.jpg"
                  alt="Industrial lifting equipment and precision hardware"
                  className="w-full h-full object-cover grayscale contrast-110 hover:scale-[1.015] transition-transform duration-700 ease-out"
                  loading="eager"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/akglobal/hero/hero-lifting-hook.jpg';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 / CAPABILITIES: Executive Capability Index */}
      <section className="border-b border-[#D8D8D5] bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 lg:py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#D8D8D5] gap-4">
            <div>
              <span className="text-[11px] font-mono font-semibold tracking-[0.2em] text-[#A21A8D] uppercase block mb-1">
                {language === 'fr' ? 'INDEX DES COMPÉTENCES' : 'CAPABILITY INDEX'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#111318] font-normal">
                {language === 'fr' ? 'Domaines d’Approvisionnement' : 'Core Supply Capabilities'}
              </h2>
            </div>
            <p className="text-xs text-[#71747A] max-w-sm">
              {language === 'fr'
                ? 'Sélectionnez une discipline technique pour consulter les spécifications et ajouter des articles à votre devis.'
                : 'Select a technical discipline to review specifications and submit requirements directly into your quotation.'}
            </p>
          </div>

          {/* Full-width index rows */}
          <div className="divide-y divide-[#D8D8D5] border-t border-[#D8D8D5]">
            {capabilities.map((cap, idx) => (
              <button
                key={cap.index}
                onClick={() => handleNav(cap.route)}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="w-full py-6 px-3 sm:px-4 text-left group hover:bg-[#F3F2EE]/70 transition-colors cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                {/* Number & Title */}
                <div className="flex items-baseline space-x-6 sm:space-x-8 md:w-5/12">
                  <span className="font-mono text-xs font-bold text-[#A21A8D] tracking-wider">
                    {cap.index}
                  </span>
                  <h3 className="text-lg sm:text-xl font-sans font-semibold tracking-tight text-[#111318] group-hover:text-[#A21A8D] transition-colors">
                    {cap.title}
                  </h3>
                </div>

                {/* Short Technical Description */}
                <div className="md:w-6/12 pl-12 md:pl-0">
                  <p className="text-xs sm:text-sm text-[#71747A] leading-relaxed">
                    {cap.desc}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="md:w-1/12 flex justify-end pl-12 md:pl-0">
                  <span className="inline-flex items-center text-[#111318] group-hover:text-[#A21A8D] transition-colors">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 03 / SOUTH AFRICA → DRC: Signature Corporate Section */}
      <section className="border-b border-[#D8D8D5] bg-[#F3F2EE] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Typographic / Geographic Composition */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="text-[11px] font-mono font-semibold tracking-[0.2em] text-[#A21A8D] uppercase block mb-3">
                  {language === 'fr' ? 'DISCIPLINE GÉOGRAPHIQUE' : 'GEOGRAPHIC SCOPE'}
                </span>

                {/* Typographic Route Representation */}
                <div className="space-y-1 font-serif text-2xl sm:text-3xl text-[#111318] tracking-tight pb-6 border-b border-[#D8D8D5]">
                  <div className="font-medium tracking-wide">SOUTH AFRICA</div>
                  <div className="text-[#A21A8D] font-mono text-xl pl-6">↘</div>
                  <div className="text-[#A21A8D] font-mono text-xl pl-12">↘</div>
                  <div className="font-medium tracking-wide pl-16">DEMOCRATIC REPUBLIC OF THE CONGO</div>
                </div>
              </div>

              {/* Supporting Copy */}
              <div className="space-y-4">
                <p className="text-base sm:text-lg font-serif text-[#111318] leading-snug">
                  {language === 'fr'
                    ? 'Basée en Afrique du Sud. Au service des besoins industriels en Afrique du Sud et en République démocratique du Congo.'
                    : 'Based in South Africa. Serving industrial requirements in South Africa and the Democratic Republic of the Congo.'}
                </p>
                <p className="text-xs sm:text-sm text-[#71747A] leading-relaxed">
                  {language === 'fr'
                    ? 'AKGLOBAL assure la jonction directe entre les pôles manufacturiers et de distribution de Sandton et les exploitations minières et industrielles de la région.'
                    : 'AKGLOBAL connects corporate clients directly to established South African manufacturing inventories, structuring sourcing, packing, and cross-border commercial freight forwarding.'}
                </p>
              </div>

              {/* Two Precise Structural Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#D8D8D5]">
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#111318]">
                    {language === 'fr' ? 'Base de Sourcing' : 'Sourcing Base'}
                  </h4>
                  <p className="text-xs text-[#71747A] leading-relaxed">
                    Fourways, Sandton, South Africa. Access to mature engineering distributors.
                  </p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#111318]">
                    {language === 'fr' ? 'Coordination Fret' : 'Freight Coordination'}
                  </h4>
                  <p className="text-xs text-[#71747A] leading-relaxed">
                    Consolidated dispatch to client-appointed forwarders and cross-border corridors.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Architectural Corridor Photograph */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] border border-[#D8D8D5] bg-[#FFFFFF]">
                <img
                  src="/assets/akglobal/support/cross-border-bridge.jpg"
                  alt="Industrial transit infrastructure and cross-border supply corridor"
                  className="w-full h-full object-cover grayscale contrast-110 hover:scale-[1.015] transition-transform duration-700 ease-out"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/akglobal/support/corporate-architecture.jpg';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 / SELECTED SUPPLY: Alternating Editorial Rows */}
      <section className="border-b border-[#D8D8D5] bg-[#FFFFFF] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-14">
            <span className="text-[11px] font-mono font-semibold tracking-[0.2em] text-[#A21A8D] uppercase block mb-2">
              {language === 'fr' ? 'SÉLECTION PRODUITS' : 'SELECTED SUPPLY'}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#111318] font-normal">
              {t.homepage.selectedSupplySubtitle}
            </h2>
          </div>

          <div className="space-y-16 lg:space-y-20">
            {/* Row 1: Large Image Left + Text Right (Lifting Equipment) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-16 border-b border-[#D8D8D5]">
              <div className="lg:col-span-6">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2px] border border-[#D8D8D5] bg-[#F3F2EE]">
                  <img
                    src="/assets/akglobal/categories/lifting-equipment.jpg"
                    alt="Industrial manual chain blocks and hoisting equipment"
                    className="w-full h-full object-cover grayscale contrast-110 hover:scale-[1.015] transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <span className="text-[10px] font-mono tracking-widest text-[#A21A8D] uppercase">
                  01 / MATERIAL HANDLING
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#111318]">
                  {t.categories.lifting.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#71747A] leading-relaxed">
                  {t.categories.lifting.shortDesc}
                </p>

                <ul className="space-y-2 text-xs text-[#111318] pt-2">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#A21A8D]" />
                    <span>Manual Chain Blocks (0.5T to 20T capacity)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#A21A8D]" />
                    <span>High-Tensile Grade 80 & 100 Lifting Chain Slings</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#A21A8D]" />
                    <span>Forged Alloy Steel Bow & Dee Rigging Shackles</span>
                  </li>
                </ul>

                <div className="pt-3">
                  <button
                    onClick={() => handleNav('products-lifting')}
                    className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#111318] hover:text-[#A21A8D] group cursor-pointer border-b border-[#111318] pb-1 hover:border-[#A21A8D] transition-colors"
                  >
                    <span>{t.common.viewCategory}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Row 2: Text Left + Large Image Right (Fasteners & Bolting) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-16 border-b border-[#D8D8D5]">
              <div className="lg:col-span-6 order-2 lg:order-1 space-y-4">
                <span className="text-[10px] font-mono tracking-widest text-[#A21A8D] uppercase">
                  02 / STRUCTURAL JOINING
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#111318]">
                  {t.categories.fasteners.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#71747A] leading-relaxed">
                  {t.categories.fasteners.shortDesc}
                </p>

                <ul className="space-y-2 text-xs text-[#111318] pt-2">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#A21A8D]" />
                    <span>Grade 8.8 High-Tensile Hexagon Head Structural Bolts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#A21A8D]" />
                    <span>Continuous Threaded Rods (1m, 2m, 3m lengths)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#A21A8D]" />
                    <span>Hot-Dip Galvanised (HDG) & Electro-Galvanised Finishes</span>
                  </li>
                </ul>

                <div className="pt-3">
                  <button
                    onClick={() => handleNav('products-fasteners')}
                    className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#111318] hover:text-[#A21A8D] group cursor-pointer border-b border-[#111318] pb-1 hover:border-[#A21A8D] transition-colors"
                  >
                    <span>{t.common.viewCategory}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2px] border border-[#D8D8D5] bg-[#F3F2EE]">
                  <img
                    src="/assets/akglobal/categories/fasteners-bolting.jpg"
                    alt="High-tensile Grade 8.8 fasteners and threaded rods"
                    className="w-full h-full object-cover grayscale contrast-110 hover:scale-[1.015] transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Row 3: Large Image Left + Text Right (Industrial Hardware) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2px] border border-[#D8D8D5] bg-[#F3F2EE]">
                  <img
                    src="/assets/akglobal/categories/industrial-hardware.jpg"
                    alt="Industrial hardware, consumables and maintenance stock"
                    className="w-full h-full object-cover grayscale contrast-110 hover:scale-[1.015] transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <span className="text-[10px] font-mono tracking-widest text-[#A21A8D] uppercase">
                  03 / MAINTENANCE & CONSUMABLES
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#111318]">
                  {t.categories.hardware.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#71747A] leading-relaxed">
                  {t.categories.hardware.shortDesc}
                </p>

                <ul className="space-y-2 text-xs text-[#111318] pt-2">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#A21A8D]" />
                    <span>Milled Structural Steel Profiles & Channels</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#A21A8D]" />
                    <span>Piping Flanges & High-Pressure Gaskets</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#A21A8D]" />
                    <span>Heavy Industrial Bearings & Workshop Maintenance Stock</span>
                  </li>
                </ul>

                <div className="pt-3">
                  <button
                    onClick={() => handleNav('products-hardware')}
                    className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#111318] hover:text-[#A21A8D] group cursor-pointer border-b border-[#111318] pb-1 hover:border-[#A21A8D] transition-colors"
                  >
                    <span>{t.common.viewCategory}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 / PROCUREMENT PROCESS: 4 Clean Steps */}
      <section className="border-b border-[#D8D8D5] bg-[#F3F2EE] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-mono font-semibold tracking-[0.2em] text-[#A21A8D] uppercase block mb-2">
              {language === 'fr' ? 'MÉTHODOLOGIE' : 'METHODOLOGY'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#111318] font-normal">
              {t.homepage.howProcurementWorks}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-[#D8D8D5] divide-y sm:divide-y-0 sm:divide-x divide-[#D8D8D5]">
            {procurementSteps.map((step) => (
              <div key={step.num} className="py-8 sm:px-6 first:pl-0 last:pr-0 space-y-3">
                <span className="font-mono text-xs font-bold text-[#A21A8D] tracking-wider block">
                  {step.num}
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#111318]">
                  {step.title}
                </h3>
                <p className="text-xs text-[#71747A] leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 / RFQ: Final Homepage CTA (Deep Graphite Band for 25-30% dark balance) */}
      <section className="bg-[#111318] text-white py-16 lg:py-20 border-b border-[#25282E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <div className="max-w-2xl space-y-3">
            <span className="text-[11px] font-mono font-semibold tracking-[0.2em] text-[#A21A8D] uppercase block">
              {language === 'fr' ? 'DEVIS FORMEL DIRECT' : 'DIRECT COMMERCIAL DESK'}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal leading-snug">
              {t.homepage.ctaTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#D8D8D5]/80 leading-relaxed">
              {t.homepage.ctaSubtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => handleNav('rfq')}
              className="inline-flex items-center space-x-3 bg-[#A21A8D] hover:bg-[#871375] text-white px-8 py-4 rounded-[2px] text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer border border-[#A21A8D] group"
            >
              <span>{t.homepage.heroCta}</span>
              <ArrowRight className="w-4 h-4 text-white/90 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => handleNav('contact')}
              className="inline-flex items-center space-x-2 border border-[#D8D8D5]/30 hover:border-white text-white px-6 py-4 rounded-[2px] text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer"
            >
              <span>{language === 'fr' ? 'Contacter l’équipe' : 'Contact Commercial Desk'}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

