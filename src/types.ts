export interface CourseModule {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  dateBadge: string;
  description: string;
  outcome: string;
  imageUrl: string;
  animClass: string;
  lessons: string[];
  tools: string[];
  homework: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge: string;
  description: string;
  price: number;
  originalPrice: number;
  installment: number;
  isPopular?: boolean;
  features: string[];
  giftNote?: string;
}

export interface StudentCase {
  id: string;
  studentName: string;
  role: string;
  imageUrl: string;
  salesCount: number;
  revenueRub: number;
  timeframe: string;
  story: string;
  quote: string;
  niche: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export type ActiveScreen = 'overview' | 'map' | 'playground' | 'calculator';
