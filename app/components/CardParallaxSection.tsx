'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { CheckmarkFilled, Time, WarningAlt } from '@carbon/icons-react';

interface CardProps {
  initialX: number;
  initialY: number;
  speed: number;
  width: number;
  height: number;
  scrollYProgress: MotionValue<number>;
  className?: string;
  delay?: number;
  amount?: string;
  type?: 'credit' | 'debit';
  status?: 'pending' | 'cleared' | 'processing';
  title?: string;
  subtitle?: string;
}

function FloatingLedgerItem({ 
    initialX, 
    initialY, 
    speed, 
    width, 
    height, 
    scrollYProgress, 
    className = "", 
    delay = 0,
    amount = "$0.00",
    type = 'credit',
    status = 'cleared',
    title = "Transaction",
    subtitle = "ID: 12345"
}: CardProps) {
  
  // Increased parallax range for visibility
  const y = useTransform(scrollYProgress, [0, 1], [100, -400 * speed]);
  
  return (
    <motion.div
      style={{
        x: initialX,
        y: initialY,
        translateY: y,
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute rounded-lg shadow-[0_4px_20px_-4px_rgba(10,22,40,0.08)] border border-border/60 bg-white hidden md:flex flex-col justify-center px-4 py-3 ${className}`}
    >
        <div style={{ width }} className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
                {/* Icon Placeholder / Logo */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-black/5 ${
                    type === 'credit' ? 'bg-emerald-50/50' : 'bg-gray-50'
                }`}>
                    <div className={`text-[10px] font-bold ${type === 'credit' ? 'text-emerald-600' : 'text-obsidian'}`}>
                        {title && title.charAt(0)}
                    </div>
                </div>
                
                <div className="flex flex-col min-w-0">
                    <span className="text-[11px] font-semibold text-obsidian truncate leading-tight">
                        {title}
                    </span>
                    <span className="text-[9px] text-subtle font-mono truncate mt-0.5">
                        {subtitle}
                    </span>
                </div>
            </div>
            
            <div className="flex flex-col items-end shrink-0">
                <span className={`font-mono text-[11px] font-medium leading-tight ${
                    type === 'credit' ? 'text-emerald-600' : 'text-obsidian'
                }`}>
                    {type === 'credit' ? '+' : '-'}{amount}
                </span>
                
                <div className="mt-1 flex items-center gap-1">
                    {status === 'pending' ? (
                         <div className="flex items-center gap-1 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-100">
                             <Time className="w-2 h-2 text-amber-500" />
                             <span className="text-[8px] font-bold uppercase tracking-wide text-amber-700">Pending</span>
                         </div>
                    ) : (
                        <div className="flex items-center gap-1">
                            <CheckmarkFilled className="w-2.5 h-2.5 text-emerald-500" />
                            <span className="text-[8px] font-medium text-subtle">Cleared</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </motion.div>
  );
}

export function CardParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <div ref={containerRef} className="relative w-full py-32 md:py-48 overflow-hidden flex flex-col items-center justify-center min-h-[600px] md:min-h-[900px]">
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-canvas/50 pointer-events-none"></div>
      
      {/* Central Copy */}
      <div className="relative z-20 text-center max-w-3xl px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border/60 shadow-sm mb-6">
             <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
             <span className="font-sans text-[12px] font-semibold text-subtle tracking-tight uppercase">Seamless Integration</span>
        </div>
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-4xl md:text-5xl md:leading-[1.1] font-semibold text-obsidian tracking-[-0.03em] mb-6"
        >
          The bridge to<br />
          real-time settlement.
        </motion.h2>
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-subtle text-lg leading-relaxed max-w-xl mx-auto"
        >
          Connect your legacy core to modern settlement rails. Enable instant payments, 24/7 liquidity, and stablecoin interoperability without overhauling your entire stack.
        </motion.p>
      </div>

      {/* Floating Ledger Items */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        
        {/* Left Side */}
        <FloatingLedgerItem 
            initialX={-380} 
            initialY={-200} 
            speed={1.8} 
            width={240} 
            height={60} 
            scrollYProgress={scrollYProgress}
            delay={0.1}
            amount="$450,000.00"
            type="credit"
            title="Treasury Sweep"
            subtitle="Settlement • T-0"
        />
         <FloatingLedgerItem 
            initialX={-520} 
            initialY={40} 
            speed={0.7} 
            width={260} 
            height={60} 
            scrollYProgress={scrollYProgress}
            delay={0.2}
            amount="$12,500.00"
            type="debit"
            status="pending"
            title="Vendor Payout"
            subtitle="Wire • Chase Bank"
        />
        <FloatingLedgerItem 
            initialX={-340} 
            initialY={240} 
            speed={2.5} 
            width={250} 
            height={60} 
            scrollYProgress={scrollYProgress}
            delay={0.3}
            amount="$98,200.00"
            type="credit"
            title="Merchant Net"
            subtitle="Batch #99281"
        />

        {/* Right Side */}
         <FloatingLedgerItem 
            initialX={400} 
            initialY={-180} 
            speed={1.5} 
            width={260} 
            height={60} 
            scrollYProgress={scrollYProgress}
            delay={0.15}
            amount="$1,250,000.00"
            type="credit"
            title="Liquidity Rebal"
            subtitle="USDC • Circle"
        />
         <FloatingLedgerItem 
            initialX={480} 
            initialY={100} 
            speed={0.9} 
            width={220} 
            height={60} 
            scrollYProgress={scrollYProgress}
            delay={0.25}
            amount="$5,400.00"
            type="debit"
            title="Cloud Infra"
            subtitle="AWS • Card ••42"
        />
        <FloatingLedgerItem 
            initialX={320} 
            initialY={280} 
            speed={2.2} 
            width={270} 
            height={60} 
            scrollYProgress={scrollYProgress}
            delay={0.35}
            amount="$340,000.00"
            type="credit"
            title="FX Settlement"
            subtitle="EUR/USD • Spot"
        />

      </div>
      
      {/* Mobile-only static fallback */}
       <div className="md:hidden mt-12 grid grid-cols-1 gap-3 opacity-50 px-6 w-full max-w-sm">
            <div className="h-16 bg-white border border-border/60 rounded-lg shadow-sm flex items-center px-4 justify-between">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-emerald-50/50 flex items-center justify-center border border-black/5">
                      <span className="text-[10px] font-bold text-emerald-600">T</span>
                   </div>
                   <div className="flex flex-col">
                       <span className="text-[11px] font-semibold text-obsidian">Treasury Sweep</span>
                       <span className="text-[9px] text-subtle font-mono">Settlement • T-0</span>
                   </div>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-[11px] font-mono font-medium text-emerald-600">+$24,500.00</span>
                    <div className="flex items-center gap-1 mt-1">
                        <CheckmarkFilled className="w-2.5 h-2.5 text-emerald-500" />
                        <span className="text-[8px] font-medium text-subtle">Cleared</span>
                    </div>
                </div>
            </div>
            
            <div className="h-16 bg-white border border-border/60 rounded-lg shadow-sm flex items-center px-4 justify-between">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center border border-black/5">
                      <span className="text-[10px] font-bold text-obsidian">V</span>
                   </div>
                   <div className="flex flex-col">
                       <span className="text-[11px] font-semibold text-obsidian">Vendor Payout</span>
                       <span className="text-[9px] text-subtle font-mono">Wire • Chase</span>
                   </div>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-[11px] font-mono font-medium text-obsidian">-$1,200.00</span>
                    <div className="flex items-center gap-1 mt-1 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-100">
                         <Time className="w-2 h-2 text-amber-500" />
                         <span className="text-[8px] font-bold uppercase tracking-wide text-amber-700">Pending</span>
                     </div>
                </div>
            </div>
       </div>

    </div>
  );
}
