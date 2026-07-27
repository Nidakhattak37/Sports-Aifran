import React, { useState } from 'react';
import { TIMELINE_DATA } from '../data/companyData';
import { MapPin, Tag, CheckCircle2, Award } from 'lucide-react';
import { motion } from 'motion/react';
import factoryAssemblyImg from '../assets/images/about_factory_line_1785148204676.jpg';

export const AboutSection: React.FC = () => {
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState<number>(0);

  const currentMilestone = TIMELINE_DATA[activeMilestoneIndex];

  return (
    <section id="about" className="py-16 sm:py-20 bg-white text-slate-900 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 text-slate-800 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-slate-200/80 shadow-xs max-w-full flex-wrap">
            <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>ESTABLISHED 1995 • SIALKOT, PAKISTAN</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-['Sora'] tracking-tight text-slate-900 uppercase break-words leading-tight">
            ABOUT <span className="text-[#84A93C]">AIFRAN SPORTS</span>
          </h2>

          <p className="text-slate-600 font-['Inter'] text-xs sm:text-base leading-relaxed">
            A three-decade legacy of precision stitching, military-grade textile innovation, and global OEM supply excellence.
          </p>
        </motion.div>

        {/* 2-Column Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Sialkot Workshop Story & Interactive Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Top Box: Sialkot Workshop Story */}
            <div className="bg-[#F8FAF9] p-5 sm:p-7 rounded-2xl border border-slate-200/90 shadow-md sm:shadow-lg shadow-slate-200/80 space-y-3.5">
              <div className="flex items-start gap-2 text-slate-900">
                <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <h3 className="text-base sm:text-xl font-extrabold font-['Sora'] uppercase tracking-tight leading-snug break-words">
                  FROM SIALKOT WORKSHOP TO GLOBAL OEM PARTNER
                </h3>
              </div>

              <p className="text-slate-600 font-['Inter'] text-xs sm:text-sm leading-relaxed">
                Rooted in the renowned industrial manufacturing hub of Sialkot, AIFRAN SPORTS began as a specialized leather and glove craftsmanship workshop. Through continuous investment in heavy-duty automated machinery, laser cutting systems, and military-grade textiles, we have evolved into a Tier-1 OEM manufacturing partner.
              </p>

              <p className="text-slate-600 font-['Inter'] text-xs sm:text-sm leading-relaxed">
                Today, our 65,000 sq ft facility produces combat gear, tactical uniforms, duty belts, and ballistic nylon accessories trusted by defense forces, law enforcement agencies, and international tactical apparel brands across 45+ countries.
              </p>
            </div>

            {/* Bottom Section: Timeline & Milestone Tabs */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-center gap-2 text-amber-600 font-mono font-extrabold text-xs uppercase tracking-wider">
                <Tag className="w-3.5 h-3.5 text-amber-600" />
                <span>OUR MILESTONE JOURNEY (1995 - TODAY)</span>
              </div>

              {/* 5 Horizontal Tabs */}
              <div className="grid grid-cols-5 gap-1 sm:gap-1.5 bg-slate-100 p-1.5 rounded-xl border border-slate-200/80 overflow-x-auto">
                {TIMELINE_DATA.map((milestone, idx) => {
                  const isActive = activeMilestoneIndex === idx;
                  return (
                    <button
                      key={milestone.year}
                      onClick={() => setActiveMilestoneIndex(idx)}
                      className={`py-2 px-1 rounded-lg text-center transition-all ${
                        isActive
                          ? 'bg-[#EA580C] text-white font-extrabold shadow-sm scale-[1.02]'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 font-medium'
                      }`}
                    >
                      <div className="text-xs sm:text-sm font-['Sora'] font-extrabold">{milestone.year}</div>
                      <div className={`text-[9px] truncate hidden sm:block ${isActive ? 'text-amber-100 font-semibold' : 'text-slate-500'}`}>
                        {milestone.label}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Milestone Card Box */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAF9] border border-slate-200/90 shadow-md shadow-slate-200/60 space-y-2.5">
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <span className="text-xs font-mono font-extrabold uppercase tracking-wider text-[#EA580C]">
                    YEAR {currentMilestone.year}
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-slate-200/70 text-slate-700 border border-slate-300/60">
                    MILESTONE {activeMilestoneIndex + 1} OF {TIMELINE_DATA.length}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-extrabold font-['Sora'] text-slate-900 uppercase tracking-tight break-words">
                  {currentMilestone.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 font-['Inter'] leading-relaxed">
                  {currentMilestone.description}
                </p>

                {currentMilestone.bulletPoint && (
                  <div className="pt-2 flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{currentMilestone.bulletPoint}</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Family-Owned Heritage Photo Card & Stat Cards */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 space-y-5"
          >
            {/* Main Factory Image Card */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-md sm:shadow-lg shadow-slate-200/80 group relative">
              <div className="relative h-56 sm:h-72 overflow-hidden bg-slate-100">
                <img
                  src={factoryAssemblyImg}
                  alt="Sialkot Factory Assembly Line"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Bottom Card */}
              <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between gap-2">
                <div>
                  <h4 className="text-xs font-extrabold font-['Sora'] text-slate-900 uppercase tracking-wider">
                    FAMILY-OWNED HERITAGE
                  </h4>
                  <div className="text-[11px] font-mono text-slate-500 flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                    <span className="break-words">Sialkot Assembly Line • Active Production</span>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-amber-50 text-amber-600 border border-amber-200/60 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Stat Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#F8FAF9] p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-md shadow-slate-200/70 text-center space-y-1">
                <div className="text-lg sm:text-2xl font-black font-['Sora'] text-[#EA580C] break-words">
                  65,000 SQ FT
                </div>
                <div className="text-[9px] sm:text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                  MANUFACTURING FACILITY
                </div>
              </div>

              <div className="bg-[#F8FAF9] p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-md shadow-slate-200/70 text-center space-y-1">
                <div className="text-lg sm:text-2xl font-black font-['Sora'] text-[#84A93C] break-words">
                  350+ SKILLED
                </div>
                <div className="text-[9px] sm:text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                  CRAFTSMEN & ENGINEERS
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

