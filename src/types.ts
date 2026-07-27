export interface ProductItem {
  id: string;
  name: string;
  category: 'Tactical Gloves' | 'Combat Uniforms' | 'Tactical Pants' | 'Duty Belts' | 'Headwear' | 'Backpacks' | 'Pouches' | 'Morale Patches' | 'K9 Equipment';
  image: string;
  shortDescription: string;
  materials: string;
  specCode?: string;
  brandingOptions?: string[];
  keyFeatures?: string[];
}

export interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  equipmentType?: string;
  dailyOutput?: string;
  precisionTolerance?: string;
}

export interface QualityStep {
  id: number;
  stageName: string;
  title: string;
  description: string;
  checkpoint: string;
  details: string[];
}

export interface TimelineMilestone {
  year: string;
  label: string;
  title: string;
  description: string;
  bulletPoint?: string;
}

export interface IndustryServe {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Certification {
  id: string;
  title: string;
  badgeText: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
}

export interface ContactFormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  productInterest: string;
  message: string;
}
