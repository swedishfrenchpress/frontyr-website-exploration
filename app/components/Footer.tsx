'use client';

export function Footer() {
  return (
    <footer className="relative py-24 px-6 md:px-12 lg:px-20 bg-obsidian overflow-hidden border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Brand & Copy */}
          <div className="flex flex-col items-start space-y-6 max-w-lg">
            <div className="flex items-center gap-2.5">
              <svg viewBox="0 0 100 100" className="w-8 h-8 fill-white">
                <path d="M50 20 L60 40 L80 50 L60 60 L50 80 L40 60 L20 50 L40 40 Z" />
              </svg>
              <span className="font-bold text-2xl tracking-tight text-white">
                FRONTYR
              </span>
            </div>
            
            <p className="text-lg text-white/60 leading-relaxed">
              Frontyr is part of <span className="text-white font-medium">Hoseki</span>, the global leader in cryptographic proof of reserves. We&apos;re your north star in navigating 24/7 banking.
            </p>

            <a href="mailto:sales@frontyr.com" className="group inline-flex items-center text-white font-medium border-b border-white/30 pb-0.5 hover:border-white transition-all duration-200 cursor-pointer">
              sales@frontyr.com
            </a>
          </div>

          {/* Right Column: Newsletter Form */}
          <div className="flex flex-col w-full">
             <div className="flex flex-col sm:flex-row gap-3 w-full mb-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all duration-200 min-w-0"
                />
                <button className="group relative isolate overflow-hidden bg-white text-obsidian text-sm font-semibold px-8 py-3.5 rounded-xl shadow-[0_4px_16px_-4px_rgba(255,255,255,0.1)] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_8px_24px_-4px_rgba(255,255,255,0.15)] cursor-pointer whitespace-nowrap">
                  <span className="relative z-10">Subscribe</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
             </div>
             
             <p className="text-[10px] text-white/30 leading-relaxed max-w-md">
                By providing your email, you are consenting to receive communications from Frontyr Inc. You can unsubscribe at any time. View our <a href="#" className="underline hover:text-white/50 cursor-pointer">Privacy Policy</a>.
             </p>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-24 pt-8 border-t border-white/[0.08] flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="text-xs text-white/30">© 2025 Frontyr Inc. All rights reserved.</span>
            <div className="flex gap-6 text-xs text-white/30">
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
                <a href="#" className="hover:text-white transition-colors">GitHub</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
        </div>
      </div>
    </footer>
  );
}
