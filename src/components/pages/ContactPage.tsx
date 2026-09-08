import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: 'South Africa',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F7F7F5] text-[#111318]">
      {/* Header Banner */}
      <section className="border-b border-[#D9DBDE] bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A21A8D] block">
              {t.contact.headerBadge}
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-normal text-[#111318] leading-tight">
              {t.contact.headerTitle}
            </h1>
            <p className="text-base text-[#666B73] leading-relaxed">
              {t.contact.headerLead}
            </p>
          </div>
        </div>
      </section>

      {/* Main Corporate Contact Details & Map/Form */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Column 1: Institutional Operating Details (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-[#D9DBDE] p-8 rounded-xs space-y-6">
              <h2 className="text-lg font-serif text-[#111318] border-b border-[#D9DBDE] pb-3">
                {t.contact.officeDetailsTitle}
              </h2>

              <div className="space-y-4 text-xs text-[#25282E]">
                {/* Physical Base */}
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#A21A8D] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#111318] font-semibold mb-0.5">
                      {t.contact.physicalAddressLabel}
                    </strong>
                    <span>1 Broadacres Drive, Fourways</span><br />
                    <span>Sandton, Gauteng, 2055</span><br />
                    <span className="text-[#666B73]">South Africa</span>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start space-x-3 pt-2 border-t border-[#D9DBDE]/60">
                  <Phone className="w-4 h-4 text-[#A21A8D] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#111318] font-semibold mb-0.5">
                      {t.contact.phoneLabel}
                    </strong>
                    <a
                      href="tel:+27829556071"
                      className="text-sm font-semibold text-[#111318] hover:text-[#A21A8D] transition-colors"
                    >
                      082 955 6071
                    </a>
                    <span className="block text-[11px] text-[#666B73] mt-0.5">
                      International: +27 82 955 6071
                    </span>
                  </div>
                </div>

                {/* Direct Emails */}
                <div className="flex items-start space-x-3 pt-2 border-t border-[#D9DBDE]/60">
                  <Mail className="w-4 h-4 text-[#A21A8D] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <strong className="block text-[#111318] font-semibold mb-0.5">
                      {t.contact.emailLabel}
                    </strong>
                    <div>
                      <a
                        href="mailto:aakasongo.77@gmail.com"
                        className="text-xs text-[#111318] hover:text-[#A21A8D] font-medium"
                      >
                        aakasongo.77@gmail.com
                      </a>
                    </div>
                    <div>
                      <a
                        href="mailto:AkilimaliglobalT@gmail.com"
                        className="text-xs text-[#666B73] hover:text-[#111318]"
                      >
                        AkilimaliglobalT@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Entity Facts */}
                <div className="pt-3 border-t border-[#D9DBDE]/60 space-y-1 text-[11px] text-[#666B73]">
                  <div>
                    <span className="font-semibold text-[#111318]">{t.stationery.regLabel}:</span>{' '}
                    <span className="font-mono">{t.stationery.regNumber}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#111318]">{t.stationery.directorLabel}:</span>{' '}
                    <span>{t.stationery.directorName}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* DRC Client Coordination Notice */}
            <div className="bg-[#111318] text-white p-6 rounded-xs space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#A21A8D]">
                DRC Client Coordination
              </span>
              <h3 className="text-sm font-semibold">
                {t.contact.drcNoticeTitle}
              </h3>
              <p className="text-xs text-[#D9DBDE]/80 leading-relaxed">
                {t.contact.drcNoticeDesc}
              </p>
            </div>
          </div>

          {/* Column 2: Direct Corporate Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#D9DBDE] p-8 lg:p-10 rounded-xs">
              <h2 className="text-xl font-serif text-[#111318] mb-2">
                {t.contact.formTitle}
              </h2>
              <p className="text-xs text-[#666B73] mb-6">
                {t.contact.formSubtitle}
              </p>

              {submitted ? (
                <div className="bg-[#F7F7F5] border border-emerald-600 p-6 rounded-xs space-y-3">
                  <div className="flex items-center space-x-2 text-emerald-800">
                    <CheckCircle2 className="w-5 h-5" />
                    <h3 className="text-sm font-semibold">{t.contact.messageSentTitle}</h3>
                  </div>
                  <p className="text-xs text-[#666B73]">
                    {t.contact.messageSentDesc}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-[#111318] underline pt-2"
                  >
                    {t.contact.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#25282E] mb-1">
                        {t.contact.nameField} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full text-xs px-3 py-2.5 border border-[#D9DBDE] rounded-xs bg-[#F7F7F5] focus:bg-white focus:outline-none focus:border-[#111318]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#25282E] mb-1">
                        {t.contact.companyField} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full text-xs px-3 py-2.5 border border-[#D9DBDE] rounded-xs bg-[#F7F7F5] focus:bg-white focus:outline-none focus:border-[#111318]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#25282E] mb-1">
                        {t.contact.emailField} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-xs px-3 py-2.5 border border-[#D9DBDE] rounded-xs bg-[#F7F7F5] focus:bg-white focus:outline-none focus:border-[#111318]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#25282E] mb-1">
                        {t.contact.phoneField}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full text-xs px-3 py-2.5 border border-[#D9DBDE] rounded-xs bg-[#F7F7F5] focus:bg-white focus:outline-none focus:border-[#111318]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#25282E] mb-1">
                      {t.contact.countryField}
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full text-xs px-3 py-2.5 border border-[#D9DBDE] rounded-xs bg-[#F7F7F5] focus:bg-white focus:outline-none focus:border-[#111318]"
                    >
                      <option value="South Africa">South Africa</option>
                      <option value="Democratic Republic of the Congo">DR Congo (RDC)</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Other">Other African Territory</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#25282E] mb-1">
                      {t.contact.messageField} *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your inquiry, required equipment, or project timeframe..."
                      className="w-full text-xs p-3 border border-[#D9DBDE] rounded-xs bg-[#F7F7F5] focus:bg-white focus:outline-none focus:border-[#111318]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center space-x-2 bg-[#111318] hover:bg-[#25282E] text-white px-7 py-3.5 rounded-xs text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5 text-[#A21A8D]" />
                      <span>{t.contact.submitBtn}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
