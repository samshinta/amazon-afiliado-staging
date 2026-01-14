
import React from 'react';

const ApiFeed: React.FC = () => {
  const strategies = [
    {
      title: "Auto-Post: Frase + Capa",
      icon: "fa-instagram",
      color: "bg-pink-500",
      description: "O n8n lê uma frase aleatória do seu site, busca a capa do livro e gera uma legenda de alta conversão usando Gemini.",
      benefit: "Tráfego orgânico constante no Instagram sem esforço manual.",
      logic: "Cron Job -> HTTP Request (Site) -> Gemini (Legenda) -> Instagram Buffer"
    },
    {
      title: "Monitor de Ofertas 24h",
      icon: "fa-bolt",
      color: "bg-amber-500",
      description: "Verifica os preços dos livros na sua lista 'Mais Vendidos'. Se o preço cair mais de 15%, envia um alerta.",
      benefit: "Conversão imediata em grupos de ofertas (Telegram/WhatsApp).",
      logic: "HTTP Request (Amazon) -> IF (Price < OldPrice) -> Telegram Bot"
    },
    {
      title: "SEO Content Factory",
      icon: "fa-pen-nib",
      color: "bg-indigo-500",
      description: "Pega um autor da sua base e pede para a IA escrever um artigo 'Por que ler [Autor] em 2024?'.",
      benefit: "Melhora o ranking do seu site no Google (SEO).",
      logic: "Gemini Agent -> WordPress/Netlify API -> Google Search Console"
    },
    {
      title: "Fábrica de Reels: Curiosidades",
      icon: "fa-video",
      color: "bg-red-500",
      description: "Extrai curiosidades sobre autores (ex: hobbies, país) e cria roteiros para vídeos curtos de 15 segundos.",
      benefit: "Alcance viral com conteúdo educativo rápido.",
      logic: "HTTP Request (Autores) -> Gemini (Script) -> Trello (Pauta de Gravação)"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold text-slate-900 mb-4 serif">Estratégias de Automação n8n</h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Transforme seu site em uma máquina de vendas automática integrando sua curadoria com redes sociais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {strategies.map((item, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-stone-200 p-8 shadow-sm hover:shadow-xl transition-all group">
              <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <i className={`fa-solid ${item.icon}`}></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3 serif">{item.title}</h3>
              <p className="text-slate-600 mb-4 text-sm leading-relaxed">{item.description}</p>
              
              <div className="bg-stone-50 p-4 rounded-xl border border-stone-100 mb-6">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Lógica do Fluxo</span>
                <code className="text-xs text-indigo-600 font-bold">{item.logic}</code>
              </div>

              <div className="flex items-center gap-2 text-green-600 font-bold text-xs uppercase tracking-tighter">
                <i className="fa-solid fa-circle-check"></i>
                <span>Impacto: {item.benefit}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Pronto para escalar seu tráfego?</h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-8">
              O segredo dos grandes afiliados não é postar manualmente, mas criar sistemas que trabalham enquanto você dorme.
            </p>
            <div className="flex justify-center gap-4">
               <div className="px-6 py-3 bg-indigo-600 rounded-xl font-bold text-sm">Target Tag: #automation-data</div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        </div>

      </div>
    </div>
  );
};

export default ApiFeed;
