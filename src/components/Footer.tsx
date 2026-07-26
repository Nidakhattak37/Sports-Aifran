import React from 'react';
import { Shield, Mail, Phone, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0B0B] text-slate-400 font-['Inter'] text-xs border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-[#0B0B0B] font-extrabold text-lg shadow-md">
                <Shield className="w-5 h-5 text-[#0B0B0B] stroke-[2.5]" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-wider text-white font-['Sora'] block leading-none">
                  AIFRAN<span className="text-amber-500">.</span>SPORTS
                </span>
                <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase block mt-0.5">
                  The international sports factory
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs max-w-md">
              AIFRAN SPORTS is a trusted B2B OEM / ODM tactical and athletic equipment manufacturer supplying defense forces, security organizations, and international apparel brands worldwide.
            </p>

            <div className="flex flex-col gap-1.5 font-['Manrope'] text-xs text-slate-300">
              <a href="tel:+923008615422" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-amber-500" /> +92 300 861 5422
              </a>
              <a href="mailto:aifransportsllc@gmail.com" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-amber-500" /> aifransportsllc@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3 font-['Manrope']">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-['Sora']">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-amber-400 transition-colors">
                  About Us & Heritage
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('capabilities')} className="hover:text-amber-400 transition-colors">
                  Manufacturing Capabilities
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products')} className="hover:text-amber-400 transition-colors">
                  Tactical & Sports Products
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('quality')} className="hover:text-amber-400 transition-colors">
                  Six-Stage Quality Control
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('industries')} className="hover:text-amber-400 transition-colors">
                  Industries We Serve
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('certifications')} className="hover:text-amber-400 transition-colors">
                  Factory Certifications
                </button>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="lg:col-span-4 space-y-3 font-['Manrope']">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-['Sora']">
              Product Categories
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
              <span>• Tactical Gloves</span>
              <span>• Combat Uniforms</span>
              <span>• Tactical Pants</span>
              <span>• Duty Belts</span>
              <span>• Headwear</span>
              <span>• Backpacks & Gear</span>
              <span>• Modular Pouches</span>
              <span>• Morale Patches</span>
              <span>• K9 Equipment</span>
              <span>• Custom OEM / ODM</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar with exact required copyright & attribution */}
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
              className="text-amber-400 hover:text-amber-300 transition-colors underline inline-flex items-center gap-0.5"
            >
              twofolds.tech <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
