<<<<<<< HEAD
import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Sebos from './pages/Sebos';
import Books from './pages/Books';
import Quotes from './pages/Quotes';
import Authors from './pages/Authors';
import Blog from './pages/Blog';
import BlogPostPage from './pages/BlogPostPage';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/livros" element={<Books />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/autores" element={<Authors />} />
            <Route path="/frases" element={<Quotes />} />
            <Route path="/sebos" element={<Sebos />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </main>

        <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <i className="fa-solid fa-book-open text-indigo-400 text-2xl"></i>
                  <span className="text-xl font-bold tracking-tight text-white">MelhoresPreços<span className="text-indigo-400">.shop</span></span>
                </div>
                <p className="max-w-sm mb-6">
                  Seu portal inteligente para encontrar o próximo livro. 
                  Este site não realiza vendas diretas; todos os produtos são vendidos e entregues pela Amazon.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                    <i className="fa-brands fa-instagram text-white"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                    <i className="fa-brands fa-twitter text-white"></i>
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-white font-bold mb-6">Navegação</h4>
                <ul className="space-y-4 text-sm">
                  <li><Link to="/livros" className="hover:text-indigo-400">Mais Vendidos</Link></li>
                  <li><Link to="/blog" className="hover:text-indigo-400">Blog</Link></li>
                  <li><Link to="/autores" className="hover:text-indigo-400">Autores</Link></li>
                  <li><Link to="/frases" className="hover:text-indigo-400">Frases</Link></li>
                  <li><Link to="/sebos" className="hover:text-indigo-400">Sebos</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-6">Informações</h4>
                <ul className="space-y-4 text-sm">
                  <li><a href="#" className="hover:text-indigo-400">Privacidade</a></li>
                  <li><a href="#" className="hover:text-indigo-400">Termos de Uso</a></li>
                  <li><Link to="/contato" className="hover:text-indigo-400">Email</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs space-y-2">
              <p>&copy; {new Date().getFullYear()} MelhoresPreços.shop - Todos os direitos reservados.</p>
              <p className="text-slate-500 font-medium italic">"Como associado da Amazon, ganho com compras qualificadas."</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
=======

import React, { useState, useMemo } from 'react';
import Layout from './components/Layout';
import BookCard from './components/BookCard';
import { MOCK_BOOKS } from './constants';
import { ViewMode } from './types';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.GRID);
  const [category, setCategory] = useState<string>('Todos');

  const categories = useMemo(() => {
    const cats = new Set(MOCK_BOOKS.map(b => b.category));
    return ['Todos', ...Array.from(cats)];
  }, []);

  const filteredBooks = useMemo(() => {
    return MOCK_BOOKS.filter(book => {
      const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          book.author.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = category === 'Todos' || book.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, category]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-indigo-600 py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M0 0 L100 0 L100 100 Z" fill="currentColor"></path>
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Encontre sua próxima leitura pelo melhor preço.
            </h2>
            <p className="text-indigo-100 text-lg mb-8 opacity-90">
              Comparamos preços em tempo real e nossa IA analisa se a oferta é realmente imperdível.
            </p>
            <div className="relative max-w-lg">
              <input 
                type="text" 
                placeholder="Busque por título, autor ou ISBN..." 
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-indigo-200"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  category === cat 
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-500 font-medium">{filteredBooks.length} resultados</span>
            <div className="flex bg-white border border-slate-200 rounded-lg p-1">
              <button 
                onClick={() => setViewMode(ViewMode.GRID)}
                className={`p-2 rounded ${viewMode === ViewMode.GRID ? 'bg-slate-100 text-indigo-600' : 'text-slate-400'}`}
              >
                <i className="fas fa-th-large"></i>
              </button>
              <button 
                onClick={() => setViewMode(ViewMode.LIST)}
                className={`p-2 rounded ${viewMode === ViewMode.LIST ? 'bg-slate-100 text-indigo-600' : 'text-slate-400'}`}
              >
                <i className="fas fa-list"></i>
              </button>
            </div>
          </div>
        </div>

        {filteredBooks.length > 0 ? (
          <div className={`grid gap-8 ${viewMode === ViewMode.GRID ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {filteredBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
            <div className="text-slate-300 text-6xl mb-4">
              <i className="fas fa-search"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Nenhum livro encontrado</h3>
            <p className="text-slate-500">Tente ajustar seus termos de busca ou filtros.</p>
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="bg-slate-100 py-16 border-y border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Não perca nenhuma queda de preço</h2>
          <p className="text-slate-600 mb-8 max-w-md mx-auto">Inscreva-se para receber alertas semanais com os livros mais baratos recomendados por nossa IA.</p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="seu@email.com" 
              className="flex-grow px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <button className="bg-indigo-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-indigo-700 transition-colors">
              Cadastrar
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default App;
>>>>>>> cf8524a2e1ed6d2832c5fdd22289fa7679c426b8
