'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Building, Enterprise, Datastore } from '@carbon/icons-react';

// Large Geometric Star (Frontyr Logo)
const FrontyrStar = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 400 400" className={className}>
    <path 
        d="M200 160 L210 190 L240 200 L210 210 L200 240 L190 210 L160 200 L190 190 Z" 
        fill="currentColor" 
    />
  </svg>
);

// USDC Logo (White on Blue/Transparent)
const USDCLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 2000 2000" fill="none">
    <circle cx="1000" cy="1000" r="1000" fill="#2775ca" />
    <path d="M1275 1158.33c0-145.83-87.5-195.83-262.5-216.66-125-16.67-150-50-150-108.34s41.67-95.83 125-95.83c75 0 116.67 25 137.5 87.5 4.17 12.5 16.67 20.83 29.17 20.83h66.66c16.67 0 29.17-12.5 29.17-29.16v-4.17c-16.67-91.67-91.67-162.5-187.5-170.83v-100c0-16.67-12.5-29.17-33.33-33.34h-62.5c-16.67 0-29.17 12.5-33.34 33.34v95.83c-125 16.67-204.16 100-204.16 204.17 0 137.5 83.33 191.66 258.33 212.5 116.67 20.83 154.17 45.83 154.17 112.5s-58.34 112.5-137.5 112.5c-108.34 0-145.84-45.84-158.34-108.34-4.16-16.66-16.66-25-29.16-25h-70.84c-16.66 0-29.16 12.5-29.16 29.17v4.17c16.66 104.16 83.33 179.16 220.83 200v100c0 16.66 12.5 29.16 33.33 33.33h62.5c16.67 0 29.17-12.5 33.34-33.33v-100c125-20.84 208.33-108.34 208.33-220.84z" fill="#fff"/>
    <path d="M787.5 1595.83c-325-116.66-491.67-479.16-370.83-800 62.5-175 200-308.33 370.83-370.83 16.67-8.33 25-20.83 25-41.67V325c0-16.67-8.33-29.17-25-33.33-4.17 0-12.5 0-16.67 4.16-395.83 125-612.5 545.84-487.5 941.67 75 233.33 254.17 412.5 487.5 487.5 16.67 8.33 33.34 0 37.5-16.67 4.17-4.16 4.17-8.33 4.17-16.66v-58.34c0-12.5-12.5-29.16-25-37.5zM1229.17 295.83c-16.67-8.33-33.34 0-37.5 16.67-4.17 4.17-4.17 8.33-4.17 16.67v58.33c0 16.67 12.5 33.33 25 41.67 325 116.66 491.67 479.16 370.83 800-62.5 175-200 308.33-370.83 370.83-16.67 8.33-25 20.83-25 41.67V1700c0 16.67 8.33 29.17 25 33.33 4.17 0 12.5 0 16.67-4.16 395.83-125 612.5-545.84 487.5-941.67-75-237.5-258.34-416.67-487.5-491.67z" fill="#fff"/>
  </svg>
);

// Green USD Icon
const GreenUSDIcon = ({ className }: { className?: string }) => (
    <div className={`rounded-full bg-emerald-500 border border-emerald-600 flex items-center justify-center shadow-sm ${className}`}>
        <span className="font-mono text-[10px] font-bold text-white">$</span>
    </div>
);

type AnimationState = 'idle' | 'moving' | 'settled';

export function InternationalPaymentsAnimation() {
  const [cycle, setCycle] = useState(0);
  const [step, setStep] = useState<AnimationState>('idle');

  // Total Duration: 5s
  // 0s-2s: Move to Center (Slow)
  // 2s-3.5s: Transform/Glide through center
  // 3.5s-4.5s: Exit to destination
  const ANIMATION_DURATION = 4.5; 
  const PAUSE_DURATION = 1.5;

  useEffect(() => {
    const sequence = async () => {
      setStep('idle');
      await new Promise(r => setTimeout(r, 500));
      
      setStep('moving');
      await new Promise(r => setTimeout(r, ANIMATION_DURATION * 1000));
      
      setStep('settled');
      await new Promise(r => setTimeout(r, PAUSE_DURATION * 1000));
      
      setCycle(c => c + 1);
    };
    sequence();
  }, [cycle]);

  return (
    <div className="w-full h-full relative p-4 flex flex-col justify-between overflow-visible min-h-[300px]">
      
      {/* --- BACKGROUND RAILS (The "X") --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Top-Left to Bottom-Right */}
          <svg className="absolute inset-0 w-full h-full opacity-20">
             <line x1="10%" y1="15%" x2="90%" y2="85%" stroke="#0A1628" strokeWidth="1" strokeDasharray="4 4" />
             <line x1="10%" y1="85%" x2="90%" y2="15%" stroke="#0A1628" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
          
          {/* Center Hub */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-24 h-24 rounded-full bg-white border border-border flex items-center justify-center shadow-lg">
                  <FrontyrStar className="w-16 h-16 text-obsidian/10" />
              </div>
          </div>
      </div>


      {/* --- TOP ROW --- */}
      <div className="flex justify-between items-start relative z-10 w-full">
         {/* Top Left: Sinclar */}
         <AccountCard 
            name="Sinclar Transport" 
            icon={<User className="w-3 h-3 text-subtle" />}
            balance={1250000} 
            change={step === 'moving' ? -5000 : 0}
            align="left"
         />
         {/* Top Right: Nexus */}
         <AccountCard 
            name="Nexus Enterprises" 
            icon={<Building className="w-3 h-3 text-subtle" />}
            balance={840000} 
            change={step === 'settled' ? 8000 : 0} // Receiving from Bottom-Left
            align="right"
            isActive={step === 'settled'}
         />
      </div>


      {/* --- ANIMATION LAYER (Diagonal Crossing) --- */}
      <div className="absolute inset-0 pointer-events-none z-30 overflow-visible">
          
          {/* PATH 1: Top-Left (Outside) -> Bottom-Right */}
          <TravelingCoin 
            start={{ left: '-10%', top: '15%' }} 
            end={{ left: '90%', top: '85%' }}
            delay={0}
            active={step === 'moving'}
            duration={ANIMATION_DURATION}
          />

          {/* PATH 2: Bottom-Left (Outside) -> Top-Right */}
          <TravelingCoin 
            start={{ left: '-10%', top: '85%' }} 
            end={{ left: '90%', top: '15%' }}
            delay={0.4} // Stagger slightly
            active={step === 'moving'}
            duration={ANIMATION_DURATION}
          />

      </div>


      {/* --- BOTTOM ROW --- */}
      <div className="flex justify-between items-end relative z-10 w-full mt-auto">
         {/* Bottom Left: Globex */}
         <AccountCard 
            name="Globex Corp" 
            icon={<Enterprise className="w-3 h-3 text-subtle" />}
            balance={3420000} 
            change={step === 'moving' ? -8000 : 0}
            align="left"
         />
         {/* Bottom Right: Acme */}
         <AccountCard 
            name="Acme Systems" 
            icon={<Datastore className="w-3 h-3 text-subtle" />}
            balance={156000} 
            change={step === 'settled' ? 5000 : 0} // Receiving from Top-Left
            align="right"
            isActive={step === 'settled'}
         />
      </div>

    </div>
  );
}


/* --- SUBCOMPONENTS --- */

function TravelingCoin({ start, end, duration, active, delay }: { 
    start: { left: string, top: string }, 
    end: { left: string, top: string }, 
    duration: number,
    active: boolean,
    delay: number
}) {
    return (
        <AnimatePresence>
            {active && (
                <motion.div
                    className="absolute w-8 h-8 flex items-center justify-center"
                    initial={{ ...start, opacity: 0, scale: 0.8 }}
                    animate={{ 
                        left: end.left, 
                        top: end.top, 
                        opacity: [0, 1, 1, 0], // Fade in from outside, fade out at target
                        scale: 1
                    }}
                    transition={{ 
                        duration: duration, 
                        delay: delay,
                        ease: "easeInOut",
                        opacity: { times: [0, 0.1, 0.9, 1] }
                    }}
                >
                    {/* The Morphing Content */}
                    <motion.div
                        className="relative w-full h-full"
                        animate={{
                            rotateY: [0, 180, 360], // Flip effect at center? Or just simple morph
                            scale: [1, 1.8, 1]      // Scale up at center
                        }}
                        transition={{
                            duration: duration,
                            times: [0, 0.5, 1],
                            ease: "easeInOut"
                        }}
                    >
                         {/* We swap opacity to "morph" at the 50% mark */}
                         <motion.div 
                            className="absolute inset-0"
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: duration, times: [0.4, 0.5, 0.6] }}
                         >
                            <GreenUSDIcon className="w-8 h-8" />
                         </motion.div>

                         <motion.div 
                            className="absolute inset-0"
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: duration, times: [0.4, 0.5, 0.6] }}
                         >
                            <USDCLogo className="w-8 h-8 drop-shadow-lg" />
                         </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

function AccountCard({ 
    name, 
    balance, 
    icon,
    change, 
    align = 'left',
    isActive = false
}: { 
    name: string; 
    balance: number; 
    icon: React.ReactNode;
    change: number; 
    align?: 'left' | 'right';
    isActive?: boolean;
}) {
  const displayBalance = balance + change;

  return (
    <div className={`
        bg-white border border-border/80 rounded-lg p-3 shadow-sm min-w-[150px] flex flex-col gap-2 
        transition-all duration-500
        ${isActive ? 'shadow-md border-obsidian/30 scale-105' : ''}
    `}>
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded bg-gray-50 border border-border flex items-center justify-center shrink-0">
            {icon}
        </div>
        <div className="flex flex-col overflow-hidden">
            <span className="text-[10px] font-semibold text-obsidian truncate w-full">{name}</span>
            <span className="text-[8px] font-mono text-subtle uppercase tracking-wider">USD ACCT</span>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-baseline gap-1 relative">
            <span className="text-sm font-mono font-medium text-obsidian">
                {displayBalance.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })}
            </span>
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
