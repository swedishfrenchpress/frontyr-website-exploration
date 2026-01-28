'use client';

export function Contact() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-20 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left: Value Props (Navy Square) */}
            <div className="bg-obsidian bg-noise text-white p-12 lg:aspect-square flex flex-col justify-center rounded-3xl shadow-2xl relative overflow-hidden">
                {/* Subtle background detail */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
                
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
                        Platform Access
                    </h2>
                    <p className="text-white/70 text-lg mb-10 leading-relaxed">
                        Frontyr is built for regulated institutions. Configure access based on launch scope and compliance needs.
                    </p>
                    <ul className="space-y-6">
                        {[
                            'Sandbox ledger & test rails',
                            'Programmable compliance', 
                            'Treasury & liquidity core',
                            'Real-time settlement'
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 text-white/90 font-medium">
                                <span className="text-white text-lg leading-none">✓</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Right: Contact Form */}
            <div className="w-full max-w-lg">
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-obsidian mb-2">Get in touch</h3>
                    <p className="text-subtle">Fill out the form below and our team will get back to you shortly.</p>
                </div>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label className="block text-sm font-medium text-obsidian mb-2">Name</label>
                        <input 
                            type="text" 
                            className="w-full px-4 py-3 rounded-lg border border-border focus:border-obsidian focus:ring-2 focus:ring-obsidian/10 outline-none transition-all bg-white placeholder:text-subtle/50 hover:border-obsidian/30" 
                            placeholder="Jane Doe" 
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-obsidian mb-2">Work Email</label>
                        <input 
                            type="email" 
                            className="w-full px-4 py-3 rounded-lg border border-border focus:border-obsidian focus:ring-2 focus:ring-obsidian/10 outline-none transition-all bg-white placeholder:text-subtle/50 hover:border-obsidian/30" 
                            placeholder="jane@company.com" 
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-obsidian mb-2">Company</label>
                        <input 
                            type="text" 
                            className="w-full px-4 py-3 rounded-lg border border-border focus:border-obsidian focus:ring-2 focus:ring-obsidian/10 outline-none transition-all bg-white placeholder:text-subtle/50 hover:border-obsidian/30" 
                            placeholder="Acme Inc." 
                        />
                    </div>
                    <button className="w-full py-4 bg-obsidian text-white rounded-lg font-semibold hover:bg-obsidian/90 transition-colors shadow-lg shadow-obsidian/10 mt-2">
                        Contact Sales
                    </button>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
}
