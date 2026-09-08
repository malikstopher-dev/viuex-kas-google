import React from 'react';
import { useRfq } from '../../context/RfqContext';
import { useLanguage } from '../../context/LanguageContext';
import { Check, ArrowRight, X } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toastMessage, clearToast, items } = useRfq();
  const { navigate, t } = useLanguage();

  if (!toastMessage) return null;

  return (
    <aside
      aria-label="Notification"
      className="fixed bottom-6 right-6 z-50 max-w-md bg-[#111318] text-white border border-white/20 p-4 rounded-xs shadow-2xl flex items-center justify-between gap-4 animate-in fade-in slide-in-from-bottom-3 duration-200"
    >
      <div className="flex items-center space-x-3">
        <div className="w-7 h-7 rounded-full bg-[#A21A8D]/20 border border-[#A21A8D] flex items-center justify-center shrink-0">
          <Check className="w-3.5 h-3.5 text-[#A21A8D]" />
        </div>
        <div>
          <p className="text-xs font-semibold tracking-wide text-white">{t.products.addedToRfq}</p>
          <p className="text-[11px] text-[#D9DBDE]/70 truncate max-w-[200px]">{toastMessage}</p>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={() => {
            clearToast();
            navigate('rfq');
          }}
          className="text-xs font-bold uppercase tracking-wider text-[#A21A8D] hover:text-white flex items-center space-x-1 cursor-pointer"
        >
          <span>{t.nav.rfq}</span>
          <ArrowRight className="w-3 h-3" />
        </button>
        <button
          onClick={clearToast}
          className="p-1 text-white/50 hover:text-white transition-colors cursor-pointer"
          aria-label="Close notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
