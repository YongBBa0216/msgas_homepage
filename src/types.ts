export type Language = 'ko' | 'en';

export interface GasProduct {
  id: string;
  nameKo: string;
  nameEn: string;
  formula?: string;
  category: 'industrial' | 'fuel' | 'specialty' | 'medical' | 'standard' | 'equipment';
  categoryLabelKo: string;
  categoryLabelEn: string;
  purity: string;
  descriptionKo: string;
  descriptionEn: string;
  supplyForms: string[];
  applications: string[];
  msdsCode: string;
  highlight?: boolean;
}

export interface NewsItem {
  id: string;
  category: string;
  categoryEn: string;
  date: string;
  titleKo: string;
  titleEn: string;
  summaryKo: string;
  summaryEn: string;
  contentKo: string;
  contentEn: string;
  imageUrl?: string;
  isSpecialProject?: boolean;
}

export interface RegionalHub {
  id: string;
  nameKo: string;
  nameEn: string;
  type: string;
  addressKo: string;
  addressEn: string;
  phone: string;
  fax: string;
  tankCapacity: string;
  fleetCount: string;
  descriptionKo: string;
  descriptionEn: string;
  coordinates: { x: number; y: number }; // percentage positions on map
}
