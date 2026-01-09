
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Homologation Banner */}
      <div className="bg-amber-100 border-b border-amber-200 text-amber-800 text-[10px] uppercase font-bold text-center py-1 tracking-widest">
        Ambiente de Homologação • Não Realizar Compras Reais
      </div>

      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <i className="fas fa-book-open text-white"></i>
            </div>
            <h1 className="text-xl font-black text-slate-800 tracking-tight">
              Melhores<span className="text-indigo-600">Preços</span>
              <span className="ml-1 text-[10px] font-normal text-slate-400 align-top">beta</span>
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600">Destaques</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600">Categorias</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600">Promoções</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-slate-600">
              <i className="fas fa-search"></i>
            </button>
            <button className="bg-slate-100 p-2 rounded-full text-slate-600">
              <i className="fas fa-user text-sm"></i>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h2 className="text-white text-lg font-bold mb-4">MelhoresPreços</h2>
              <p className="text-sm leading-relaxed max-w-xs">
                Sua porta de entrada para encontrar os livros mais baratos nas principais lojas do Brasil. 
                Utilizamos Inteligência Artificial para analisar se o preço realmente vale a pena.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Afiliados</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Social</h3>
              <div className="flex gap-4">
                <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs">
            © 2024 MelhoresPreços - Homologação. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
