import { GoogleGenAI } from "@google/genai";

export const handler = async (event: any) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { prompt } = JSON.parse(event.body || "{}");
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "API_KEY não encontrada nas variáveis de ambiente do Netlify." }),
      };
    }

    const ai = new GoogleGenAI({ apiKey });

    // Usando gemini-3-pro-preview para raciocínio complexo sobre literatura
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 32768 },
        systemInstruction: "Você é um bibliotecário erudito e amigável do MelhoresPreços.shop. Recomende livros com base na alma do pedido do usuário. Cite autores brasileiros. Seja poético mas direto. Sempre mencione que os livros podem ser encontrados na Amazon através do nosso site.",
      },
    });

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ text: response.text }),
    };
  } catch (error: any) {
    console.error("Erro na Function Gemini:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || "Erro interno na comunicação com a IA." }),
    };
  }
};