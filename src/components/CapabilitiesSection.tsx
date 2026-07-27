import React, { useState } from 'react';
import { CAPABILITIES_DATA } from '../data/companyData';
import { CapabilityItem } from '../types';
import { Scissors, Award, Flame, Printer, Layers, Cpu, Box, Anchor, Shield, Sparkles, Settings, X, CheckCircle2 } from 'lucide-react';

export const CapabilitiesSection: React.FC = () => {
  const [selectedCapability, setSelectedCapability] = useState<CapabilityItem | null>(null);

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
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
            <Settings className="w-3.5 h-3.5 text-amber-500" />
            INDUSTRIAL PRECISION EQUIPMENT
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Sora'] tracking-tight text-white uppercase">
            MANUFACTURING <span className="text-amber-500">CAPABILITIES</span>
          </h2>

          <p className="text-slate-400 font-['Inter'] text-sm sm:text-base leading-relaxed">
            High-tech automated production machinery for military-grade textiles, ballistic composites, and custom hardware.
          </p>
        </div>

        {/* Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES_DATA.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedCapability(item)}
              className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/60 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(234,88,12,0.2)] group cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="p-3 w-12 h-12 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(item.iconName)}
                </div>

                <h3 className="text-lg font-extrabold font-['Sora'] text-white uppercase tracking-wide group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs font-['Inter'] text-slate-400 leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                {/* Features List */}
                <ul className="space-y-1.5 pt-3 border-t border-slate-800/80 font-mono text-[11px] text-slate-300">
                  {item.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block shrink-0"></span>
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-3 text-[11px] font-mono text-amber-500 group-hover:text-amber-400 flex items-center justify-between font-bold">
                <span>VIEW TOOLING SPECS</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Spec Modal Dialog (matching video 00:23 - 00:25) */}
      {selectedCapability && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#0B0B0B] border border-slate-700/80 rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative text-white">
            <button
              onClick={() => setSelectedCapability(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-500">
                {getIcon(selectedCapability.iconName)}
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold block">
                  PRODUCTION CAPABILITY
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold font-['Sora'] text-white uppercase">
                  {selectedCapability.title}
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 font-['Inter'] leading-relaxed">
              {selectedCapability.description}
            </p>

            {/* Equipment Tech Specs Box */}
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span className="text-slate-400 uppercase">EQUIPMENT TYPE:</span>
                <span className="text-amber-400 font-bold">{selectedCapability.equipmentType || 'Juki Programmable Pattern Stitcher'}</span>
              </div>

              <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span className="text-slate-400 uppercase">DAILY OUTPUT CAPACITY:</span>
                <span className="text-white font-bold">{selectedCapability.dailyOutput || '50,000 joins/day'}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-slate-400 uppercase">PRECISION TOLERANCE:</span>
                <span className="text-emerald-400 font-bold">{selectedCapability.precisionTolerance || 'MIL-SPEC stitch count'}</span>
              </div>
            </div>

            {/* Badges & Actions */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>MIL-SPEC COMPLIANT</span>
              </div>

              <button
                onClick={() => setSelectedCapability(null)}
                className="px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-['Manrope'] text-xs font-extrabold uppercase tracking-wider transition-all"
              >
                CLOSE SPECS
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
