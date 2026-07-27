import React from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Target,
  Users,
  Award,
  TrendingUp,
  Globe,
  Shield,
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const cards = [
    {
      title: 'BATTLE TESTED QUALITY',
      description:
        'Every seam, thread, and rivet undergoes stress testing under extreme thermal and mechanical loads to guarantee field survival.',
      stat: '99.8%',
      statLabel: 'QC ACCEPTANCE RATE',
      icon: <ShieldCheck className="w-5 h-5 text-[#EA580C]" />,
      iconBg: 'bg-[#060a14] border border-slate-800/80',
    },
    {
      title: 'MISSION FOCUSED',
      description:
        'Customized technical solutions tailored precisely to government spec sheets, NATO requirements, and private label brand criteria.',
      stat: '28+',
      statLabel: 'YEARS INDUSTRY EXPERTISE',
      icon: <Target className="w-5 h-5 text-[#84A93C]" />,
      iconBg: 'bg-[#060a14] border border-slate-800/80',
    },
    {
      title: 'RELIABLE PARTNER',
      description:
        'Direct factory transparency with dedicated account managers, live production line updates, and strict IP protection agreements.',
      stat: '45+',
      statLabel: 'GLOBAL EXPORT DESTINATIONS',
      icon: <Users className="w-5 h-5 text-[#EA580C]" />,
      iconBg: 'bg-[#060a14] border border-slate-800/80',
    },
    {
      title: 'DURABLE BY DESIGN',
      description:
        'Sourcing certified materials from CORDURA®, YKK, Kevlar, and AustriAlpin to construct indestructible gear.',
      stat: '100%',
      statLabel: 'CERTIFIED RAW MATERIALS',
      icon: <Award className="w-5 h-5 text-[#84A93C]" />,
      iconBg: 'bg-[#060a14] border border-slate-800/80',
    },
    {
      title: 'SCALABLE PRODUCTION',
      description:
        'From 100-unit pilot sample batches to 100,000+ unit government procurement runs, our 65,000 sq ft plant delivers on schedule.',
      stat: '1.5M+',
      statLabel: 'ANNUAL UNIT CAPACITY',
      icon: <TrendingUp className="w-5 h-5 text-[#EA580C]" />,
      iconBg: 'bg-[#060a14] border border-slate-800/80',
    },
    {
      title: 'WORLDWIDE SHIPPING',
      description:
        'Integrated logistics handling customs clearance, door-to-door air freight, and container sea freight with real-time tracking.',
      stat: '100%',
      statLabel: 'ON-TIME SHIPPING TRACK',
      icon: <Globe className="w-5 h-5 text-[#84A93C]" />,
      iconBg: 'bg-[#060a14] border border-slate-800/80',
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-[#04070D] text-white border-b border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-amber-500 font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider shadow-sm max-w-full flex-wrap">
            <Shield className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>UNCOMPROMISING MANUFACTURING STANDARDS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-['Sora'] tracking-tight text-white uppercase break-words leading-tight">
            WHY CHOOSE <span className="text-[#84A93C]">AIFRAN SPORTS</span>
          </h2>

          <p className="text-slate-400 font-['Inter'] text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Built on three decades of trust, precision engineering, and dedicated OEM support for tactical brands worldwide.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-[#0A0F1D] border border-slate-800/80 hover:border-slate-700 rounded-3xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between space-y-8 group shadow-[0_10px_30px_rgba(0,0,0,0.7)] hover:shadow-[0_15px_40px_rgba(234,88,12,0.2)]"
            >
              <div className="space-y-4 sm:space-y-5">
                {/* Icon Box */}
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${card.iconBg}`}>
                  {card.icon}
                </div>

                {/* Card Title */}
                <h3 className="text-base sm:text-lg font-black font-['Sora'] text-white uppercase tracking-tight break-words">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm font-['Inter'] text-slate-400 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>

              {/* Stat Footer */}
              <div className="space-y-1 pt-2 border-t border-slate-800/60">
                <div className="text-2xl sm:text-4xl font-black font-['Sora'] text-[#EA580C] tracking-tight">
                  {card.stat}
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                  {card.statLabel}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

