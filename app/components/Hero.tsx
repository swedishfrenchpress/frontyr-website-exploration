'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 md:px-12 lg:px-20 pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start space-y-8 relative z-10 text-left">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border/60 shadow-sm mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-sans text-[13px] font-semibold text-subtle tracking-tight">
                  SOC 2 Compliant
                </span>
              </div>
              <h1 className="font-sans text-5xl md:text-7xl lg:text-7xl font-bold tracking-tighter text-obsidian leading-[0.95]">
                Stablecoin
                <br />
                <span className="text-subtle">Banking Core.</span>
              </h1>
              <p className="max-w-xl font-sans text-lg text-subtle leading-relaxed">
                Frontyr builds a modern, programmable banking core designed from
                the ground up for stablecoins, tokenized dollars, and real-time
                settlement.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <button className="group relative isolate overflow-hidden bg-obsidian text-white text-sm font-semibold px-8 py-3.5 rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-300 hover:bg-obsidian/90 hover:scale-[1.02] hover:shadow-lg flex items-center gap-2 cursor-pointer">
                <span className="relative z-10">Request Platform Brief</span>
                <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button className="px-8 py-3.5 bg-white text-obsidian border border-border text-sm font-medium rounded-lg shadow-sm transition-all duration-300 hover:bg-gray-50 hover:border-obsidian/40 hover:text-black hover:shadow-md cursor-pointer">
                Platform Overview
              </button>
            </motion.div>
        </div>

        {/* Right Column: Technical Illustration */}
        <motion.div 
            className="relative w-full aspect-square flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="relative w-full max-w-lg aspect-square bg-[#FAFAFA] border border-[#E5E5E5] rounded-lg p-8 overflow-hidden">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 opacity-30" style={{ 
                    backgroundImage: 'radial-gradient(#0A1628 0.5px, transparent 0.5px)', 
                    backgroundSize: '16px 16px' 
                }}></div>

                {/* Corner Markers */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-obsidian/20"></div>
                <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-obsidian/20"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-obsidian/20"></div>
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-obsidian/20"></div>

                {/* Technical Labels */}
                <div className="absolute top-8 left-0 w-full text-center font-mono text-[10px] tracking-widest text-obsidian/40">
                    SYSTEM_OPTIMAL
                </div>
                <div className="absolute bottom-8 left-0 w-full text-center flex justify-center items-center gap-2">
                     <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                     <span className="font-mono text-[10px] tracking-widest text-obsidian/60 bg-white px-2 py-0.5 border border-obsidian/10 rounded-sm">LIVE_FEED</span>
                </div>

                <div className="absolute left-8 top-1/2 -translate-y-1/2 font-mono text-[9px] text-obsidian/30 -rotate-90 origin-center">
                    SYS_READY
                </div>
                 <div className="absolute right-8 top-1/2 -translate-y-1/2 font-mono text-[9px] text-obsidian/30 rotate-90 origin-center">
                    NODE_01
                </div>

                {/* Center SVG Composition */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 400 400" className="w-3/4 h-3/4">
                        {/* Outer Ring - Lightest */}
                        <circle cx="200" cy="200" r="140" fill="none" stroke="#0A1628" strokeWidth="1" strokeDasharray="4 4" opacity="0.1" />
                        
                        {/* Middle Ring - Medium */}
                        <circle cx="200" cy="200" r="100" fill="none" stroke="#0A1628" strokeWidth="1" opacity="0.25" />

                        {/* Innermost Ring - Darkest & Rotating */}
                        <g className="animate-[spin_15s_linear_infinite] origin-center">
                            <circle cx="200" cy="200" r="60" fill="none" stroke="#0A1628" strokeWidth="1.5" opacity="0.8" strokeDasharray="280 100" />
                            {/* Tick mark on ring */}
                             <line x1="200" y1="135" x2="200" y2="145" stroke="#0A1628" strokeWidth="2" />
                        </g>

                        {/* Center Star - Geometric & Sharp */}
                        <path 
                            d="M200 160 L210 190 L240 200 L210 210 L200 240 L190 210 L160 200 L190 190 Z" 
                            fill="#0A1628" 
                        />
                    </svg>
                </div>
            </div>
        </motion.div>

      </div>
    </section>
  );
}
