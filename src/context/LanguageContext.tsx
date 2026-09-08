import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, RouteId } from '../types';
import { resolvePath, getRouteUrl, getCounterpartUrl } from '../i18n/router';
import { translations } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  currentRouteId: RouteId;
  t: typeof translations['en'];
  setLanguage: (lang: Language) => void;
  navigate: (routeId: RouteId) => void;
  navigateToUrl: (url: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize from URL or localStorage
  const initialResolution = () => {
    if (typeof window === 'undefined') {
      return { routeId: 'home' as RouteId, lang: 'en' as Language };
    }
    const stored = localStorage.getItem('akglobal_lang') as Language | null;
    const defaultLang = stored === 'fr' || stored === 'en' ? stored : 'en';
    return resolvePath(window.location.pathname, defaultLang);
  };

  const [currentRouteId, setCurrentRouteId] = useState<RouteId>(() => initialResolution().routeId);
  const [language, setLanguageState] = useState<Language>(() => initialResolution().lang);

  // Sync with browser URL popstate
  useEffect(() => {
    const handlePopState = () => {
      const { routeId, lang } = resolvePath(window.location.pathname, language);
      setCurrentRouteId(routeId);
      setLanguageState(lang);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [language]);

  // Update HTML lang attribute and document title whenever language or route changes
  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('akglobal_lang', language);
  }, [language]);

  // Change language and smoothly transition URL while staying on current section/page
  const setLanguage = (newLang: Language) => {
    if (newLang === language) return;
    setLanguageState(newLang);
    const newPath = getCounterpartUrl(currentRouteId, newLang);
    window.history.pushState({}, '', newPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigate to a known route ID in current language
  const navigate = (routeId: RouteId) => {
    setCurrentRouteId(routeId);
    const targetUrl = getRouteUrl(routeId, language);
    window.history.pushState({}, '', targetUrl);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToUrl = (url: string) => {
    const { routeId, lang } = resolvePath(url, language);
    setCurrentRouteId(routeId);
    setLanguageState(lang);
    window.history.pushState({}, '', url);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        currentRouteId,
        t,
        setLanguage,
        navigate,
        navigateToUrl,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
