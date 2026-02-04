'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Large Geometric Star (Frontyr Logo)
const FrontyrStar = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 400 400" className={className}>
    <path 
        d="M200 160 L210 190 L240 200 L210 210 L200 240 L190 210 L160 200 L190 190 Z" 
        fill="currentColor" 
    />
  </svg>
);

// USDC Logo (White on Blue)
const USDCLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 2000 2000" fill="none">
    <circle cx="1000" cy="1000" r="1000" fill="#2775ca" />
    <path d="M1275 1158.33c0-145.83-87.5-195.83-262.5-216.66-125-16.67-150-50-150-108.34s41.67-95.83 125-95.83c75 0 116.67 25 137.5 87.5 4.17 12.5 16.67 20.83 29.17 20.83h66.66c16.67 0 29.17-12.5 29.17-29.16v-4.17c-16.67-91.67-91.67-162.5-187.5-170.83v-100c0-16.67-12.5-29.17-33.33-33.34h-62.5c-16.67 0-29.17 12.5-33.34 33.34v95.83c-125 16.67-204.16 100-204.16 204.17 0 137.5 83.33 191.66 258.33 212.5 116.67 20.83 154.17 45.83 154.17 112.5s-58.34 112.5-137.5 112.5c-108.34 0-145.84-45.84-158.34-108.34-4.16-16.66-16.66-25-29.16-25h-70.84c-16.66 0-29.16 12.5-29.16 29.17v4.17c16.66 104.16 83.33 179.16 220.83 200v100c0 16.66 12.5 29.16 33.33 33.33h62.5c16.67 0 29.17-12.5 33.34-33.33v-100c125-20.84 208.33-108.34 208.33-220.84z" fill="#fff"/>
    <path d="M787.5 1595.83c-325-116.66-491.67-479.16-370.83-800 62.5-175 200-308.33 370.83-370.83 16.67-8.33 25-20.83 25-41.67V325c0-16.67-8.33-29.17-25-33.33-4.17 0-12.5 0-16.67 4.16-395.83 125-612.5 545.84-487.5 941.67 75 233.33 254.17 412.5 487.5 487.5 16.67 8.33 33.34 0 37.5-16.67 4.17-4.16 4.17-8.33 4.17-16.66v-58.34c0-12.5-12.5-29.16-25-37.5zM1229.17 295.83c-16.67-8.33-33.34 0-37.5 16.67-4.17 4.17-4.17 8.33-4.17 16.67v58.33c0 16.67 12.5 33.33 25 41.67 325 116.66 491.67 479.16 370.83 800-62.5 175-200 308.33-370.83 370.83-16.67 8.33-25 20.83-25 41.67V1700c0 16.67 8.33 29.17 25 33.33 4.17 0 12.5 0 16.67-4.16 395.83-125 612.5-545.84 487.5-941.67-75-237.5-258.34-416.67-487.5-491.67z" fill="#fff"/>
  </svg>
);

// Green USD Icon (Outline Style)
const GreenUSDIcon = ({ className }: { className?: string }) => (
    <div className={`rounded-full bg-white border border-emerald-500 flex items-center justify-center shadow-sm ${className}`}>
        <span className="font-mono text-xs font-bold text-emerald-600">$</span>
    </div>
);

type AnimationState = 'idle' | 'running' | 'settled';

export function InternationalPaymentsAnimation() {
  const [cycle, setCycle] = useState(0);
  const [step, setStep] = useState<AnimationState>('idle');

  // Animation Timings (Seconds)
  const VERTICAL_MOVE_TIME = 0.8;
  const HORIZONTAL_MOVE_TIME = 0.8;
  const HOLD_TIME = 1.6; // Slightly longer for the flip
  const TOTAL_DURATION = (VERTICAL_MOVE_TIME + HORIZONTAL_MOVE_TIME) * 2 + HOLD_TIME;
  const PAUSE_DURATION = 1;

  useEffect(() => {
    const sequence = async () => {
      setStep('idle');
      await new Promise(r => setTimeout(r, 500));
      
      setStep('running');
      await new Promise(r => setTimeout(r, TOTAL_DURATION * 1000));
      
      setStep('settled');
      await new Promise(r => setTimeout(r, PAUSE_DURATION * 1000));
      
      setCycle(c => c + 1);
    };
    sequence();
  }, [cycle]);

  return (
    <div className="w-full h-full relative p-4 flex flex-col justify-between overflow-visible min-h-[300px]">
      
      {/* --- BACKGROUND RAILS (Manhattan/Circuit Grid) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Vertical Rails (Left & Right) - Adjusted to 12% to align with card center */}
          <div className="absolute top-8 bottom-8 left-[12%] w-px border-l border-dashed border-obsidian/20"></div>
          <div className="absolute top-8 bottom-8 right-[12%] w-px border-r border-dashed border-obsidian/20"></div>
          
          {/* Horizontal Rail (Center) */}
          <div className="absolute top-1/2 left-[12%] right-[12%] h-px border-t border-dashed border-obsidian/20"></div>

          {/* Center Hub */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-24 h-24 rounded-full bg-white border border-border flex items-center justify-center shadow-lg relative overflow-visible">
                  {/* Star overlaps the container slightly */}
                  <FrontyrStar className="w-32 h-32 text-[#0A1628] absolute" />
              </div>
          </div>
      </div>


      {/* --- TOP ROW --- */}
      <div className="flex justify-between items-start relative z-10 w-full">
         <AccountCard 
            name="Sinclar Transport" 
            balance={1250000} 
            change={step === 'running' ? -5000 : 0}
            align="left"
         />
         <AccountCard 
            name="Nexus Enterprises" 
            balance={840000} 
            change={step === 'settled' ? 8000 : 0} 
            align="right"
            isActive={step === 'settled'}
         />
      </div>


      {/* --- ANIMATION LAYER --- */}
      <div className="absolute inset-0 pointer-events-none z-50 overflow-visible">
          
          {/* FLOW 1: Top-Left -> Bottom-Right */}
          <ManhattanCoin 
            path={{
                start: { left: '12%', top: '15%' },
                midIn: { left: '12%', top: '50%' },
                center: { left: '50%', top: '50%' },
                midOut: { left: '88%', top: '50%' },
                end: { left: '88%', top: '85%' }
            }}
            active={step === 'running'}
            timings={{ v: VERTICAL_MOVE_TIME, h: HORIZONTAL_MOVE_TIME, hold: HOLD_TIME }}
          />

          {/* FLOW 2: Bottom-Right -> Top-Left */}
          <ManhattanCoin 
            path={{
                start: { left: '88%', top: '85%' },
                midIn: { left: '88%', top: '50%' },
                center: { left: '50%', top: '50%' },
                midOut: { left: '12%', top: '50%' },
                end: { left: '12%', top: '15%' }
            }}
            active={step === 'running'}
            timings={{ v: VERTICAL_MOVE_TIME, h: HORIZONTAL_MOVE_TIME, hold: HOLD_TIME }}
            delay={0.2}
          />

           {/* FLOW 3: Bottom-Left -> Top-Right */}
           <ManhattanCoin 
            path={{
                start: { left: '12%', top: '85%' },
                midIn: { left: '12%', top: '50%' },
                center: { left: '50%', top: '50%' },
                midOut: { left: '88%', top: '50%' },
                end: { left: '88%', top: '15%' }
            }}
            active={step === 'running'}
            timings={{ v: VERTICAL_MOVE_TIME, h: HORIZONTAL_MOVE_TIME, hold: HOLD_TIME }}
            delay={0.4}
          />

      </div>


      {/* --- BOTTOM ROW --- */}
      <div className="flex justify-between items-end relative z-10 w-full mt-auto">
         <AccountCard 
            name="Globex Corp" 
            balance={3420000} 
            change={step === 'running' ? -8000 : 0}
            align="left"
         />
         <AccountCard 
            name="Acme Systems" 
            balance={156000} 
            change={step === 'settled' ? 5000 : 0}
            align="right"
            isActive={step === 'settled'}
         />
      </div>

    </div>
  );
}


/* --- SUBCOMPONENTS --- */

function ManhattanCoin({ path, active, timings, delay = 0 }: { 
    path: { 
        start: { left: string, top: string }, 
        midIn: { left: string, top: string }, 
        center: { left: string, top: string },
        midOut: { left: string, top: string },
        end: { left: string, top: string }
    }, 
    active: boolean,
    timings: { v: number, h: number, hold: number },
    delay?: number
}) {
    const totalDuration = (timings.v + timings.h) * 2 + timings.hold;
    
    // Keyframe percentages
    const t1 = timings.v / totalDuration; // Vertical move done
    const t2 = (timings.v + timings.h) / totalDuration; // Horizontal move (at center) done
    const t3 = (timings.v + timings.h + timings.hold) / totalDuration; // Hold done
    const t4 = (timings.v + timings.h + timings.hold + timings.h) / totalDuration; // Outward Horizontal done
    
    return (
        <AnimatePresence>
            {active && (
                <motion.div
                    className="absolute w-8 h-8 flex items-center justify-center z-50 perspective-1000"
                    initial={{ ...path.start, scale: 1, opacity: 0 }}
                    animate={{ 
                        left: [path.start.left, path.midIn.left, path.center.left, path.center.left, path.midOut.left, path.end.left],
                        top: [path.start.top, path.midIn.top, path.center.top, path.center.top, path.midOut.top, path.end.top],
                        opacity: [0, 1, 1, 1, 1, 0]
                    }}
                    transition={{ 
                        duration: totalDuration,
                        times: [0, t1, t2, t3, t4, 1],
                        delay: delay,
                        ease: "linear"
                    }}
                >
                    <div className="relative w-full h-full" style={{ perspective: 1000 }}>
                        {/* 
                           3D FLIP CONTAINER 
                           Rotates 0 -> 180 (USD to USDC) -> 360 (USDC to USD)
                           The swap happens exactly when it's at 90/270 degrees (invisible)
                        */}
                        <motion.div
                            className="w-full h-full relative"
                            animate={{ 
                                rotateY: [0, 0, 180, 180, 360, 360] 
                            }}
                            transition={{ 
                                duration: totalDuration,
                                times: [0, t2, t2 + 0.4, t3 - 0.4, t3, 1], // Spin during the Hold phase
                                delay: delay,
                                ease: "easeInOut"
                            }}
                        >
                             {/* USD SIDE (Visible 0-90, 270-360) */}
                             <motion.div 
                                className="absolute inset-0 backface-hidden"
                                style={{ backfaceVisibility: 'hidden' }}
                             >
                                <GreenUSDIcon className="w-full h-full shadow-lg" />
                             </motion.div>

                             {/* USDC SIDE (Visible 90-270) - Rotated 180 initially so it's upright when flipped */}
                             <motion.div 
                                className="absolute inset-0 backface-hidden"
                                style={{ 
                                    backfaceVisibility: 'hidden', 
                                    transform: 'rotateY(180deg)' 
                                }}
                             >
                                <USDCLogo className="w-full h-full drop-shadow-2xl" />
                             </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

function AccountCard({ 
    name, 
    balance, 
    change, 
    align = 'left',
    isActive = false
}: { 
    name: string; 
    balance: number; 
    change: number; 
    align?: 'left' | 'right';
    isActive?: boolean;
}) {
  const displayBalance = balance + change;

  return (
    <div className={`
        bg-white border border-border/80 rounded-lg p-3 shadow-sm min-w-[150px] flex flex-col gap-2 
        transition-all duration-500 relative z-20
        ${isActive ? 'shadow-md border-obsidian/30 scale-105' : ''}
    `}>
      <div className="flex items-center gap-2">
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
