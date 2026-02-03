'use client';

import { useState, useEffect } from 'react';
import { Time } from '@carbon/icons-react';

interface Asset {
  id: string;
  name: string;
  symbol: string;
  balance: number;
  type: 'fiat' | 'stablecoin';
  lastChange: 'up' | 'down' | 'none';
}

export function TreasuryAnimation() {
  const [assets, setAssets] = useState<Asset[]>([
    { id: '1', name: 'US Dollar', symbol: 'USD', balance: 4250890.50, type: 'fiat', lastChange: 'none' },
    { id: '2', name: 'USDC', symbol: 'USDC', balance: 1850420.25, type: 'stablecoin', lastChange: 'none' },
  ]);

  const [secondsRemaining, setSecondsRemaining] = useState<number>(60);

  // Animation loop and timer
  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsRemaining(prev => {
        if (prev <= 1) {
          // Trigger update when timer hits 0 (resetting to 60)
          setAssets(currentAssets => {
            // Pick a random asset to update
            const indexToUpdate = Math.floor(Math.random() * currentAssets.length);
            
            return currentAssets.map((asset, index) => {
              if (index !== indexToUpdate) return { ...asset, lastChange: 'none' };
              
              const change = (Math.random() - 0.4) * 5000;
              const newBalance = asset.balance + change;
              
              return {
                ...asset,
                balance: newBalance,
                lastChange: change > 0 ? 'up' : 'down'
              };
            });
          });
          return 60;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const formatCurrency = (val: number, symbol: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: symbol === 'EURC' ? 'EUR' : 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(val);
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-2">
      <div className="w-full bg-white border border-border rounded-lg shadow-sm overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-4 py-3 border-b border-border flex justify-between items-center bg-gray-50/50">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="text-[10px] font-semibold text-subtle uppercase tracking-wider">Stablecoin Treasury</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-subtle font-mono">
                <Time className="w-3 h-3" />
                <span>Next refresh {formatTime(secondsRemaining)}</span>
            </div>
        </div>

        {/* List */}
        <div className="flex-1 p-2 space-y-2">
            {assets.map((asset) => (
                <div key={asset.id} className="group flex items-center justify-between p-3 rounded-md hover:bg-canvas transition-colors duration-200">
                    <div className="flex items-center gap-3">
                        {asset.symbol === 'USDC' ? (
                            <div className="w-8 h-8 rounded-full flex-shrink-0">
                                <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="16" cy="16" r="16" fill="#2775CA"/>
                                    <path d="M17.5 7V9.175C19.375 9.5 20.65 10.4 21.325 11.975L19.225 12.825C18.8 11.95 18.25 11.5 17.5 11.5C15.8 11.5 14.85 12.425 14.85 13.725C14.85 15.025 15.65 15.55 17.9 16.35C20.6 17.3 22.05 18.725 22.05 20.95C22.05 23.375 20.2 24.625 17.5 24.95V27H15.025V24.875C12.925 24.575 11.45 23.6 10.75 21.9L12.825 21.025C13.375 22.25 14.2 22.75 15.025 22.75C16.85 22.75 17.825 21.825 17.825 20.575C17.825 18.975 16.525 18.375 14.775 17.775C11.925 16.8 10.625 15.375 10.625 13.4C10.625 11.175 12.4 9.55 15.025 9.2V7H17.5ZM16.275 13.075C16.825 13.075 17.15 13.25 17.15 13.7C17.15 14.275 16.4 14.525 15.55 14.65C14.475 14.8 14.075 14.475 14.075 13.725C14.075 13.325 14.375 13.075 14.875 13.075H16.275ZM15.825 19.95C15.225 19.95 14.875 19.825 14.875 19.275C14.875 18.675 15.7 18.35 16.65 18.2C17.925 18.025 18.7 18.525 18.7 19.325C18.7 19.725 18.425 19.95 17.925 19.95H15.825Z" fill="white"/>
                                </svg>
                            </div>
                        ) : (
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center border border-border/60 bg-green-50 text-green-600 flex-shrink-0`}>
                                $
                            </div>
                        )}
                        <div>
                            <div className="flex items-center gap-1.5">
                                <span className="text-xs font-medium text-obsidian">{asset.name}</span>
                                <span className="text-[9px] text-subtle font-mono px-1.5 py-0.5 bg-gray-100 rounded">{asset.type === 'stablecoin' ? 'ON-CHAIN' : 'FIAT'}</span>
                            </div>
                            <div className="text-[10px] text-subtle font-mono mt-0.5">{asset.symbol === 'USDC' ? 'Ethereum' : asset.symbol}</div>
                        </div>
                    </div>
                    
                    <div className="text-right">
                        <div className={`
                            text-sm font-mono font-medium transition-colors duration-500 
                            ${asset.lastChange === 'up' ? 'text-emerald-600' : asset.lastChange === 'down' ? 'text-obsidian' : 'text-obsidian'}
                        `}>
                            {formatCurrency(asset.balance, asset.symbol)}
                        </div>
                        <div className={`
                            text-[10px] font-mono transition-opacity duration-500 flex justify-end items-center gap-1
                            ${asset.lastChange === 'up' ? 'opacity-100 text-emerald-600' : asset.lastChange === 'down' ? 'opacity-100 text-amber-600' : 'opacity-0'}
                        `}>
                             {asset.lastChange === 'up' ? '▲' : '▼'} processing
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
        {/* Total Footer */}
        <div className="bg-canvas border-t border-border px-4 py-3 flex justify-between items-center">
             <span className="text-[10px] font-medium text-subtle uppercase tracking-wider">Total Liquidity</span>
             <span className="text-sm font-semibold text-obsidian font-mono">
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(assets.reduce((acc, curr) => acc + curr.balance, 0))}
             </span>
        </div>
      </div>
    </div>
  );
}
