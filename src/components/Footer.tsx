import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, Linkedin, Instagram } from 'lucide-react';
import { AifranLogo } from './AifranLogo';

export const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#04070D] text-slate-400 font-['Plus_Jakarta_Sans',sans-serif] text-xs border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-5">
            <AifranLogo className="h-10 w-auto text-white" variant="full" showTagline={true} accentColor="#84A93C" />

            <p className="text-slate-400 leading-relaxed text-xs max-w-md font-['Plus_Jakarta_Sans',sans-serif]">
              A premier B2B OEM manufacturing supplier of tactical gear, combat apparel, military gloves, and duty equipment supplying international defense contractors and private labels worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-[#0A0F1D] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#EA580C] hover:border-slate-700 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-[#0A0F1D] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#EA580C] hover:border-slate-700 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-4 font-['Plus_Jakarta_Sans',sans-serif]">
            <h4 className="text-[#84A93C] font-bold text-xs uppercase tracking-widest font-['JetBrains_Mono',monospace]">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Company Story
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('capabilities')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Manufacturing Capabilities
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Tactical Product Catalog
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('quality')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Quality Assurance Protocol
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('industries')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Industries We Serve
                </button>
              </li>
              <li>
                <a href="https://aifransports.trustpass.alibaba.com/company_profile.html" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 text-amber-500/90 font-medium transition-colors text-left inline-flex items-center gap-1">
                  Alibaba: Aifran Sports ↗
                </a>
              </li>
              <li>
                <a href="https://aifransportinggoods.trustpass.alibaba.com/company_profile.html" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 text-amber-500/90 font-medium transition-colors text-left inline-flex items-center gap-1">
                  Alibaba: Aifran Sporting Goods ↗
                </a>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Request B2B RFQ
                </button>
              </li>
            </ul>
          </div>

          {/* Headquarters & Desk */}
          <div className="lg:col-span-4 space-y-4 font-['Plus_Jakarta_Sans',sans-serif]">
            <h4 className="text-[#84A93C] font-bold text-xs uppercase tracking-widest font-['JetBrains_Mono',monospace]">
              HEADQUARTERS & DESKS
            </h4>
            
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-snug font-['Plus_Jakarta_Sans',sans-serif]">
                  <strong className="text-white block font-['JetBrains_Mono',monospace] text-[10px] text-slate-400">PAKISTAN HQ:</strong>
                  Behind Fazal Market, Mujahid Road, Sialkot 51310, Pakistan
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-snug font-['Plus_Jakarta_Sans',sans-serif]">
                  <strong className="text-white block font-['JetBrains_Mono',monospace] text-[10px] text-slate-400">USA OFFICE:</strong>
                  7116, Avenue X, Brooklyn, New York 11234, USA
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#EA580C] shrink-0" />
                <a
                  href="mailto:ali@aifransports.com"
                  className="text-white font-semibold font-['JetBrains_Mono',monospace] hover:text-[#EA580C] transition-colors"
                >
                  ali@aifransports.com
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <a
                    href="tel:+923341114728"
                    className="text-white font-semibold font-['JetBrains_Mono',monospace] hover:text-[#EA580C] transition-colors block"
                  >
                    PK: +92 334 111 4728
                  </a>
                  <a
                    href="tel:+19179096492"
                    className="text-slate-300 font-semibold font-['JetBrains_Mono',monospace] hover:text-[#EA580C] transition-colors block"
                  >
                    USA: +1 917 909 6492
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px] font-['JetBrains_Mono',monospace]">
          <div>
            © 1995–2026 AIFRAN SPORTS LLC. All Rights Reserved.
          </div>

          <div>
            Developed by{' '}
            <a
              href="https://twofolds.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors font-bold underline inline-flex items-center gap-1"
            >
              twofolds.tech
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
