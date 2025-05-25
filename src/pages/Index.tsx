
import React from 'react';
import Header from '@/components/Header';
import CategorySection from '@/components/CategorySection';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useAssets } from '@/hooks/useAssets';
import { useDarkMode } from '@/hooks/useDarkMode';

const Index = () => {
  const { assets, isLoading, refreshAssets } = useAssets();
  const { darkMode, toggleDarkMode } = useDarkMode();

  const categories = [
    {
      title: 'Ações Brasileiras',
      icon: '🇧🇷',
      assets: assets.acoesBrasileiras
    },
    {
      title: 'Fundos Imobiliários',
      icon: '🏢',
      assets: assets.fiis
    },
    {
      title: 'Criptomoedas',
      icon: '₿',
      assets: assets.criptomoedas
    },
    {
      title: 'ETFs Brasileiros',
      icon: '📊',
      assets: assets.etfsBrasileiros
    },
    {
      title: 'ETFs Internacionais',
      icon: '🌎',
      assets: assets.etfsInternacionais
    },
    {
      title: 'REITs',
      icon: '🏘️',
      assets: assets.reits
    },
    {
      title: 'Ações Americanas',
      icon: '🇺🇸',
      assets: assets.acoesAmericanas
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Header 
        onRefresh={refreshAssets}
        isLoading={isLoading}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      
      <div className="px-4 py-6 max-w-md mx-auto">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            {categories.map((category) => (
              <CategorySection
                key={category.title}
                title={category.title}
                icon={category.icon}
                assets={category.assets}
              />
            ))}
          </>
        )}
      </div>
      
      <div className="pb-6 text-center">
        <p className="text-xs text-gray-400 dark:text-gray-500">
          Dados para fins demonstrativos
        </p>
      </div>
    </div>
  );
};

export default Index;
