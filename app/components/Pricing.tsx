'use client';

import { useState } from 'react';

const plans = [
    {
        id: 'hobby',
        name: 'Pilot',
        monthly: 'Contact Sales',
        yearly: 'Contact Sales',
        desc: 'For teams validating stablecoin products and integrations.',
        features: ['Sandbox ledger', 'Stablecoin test rails', 'Implementation support'],
        cta: 'Request Pilot',
        variant: 'light'
    },
    {
        id: 'pro',
        name: 'Institution',
        monthly: 'Contact Sales',
        yearly: 'Contact Sales',
        desc: 'For banks and fintechs launching stablecoin-native products.',
        features: ['Programmable compliance', 'Treasury & liquidity core', 'Real-time settlement'],
        cta: 'Talk to Sales',
        variant: 'dark',
        recommended: true
    },
    {
        id: 'ent',
        name: 'Global',
        monthly: 'Contact Sales',
        yearly: 'Contact Sales',
        desc: 'For regulated institutions operating at scale across regions.',
        features: ['Regulatory reporting', 'Multi-entity ledgers', 'Enterprise availability'],
        cta: 'Discuss Deployment',
        variant: 'light'
    }
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [animating, setAnimating] = useState(false);

  const handleToggle = () => {
      setAnimating(true);
      setTimeout(() => {
          setIsYearly(!isYearly);
          setAnimating(false);
      }, 200);
  };

  return (
    <section className="py-32 px-6 md:px-12 lg:px-20 border-b border-border">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl font-semibold text-obsidian tracking-tight mb-4">
            Platform Access
          </h2>
          <p className="text-subtle text-base mb-8">
            Frontyr is built for regulated institutions. Configure access based
            on launch scope and compliance needs.
          </p>

          <label className="inline-flex items-center cursor-pointer gap-3">
              <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-obsidian' : 'text-subtle'}`}>Monthly</span>
              <div className="relative">
                  <input type="checkbox" className="sr-only peer" checked={isYearly} onChange={handleToggle} />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-obsidian"></div>
              </div>
              <span className={`text-sm font-medium transition-colors ${isYearly ? 'text-obsidian' : 'text-subtle'}`}>Annual</span>
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => {
              const isSelected = selectedPlan === plan.id;
              const isDark = plan.variant === 'dark';

              return (
                  <div 
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`
                        group relative p-8 rounded-xl flex flex-col cursor-pointer pricing-transition
                        ${isDark 
                            ? 'bg-obsidian text-white shadow-xl shadow-obsidian/20 hover:shadow-2xl' 
                            : 'bg-white border border-border hover:border-obsidian/30 hover:shadow-xl'
                        }
                        ${isSelected 
                            ? 'scale-[1.02] shadow-2xl z-10 ring-1 ring-obsidian/5 opacity-100' 
                            : 'scale-[0.98] opacity-60 border-border'
                        }
                        ${isSelected && !isDark ? 'border-obsidian' : ''}
                        ${!isSelected && !isDark ? 'border-border' : ''}
                    `}
                  >
                      {/* Gradient Reveal for Light Cards */}
                      {!isDark && (
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-obsidian/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                      )}

                      <div className="mb-4 relative z-10">
                          <span className={`font-semibold transition-colors ${!isDark && isSelected ? 'text-black' : ''} ${!isDark && !isSelected ? 'text-obsidian' : ''}`}>
                              {plan.name}
                          </span>
                      </div>
                      
                      <div className={`mb-4 flex items-baseline gap-1 relative z-10 transition-all duration-200 ${animating ? 'opacity-50 scale-95 blur-sm' : ''}`}>
                          <span className={`text-3xl font-semibold ${isDark ? '' : 'text-obsidian'}`}>
                              {isYearly ? plan.yearly : plan.monthly}
                          </span>
                          {!plan.monthly.includes('Contact') && (
                             <span className={`text-sm ${isDark ? 'text-white/60' : 'text-subtle'}`}>/mo</span>
                          )}
                      </div>

                      <p className={`text-sm mb-8 leading-relaxed relative z-10 ${isDark ? 'text-white/60' : 'text-subtle'}`}>
                          {plan.desc}
                      </p>

                      <ul className="space-y-4 mb-8 flex-1 relative z-10">
                          {plan.features.map((feat, i) => (
                              <li key={i} className={`flex gap-3 text-sm ${isDark ? 'text-white/80' : 'text-subtle'}`}>
                                  <span className={isDark ? 'text-white' : 'text-obsidian'}>✓</span>
                                  {feat}
                              </li>
                          ))}
                      </ul>

                      <button 
                        className={`
                            w-full py-3 rounded-lg text-xs font-semibold transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.97] relative z-10
                            ${isDark 
                                ? 'bg-white text-obsidian hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
                                : 'bg-white border border-border text-obsidian hover:border-obsidian hover:shadow-[0_0_15px_rgba(0,0,0,0.05)]'
                            }
                        `}
                      >
                          {plan.cta}
                      </button>
                  </div>
              );
          })}
        </div>
      </div>
    </section>
  );
}
