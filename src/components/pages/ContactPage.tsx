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
    <div className="bg-[#F3F2EE] text-[#111318]">
      {/* Header Banner */}
      <section className="border-b border-[#D8D8D5] bg-[#FFFFFF] py-14 lg:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] font-mono font-semibold tracking-[0.2em] text-[#A21A8D] uppercase block">
              {t.contact.headerBadge}
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-normal text-[#111318] leading-tight">
              {t.contact.headerTitle}
            </h1>
            <p className="text-base text-[#71747A] leading-relaxed">
              {t.contact.headerLead}
            </p>
          </div>
        </div>
      </section>

      {/* Main Corporate Contact Details & Map/Form */}
      <section className="py-14 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: Institutional Operating Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FFFFFF] border border-[#D8D8D5] p-8 rounded-[2px] space-y-6">
              <h2 className="text-lg font-serif text-[#111318] border-b border-[#D8D8D5] pb-3">
                {t.contact.officeDetailsTitle}
              </h2>

              <div className="space-y-4 text-xs text-[#111318]">
                {/* Physical Base */}
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#A21A8D] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#111318] font-semibold mb-0.5">
                      {t.contact.physicalAddressLabel}
                    </strong>
                    <span>1 Broadacres Drive, Fourways</span><br />
                    <span>Sandton, Gauteng, 2055</span><br />
                    <span className="text-[#71747A]">South Africa</span>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start space-x-3 pt-3 border-t border-[#D8D8D5]">
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
                    <span className="block text-[11px] text-[#71747A] mt-0.5">
                      International: +27 82 955 6071
                    </span>
                  </div>
                </div>

                {/* Direct Emails */}
                <div className="flex items-start space-x-3 pt-3 border-t border-[#D8D8D5]">
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
                        className="text-xs text-[#71747A] hover:text-[#111318]"
                      >
                        AkilimaliglobalT@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Entity Facts */}
                <div className="pt-3 border-t border-[#D8D8D5] space-y-1 text-[11px] text-[#71747A]">
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
            <div className="bg-[#FFFFFF] border border-[#D8D8D5] p-6 rounded-[2px] space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#A21A8D]">
                DRC Client Coordination
              </span>
              <h3 className="text-sm font-semibold text-[#111318]">
                {t.contact.drcNoticeTitle}
              </h3>
              <p className="text-xs text-[#71747A] leading-relaxed">
                {t.contact.drcNoticeDesc}
              </p>
            </div>
          </div>

          {/* Column 2: Direct Corporate Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] border border-[#D8D8D5] p-8 lg:p-10 rounded-[2px]">
              <h2 className="text-xl font-serif text-[#111318] mb-2">
                {t.contact.formTitle}
              </h2>
              <p className="text-xs text-[#71747A] mb-6">
                {t.contact.formSubtitle}
              </p>

              {submitted ? (
                <div className="bg-[#F3F2EE] border border-emerald-700/60 p-6 rounded-[2px] space-y-3">
                  <div className="flex items-center space-x-2 text-emerald-800">
                    <CheckCircle2 className="w-5 h-5" />
                    <h3 className="text-sm font-semibold">{t.contact.messageSentTitle}</h3>
                  </div>
                  <p className="text-xs text-[#71747A]">
                    {t.contact.messageSentDesc}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-[#111318] underline pt-2 cursor-pointer"
                  >
                    {t.contact.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-wider text-[#71747A] mb-1">
                        {t.contact.nameField} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full text-xs px-3 py-2.5 border border-[#D8D8D5] rounded-[2px] bg-[#F3F2EE] text-[#111318] focus:outline-none focus:border-[#111318]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-wider text-[#71747A] mb-1">
                        {t.contact.companyField} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full text-xs px-3 py-2.5 border border-[#D8D8D5] rounded-[2px] bg-[#F3F2EE] text-[#111318] focus:outline-none focus:border-[#111318]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-wider text-[#71747A] mb-1">
                        {t.contact.emailField} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-xs px-3 py-2.5 border border-[#D8D8D5] rounded-[2px] bg-[#F3F2EE] text-[#111318] focus:outline-none focus:border-[#111318]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-wider text-[#71747A] mb-1">
                        {t.contact.phoneField}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full text-xs px-3 py-2.5 border border-[#D8D8D5] rounded-[2px] bg-[#F3F2EE] text-[#111318] focus:outline-none focus:border-[#111318]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-wider text-[#71747A] mb-1">
                      {t.contact.countryField}
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full text-xs px-3 py-2.5 border border-[#D8D8D5] rounded-[2px] bg-[#F3F2EE] text-[#111318] focus:outline-none focus:border-[#111318]"
                    >
                      <option value="South Africa">South Africa</option>
                      <option value="Democratic Republic of the Congo">DR Congo (RDC)</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Other">Other African Territory</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-wider text-[#71747A] mb-1">
                      {t.contact.messageField} *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your inquiry, required equipment, or project timeframe..."
                      className="w-full text-xs p-3 border border-[#D8D8D5] rounded-[2px] bg-[#F3F2EE] text-[#111318] placeholder-[#71747A]/60 focus:outline-none focus:border-[#111318]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center space-x-2 bg-[#111318] hover:bg-[#25282E] active:bg-black text-white px-7 py-3.5 rounded-[2px] text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5 text-white" />
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
