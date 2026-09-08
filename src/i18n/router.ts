import { Language, RouteId } from '../types';

export interface RouteConfig {
  id: RouteId;
  enPath: string;
  frPath: string;
}

export const ROUTES: Record<RouteId, RouteConfig> = {
  home: {
    id: 'home',
    enPath: '/en',
    frPath: '/fr',
  },
  about: {
    id: 'about',
    enPath: '/en/about',
    frPath: '/fr/a-propos',
  },
  products: {
    id: 'products',
    enPath: '/en/products',
    frPath: '/fr/produits',
  },
  'lifting-equipment': {
    id: 'lifting-equipment',
    enPath: '/en/products/lifting-equipment',
    frPath: '/fr/produits/equipements-de-levage',
  },
  'products-lifting': {
    id: 'products-lifting',
    enPath: '/en/products/lifting-equipment',
    frPath: '/fr/produits/equipements-de-levage',
  },
  fasteners: {
    id: 'fasteners',
    enPath: '/en/products/fasteners',
    frPath: '/fr/produits/fixations-boulonnerie',
  },
  'products-fasteners': {
    id: 'products-fasteners',
    enPath: '/en/products/fasteners',
    frPath: '/fr/produits/fixations-boulonnerie',
  },
  'industrial-hardware': {
    id: 'industrial-hardware',
    enPath: '/en/products/industrial-hardware',
    frPath: '/fr/produits/fournitures-industrielles',
  },
  'products-hardware': {
    id: 'products-hardware',
    enPath: '/en/products/industrial-hardware',
    frPath: '/fr/produits/fournitures-industrielles',
  },
  procurement: {
    id: 'procurement',
    enPath: '/en/procurement',
    frPath: '/fr/approvisionnement',
  },
  industries: {
    id: 'industries',
    enPath: '/en/industries',
    frPath: '/fr/secteurs',
  },
  rfq: {
    id: 'rfq',
    enPath: '/en/rfq',
    frPath: '/fr/devis',
  },
  contact: {
    id: 'contact',
    enPath: '/en/contact',
    frPath: '/fr/contact',
  },
  'not-found': {
    id: 'not-found',
    enPath: '/en/404',
    frPath: '/fr/404',
  },
};

/**
 * Resolves the route ID and language from any pathname.
 */
export function resolvePath(pathname: string, defaultLang: Language = 'en'): { routeId: RouteId; lang: Language } {
  // Clean pathname
  const cleanPath = pathname.replace(/\/$/, '') || '/';

  // Root path check
  if (cleanPath === '/' || cleanPath === '') {
    return { routeId: 'home', lang: defaultLang };
  }

  // Explicit French check
  if (cleanPath === '/fr') {
    return { routeId: 'home', lang: 'fr' };
  }
  if (cleanPath === '/en') {
    return { routeId: 'home', lang: 'en' };
  }

  // Find exact matching route
  for (const route of Object.values(ROUTES)) {
    if (cleanPath === route.enPath) {
      return { routeId: route.id, lang: 'en' };
    }
    if (cleanPath === route.frPath) {
      return { routeId: route.id, lang: 'fr' };
    }
  }

  // Partial or slug match (e.g. /products, /devis)
  if (cleanPath.startsWith('/fr')) {
    for (const route of Object.values(ROUTES)) {
      if (cleanPath.startsWith(route.frPath)) {
        return { routeId: route.id, lang: 'fr' };
      }
    }
    return { routeId: 'not-found', lang: 'fr' };
  }

  if (cleanPath.startsWith('/en')) {
    for (const route of Object.values(ROUTES)) {
      if (cleanPath.startsWith(route.enPath)) {
        return { routeId: route.id, lang: 'en' };
      }
    }
    return { routeId: 'not-found', lang: 'en' };
  }

  // Fallback if no lang prefix
  for (const route of Object.values(ROUTES)) {
    const bareEn = route.enPath.replace('/en', '');
    const bareFr = route.frPath.replace('/fr', '');
    if (cleanPath === bareEn) return { routeId: route.id, lang: 'en' };
    if (cleanPath === bareFr) return { routeId: route.id, lang: 'fr' };
  }

  return { routeId: 'not-found', lang: defaultLang };
}

/**
 * Returns the localized URL for a specific route ID.
 */
export function getRouteUrl(routeId: RouteId, lang: Language): string {
  const config = ROUTES[routeId] || ROUTES.home;
  return lang === 'fr' ? config.frPath : config.enPath;
}

/**
 * Returns the counterpart URL when toggling language from current route.
 */
export function getCounterpartUrl(currentRouteId: RouteId, targetLang: Language): string {
  return getRouteUrl(currentRouteId, targetLang);
}
