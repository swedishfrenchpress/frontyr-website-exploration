'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export function SubaccountingAnimation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Start sequence
    const startSequence = () => {
      setIsVisible(true);
      
      // Hide after sequence completes (wait 7.5s)
      // Sequence: Line 1 (1.5s) -> Card 1 (2.2s) -> Line 2 (3.5s) -> Card 2 (4.2s) -> Line 3 (5.5s) -> Card 3 (6.2s) -> Hold
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 9000);
      
      return hideTimer;
    };

    const initialTimer = startSequence();

    // Loop every 11s (9s on + 2s off)
    const loopInterval = setInterval(() => {
      startSequence();
    }, 11000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(loopInterval);
    };
  }, []);

  return (
    <div className="w-full h-[290px] relative flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-[340px] h-full flex items-center justify-between px-2">
        
        {/* --- Background SVG for Connection Lines --- */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full overflow-visible">
            <AnimatePresence>
              {isVisible && (
                <g>
                  {/* Line 1: To Marketing (Top Right) */}
                  <motion.path
                    d="M 120 145 Q 160 145 180 100 L 200 70"
                    fill="none"
                    stroke="#E5E7EB" // gray-200
                    strokeWidth="1.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    exit={{ pathLength: 0, opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
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
                    exit={{ pathLength: 0, opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
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
                    exit={{ pathLength: 0, opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                    transition={{ duration: 1.2, ease: "easeInOut", delay: 5.5 }}
                  />
                </g>
              )}
            </AnimatePresence>
          </svg>
        </div>


        {/* --- Primary Account (Left) --- */}
        <div className="relative z-10 h-full flex items-center">
            <AnimatePresence>
                {isVisible && (
                  <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10, transition: { duration: 0.5 } }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="w-[110px] bg-blue-50/90 backdrop-blur-sm border border-blue-100 rounded-lg p-3 shadow-sm"
                  >
                      <div className="text-[9px] font-semibold text-blue-800/60 uppercase tracking-wide mb-1">Primary Account</div>
                      <div className="text-sm font-bold text-obsidian font-mono">$250,000</div>
                  </motion.div>
                )}
            </AnimatePresence>
        </div>

        {/* --- Sub Accounts (Right Stack) --- */}
        <div className="relative z-10 h-full flex flex-col justify-center gap-6">
            
            {/* 1. Marketing */}
            <AnimatePresence>
                {isVisible && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10, transition: { duration: 0.5 } }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 2.2 }} // Appears after line 1 starts
                    className="w-[110px] bg-emerald-50/90 backdrop-blur-sm border border-emerald-100 rounded-lg p-3 shadow-sm"
                >
                    <div className="text-[9px] font-semibold text-emerald-800/60 uppercase tracking-wide mb-1">Marketing</div>
                    <div className="text-sm font-bold text-obsidian font-mono">$45,000</div>
                </motion.div>
                )}
            </AnimatePresence>

             {/* 2. Operations */}
             <AnimatePresence>
                 {isVisible && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10, transition: { duration: 0.5 } }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 4.2 }} // Appears after line 2 starts
                    className="w-[110px] bg-purple-50/90 backdrop-blur-sm border border-purple-100 rounded-lg p-3 shadow-sm"
                >
                    <div className="text-[9px] font-semibold text-purple-800/60 uppercase tracking-wide mb-1">Operations</div>
                    <div className="text-sm font-bold text-obsidian font-mono">$78,000</div>
                </motion.div>
                 )}
            </AnimatePresence>

             {/* 3. Payroll */}
             <AnimatePresence>
                 {isVisible && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10, transition: { duration: 0.5 } }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 6.2 }} // Appears after line 3 starts
                    className="w-[110px] bg-orange-50/90 backdrop-blur-sm border border-orange-100 rounded-lg p-3 shadow-sm"
                >
                    <div className="text-[9px] font-semibold text-orange-800/60 uppercase tracking-wide mb-1">Payroll</div>
                    <div className="text-sm font-bold text-obsidian font-mono">$52,000</div>
                </motion.div>
                 )}
            </AnimatePresence>

        </div>

      </div>
    </div>
  );
}
