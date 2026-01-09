
<<<<<<< HEAD
export const getGeminiResponse = async (prompt: string) => {
  try {
    const response = await fetch("/.netlify/functions/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Erro na comunicação com a IA");
    }

    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error("Erro ao chamar serviço Gemini:", error);
    throw error;
=======
import { GoogleGenAI, Type } from "@google/genai";
import { Book, AIInsight } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeBookOffer = async (book: Book): Promise<AIInsight> => {
  const pricesStr = book.prices.map(p => `${p.retailer}: R$ ${p.amount}`).join(', ');
  
  const prompt = `Analise a oferta do livro "${book.title}" do autor "${book.author}". 
  Os preços atuais são: ${pricesStr}. 
  Forneça uma análise se é um bom momento para comprar, baseando-se no valor médio de mercado para este tipo de livro físico no Brasil.
  Retorne também 2 sugestões de livros similares que o leitor possa gostar.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            analysis: { type: Type.STRING, description: "Breve análise da oferta em português." },
            isGoodDeal: { type: Type.BOOLEAN, description: "Se é uma boa oferta ou não." },
            alternativeSuggestions: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Títulos de livros similares."
            }
          },
          required: ["analysis", "isGoodDeal", "alternativeSuggestions"]
        }
      }
    });

    const result = JSON.parse(response.text || "{}");
    return {
      analysis: result.analysis || "Não foi possível analisar no momento.",
      isGoodDeal: result.isGoodDeal || false,
      alternativeSuggestions: result.alternativeSuggestions || []
    };
  } catch (error) {
    console.error("Gemini Error:", error);
    return {
      analysis: "Erro ao conectar com o serviço de IA. Verifique sua conexão.",
      isGoodDeal: false,
      alternativeSuggestions: []
    };
>>>>>>> cf8524a2e1ed6d2832c5fdd22289fa7679c426b8
  }
};
