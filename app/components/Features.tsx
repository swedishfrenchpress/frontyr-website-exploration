'use client';

import { GitBranch, History, FileText, RotateCw } from 'lucide-react';

export function Features() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-20 relative z-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-xl">
                <h2 className="font-sans text-4xl md:text-5xl font-semibold text-obsidian tracking-tight mb-6 leading-[1.1]">
                  Accelerate payments with stablecoin settlement
                </h2>
                <p className="text-subtle text-lg leading-relaxed">
                  Replace slow, expensive legacy payment rails with stablecoin-powered settlement. Frontyr orchestrates the fastest, lowest-cost path for every transaction - globally and in real time.
                </p>
              </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Programmable Ledger */}
          <div className="md:col-span-8 group relative bg-white border border-border rounded-xl overflow-hidden hover:border-obsidian/30 transition-all duration-500">
             {/* Grid background removed by deleting the div that was here */}

            <div className="relative z-10 p-10 h-full flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="max-w-md">
                <div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-6 text-obsidian shadow-sm">
                  <GitBranch className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-semibold text-obsidian mb-3">
                  Legacy Core Integration
                </h3>
                <p className="text-subtle leading-relaxed">
                  Connect stablecoin settlement rails directly to your existing core banking system. Frontyr bridges the gap between legacy ledgers and real-time blockchain settlement.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border/60 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="font-sans text-[13px] font-semibold text-subtle tracking-tight">
                    Real-Time Settlement
                  </span>
                </div>
              </div>
            </div>

              {/* Visual */}
              <div className="mt-12 h-32 w-full relative flex items-center border-t border-border/40 pt-6 overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 600 100" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <marker id="arrow-head" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
                      <path d="M0,0 L4,2 L0,4" fill="#111"></path>
                    </marker>
                  </defs>
                  <path d="M20,50 C100,50 120,20 200,20 C280,20 300,80 380,80 C460,80 480,50 560,50" fill="none" stroke="#E5E5E5" strokeWidth="1.5" strokeDasharray="4 4"></path>

                  <path d="M20,50 C100,50 120,20 200,20 C280,20 300,80 380,80 C460,80 480,50 560,50" fill="none" stroke="#111" strokeWidth="1.5" strokeDasharray="600" strokeDashoffset="600" className="transition-all duration-[1500ms] ease-in-out group-hover:stroke-dashoffset-0" markerEnd="url(#arrow-head)"></path>

                  <g className="transition-all duration-500 delay-0 opacity-100 group-hover:scale-110 origin-center">
                    <circle cx="20" cy="50" r="4" fill="#111"></circle>
                    <text x="20" y="70" textAnchor="middle" className="text-[8px] font-mono fill-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      INPUT
                    </text>
                  </g>
                  <g className="transition-all duration-500 delay-[400ms] opacity-50 scale-75 group-hover:opacity-100 group-hover:scale-100 origin-center">
                    <circle cx="200" cy="20" r="4" fill="#fff" stroke="#111" strokeWidth="1.5"></circle>
                    <text x="200" y="40" textAnchor="middle" className="text-[8px] font-mono fill-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      LOGIC A
                    </text>
                  </g>
                  <g className="transition-all duration-500 delay-[800ms] opacity-50 scale-75 group-hover:opacity-100 group-hover:scale-100 origin-center">
                    <circle cx="380" cy="80" r="4" fill="#fff" stroke="#111" strokeWidth="1.5"></circle>
                    <text x="380" y="100" textAnchor="middle" className="text-[8px] font-mono fill-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      LOGIC B
                    </text>
                  </g>
                  <g className="transition-all duration-500 delay-[1200ms] opacity-50 scale-75 group-hover:opacity-100 group-hover:scale-100 origin-center">
                    <circle cx="560" cy="50" r="4" fill="#111"></circle>
                    <text x="560" y="70" textAnchor="middle" className="text-[8px] font-mono fill-obsidian font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      RESULT
                    </text>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2: Regulatory Audit */}
          <div className="md:col-span-4 group relative bg-white border border-border rounded-xl overflow-hidden hover:border-obsidian/30 transition-all duration-500 flex flex-col">
            <div className="p-10 relative z-10 flex flex-col h-full">
              <div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-6 text-obsidian shadow-sm">
                <History className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-obsidian mb-3">
                Regulatory Audit
              </h3>
              <p className="text-sm text-subtle leading-relaxed mb-8">
                Audit-ready state history with immutable versioning and
                programmable compliance controls.
              </p>

              <div className="mt-auto relative w-full h-40 flex flex-col justify-end items-center pb-4">
                {/* Back Card (KYC) - Smallest, furthest back */}
                <div className="absolute w-[80%] h-12 bg-white border border-border rounded-t-md top-8 scale-90 opacity-0 group-hover:opacity-100 group-hover:top-0 transition-all duration-500 ease-out flex items-center px-3 gap-2 shadow-sm">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></div>
                    <span className="text-[9px] font-bold text-obsidian uppercase tracking-wide w-8">KYC</span>
                    <div className="h-0.5 flex-1 bg-green-500/20 rounded relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-green-500 rounded-full"></div>
                    </div>
                </div>

                {/* Middle Card (AML) - Medium size */}
                <div className="absolute w-[90%] h-12 bg-white border border-border rounded-t-md top-8 scale-95 opacity-50 group-hover:opacity-100 group-hover:top-6 transition-all duration-500 ease-out delay-75 flex items-center px-3 gap-2 shadow-sm z-10">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></div>
                    <span className="text-[9px] font-bold text-obsidian uppercase tracking-wide w-8">AML</span>
                    <div className="h-0.5 flex-1 bg-green-500/20 rounded relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-green-500 rounded-full"></div>
                    </div>
                </div>

                {/* Front Card (OFAC) - Largest, frontmost */}
                <div className="relative w-full h-12 bg-white border border-border rounded-t-md flex items-center px-4 gap-3 z-20 shadow-sm transition-transform duration-300 group-hover:translate-y-[-5px] group-hover:shadow-md mt-auto">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></div>
                  <span className="text-[10px] font-bold text-obsidian uppercase tracking-wide w-8">OFAC</span>
                  <div className="h-0.5 flex-1 bg-green-500/20 rounded relative flex items-center">
                        <div className="w-full h-full bg-green-500/10"></div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-green-600 font-bold text-[10px]">✓</div>
                  </div>
                </div>
                
                {/* Base line to hide bottom borders/rounded corners if needed, or just part of container */}
                <div className="w-full h-4 bg-white border-x border-b border-border rounded-b-md z-30 relative -mt-1"></div>
              </div>
            </div>
          </div>

          {/* Card 3: Dynamic Settlement Routing */}
          <div className="md:col-span-12 group relative bg-white border border-border rounded-xl overflow-hidden hover:border-obsidian/30 transition-all duration-500">
            <div className="p-10 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 max-w-lg">
                <div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-6 text-obsidian shadow-sm">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-obsidian mb-2">
                  Dynamic Settlement Routing
                </h3>
                <p className="text-subtle leading-relaxed">
                  Frontyr dynamically routes each transaction across the optimal combination of rails, partners and networks to deliver the fastest, lowest-cost settlement for every payment.
                </p>
              </div>

              {/* Dynamic Routing Animation */}
              <div className="flex-1 w-full h-32 relative flex items-center overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 600 120" preserveAspectRatio="xMidYMid meet">
                    <defs>
                      <marker id="arrow-head-routing" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
                        <path d="M0,0 L4,2 L0,4" fill="#111"></path>
                      </marker>
                    </defs>

                    {/* Dotted Line Path */}
                    <path 
                      id="routing-path"
                      d="M50,60 C150,60 180,30 300,30 C420,30 450,60 550,60" 
                      fill="none" 
                      stroke="#E5E5E5" 
                      strokeWidth="1.5" 
                      strokeDasharray="4 4"
                    ></path>

                    {/* Moving Dot Animation */}
                    <circle r="4" fill="#0A1628">
                        <animateMotion 
                            dur="5s" 
                            repeatCount="indefinite"
                            keyPoints="0;1"
                            keyTimes="0;1"
                        >
                            <mpath href="#routing-path" />
                        </animateMotion>
                    </circle>

                    {/* USD Origin Node */}
                    <g className="transition-all duration-500 delay-0 opacity-100 group-hover:scale-110 origin-center">
                        <circle cx="50" cy="60" r="16" fill="white" stroke="#E5E5E5" strokeWidth="1"></circle>
                        <text x="50" y="64" textAnchor="middle" className="text-[10px] font-bold font-sans fill-obsidian">$</text>
                        <text x="50" y="90" textAnchor="middle" className="text-[9px] font-mono fill-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300">USD</text>
                    </g>

                    {/* Frontyr Core Node (Center) - Stablecoin Indicator */}
                    <g className="transition-all duration-500 delay-[800ms] opacity-50 scale-90 group-hover:opacity-100 group-hover:scale-100 origin-center">
                        {/* Box - Larger to fit elements */}
                        <rect x="250" y="0" width="100" height="60" rx="6" fill="white" stroke="#0A1628" strokeWidth="1.5"></rect>
                        
                        {/* Star Logo - Above Text */}
                        <g transform="translate(300, 16) scale(0.14) translate(-50, -50)">
                             <path d="M50 20 L60 40 L80 50 L60 60 L50 80 L40 60 L20 50 L40 40 Z" fill="#0A1628" />
                        </g>

                        {/* Text - Centered */}
                        <text x="300" y="34" textAnchor="middle" className="text-[10px] font-bold font-sans fill-obsidian tracking-wide">FRONTYR</text>
                        
                        {/* 3 Circles - Below Text */}
                        <g transform="translate(300, 48)">
                            <circle cx="-14" cy="0" r="4" fill="white" stroke="#E5E7EB" strokeWidth="1" />
                            <circle cx="0" cy="0" r="4" fill="white" stroke="#E5E7EB" strokeWidth="1" />
                            <circle cx="14" cy="0" r="4" fill="white" stroke="#E5E7EB" strokeWidth="1" />
                        </g>

                        {/* Label */}
                        <text x="300" y="75" textAnchor="middle" className="text-[8px] font-mono fill-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300">STABLECOIN RAIL</text>
                    </g>

                    {/* USD Destination Node */}
                    <g className="transition-all duration-500 delay-[1600ms] opacity-50 scale-90 group-hover:opacity-100 group-hover:scale-100 origin-center">
                        <circle cx="550" cy="60" r="16" fill="#0A1628"></circle>
                        <text x="550" y="64" textAnchor="middle" className="text-[10px] font-bold font-sans fill-white">$</text>
                        <text x="550" y="90" textAnchor="middle" className="text-[9px] font-mono fill-obsidian font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">USD</text>
                    </g>
                  </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
