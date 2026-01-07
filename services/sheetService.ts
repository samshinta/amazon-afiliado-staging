
import { Book } from '../types';

// URL da sua planilha exportada como CSV (Gid da aba 'amazon' fornecido: 852407710)
const SHEET_URL = "https://docs.google.com/spreadsheets/d/1oLUC_3zo0Rt7UDB3i4vLzP5OYaeK7C1VYVzRSmTdfkI/export?format=csv&gid=852407710";

export const fetchBooksFromSheet = async (): Promise<Book[]> => {
  try {
    const response = await fetch(SHEET_URL);
    if (!response.ok) throw new Error("Falha ao baixar dados da planilha");
    
    const csvText = await response.text();
    const rows = csvText.split('\n').map(row => {
      // Handle simple CSV parsing (considering standard quotes)
      return row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).map(cell => cell.replace(/^"|"$/g, '').trim());
    });

    // Remove o cabeçalho
    const dataRows = rows.slice(1);

    return dataRows.map((cols, index) => {
      // Mapeamento baseado na estrutura provável da sua planilha
      // Ajuste os índices [0, 1, 2...] se a ordem das colunas for diferente
      const title = cols[0] || 'Livro sem título';
      const author = cols[1] || 'Autor desconhecido';
      const price = parseFloat(cols[2]?.replace('R$', '').replace(',', '.') || '0');
      const amazonLink = cols[3] || '#';
      const imageUrl = cols[4] || `https://picsum.photos/seed/${index}/400/600`;
      const category = cols[5] || 'Geral';

      return {
        id: `sheet-${index}`,
        title,
        author,
        description: `Destaque na categoria ${category}.`,
        price: price > 0 ? price : 39.90,
        oldPrice: price > 0 ? price * 1.2 : 49.90,
        imageUrl,
        category,
        rating: 4.8,
        reviewsCount: 1500,
        amazonLink,
        updatedAt: new Date().toISOString()
      };
    }).filter(book => book.title !== 'Livro sem título');
  } catch (error) {
    console.error("Erro ao processar planilha:", error);
    return [];
  }
};
