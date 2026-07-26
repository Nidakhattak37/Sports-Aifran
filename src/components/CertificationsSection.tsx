import React from 'react';
import { CERTIFICATIONS_DATA } from '../data/companyData';
import { Award, CheckCircle2 } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-16 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-amber-600" /> GLOBAL COMPLIANCE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Sora'] tracking-tight text-slate-900">
            Factory <span className="text-amber-600">Certifications</span>
          </h2>
          <p className="text-slate-600 font-['Inter'] text-sm leading-relaxed">
            Internationally audited for social responsibility, workplace safety, and quality management systems.
          </p>
        </div>

        {/* Compact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.id}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-3 group font-['Inter']"
            >
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-lg bg-amber-100 text-amber-700">
                  <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                </div>
                <span className="text-[10px] font-mono font-extrabold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                  {cert.badgeText}
                </span>
              </div>

              <h3 className="text-base font-bold font-['Sora'] text-slate-900 group-hover:text-amber-600 transition-colors">
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
