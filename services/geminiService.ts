
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
  }
};
