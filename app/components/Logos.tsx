export function Logos() {
  return (
    <section className="border-y border-border/60 py-16 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
        <p className="text-xs font-semibold text-obsidian whitespace-nowrap md:w-auto w-full text-center md:text-left">
          POWERING STABLECOIN FINANCE AT
        </p>
        <div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
          {['VERCEL', 'stripe', 'Linear', 'OpenAI', 'Raycast'].map((logo) => (
            <span key={logo} className="font-sans text-lg font-bold text-obsidian tracking-tight">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
