import React, { useState } from 'react';
import { QUALITY_STEPS } from '../data/companyData';
import { CheckCircle2, ShieldCheck, ChevronLeft, ChevronRight, Send } from 'lucide-react';

export const QualityProcess: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<number>(3); // Default Phase 03 as in video

  const activeStep = QUALITY_STEPS.find((s) => s.id === activeStepId) || QUALITY_STEPS[2];

  const handlePrev = () => {
    setActiveStepId((prev) => (prev > 1 ? prev - 1 : 6));
  };

  const handleNext = () => {
    setActiveStepId((prev) => (prev < 6 ? prev + 1 : 1));
  };

  const handleInquireSpecs = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="quality" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider border border-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            SIX-STAGE ZERO-DEFECT QUALITY SYSTEM
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Sora'] tracking-tight text-slate-900 uppercase">
            QUALITY <span className="text-amber-600">PROCESS</span>
          </h2>

          <p className="text-slate-600 font-['Inter'] text-sm sm:text-base leading-relaxed">
            Select a phase on the left to inspect our military-grade quality assurance protocols and test standards.
          </p>
        </div>

        {/* 2-Column Interface: Left Vertical Phase Buttons, Right Phase Inspection Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Vertical Selection List */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center justify-between px-2 mb-1">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">SELECT PHASE</span>
              <span className="text-xs font-mono font-extrabold text-amber-600 bg-amber-100 px-2.5 py-0.5 rounded border border-amber-300">
                ACTIVE: 0{activeStepId} / 06
              </span>
            </div>

            {QUALITY_STEPS.map((step) => {
              const isSelected = step.id === activeStepId;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStepId(step.id)}
                  className={`w-full p-4 rounded-xl border text-left transition-all duration-300 flex items-center justify-between font-['Sora'] uppercase tracking-wide ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-lg scale-[1.02]'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-mono font-extrabold ${isSelected ? 'text-amber-400' : 'text-slate-500'}`}>
                      0{step.id}
                    </span>
                    <span className="font-bold text-sm">{step.title}</span>
                  </div>

                  <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Phase Audit Card (matching video 00:43 - 00:56) */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md space-y-6 font-['Inter'] relative">
            {/* Top Phase Badge & Title */}
            <div className="space-y-2 border-b border-slate-100 pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 text-amber-800 border border-amber-200 font-mono text-xs font-extrabold uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                PHASE 0{activeStep.id} AUDIT SPECIFICATION
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-['Sora'] text-slate-900 uppercase">
                {activeStep.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                {activeStep.description}
              </p>
            </div>

            {/* Mandatory Verification Checkpoints Grid */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block">
                MANDATORY VERIFICATION CHECKPOINTS:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {activeStep.details.map((detail, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-medium flex items-center gap-2.5 shadow-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination & RFQ Action Bar */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 font-mono text-xs font-bold">
                <button
                  onClick={handlePrev}
                  className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 flex items-center gap-1 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" /> PREVIOUS
                </button>

                <button
                  onClick={handleNext}
                  className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 flex items-center gap-1 transition-colors"
                >
                  NEXT <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={handleInquireSpecs}
                className="px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-['Manrope'] font-extrabold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>INQUIRE PHASE 0{activeStep.id} SPECS</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
