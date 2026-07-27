import React from 'react';
import { INDUSTRIES_DATA } from '../data/companyData';
import { Shield, ShieldAlert, Building2, Lock, Mountain, Briefcase, Globe2 } from 'lucide-react';
import { motion } from 'motion/react';

export const IndustriesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield': return <Shield className="w-6 h-6 text-amber-500" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-amber-500" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-amber-500" />;
      case 'Lock': return <Lock className="w-6 h-6 text-amber-500" />;
      case 'Mountain': return <Mountain className="w-6 h-6 text-amber-500" />;
      case 'Briefcase': default: return <Briefcase className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section id="industries" className="py-16 sm:py-20 bg-[#0B0B0B] text-white border-b border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-amber-500 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-sm max-w-full flex-wrap">
            <Globe2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>GLOBAL B2B SECTOR SUPPLY</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-['Sora'] tracking-tight text-white uppercase break-words leading-tight">
            INDUSTRIES WE <span className="text-amber-500">SERVE</span>
          </h2>

          <p className="text-slate-400 font-['Inter'] text-xs sm:text-base leading-relaxed">
            Supplying government agencies, prime contractors, and premium private tactical labels across 6 key global sectors.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INDUSTRIES_DATA.map((ind, idx) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/60 p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_15px_35px_rgba(234,88,12,0.25)] space-y-4 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="p-3.5 w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(ind.iconName)}
                </div>

                <h3 className="text-base sm:text-lg font-extrabold font-['Sora'] text-white uppercase group-hover:text-amber-400 transition-colors break-words">
                  {ind.title}
                </h3>

                <p className="text-xs font-['Inter'] text-slate-300 leading-relaxed font-normal">
                  {ind.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

