'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export function SubaccountingAnimation() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    // 12 seconds loop (Wait 3s per item + 3s reset)
    const timer = setTimeout(() => {
      setKey(prev => prev + 1);
    }, 11000); 

    return () => clearTimeout(timer);
  }, [key]);

  return (
    <div className="w-full h-[290px] relative flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-[340px] h-full flex items-center justify-between px-2">
        
        {/* --- Background SVG for Connection Lines --- */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full overflow-visible">
            <AnimatePresence mode="wait">
              {key >= 0 && (
                <g key={`lines-${key}`}>
                  {/* Line 1: To Marketing (Top Right) */}
                  <motion.path
                    d="M 120 145 Q 160 145 180 100 L 200 70"
                    fill="none"
                    stroke="#E5E7EB" // gray-200
                    strokeWidth="1.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeInOut", delay: 1.5 }}
                  />
                  {/* Line 2: To Operations (Middle Right) */}
                  <motion.path
                    d="M 120 145 Q 160 145 200 145"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeInOut", delay: 3.5 }}
                  />
                  {/* Line 3: To Payroll (Bottom Right) */}
                  <motion.path
                    d="M 120 145 Q 160 145 180 190 L 200 220"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeInOut", delay: 5.5 }}
                  />
                </g>
              )}
            </AnimatePresence>
          </svg>
        </div>


        {/* --- Primary Account (Left) --- */}
        <div className="relative z-10 h-full flex items-center">
            <AnimatePresence mode="wait">
                <motion.div
                    key={`primary-${key}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-[110px] bg-blue-50/80 backdrop-blur-sm border border-blue-100 rounded-lg p-3 shadow-sm"
                >
                    <div className="text-[9px] font-semibold text-blue-800/60 uppercase tracking-wide mb-1">Primary Account</div>
                    <div className="text-sm font-bold text-obsidian font-mono">$250,000</div>
                </motion.div>
            </AnimatePresence>
        </div>

        {/* --- Sub Accounts (Right Stack) --- */}
        <div className="relative z-10 h-full flex flex-col justify-center gap-6">
            
            {/* 1. Marketing */}
            <AnimatePresence mode="wait">
                 <motion.div
                    key={`sub1-${key}`}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 2.2 }} // Appears after line 1 starts
                    className="w-[110px] bg-emerald-50/80 backdrop-blur-sm border border-emerald-100 rounded-lg p-3 shadow-sm"
                >
                    <div className="text-[9px] font-semibold text-emerald-800/60 uppercase tracking-wide mb-1">Marketing</div>
                    <div className="text-sm font-bold text-obsidian font-mono">$45,000</div>
                </motion.div>
            </AnimatePresence>

             {/* 2. Operations */}
             <AnimatePresence mode="wait">
                 <motion.div
                    key={`sub2-${key}`}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 4.2 }} // Appears after line 2 starts
                    className="w-[110px] bg-purple-50/80 backdrop-blur-sm border border-purple-100 rounded-lg p-3 shadow-sm"
                >
                    <div className="text-[9px] font-semibold text-purple-800/60 uppercase tracking-wide mb-1">Operations</div>
                    <div className="text-sm font-bold text-obsidian font-mono">$78,000</div>
                </motion.div>
            </AnimatePresence>

             {/* 3. Payroll */}
             <AnimatePresence mode="wait">
                 <motion.div
                    key={`sub3-${key}`}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 6.2 }} // Appears after line 3 starts
                    className="w-[110px] bg-orange-50/80 backdrop-blur-sm border border-orange-100 rounded-lg p-3 shadow-sm"
                >
                    <div className="text-[9px] font-semibold text-orange-800/60 uppercase tracking-wide mb-1">Payroll</div>
                    <div className="text-sm font-bold text-obsidian font-mono">$52,000</div>
                </motion.div>
            </AnimatePresence>

        </div>

      </div>
    </div>
  );
}
