
import { Book, BlogPost, Quote, Author, Sebo, OfferProduct } from './types';

const generateMockBooks = (): Book[] => {
  const titles = [
    { t: 'Café com Deus Pai Vol. 6 - 2026', a: 'Júnior Rostirola', c: 'Religião', p: 69.90, link: 'https://amzn.to/49ccQDM', img: 'https://i.imgur.com/mh1bIQ4.jpg' },
    { t: 'A psicologia financeira', a: 'Morgan Housel', c: 'Finanças', p: 41.90, link: 'https://amzn.to/45uVilk', img: 'https://i.imgur.com/bC7VV6q.jpg' },
    { t: 'Hábitos Atômicos', a: 'James Clear', c: 'Autoajuda', p: 45.00, link: 'https://amzn.to/4pjcy4a', img: 'https://i.imgur.com/yDAQkM4.jpg' },
    { t: 'Pai rico pai pobre', a: 'Robert Kiyosaki', c: 'Finanças', p: 49.90, link: 'https://amzn.to/3LoLp1V', img: 'https://imgur.com/SGsNa1o.jpg' },
  ];

  return titles.map((book, index) => ({
    id: `book-${index}`,
    title: book.t,
    author: book.a,
    description: `Um dos livros mais vendidos e influentes da atualidade na categoria ${book.c}.`,
    price: book.p,
    oldPrice: book.p * 1.3,
    imageUrl: book.img,
    category: book.c,
    rating: 4.8,
    reviewsCount: Math.floor(Math.random() * 20000) + 1000,
    amazonLink: book.link,
    updatedAt: new Date().toISOString()
  }));
};

export const MOCK_BOOKS: Book[] = generateMockBooks();

export const MOCK_OFFERS: OfferProduct[] = [
  {
    id: 'off-1',
    title: 'Kindle Paperwhite Signature Edition 32 GB',
    category: 'Tecnologia',
    description: 'Leitor de livros digitais com tela de 6,8” e iluminação ajustável.',
    price: 949.00,
    oldPrice: 1199.00,
    discount: 20,
    imageUrl: 'https://i.imgur.com/a/xTGiBZw.jpg',
    amazonLink: 'https://amzn.to/3Ngkrdl'
  },
  {
    id: 'off-6',
    title: 'NIVEA Sérum Facial Cellular Luminous 630 30ml',
    category: 'Beleza',
    description: 'Deixa a pele uniforme, Reduz marcas escurecidas',
    price: 61.79,
    oldPrice: 129.90,
    discount: 52,
    imageUrl: 'https://i.imgur.com/6NOZVsM.jpg',
    amazonLink: 'https://amzn.to/3YzyBIY'
  }
];

export const MOCK_BLOG: BlogPost[] = [
  {
    id: '1',
    slug: 'por-que-ler-ficcao-cientifica-aumenta-a-criatividade',
    title: 'Por que ler ficção científica aumenta a criatividade?',
    excerpt: 'Descubra como mundos imaginários podem expandir seus horizontes cognitivos.',
    content: `A ficção científica é um laboratório mental...`,
    author: 'Ana Silva',
    date: '2024-05-20',
    imageUrl: 'https://picsum.photos/id/40/800/400',
    tags: ['Sci-Fi', 'Criatividade', 'Leitura']
  }
];

export const MOCK_QUOTES: Quote[] = [
  { id: 'q1', text: "Não é preciso ser brilhante para ser próspero, basta ter um plano e segui-lo.", author: "Robert Kiyosaki", book: "Pai Rico, Pai Pobre" }
];

export const MOCK_AUTHORS: Author[] = [
  { id: 'a1', name: "James Clear", bio: "Especialista em formação de hábitos.", imageUrl: "https://i.imgur.com/yDAQkM4.jpg", category: "Autoajuda", topBooks: ["Hábitos Atômicos"], hobby: "Fotografia", country: "EUA", maritalStatus: "Casado", children: "Não" }
];

export const MOCK_SEBOS: Sebo[] = [
  { id: 'sp1', name: 'Sebo do Messias', city: 'São Paulo', state: 'SP', address: 'Praça João Mendes, 140 - Centro', phone: '(11) 3104-7111', instagram: '@sebodomessias' }
];
