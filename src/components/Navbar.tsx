import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, FileText, Phone, Mail } from 'lucide-react';

interface NavbarProps {
  onOpenCatalog: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCatalog }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro bar for quick B2B contacts */}
      <div className="bg-[#0B0B0B] text-slate-400 text-[11px] font-['Plus_Jakarta_Sans',sans-serif] border-b border-slate-800/80 py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              Global OEM/ODM B2B Manufacturing Partner
            </span>
            <span className="font-['JetBrains_Mono',monospace]">SIALKOT, PAKISTAN</span>
          </div>
          <div className="flex items-center space-x-5 font-['JetBrains_Mono',monospace]">
            <a href="tel:+923341114728" className="hover:text-amber-400 transition-colors flex items-center gap-1">
              <Phone className="w-3 h-3 text-amber-500" /> +92 334 111 4728
            </a>
            <a href="mailto:ali@aifransports.com" className="hover:text-amber-400 transition-colors flex items-center gap-1">
              <Mail className="w-3 h-3 text-amber-500" /> ali@aifransports.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`px-4 sm:px-8 py-3.5 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0B0B]/95 backdrop-blur-md shadow-2xl border-b border-slate-800/80'
            : 'bg-[#0B0B0B]/80 backdrop-blur-sm border-b border-slate-800/40'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 text-left group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-[#0B0B0B] font-extrabold text-lg shadow-md group-hover:scale-105 transition-transform">
              <Shield className="w-5 h-5 text-[#0B0B0B] stroke-[2.5]" />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-extrabold tracking-wider text-white font-['Outfit',sans-serif] block leading-none">
                AIFRAN <span className="text-amber-500">SPORTS</span>
              </span>
              <span className="text-[9px] text-amber-500 font-['JetBrains_Mono',monospace] tracking-widest uppercase block mt-0.5 font-bold">
                CUT • SEW • MANUFACTURE
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-6 font-['Outfit',sans-serif] text-xs font-bold uppercase tracking-wider text-slate-300">
            <button onClick={() => scrollToSection('about')} className="hover:text-amber-400 transition-colors cursor-pointer">
              ABOUT
            </button>
            <button onClick={() => scrollToSection('capabilities')} className="hover:text-amber-400 transition-colors cursor-pointer">
              CAPABILITIES
            </button>
            <button onClick={() => scrollToSection('products')} className="hover:text-amber-400 transition-colors cursor-pointer">
              PRODUCTS
            </button>
            <button onClick={() => scrollToSection('quality')} className="hover:text-amber-400 transition-colors cursor-pointer">
              QUALITY
            </button>
            <button onClick={() => scrollToSection('industries')} className="hover:text-amber-400 transition-colors cursor-pointer">
              INDUSTRIES
            </button>
            <button onClick={() => scrollToSection('alibaba-suppliers')} className="text-amber-400 hover:text-amber-300 transition-colors cursor-pointer flex items-center gap-1 font-extrabold">
              ALIBABA
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-amber-400 transition-colors cursor-pointer">
              CONTACT
            </button>
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={onOpenCatalog}
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-['Outfit',sans-serif] text-xs font-bold tracking-wide transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-amber-500" />
              <span>Catalog</span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2 rounded-xl bg-[#EA580C] hover:bg-amber-600 text-white font-['Outfit',sans-serif] text-xs font-extrabold tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(234,88,12,0.3)] hover:shadow-[0_0_20px_rgba(234,88,12,0.5)] cursor-pointer"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-800/80 bg-[#0B0B0B] rounded-b-xl px-4 pb-4 space-y-3 font-['Manrope'] text-xs font-semibold uppercase tracking-wider text-slate-200">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 hover:text-amber-400">
              About Us
            </button>
            <button onClick={() => scrollToSection('capabilities')} className="block w-full text-left py-2 hover:text-amber-400">
              Manufacturing Capabilities
            </button>
            <button onClick={() => scrollToSection('products')} className="block w-full text-left py-2 hover:text-amber-400">
              Tactical & Sports Products
            </button>
            <button onClick={() => scrollToSection('quality')} className="block w-full text-left py-2 hover:text-amber-400">
              Quality Process
            </button>
            <button onClick={() => scrollToSection('industries')} className="block w-full text-left py-2 hover:text-amber-400">
              Industries Served
            </button>
            <button onClick={() => scrollToSection('certifications')} className="block w-full text-left py-2 hover:text-amber-400">
              Certifications
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 hover:text-amber-400">
              Contact & RFQ
            </button>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenCatalog();
                }}
                className="w-full py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-center font-bold text-slate-200"
              >
                View Digital Catalog
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full py-2.5 rounded-lg bg-amber-600 text-center font-extrabold text-white uppercase"
              >
                Get a Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
