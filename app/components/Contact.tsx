'use client';

import Image from 'next/image';

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 md:px-12 lg:px-20 bg-obsidian overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.04),transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.03),transparent_70%)]" />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Heading */}
        <h2 className="font-sans text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6 leading-[1.1]">
          Stop losing customers to banking hours.
        </h2>

        {/* Bank Image Container */}
        <div className="relative w-full max-w-3xl mx-auto h-[400px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#112240] to-[#0A1628] border border-white/[0.08] shadow-[0_4px_30px_-4px_rgba(0,0,0,0.5)] my-12 group">
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-[0.025]" 
               style={{ 
                 backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
                 backgroundSize: '40px 40px',
                 maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
                 WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)'
               }} 
          />
          
          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(10,22,40,0.4)_100%)] pointer-events-none" />
          
          <div className="absolute inset-0 flex items-center justify-center p-8">
             <Image 
               src="/bank.png" 
               alt="Traditional Banking Structure" 
               fill
               className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
               priority
             />
          </div>
          
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/[0.03] to-transparent mix-blend-overlay pointer-events-none rounded-2xl ring-1 ring-inset ring-white/[0.06]" />
        </div>
        
        {/* Subheading */}
        <p className="text-white/55 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          The next generation expects 24/7. Frontyr is how you deliver it. See why banks and fintechs are switching to stablecoin-native infrastructure.
        </p>

        {/* CTA Button */}
        <button className="group relative isolate overflow-hidden bg-white text-obsidian text-sm font-semibold px-8 py-3.5 rounded-xl shadow-[0_4px_16px_-4px_rgba(255,255,255,0.2)] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_8px_24px_-4px_rgba(255,255,255,0.25)] cursor-pointer">
          <span className="relative z-10">See Frontyr in Action</span>
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>
    </section>
  );
}
