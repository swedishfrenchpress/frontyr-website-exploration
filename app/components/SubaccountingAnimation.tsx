'use client';

import { motion } from 'framer-motion';

export function SubaccountingAnimation() {
  return (
    <div className="w-full h-[290px] relative flex items-center justify-center overflow-hidden">
      {/* Venn Diagram Container */}
      <div className="relative w-[340px] h-[280px]">
        
        {/* --- Circles --- */}
        
        {/* Top Center - Operations (Emerald) */}
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-44 h-44 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-start justify-center pt-3"
        >
          <span className="text-[10px] font-semibold text-emerald-700/70 tracking-tight uppercase">Operations</span>
        </motion.div>

        {/* Bottom Left - Marketing (Blue) */}
        <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-4 left-0 w-44 h-44 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-end justify-center pb-4 pr-6"
        >
           <span className="text-[10px] font-semibold text-blue-700/70 tracking-tight uppercase">Marketing</span>
        </motion.div>

        {/* Bottom Right - Treasury (Purple) */}
        <motion.div
          animate={{ scale: [1, 1.025, 1] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-4 right-0 w-44 h-44 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-end justify-center pb-4 pl-6"
        >
           <span className="text-[10px] font-semibold text-purple-700/70 tracking-tight uppercase">Treasury</span>
        </motion.div>


        {/* --- Avatars --- */}

        {/* User 1: Marketing Only (Left) */}
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-24 left-10 z-10"
        >
          <div className="relative group">
            <div className="w-9 h-9 rounded-full bg-white border border-blue-200 shadow-sm flex items-center justify-center text-[10px] font-bold text-blue-600">
              MK
            </div>
            {/* Tooltip */}
            <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 px-1.5 py-0.5 bg-obsidian text-white text-[8px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Marketing
            </div>
          </div>
        </motion.div>

        {/* User 2: Ops + Treasury (Right Overlap) */}
        <motion.div
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-24 right-14 z-10"
        >
          <div className="relative group">
            <div className="w-9 h-9 rounded-full bg-white border border-purple-200 shadow-sm flex items-center justify-center text-[10px] font-bold text-purple-600">
              OT
            </div>
             <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 px-1.5 py-0.5 bg-obsidian text-white text-[8px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Ops + Trsy
            </div>
          </div>
        </motion.div>

        {/* User 3: Admin / Full Access (Center) */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[115px] left-1/2 -translate-x-1/2 z-20"
        >
          <div className="relative group">
             {/* Glow effect for admin */}
            <div className="absolute inset-0 bg-white/50 rounded-full blur-md animate-pulse"></div>
            <div className="relative w-10 h-10 rounded-full bg-obsidian border-2 border-white shadow-md flex items-center justify-center text-[10px] font-bold text-white">
              AD
            </div>
            <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 px-1.5 py-0.5 bg-obsidian text-white text-[8px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Admin (All)
            </div>
          </div>
        </motion.div>
        
        {/* User 4: Pending (Outside) */}
        <motion.div
          animate={{ x: [0, 2, 0], opacity: [0.6, 0.8, 0.6] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-4 right-4 z-10"
        >
           <div className="relative group grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <div className="w-8 h-8 rounded-full bg-gray-50 border border-dashed border-gray-300 flex items-center justify-center text-[9px] font-medium text-gray-400">
              ?
            </div>
            <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 px-1.5 py-0.5 bg-amber-500 text-white text-[8px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Pending
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
