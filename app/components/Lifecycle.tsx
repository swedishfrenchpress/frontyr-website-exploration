import { ArrowRight, Landmark, Shield, Wallet, RefreshCw } from 'lucide-react';

const features = [
  {
    icon: Landmark,
    title: 'Programmable Ledger',
    desc: 'Frontyr models stablecoin flows and balance-sheet state with full lineage across issuance, settlement, and redemption.',
    color: 'bg-obsidian/5', // very light navy tint
  },
  {
    icon: Shield,
    title: 'Built-In Compliance',
    desc: 'KYC/AML, travel rule, and programmable policy controls are enforced at the core—not bolted on after the fact.',
    color: 'bg-obsidian/[0.08]', // slightly darker navy tint
  },
  {
    icon: Wallet,
    title: 'Tokenized Accounts',
    desc: 'Launch stablecoin-based checking, treasury, and liquidity products on a single programmable banking core.',
    color: 'bg-obsidian/[0.08]', // slightly darker navy tint
  },
  {
    icon: RefreshCw,
    title: 'Real-Time Settlement',
    desc: 'Move money 24/7 with instant finality. No batch windows, no delays—just continuous, programmable settlement.',
    color: 'bg-obsidian/5', // very light navy tint
  },
];

export function Lifecycle() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-canvas">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="font-sans text-4xl md:text-5xl font-semibold text-obsidian tracking-tight leading-[1.1] mb-4">
            Everything you need
            <br />
            <span className="text-subtle">to bank on stablecoins</span>
          </h2>
          <p className="text-subtle text-base leading-relaxed mb-8">
            A modern core built for tokenized dollars, real-time settlement, and enterprise-grade compliance.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button className="group inline-flex items-center gap-2 bg-obsidian text-white text-sm font-semibold px-6 py-3 rounded transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]">
              Request Platform Brief
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button className="inline-flex items-center gap-2 bg-white text-obsidian border border-border text-sm font-medium px-6 py-3 rounded transition-all duration-300 hover:border-obsidian/40 hover:shadow-md">
              Learn More
            </button>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`${feature.color} rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
              >
                <div className="mb-6">
                  <Icon className="w-8 h-8 text-obsidian/70" strokeWidth={1.5} />
                </div>
                <h3 className="font-sans text-xl font-semibold text-obsidian mb-3">
                  {feature.title}
                </h3>
                <p className="text-obsidian/70 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
