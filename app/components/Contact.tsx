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
      
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Bank Image Container - Behind text, subtle */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] overflow-hidden opacity-10 pointer-events-none -z-0">
          <div className="absolute inset-0 flex items-center justify-center">
             <Image 
               src="/bank.png" 
               alt="" 
               fill
               className="object-contain"
               priority
             />
          </div>
        </div>
        
        {/* Content - Above the image */}
        <div className="relative z-10">
          {/* Heading */}
          <h2 className="font-sans text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6 leading-[1.1]">
            Stop losing customers to banking hours.
          </h2>
          
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
      </div>
    </section>
  );
}
