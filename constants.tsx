
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
    { t: 'Os segredos da mente milionaria', a: 'T. Harv Eker', c: 'Finanças', p: 32.50, link: 'https://amzn.to/4pw6sh1', img: 'https://i.imgur.com/FATyYfN.jpg' },
    { t: 'Mais esperto que o diabo', a: 'Napoleon Hill', c: 'Autoajuda', p: 29.90, link: 'https://amzn.to/3NazBB2', img: 'https://i.imgur.com/4csvkhS.jpg' },
    { t: 'A sutil arte de ligar o f*da-se', a: 'Mark Manson', c: 'Autoajuda', p: 38.00, link: 'https://amzn.to/450EBy2', img: 'https://i.imgur.com/XXRlgDQ.jpg' },
    { t: 'Mulheres que correm com os lobos', a: 'Clarissa Pinkola Estés', c: 'Psicologia', p: 54.90, link: 'https://amzn.to/49o9DkH', img: 'https://i.imgur.com/AxlerOH.jpg' },
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
    content: `A ficção científica atua como um laboratório mental que expande a nossa capacidade de pensar fora da caixa...`,
    author: 'Ana Silva',
    date: '2024-05-20',
    imageUrl: 'https://picsum.photos/id/40/800/400',
    tags: ['Sci-Fi', 'Criatividade', 'Leitura']
  }
];

export const MOCK_QUOTES: Quote[] = [
  { id: 'q1', text: "Não é preciso ser brilhante para ser próspero, basta ter um plano e segui-lo.", author: "Robert Kiyosaki", book: "Pai Rico, Pai Pobre" },
  { id: 'q2', text: "Você não atinge o nível de seus objetivos. Você cai para o nível de seus sistemas.", author: "James Clear", book: "Hábitos Atômicos" },
  { id: 'q3', text: "Entre o passado e o futuro, existe um lugar chamado agora, e é lá que a vida acontece.", author: "Matt Haig", book: "A Biblioteca da Meia-Noite" },
  { id: 'q4', text: "Liberdade é a liberdade de dizer que dois mais dois são quatro.", author: "George Orwell", book: "1984" },
  { id: 'q5', text: "O essencial é invisível aos olhos.", author: "Antoine de Saint-Exupéry", book: "O Pequeno Príncipe" },
  { id: 'q6', text: "É preciso muito esforço para que as coisas pareçam fáceis.", author: "Taylor Jenkins Reid", book: "Daisy Jones and The Six" },
  { id: 'q7', text: "Às vezes, a pessoa que te ama é a que mais te machuca.", author: "Colleen Hoover", book: "É Assim que Acaba" },
  { id: 'q8', text: "Nem todos os que vagam estão perdidos.", author: "J.R.R. Tolkien", book: "O Senhor dos Anéis" },
  { id: 'q9', text: "São as nossas escolhas que revelam o que realmente somos.", author: "J.K. Rowling", book: "Harry Potter" },
  { id: 'q10', text: "O medo é o assassino da mente.", author: "Frank Herbert", book: "Duna" },
  { id: 'q11', text: "A vida não é o que a gente viveu, e sim o que a gente recorda.", author: "Gabriel García Márquez", book: "Cem Anos de Solidão" },
  { id: 'q12', text: "Viver é muito perigoso.", author: "Guimarães Rosa", book: "Grande Sertão: Veredas" },
  { id: 'q13', text: "Amo a liberdade, por isso deixo livre tudo que amo.", author: "Machado de Assis", book: "Dom Casmurro" },
  { id: 'q14', text: "O amor não é algo que você sente, é algo que você faz.", author: "bell hooks", book: "Tudo Sobre o Amor" },
  { id: 'q15', text: "Nossa história é escrita pelos nossos pés.", author: "Itamar Vieira Junior", book: "Torto Arado" }
];

export const MOCK_AUTHORS: Author[] = [
  { id: 'a1', name: "Matt Haig", bio: "Escritor britânico que aborda saúde mental com sensibilidade.", imageUrl: "https://picsum.photos/seed/matthaig/400/400", category: "Ficção", topBooks: ["A Biblioteca da Meia-Noite"], hobby: "Correr", country: "Reino Unido", maritalStatus: "Casado", children: "2 filhos" },
  { id: 'a2', name: "James Clear", bio: "Especialista em formação de hábitos e melhoria contínua.", imageUrl: "https://picsum.photos/seed/jamesclear/400/400", category: "Autoajuda", topBooks: ["Hábitos Atômicos"], hobby: "Levantamento de peso", country: "EUA", maritalStatus: "Casado", children: "Sem filhos" },
  { id: 'a3', name: "Colleen Hoover", bio: "Fenômeno do TikTok e autora número 1 do NYT.", imageUrl: "https://picsum.photos/seed/hoover/400/400", category: "Romance", topBooks: ["É Assim que Acaba"], hobby: "Leitura", country: "EUA", maritalStatus: "Casada", children: "3 filhos" },
  { id: 'a4', name: "Robert Kiyosaki", bio: "Empresário e autor de finanças pessoais.", imageUrl: "https://picsum.photos/seed/robertk/400/400", category: "Finanças", topBooks: ["Pai Rico, Pai Pobre"], hobby: "Golfe", country: "EUA", maritalStatus: "Casado", children: "Sem filhos" },
  { id: 'a5', name: "Taylor Jenkins Reid", bio: "Autora aclamada por criar biografias fictícias de ícones culturais.", imageUrl: "https://picsum.photos/seed/tjr/400/400", category: "Ficção", topBooks: ["Evelyn Hugo"], hobby: "Viagens", country: "EUA", maritalStatus: "Casada", children: "1 filha" },
  { id: 'a6', name: "Sarah J. Maas", bio: "Rainha da fantasia romântica moderna.", imageUrl: "https://picsum.photos/seed/sjm/400/400", category: "Fantasia", topBooks: ["Corte de Espinhos e Rosas"], hobby: "Música", country: "EUA", maritalStatus: "Casada", children: "2 filhos" },
  { id: 'a7', name: "George Orwell", bio: "Voz profética da literatura clássica.", imageUrl: "https://picsum.photos/seed/orwell/400/400", category: "Clássicos", topBooks: ["1984"], hobby: "Jardinagem", country: "Reino Unido", maritalStatus: "Viúvo", children: "1 filho" },
  { id: 'a8', name: "Itamar Vieira Junior", bio: "Um dos maiores nomes da literatura brasileira atual.", imageUrl: "https://picsum.photos/seed/itamar/400/400", category: "Lit. Brasileira", topBooks: ["Torto Arado"], hobby: "Pesquisa", country: "Brasil", maritalStatus: "Privado", children: "Sim" },
  { id: 'a9', name: "Yuval Noah Harari", bio: "Historiador que analisa o passado e o futuro da humanidade.", imageUrl: "https://picsum.photos/seed/harari/400/400", category: "História", topBooks: ["Sapiens"], hobby: "Meditação", country: "Israel", maritalStatus: "Casado", children: "Sem filhos" },
  { id: 'a10', name: "Mark Manson", bio: "Autor que desafia a positividade tóxica.", imageUrl: "https://picsum.photos/seed/manson/400/400", category: "Autoajuda", topBooks: ["A Sutil Arte..."], hobby: "Música", country: "EUA", maritalStatus: "Casado", children: "Sem filhos" }
];

export const MOCK_SEBOS: Sebo[] = [
  // SP
  { id: 'sp1', name: 'Sebo do Messias', city: 'São Paulo', state: 'SP', address: 'Praça João Mendes, 140 - Centro', phone: '(11) 3104-7111', instagram: '@sebodomessias' },
  { id: 'sp2', name: 'Desapontamento', city: 'São Paulo', state: 'SP', address: 'Rua Bento Freitas, 447 - República', phone: '(11) 3222-1234', instagram: '@desapontamento' },
  { id: 'sp3', name: 'Sebo do Mar', city: 'São Paulo', state: 'SP', address: 'Rua Simão Álvares, 102 - Pinheiros', phone: '(11) 3031-6655', instagram: '@sebodomar' },
  { id: 'sp4', name: 'Sebo Clepsidra', city: 'São Paulo', state: 'SP', address: 'Rua Doutor Frederico Steidel, 81 - Santa Cecília', phone: '(11) 3223-2233', instagram: '@seboclepsidra' },
  { id: 'sp5', name: 'Banca do Livro', city: 'São Paulo', state: 'SP', address: 'Av. Paulista, 1000', phone: '(11) 2222-3333', instagram: '@bancadolivro' },
  { id: 'sp6', name: 'Suburbano Convicto', city: 'São Paulo', state: 'SP', address: 'Rua Treze de Maio, 70', phone: '(11) 3257-1111', instagram: '@suburbanoconvicto' },
  { id: 'sp7', name: 'Sebo Liberdade', city: 'São Paulo', state: 'SP', address: 'Rua da Glória, 45', phone: '(11) 3105-9999', instagram: '@seboliberdade' },
  { id: 'sp8', name: 'Casarão do Livro', city: 'São Paulo', state: 'SP', address: 'Rua da Consolação, 2000', phone: '(11) 3255-8888', instagram: '@casaraodolivro' },
  { id: 'sp9', name: 'Sebo Aliança', city: 'São Paulo', state: 'SP', address: 'Rua São Bento, 300', phone: '(11) 3101-7777', instagram: '@seboalianca' },
  { id: 'sp10', name: 'Canto das Letras', city: 'São Paulo', state: 'SP', address: 'Rua Teodoro Sampaio, 1500', phone: '(11) 3081-6666', instagram: '@cantodasletras' },
  // RJ
  { id: 'rj1', name: 'Sebo Berinjela', city: 'Rio de Janeiro', state: 'RJ', address: 'Rua do Rosário, 121 - Centro', phone: '(21) 2221-3333', instagram: '@seboberinjela' },
  { id: 'rj2', name: 'Livraria Leonardo da Vinci', city: 'Rio de Janeiro', state: 'RJ', address: 'Av. Rio Branco, 185', phone: '(21) 2533-2233', instagram: '@leonardodavincilivraria' },
  { id: 'rj3', name: 'Sebo Baratos da Ribeiro', city: 'Rio de Janeiro', state: 'RJ', address: 'Rua Paulino Fernandes, 15', phone: '(21) 2513-3333', instagram: '@baratosdaribeiro' },
  { id: 'rj4', name: 'Folha Seca', city: 'Rio de Janeiro', state: 'RJ', address: 'Rua do Ouvidor, 37', phone: '(21) 2507-7155', instagram: '@livrariafolhaseca' },
  { id: 'rj5', name: 'Sebo Praia dos Livros', city: 'Rio de Janeiro', state: 'RJ', address: 'Rua Dias Ferreira, 417', phone: '(21) 2259-4444', instagram: '@praiadoslivros' },
  { id: 'rj6', name: 'Sebo Orvalho', city: 'Rio de Janeiro', state: 'RJ', address: 'Rua Voluntários da Pátria, 200', phone: '(21) 2527-5555', instagram: '@seboorvalho' },
  { id: 'rj7', name: 'Relíquia Livros', city: 'Rio de Janeiro', state: 'RJ', address: 'Rua Sete de Setembro, 150', phone: '(21) 2232-6666', instagram: '@reliquialivros' },
  { id: 'rj8', name: 'Sebo Carioca', city: 'Rio de Janeiro', state: 'RJ', address: 'Rua da Carioca, 40', phone: '(21) 2222-7777', instagram: '@sebocarioca' },
  { id: 'rj9', name: 'O Garimpo', city: 'Rio de Janeiro', state: 'RJ', address: 'Rua Jardim Botânico, 600', phone: '(21) 2511-8888', instagram: '@ogarimpolivros' },
  { id: 'rj10', name: 'Estação Literária', city: 'Rio de Janeiro', state: 'RJ', address: 'Rua Conde de Bonfim, 300', phone: '(21) 2568-9999', instagram: '@estacaoliteraria' },
  // MG
  { id: 'mg1', name: 'Sebo Scriptum', city: 'Belo Horizonte', state: 'MG', address: 'Rua Fernandes Tourinho, 99', phone: '(31) 3223-1234', instagram: '@scriptumlivraria' },
  { id: 'mg2', name: 'Livraria Quixote', city: 'Belo Horizonte', state: 'MG', address: 'Rua Fernandes Tourinho, 274', phone: '(31) 3227-3077', instagram: '@quixote_livraria' },
  { id: 'mg3', name: 'Sebo Cultural', city: 'Belo Horizonte', state: 'MG', address: 'Rua dos Guajajaras, 189', phone: '(31) 3212-3333', instagram: '@seboculturalbh' },
  { id: 'mg4', name: 'Banca do Saber', city: 'Belo Horizonte', state: 'MG', address: 'Praça da Liberdade, S/N', phone: '(31) 3232-4444', instagram: '@bancadosaber' },
  { id: 'mg5', name: 'Sebo do Savassi', city: 'Belo Horizonte', state: 'MG', address: 'Rua Sergipe, 1200', phone: '(31) 3222-5555', instagram: '@sebosavassi' },
  { id: 'mg6', name: 'Livraria do Psicólogo', city: 'Belo Horizonte', state: 'MG', address: 'Rua dos Goitacazes, 1029', phone: '(31) 3213-6666', instagram: '@livrariapsicologo' },
  { id: 'mg7', name: 'Sebo das Gerais', city: 'Belo Horizonte', state: 'MG', address: 'Av. Getúlio Vargas, 1400', phone: '(31) 3221-7777', instagram: '@sebodasgerais' },
  { id: 'mg8', name: 'Garimpo das Letras', city: 'Belo Horizonte', state: 'MG', address: 'Rua da Bahia, 1100', phone: '(31) 3224-8888', instagram: '@garimpodasletras' },
  { id: 'mg9', name: 'Sebo Ouro Preto', city: 'Ouro Preto', state: 'MG', address: 'Rua Direita, 50', phone: '(31) 3551-9999', instagram: '@seboouropreto' },
  { id: 'mg10', name: 'Alfarrabista Tiradentes', city: 'Tiradentes', state: 'MG', address: 'Rua Direita, 100', phone: '(32) 3355-1111', instagram: '@alfarrabistatiradentes' }
];
