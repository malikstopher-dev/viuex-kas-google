import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useRfq } from '../../context/RfqContext';
import { Plus, Trash2, CheckCircle, FileText, Send, Printer, ArrowLeft, Building2 } from 'lucide-react';

export const RfqPage: React.FC = () => {
  const { t, language, navigate } = useLanguage();
  const {
    items,
    addItem,
    updateItem,
    removeItem,
    clearItems,
    contact,
    updateContact,
    submitRfq,
    lastSubmittedRef,
    clearLastSubmission,
  } = useRfq();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);

  const handleAddNewItem = () => {
    addItem({
      description: '',
      partNumber: '',
      specification: '',
      quantity: '1',
      unit: 'Units',
      notes: '',
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate that at least one item has a description
    const hasValidItem = items.some((i) => i.description.trim().length > 0);
    if (!hasValidItem) {
      alert(language === 'fr' ? 'Veuillez saisir au moins un article dans votre demande.' : 'Please provide at least one item description.');
      return;
    }

    if (!contact.fullName.trim() || !contact.email.trim() || !contact.companyName.trim()) {
      alert(language === 'fr' ? 'Veuillez remplir vos coordonnées (Nom, Entreprise, Email).' : 'Please complete your contact details (Name, Company, Email).');
      return;
    }

    setIsSubmitting(true);
    try {
      await submitRfq();
    } finally {
      setIsSubmitting(false);
    }
  };

  const generatePrintableText = () => {
    const lines = [
      `AKGLOBAL TRADING PTY (LTD) - REQUEST FOR QUOTATION`,
      `Reference: ${lastSubmittedRef || 'DRAFT'}`,
      `Date: ${new Date().toLocaleDateString()}`,
      `Registration: 202074701907`,
      `Contact Base: Sandton, South Africa`,
      `----------------------------------------------------`,
      `BUYER DETAILS:`,
      `Company: ${contact.companyName}`,
      `Contact Name: ${contact.fullName}`,
      `Email: ${contact.email}`,
      `Phone: ${contact.phone}`,
      `Destination: ${contact.deliveryLocation}, ${contact.city}, ${contact.country}`,
      `Required Delivery: ${contact.requiredDeliveryDate || 'Standard'}`,
      `----------------------------------------------------`,
      `REQUESTED ITEMS:`,
      ...items
        .filter((i) => i.description.trim())
        .map(
          (i, idx) =>
            `${idx + 1}. [Qty: ${i.quantity} ${i.unit}] ${i.description}\n   Spec: ${i.specification || 'N/A'}\n   Part/Std: ${i.partNumber || 'N/A'}`
        ),
      `----------------------------------------------------`,
      `NOTES: ${contact.generalNotes || 'None'}`,
    ];
    return lines.join('\n');
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(generatePrintableText());
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 3000);
  };

  return (
    <div className="bg-[#F3F2EE] text-[#111318] py-12 lg:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header Title */}
        <div className="border-b border-[#D8D8D5] pb-8 mb-8">
          <span className="text-[11px] font-mono font-semibold tracking-[0.2em] text-[#A21A8D] block mb-1 uppercase">
            {t.rfq.headerBadge}
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif text-[#111318] font-normal">
            {t.rfq.headerTitle}
          </h1>
          <p className="text-sm text-[#71747A] mt-2">
            {t.rfq.headerLead}
          </p>
        </div>

        {/* Confirmation Screen when Submitted */}
        {lastSubmittedRef ? (
          <div className="bg-[#FFFFFF] border border-[#D8D8D5] p-8 lg:p-12 rounded-[2px] space-y-8 animate-in fade-in duration-300">
            <div className="flex items-center space-x-3 text-emerald-800">
              <CheckCircle className="w-8 h-8" />
              <div>
                <h2 className="text-2xl font-serif text-[#111318]">
                  {t.rfq.submittedTitle}
                </h2>
                <p className="text-xs text-[#71747A]">
                  {t.rfq.submittedLead}
                </p>
              </div>
            </div>

            {/* Official Reference Block */}
            <div className="bg-[#F3F2EE] border border-[#D8D8D5] p-6 rounded-[2px] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#71747A] block">
                  {t.rfq.referenceNumberLabel}
                </span>
                <span className="text-2xl font-mono font-bold text-[#111318]">
                  {lastSubmittedRef}
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={handleCopyText}
                  className="px-4 py-2 border border-[#D8D8D5] bg-[#FFFFFF] text-xs font-semibold uppercase tracking-wider rounded-[2px] hover:border-[#111318] text-[#111318] transition-colors cursor-pointer"
                >
                  {copiedSummary ? t.rfq.copied : t.rfq.copySummary}
                </button>
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 bg-[#111318] text-white text-xs font-semibold uppercase tracking-wider rounded-[2px] hover:bg-[#25282E] transition-colors cursor-pointer flex items-center space-x-1.5"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>{t.rfq.print}</span>
                </button>
              </div>
            </div>

            {/* Review Summary */}
            <div className="space-y-4 text-xs text-[#111318]">
              <h3 className="font-bold uppercase tracking-wider text-[#111318] border-b border-[#D8D8D5] pb-2">
                {t.rfq.itemsSummaryTitle}
              </h3>
              <div className="divide-y divide-[#D8D8D5]">
                {items
                  .filter((i) => i.description.trim())
                  .map((item, idx) => (
                    <div key={item.id} className="py-3 flex justify-between items-start">
                      <div>
                        <div className="font-semibold text-sm text-[#111318]">
                          {idx + 1}. {item.description}
                        </div>
                        {item.specification && (
                          <div className="text-[#71747A] mt-0.5">{item.specification}</div>
                        )}
                        {item.partNumber && (
                          <div className="font-mono text-[10px] text-[#A21A8D] mt-0.5">
                            Part/Std: {item.partNumber}
                          </div>
                        )}
                      </div>
                      <div className="font-mono font-bold text-right shrink-0 ml-4 text-[#111318]">
                        {item.quantity} {item.unit}
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Submission Next Steps */}
            <div className="pt-4 border-t border-[#D8D8D5] flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => {
                  clearLastSubmission();
                  clearItems();
                }}
                className="text-xs font-bold uppercase tracking-wider text-[#111318] hover:text-[#A21A8D] flex items-center space-x-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{t.rfq.newRfq}</span>
              </button>

              <a
                href={`mailto:aakasongo.77@gmail.com?subject=AKGLOBAL%20RFQ%20${lastSubmittedRef}&body=${encodeURIComponent(
                  generatePrintableText()
                )}`}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#A21A8D] hover:bg-[#871375] text-white px-6 py-3 rounded-[2px] text-xs font-semibold tracking-widest uppercase transition-colors"
              >
                <Send className="w-3.5 h-3.5 text-white" />
                <span>{t.rfq.emailDirectly}</span>
              </a>
            </div>
          </div>
        ) : (
          /* Main RFQ Form */
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section 1: Buyer Contact & Delivery Destination */}
            <div className="bg-[#FFFFFF] border border-[#D8D8D5] p-6 lg:p-8 rounded-[2px] space-y-6">
              <h2 className="text-base font-bold uppercase tracking-wider text-[#111318] border-b border-[#D8D8D5] pb-3 flex items-center space-x-2">
                <Building2 className="w-4 h-4 text-[#A21A8D]" />
                <span>1. {t.rfq.buyerDetailsTitle}</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#71747A] mb-1.5">
                    {t.rfq.companyLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={contact.companyName}
                    onChange={(e) => updateContact({ companyName: e.target.value })}
                    placeholder="e.g. Tenke Fungurume Mining / Kamoa Copper"
                    className="w-full text-xs px-3.5 py-2.5 border border-[#D8D8D5] rounded-[2px] bg-[#F3F2EE] text-[#111318] placeholder-[#71747A]/60 focus:outline-none focus:border-[#111318]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#71747A] mb-1.5">
                    {t.rfq.contactPersonLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={contact.fullName}
                    onChange={(e) => updateContact({ fullName: e.target.value })}
                    placeholder="e.g. Marc Kabange"
                    className="w-full text-xs px-3.5 py-2.5 border border-[#D8D8D5] rounded-[2px] bg-[#F3F2EE] text-[#111318] placeholder-[#71747A]/60 focus:outline-none focus:border-[#111318]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#71747A] mb-1.5">
                    {t.rfq.emailLabel} *
                  </label>
                  <input
                    type="email"
                    required
                    value={contact.email}
                    onChange={(e) => updateContact({ email: e.target.value })}
                    placeholder="buyer@mining.cd"
                    className="w-full text-xs px-3.5 py-2.5 border border-[#D8D8D5] rounded-[2px] bg-[#F3F2EE] text-[#111318] placeholder-[#71747A]/60 focus:outline-none focus:border-[#111318]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#71747A] mb-1.5">
                    {t.rfq.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    value={contact.phone}
                    onChange={(e) => updateContact({ phone: e.target.value })}
                    placeholder="+243 ... / +27 ..."
                    className="w-full text-xs px-3.5 py-2.5 border border-[#D8D8D5] rounded-[2px] bg-[#F3F2EE] text-[#111318] placeholder-[#71747A]/60 focus:outline-none focus:border-[#111318]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#71747A] mb-1.5">
                    {t.rfq.destinationCountryLabel} *
                  </label>
                  <select
                    value={contact.country}
                    onChange={(e) => updateContact({ country: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 border border-[#D8D8D5] rounded-[2px] bg-[#F3F2EE] text-[#111318] focus:outline-none focus:border-[#111318]"
                  >
                    <option value="Democratic Republic of the Congo">DR Congo (RDC)</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Other">Other Southern/Central Africa</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#71747A] mb-1.5">
                    {t.rfq.cityOrSiteLabel}
                  </label>
                  <input
                    type="text"
                    value={contact.city}
                    onChange={(e) => updateContact({ city: e.target.value })}
                    placeholder="e.g. Kolwezi / Lubumbashi / Johannesburg"
                    className="w-full text-xs px-3.5 py-2.5 border border-[#D8D8D5] rounded-[2px] bg-[#F3F2EE] text-[#111318] placeholder-[#71747A]/60 focus:outline-none focus:border-[#111318]"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Requisition Items Table */}
            <div className="bg-[#FFFFFF] border border-[#D8D8D5] p-6 lg:p-8 rounded-[2px] space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D8D8D5] pb-4">
                <div>
                  <h2 className="text-base font-bold uppercase tracking-wider text-[#111318] flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-[#A21A8D]" />
                    <span>2. {t.rfq.lineItemsTitle}</span>
                  </h2>
                  <p className="text-xs text-[#71747A] mt-1">
                    {t.rfq.lineItemsLead}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleAddNewItem}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#111318] bg-[#F3F2EE] border border-[#D8D8D5] px-3.5 py-2 rounded-[2px] hover:border-[#111318] transition-colors cursor-pointer shrink-0"
                >
                  <Plus className="w-3.5 h-3.5 text-[#A21A8D]" />
                  <span>{t.rfq.addLineItem}</span>
                </button>
              </div>

              {/* Items List */}
              <div className="space-y-4">
                {items.map((item, index) => (
                  <div
                    key={item.id}
                    className="p-4 bg-[#F3F2EE] border border-[#D8D8D5] rounded-[2px] relative space-y-3"
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#71747A]">
                      <span>ITEM #{index + 1}</span>
                      {items.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="text-red-600 hover:text-red-700 flex items-center space-x-1 text-xs cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>{t.rfq.remove}</span>
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                      <div className="md:col-span-6">
                        <label className="block text-[10px] font-semibold uppercase text-[#71747A] mb-1">
                          {t.rfq.itemDescriptionLabel} *
                        </label>
                        <input
                          type="text"
                          required
                          value={item.description}
                          onChange={(e) => updateItem(item.id, { description: e.target.value })}
                          placeholder="e.g. 5-Ton Chain Block 3m Lift / Grade 8.8 M24 Hex Bolt"
                          className="w-full text-xs px-3 py-2 border border-[#D8D8D5] rounded-[2px] bg-[#FFFFFF] text-[#111318] placeholder-[#71747A]/60 focus:outline-none focus:border-[#111318]"
                        />
                      </div>

                      <div className="md:col-span-3">
                        <label className="block text-[10px] font-semibold uppercase text-[#71747A] mb-1">
                          {t.rfq.partNumberOrStandard}
                        </label>
                        <input
                          type="text"
                          value={item.partNumber}
                          onChange={(e) => updateItem(item.id, { partNumber: e.target.value })}
                          placeholder="e.g. DIN 933 / EN 13157"
                          className="w-full text-xs px-3 py-2 border border-[#D8D8D5] rounded-[2px] bg-[#FFFFFF] text-[#111318] placeholder-[#71747A]/60 focus:outline-none focus:border-[#111318]"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-[10px] font-semibold uppercase text-[#71747A] mb-1">
                          {t.rfq.quantityLabel} *
                        </label>
                        <input
                          type="text"
                          required
                          value={item.quantity}
                          onChange={(e) => updateItem(item.id, { quantity: e.target.value })}
                          placeholder="e.g. 10"
                          className="w-full text-xs px-3 py-2 border border-[#D8D8D5] rounded-[2px] bg-[#FFFFFF] text-[#111318] placeholder-[#71747A]/60 focus:outline-none focus:border-[#111318]"
                        />
                      </div>

                      <div className="md:col-span-1">
                        <label className="block text-[10px] font-semibold uppercase text-[#71747A] mb-1">
                          {t.rfq.unitLabel}
                        </label>
                        <select
                          value={item.unit}
                          onChange={(e) => updateItem(item.id, { unit: e.target.value })}
                          className="w-full text-xs px-2 py-2 border border-[#D8D8D5] rounded-[2px] bg-[#FFFFFF] text-[#111318] focus:outline-none focus:border-[#111318]"
                        >
                          <option value="Units">Units</option>
                          <option value="Sets">Sets</option>
                          <option value="Pcs">Pcs</option>
                          <option value="Boxes">Boxes</option>
                          <option value="Kg">Kg</option>
                          <option value="Meters">Meters</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-semibold uppercase text-[#71747A] mb-1">
                        {t.rfq.technicalSpecLabel}
                      </label>
                      <input
                        type="text"
                        value={item.specification}
                        onChange={(e) => updateItem(item.id, { specification: e.target.value })}
                        placeholder="e.g. Hot-Dip Galvanized, 100mm thread length"
                        className="w-full text-xs px-3 py-2 border border-[#D8D8D5] rounded-[2px] bg-[#FFFFFF] text-[#111318] placeholder-[#71747A]/60 focus:outline-none focus:border-[#111318]"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* General Project Notes */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#71747A] mb-1.5">
                  {t.rfq.generalNotesLabel}
                </label>
                <textarea
                  rows={3}
                  value={contact.generalNotes}
                  onChange={(e) => updateContact({ generalNotes: e.target.value })}
                  placeholder="Provide any delivery schedule requirements or export border preferences (Kasumbalesa, etc.)."
                  className="w-full text-xs p-3 border border-[#D8D8D5] rounded-[2px] bg-[#F3F2EE] text-[#111318] placeholder-[#71747A]/60 focus:outline-none focus:border-[#111318]"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#D8D8D5] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#71747A]">
                  {t.rfq.directRoutingNotice}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#111318] hover:bg-[#25282E] active:bg-black text-white px-8 py-3.5 rounded-[2px] text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>{isSubmitting ? t.rfq.submitting : t.rfq.submitButton}</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
