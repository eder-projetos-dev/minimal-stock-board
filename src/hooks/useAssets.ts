
import { useState, useEffect } from 'react';

interface Asset {
  ticker: string;
  name?: string;
  price: number;
  change: number;
  changePercent: number;
}

interface AssetsData {
  acoesBrasileiras: Asset[];
  fiis: Asset[];
  criptomoedas: Asset[];
  etfsBrasileiros: Asset[];
  etfsInternacionais: Asset[];
  reits: Asset[];
  acoesAmericanas: Asset[];
}

// Dados mock para demonstração
const mockData: AssetsData = {
  acoesBrasileiras: [
    { ticker: 'BBAS3', name: 'Banco do Brasil', price: 42.35, change: 0.87, changePercent: 2.09 },
    { ticker: 'VALE3', name: 'Vale', price: 68.92, change: -1.23, changePercent: -1.75 },
    { ticker: 'BBDC4', name: 'Bradesco', price: 13.45, change: 0.25, changePercent: 1.89 },
    { ticker: 'ABCB4', name: 'ABC Brasil', price: 15.67, change: -0.34, changePercent: -2.13 },
    { ticker: 'ISAE4', name: 'Isae', price: 8.92, change: 0.12, changePercent: 1.36 },
    { ticker: 'BRSR5', name: 'Banrisul', price: 6.78, change: 0.08, changePercent: 1.19 }
  ],
  fiis: [
    { ticker: 'KNRI11', name: 'Kinea Renda', price: 98.45, change: 0.67, changePercent: 0.68 },
    { ticker: 'XPML11', name: 'XP Malls', price: 87.23, change: -0.89, changePercent: -1.01 },
    { ticker: 'SNAG11', name: 'SNA Galvão', price: 145.67, change: 1.23, changePercent: 0.85 },
    { ticker: 'ALZR11', name: 'Alianza Trust', price: 112.34, change: -0.45, changePercent: -0.40 },
    { ticker: 'MXRF11', name: 'Maxi Renda', price: 89.56, change: 0.78, changePercent: 0.88 },
    { ticker: 'LVBI11', name: 'Log Ventures', price: 76.89, change: 0.34, changePercent: 0.44 },
    { ticker: 'RURA11', name: 'Rural Fundo', price: 95.12, change: -0.56, changePercent: -0.58 },
    { ticker: 'VISC11', name: 'Vinci SC', price: 103.45, change: 0.89, changePercent: 0.87 },
    { ticker: 'CPTS11', name: 'Capitânia Sec', price: 98.67, change: -0.23, changePercent: -0.23 }
  ],
  criptomoedas: [
    { ticker: 'USDT', name: 'Tether', price: 5.24, change: 0.01, changePercent: 0.19 },
    { ticker: 'BTC', name: 'Bitcoin', price: 487650.00, change: 12450.00, changePercent: 2.62 },
    { ticker: 'SOL', name: 'Solana', price: 1247.89, change: -67.23, changePercent: -5.11 },
    { ticker: 'ETH', name: 'Ethereum', price: 18945.67, change: 234.56, changePercent: 1.25 },
    { ticker: 'BNB', name: 'Binance Coin', price: 3567.89, change: -123.45, changePercent: -3.34 }
  ],
  etfsBrasileiros: [
    { ticker: 'IVVB11', name: 'iShares S&P 500', price: 287.45, change: 3.67, changePercent: 1.29 }
  ],
  etfsInternacionais: [
    { ticker: 'DHS', name: 'WisdomTree US', price: 156.78, change: -2.34, changePercent: -1.47 }
  ],
  reits: [
    { ticker: 'EPR', name: 'EPR Properties', price: 234.56, change: 4.23, changePercent: 1.84 },
    { ticker: 'STAG', name: 'Stag Industrial', price: 189.34, change: -1.67, changePercent: -0.87 },
    { ticker: 'O', name: 'Realty Income', price: 345.67, change: 2.89, changePercent: 0.84 },
    { ticker: 'LTC', name: 'LTC Properties', price: 198.45, change: -3.21, changePercent: -1.59 }
  ],
  acoesAmericanas: [
    { ticker: 'PBA', name: 'Pembina Pipeline', price: 167.89, change: 1.56, changePercent: 0.94 }
  ]
};

export const useAssets = () => {
  const [assets, setAssets] = useState<AssetsData>(mockData);
  const [isLoading, setIsLoading] = useState(false);

  const refreshAssets = async () => {
    setIsLoading(true);
    
    // Simula chamada de API
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Gera variações aleatórias para simular dados reais
    const generateRandomVariation = (price: number) => {
      const variation = (Math.random() - 0.5) * 0.1; // -5% a +5%
      const newPrice = price * (1 + variation);
      const change = newPrice - price;
      const changePercent = (change / price) * 100;
      
      return {
        price: newPrice,
        change,
        changePercent
      };
    };

    const updatedAssets = { ...mockData };
    
    Object.keys(updatedAssets).forEach(category => {
      updatedAssets[category as keyof AssetsData] = updatedAssets[category as keyof AssetsData].map(asset => {
        const variation = generateRandomVariation(asset.price);
        return {
          ...asset,
          ...variation
        };
      });
    });

    setAssets(updatedAssets);
    setIsLoading(false);
  };

  return {
    assets,
    isLoading,
    refreshAssets
  };
};
