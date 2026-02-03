'use client';

import Image from 'next/image';

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-20 bg-obsidian border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="font-sans text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6 leading-[1.1]">
          Stop losing customers to banking hours.
        </h2>

        {/* Bank Image Container */}
        <div className="relative w-full max-w-3xl mx-auto h-[400px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#112240] to-[#0A1628] border border-white/10 shadow-2xl my-12 group">
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-[0.03]" 
               style={{ 
                 backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
                 backgroundSize: '40px 40px',
                 maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
                 WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)'
               }} 
          />
          
          <div className="absolute inset-0 flex items-center justify-center p-8">
             <Image 
               src="/bank.png" 
               alt="Traditional Banking Structure" 
               fill
               className="object-contain drop-shadow-2xl"
               priority
             />
          </div>
          
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay pointer-events-none rounded-2xl ring-1 ring-inset ring-white/10" />
        </div>
        
        {/* Subheading */}
        <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          The next generation expects 24/7. Frontyr is how you deliver it. See why banks and fintechs are switching to stablecoin-native infrastructure.
        </p>

        {/* CTA Button - same style as Hero */}
        <button className="group relative isolate overflow-hidden bg-white text-obsidian text-sm font-semibold px-8 py-3.5 rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-300 hover:bg-white/90 hover:scale-[1.02] hover:shadow-lg cursor-pointer">
          <span className="relative z-10">See Frontyr in Action</span>
        </button>
      </div>
    </section>
  );
}
