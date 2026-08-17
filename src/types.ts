export type ServiceCategory = 'curtains' | 'blinds' | 'wallpaper' | 'all';

export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategory;
  tagline: string;
  shortDesc: string;
  features: string[];
  idealFor: string;
  image: string;
  popular?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  serviceUsed: 'Curtains' | 'Blinds' | 'Wallpaper' | 'Full Home Decor';
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: 'general' | 'curtains' | 'blinds' | 'wallpaper' | 'installation';
}

export interface GalleryProject {
  id: string;
  title: string;
  category: 'curtains' | 'blinds' | 'wallpaper';
  location: string;
  image: string;
  description: string;
  tag: string;
}

export interface LeadFormData {
  name: string;
  phone: string;
  service: 'Curtains' | 'Blinds' | 'Wallpaper' | 'Complete Window & Wall Decor';
  locationArea: string;
  message?: string;
  preferredTime?: 'Morning' | 'Afternoon' | 'Evening';
}

export interface SEOMetadata {
  title: string;
  description: string;
  canonicalPath: string;
  h1: string;
  keywords?: string[];
  ogImage?: string;
}
