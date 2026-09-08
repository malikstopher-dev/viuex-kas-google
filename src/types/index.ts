export type Language = 'en' | 'fr';
export type Theme = 'light' | 'dark';

export type RouteId =
  | 'home'
  | 'about'
  | 'products'
  | 'lifting-equipment'
  | 'fasteners'
  | 'industrial-hardware'
  | 'products-lifting'
  | 'products-fasteners'
  | 'products-hardware'
  | 'procurement'
  | 'industries'
  | 'rfq'
  | 'contact'
  | 'not-found';

export interface RFQItem {
  id: string;
  description: string;
  partNumber?: string;
  specification?: string; // e.g. Grade 8.8, HDG, Electro-galv, etc.
  quantity: number | string;
  unit?: string; // pcs, meters, sets, boxes, kg, tons
  notes?: string;
  category?: 'lifting' | 'fasteners' | 'hardware' | 'procurement' | 'other';
}

export interface RFQContactInfo {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: 'South Africa' | 'Democratic Republic of the Congo' | 'Other';
  province: string;
  city: string;
  deliveryLocation: string;
  requiredDeliveryDate?: string;
  generalNotes?: string;
}

export interface RFQSubmission {
  referenceId: string;
  date: string;
  contact: RFQContactInfo;
  items: RFQItem[];
}

export interface ProductCategoryData {
  id: string;
  slugEn: string;
  slugFr: string;
  routeId: RouteId;
  titleEn: string;
  titleFr: string;
  subtitleEn: string;
  subtitleFr: string;
  descriptionEn: string;
  descriptionFr: string;
  image: string;
  featuredItems: {
    nameEn: string;
    nameFr: string;
    specEn: string;
    specFr: string;
  }[];
}
