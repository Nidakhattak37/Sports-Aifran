import React, { useState } from 'react';
import { QUALITY_STEPS } from '../data/companyData';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const QualityProcess: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<number>(1);
  const activeStep = QUALITY_STEPS.find((s) => s.id === activeStepId) || QUALITY_STEPS[0];

  return (
    <section id="quality" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" /> ZERO DEFECT DIRECTIVE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Sora'] tracking-tight text-slate-900">
            Six-Stage <span className="text-amber-600">Quality Process</span>
          </h2>
          <p className="text-slate-600 font-['Inter'] text-base leading-relaxed">
            Every production lot undergoes rigorous multi-tier inspection protocols before global dispatch.
          </p>
        </div>

        {/* 2-Column Interface: Left Vertical Phase Selection Buttons, Right Phase Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Vertical Phase Selection Buttons */}
          <div className="lg:col-span-5 space-y-2.5">
            {QUALITY_STEPS.map((step) => {
              const isSelected = step.id === activeStepId;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStepId(step.id)}
                  className={`w-full p-4 rounded-xl border text-left transition-all duration-300 flex items-center justify-between font-['Manrope'] ${
                    isSelected
                      ? 'bg-amber-600 text-white border-amber-600 shadow-md scale-[1.02]'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-mono font-extrabold px-2 py-0.5 rounded ${
                        isSelected ? 'bg-amber-700 text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {step.stageName}
                    </span>
                    <span className="font-bold text-sm font-['Sora']">{step.title}</span>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'translate-x-1 text-white' : 'text-slate-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Phase Audit Card */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-200 shadow-md space-y-6 font-['Inter']">
            <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-widest block">
                  INSPECTION PHASE {activeStep.id} OF 6
                </span>
                <h3 className="text-2xl font-bold font-['Sora'] text-slate-900 mt-1">{activeStep.title}</h3>
              </div>

              <div className="px-3 py-1 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold uppercase">
                VERIFIED PASS
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              {activeStep.description}
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase block">PRIMARY CHECKPOINT</span>
              <div className="text-sm font-bold text-slate-900 flex items-center gap-2 font-['Sora']">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{activeStep.checkpoint}</span>
              </div>
            </div>

            {/* Audit Protocol Checklist */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono font-bold text-slate-900 uppercase">AUDIT VERIFICATION PROTOCOLS:</h4>
              <ul className="space-y-2">
                {activeStep.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5"></span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
