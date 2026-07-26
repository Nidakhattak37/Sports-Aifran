import React from 'react';
import { INDUSTRIES_DATA } from '../data/companyData';
import { Shield, ShieldAlert, Building2, Lock, Mountain, Briefcase, Globe2 } from 'lucide-react';

export const IndustriesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield': return <Shield className="w-8 h-8 text-amber-500" />;
      case 'ShieldAlert': return <ShieldAlert className="w-8 h-8 text-amber-500" />;
      case 'Building2': return <Building2 className="w-8 h-8 text-amber-500" />;
      case 'Lock': return <Lock className="w-8 h-8 text-amber-500" />;
      case 'Mountain': return <Mountain className="w-8 h-8 text-amber-500" />;
      case 'Briefcase': default: return <Briefcase className="w-8 h-8 text-amber-500" />;
    }
  };

  return (
    <section id="industries" className="py-20 bg-[#0B0B0B] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
            <Globe2 className="w-3.5 h-3.5 text-amber-500" /> SECTORS & CLIENTS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Sora'] tracking-tight text-white">
            Industries We <span className="text-amber-500">Serve</span>
          </h2>
          <p className="text-slate-400 font-['Inter'] text-base leading-relaxed">
            Trusted manufacturing partner for institutional defense, security organizations, and international retail brands.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES_DATA.map((ind) => (
            <div
              key={ind.id}
              className="bg-slate-900/80 border border-slate-800/80 hover:border-amber-500/50 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(234,88,12,0.15)] space-y-4 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="p-4 w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(ind.iconName)}
                </div>

                <h3 className="text-xl font-bold font-['Sora'] text-white group-hover:text-amber-400 transition-colors">
                  {ind.title}
                </h3>

                <p className="text-xs font-['Inter'] text-slate-400 leading-relaxed">
                  {ind.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
