'use client';

import { Branch, Time, Layers, WarningAlt, CheckmarkOutline, Send, Renew, Calendar, User, Wallet } from '@carbon/icons-react';
import { useEffect, useState, useRef } from 'react';
import { TreasuryAnimation } from './TreasuryAnimation';

// Routing Animation Component
function RoutingAnimation() {
  const [phase, setPhase] = useState<'idle' | 'input' | 'processing' | 'swift' | 'ach' | 'usdc'>('idle');
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const loop = () => {
      setPhase('input'); // Start: Origin -> Frontyr
      
      timer = setTimeout(() => {
        setPhase('processing'); // Frontyr Node Active
        
        timer = setTimeout(() => {
          setPhase('swift'); // Check Swift
          
          timer = setTimeout(() => {
            setPhase('ach'); // Check ACH
            
            timer = setTimeout(() => {
              setPhase('usdc'); // Check/Select USDC
              
              timer = setTimeout(() => {
                setPhase('idle'); // Reset
                timer = setTimeout(loop, 500);
              }, 3000);
            }, 1000);
          }, 1000);
        }, 800);
      }, 1000);
    };
    
    loop();
    return () => clearTimeout(timer);
  }, []);

  const getRailColor = (rail: 'swift' | 'ach' | 'usdc') => {
    if (phase === rail) return '#10B981'; // Active Green
    if (rail === 'usdc' && phase === 'usdc') return '#10B981'; // Keep USDC active if needed (logic handled by phases)
    return '#E5E7EB'; // Inactive Gray
  };

  const getRailOpacity = (rail: 'swift' | 'ach' | 'usdc') => {
    if (phase === rail) return 1;
    return 0.3;
  };

  return (
    <div className="w-full h-56 relative flex items-center justify-center overflow-visible">
       <svg className="w-full h-full max-w-5xl overflow-visible" viewBox="0 0 900 160">
          <defs>
            <filter id="glow-green" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* --- PATHS --- */}
          
          {/* Input Path (Left -> Center) */}
          <path 
            d="M 90 80 L 410 80" 
            fill="none" 
            stroke={phase !== 'idle' ? '#10B981' : '#E5E7EB'} 
            strokeWidth="2" 
            strokeDasharray="6 6"
            className="transition-colors duration-700"
          />

          {/* Option 1: Wire (Top) */}
          <g className="transition-all duration-500" style={{ opacity: phase === 'swift' ? 1 : 0.4 }}>
             <path 
                d="M 490 80 C 550 80, 600 30, 810 30" 
                fill="none" 
                stroke={phase === 'swift' ? '#10B981' : '#E5E7EB'} 
                strokeWidth="2" 
                strokeDasharray="4 4" 
             />
             <text x="650" y="45" textAnchor="middle" className="text-[10px] font-mono fill-subtle font-medium">SWIFT • 2 DAYS</text>
          </g>

          {/* Option 2: ACH (Middle) */}
          <g className="transition-all duration-500" style={{ opacity: phase === 'ach' ? 1 : 0.4 }}>
             <path 
                d="M 490 80 C 550 80, 600 80, 810 80" 
                fill="none" 
                stroke={phase === 'ach' ? '#10B981' : '#E5E7EB'} 
                strokeWidth="2" 
                strokeDasharray="4 4" 
             />
             <text x="650" y="70" textAnchor="middle" className="text-[10px] font-mono fill-subtle font-medium">ACH • 1 DAY</text>
          </g>

          {/* Option 3: Stablecoin (Bottom) */}
          <g className="transition-all duration-500" style={{ opacity: phase === 'usdc' ? 1 : 0.4 }}>
             {/* Base Path */}
             <path 
                d="M 490 80 C 550 80, 600 130, 810 130" 
                fill="none" 
                stroke={phase === 'usdc' ? '#10B981' : '#E5E7EB'} 
                strokeWidth={phase === 'usdc' ? '3' : '2'} 
                className="transition-colors duration-500"
             />
             {/* Glow Effect */}
             {phase === 'usdc' && (
                <path 
                    d="M 490 80 C 550 80, 600 130, 810 130" 
                    fill="none" 
                    stroke="#10B981" 
                    strokeWidth="6" 
                    strokeOpacity="0.3"
                    filter="url(#glow-green)"
                />
             )}
             <rect x="610" y="115" width="80" height="20" rx="4" fill={phase === 'usdc' ? '#ECFDF5' : 'transparent'} className="transition-colors duration-500" />
             <text 
                x="650" y="129" 
                textAnchor="middle" 
                className={`text-[10px] font-mono font-bold transition-colors duration-500 ${phase === 'usdc' ? 'fill-emerald-600' : 'fill-subtle'}`}
             >
                USDC • INSTANT
             </text>
          </g>


          {/* --- NODES --- */}
          
          {/* Node 1: Sender (Left) */}
          <g transform="translate(10, 40)">
             {/* Card Bg */}
             <rect x="0" y="0" width="80" height="80" rx="8" fill="white" stroke={phase !== 'idle' ? '#10B981' : '#E5E7EB'} strokeWidth={phase !== 'idle' ? '2' : '1'} className="transition-colors duration-700" />
             {/* Icon Circle */}
             <circle cx="40" cy="30" r="16" fill="#F9FAFB" stroke="#E5E7EB" />
             <text x="40" y="34" textAnchor="middle" className="text-[12px] font-serif font-bold fill-obsidian">$</text>
             {/* Text */}
             <text x="40" y="60" textAnchor="middle" className="text-[10px] font-semibold fill-obsidian">Origin</text>
             <text x="40" y="72" textAnchor="middle" className="text-[9px] font-mono fill-subtle">USD</text>
          </g>

          {/* Node 2: Frontyr (Center) */}
          <g transform="translate(410, 40)">
             {/* Card Bg */}
             <rect 
                x="0" y="0" width="80" height="80" rx="8" 
                fill="#0A1628" 
                stroke={phase === 'processing' || phase === 'swift' || phase === 'ach' || phase === 'usdc' ? '#10B981' : '#0A1628'} 
                strokeWidth={phase !== 'idle' && phase !== 'input' ? '2' : '0'}
                className="transition-colors duration-300"
             />
             
             {/* Icon */}
             <g transform="translate(40, 30) scale(0.14) translate(-50, -50)">
                 <path d="M50 20 L60 40 L80 50 L60 60 L50 80 L40 60 L20 50 L40 40 Z" fill="white" />
             </g>
             
             {/* Text */}
             <text x="40" y="60" textAnchor="middle" className="text-[10px] font-bold fill-white tracking-widest">FRONTYR</text>
             <text x="40" y="72" textAnchor="middle" className={`text-[8px] font-mono transition-colors duration-300 ${phase === 'processing' ? 'fill-emerald-400' : 'fill-gray-400'}`}>
                {phase === 'processing' ? 'OPTIMIZING' : 'OPTIMIZER'}
             </text>
          </g>

          {/* Node 3: Receiver (Right) */}
          <g transform="translate(810, 40)"> 
             {/* Card Bg */}
             <rect x="0" y="0" width="80" height="80" rx="8" fill="white" stroke={phase === 'usdc' ? '#10B981' : '#E5E7EB'} strokeWidth={phase === 'usdc' ? '2' : '1'} className="transition-colors duration-500" />
             {/* Icon Circle */}
             <circle cx="40" cy="30" r="16" fill="#0A1628" />
             <text x="40" y="34" textAnchor="middle" className="text-[12px] font-serif font-bold fill-white">$</text>
             {/* Text */}
             <text x="40" y="60" textAnchor="middle" className="text-[10px] font-semibold fill-obsidian">Receiver</text>
             <text x="40" y="72" textAnchor="middle" className="text-[9px] font-mono fill-subtle">USD</text>
          </g>

       </svg>
    </div>
  );
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
        
        // Processing done -> Success (Button turns green)
        timer = setTimeout(() => {
          setStep('success');
          
          // Show Delay + Update Activity (Toast appears)
          timer = setTimeout(() => {
            setStep('delayed');
            
            // Reset
            timer = setTimeout(() => {
              runAnimation();
            }, 6500);
          }, 600); // Reduced delay to 600ms so it feels more connected
        }, 1500);
      }, 1500);
    };

    runAnimation();
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm h-full flex flex-col relative group min-h-[320px]">
      {/* Toast Notification - Top Right */}
      <div className={`
        absolute top-16 right-6 z-20 w-64 bg-white border-l-4 border-l-amber-500 shadow-lg rounded-r-md p-3 flex gap-3
        transition-all duration-500 ease-out transform
        ${step === 'delayed' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'}
      `}>
          <div className="mt-0.5 text-amber-500 shrink-0">
             <WarningAlt className="w-4 h-4" />
          </div>
          <div>
             <h5 className="text-[11px] font-bold text-obsidian leading-tight mb-1">Settlement Delayed</h5>
             <p className="text-[10px] text-subtle leading-relaxed">
                Funds will settle Monday due to weekend banking hours.
             </p>
          </div>
      </div>

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
        <div className="flex-1 p-6 flex flex-col relative overflow-hidden">
           
           <div className="grid grid-cols-2 gap-6 h-full">
              {/* Left Column: Account Info */}
              <div className="flex flex-col gap-4">
                 <div>
                    <h4 className="text-sm font-semibold text-obsidian mb-1">Business Checking</h4>
                    <p className="text-[10px] text-subtle font-mono">**** 4492</p>
                 </div>
                 
                 <div>
                    <div className="text-[10px] text-subtle uppercase tracking-wider font-semibold mb-1">Available Balance</div>
                    <div className="text-2xl font-mono font-medium text-obsidian">$12,450.00</div>
                 </div>

                 <div className="mt-auto border-t border-border pt-4">
                    <div className="text-[10px] text-subtle font-semibold mb-2">RECENT ACTIVITY</div>
                    {/* Fixed height container to prevent layout jump */}
                    <div className="space-y-2 h-[88px]">
                       {/* Dynamic Pending Transaction */}
                       <div className={`
                          flex justify-between items-center text-[10px] overflow-hidden transition-all duration-500
                          ${step === 'delayed' ? 'max-h-8 opacity-100 mb-2' : 'max-h-0 opacity-0'}
                       `}>
                          <div className="flex items-center gap-1.5">
                             <Time className="w-3 h-3 text-amber-500 shrink-0" />
                             <span className="text-obsidian font-medium">Sinclar Transportation LLC</span>
                             <span className="bg-amber-100 text-amber-700 px-1.5 py-[1px] rounded text-[8px] font-bold uppercase tracking-wide shrink-0">Pending</span>
                          </div>
                          <span className="text-obsidian font-mono">-$3,000.00</span>
                       </div>

                       <div className="flex justify-between items-center text-[10px]">
                          <span className="text-obsidian">Stripe Payout</span>
                          <span className="text-green-600 font-mono">+$1,200.00</span>
                       </div>
                       <div className="flex justify-between items-center text-[10px]">
                          <span className="text-obsidian">AWS Web Services</span>
                          <span className="text-obsidian font-mono">-$450.00</span>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Right Column: Transfer Action */}
              <div className="bg-white border border-border rounded-lg p-4 flex flex-col justify-center h-fit self-center relative w-full">
                 <h5 className="text-xs font-semibold text-obsidian mb-3">Quick Transfer</h5>
                 
                 <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded border border-border/50">
                       <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                          <User className="w-3 h-3 text-subtle" />
                       </div>
                       <div className="flex-1 min-w-0">
                          <div className="text-[10px] font-medium text-obsidian truncate">Sinclar Transportation LLC</div>
                          <div className="text-[8px] text-subtle truncate">Chase •••• 8832</div>
                       </div>
                    </div>

                    <div>
                       <label className="text-[9px] text-subtle font-medium mb-1 block">Amount</label>
                       <div className="flex items-center border-b border-border pb-1">
                          <span className="text-sm font-semibold text-obsidian mr-1">$</span>
                          <span className="text-lg font-semibold text-obsidian">3,000.00</span>
                       </div>
                    </div>
                 </div>

                 <div className="flex justify-end">
                   <button 
                     className={`
                       w-fit px-6 h-8 rounded text-[10px] font-medium text-white transition-all duration-300 flex items-center justify-center gap-1.5
                       ${step === 'processing' ? 'bg-subtle cursor-wait' : 
                         step === 'success' || step === 'delayed' ? 'bg-emerald-600' : 'bg-obsidian hover:bg-obsidian/90'}
                     `}
                   >
                     {step === 'processing' ? (
                       <span>Processing</span>
                     ) : step === 'success' || step === 'delayed' ? (
                       <span>Sent</span>
                     ) : (
                       <span>Send Funds</span>
                     )}
                   </button>
                 </div>
              </div>
           </div>

        </div>
      </div>
    </div>
  );
}

// Unified Ledger Card Component - Animation moved to Defensibility
function UnifiedLedgerCard() {
  return (
    <div className="md:col-span-8 group relative bg-white border border-border rounded-xl overflow-hidden hover:border-obsidian/30 transition-all duration-500">
      <div className="p-10 flex flex-col md:flex-row items-start gap-12">
        {/* Left side - Copy */}
        <div className="flex-1 max-w-lg">
          <div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-6 text-obsidian shadow-sm">
            <Layers className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-semibold text-obsidian mb-2">
            Treasury Management
          </h3>
          <p className="text-subtle leading-relaxed mb-6">
            Know your reserves in real time. See exactly where your liquidity sits across all positions. Balance sheets that update as transactions settle.
          </p>
        </div>

        {/* Right side - Animation */}
        <div className="flex-1 w-full h-full min-h-[300px] flex items-center justify-center">
             <TreasuryAnimation />
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
              Stablecoins: your bridge to 24/7 banking.
            </h2>
            <p className="text-subtle text-lg leading-relaxed">
              Stablecoins aren't something to fear—they're the natural evolution of the dollar. The trust and regulation of traditional banking, with the speed of modern rails. Frontyr makes them work for your institution, not against it.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Unified Ledger */}
          <UnifiedLedgerCard />

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
                <div className="absolute w-[85%] h-12 bg-white border border-border rounded-md shadow-sm opacity-0 group-hover:opacity-100 group-hover:bottom-24 bottom-4 transition-all duration-500 ease-out flex items-center px-3 gap-2 z-0">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></div>
                    <span className="text-[9px] font-bold text-obsidian uppercase tracking-wide w-8">KYC</span>
                    <div className="h-0.5 flex-1 bg-green-500/20 rounded relative flex items-center">
                        <div className="w-full h-full bg-green-500/10"></div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-green-600 font-bold text-[10px]">✓</div>
                    </div>
                </div>

                {/* Middle Card (AML) - Medium size */}
                <div className="absolute w-[92%] h-12 bg-white border border-border rounded-md shadow-sm opacity-50 group-hover:opacity-100 group-hover:bottom-14 bottom-2 transition-all duration-500 ease-out delay-75 flex items-center px-3 gap-2 z-10">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></div>
                    <span className="text-[9px] font-bold text-obsidian uppercase tracking-wide w-8">AML</span>
                    <div className="h-0.5 flex-1 bg-green-500/20 rounded relative flex items-center">
                        <div className="w-full h-full bg-green-500/10"></div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-green-600 font-bold text-[10px]">✓</div>
                    </div>
                </div>

                {/* Front Card (OFAC) - Largest, frontmost */}
                <div className="relative w-full h-12 bg-white border border-border rounded-md flex items-center px-4 gap-3 z-20 shadow-sm transition-transform duration-300 group-hover:translate-y-[-5px] group-hover:shadow-md">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></div>
                  <span className="text-[10px] font-bold text-obsidian uppercase tracking-wide w-8">OFAC</span>
                  <div className="h-0.5 flex-1 bg-green-500/20 rounded relative flex items-center">
                        <div className="w-full h-full bg-green-500/10"></div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-green-600 font-bold text-[10px]">✓</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Programmable Ledger */}
          <div className="md:col-span-12 group relative bg-white border border-border rounded-xl overflow-hidden hover:border-obsidian/30 transition-all duration-500">
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
              <div className="mt-12 w-full">
                  <RoutingAnimation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
