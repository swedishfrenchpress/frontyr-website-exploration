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
        
        {/* Subheading */}
        <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          The next generation expects 24/7. Frontyr is how you deliver it. See why banks and fintechs are switching to stablecoin-native infrastructure.
        </p>

        {/* CTA Button - same style as Hero */}
        <button className="group relative isolate overflow-hidden bg-white text-obsidian text-sm font-semibold px-8 py-3.5 rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-300 hover:bg-white/90 hover:scale-[1.02] hover:shadow-lg cursor-pointer mb-16">
          <span className="relative z-10">See Frontyr in Action</span>
        </button>

        {/* Bank Image Container */}
        <div className="relative w-full max-w-2xl mx-auto aspect-video rounded-2xl overflow-hidden bg-gradient-to-b from-blue-900/20 to-blue-950/20 border border-white/10 shadow-2xl">
          <div className="absolute inset-0 flex items-center justify-center p-8">
             <Image 
               src="/bank.png" 
               alt="Traditional Banking Structure" 
               fill
               className="object-contain drop-shadow-lg"
             />
          </div>
          {/* Decorative background glow */}
          <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
