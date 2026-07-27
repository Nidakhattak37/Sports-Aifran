import React, { useState } from 'react';
import { CAPABILITIES_DATA } from '../data/companyData';
import { CapabilityItem } from '../types';
import { motion } from 'motion/react';
import {
  Zap,
  Feather,
  Flame,
  Printer,
  Layers,
  Cpu,
  Box,
  Scissors,
  Shield,
  Palette,
  X,
  CheckCircle2,
  Sparkles,
  Settings,
} from 'lucide-react';

export const CapabilitiesSection: React.FC = () => {
  const [selectedCapability, setSelectedCapability] = useState<CapabilityItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-5 h-5 text-orange-500" />;
      case 'Feather':
        return <Feather className="w-5 h-5 text-[#84A93C]" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-orange-500" />;
      case 'Printer':
        return <Printer className="w-5 h-5 text-emerald-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-orange-500" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'Box':
        return <Box className="w-5 h-5 text-orange-500" />;
      case 'Scissors':
        return <Scissors className="w-5 h-5 text-[#84A93C]" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-orange-500" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-500" />;
    }
  };

  const getIconContainerStyle = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
      case 'Flame':
      case 'Layers':
      case 'Box':
      case 'Shield':
        return 'bg-orange-950/60 border-orange-800/60';
      case 'Feather':
      case 'Scissors':
        return 'bg-lime-950/60 border-lime-800/60';
      case 'Printer':
      case 'Cpu':
      case 'Palette':
        return 'bg-emerald-950/60 border-emerald-800/60';
      default:
        return 'bg-slate-950/80 border-slate-800/90';
    }
  };

  return (
    <section id="capabilities" className="py-16 sm:py-20 bg-[#070A0F] text-white border-b border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-amber-500 font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider shadow-sm max-w-full flex-wrap">
            <Settings className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>INDUSTRIAL PRECISION EQUIPMENT</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-['Sora'] tracking-tight text-white uppercase break-words leading-tight">
            MANUFACTURING <span className="text-[#84A93C]">CAPABILITIES</span>
          </h2>

          <p className="text-slate-400 font-['Inter'] text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            High-tech automated production machinery for military-grade textiles, ballistic composites, and custom hardware.
          </p>
        </div>

        {/* 5-Column Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {CAPABILITIES_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              onClick={() => setSelectedCapability(item)}
              className="bg-[#0D1322]/90 border border-slate-800/90 hover:border-amber-500/50 hover:bg-[#11192e] rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 shadow-[0_8px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_12px_35px_rgba(234,88,12,0.2)] group cursor-pointer flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className={`p-2.5 w-10 h-10 rounded-xl border flex items-center justify-center group-hover:scale-105 transition-transform ${getIconContainerStyle(item.iconName)}`}>
                  {getIcon(item.iconName)}
                </div>

                <h3 className="text-xs sm:text-sm font-extrabold font-['Sora'] text-white uppercase tracking-tight group-hover:text-amber-400 transition-colors leading-snug break-words">
                  {item.title}
                </h3>

                <p className="text-[11px] font-['Inter'] text-slate-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tech Spec Modal Dialog */}
      {selectedCapability && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#0B0B0B] border border-slate-700/80 rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative text-white max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedCapability(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 pr-8">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-500 shrink-0">
                {getIcon(selectedCapability.iconName)}
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold block">
                  PRODUCTION CAPABILITY
                </span>
                <h3 className="text-lg sm:text-2xl font-extrabold font-['Sora'] text-white uppercase break-words">
                  {selectedCapability.title}
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 font-['Inter'] leading-relaxed">
              {selectedCapability.description}
            </p>

            {/* Equipment Tech Specs Box */}
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center border-b border-slate-800 pb-2 gap-2">
                <span className="text-slate-400 uppercase shrink-0">EQUIPMENT TYPE:</span>
                <span className="text-amber-400 font-bold text-right">{selectedCapability.equipmentType || 'Juki Industrial Equipment'}</span>
              </div>

              <div className="flex justify-between items-center border-b border-slate-800 pb-2 gap-2">
                <span className="text-slate-400 uppercase shrink-0">DAILY OUTPUT:</span>
                <span className="text-white font-bold text-right">{selectedCapability.dailyOutput || 'High capacity'}</span>
              </div>

              <div className="flex justify-between items-center gap-2">
                <span className="text-slate-400 uppercase shrink-0">PRECISION TOLERANCE:</span>
                <span className="text-emerald-400 font-bold text-right">{selectedCapability.precisionTolerance || 'MIL-SPEC compliant'}</span>
              </div>
            </div>

            {/* Badges & Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>MIL-SPEC COMPLIANT</span>
              </div>

              <button
                onClick={() => setSelectedCapability(null)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-['Manrope'] text-xs font-extrabold uppercase tracking-wider transition-all"
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

