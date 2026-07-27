import React from 'react';
import { Shield, Mail, Phone, MapPin, ExternalLink, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#04070D] text-slate-400 font-['Inter'] text-xs border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0A0F1D] border border-slate-800 flex items-center justify-center text-[#EA580C] shadow-md">
                <Shield className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-wider text-white font-['Sora'] block leading-none">
                  AIFRAN <span className="text-[#84A93C]">SPORTS</span>
                </span>
                <span className="text-[9px] text-slate-400 font-mono tracking-widest uppercase block mt-1 font-bold">
                  CUT • SEW • MANUFACTURE
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs max-w-md font-['Inter']">
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
          <div className="lg:col-span-3 space-y-4 font-mono">
            <h4 className="text-[#84A93C] font-bold text-xs uppercase tracking-widest font-mono">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors text-left">
                  Company Story
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('capabilities')} className="hover:text-white transition-colors text-left">
                  Manufacturing Capabilities
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products')} className="hover:text-white transition-colors text-left">
                  Tactical Product Catalog
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('quality')} className="hover:text-white transition-colors text-left">
                  Quality Assurance Protocol
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('industries')} className="hover:text-white transition-colors text-left">
                  Industries We Serve
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors text-left">
                  Request B2B RFQ
                </button>
              </li>
            </ul>
          </div>

          {/* Headquarters & Desk */}
          <div className="lg:col-span-4 space-y-4 font-mono">
            <h4 className="text-[#84A93C] font-bold text-xs uppercase tracking-widest font-mono">
              HEADQUARTERS & DESK
            </h4>
            
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-snug">
                  Plot 42-A, Small Industrial Estate #2, Sialkot 51310, Punjab, Pakistan
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#EA580C] shrink-0" />
                <a
                  href="mailto:aifransportsllc@gmail.com"
                  className="text-white font-bold hover:text-[#EA580C] transition-colors"
                >
                  aifransportsllc@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#EA580C] shrink-0" />
                <a
                  href="tel:+923008615422"
                  className="text-white font-bold hover:text-[#EA580C] transition-colors"
                >
                  +92 300 861 5422
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px] font-mono">
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
