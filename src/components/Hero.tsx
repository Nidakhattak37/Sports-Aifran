import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText, Shield, Globe2, Settings } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenCatalog: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCatalog }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] pt-28 pb-16 bg-[#0B0B0B] text-white overflow-hidden flex items-center justify-center border-b border-slate-800">
      {/* Interactive Mouse Spotlight Glowing Effect */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(234, 88, 12, 0.12), rgba(130, 169, 60, 0.12), transparent 80%)`,
        }}
      />

      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 left-5 w-72 h-72 sm:w-96 sm:h-96 bg-[#84A93C]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-5 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-[#EA580C]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headline, Tagline & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left max-w-full"
          >
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-amber-500 font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider max-w-full flex-wrap shadow-md">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shrink-0"></span>
              <span className="break-words">B2B TACTICAL GEAR & MILITARY OEM SUPPLIER</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2 max-w-full">
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black font-['Sora'] leading-[1.05] sm:leading-[1.02] tracking-tight uppercase text-white break-words">
                TACTICAL<br />
                MANUFACTURING<br />
                <span className="text-[#84A93C]">SOLUTIONS</span>
              </h1>

              {/* Sub-tagline */}
              <div className="text-amber-500 font-extrabold tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm font-['Space_Grotesk'] uppercase pt-1">
                CUT • SEW • MANUFACTURE
              </div>
            </div>

            {/* Description Paragraph */}
            <p className="text-slate-300 font-['Inter'] text-xs sm:text-base leading-relaxed max-w-xl font-normal">
              From a small workshop in Sialkot to a trusted manufacturing partner for global brands and government organizations. Our journey is built on passion, precision and a commitment to quality that runs in our family.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={scrollToContact}
                className="px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-['Manrope'] font-extrabold text-xs uppercase tracking-wider transition-all shadow-[0_4px_20px_rgba(234,88,12,0.4)] hover:shadow-[0_6px_30px_rgba(234,88,12,0.6)] flex items-center gap-2 group"
              >
                <span>GET A QUOTE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenCatalog}
                className="px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-amber-500/50 font-['Manrope'] font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-md"
              >
                <FileText className="w-4 h-4 text-amber-500" />
                <span>VIEW CATALOG</span>
              </button>
            </div>

            {/* Bottom Trust Badges */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-4 sm:gap-6 text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-500 shrink-0" />
                <span>SMETA & BSCI AUDITED</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>EXPORTING TO 45+ COUNTRIES</span>
              </div>
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4 text-amber-500 shrink-0" />
                <span>1.5M+ ANNUAL UNIT OUTPUT</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Circular Champions League Soccer Ball Image Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="relative w-64 h-64 sm:w-96 sm:h-96 flex items-center justify-center">
              {/* Radial glow background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500/20 via-[#84A93C]/20 to-orange-500/20 blur-2xl"></div>

              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-full border border-slate-800 shadow-[0_0_30px_rgba(0,0,0,0.8)]"></div>

              {/* Main Circular Image Frame */}
              <div className="w-56 h-56 sm:w-80 sm:h-80 rounded-full p-2 bg-gradient-to-b from-slate-700/50 via-slate-800/60 to-slate-950 border border-slate-700/80 shadow-[0_10px_40px_rgba(0,0,0,0.9)] relative z-10 overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1614632537197-38a17061c2bd?auto=format&fit=crop&q=80&w=800"
                  alt="AIFRAN SPORTS Football & Manufacturing"
                  className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(0,0,0,0.7)] pointer-events-none"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

