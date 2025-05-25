
import React from 'react';
import AssetCard from './AssetCard';

interface Asset {
  ticker: string;
  name?: string;
  price: number;
  change: number;
  changePercent: number;
}

interface CategorySectionProps {
  title: string;
  icon: string;
  assets: Asset[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ title, icon, assets }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg">{icon}</span>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h2>
        <div className="h-px bg-gray-200 dark:bg-gray-700 flex-1 ml-3"></div>
      </div>
      
      <div className="grid gap-3">
        {assets.map((asset) => (
          <AssetCard
            key={asset.ticker}
            ticker={asset.ticker}
            name={asset.name}
            price={asset.price}
            change={asset.change}
            changePercent={asset.changePercent}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
