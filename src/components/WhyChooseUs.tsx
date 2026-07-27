import React from 'react';
import { ShieldCheck, Target, Users, Shield } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const cards = [
    {
      title: 'TESTED QUALITY',
      description: 'Every thread, wire, and rivet undergoes stress testing for extreme thermal and mechanical resilience for field survival.',
      stat: '99.8%',
      statLabel: 'QC PASS RATE',
      icon: <ShieldCheck className="w-6 h-6 text-amber-500" />,
    },
    {
      title: 'MISSION FOCUSED',
      description: 'Customized technical solutions tailored precisely to government spec sheets, NATO requirements, and private label brand criteria.',
      stat: '28+',
      statLabel: 'YEARS INDUSTRY EXPERTISE',
      icon: <Target className="w-6 h-6 text-amber-500" />,
    },
    {
      title: 'RELIABLE PARTNER',
      description: 'Direct factory transparency with dedicated account managers, live production status updates, and strict IP protection agreements.',
      stat: '45+',
      statLabel: 'GLOBAL EXPORT DESTINATIONS',
      icon: <Users className="w-6 h-6 text-amber-500" />,
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-[#0B0B0B] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5 text-amber-500" />
            UNCOMPROMISING MANUFACTURING STANDARDS
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Sora'] tracking-tight text-white uppercase">
            WHY CHOOSE <span className="text-amber-500">AIFRAN SPORTS</span>
          </h2>

          <p className="text-slate-400 font-['Inter'] text-sm sm:text-base leading-relaxed">
            Built on three decades of trust, precision engineering, and dedicated OEM support for tactical brands worldwide.
          </p>
        </div>

        {/* 3 Main Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/60 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(234,88,12,0.2)] space-y-6 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="p-3 w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>

                <h3 className="text-xl font-extrabold font-['Sora'] text-white uppercase group-hover:text-amber-400 transition-colors">
                  {card.title}
                </h3>

                <p className="text-xs font-['Inter'] text-slate-300 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Stat footer inside card */}
              <div className="pt-4 border-t border-slate-800 space-y-1">
                <div className="text-3xl font-extrabold font-['Sora'] text-amber-500">
                  {card.stat}
                </div>
                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                  {card.statLabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
