import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useRfq } from '../../context/RfqContext';
import { Plus, Check, ArrowRight, Shield, FileText } from 'lucide-react';
import { RouteId } from '../../types';

interface ProductItem {
  id: string;
  nameEn: string;
  nameFr: string;
  category: 'lifting' | 'fasteners' | 'hardware';
  specEn: string;
  specFr: string;
  standards: string;
  capacitiesEn: string;
  capacitiesFr: string;
  image: string;
}

const productDatabase: ProductItem[] = [
  // LIFTING EQUIPMENT
  {
    id: 'prod-cb-01',
    nameEn: 'Manual Chain Blocks (Heavy Duty Industrial)',
    nameFr: 'Palans manuels à chaîne (usage industriel intensif)',
    category: 'lifting',
    specEn: 'Grade 80 alloy load chain, double pawl brake system, drop forged hooks with heavy-duty safety latches.',
    specFr: 'Chaîne de charge en alliage Grade 80, système de frein à double cliquet, crochets forgés avec linguets renforcés.',
    standards: 'SANS / EN 13157',
    capacitiesEn: '0.5 Ton to 20 Ton (Standard lift 3m, custom heights available)',
    capacitiesFr: '0,5 Tonne à 20 Tonnes (Hauteur standard 3m, courses sur mesure)',
    image: '/assets/akglobal/categories/lifting-equipment.jpg',
  },
  {
    id: 'prod-lh-02',
    nameEn: 'Ratchet Lever Hoists (Come-Along)',
    nameFr: 'Palans à levier à cliquet (tendeurs de câble/chaîne)',
    category: 'lifting',
    specEn: 'High-strength steel body, 360-degree handle rotation, neutral free-wheeling mechanism under no load.',
    specFr: 'Corps en acier haute résistance, rotation du levier à 360°, mécanisme de débrayage libre hors charge.',
    standards: 'EN 13157',
    capacitiesEn: '0.75 Ton to 9.0 Ton',
    capacitiesFr: '0,75 Tonne à 9,0 Tonnes',
    image: '/assets/akglobal/hero/hero-minimal-light-hook.jpg',
  },
  {
    id: 'prod-ws-03',
    nameEn: 'Grade 80 & Grade 100 Chain Slings & Rigging Hardware',
    nameFr: 'Élingues chaîne Grade 80 & 100 et accessoires de gréage',
    category: 'lifting',
    specEn: '1-leg, 2-leg, 3-leg, and 4-leg configurations with master links, clevis sling hooks, and shortening clutches.',
    specFr: 'Configurations 1, 2, 3 et 4 brins avec mailles de tête, crochets à chape et raccourcisseurs.',
    standards: 'EN 818-4 / SANS 189',
    capacitiesEn: 'Up to 60+ Ton WLL configurations',
    capacitiesFr: 'Configurations CMU jusqu’à 60+ Tonnes',
    image: '/assets/akglobal/categories/lifting-equipment.jpg',
  },
  {
    id: 'prod-sk-04',
    nameEn: 'High-Tensile Bow & Dee Shackles (Screw Pin & Safety Bolt)',
    nameFr: 'Manilles lyre et droites haute résistance (axe vissé ou boulon goupillé)',
    category: 'lifting',
    specEn: 'Forged carbon steel with alloy pins, hot-dip galvanized finish, permanent embossed WLL markings.',
    specFr: 'Acier au carbone forgé avec axe allié, finition galvanisée à chaud, marquage CMU en relief indélébile.',
    standards: 'US Federal Spec RR-C-271 / EN 13889',
    capacitiesEn: '0.5 Ton to 55 Ton rated',
    capacitiesFr: 'Capacités nominales de 0,5 T à 55 T',
    image: '/assets/akglobal/categories/lifting-equipment.jpg',
  },

  // FASTENERS & STRUCTURAL BOLTING
  {
    id: 'prod-hb-05',
    nameEn: 'Grade 8.8 & 10.9 High-Tensile Hex Head Bolts & Sets',
    nameFr: 'Boulons hexagonaux haute résistance Classe 8.8 & 10.9',
    category: 'fasteners',
    specEn: 'Full thread & partial thread metric steel bolts, zinc-plated or black oxide, matched with Grade 8 / 10 nuts.',
    specFr: 'Boulons métriques filetage partiel ou total, zingués ou bruts huilés, écrous Classe 8 / 10 appariés.',
    standards: 'DIN 931 / DIN 933 / ISO 4014 / ISO 4017',
    capacitiesEn: 'Diameters M6 to M64; lengths up to 500mm',
    capacitiesFr: 'Diamètres M6 à M64 ; longueurs jusqu’à 500 mm',
    image: '/assets/akglobal/support/fasteners-detail.jpg',
  },
  {
    id: 'prod-sb-06',
    nameEn: 'Structural Bolting Assemblies (EN 14399 / ASTM A325 & A490)',
    nameFr: 'Boulonnerie de structure métallique (EN 14399 / ASTM A325 & A490)',
    category: 'fasteners',
    specEn: 'Preloaded structural bolting assemblies (HV / HR) with heavy hex nuts and hardened structural washers.',
    specFr: 'Ensembles de boulonnerie pour charpente précontrainte avec écrous épais et rondelles traitées.',
    standards: 'EN 14399-3/4 / ASTM A325 / ASTM A490',
    capacitiesEn: 'M16 to M36 (Hot-Dip Galvanized / Plain)',
    capacitiesFr: 'M16 à M36 (Galvanisation à chaud ou brut)',
    image: '/assets/akglobal/categories/fasteners-bolting.jpg',
  },
  {
    id: 'prod-tr-07',
    nameEn: 'Continuous Threaded Rods & Foundation Anchor Bolts',
    nameFr: 'Tiges filetées métriques et tirants d’ancrage de fondation',
    category: 'fasteners',
    specEn: '1m, 2m, and 3m lengths in Grade 4.8, 8.8, and 316 Stainless Steel, custom L-bolts and J-bolts for concrete.',
    specFr: 'Longueurs 1m, 2m et 3m en Classe 4.8, 8.8 et Inox 316, tirants d’ancrage en L ou en J pour béton.',
    standards: 'DIN 975 / DIN 976',
    capacitiesEn: 'M6 to M48 in standard and custom cut lengths',
    capacitiesFr: 'M6 à M48 en longueurs standard ou découpées sur mesure',
    image: '/assets/akglobal/support/fasteners-detail.jpg',
  },
  {
    id: 'prod-ss-08',
    nameEn: 'Stainless Steel Fasteners (A2-70 & A4-80 Marine Grade)',
    nameFr: 'Fixations en acier inoxydable (A2-70 & A4-80 Qualité Marine)',
    category: 'fasteners',
    specEn: 'Acid and corrosion-resistant fasteners for mining wash plants, chemical tanks, and outdoor infrastructure.',
    specFr: 'Fixations résistantes aux acides et à la corrosion pour usines de traitement minier et installations extérieures.',
    standards: 'AISI 304 / AISI 316 / ISO 3506',
    capacitiesEn: 'Complete range M4 to M30',
    capacitiesFr: 'Gamme complète M4 à M30',
    image: '/assets/akglobal/categories/fasteners-bolting.jpg',
  },

  // INDUSTRIAL HARDWARE & WORKSHOP
  {
    id: 'prod-hw-09',
    nameEn: 'Industrial Power Tools & Fabrication Consumables',
    nameFr: 'Outillage électroportatif industriel et consommables d’atelier',
    category: 'hardware',
    specEn: 'Heavy duty angle grinders, magnetic base drills, cutting & grinding discs, industrial welding rods.',
    specFr: 'Meuleuses industrielles, perceuses à base magnétique, disques de tronçonnage et électrodes de soudure.',
    standards: 'Industrial grade OEM specifications',
    capacitiesEn: '220V/380V equipment and industrial consumables',
    capacitiesFr: 'Équipements 220V/380V et consommables industriels',
    image: '/assets/akglobal/categories/industrial-hardware.jpg',
  },
  {
    id: 'prod-hw-10',
    nameEn: 'Workshop Heavy Mechanical Tools & Impact Sockets',
    nameFr: 'Outillage mécanique lourd et douilles à chocs pour mines',
    category: 'hardware',
    specEn: '3/4" and 1" drive heavy-duty impact sockets, torque wrenches, slugging spanners, hydraulic pullers.',
    specFr: 'Douilles à chocs 3/4" et 1", clés dynamométriques, clés à frapper, extracteurs hydrauliques.',
    standards: 'DIN 3129 / ISO 2725-2',
    capacitiesEn: 'Sizes 19mm up to 105mm+',
    capacitiesFr: 'Tailles de 19 mm jusqu’à 105 mm+',
    image: '/assets/akglobal/support/industrial-structure.jpg',
  },
];

export const ProductsPage: React.FC<{ initialCategory?: 'all' | 'lifting' | 'fasteners' | 'hardware' }> = ({
  initialCategory = 'all',
}) => {
  const { t, language, navigate } = useLanguage();
  const { addItem, items } = useRfq();
  const [activeCategory, setActiveCategory] = useState<'all' | 'lifting' | 'fasteners' | 'hardware'>(initialCategory);
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const filteredProducts = productDatabase.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  const handleAddToRfq = (product: ProductItem) => {
    const desc = language === 'fr' ? product.nameFr : product.nameEn;
    const spec = language === 'fr' ? `${product.specFr} — ${product.capacitiesFr}` : `${product.specEn} — ${product.capacitiesEn}`;
    
    addItem({
      description: desc,
      specification: spec,
      partNumber: product.standards,
      quantity: '1',
      unit: 'Units',
      notes: `Standard: ${product.standards}`,
    });

    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 2500);
  };

  return (
    <div className="bg-[#F3F2EE] text-[#111318]">
      {/* Header Banner */}
      <section className="border-b border-[#D8D8D5] bg-[#FFFFFF] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] font-mono font-semibold tracking-[0.2em] text-[#A21A8D] uppercase block">
              {t.products.headerBadge}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#111318] font-normal">
              {t.products.headerTitle}
            </h1>
            <p className="text-sm sm:text-base text-[#71747A] leading-relaxed">
              {t.products.headerSubtitle}
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 pt-8 border-t border-[#D8D8D5] mt-8">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2.5 rounded-[2px] text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#111318] text-white border border-[#111318]'
                  : 'bg-[#FFFFFF] text-[#71747A] border border-[#D8D8D5] hover:border-[#111318] hover:text-[#111318]'
              }`}
            >
              {t.products.allCategories}
            </button>
            <button
              onClick={() => setActiveCategory('lifting')}
              className={`px-5 py-2.5 rounded-[2px] text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer ${
                activeCategory === 'lifting'
                  ? 'bg-[#111318] text-white border border-[#111318]'
                  : 'bg-[#FFFFFF] text-[#71747A] border border-[#D8D8D5] hover:border-[#111318] hover:text-[#111318]'
              }`}
            >
              {t.categories.lifting.title}
            </button>
            <button
              onClick={() => setActiveCategory('fasteners')}
              className={`px-5 py-2.5 rounded-[2px] text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer ${
                activeCategory === 'fasteners'
                  ? 'bg-[#111318] text-white border border-[#111318]'
                  : 'bg-[#FFFFFF] text-[#71747A] border border-[#D8D8D5] hover:border-[#111318] hover:text-[#111318]'
              }`}
            >
              {t.categories.fasteners.title}
            </button>
            <button
              onClick={() => setActiveCategory('hardware')}
              className={`px-5 py-2.5 rounded-[2px] text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer ${
                activeCategory === 'hardware'
                  ? 'bg-[#111318] text-white border border-[#111318]'
                  : 'bg-[#FFFFFF] text-[#71747A] border border-[#D8D8D5] hover:border-[#111318] hover:text-[#111318]'
              }`}
            >
              {t.categories.hardware.title}
            </button>
          </div>
        </div>
      </section>

      {/* Product List / Spec Cards */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="space-y-4">
          {filteredProducts.map((product) => {
            const isAdded = addedIds[product.id];
            return (
              <div
                key={product.id}
                className="bg-[#FFFFFF] border border-[#D8D8D5] rounded-[2px] p-6 lg:p-8 hover:border-[#111318] transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Product Visual */}
                  <div className="lg:col-span-3">
                    <div className="aspect-[4/3] rounded-[2px] overflow-hidden border border-[#D8D8D5] bg-[#F3F2EE]">
                      <img
                        src={product.image}
                        alt={language === 'fr' ? product.nameFr : product.nameEn}
                        className="w-full h-full object-cover grayscale contrast-110"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Technical Details (6 cols) */}
                  <div className="lg:col-span-6 space-y-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-mono tracking-widest text-[#A21A8D] uppercase font-semibold">
                        {product.category}
                      </span>
                      <span className="text-[#D8D8D5]">•</span>
                      <span className="text-[10px] font-mono text-[#71747A]">
                        {product.standards}
                      </span>
                    </div>

                    <h3 className="text-xl font-serif text-[#111318] font-normal">
                      {language === 'fr' ? product.nameFr : product.nameEn}
                    </h3>

                    <p className="text-xs text-[#71747A] leading-relaxed">
                      {language === 'fr' ? product.specFr : product.specEn}
                    </p>

                    <div className="pt-2 text-xs text-[#111318] flex items-center space-x-2">
                      <strong className="font-semibold text-[#111318]">{t.products.scopeRange}:</strong>
                      <span className="text-[#71747A]">{language === 'fr' ? product.capacitiesFr : product.capacitiesEn}</span>
                    </div>
                  </div>

                  {/* Action Column (3 cols) */}
                  <div className="lg:col-span-3 flex flex-col justify-center items-start lg:items-end space-y-3 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#D8D8D5]">
                    <button
                      onClick={() => handleAddToRfq(product)}
                      className={`w-full lg:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-[2px] text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer border ${
                        isAdded
                          ? 'bg-emerald-800 border-emerald-700 text-white'
                          : 'bg-[#111318] hover:bg-[#25282E] active:bg-black border-[#111318] text-white'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>{t.products.added}</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5 text-white" />
                          <span>{t.products.addToRfq}</span>
                        </>
                      )}
                    </button>

                    <span className="text-[11px] text-[#71747A]">
                      {t.products.rfqNotice}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Sourcing Callout for Unlisted Products */}
        <div className="mt-14 bg-[#111318] text-white p-8 lg:p-12 rounded-[2px] border border-[#25282E] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[10px] font-mono tracking-widest text-[#A21A8D] uppercase block">
              Specialized Procurement
            </span>
            <h3 className="text-2xl font-serif">
              {t.products.customItemTitle}
            </h3>
            <p className="text-xs text-[#D8D8D5]/80 leading-relaxed">
              {t.products.customItemDesc}
            </p>
          </div>

          <button
            onClick={() => navigate('rfq')}
            className="inline-flex items-center space-x-2 bg-[#A21A8D] text-white hover:bg-[#871375] px-6 py-3.5 rounded-[2px] text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer shrink-0"
          >
            <FileText className="w-4 h-4 text-white" />
            <span>{t.products.requestCustomQuote}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </div>
  );
};
