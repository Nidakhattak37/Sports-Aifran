import React from 'react';
import { CAPABILITIES_DATA } from '../data/companyData';
import { Scissors, Award, Flame, Printer, Layers, Cpu, Box, Anchor, Shield, Sparkles, Wrench } from 'lucide-react';

export const CapabilitiesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scissors': return <Scissors className="w-6 h-6 text-amber-500" />;
      case 'Award': return <Award className="w-6 h-6 text-amber-500" />;
      case 'Flame': return <Flame className="w-6 h-6 text-amber-500" />;
      case 'Printer': return <Printer className="w-6 h-6 text-amber-500" />;
      case 'Layers': return <Layers className="w-6 h-6 text-amber-500" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-amber-500" />;
      case 'Box': return <Box className="w-6 h-6 text-amber-500" />;
      case 'Anchor': return <Anchor className="w-6 h-6 text-amber-500" />;
      case 'Shield': return <Shield className="w-6 h-6 text-amber-500" />;
      case 'Sparkles': default: return <Sparkles className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section id="capabilities" className="py-20 bg-[#0B0B0B] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5 text-amber-500" /> FACTORY SPECS & TOOLING
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Sora'] tracking-tight text-white">
            Manufacturing <span className="text-amber-500">Capabilities</span>
          </h2>
          <p className="text-slate-400 font-['Inter'] text-base leading-relaxed">
            In-house advanced equipment enabling high-volume OEM production with strict military tolerances.
          </p>
        </div>

        {/* 10 Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/80 border border-slate-800/80 hover:border-amber-500/50 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(234,88,12,0.15)] group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="p-3 w-12 h-12 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(item.iconName)}
                </div>

                <h3 className="text-xl font-bold font-['Sora'] text-white group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs font-['Inter'] text-slate-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Features List */}
                <ul className="space-y-1.5 pt-2 border-t border-slate-800/60 font-mono text-[11px] text-slate-300">
                  {item.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block"></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
