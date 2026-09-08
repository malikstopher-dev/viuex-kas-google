import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, Hammer, Building, Wrench, Truck, Factory } from 'lucide-react';

export const IndustriesPage: React.FC = () => {
  const { language, t, navigate } = useLanguage();

  const industries = [
    {
      id: 'mining',
      titleEn: 'Mining & Mineral Processing',
      titleFr: 'Mines & Traitement Minéral',
      descEn: 'Heavy lifting equipment, Grade 80/100 chain assemblies, high-tensile structural bolts for crushers, wash plants, and pit maintenance in the Katanga copper belt and South African operations.',
      descFr: 'Matériel de levage lourd, élingues chaîne Grade 80/100, boulonnerie haute résistance pour concasseurs, laveries et maintenance de fosse dans la ceinture de cuivre du Katanga et en Afrique du Sud.',
      icon: Factory,
    },
    {
      id: 'construction',
      titleEn: 'Construction & Civil Infrastructure',
      titleFr: 'Construction & Génie Civil',
      descEn: 'Continuous threaded rods, foundation anchor assemblies, structural bolt sets (EN 14399 / ASTM A325) for bridge structures, industrial sheds, and civil projects.',
      descFr: 'Tiges filetées, tirants d’ancrage béton, ensembles de boulons de structure pour ouvrages d’art, charpentes industrielles et chantiers civils.',
      icon: Building,
    },
    {
      id: 'fabrication',
      titleEn: 'Steel Fabrication & Heavy Engineering',
      titleFr: 'Chaudronnerie & Construction Métallique',
      descEn: 'Workshop magnetic base drills, industrial grinding and cutting consumables, manual chain blocks, and industrial rigging hardware for heavy steel assembly shops.',
      descFr: 'Perceuses magnétiques d’atelier, abrasifs et consommables industriels, palans à chaîne et matériel de gréage industriel pour ateliers de chaudronnerie lourde.',
      icon: Hammer,
    },
    {
      id: 'maintenance',
      titleEn: 'Industrial Maintenance & Plant MRO',
      titleFr: 'Maintenance Industrielle & MRO d’Usine',
      descEn: 'General mechanical supplies, slugging wrenches, hydraulic pullers, specialized fasteners, and replacement hardware for scheduled plant turnarounds and shutdowns.',
      descFr: 'Fournitures mécaniques générales, clés à frapper, extracteurs hydrauliques, visserie spécifique et pièces de rechange pour arrêts techniques planifiés.',
      icon: Wrench,
    },
    {
      id: 'logistics',
      titleEn: 'Transport, Logistics & Freight Yards',
      titleFr: 'Transport, Logistique & Dépôts de Fret',
      descEn: 'Heavy-duty lever hoists, ratchet tie-downs, high-tensile bow shackles, and load-securing hardware for cross-border trucking corridors and freight handling.',
      descFr: 'Palans à levier, sangles d’arrimage haute résistance, manilles lyre et accessoires de fixation pour corridors routiers transfrontaliers.',
      icon: Truck,
    },
  ];

  return (
    <div className="bg-[#0E1015] text-[#D9DBDE]">
      {/* Header Banner */}
      <section className="border-b border-[#25282E] bg-[#111318] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A21A8D] block">
              {t.industries.headerBadge}
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-normal text-white leading-tight">
              {t.industries.headerTitle}
            </h1>
            <p className="text-base text-[#A0A5AD] leading-relaxed">
              {t.industries.headerLead}
            </p>
          </div>
        </div>
      </section>

      {/* Industry Sector Cards */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind) => {
            const Icon = ind.icon;
            const title = language === 'fr' ? ind.titleFr : ind.titleEn;
            const desc = language === 'fr' ? ind.descFr : ind.descEn;

            return (
              <div
                key={ind.id}
                className="bg-[#14161C] border border-[#25282E] p-8 rounded-[2px] flex flex-col justify-between hover:border-white/30 transition-colors"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-[#0E1015] border border-[#25282E] text-[#A21A8D] rounded-[2px] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-serif text-white">
                    {title}
                  </h3>
                  <p className="text-xs text-[#A0A5AD] leading-relaxed">
                    {desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#25282E] mt-6">
                  <button
                    onClick={() => navigate('rfq')}
                    className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#A21A8D] hover:text-white group cursor-pointer transition-colors"
                  >
                    <span>{t.nav.rfq}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#111318] text-white border-t border-[#25282E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <h3 className="text-2xl font-serif">
              {t.industries.customIndustryTitle}
            </h3>
            <p className="text-xs text-[#A0A5AD]">
              {t.industries.customIndustryDesc}
            </p>
          </div>

          <button
            onClick={() => navigate('rfq')}
            className="inline-flex items-center space-x-2 bg-[#A21A8D] hover:bg-[#871375] text-white px-7 py-3.5 rounded-[2px] text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer shrink-0"
          >
            <span>{t.nav.rfq}</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </section>
    </div>
  );
};
