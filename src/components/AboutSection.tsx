import React from 'react';
import { TIMELINE_DATA } from '../data/companyData';
import { Shield, Building2, Globe2, Award, Check } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-amber-600" /> HERITAGE & MANUFACTURING EXCELLENCE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Sora'] tracking-tight text-slate-900">
            About <span className="text-amber-600">AIFRAN SPORTS</span>
          </h2>
          <p className="text-slate-600 font-['Inter'] text-base leading-relaxed">
            Crafting premium tactical gear, combat apparel, and OEM sportswear solutions from Sialkot to world-class defense forces and international brands.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Story & Key Strengths */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-2xl font-bold font-['Sora'] text-slate-900">
                Our Sialkot Heritage & Global Footprint
              </h3>
              <p className="text-slate-600 font-['Inter'] text-sm leading-relaxed">
                Founded in 1995 in Sialkot, Pakistan—the world’s premier sporting goods and leather craftsmanship hub—AIFRAN SPORTS has evolved from a specialized glove workshop into a modern 65,000+ sq. ft. OEM/ODM manufacturing facility.
              </p>
              <p className="text-slate-600 font-['Inter'] text-sm leading-relaxed">
                We combine traditional artisanal craftsmanship with state-of-the-art automated laser cutting, CNC mold making, and seam-sealing technology. Today, we proudly serve military organizations, law enforcement agencies, private security firms, and leading international retail brands across 45+ countries.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 font-['Manrope']">
                <div className="flex items-start gap-2.5">
                  <div className="p-1.5 rounded bg-emerald-100 text-emerald-700">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-900 uppercase">65,000 SQ FT</h4>
                    <span className="text-xs text-slate-500">Production Facility</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-1.5 rounded bg-amber-100 text-amber-700">
                    <Globe2 className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-900 uppercase">45+ COUNTRIES</h4>
                    <span className="text-xs text-slate-500">Worldwide Exports</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sialkot Facility Assembly Photo */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"
                alt="AIFRAN SPORTS Sialkot Assembly Facility"
                className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs font-mono uppercase text-amber-400 font-bold block">SIALKOT MANUFACTURING HQ</span>
                  <p className="text-sm font-semibold text-slate-200">State-of-the-art cutting, stitching, and quality control lines.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline */}
          <div className="lg:col-span-6 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-xl font-bold font-['Sora'] text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-600" /> Timeline & Expansion Journey
            </h3>

            <div className="relative pl-6 border-l-2 border-amber-500/40 space-y-8 font-['Inter']">
              {TIMELINE_DATA.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Bullet Marker */}
                  <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-amber-500 border-2 border-white shadow group-hover:scale-125 transition-transform"></div>

                  <span className="text-xs font-mono font-extrabold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200 inline-block mb-1">
                    {item.year}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 font-['Sora']">{item.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
