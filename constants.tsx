
import { Book } from './types';

export const MOCK_BOOKS: Book[] = [
  {
    id: '1',
    title: 'O Hobbit',
    author: 'J.R.R. Tolkien',
    category: 'Fantasia',
    description: 'Bilbo Bolseiro era um hobbit que vivia em sua toca, no Condado. Mas sua vida pacata vira de cabeça para baixo quando o mago Gandalf e treze anões o convidam para uma jornada.',
    coverImage: 'https://picsum.photos/seed/hobbit/400/600',
    rating: 4.9,
    isbn: '978-8578277109',
    prices: [
      { retailer: 'Amazon', amount: 45.90, url: '#', logo: 'https://logo.clearbit.com/amazon.com' },
      { retailer: 'Magalu', amount: 49.90, url: '#', logo: 'https://logo.clearbit.com/magazineluiza.com.br' },
      { retailer: 'Mercado Livre', amount: 42.50, url: '#', logo: 'https://logo.clearbit.com/mercadolivre.com.br' }
    ]
  },
  {
    id: '2',
    title: '1984',
    author: 'George Orwell',
    category: 'Distopia',
    description: 'Winston Smith vive em uma sociedade totalitária controlada pelo Grande Irmão, onde o pensamento livre é um crime.',
    coverImage: 'https://picsum.photos/seed/1984/400/600',
    rating: 4.8,
    isbn: '978-8535914849',
    prices: [
      { retailer: 'Amazon', amount: 35.00, url: '#', logo: 'https://logo.clearbit.com/amazon.com' },
      { retailer: 'Saraiva', amount: 39.90, url: '#', logo: 'https://logo.clearbit.com/saraiva.com.br' }
    ]
  },
  {
    id: '3',
    title: 'Hábitos Atômicos',
    author: 'James Clear',
    category: 'Autoajuda',
    description: 'Um guia definitivo para quebrar maus hábitos e criar bons, através de pequenas mudanças incrementais.',
    coverImage: 'https://picsum.photos/seed/habits/400/600',
    rating: 4.7,
    isbn: '978-8550807560',
    prices: [
      { retailer: 'Amazon', amount: 52.00, url: '#', logo: 'https://logo.clearbit.com/amazon.com' },
      { retailer: 'Submarino', amount: 55.00, url: '#', logo: 'https://logo.clearbit.com/submarino.com.br' }
    ]
  }
];
