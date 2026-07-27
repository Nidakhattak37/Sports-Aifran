import React, { useState } from 'react';
import { TIMELINE_DATA } from '../data/companyData';
import { Award, Factory, Users, Building } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState<number>(2); // Default to 2012 Tactical Manufacturing as in video

  const currentMilestone = TIMELINE_DATA[activeMilestoneIndex];

  return (
    <section id="about" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider border border-slate-300">
            <span className="w-2 h-2 rounded-full bg-amber-600"></span>
            ESTABLISHED 1995 • SIALKOT, PAKISTAN
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Sora'] tracking-tight text-slate-900 uppercase">
            About <span className="text-amber-600">AIFRAN SPORTS</span>
          </h2>

          <p className="text-slate-600 font-['Inter'] text-sm sm:text-base leading-relaxed">
            A three-decade legacy of precision stitching, military-grade textile innovation, and global OEM supply excellence.
          </p>
        </div>

        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Sialkot Workshop Story & Interactive Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-xl sm:text-2xl font-extrabold font-['Sora'] text-slate-900 uppercase tracking-tight">
                FROM SIALKOT WORKSHOP TO GLOBAL OEM PARTNER
              </h3>

              <p className="text-slate-600 font-['Inter'] text-sm leading-relaxed">
                The renowned industrial manufacturing hub of Sialkot, AIFRAN SPORTS specialized leather and glove craftsmanship workshop. Through investment in heavy-duty automated machinery, laser cutting and military-grade textiles, we have evolved into a Tier-1 OEM partner.
              </p>

              <p className="text-slate-600 font-['Inter'] text-sm leading-relaxed">
                65,000 sq ft facility produces combat gear, tactical uniforms, duty belts, and accessories trusted by defense forces, law enforcement agencies, and tactical apparel brands across 45+ countries.
              </p>

              {/* Timeline Header */}
              <div className="pt-4 border-t border-slate-100">
                <div className="text-xs font-mono font-bold uppercase text-slate-500 tracking-wider mb-3">
                  THE JOURNEY (1995 - TODAY)
                </div>

                {/* Horizontal Timeline Tabs Bar */}
                <div className="grid grid-cols-5 gap-1.5 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
                  {TIMELINE_DATA.map((milestone, idx) => {
                    const isActive = activeMilestoneIndex === idx;
                    return (
                      <button
                        key={milestone.year}
                        onClick={() => setActiveMilestoneIndex(idx)}
                        className={`py-2 px-1 rounded-lg text-center transition-all ${
                          isActive
                            ? 'bg-amber-600 text-white font-extrabold shadow-md scale-[1.02]'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 font-semibold'
                        }`}
                      >
                        <div className="text-xs sm:text-sm font-['Sora']">{milestone.year}</div>
                        <div className={`text-[9px] truncate hidden sm:block ${isActive ? 'text-amber-100' : 'text-slate-500'}`}>
                          {milestone.label}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Active Milestone Display Box */}
                <div className="mt-4 p-5 rounded-xl bg-slate-900 text-white space-y-2 border border-slate-800 relative overflow-hidden">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                      MILESTONE {activeMilestoneIndex + 1} OF {TIMELINE_DATA.length}
                    </span>
                    <span className="text-xs font-mono text-slate-400 font-bold">{currentMilestone.year}</span>
                  </div>

                  <h4 className="text-base font-extrabold font-['Sora'] text-white uppercase">
                    {currentMilestone.title}
                  </h4>

                  <p className="text-xs text-slate-300 font-['Inter'] leading-relaxed">
                    {currentMilestone.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Family-Owned Heritage Photo Card & Facility Stats */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"
                  alt="Sialkot Factory Assembly Line"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-white text-[10px] font-mono uppercase px-2.5 py-1 rounded border border-slate-700 font-bold tracking-wider">
                  FAMILY-OWNED HERITAGE
                </div>
              </div>

              <div className="p-4 bg-slate-900 text-slate-300 text-xs font-mono flex items-center justify-between border-t border-slate-800">
                <span className="flex items-center gap-1.5 text-slate-200 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Sialkot Factory Assembly Line
                </span>
                <span className="text-amber-400 uppercase">Active Production</span>
              </div>
            </div>

            {/* Stat Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Factory className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg font-extrabold font-['Sora'] text-slate-900 leading-none">
                    65,000 SQ FT
                  </div>
                  <div className="text-[11px] font-sans font-medium text-slate-500 uppercase mt-0.5">
                    MANUFACTURING FACILITY
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg font-extrabold font-['Sora'] text-slate-900 leading-none">
                    350+
                  </div>
                  <div className="text-[11px] font-sans font-medium text-slate-500 uppercase mt-0.5">
                    CRAFTSMEN & TAILORS
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
