
import React from 'react';
import { RefreshCw, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  onRefresh: () => void;
  isLoading: boolean;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ onRefresh, isLoading, darkMode, toggleDarkMode }) => {
  return (
    <div className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 px-4 py-4 sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          💰 Minhas Cotações
        </h1>
        
        <div className="flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            {darkMode ? (
              <Sun size={18} className="text-yellow-500" />
            ) : (
              <Moon size={18} className="text-gray-600 dark:text-gray-400" />
            )}
          </button>
          
          <button
            onClick={onRefresh}
            disabled={isLoading}
            className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg transition-colors text-sm font-medium"
          >
            <RefreshCw 
              size={16} 
              className={`${isLoading ? 'animate-spin' : ''}`} 
            />
            Atualizar
          </button>
        </div>
      </div>
      
      <div className="mt-2">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Última atualização: {new Date().toLocaleTimeString('pt-BR')}
        </p>
      </div>
    </div>
  );
};

export default Header;
