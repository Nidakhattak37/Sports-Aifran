import React from 'react';
import { TESTIMONIALS_DATA } from '../data/companyData';
import { Star, Quote, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#0B0B0B] text-white border-b border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-amber-500 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-sm max-w-full flex-wrap">
            <MessageSquare className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>CLIENT ENDORSEMENTS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-['Sora'] tracking-tight text-white uppercase break-words leading-tight">
            WHAT OUR PARTNERS <span className="text-amber-500">SAY</span>
          </h2>
          <p className="text-slate-400 font-['Inter'] text-xs sm:text-base leading-relaxed">
            Feedback from defense procurement officers, law enforcement commanders, and global tactical apparel retailers.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-slate-900/90 border border-slate-800/80 hover:border-amber-500/50 p-6 sm:p-8 rounded-2xl transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_15px_35px_rgba(234,88,12,0.2)] flex flex-col justify-between space-y-6 relative group"
            >
              <Quote className="w-10 h-10 text-amber-500/20 absolute top-6 right-6 pointer-events-none group-hover:text-amber-500/30 transition-colors" />

              <div className="space-y-4 relative z-10">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                <p className="text-slate-200 font-['Inter'] text-sm sm:text-lg leading-relaxed italic break-words">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 font-['Manrope']">
                <h4 className="font-bold text-white text-sm sm:text-base font-['Sora'] uppercase break-words">{t.author}</h4>
                <p className="text-xs font-mono text-amber-400 uppercase tracking-wide">{t.organization}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

