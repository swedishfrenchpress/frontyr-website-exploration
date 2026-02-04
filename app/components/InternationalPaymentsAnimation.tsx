'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Building } from '@carbon/icons-react';

export function InternationalPaymentsAnimation() {
  const [cycle, setCycle] = useState(0);
  const [step, setStep] = useState<'idle' | 'transfer' | 'settled'>('idle');

  // Animation constants
  const TRANSFER_DURATION = 2; // seconds for full travel
  const PAUSE_DURATION = 1.5; // seconds between transfers

  useEffect(() => {
    const sequence = async () => {
      // Start Idle
      setStep('idle');
      
      // Wait a bit, then Transfer
      await new Promise(r => setTimeout(r, 1000));
      setStep('transfer');

      // Wait for transfer to complete (duration of animation)
      await new Promise(r => setTimeout(r, TRANSFER_DURATION * 1000));
      setStep('settled');

      // Wait a bit, then reset/loop
      await new Promise(r => setTimeout(r, PAUSE_DURATION * 1000));
      setCycle(c => c + 1);
    };

    sequence();
  }, [cycle]);

  return (
    <div className="w-full h-full relative flex items-center justify-between px-4 md:px-12 select-none">
      {/* Background Rail */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 px-16 md:px-24 pointer-events-none">
         <div className="w-full h-px bg-border border-t border-dashed border-border/60 relative">
            {/* Midpoint Node */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center z-10 shadow-sm">
               <span className="text-[8px] font-mono font-bold text-subtle">USDC</span>
            </div>
         </div>
      </div>

      {/* Left Account: Sinclar */}
      <AccountCard 
        name="Sinclar Transportation LLC" 
        balance={1250000} 
        currency="USD"
        change={step === 'settled' || (step === 'transfer') ? -5000 : 0}
        align="left"
        isActive={step === 'transfer'}
      />

      {/* Traveling Particle */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 px-[70px] md:px-[100px] pointer-events-none h-12">
        <AnimatePresence mode='wait'>
            {step === 'transfer' && (
                <motion.div
                    initial={{ left: '0%', x: 0 }}
                    animate={{ left: '100%', x: '-100%' }}
                    transition={{ 
                        duration: TRANSFER_DURATION, 
                        ease: "easeInOut",
                        times: [0, 0.45, 0.55, 1] 
                    }}
                    className="absolute top-1/2 -translate-y-1/2 z-20"
                >
                    {/* The Coin */}
                    <motion.div 
                        animate={{ 
                            backgroundColor: ["#ffffff", "#10b981", "#ffffff"],
                            borderColor: ["#e5e7eb", "#10b981", "#e5e7eb"],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{ duration: TRANSFER_DURATION, times: [0, 0.5, 1] }}
                        className="w-8 h-8 rounded-full bg-white border border-border shadow-md flex items-center justify-center"
                    >
                         <motion.span 
                            initial={{ opacity: 1, display: "block" }}
                            animate={{ opacity: [1, 0, 1], content: ["'$'", "'USDC'", "'$'"] }}
                            transition={{ duration: TRANSFER_DURATION, times: [0.3, 0.5, 0.7] }}
                            className="font-mono text-xs font-bold text-obsidian"
                         >
                            $
                         </motion.span>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
      </div>

      {/* Right Account: Nexus */}
      <AccountCard 
        name="Nexus Enterprises" 
        balance={840000} 
        currency="USD" 
        change={step === 'settled' ? 5000 : 0}
        align="right"
        isActive={step === 'transfer'}
      />
    </div>
  );
}

function AccountCard({ 
    name, 
    balance, 
    currency, 
    change, 
    align = 'left',
    isActive
}: { 
    name: string; 
    balance: number; 
    currency: string; 
    change: number; 
    align?: 'left' | 'right';
    isActive: boolean;
}) {
  const displayBalance = balance + change;

  return (
    <div className={`relative z-10 bg-white border border-border/80 rounded-lg p-3 shadow-sm min-w-[140px] flex flex-col gap-2 transition-shadow duration-300 ${isActive ? 'shadow-md border-obsidian/30' : ''}`}>
      
      {/* Header */}
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded bg-gray-50 border border-border flex items-center justify-center shrink-0">
            {align === 'left' ? <User className="w-3 h-3 text-subtle" /> : <Building className="w-3 h-3 text-subtle" />}
        </div>
        <div className="flex flex-col overflow-hidden">
            <span className="text-[10px] font-semibold text-obsidian truncate w-full">{name}</span>
            <span className="text-[8px] font-mono text-subtle uppercase tracking-wider">{currency} ACCT</span>
        </div>
      </div>

      {/* Balance */}
      <div className="flex flex-col">
        <span className="text-[9px] text-subtle font-medium">Available</span>
        <div className="flex items-baseline gap-1 relative">
            <span className="text-sm font-mono font-medium text-obsidian">
                {displayBalance.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
            </span>
            
            {/* Floating Change Indicator */}
            <AnimatePresence>
                {change !== 0 && (
                    <motion.span
                        initial={{ opacity: 0, y: align === 'left' ? -5 : 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className={`absolute -top-3 right-0 text-[9px] font-mono font-bold ${change > 0 ? 'text-emerald-600' : 'text-amber-600'}`}
                    >
                        {change > 0 ? '+' : ''}{change.toLocaleString()}
                    </motion.span>
                )}
            </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
