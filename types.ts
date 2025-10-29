
export interface Product {
  code: string;
  name: string;
  description: string;
  applications?: string[];
  useCase?: string;
  innovation?: string;
  image?: string | string[];
}

export interface ProductCategory {
  code:string;
  name: string;
  slug: string;
  tagline: string;
  image?: string;
  products: Product[];
  compliance?: string[];
  advantages?: string[];
  sharedHighlights?: string[];
  technicalSnapshot?: { parameter: string; specification: string; certification: string }[];
  materials?: string[];
  accessories?: string[];
}

export interface KeyValueProposition {
  coreValue: string;
  description: string;
}

export interface BrandPillar {
  icon: string; // Tailwind icon class or emoji
  title: string;
  description: string;
}

export interface Industry {
  name: string;
  applicationExample: string;
  image: string;
}

export interface QualityPoint {
  title: string;
  description?: string;
}

export interface CostComparison {
  factor: string;
  emphzAdvantage: string;
  competitor: string;
}

export interface CorporateDetail {
  parameter: string;
  detail: string;
}

export interface TechnicalStandard {
  property: string;
  emphzStandard: string;
  internationalCode: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}