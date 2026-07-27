import React from 'react';
import { CERTIFICATIONS_DATA } from '../data/companyData';
import { Award } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider border border-slate-300">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            INTERNATIONAL AUDITED COMPLIANCE
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Sora'] tracking-tight text-slate-900 uppercase">
            FACTORY <span className="text-amber-600">CERTIFICATIONS</span>
          </h2>

          <p className="text-slate-600 font-['Inter'] text-sm sm:text-base leading-relaxed">
            Fully compliant with ethical workforce guidelines, environmental safety regulations, and global defense audit frameworks.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.id}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all space-y-4 group font-['Inter']"
            >
              <div>
                <div className="p-3 rounded-xl bg-amber-50 text-amber-600 border border-amber-200 w-fit">
                  <Award className="w-6 h-6 stroke-[2]" />
                </div>
              </div>

              <h3 className="text-base font-extrabold font-['Sora'] text-slate-900 uppercase group-hover:text-amber-600 transition-colors">
                {cert.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
