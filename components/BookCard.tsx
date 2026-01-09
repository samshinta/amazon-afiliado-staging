
import React, { useState } from 'react';
import { Book, AIInsight } from '../types';
import { analyzeBookOffer } from '../services/geminiService';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const [insight, setInsight] = useState<AIInsight | null>(null);
  const [loading, setLoading] = useState(false);

  const bestPrice = Math.min(...book.prices.map(p => p.amount));
  const bestRetailer = book.prices.find(p => p.amount === bestPrice);

  const handleAnalyze = async () => {
    if (insight) return;
    setLoading(true);
    try {
      const result = await analyzeBookOffer(book);
      setInsight(result);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="md:flex">
        <div className="md:w-1/3 relative group">
          <img 
            src={book.coverImage} 
            alt={book.title}
            className="w-full h-64 md:h-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute top-2 left-2 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded">
            {book.category}
          </div>
        </div>
        
        <div className="p-5 md:w-2/3 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-slate-800 line-clamp-1">{book.title}</h3>
                <p className="text-sm text-slate-500 mb-2">{book.author}</p>
              </div>
              <div className="flex items-center text-amber-500">
                <i className="fas fa-star text-xs mr-1"></i>
                <span className="text-sm font-semibold">{book.rating}</span>
              </div>
            </div>
            
            <p className="text-slate-600 text-sm line-clamp-2 mb-4">
              {book.description}
            </p>

            <div className="space-y-2 mb-4">
              {book.prices.map((p, idx) => (
                <div key={idx} className="flex items-center justify-between text-sm bg-slate-50 p-2 rounded">
                  <div className="flex items-center gap-2">
                    <img src={p.logo} alt={p.retailer} className="w-4 h-4 rounded-full" />
                    <span className="font-medium text-slate-700">{p.retailer}</span>
                  </div>
                  <span className="font-bold text-indigo-600">R$ {p.amount.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <button 
              onClick={handleAnalyze}
              disabled={loading}
              className={`text-xs font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors ${
                insight 
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                  : 'bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100'
              }`}
            >
              {loading ? (
                <i className="fas fa-spinner fa-spin"></i>
              ) : (
                <i className="fas fa-robot"></i>
              )}
              {insight ? 'Análise Completa' : 'Consultar IA (Oferta)'}
            </button>

            {insight && (
              <div className="mt-2 text-xs bg-indigo-50 p-3 rounded-lg border border-indigo-100 animate-fade-in">
                <p className="font-semibold text-indigo-900 mb-1">
                  {insight.isGoodDeal ? '✅ Boa oferta!' : '⚖️ Preço na média'}
                </p>
                <p className="text-indigo-800 leading-relaxed mb-2">{insight.analysis}</p>
                {insight.alternativeSuggestions.length > 0 && (
                  <div className="border-t border-indigo-200 pt-2 mt-2">
                    <p className="font-semibold text-indigo-900 mb-1">Sugestões Similares:</p>
                    <ul className="list-disc list-inside text-indigo-700">
                      {insight.alternativeSuggestions.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            <a 
              href={bestRetailer?.url}
              className="w-full bg-indigo-600 text-white text-center font-bold py-3 rounded-xl hover:bg-indigo-700 transition-colors mt-2"
            >
              Ver na {bestRetailer?.retailer}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
