import { Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-obsidian text-white py-20 px-6 md:px-12 lg:px-20 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Left Column: Brand & Newsletter */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-white rounded-sm"></div>
              <span className="font-bold text-lg tracking-tight text-white">
                FRONTYR
              </span>
            </div>
            
            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              Frontyr is part of <span className="text-white font-medium">Hoseki</span>, the global leader in cryptographic proof of reserves. We build the stablecoin core banking infrastructure that powers the next generation of finance.
            </p>

            <div className="text-sm text-white/40">
              support@frontyr.com
            </div>

            {/* Newsletter Input */}
            <div className="flex w-full max-w-md">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-white/5 border border-white/10 rounded-l-md px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/20 transition-colors"
              />
              <button className="bg-white/10 border-y border-r border-white/10 rounded-r-md px-6 py-3 text-sm font-medium text-white hover:bg-white/15 transition-colors">
                Stay Updated
              </button>
            </div>
          </div>

          {/* Right Columns: Links */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            
            {/* Products */}
            <div className="space-y-6">
              <h4 className="text-sm font-semibold text-white">Products</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Prove</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Verify</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Proof of Reserves</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-6">
              <h4 className="text-sm font-semibold text-white">Company</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-6">
              <h4 className="text-sm font-semibold text-white">Support</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              </ul>
            </div>

            {/* Developer */}
            <div className="space-y-6">
              <h4 className="text-sm font-semibold text-white">Developer</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 text-xs text-white/40">
            <span>© 2025 Frontyr Banking Technologies Inc.</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
