import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText, Shield, Award, CheckCircle2 } from 'lucide-react';

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
    <section className="relative min-h-screen pt-28 pb-16 bg-[#0B0B0B] text-white overflow-hidden flex items-center justify-center border-b border-slate-800">
      {/* Interactive Mouse Spotlight Glowing Effect */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(234, 88, 12, 0.15), rgba(75, 85, 38, 0.15), transparent 80%)`,
        }}
      />

      {/* Ambient Radial Lights */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#6B7A3D]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-[#EA580C]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline, Tagline & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-400 font-mono text-xs uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              GLOBAL B2B OEM / ODM TACTICAL MANUFACTURER
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-['Sora'] leading-none tracking-tight text-white">
                Tactical Manufacturing <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500">Solutions</span>
              </h1>

              <div className="text-lg sm:text-2xl font-extrabold font-['Space_Grotesk'] text-amber-500 tracking-widest uppercase">
                CUT • SEW • MANUFACTURE
              </div>
            </div>

            <p className="text-slate-300 font-['Inter'] text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              From a small workshop in Sialkot to a trusted manufacturing partner for global brands and government organizations. Our journey is built on passion, precision and a commitment to quality that runs in our family.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={scrollToContact}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-['Manrope'] font-extrabold text-sm uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(234,88,12,0.4)] hover:shadow-[0_0_35px_rgba(234,88,12,0.6)] flex items-center gap-2 group"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenCatalog}
                className="px-8 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-100 border border-slate-700 hover:border-amber-500/50 font-['Manrope'] font-bold text-sm tracking-wide transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>View Catalog</span>
              </button>
            </div>

            {/* Key Trust Metrics */}
            <div className="pt-8 grid grid-cols-3 gap-4 border-t border-slate-800/80 font-['Space_Grotesk']">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">1995</div>
                <div className="text-xs text-slate-400 font-sans uppercase">Sialkot Legacy</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">45+</div>
                <div className="text-xs text-slate-400 font-sans uppercase">Export Countries</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">100%</div>
                <div className="text-xs text-slate-400 font-sans uppercase">Quality Assured</div>
              </div>
            </div>
          </div>

          {/* Right Column: Stylized Football Graphic Icon & Rings */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
              {/* Outer Pulsing Orbit Rings */}
              <div className="absolute inset-0 rounded-full border border-amber-500/20 animate-spin-slow"></div>
              <div className="absolute inset-4 rounded-full border border-slate-700/60"></div>
              <div className="absolute inset-8 rounded-full border border-dashed border-amber-500/30 animate-reverse-spin"></div>

              {/* Glowing Center Shield Backdrop */}
              <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-amber-950/80 via-slate-900 to-emerald-950/80 border border-amber-500/40 shadow-[0_0_50px_rgba(234,88,12,0.25)] flex flex-col items-center justify-center p-6 text-center z-10">
                {/* Football / Sports Graphic Icon */}
                <svg
                  className="w-24 h-24 sm:w-32 sm:h-32 text-amber-500 mb-2 filter drop-shadow-[0_0_15px_rgba(234,88,12,0.5)]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  <path d="M2 12h20" />
                  <path d="M12 2v20" />
                  <path d="M4.93 4.93l14.14 14.14" />
                  <path d="M4.93 19.07l14.14-14.14" />
                </svg>

                <div className="font-['Sora'] font-extrabold text-xs sm:text-sm tracking-wider uppercase text-slate-100">
                  AIFRAN SPORTS
                </div>
                <div className="text-[10px] font-mono text-amber-400 tracking-widest uppercase">
                  MIL-SPEC & ATHLETIC EXCELLENCE
                </div>
              </div>

              {/* Floating Badges around the Football Icon */}
              <div className="absolute -top-2 left-4 bg-slate-900/90 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-200 shadow-xl flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>ISO Certified</span>
              </div>

              <div className="absolute -bottom-2 right-4 bg-slate-900/90 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-200 shadow-xl flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>Global OEM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
