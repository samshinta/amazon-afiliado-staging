
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Sebos from './pages/Sebos';
import Books from './pages/Books';
import Quotes from './pages/Quotes';
import Authors from './pages/Authors';
import Blog from './pages/Blog';
import BlogPostPage from './pages/BlogPostPage';
import Contact from './pages/Contact';
import Offers from './pages/Offers';

const SEOManager: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let title = "MelhoresPreços | Curadoria de Livros";
    let description = "Encontre os melhores preços de livros e ofertas exclusivas.";

    if (path === "/livros") title = "Os Mais Vendidos | MelhoresPreços";
    if (path === "/ofertas") title = "Ofertas do Dia | MelhoresPreços";
    if (path === "/blog") title = "Blog Literário | MelhoresPreços";
    if (path === "/autores") title = "Grandes Autores | MelhoresPreços";
    if (path === "/sebos") title = "Garimpo de Sebos | MelhoresPreços";
    if (path === "/contato") title = "Fale Conosco | MelhoresPreços";

    document.title = `${title} (Homolog)`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", description);

    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <SEOManager />
      <div className="min-h-screen flex flex-col">
        <div className="bg-amber-100 border-b border-amber-200 text-amber-800 text-[10px] uppercase font-bold text-center py-1 tracking-widest">
          Ambiente de Homologação - MelhoresPrecos - v2.0 SEO Optimized
        </div>
        
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/livros" element={<Books />} />
            <Route path="/ofertas" element={<Offers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
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
                  <span className="text-xl font-bold tracking-tight text-white">MelhoresPreços<span className="text-indigo-400">.homolog</span></span>
                </div>
                <p className="max-w-sm mb-6">
                  Portal inteligente para encontrar sua próxima leitura. Todos os produtos vendidos pela Amazon Brasil.
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
                <ul className="space-y-4 text-sm">
                  <li><Link to="/livros" className="hover:text-indigo-400">Mais Vendidos</Link></li>
                  <li><Link to="/ofertas" className="hover:text-indigo-400">Ofertas</Link></li>
                  <li><Link to="/blog" className="hover:text-indigo-400">Blog</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-6">Fale Conosco</h4>
                <a href="mailto:contato@melhoresprecos.shop" className="text-indigo-300 font-medium">contato@melhoresprecos.shop</a>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs">
              <p>&copy; {new Date().getFullYear()} MelhoresPreços - Homologação. "Como associado da Amazon, ganho com compras qualificadas."</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
