'use client';

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-20 bg-white border-t border-border/60">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="font-sans text-4xl md:text-5xl font-semibold text-obsidian tracking-tight mb-6 leading-[1.1]">
          Ready to build on modern rails?
        </h2>
        
        {/* Subheading */}
        <p className="text-subtle text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Join the leading banks and fintechs upgrading their infrastructure with Frontyr.
        </p>

        {/* CTA Button - same style as Hero */}
        <button className="group relative isolate overflow-hidden bg-obsidian text-white text-sm font-semibold px-8 py-3.5 rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-300 hover:bg-obsidian/90 hover:scale-[1.02] hover:shadow-lg cursor-pointer">
          <span className="relative z-10">Book a Demo</span>
        </button>
      </div>
    </section>
  );
}
