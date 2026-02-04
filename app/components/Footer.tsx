import { LogoLinkedin, LogoTwitter } from '@carbon/icons-react';

export function Footer() {
  return (
    <footer className="bg-obsidian bg-noise text-white py-20 px-6 md:px-12 lg:px-20 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Left Column: Brand & Newsletter */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-2.5 group">
              <svg viewBox="0 0 100 100" className="w-6 h-6 fill-white transition-transform duration-300 group-hover:scale-110">
                <path d="M50 20 L60 40 L80 50 L60 60 L50 80 L40 60 L20 50 L40 40 Z" />
              </svg>
              <span className="font-bold text-lg tracking-tight text-white">
                FRONTYR
              </span>
            </div>
            
            <p className="text-sm text-white/55 leading-relaxed max-w-sm">
              Frontyr is part of <span className="text-white/90 font-medium">Hoseki</span>, the global leader in cryptographic proof of reserves. We&apos;re your north star in navigating 24/7 banking for the next generation of clients.
            </p>

            <a href="mailto:support@frontyr.com" className="group inline-flex text-sm text-white/40 hover:text-white/70 transition-colors duration-200">
              <span className="relative">
                support@frontyr.com
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white/40 group-hover:w-full transition-all duration-300 ease-out" />
              </span>
            </a>

            {/* Newsletter Input */}
            <div className="flex w-full max-w-md group">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-l-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/20 focus:bg-white/[0.06] transition-all duration-200"
              />
              <button className="bg-white/[0.08] border-y border-r border-white/[0.08] rounded-r-lg px-6 py-3 text-sm font-medium text-white/90 hover:bg-white/[0.12] hover:text-white transition-all duration-200">
                Stay Updated
              </button>
            </div>
          </div>

          {/* Right Columns: Links */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            
            {/* Products */}
            <div className="space-y-5">
              <h4 className="text-xs font-semibold text-white/80 uppercase tracking-wider">Products</h4>
              <ul className="space-y-3 text-sm text-white/50">
                <li><a href="#" className="group inline-flex hover:text-white transition-colors duration-200"><span className="relative">Prove<span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white/50 group-hover:w-full transition-all duration-300 ease-out" /></span></a></li>
                <li><a href="#" className="group inline-flex hover:text-white transition-colors duration-200"><span className="relative">Verify<span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white/50 group-hover:w-full transition-all duration-300 ease-out" /></span></a></li>
                <li><a href="#" className="group inline-flex hover:text-white transition-colors duration-200"><span className="relative">Proof of Reserves<span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white/50 group-hover:w-full transition-all duration-300 ease-out" /></span></a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-5">
              <h4 className="text-xs font-semibold text-white/80 uppercase tracking-wider">Company</h4>
              <ul className="space-y-3 text-sm text-white/50">
                <li><a href="#" className="group inline-flex hover:text-white transition-colors duration-200"><span className="relative">About Us<span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white/50 group-hover:w-full transition-all duration-300 ease-out" /></span></a></li>
                <li><a href="#" className="group inline-flex hover:text-white transition-colors duration-200"><span className="relative">Careers<span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white/50 group-hover:w-full transition-all duration-300 ease-out" /></span></a></li>
                <li><a href="#" className="group inline-flex hover:text-white transition-colors duration-200"><span className="relative">Blog<span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white/50 group-hover:w-full transition-all duration-300 ease-out" /></span></a></li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-5">
              <h4 className="text-xs font-semibold text-white/80 uppercase tracking-wider">Support</h4>
              <ul className="space-y-3 text-sm text-white/50">
                <li><a href="#" className="group inline-flex hover:text-white transition-colors duration-200"><span className="relative">Contact<span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white/50 group-hover:w-full transition-all duration-300 ease-out" /></span></a></li>
                <li><a href="#" className="group inline-flex hover:text-white transition-colors duration-200"><span className="relative">Help Center<span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white/50 group-hover:w-full transition-all duration-300 ease-out" /></span></a></li>
              </ul>
            </div>

            {/* Developer */}
            <div className="space-y-5">
              <h4 className="text-xs font-semibold text-white/80 uppercase tracking-wider">Developer</h4>
              <ul className="space-y-3 text-sm text-white/50">
                <li><a href="#" className="group inline-flex hover:text-white transition-colors duration-200"><span className="relative">API Docs<span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white/50 group-hover:w-full transition-all duration-300 ease-out" /></span></a></li>
                <li><a href="#" className="group inline-flex hover:text-white transition-colors duration-200"><span className="relative">Status<span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white/50 group-hover:w-full transition-all duration-300 ease-out" /></span></a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 text-xs text-white/35">
            <span>© 2025 Frontyr Banking Technologies Inc.</span>
            <a href="#" className="hover:text-white/70 transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-white/70 transition-colors duration-200">Privacy Policy</a>
          </div>

          <div className="flex items-center gap-3">
            <a href="#" className="p-2 text-white/50 hover:text-white hover:bg-white/[0.06] rounded-lg transition-all duration-200">
              <LogoTwitter className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 text-white/50 hover:text-white hover:bg-white/[0.06] rounded-lg transition-all duration-200">
              <LogoLinkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
