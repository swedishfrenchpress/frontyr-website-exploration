'use client';

import { Branch, Time, Layers, WarningAlt, CheckmarkOutline, Send, Renew, Calendar, User, Wallet } from '@carbon/icons-react';
import { useEffect, useState, useRef } from 'react';

// Transaction type for the ledger animation
interface Transaction {
  id: string;
  type: 'USD' | 'USDC';
  status: 'pending' | 'processing' | 'settled';
}

function DashboardDelayCard() {
  const [step, setStep] = useState<'idle' | 'processing' | 'success' | 'delayed'>('idle');

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const runAnimation = () => {
      // Start loop
      setStep('idle');
      
      // Click Send
      timer = setTimeout(() => {
        setStep('processing');
        
        // Processing done
        timer = setTimeout(() => {
          setStep('success');
          
          // Show the "Catch"
          timer = setTimeout(() => {
            setStep('delayed');
            
            // Reset
            timer = setTimeout(() => {
              runAnimation();
            }, 6500);
          }, 800);
        }, 1500);
      }, 1500);
    };

    runAnimation();
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm h-full flex flex-col relative group">
      {/* Dashboard Chrome */}
      <div className="border-b border-border bg-gray-50/50 flex items-center px-4 py-3 gap-3">
         <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
         </div>
         <div className="flex-1 bg-white border border-border h-6 rounded flex items-center px-2 text-[10px] text-subtle font-mono">
            bank.com/dashboard/transfer
         </div>
      </div>

      <div className="flex-1 flex bg-canvas/30">
        {/* Sidebar Mock */}
        <div className="w-12 border-r border-border bg-white flex flex-col items-center py-4 gap-4">
           <div className="w-6 h-6 rounded bg-obsidian flex items-center justify-center text-white">
              <span className="font-bold text-[10px]">F</span>
           </div>
           <div className="h-px w-6 bg-border"></div>
           <Wallet className="w-4 h-4 text-obsidian" />
           <Time className="w-4 h-4 text-subtle" />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 flex flex-col relative">
           <div className="flex justify-between items-end mb-6">
              <div>
                 <h4 className="text-sm font-semibold text-obsidian">Transfer Funds</h4>
                 <p className="text-[10px] text-subtle">Initiate a domestic wire</p>
              </div>
              <div className="text-right">
                 <div className="text-[10px] text-subtle">Available Balance</div>
                 <div className="text-sm font-mono font-medium text-obsidian">$12,450.00</div>
              </div>
           </div>

           {/* Transfer Form */}
           <div className="bg-white border border-border rounded-lg p-4 shadow-sm mb-4">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border border-dashed">
                 <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center border border-border">
                    <User className="w-4 h-4 text-subtle" />
                 </div>
                 <div>
                    <div className="text-xs font-medium text-obsidian">Sarah Chen</div>
                    <div className="text-[10px] text-subtle">Chase Bank •••• 8832</div>
                 </div>
              </div>
              
              <div className="mb-4">
                 <label className="text-[10px] text-subtle font-medium mb-1 block">Amount</label>
                 <div className="flex items-baseline gap-1 text-2xl font-semibold text-obsidian">
                    <span>$</span>
                    <span>3,000.00</span>
                 </div>
              </div>

              <button 
                className={`
                  w-full h-9 rounded text-xs font-medium text-white transition-all duration-300 flex items-center justify-center gap-2
                  ${step === 'processing' ? 'bg-subtle cursor-wait' : 
                    step === 'success' || step === 'delayed' ? 'bg-green-600' : 'bg-obsidian hover:bg-obsidian/90'}
                `}
              >
                {step === 'processing' ? (
                  <>
                    <Renew className="w-3 h-3 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : step === 'success' || step === 'delayed' ? (
                  <>
                    <CheckmarkOutline className="w-3 h-3" />
                    <span>Sent</span>
                  </>
                ) : (
                  <>
                    <span>Execute Transfer</span>
                    <Send className="w-3 h-3" />
                  </>
                )}
              </button>
           </div>

           {/* Notification / Alert Area */}
           <div className="relative h-20">
              <div className={`
                absolute inset-x-0 top-0 bg-amber-50 border border-amber-200 rounded-md p-3 shadow-sm flex gap-3
                transition-all duration-500 ease-out origin-top
                ${step === 'delayed' ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'}
              `}>
                  <div className="mt-0.5 text-amber-600 shrink-0">
                     <WarningAlt className="w-4 h-4" />
                  </div>
                  <div>
                     <h5 className="text-xs font-semibold text-amber-900 mb-0.5">Settlement Delayed</h5>
                     <p className="text-[10px] text-amber-800 leading-relaxed">
                        Funds will settle Monday (48h) due to weekend banking hours.
                     </p>
                  </div>
              </div>
           </div>

        </div>
      </div>
    </div>
  );
}

// Unified Ledger Card Component with animations
function UnifiedLedgerCard() {
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
    <div className="md:col-span-12 group relative bg-white border border-border rounded-xl overflow-hidden hover:border-obsidian/30 transition-all duration-500">
      <div className="p-10 flex flex-col md:flex-row items-start gap-12">
        {/* Left side - Copy */}
        <div className="flex-1 max-w-lg">
          <div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-6 text-obsidian shadow-sm">
            <Layers className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-semibold text-obsidian mb-2">
            One ledger. Zero reconciliation headaches.
          </h3>
          <p className="text-subtle leading-relaxed mb-6">
            Fiat and stablecoins in one place. On-chain settlement with off-chain compliance. No more piecing together balance sheets from five different systems.
          </p>
          
          {/* Feature bullets */}
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
              <span className="text-sm text-subtle">Stablecoin-native checking infrastructure</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
              <span className="text-sm text-subtle">Real-time programmable treasury</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
              <span className="text-sm text-subtle">Automated liquidity management</span>
            </li>
          </ul>
        </div>

        {/* Right side - Ledger Animation */}
        <div className="flex-1 w-full">
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
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="py-32 px-6 md:px-12 lg:px-20 relative z-10 bg-white border-y border-border/60 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[260px] bg-[radial-gradient(circle_at_center,rgba(10,22,40,0.08),transparent_70%)]"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-canvas -mx-6 md:-mx-12 lg:-mx-20 px-6 md:px-12 lg:px-20 py-16 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border/60 shadow-sm mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span className="font-sans text-[12px] font-semibold text-subtle tracking-tight uppercase">The Problem</span>
                </div>
                <h3 className="font-sans text-3xl md:text-4xl font-semibold text-obsidian tracking-tight mb-4 leading-[1.15]">
                  24/7 banking isn't optional anymore.
                </h3>
                <p className="text-subtle text-lg leading-relaxed">
                  Your customers move money at midnight. Your competitors are starting to let them. Legacy infrastructure wasn't designed for always-on finance and bolt-ons won't get you there.
                </p>
              </div>

              <DashboardDelayCard />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="font-sans text-4xl md:text-5xl font-semibold text-obsidian tracking-tight mb-6 leading-[1.1]">
              Stablecoins: traditional banking meets always-on finance
            </h2>
            <p className="text-subtle text-lg leading-relaxed">
              The trust of regulated dollars. The speed of crypto rails. Frontyr routes every transaction through the fastest, cheapest path - so your customers get their money when they need it, not when the bank opens.
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
                  <Branch className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-semibold text-obsidian mb-3">
                  Every transaction. Fastest route. 24/7.
                </h3>
                <p className="text-subtle leading-relaxed">
                  Frontyr picks the optimal rails for each payment automatically. Your customers settle in seconds instead of days - whether it's 2pm or 2am.
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

              {/* Dynamic Routing Animation */}
              <div className="mt-12 h-32 w-full relative flex items-center border-t border-border/40 pt-6 overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 600 100" preserveAspectRatio="xMidYMid meet">
                    <defs>
                      <marker id="arrow-head-routing" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
                        <path d="M0,0 L4,2 L0,4" fill="#111"></path>
                      </marker>
                    </defs>

                    {/* Dotted Line Path */}
                    <path 
                      id="routing-path"
                      d="M20,50 C120,50 150,20 300,20 C450,20 480,50 580,50" 
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
                        <circle cx="20" cy="50" r="16" fill="white" stroke="#E5E5E5" strokeWidth="1"></circle>
                        <text x="20" y="54" textAnchor="middle" className="text-[10px] font-bold font-sans fill-obsidian">$</text>
                        <text x="20" y="80" textAnchor="middle" className="text-[9px] font-mono fill-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300">USD</text>
                    </g>

                    {/* Frontyr Core Node (Center) - Stablecoin Indicator */}
                    <g className="transition-all duration-500 delay-[800ms] opacity-50 scale-90 group-hover:opacity-100 group-hover:scale-100 origin-center">
                        {/* Box - Larger to fit elements */}
                        <rect x="250" y="-10" width="100" height="60" rx="6" fill="white" stroke="#0A1628" strokeWidth="1.5"></rect>
                        
                        {/* Star Logo - Above Text */}
                        <g transform="translate(300, 6) scale(0.14) translate(-50, -50)">
                             <path d="M50 20 L60 40 L80 50 L60 60 L50 80 L40 60 L20 50 L40 40 Z" fill="#0A1628" />
                        </g>

                        {/* Text - Centered */}
                        <text x="300" y="24" textAnchor="middle" className="text-[10px] font-bold font-sans fill-obsidian tracking-wide">FRONTYR</text>
                        
                        {/* 3 Circles - Below Text */}
                        <g transform="translate(300, 38)">
                            <circle cx="-14" cy="0" r="4" fill="white" stroke="#E5E7EB" strokeWidth="1" />
                            <circle cx="0" cy="0" r="4" fill="white" stroke="#E5E7EB" strokeWidth="1" />
                            <circle cx="14" cy="0" r="4" fill="white" stroke="#E5E7EB" strokeWidth="1" />
                        </g>

                        {/* Label */}
                        <text x="300" y="65" textAnchor="middle" className="text-[8px] font-mono fill-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300">STABLECOIN RAIL</text>
                    </g>

                    {/* USD Destination Node */}
                    <g className="transition-all duration-500 delay-[1600ms] opacity-50 scale-90 group-hover:opacity-100 group-hover:scale-100 origin-center">
                        <circle cx="580" cy="50" r="16" fill="#0A1628"></circle>
                        <text x="580" y="54" textAnchor="middle" className="text-[10px] font-bold font-sans fill-white">$</text>
                        <text x="580" y="80" textAnchor="middle" className="text-[9px] font-mono fill-obsidian font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">USD</text>
                    </g>
                  </svg>
              </div>
            </div>
          </div>

          {/* Card 2: Regulatory Audit */}
          <div className="md:col-span-4 group relative bg-white border border-border rounded-xl overflow-hidden hover:border-obsidian/30 transition-all duration-500 flex flex-col">
            <div className="p-10 relative z-10 flex flex-col h-full">
              <div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-6 text-obsidian shadow-sm">
                <Time className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-obsidian mb-3">
                Auditors love us
              </h3>
              <p className="text-sm text-subtle leading-relaxed mb-8">
                Every state change logged. Every transaction traceable. Pull compliance reports in minutes, not weeks.
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

          {/* Card 3: Unified Ledger */}
          <UnifiedLedgerCard />
        </div>
      </div>
    </section>
  );
}
