
<<<<<<< HEAD
=======
export interface Price {
  retailer: string;
  amount: number;
  url: string;
  logo: string;
}

>>>>>>> cf8524a2e1ed6d2832c5fdd22289fa7679c426b8
export interface Book {
  id: string;
  title: string;
  author: string;
<<<<<<< HEAD
  description: string;
  price: number;
  oldPrice?: number;
  imageUrl: string;
  category: string;
  rating: number;
  reviewsCount: number;
  amazonLink: string;
  updatedAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
  tags: string[];
}

export interface Quote {
  id: string;
  text: string;
  author: string;
  book?: string;
}

export interface Author {
  id: string;
  name: string;
  bio: string;
  imageUrl: string;
  category: string;
  topBooks: string[];
  hobby: string;
  country: string;
  maritalStatus: string;
  children: string;
}

export interface Sebo {
  id: string;
  name: string;
  city: string;
  state: string;
  address: string;
  phone: string;
  instagram: string;
  coordinates?: { lat: number; lng: number };
=======
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
>>>>>>> cf8524a2e1ed6d2832c5fdd22289fa7679c426b8
}
