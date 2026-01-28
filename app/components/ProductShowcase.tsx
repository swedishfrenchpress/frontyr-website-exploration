'use client';

/* eslint-disable @next/next/no-img-element */

export function ProductShowcase() {
  return (
    <section className="relative w-full z-0 -mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="relative w-full rounded-t-xl overflow-hidden border border-border/50 shadow-2xl bg-white">
            {/* 
                We are showing roughly the top 1/3 of the interface. 
                Height is constrained and overflow is hidden.
            */}
            <div className="relative h-[400px] md:h-[500px] w-full bg-white overflow-hidden">
                <img 
                    src="/dashboard-placeholder.svg" 
                    alt="Frontyr Dashboard" 
                    className="w-full h-auto object-cover object-top min-w-[1000px]"
                />
                
                {/* Fade to white gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white pointer-events-none"></div>
                {/* Harder fade at the very bottom to merge with the next section */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
            </div>
        </div>
      </div>
    </section>
  );
}
