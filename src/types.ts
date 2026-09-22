export type Currency = 'XAF' | 'USD' | 'EUR';
export type Theme = 'dark' | 'light';
export type Language = 'fr' | 'en';
export type PageId = 'home' | 'guide-ia' | 'a-propos' | 'solutions-entreprises' | 'coaching' | 'contact';

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  priceUSD: number;
  originalPriceUSD?: number;
  priceXAF: number;
  originalPriceXAF?: number;
  discountPercentage?: number;
  featured?: boolean;
  category: 'ia' | 'reseaux-sociaux' | 'video' | 'pack' | 'ads';
  bulletPoints: string[];
  chariowUrl: string;
  coverImage?: string;
  badge?: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  client: string;
  description: string;
  tags: string[];
  behanceUrl: string;
  image: string;
  metrics?: string;
}

export interface ConversionEvent {
  id: string;
  timestamp: number;
  type: 'chariow_guide_ia' | 'chariow_product' | 'whatsapp_direct' | 'behance_portfolio' | 'audit_startupic' | 'coaching_booking';
  label: string;
  metadata?: Record<string, any>;
}

export interface CoachingSlot {
  id: string;
  title: string;
  duration: string;
  priceUSD: number;
  priceXAF: number;
  target: string;
  deliverables: string[];
}
