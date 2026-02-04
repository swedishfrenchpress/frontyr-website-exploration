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
        width,
        height
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute rounded-xl shadow-[0_8px_30px_-6px_rgba(10,22,40,0.12)] border border-border/60 bg-white hidden md:flex flex-col justify-center px-5 py-2 ${className}`}
    >
        <div className="flex items-center justify-between gap-4 w-full">
            <div className="flex items-center gap-3.5 min-w-0">
                {/* Icon Placeholder / Logo */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border border-black/5 ${
                    type === 'credit' ? 'bg-emerald-50/50' : 'bg-gray-50'
                }`}>
                    <div className={`text-[12px] font-bold ${type === 'credit' ? 'text-emerald-600' : 'text-obsidian'}`}>
                        {title && title.charAt(0)}
                    </div>
                </div>
                
                <div className="flex flex-col min-w-0">
                    <span className="text-[13px] font-semibold text-obsidian truncate leading-tight">
                        {title}
                    </span>
                    <span className="text-[11px] text-subtle font-mono mt-0.5 whitespace-nowrap">
                        {subtitle}
                    </span>
                </div>
            </div>
            
            <div className="flex flex-col items-end shrink-0">
                <span className={`font-mono text-[13px] font-medium leading-tight ${
                    type === 'credit' ? 'text-emerald-600' : 'text-obsidian'
                }`}>
                    {type === 'credit' ? '+' : '-'}{amount}
                </span>
                
                <div className="mt-1 flex items-center gap-1">
                    {status === 'pending' ? (
                         <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded border border-amber-100">
                             <Time className="w-2.5 h-2.5 text-amber-500" />
                             <span className="text-[9px] font-bold uppercase tracking-wide text-amber-700">Pending</span>
                         </div>
                    ) : (
                        <div className="flex items-center gap-1.5">
                            <CheckmarkFilled className="w-3 h-3 text-emerald-500" />
                            <span className="text-[10px] font-medium text-subtle">Cleared • USDC</span>
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
    <div ref={containerRef} className="relative w-full py-32 md:py-48 overflow-hidden flex flex-col items-center justify-center min-h-[600px] md:min-h-[900px] bg-white/50">
      
      {/* Background decoration: Dot Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.4]">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-grid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" className="fill-obsidian/10" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-grid)" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white/80"></div>
      </div>
      
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
            initialX={-450} 
            initialY={-120} 
            speed={1.8} 
            width={380} 
            height={80} 
            scrollYProgress={scrollYProgress}
            delay={0.1}
            amount="$450,000.00"
            type="credit"
            title="Treasury Sweep"
            subtitle="Sat Mar 07 • 04:23 AM"
        />
         <FloatingLedgerItem 
            initialX={-590} 
            initialY={150} 
            speed={0.7} 
            width={370} 
            height={80} 
            scrollYProgress={scrollYProgress}
            delay={0.2}
            amount="$12,500.00"
            type="debit"
            status="cleared"
            title="Vendor Payout"
            subtitle="Sun Mar 08 • 09:30 AM"
        />
        <FloatingLedgerItem 
            initialX={-410} 
            initialY={380} 
            speed={2.5} 
            width={360} 
            height={80} 
            scrollYProgress={scrollYProgress}
            delay={0.3}
            amount="$98,200.00"
            type="credit"
            title="Merchant Net"
            subtitle="Sat Mar 07 • 02:15 PM"
        />

        {/* Right Side */}
         <FloatingLedgerItem 
            initialX={470} 
            initialY={-100} 
            speed={1.5} 
            width={400} 
            height={80} 
            scrollYProgress={scrollYProgress}
            delay={0.15}
            amount="$1,250,000.00"
            type="credit"
            title="Liquidity Rebal"
            subtitle="Sun Mar 08 • 03:45 AM"
        />
         <FloatingLedgerItem 
            initialX={550} 
            initialY={220} 
            speed={0.9} 
            width={350} 
            height={80} 
            scrollYProgress={scrollYProgress}
            delay={0.25}
            amount="$5,400.00"
            type="debit"
            title="Cloud Infra"
            subtitle="Sat Mar 07 • 08:30 PM"
        />
        <FloatingLedgerItem 
            initialX={390} 
            initialY={440} 
            speed={2.2} 
            width={390} 
            height={80} 
            scrollYProgress={scrollYProgress}
            delay={0.35}
            amount="$340,000.00"
            type="credit"
            title="FX Settlement"
            subtitle="Sun Mar 08 • 06:15 AM"
        />

      </div>
      
      {/* Mobile-only static fallback */}
       <div className="md:hidden mt-12 grid grid-cols-1 gap-3 opacity-50 px-6 w-full max-w-sm">
            <div className="h-16 bg-white border border-border/60 rounded-xl shadow-sm flex items-center px-4 justify-between">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-emerald-50/50 flex items-center justify-center border border-black/5">
                      <span className="text-[12px] font-bold text-emerald-600">T</span>
                   </div>
                   <div className="flex flex-col">
                       <span className="text-[13px] font-semibold text-obsidian">Treasury Sweep</span>
                       <span className="text-[11px] text-subtle font-mono">Sat Mar 07 • 04:23 AM</span>
                   </div>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-[13px] font-mono font-medium text-emerald-600">+$24,500.00</span>
                    <div className="flex items-center gap-1.5 mt-1">
                        <CheckmarkFilled className="w-3 h-3 text-emerald-500" />
                        <span className="text-[10px] font-medium text-subtle">Cleared</span>
                    </div>
                </div>
            </div>
            
            <div className="h-16 bg-white border border-border/60 rounded-xl shadow-sm flex items-center px-4 justify-between">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-black/5">
                      <span className="text-[12px] font-bold text-obsidian">V</span>
                   </div>
                   <div className="flex flex-col">
                       <span className="text-[13px] font-semibold text-obsidian">Vendor Payout</span>
                       <span className="text-[11px] text-subtle font-mono">Sun Mar 08 • 09:30 AM</span>
                   </div>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-[13px] font-mono font-medium text-obsidian">-$1,200.00</span>
                    <div className="flex items-center gap-1.5 mt-1">
                        <CheckmarkFilled className="w-3 h-3 text-emerald-500" />
                        <span className="text-[10px] font-medium text-subtle">Cleared</span>
                    </div>
                </div>
            </div>
       </div>

    </div>
  );
}
