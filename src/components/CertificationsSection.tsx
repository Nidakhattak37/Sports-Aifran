import React from 'react';
import { CERTIFICATIONS_DATA } from '../data/companyData';
import { Award } from 'lucide-react';
import { motion } from 'motion/react';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-16 sm:py-20 bg-slate-50 text-slate-900 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 text-slate-800 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-slate-300 shadow-xs max-w-full flex-wrap">
            <Award className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>INTERNATIONAL AUDITED COMPLIANCE</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-['Sora'] tracking-tight text-slate-900 uppercase break-words leading-tight">
            FACTORY <span className="text-amber-600">CERTIFICATIONS</span>
          </h2>

          <p className="text-slate-600 font-['Inter'] text-xs sm:text-base leading-relaxed">
            Fully compliant with ethical workforce guidelines, environmental safety regulations, and global defense audit frameworks.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-md sm:shadow-lg shadow-slate-200/80 hover:shadow-xl transition-all space-y-4 group font-['Inter']"
            >
              <div>
                <div className="p-3 rounded-xl bg-amber-50 text-amber-600 border border-amber-200 w-fit">
                  <Award className="w-6 h-6 stroke-[2]" />
                </div>
              </div>

              <h3 className="text-sm sm:text-base font-extrabold font-['Sora'] text-slate-900 uppercase group-hover:text-amber-600 transition-colors break-words">
                {cert.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

