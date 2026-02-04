'use client';

import { useState, useEffect } from 'react';

interface Transaction {
  id: string;
  type: 'USD' | 'USDC';
  status: 'pending' | 'processing' | 'settled';
}

export function LedgerAnimation() {
  const [phase, setPhase] = useState<'running' | 'complete' | 'resetting'>('running');
  const [activeIndex, setActiveIndex] = useState(0);
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 'TX_8892_USD', type: 'USD', status: 'processing' },
    { id: 'TX_8893_USDC', type: 'USDC', status: 'pending' },
    { id: 'TX_8894_USD', type: 'USD', status: 'pending' },
  ]);

  // Sequential animation: process and settle each transaction one by one
  useEffect(() => {
    if (phase !== 'running') return;
    
    const settleDelay = 2500; // Time before current transaction settles
    const nextDelay = 800; // Time before next transaction starts processing

    const timer = setTimeout(() => {
      // Settle the current processing transaction
      setTransactions(prev => {
        const updated = [...prev];
        if (updated[activeIndex]?.status === 'processing') {
          updated[activeIndex] = { ...updated[activeIndex], status: 'settled' };
        }
        return updated;
      });

      // After settling, start processing the next one or complete
      setTimeout(() => {
        if (activeIndex < 2) {
          const nextIndex = activeIndex + 1;
          setActiveIndex(nextIndex);
          setTransactions(prev => {
            const updated = [...prev];
            updated[nextIndex] = { ...updated[nextIndex], status: 'processing' };
            return updated;
          });
        } else {
          // All complete
          setPhase('complete');
        }
      }, nextDelay);
    }, settleDelay);

    return () => clearTimeout(timer);
  }, [activeIndex, phase]);

  // Handle reset after completion
  useEffect(() => {
    if (phase !== 'complete') return;
    
    const resetTimer = setTimeout(() => {
      setPhase('resetting');
      
      // After fade out, reset state
      setTimeout(() => {
        setActiveIndex(0);
        setTransactions([
          { id: 'TX_8892_USD', type: 'USD', status: 'processing' },
          { id: 'TX_8893_USDC', type: 'USDC', status: 'pending' },
          { id: 'TX_8894_USD', type: 'USD', status: 'pending' },
        ]);
        
        // Fade back in
        setTimeout(() => {
          setPhase('running');
        }, 50);
      }, 400);
    }, 1800);

    return () => clearTimeout(resetTimer);
  }, [phase]);

  const getTypeColor = (type: Transaction['type'], status: Transaction['status']) => {
    const opacity = status === 'pending' ? '/40' : '';
    switch (type) {
      case 'USD': return `bg-green-500${opacity}`;
      case 'USDC': return `bg-blue-500${opacity}`;
    }
  };

  return (
    <div className="w-full">
      {/* Outer container box */}
      <div className="bg-canvas border border-border rounded-lg p-5 shadow-sm">
        <div className={`
          transition-opacity duration-400 ease-out
          ${phase === 'resetting' ? 'opacity-0' : 'opacity-100'}
        `}>
          {/* Transaction List - styled like Regulatory Audit cards */}
          <div className="space-y-2">
            {transactions.map((tx, index) => (
              <div
                key={tx.id}
                className={`
                  flex items-center justify-between px-4 h-12 rounded-md
                  bg-white border border-border shadow-sm
                  transition-all duration-500 ease-out
                  ${tx.status === 'processing' 
                    ? 'shadow-md border-border' 
                    : tx.status === 'pending'
                      ? 'opacity-50'
                      : ''
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className={`
                      w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-500
                      ${getTypeColor(tx.type, tx.status)}
                    `}
                  ></div>
                  <span 
                    className={`
                      text-[10px] font-bold text-obsidian uppercase tracking-wide
                      transition-all duration-500
                    `}
                  >
                    {tx.id}
                  </span>
                </div>
                
                <div className="flex items-center justify-end w-20">
                  {tx.status === 'settled' && (
                    <div className="text-green-600 font-bold text-[10px] animate-[fade-in_0.3s_ease-out]">✓</div>
                  )}
                  {tx.status === 'processing' && (
                    <div className="h-0.5 w-16 bg-green-500/20 rounded relative overflow-hidden">
                      <div 
                        className="absolute inset-y-0 left-0 bg-green-500/40 rounded animate-[progress_2s_ease-in-out_infinite]"
                        style={{ width: '60%' }}
                      ></div>
                    </div>
                  )}
                  {tx.status === 'pending' && (
                    <div className="h-0.5 w-16 bg-border rounded"></div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Progress indicator */}
          <div className="mt-4 pt-4">
            <div className="flex items-center justify-between text-[10px] text-subtle uppercase tracking-wider mb-2">
              <span>Settlement Progress</span>
              <span>{transactions.filter(t => t.status === 'settled').length} of 3</span>
            </div>
            <div className="h-1 bg-border/40 rounded-full overflow-hidden">
              <div 
                className="h-full bg-obsidian rounded-full transition-all duration-700 ease-out"
                style={{ 
                  width: `${(transactions.filter(t => t.status === 'settled').length / 3) * 100}%` 
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
