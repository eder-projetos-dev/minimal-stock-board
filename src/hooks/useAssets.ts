import { useState, useEffect } from "react";

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
    {
      ticker: "BBAS3",
      name: "Banco do Brasil",
      price: 24.42,
      change: -3.26,
      changePercent: -13.36,
    },
    {
      ticker: "VALE3",
      name: "Vale",
      price: 54.32,
      change: -1.06,
      changePercent: -1.96,
    },
    {
      ticker: "BBDC4",
      name: "Bradesco",
      price: 15.64,
      change: 4.58,
      changePercent: 29.31,
    },
    {
      ticker: "ABCB4",
      name: "ABC Brasil",
      price: 21.41,
      change: 0.35,
      changePercent: 1.62,
    },
    {
      ticker: "ISAE4",
      name: "Isae",
      price: 23.36,
      change: -3.02,
      changePercent: -12.93,
    },
    {
      ticker: "BRSR5",
      name: "Banrisul",
      price: 16.5,
      change: 2.61,
      changePercent: 15.8,
    },
  ],
  fiis: [
    {
      ticker: "KNRI11",
      name: "Kinea Renda",
      price: 144.13,
      change: 0.67,
      changePercent: 0.68,
    },
    {
      ticker: "XPML11",
      name: "XP Malls",
      price: 104.8,
      change: -0.89,
      changePercent: -1.01,
    },
    {
      ticker: "SNAG11",
      name: "SNA Galvão",
      price: 9.69,
      change: 1.23,
      changePercent: 0.85,
    },
    {
      ticker: "ALZR11",
      name: "Alianza Trust",
      price: 10.07,
      change: -0.45,
      changePercent: -0.4,
    },
    {
      ticker: "MXRF11",
      name: "Maxi Renda",
      price: 9.63,
      change: 0.78,
      changePercent: 0.88,
    },
    {
      ticker: "LVBI11",
      name: "Log Ventures",
      price: 102.7,
      change: 0.34,
      changePercent: 0.44,
    },
    {
      ticker: "RURA11",
      name: "Rural Fundo",
      price: 8.47,
      change: -0.56,
      changePercent: -0.58,
    },
    {
      ticker: "VISC11",
      name: "Vinci SC",
      price: 104.15,
      change: 0.89,
      changePercent: 0.87,
    },
    {
      ticker: "CPTS11",
      name: "Capitânia Sec",
      price: 7.43,
      change: -0.23,
      changePercent: -0.23,
    },
  ],
  criptomoedas: [
    {
      ticker: "USDT",
      name: "Tether",
      price: 5.65,
      change: 0.05,
      changePercent: 0.02,
    },
    {
      ticker: "BTC",
      name: "Bitcoin",
      price: 605495.25,
      change: 12450.0,
      changePercent: -0.46,
    },
    {
      ticker: "SOL",
      name: "Solana",
      price: 979.0,
      change: -18.0,
      changePercent: -5.11,
    },
    {
      ticker: "ETH",
      name: "Ethereum",
      price: 15081.54,
      change: 234.56,
      changePercent: 1.25,
    },
    {
      ticker: "BNB",
      name: "Binance Coin",
      price: 3860.7,
      change: -123.45,
      changePercent: -3.34,
    },
  ],
  etfsBrasileiros: [
    {
      ticker: "IVVB11",
      name: "iShares S&P 500",
      price: 287.45,
      change: 3.67,
      changePercent: 1.29,
    },
  ],
  etfsInternacionais: [
    {
      ticker: "DHS",
      name: "WisdomTree US",
      price: 156.78,
      change: -2.34,
      changePercent: -1.47,
    },
  ],
  reits: [
    {
      ticker: "EPR",
      name: "EPR Properties",
      price: 234.56,
      change: 4.23,
      changePercent: 1.84,
    },
    {
      ticker: "STAG",
      name: "Stag Industrial",
      price: 189.34,
      change: -1.67,
      changePercent: -0.87,
    },
    {
      ticker: "O",
      name: "Realty Income",
      price: 345.67,
      change: 2.89,
      changePercent: 0.84,
    },
    {
      ticker: "LTC",
      name: "LTC Properties",
      price: 198.45,
      change: -3.21,
      changePercent: -1.59,
    },
  ],
  acoesAmericanas: [
    {
      ticker: "PBA",
      name: "Pembina Pipeline",
      price: 167.89,
      change: 1.56,
      changePercent: 0.94,
    },
  ],
};

export const useAssets = () => {
  const [assets, setAssets] = useState<AssetsData>(mockData);
  const [isLoading, setIsLoading] = useState(false);

  const refreshAssets = async () => {
    setIsLoading(true);

    // Simula chamada de API
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Gera variações aleatórias para simular dados reais
    const generateRandomVariation = (price: number) => {
      const variation = (Math.random() - 0.5) * 0.1; // -5% a +5%
      const newPrice = price * (1 + variation);
      const change = newPrice - price;
      const changePercent = (change / price) * 100;

      return {
        price: newPrice,
        change,
        changePercent,
      };
    };

    const updatedAssets = { ...mockData };

    Object.keys(updatedAssets).forEach((category) => {
      updatedAssets[category as keyof AssetsData] = updatedAssets[
        category as keyof AssetsData
      ].map((asset) => {
        const variation = generateRandomVariation(asset.price);
        return {
          ...asset,
          ...variation,
        };
      });
    });

    setAssets(updatedAssets);
    setIsLoading(false);
  };

  return {
    assets,
    isLoading,
    refreshAssets,
  };
};
