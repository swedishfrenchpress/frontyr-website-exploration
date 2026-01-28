export function Footer() {
  return (
    <footer className="bg-white py-20 px-6 md:px-12 lg:px-20 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="max-w-xs space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-obsidian rounded-sm"></div>
            <span className="font-bold text-sm tracking-tight text-obsidian">
              FRONTYR
            </span>
          </div>
          <p className="text-xs text-subtle leading-relaxed">
            Core banking infrastructure for the stablecoin era.
            New York, NY.
          </p>
          <div className="text-[10px] text-subtle">
             © 2024 Frontyr Banking Technologies Inc.
          </div>
        </div>

      </div>
    </footer>
  );
}
