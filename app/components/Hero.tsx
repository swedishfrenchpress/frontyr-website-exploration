'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 pt-32 pb-20 gap-12 overflow-hidden">
      {/* Hero Text - Centered */}
      <div className="max-w-4xl text-center space-y-8 relative z-10">
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
          <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-obsidian leading-[0.95]">
            Stablecoin
            <br />
            <span className="text-subtle">Banking Core.</span>
          </h1>
          <p className="max-w-xl mx-auto font-sans text-lg text-subtle leading-relaxed">
            Frontyr builds a modern, programmable banking core designed from
            the ground up for stablecoins, tokenized dollars, and real-time
            settlement.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap items-center justify-center gap-4"
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

      {/* Illustration - Below Hero */}
      <motion.div 
        className="relative w-full max-w-2xl aspect-[16/9] flex items-center justify-center mt-8"
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-canvas via-white to-canvas opacity-50 blur-3xl"></div>
        <div className="premium-card w-full h-full p-6 relative overflow-hidden rounded-2xl bg-white border border-[#EAEAEA] shadow-[0_2px_4px_rgba(0,0,0,0.02),0_8px_16px_-4px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] hover:border-[#D4D4D4]">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-obsidian to-transparent"></div>
          {/* Mock UI: Node Graph */}
          <div className="h-full w-full flex flex-col">
            <div className="flex justify-between items-center mb-6 border-b border-border/50 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-obsidian"></div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-obsidian/80 font-mono">
                  Stablecoin Core Graph
                </span>
              </div>
              <div className="flex gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400/20"></span>
                <span className="w-2 h-2 rounded-full bg-yellow-400/20"></span>
                <span className="w-2 h-2 rounded-full bg-green-400/20"></span>
              </div>
            </div>
            <div className="flex-1 relative">
              {/* SVG Graph */}
              <svg className="w-full h-full" viewBox="0 0 400 220">
                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#E5E5E5" />
                  </marker>
                </defs>

                {/* --- Static Paths --- */}
                
                {/* Main Flow Path (Bank A -> Frontyr -> Bank B) */}
                <path d="M80,80 C110,80 130,80 140,80" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
                <path d="M260,80 C270,80 290,80 320,80" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>

                {/* Abstracted Complexity Paths (Dropping down) */}
                <path d="M200,110 C200,130 150,130 150,150" fill="none" stroke="#E5E5E5" strokeWidth="1.5" strokeDasharray="4 4"></path>
                <path d="M200,110 C200,130 250,130 250,150" fill="none" stroke="#E5E5E5" strokeWidth="1.5" strokeDasharray="4 4"></path>

                {/* --- Active Signal Animation --- */}
                {/* Travels from left (Bank A) through Center to Right (Bank B) */}
                <path 
                  d="M50,80 L350,80" 
                  fill="none" 
                  stroke="#0A1628" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  className="animate-signal" 
                  style={{ strokeDasharray: '60 400' }}
                ></path>

                {/* --- Nodes --- */}

                {/* Left: Sending Bank */}
                <g className="origin-[50px_80px] animate-[pulse-context_6s_infinite_ease-out]">
                  <rect x="20" y="65" width="60" height="30" rx="4" fill="white" stroke="#0A1628" strokeWidth="1.5"></rect>
                  <text x="50" y="84" textAnchor="middle" className="font-sans text-[9px] font-bold fill-[#0A1628]">
                    Bank A
                  </text>
                </g>

                {/* Right: Receiving Bank */}
                <g className="origin-[350px_80px] animate-[pulse-outcome_6s_infinite_ease-out]">
                  <rect x="320" y="65" width="60" height="30" rx="4" fill="white" stroke="#0A1628" strokeWidth="1.5"></rect>
                  <text x="350" y="84" textAnchor="middle" className="font-sans text-[9px] font-bold fill-[#0A1628]">
                    Bank B
                  </text>
                </g>

                {/* Center: Frontyr Core (The Bridge) */}
                <rect x="140" y="50" width="120" height="60" rx="8" fill="white" stroke="#0A1628" strokeWidth="2" className="drop-shadow-sm"></rect>
                <text x="200" y="75" textAnchor="middle" className="font-sans text-[11px] font-bold fill-[#0A1628]">
                  Frontyr Core
                </text>
                <text x="200" y="92" textAnchor="middle" className="font-sans text-[8px] fill-[#6B7280]">
                  Instant Settlement Rail
                </text>

                {/* --- Abstracted Complexity (De-emphasized) --- */}
                
                {/* Connection Dots on Frontyr */}
                <circle cx="200" cy="110" r="3" fill="#E5E5E5"></circle>

                {/* Compliance Node */}
                <rect x="110" y="150" width="80" height="24" rx="4" fill="#F5F5F7" stroke="#E5E5E5" strokeWidth="1"></rect>
                <text x="150" y="165" textAnchor="middle" className="font-sans text-[8px] font-medium fill-[#9CA3AF]">
                  Compliance
                </text>

                {/* Treasury Node */}
                <rect x="210" y="150" width="80" height="24" rx="4" fill="#F5F5F7" stroke="#E5E5E5" strokeWidth="1"></rect>
                <text x="250" y="165" textAnchor="middle" className="font-sans text-[8px] font-medium fill-[#9CA3AF]">
                  Treasury
                </text>

                {/* Checkmark Animation at End */}
                <path d="M346 80l3 3 5-5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="animate-[check-draw_6s_linear_infinite]" style={{ strokeDasharray: 12 }}></path>

              </svg>

              {/* Floating Label - Kept as requested */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-obsidian text-white text-[10px] font-medium px-3 py-1.5 rounded-full shadow-xl z-10 border border-white/10">
                Real-Time: 24/7
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
