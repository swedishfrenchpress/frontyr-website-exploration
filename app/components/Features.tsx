'use client';

import { Layers, WarningAlt, Send, Renew, User, Time, Wallet, Asleep } from '@carbon/icons-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TreasuryAnimation } from './TreasuryAnimation';
import { ReconciliationAnimation } from './ReconciliationAnimation';
import { SubaccountingAnimation } from './SubaccountingAnimation';
import { InternationalPaymentsAnimation } from './InternationalPaymentsAnimation';
import { CardParallaxSection } from './CardParallaxSection';

function DashboardDelayCard() {
  const [step, setStep] = useState<'idle' | 'processing' | 'success' | 'delayed'>('idle');

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const runAnimation = () => {
      // Start loop: Idle (1.5s)
      setStep('idle');
      
      // 1. Click Send -> Processing
      timer = setTimeout(() => {
        setStep('processing');
        
        // 2. Processing done -> Success (1.5s later)
        timer = setTimeout(() => {
          setStep('success');
          
          // 3. Show Delay + Update Activity (Toast appears 0.6s later)
          timer = setTimeout(() => {
            setStep('delayed');
            
            // 4. Hold then Reset (6.5s later)
            timer = setTimeout(() => {
              runAnimation();
            }, 6500);
          }, 600);
        }, 1500);
      }, 1500);
    };

    runAnimation();
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white border border-border/80 rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)] h-full flex flex-col relative group min-h-[320px] transition-shadow duration-500 hover:shadow-[0_4px_20px_-4px_rgba(10,22,40,0.1)]">
      {/* Toast Notification - Top Right */}
      <AnimatePresence>
        {step === 'delayed' && (
          <motion.div 
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="absolute top-16 right-6 z-20 w-64 bg-white border-l-4 border-l-amber-500 shadow-xl rounded-r-md p-3 flex gap-3"
          >
            <div className="mt-0.5 text-amber-500 shrink-0">
               <WarningAlt className="w-4 h-4" />
            </div>
            <div>
               <h5 className="text-[11px] font-bold text-obsidian leading-tight mb-1">Settlement Delayed</h5>
               <p className="text-[10px] text-subtle leading-relaxed">
                  Funds will settle Monday due to weekend banking hours.
               </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
                       <AnimatePresence>
                         {step === 'delayed' && (
                           <motion.div
                              initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                              animate={{ opacity: 1, height: 'auto', marginBottom: 8 }}
                              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                              transition={{ type: "spring", stiffness: 300, damping: 25 }}
                              className="overflow-hidden"
                           >
                              <div className="flex justify-between items-center text-[10px]">
                                <div className="flex items-center gap-1.5">
                                   <Time className="w-3 h-3 text-amber-500 shrink-0" />
                                   <span className="text-obsidian font-medium">Sinclar Transportation LLC</span>
                                   <span className="bg-amber-100 text-amber-700 px-1.5 py-[1px] rounded text-[8px] font-bold uppercase tracking-wide shrink-0">Pending</span>
                                </div>
                                <span className="text-obsidian font-mono">-$3,000.00</span>
                              </div>
                           </motion.div>
                         )}
                       </AnimatePresence>

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
              <div className="bg-white border border-border rounded-lg p-4 flex flex-col justify-center h-fit self-center relative w-full shadow-sm">
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
                   <motion.button 
                     layout
                     transition={{ type: "spring", stiffness: 300, damping: 25 }}
                     className={`
                       h-8 px-6 rounded text-[10px] font-medium text-white flex items-center justify-center gap-1.5 relative overflow-hidden
                       ${step === 'processing' ? 'bg-subtle cursor-wait' : 
                         step === 'success' || step === 'delayed' ? 'bg-emerald-600' : 'bg-obsidian hover:bg-obsidian/90'}
                     `}
                   >
                     <AnimatePresence mode="popLayout" initial={false}>
                        {step === 'processing' ? (
                           <motion.span 
                             key="processing"
                             initial={{ y: 20, opacity: 0 }}
                             animate={{ y: 0, opacity: 1 }}
                             exit={{ y: -20, opacity: 0 }}
                             className="flex items-center gap-1.5"
                           >
                             <motion.div 
                               animate={{ rotate: 360 }}
                               transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                               className="w-2.5 h-2.5 border-2 border-white/30 border-t-white rounded-full" 
                             />
                             Processing
                           </motion.span>
                        ) : step === 'success' || step === 'delayed' ? (
                           <motion.span 
                             key="sent"
                             initial={{ y: 20, opacity: 0 }}
                             animate={{ y: 0, opacity: 1 }}
                             exit={{ y: -20, opacity: 0 }}
                           >
                             Sent
                           </motion.span>
                        ) : (
                           <motion.span 
                             key="send"
                             initial={{ y: 20, opacity: 0 }}
                             animate={{ y: 0, opacity: 1 }}
                             exit={{ y: -20, opacity: 0 }}
                           >
                             Send Funds
                           </motion.span>
                        )}
                     </AnimatePresence>
                   </motion.button>
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
    <section id="features" className="py-32 px-6 md:px-12 lg:px-20 relative z-10 bg-white bg-noise border-y border-border/60 overflow-hidden">
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
                <h3 className="font-sans text-3xl md:text-4xl font-semibold text-obsidian tracking-[-0.03em] mb-4 leading-[1.15]">
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border/60 shadow-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span className="font-sans text-[12px] font-semibold text-subtle tracking-tight uppercase">The Solution</span>
            </div>
            <h2 className="font-sans text-4xl md:text-5xl font-semibold text-obsidian tracking-[-0.03em] mb-6 leading-[1.1]">
              Stablecoins: your bridge to 24/7 banking.
            </h2>
            <p className="text-subtle text-lg leading-relaxed">
              Stablecoins aren't something to fear—they're the natural evolution of the dollar. The trust and regulation of traditional banking, with the speed of modern rails. Frontyr makes them work for your institution, not against it.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Row 1: Treasury (Large) + Invoicing (Small) */}
          
          {/* Card 1: Modern Treasury Management (Large) */}
          <div className="md:col-span-8 group relative bg-white border border-border/80 rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:border-obsidian/20 hover:shadow-[0_4px_20px_-4px_rgba(10,22,40,0.1)] hover:-translate-y-0.5">
             {/* Night Mode Badge - Top Right of Card */}
             <div className="absolute top-6 right-6 z-20 flex items-center gap-2 px-3 py-1.5 bg-obsidian rounded-full shadow-lg border border-white/10">
                <Asleep className="w-3 h-3 text-indigo-300" />
                <span className="text-[10px] font-medium text-white tracking-wide">
                   Sat, Mar 12 • 10:00 PM
                </span>
             </div>
            <div className="p-10">
              <div className="flex-1 max-w-none">
                <div className="w-10 h-10 bg-canvas border border-border/60 rounded-lg flex items-center justify-center mb-6 text-obsidian shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-obsidian/20">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-obsidian mb-2">
                  24/7 International Payments
                </h3>
                <p className="text-sm text-subtle leading-relaxed mb-6">
                  Move money across borders any time of day. Instant global settlement without banking hours or delays. Cross-border payments that never sleep.
                </p>
              </div>

              <div className="mt-10 h-[400px] w-full relative flex items-center justify-center pt-6 overflow-hidden">
                <InternationalPaymentsAnimation />
              </div>
            </div>
          </div>

          {/* Card 2: Invoicing (Small) */}
          <div className="md:col-span-4 group relative bg-white border border-border/80 rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:border-obsidian/20 hover:shadow-[0_4px_20px_-4px_rgba(10,22,40,0.1)] hover:-translate-y-0.5 flex flex-col">
            <div className="p-10 relative z-10 flex flex-col h-full">
              <div className="w-10 h-10 bg-canvas border border-border/60 rounded-lg flex items-center justify-center mb-6 text-obsidian shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-obsidian/20">
                 <Send className="w-5 h-5" />
               </div>
              <h3 className="text-xl font-semibold text-obsidian mb-3">
                Invoicing
              </h3>
              <p className="text-sm text-subtle leading-relaxed mb-8">
                Automated billing that settles instantly. Create, send, and track smart invoices that reconcile themselves upon payment.
              </p>

              <div className="mt-auto relative w-full bg-canvas/50 border border-border/50 rounded-lg p-4 flex flex-col gap-3 group-hover:bg-canvas transition-colors duration-300">
                  {/* Invoice Item */}
                  <div className="flex items-center justify-between bg-white p-2.5 rounded border border-border/50 shadow-sm">
                      <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-subtle">#1</div>
                          <div className="flex flex-col">
                              <span className="text-[10px] font-semibold text-obsidian">Invoice #4092</span>
                              <span className="text-[8px] text-subtle">Acme Corp</span>
                          </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-mono text-obsidian">$4,500</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      </div>
                  </div>
                   {/* Invoice Item 2 */}
                   <div className="flex items-center justify-between bg-white p-2.5 rounded border border-border/50 shadow-sm opacity-80">
                      <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-subtle">#2</div>
                          <div className="flex flex-col">
                              <span className="text-[10px] font-semibold text-obsidian">Invoice #4093</span>
                              <span className="text-[8px] text-subtle">Globex Inc</span>
                          </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-mono text-obsidian">$1,200</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      </div>
                  </div>
                   {/* Invoice Item 3 */}
                   <div className="flex items-center justify-between bg-white p-2.5 rounded border border-border/50 shadow-sm opacity-60">
                      <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-subtle">#3</div>
                          <div className="flex flex-col">
                              <span className="text-[10px] font-semibold text-obsidian">Invoice #4094</span>
                              <span className="text-[8px] text-subtle">Stark Industries</span>
                          </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-mono text-obsidian">$8,900</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                      </div>
                  </div>
                   {/* Invoice Item 4 */}
                   <div className="flex items-center justify-between bg-white p-2.5 rounded border border-border/50 shadow-sm opacity-40">
                      <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-subtle">#4</div>
                          <div className="flex flex-col">
                              <span className="text-[10px] font-semibold text-obsidian">Invoice #4095</span>
                              <span className="text-[8px] text-subtle">Wayne Ent.</span>
                          </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-mono text-obsidian">$15,200</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                      </div>
                  </div>
                   {/* Invoice Item 5 */}
                   <div className="flex items-center justify-between bg-white p-2.5 rounded border border-border/50 shadow-sm opacity-25">
                      <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-subtle">#5</div>
                          <div className="flex flex-col">
                              <span className="text-[10px] font-semibold text-obsidian">Invoice #4096</span>
                              <span className="text-[8px] text-subtle">Cyberdyne</span>
                          </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-mono text-obsidian">$3,850</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                      </div>
                  </div>
                   {/* Invoice Item 6 */}
                   <div className="flex items-center justify-between bg-white p-2.5 rounded border border-border/50 shadow-sm opacity-10">
                      <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-subtle">#6</div>
                          <div className="flex flex-col">
                              <span className="text-[10px] font-semibold text-obsidian">Invoice #4097</span>
                              <span className="text-[8px] text-subtle">Massive Dynamic</span>
                          </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-mono text-obsidian">$9,100</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                      </div>
                  </div>
              </div>
            </div>
          </div>


          {/* Row 2: Subaccounting (Small) + Reconciliation (Large) */}

          {/* Card 3: Subaccounting (Small) */}
          <div className="md:col-span-4 group relative bg-white border border-border/80 rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:border-obsidian/20 hover:shadow-[0_4px_20px_-4px_rgba(10,22,40,0.1)] hover:-translate-y-0.5 flex flex-col">
            <div className="p-10 relative z-10 flex flex-col h-full">
              <div className="w-10 h-10 bg-canvas border border-border/60 rounded-lg flex items-center justify-center mb-6 text-obsidian shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-obsidian/20">
                 <User className="w-5 h-5" />
               </div>
              <h3 className="text-xl font-semibold text-obsidian mb-3">
                Subaccounting
              </h3>
              <p className="text-sm text-subtle leading-relaxed mb-8">
                Infinite sub-accounts for every customer, department, or product line. Granular access controls and permissions built-in.
              </p>

              <div className="mt-auto relative w-full flex items-center justify-center -mb-6">
                 <SubaccountingAnimation />
              </div>
            </div>
          </div>

          {/* Card 4: Reconciliation (Large) */}
          <div className="md:col-span-8 group relative bg-white border border-border/80 rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:border-obsidian/20 hover:shadow-[0_4px_20px_-4px_rgba(10,22,40,0.1)] hover:-translate-y-0.5">
             <div className="relative z-10 p-10 h-full flex flex-col justify-between">
                <div className="max-w-none">
                    <div className="w-10 h-10 bg-canvas border border-border/60 rounded-lg flex items-center justify-center mb-6 text-obsidian shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-obsidian/20">
                        <Renew className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-obsidian mb-3">
                        Reconciliation
                    </h3>
                    <p className="text-sm text-subtle leading-relaxed">
                        Close the books in minutes, not days. Frontyr automatically matches on-chain settlement data with your internal ledger and ERP, eliminating manual errors.
                    </p>
                </div>

                <div className="mt-12 h-64 w-full relative flex items-center justify-center">
                  <ReconciliationAnimation />
                </div>
             </div>
          </div>
        </div>

        <CardParallaxSection />
      </div>
    </section>
  );
}
