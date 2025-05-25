
import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface AssetCardProps {
  ticker: string;
  name?: string;
  price: number;
  change: number;
  changePercent: number;
  category?: string;
}

const AssetCard: React.FC<AssetCardProps> = ({ 
  ticker, 
  name, 
  price, 
  change, 
  changePercent 
}) => {
  const isPositive = change >= 0;
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-200">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
              {ticker}
            </h3>
            {name && (
              <span className="text-xs text-gray-500 dark:text-gray-400 truncate">
                {name}
              </span>
            )}
          </div>
          <p className="text-lg font-bold text-gray-900 dark:text-white mt-1">
            R$ {price.toFixed(2)}
          </p>
        </div>
        
        <div className="text-right">
          <div className={`flex items-center gap-1 text-sm font-medium ${
            isPositive 
              ? 'text-green-600 dark:text-green-400' 
              : 'text-red-600 dark:text-red-400'
          }`}>
            {isPositive ? (
              <TrendingUp size={14} />
            ) : (
              <TrendingDown size={14} />
            )}
            {changePercent.toFixed(2)}%
          </div>
          <p className={`text-xs ${
            isPositive 
              ? 'text-green-600 dark:text-green-400' 
              : 'text-red-600 dark:text-red-400'
          }`}>
            {isPositive ? '+' : ''}{change.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AssetCard;
