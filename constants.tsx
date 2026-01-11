
import { Book, BlogPost, Quote, Author, Sebo, OfferProduct } from './types';

const generateMockBooks = (): Book[] => {
  const titles = [
    { t: 'Café com Deus Pai Vol. 6 - 2026', a: 'Júnior Rostirola', c: 'Religião', p: 69.90, link: 'https://amzn.to/49ccQDM', img: 'https://i.imgur.com/mh1bIQ4.jpg' },
    { t: 'A psicologia financeira', a: 'Morgan Housel', c: 'Finanças', p: 41.90, link: 'https://amzn.to/45uVilk', img: 'https://i.imgur.com/bC7VV6q.jpg' },
    { t: 'Coisa de rico', a: 'Michel Alcoforado', c: 'Finanças', p: 35.00, link: 'https://amzn.to/3Yc8M1w', img: 'https://i.imgur.com/01tRp7d.jpg' },
    { t: 'A hora da estrela', a: 'Clarice Lispector', c: 'Lit. Brasileira', p: 29.90, link: 'https://amzn.to/4qsowt4', img: 'https://i.imgur.com/BYFx8R7.jpg' },
    { t: 'Hábitos Atômicos', a: 'James Clear', c: 'Autoajuda', p: 45.00, link: 'https://amzn.to/4pjcy4a', img: 'https://i.imgur.com/yDAQkM4.jpg' },
    { t: 'O homem mais rico da Babilonia', a: 'George S. Clason', c: 'Finanças', p: 22.90, link: 'https://amzn.to/45J5syS', img: 'https://i.imgur.com/SwVSeru.jpg' },
    { t: 'Pai rico pai pobre', a: 'Robert Kiyosaki', c: 'Finanças', p: 49.90, link: 'https://amzn.to/3LoLp1V', img: 'https://imgur.com/SGsNa1o.jpg' },
    { t: 'Os segredos da mente milionária', a: 'T. Harv Eker', c: 'Finanças', p: 32.50, link: 'https://amzn.to/4pw6sh1', img: 'https://i.imgur.com/FATyYfN.jpg' },
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
    id: 'off-2',
    title: 'Huggies Supreme Care Fralda G 140 Unidades',
    category: 'Bebê',
    description: 'Máxima proteção e conforto para o seu bebê com tecnologia Huggies.',
    price: 174.90,
    oldPrice: 229.90,
    discount: 23,
    imageUrl: 'https://i.imgur.com/d5lPqwL.jpg',
    amazonLink: 'https://amzn.to/4puRaJv'
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
    content: `A ficção científica atua como um laboratório mental que expande a nossa capacidade de pensar fora da caixa.`,
    author: 'Ana Silva',
    date: '2024-05-20',
    imageUrl: 'https://picsum.photos/id/40/800/400',
    tags: ['Sci-Fi', 'Criatividade', 'Leitura']
  }
];

export const MOCK_QUOTES: Quote[] = [
  { id: 'q1', text: "Não é preciso ser brilhante para ser próspero, basta ter um plano e segui-lo.", author: "Robert Kiyosaki", book: "Pai Rico, Pai Pobre" },
  { id: 'q2', text: "Você não atinge o nível de seus objetivos. Você cai para o nível de seus sistemas.", author: "James Clear", book: "Hábitos Atômicos" },
  { id: 'q3', text: "O essencial é invisível aos olhos.", author: "Antoine de Saint-Exupéry", book: "O Pequeno Príncipe" }
];

export const MOCK_AUTHORS: Author[] = [
  {
    id: 'a1',
    name: "Matt Haig",
    bio: "Escritor britânico conhecido por suas obras sobre saúde mental.",
    imageUrl: "https://picsum.photos/seed/matthaig/400/400",
    category: "Ficção",
    topBooks: ["A Biblioteca da Meia-Noite"],
    hobby: "Correr",
    country: "Reino Unido",
    maritalStatus: "Casado",
    children: "2 filhos"
  }
];

export const MOCK_SEBOS: Sebo[] = [
  { id: 'sp1', name: 'Sebo do Messias', city: 'São Paulo', state: 'SP', address: 'Praça João Mendes, 140 - Centro', phone: '(11) 3104-7111', instagram: '@sebodomessias' },
  { id: 'rj1', name: 'Sebo Berinjela', city: 'Rio de Janeiro', state: 'RJ', address: 'Rua do Rosário, 121 - Centro', phone: '(21) 2221-3333', instagram: '@seboberinjela' },
  { id: 'mg1', name: 'Sebo Scriptum', city: 'Belo Horizonte', state: 'MG', address: 'Rua Fernandes Tourinho, 99 - Savassi', phone: '(31) 3223-1234', instagram: '@scriptumlivraria' }
];
