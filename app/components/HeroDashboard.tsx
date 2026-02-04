'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building, 
  Dashboard, 
  Wallet, 
  ArrowsHorizontal, 
  Security, 
  Settings, 
  Notification, 
  Search,
  ArrowUpRight,
  ArrowDownLeft,
  Renew,
  CheckmarkFilled
} from '@carbon/icons-react';

// Types
interface Transaction {
  id: string;
  type: 'inbound' | 'outbound' | 'conversion';
  method: 'wire' | 'usdc' | 'ach';
  counterparty: string;
  amount: number;
  status: 'cleared' | 'processing' | 'scanning';
  timestamp: string;
}

export function HeroDashboard() {
  // State for clock
  const [time, setTime] = useState(new Date());
  
  // State for simulated live data
  const [balance, setBalance] = useState(4250890.50);
  const [fiatRatio, setFiatRatio] = useState(0.65); // 65% Fiat, 35% Stable
  
  // Initial transaction list
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 'tx-1', type: 'inbound', method: 'usdc', counterparty: 'Circle Mint', amount: 500000.00, status: 'cleared', timestamp: '02:45 AM' },
    { id: 'tx-2', type: 'outbound', method: 'wire', counterparty: 'Supplier Corp Global', amount: -12500.00, status: 'cleared', timestamp: '02:42 AM' },
    { id: 'tx-3', type: 'inbound', method: 'wire', counterparty: 'Mercury Treasury', amount: 250000.00, status: 'cleared', timestamp: '02:30 AM' },
    { id: 'tx-4', type: 'conversion', method: 'usdc', counterparty: 'Auto-Rebalance', amount: 10000.00, status: 'cleared', timestamp: '02:15 AM' },
  ]);

  // Clock effect
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Live transaction simulation effect
  useEffect(() => {
    const interval = setInterval(() => {
      // 30% chance to trigger a new transaction every 4 seconds
      if (Math.random() > 0.3) {
        addNewTransaction();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const addNewTransaction = () => {
    const isInbound = Math.random() > 0.4;
    const amount = Math.floor(Math.random() * 50000) + 5000;
    const methods: ('wire' | 'usdc')[] = ['wire', 'usdc'];
    const method = methods[Math.floor(Math.random() * methods.length)];
    const counterparties = ['Apex Clearing', 'Coinbase Prime', 'Stripe Payout', 'Vendor payment', 'Liquidity Pool A'];
    
    const newTx: Transaction = {
      id: `tx-${Date.now()}`,
      type: isInbound ? 'inbound' : 'outbound',
      method: method,
      counterparty: counterparties[Math.floor(Math.random() * counterparties.length)],
      amount: isInbound ? amount : -amount,
      status: 'scanning', // Start with scanning state
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    };

    setTransactions(prev => [newTx, ...prev].slice(0, 6)); // Keep last 6
    
    // Update balance
    setBalance(prev => prev + (isInbound ? amount : -amount));

    // Simulate compliance check completion after 1.5s
    setTimeout(() => {
      setTransactions(prev => prev.map(t => 
        t.id === newTx.id ? { ...t, status: 'cleared' } : t
      ));
    }, 1500);
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(val);
  };

  return (
    <div className="relative w-full aspect-[16/10] bg-white rounded-xl shadow-2xl border border-border overflow-hidden flex flex-col font-sans select-none pointer-events-none lg:pointer-events-auto transform transition-all hover:scale-[1.01] duration-500">
      
      {/* Top Navigation Bar */}
      <div className="h-14 border-b border-border flex items-center justify-between px-4 bg-white z-20">
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-400/80"></div>
          </div>
          <div className="h-6 w-px bg-border mx-2"></div>
          <div className="flex items-center gap-2 text-obsidian font-semibold text-sm">
            <Security className="w-4 h-4 text-emerald-600" />
            <span>Frontyr Treasury</span>
          </div>
        </div>

        {/* Global Clock Widget */}
        <div className="hidden md:flex items-center gap-6 text-[11px] font-mono text-subtle bg-canvas px-3 py-1.5 rounded-full border border-border/50">
           <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>NY {time.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit' })}</span>
           </div>
           <div className="w-px h-3 bg-border"></div>
           <div className="opacity-60">
              LON {time.toLocaleTimeString('en-US', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit' })}
           </div>
           <div className="w-px h-3 bg-border"></div>
           <div className="opacity-60">
              SIN {time.toLocaleTimeString('en-US', { timeZone: 'Asia/Singapore', hour: '2-digit', minute: '2-digit' })}
           </div>
        </div>

        <div className="flex items-center gap-3">
          <Search className="w-4 h-4 text-subtle" />
          <Notification className="w-4 h-4 text-subtle" />
          <div className="w-7 h-7 rounded-full bg-obsidian text-white flex items-center justify-center text-xs font-bold">
            F
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-16 md:w-56 border-r border-border bg-canvas/30 flex flex-col py-4 justify-between hidden sm:flex">
           <div className="space-y-1 px-2">
              <NavItem icon={Dashboard} label="Overview" active />
              <NavItem icon={Wallet} label="Wallets" />
              <NavItem icon={ArrowsHorizontal} label="Transfers" />
              <NavItem icon={Building} label="Sub-accounts" />
              <NavItem icon={Renew} label="Reconciliation" />
           </div>
           <div className="px-2">
              <NavItem icon={Settings} label="Settings" />
           </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col bg-white overflow-hidden relative">
          
          {/* Dashboard Header Content */}
          <div className="p-6 pb-2">
            <div className="flex flex-col gap-6">
              
              {/* Total Liquidity Card */}
              <div className="flex flex-col md:flex-row justify-between items-end gap-4">
                <div>
                  <h3 className="text-sm font-medium text-subtle mb-1">Total Liquidity</h3>
                  <div className="text-3xl md:text-4xl font-bold text-obsidian font-mono tracking-tight">
                    <AnimatedCounter value={balance} />
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-xs text-subtle">
                     <span className="text-emerald-600 font-medium flex items-center gap-1 bg-emerald-50 px-1.5 py-0.5 rounded">
                        <ArrowUpRight className="w-3 h-3" /> +2.4%
                     </span>
                     <span>vs last 24h</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-obsidian text-white text-xs font-medium rounded-lg shadow-sm hover:bg-obsidian/90 transition-colors flex items-center gap-2 cursor-pointer">
                    <ArrowDownLeft className="w-3.5 h-3.5" /> Deposit
                  </button>
                  <button className="px-4 py-2 bg-white border border-border text-obsidian text-xs font-medium rounded-lg shadow-sm hover:bg-canvas transition-colors flex items-center gap-2 cursor-pointer">
                    <ArrowUpRight className="w-3.5 h-3.5" /> Send
                  </button>
                </div>
              </div>

              {/* Rails Visualization (Bridge) */}
              <div className="w-full bg-canvas border border-border/60 rounded-lg p-3 flex flex-col gap-2">
                 <div className="flex justify-between text-[10px] font-medium uppercase tracking-wider text-subtle">
                    <span>Fiat Rails (USD)</span>
                    <span>Stablecoin Rails (USDC)</span>
                 </div>
                 <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden flex relative">
                    <motion.div 
                      className="h-full bg-obsidian relative z-10"
                      initial={{ width: '60%' }}
                      animate={{ width: `${fiatRatio * 100}%` }}
                      transition={{ duration: 1 }}
                    />
                    <motion.div 
                      className="h-full bg-blue-500 relative z-10"
                      initial={{ width: '40%' }}
                      animate={{ width: `${(1 - fiatRatio) * 100}%` }}
                      transition={{ duration: 1 }}
                    />
                    {/* Connection/Bridge Indicator */}
                    <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white z-20 opacity-50"></div>
                 </div>
                 <div className="flex justify-between text-xs font-mono text-obsidian">
                    <span>${formatCurrency(balance * fiatRatio).replace('$', '')}</span>
                    <span className="text-blue-600">${formatCurrency(balance * (1 - fiatRatio)).replace('$', '')}</span>
                 </div>
              </div>

            </div>
          </div>

          {/* Activity Feed Header */}
          <div className="px-6 py-2 border-b border-border bg-white flex justify-between items-center sticky top-0 z-10">
            <h4 className="text-sm font-semibold text-obsidian">Live Transactions</h4>
            <div className="flex items-center gap-1.5 px-2 py-0.5 bg-emerald-50 rounded-full border border-emerald-100">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-medium text-emerald-700">Real-time</span>
            </div>
          </div>

          {/* Activity Feed List */}
          <div className="flex-1 overflow-hidden relative">
             <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
             
             <div className="px-6 pb-6 pt-2 space-y-0">
               <AnimatePresence initial={false}>
                 {transactions.map((tx) => (
                   <motion.div
                     key={tx.id}
                     initial={{ opacity: 0, height: 0, y: -20 }}
                     animate={{ opacity: 1, height: 'auto', y: 0 }}
                     exit={{ opacity: 0, height: 0 }}
                     transition={{ duration: 0.4, ease: "easeOut" }}
                     className="border-b border-border/40 last:border-0"
                   >
                     <div className="py-3 flex items-center justify-between group">
                        <div className="flex items-center gap-3">
                           <div className={`
                             w-8 h-8 rounded-full flex items-center justify-center border
                             ${tx.method === 'usdc' ? 'bg-blue-50 border-blue-100 text-blue-600' : 'bg-gray-50 border-gray-200 text-gray-600'}
                           `}>
                              {tx.method === 'usdc' ? (
                                <div className="text-[10px] font-bold">C</div>
                              ) : (
                                <Building className="w-4 h-4" />
                              )}
                           </div>
                           <div>
                              <div className="text-xs font-medium text-obsidian flex items-center gap-2">
                                {tx.counterparty}
                                <span className="text-[9px] px-1 rounded text-subtle bg-gray-100 border border-gray-200 uppercase tracking-tight font-mono">
                                  {tx.method}
                                </span>
                              </div>
                              <div className="text-[10px] text-subtle font-mono mt-0.5">{tx.timestamp} • ID: {tx.id.slice(-6)}</div>
                           </div>
                        </div>

                        <div className="text-right">
                           <div className={`text-sm font-mono font-medium ${tx.type === 'inbound' ? 'text-emerald-600' : 'text-obsidian'}`}>
                              {tx.type === 'inbound' ? '+' : ''}{formatCurrency(tx.amount).replace('$', '')}
                           </div>
                           <div className="flex justify-end mt-0.5">
                              {tx.status === 'scanning' ? (
                                <div className="flex items-center gap-1 text-[10px] text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-full">
                                   <Renew className="w-2.5 h-2.5 animate-spin" />
                                   <span>Compliance</span>
                                </div>
                              ) : (
                                <div className="flex items-center gap-1 text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">
                                   <CheckmarkFilled className="w-2.5 h-2.5" />
                                   <span>Cleared</span>
                                </div>
                              )}
                           </div>
                        </div>
                     </div>
                   </motion.div>
                 ))}
               </AnimatePresence>
             </div>
             
             {/* Fade out at bottom */}
             <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          </div>

        </div>
      </div>
    </div>
  );
}

function NavItem({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
  return (
    <div className={`
      flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-default
      ${active ? 'bg-white text-obsidian shadow-sm border border-border/50' : 'text-subtle hover:bg-black/5'}
    `}>
      <Icon className={`w-4 h-4 ${active ? 'text-obsidian' : 'text-subtle'}`} />
      <span className="hidden lg:inline">{label}</span>
    </div>
  );
}

function AnimatedCounter({ value }: { value: number }) {
  // Simple counting logic could go here, but for now we just format
  // In a real app we might use a library like react-countup or framer-motion's useSpring
  return <>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)}</>;
}
