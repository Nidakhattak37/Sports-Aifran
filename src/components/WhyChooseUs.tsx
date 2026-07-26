import React from 'react';
import { ShieldCheck, Target, Users, Award, Factory, Globe2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      title: 'Battle Tested Quality',
      description: 'Engineered for extreme operational environments with MIL-SPEC fabric and reinforced seam construction.',
      icon: <ShieldCheck className="w-7 h-7 text-amber-500" />,
    },
    {
      title: 'Mission Focused',
      description: 'Every stitch and pattern is designed around ergonomic operational efficiency and quick deployment.',
      icon: <Target className="w-7 h-7 text-amber-500" />,
    },
    {
      title: 'Reliable Partner',
      description: 'Over 28 years of trusted contract manufacturing for defense forces, tactical brands, and OEMs.',
      icon: <Users className="w-7 h-7 text-amber-500" />,
    },
    {
      title: 'Durable by Design',
      description: 'Tested against abrasion, high tensile load, and adverse weather conditions.',
      icon: <Award className="w-7 h-7 text-amber-500" />,
    },
    {
      title: 'Scalable Production',
      description: 'High annual capacity backed by 65,000+ sq. ft. modern facility and automated laser lines.',
      icon: <Factory className="w-7 h-7 text-amber-500" />,
    },
    {
      title: 'Worldwide Shipping',
      description: 'Seamless international export logistics handling customs clearance to over 45 countries.',
      icon: <Globe2 className="w-7 h-7 text-amber-500" />,
    },
  ];

  return (
    <section className="py-20 bg-[#0B0B0B] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
            GLOBAL ADVANTAGE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Sora'] tracking-tight text-white">
            Why Choose <span className="text-amber-500">AIFRAN SPORTS</span>
          </h2>
          <p className="text-slate-400 font-['Inter'] text-base leading-relaxed">
            Delivering uncompromised craftsmanship, production scale, and global supply chain reliability.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 border border-slate-800/80 hover:border-amber-500/50 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(234,88,12,0.15)] space-y-4 group"
            >
              <div className="p-3.5 w-14 h-14 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                {b.icon}
              </div>

              <h3 className="text-xl font-bold font-['Sora'] text-white group-hover:text-amber-400 transition-colors">
                {b.title}
              </h3>

              <p className="text-xs font-['Inter'] text-slate-400 leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>

        {/* Animated Metrics Bar */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center font-['Space_Grotesk']">
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">99.8%</div>
            <div className="text-xs text-slate-400 font-sans uppercase font-medium">QC Acceptance Rate</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-white">28+</div>
            <div className="text-xs text-slate-400 font-sans uppercase font-medium">Years Industry Expertise</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">45+</div>
            <div className="text-xs text-slate-400 font-sans uppercase font-medium">Export Countries</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">1.5M+</div>
            <div className="text-xs text-slate-400 font-sans uppercase font-medium">Annual Unit Capacity</div>
          </div>
        </div>
      </div>
    </section>
  );
};
