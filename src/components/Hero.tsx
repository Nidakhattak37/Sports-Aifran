import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText, Shield, Globe2, Settings } from 'lucide-react';
import factoryImg from '../assets/images/factory_glove_craftsmen_1785395477185.jpg';

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
        className="pointer-events-none absolute inset-0 z-0 opacity-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(234, 88, 12, 0.12), rgba(130, 169, 60, 0.12), transparent 80%)`,
        }}
      />

      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#84A93C]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-[#EA580C]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headline, Tagline & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-amber-500 font-mono text-[11px] font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              B2B TACTICAL GEAR & MILITARY OEM SUPPLIER
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-['Sora'] leading-[1.02] tracking-tight uppercase text-white">
                TACTICAL<br />
                MANUFACTURING<br />
                <span className="text-[#84A93C]">SOLUTIONS</span>
              </h1>

              {/* Sub-tagline */}
              <div className="text-amber-500 font-extrabold tracking-[0.2em] text-xs sm:text-sm font-['Space_Grotesk'] uppercase pt-1">
                CUT • SEW • MANUFACTURE
              </div>
            </div>

            {/* Description Paragraph */}
            <p className="text-slate-300 font-['Inter'] text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              From a small workshop in Sialkot to a trusted manufacturing partner for global brands and government organizations. Our journey is built on passion, precision and a commitment to quality that runs in our family.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={scrollToContact}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-['Manrope'] font-extrabold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:shadow-[0_0_30px_rgba(234,88,12,0.5)] flex items-center gap-2 group"
              >
                <span>GET A QUOTE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenCatalog}
                className="px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-amber-500/50 font-['Manrope'] font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-amber-500" />
                <span>VIEW CATALOG</span>
              </button>
            </div>

            {/* Bottom Trust Badges */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
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
          </div>

          {/* Right Column: Rectangular Factory Showcase Image fitting on right side */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Radial ambient background glow */}
              <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-amber-500/20 via-[#84A93C]/20 to-orange-500/20 blur-xl opacity-75"></div>

              {/* Main Rectangular Image Container */}
              <div className="relative rounded-[2rem] border border-slate-700/80 bg-slate-900/90 shadow-[0_20px_60px_rgba(0,0,0,0.85)] overflow-hidden group">
                
                {/* Main Image - Factory Craftsmen */}
                <div className="relative h-[380px] sm:h-[480px] w-full overflow-hidden">
                  <img
                    src={factoryImg}
                    alt="AIFRAN SPORTS Craftsmen Manufacturing Leather & Tactical Gloves"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gentle gradient edges to blend into hero section */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-[#0B0B0B]/40 pointer-events-none" />
                </div>

                {/* Floating Top Badge: Plant Status */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-white font-['JetBrains_Mono',monospace] text-[10px] sm:text-xs font-bold tracking-wider shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>SIALKOT PLANT • ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
