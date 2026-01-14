
import { Book, BlogPost, Quote, Author, Sebo, OfferProduct } from './types';

const generateMockBooks = (): Book[] => {
  const titles = [
    { t: 'Café com Deus Pai Vol. 6 - 2026', a: 'Júnior Rostirola', c: 'Religião', p: 69.90, link: 'https://amzn.to/49ccQDM', img: 'https://i.imgur.com/mh1bIQ4.jpg' },
    { t: 'A psicologia financeira', a: 'Morgan Housel', c: 'Finanças', p: 41.90, link: 'https://amzn.to/45uVilk', img: 'https://i.imgur.com/bC7VV6q.jpg' },
    { t: 'Coisa de rico', a: 'Michel Alcoforado', c: 'Finanças', p: 35.00, link: 'https://amzn.to/3Yc8M1w', img: 'https://i.imgur.com/01tRp7d.jpg' },
    { t: 'A hora da estrela', a: 'Clarice Lispector', c: 'Lit. Brasileira', p: 29.90, link: 'https://amzn.to/4qsowt4', img: 'https://i.imgur.com/BYFx8R7.jpg' },
    { t: 'A empregada (Livro 1)', a: 'Freida McFadden', c: 'Suspense', p: 39.90, link: 'https://amzn.to/44MrbFV', img: 'https://i.imgur.com/2PMtHUV.jpg' },
    { t: 'Hábitos Atômicos', a: 'James Clear', c: 'Autoajuda', p: 45.00, link: 'https://amzn.to/4pjcy4a', img: 'https://i.imgur.com/yDAQkM4.jpg' },
    { t: 'O homem mais rico da Babilonia', a: 'George S. Clason', c: 'Finanças', p: 22.90, link: 'https://amzn.to/45J5syS', img: 'https://i.imgur.com/SwVSeru.jpg' },
    { t: 'Pai rico pai pobre', a: 'Robert Kiyosaki', c: 'Finanças', p: 49.90, link: 'https://amzn.to/3LoLp1V', img: 'https://imgur.com/SGsNa1o.jpg' },
    { t: 'Os segredos da mente milionária', a: 'T. Harv Eker', c: 'Finanças', p: 32.50, link: 'https://amzn.to/4pw6sh1', img: 'https://i.imgur.com/FATyYfN.jpg' },
    { t: '1984', a: 'George Orwell', c: 'Clássicos', p: 25.00, link: 'https://amzn.to/3N8jhkc', img: 'https://i.imgur.com/YckUbHk.jpg' },
    { t: 'A revolução dos bichos', a: 'George Orwell', c: 'Clássicos', p: 18.90, link: 'https://amzn.to/4srM8Ad', img: 'https://i.imgur.com/BgKF1Eb.jpg' },
    { t: 'O pequeno príncipe', a: 'Antoine de Saint-Exupéry', c: 'Infantil', p: 15.00, link: 'https://amzn.to/3L97v8C', img: 'https://i.imgur.com/Y7Xv4j6.jpg' },
    { t: 'Torto arado', a: 'Itamar Vieira Junior', c: 'Lit. Brasileira', p: 44.90, link: 'https://amzn.to/4jt0oEw', img: 'https://i.imgur.com/GOLtrsG.jpg' },
    { t: 'Tudo sobre o amor', a: 'bell hooks', c: 'Sociologia', p: 39.90, link: 'https://amzn.to/45KDMts', img: 'https://i.imgur.com/zwNUsJC.jpg' },
    { t: 'É assim que acaba', a: 'Colleen Hoover', c: 'Romance', p: 36.50, link: 'https://amzn.to/4swZISE', img: 'https://i.imgur.com/EiLl1kB.jpg' },
    { t: 'Mais esperto que o diabo', a: 'Napoleon Hill', c: 'Autoajuda', p: 29.90, link: 'https://amzn.to/3NazBB2', img: 'https://i.imgur.com/4csvkhS.jpg' },
    { t: 'A sutil arte de ligar o foda se', a: 'Mark Manson', c: 'Autoajuda', p: 38.00, link: 'https://amzn.to/450EBy2', img: 'https://i.imgur.com/XXRlgDQ.jpg' },
    { t: 'Mulheres que correm com os lobos', a: 'Clarissa Pinkola Estés', c: 'Psicologia', p: 54.90, link: 'https://amzn.to/49o9DkH', img: 'https://i.imgur.com/AxlerOH.jpg' },
    { t: 'É assim que começa', a: 'Colleen Hoover', c: 'Romance', p: 38.90, link: 'https://amzn.to/4jtMBxH', img: 'https://i.imgur.com/UJwPIDK.jpg' },
    { t: 'Verity', a: 'Colleen Hoover', c: 'Suspense', p: 35.00, link: 'https://amzn.to/49tNJMW', img: 'https://i.imgur.com/Ab0TPxZ.jpg' },
    { t: 'O lado feio do amor', a: 'Colleen Hoover', c: 'Romance', p: 32.00, link: 'https://amzn.to/4snhzeK', img: 'https://i.imgur.com/7PmsKSw.jpg' },
    { t: 'Mentirosos', a: 'E. Lockhart', c: 'Suspense', p: 28.00, link: 'https://amzn.to/3Z4jiIo', img: 'https://i.imgur.com/9GtYRbw.jpg' },
    { t: 'Daisy Jones and the Six', a: 'Taylor Jenkins Reid', c: 'Ficção', p: 34.90, link: 'https://amzn.to/3Ngw6J5', img: 'https://i.imgur.com/Y1M8Lsr.jpg' },
    { t: 'Os sete maridos de evelyn hugo', a: 'Taylor Jenkins Reid', c: 'Ficção', p: 39.00, link: 'https://amzn.to/4pxERfr', img: 'https://i.imgur.com/DotPTey.jpg' },
    { t: 'Heartstopper', a: 'Alice Oseman', c: 'HQ', p: 42.00, link: 'https://amzn.to/49PU8m7', img: 'https://i.imgur.com/aoiF2qX.jpg' },
    { t: 'Corte de espinhos e rosas', a: 'Sarah J. Maas', c: 'Fantasia', p: 48.00, link: 'https://amzn.to/4q6efDe', img: 'https://i.imgur.com/Il3M9Ag.jpg' },
    { t: 'O principe cruel', a: 'Holly Black', c: 'Fantasia', p: 35.90, link: 'https://amzn.to/3NmdvLL', img: 'https://i.imgur.com/7MNyQ5l.jpg' },
    { t: 'Quarta asa', a: 'Rebecca Yarros', c: 'Fantasia', p: 59.90, link: 'https://amzn.to/4jzuJBs', img: 'https://i.imgur.com/j5DvwoV.jpg' },
    { t: 'Biblioteca de almas', a: 'Ransom Riggs', c: 'Fantasia', p: 33.00, link: 'https://amzn.to/3LvK21g', img: 'https://i.imgur.com/Wa6rKNd.jpg' },
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
    reviewsCount: 1500,
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
    imageUrl: 'https://i.imgur.com/xTGiBZw.jpg',
    amazonLink: 'https://amzn.to/3Ngkrdl'
  },
  {
    id: 'off-2',
    title: 'Huggies Supreme Care Fralda G 140 Unidades',
    category: 'Bebê',
    description: 'Máxima proteção e conforto para o seu bebê.',
    price: 174.90,
    oldPrice: 229.90,
    discount: 23,
    imageUrl: 'https://i.imgur.com/d5lPqwL.jpg',
    amazonLink: 'https://amzn.to/4puRaJv'
  }
];

export const MOCK_BLOG: BlogPost[] = [
  {
    id: '1',
    slug: 'por-que-ler-ficcao-cientifica-aumenta-a-criatividade',
    title: 'Por que ler ficção científica aumenta a criatividade?',
    excerpt: 'Descubra como mundos imaginários podem expandir seus horizontes cognitivos.',
    content: `Conteúdo do blog...`,
    author: 'Ana Silva',
    date: '2024-05-20',
    imageUrl: 'https://picsum.photos/id/40/800/400',
    tags: ['Sci-Fi', 'Criatividade', 'Leitura']
  }
];

export const MOCK_QUOTES: Quote[] = [
  { id: 'q1', text: "Não é preciso ser brilhante para ser próspero, basta ter um plano e segui-lo.", author: "Robert Kiyosaki", book: "Pai Rico, Pai Pobre", amazonLink: "https://amzn.to/3LoLp1V" },
  { id: 'q2', text: "Você não atinge o nível de seus objetivos. Você cai para o nível de seus sistemas.", author: "James Clear", book: "Hábitos Atômicos", amazonLink: "https://amzn.to/4pjcy4a" },
  { id: 'q3', text: "O essencial é invisível aos olhos.", author: "Antoine de Saint-Exupéry", book: "O Pequeno Príncipe", amazonLink: "https://amzn.to/3L97v8C" },
  { id: 'q4', text: "A vida não é o que a gente viveu, e sim o que a gente recorda.", author: "Gabriel García Márquez", book: "Cem Anos de Solidão", amazonLink: "https://amzn.to/3Z4jiIo" }
];

export const MOCK_AUTHORS: Author[] = [];
export const MOCK_SEBOS: Sebo[] = [];
