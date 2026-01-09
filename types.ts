
export interface Price {
  retailer: string;
  amount: number;
  url: string;
  logo: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  description: string;
  category: string;
  prices: Price[];
  rating: number;
  isbn: string;
}

export interface AIInsight {
  analysis: string;
  isGoodDeal: boolean;
  alternativeSuggestions: string[];
}

export enum ViewMode {
  GRID = 'GRID',
  LIST = 'LIST'
}
