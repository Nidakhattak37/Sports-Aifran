import React from 'react';
import { ExternalLink, ShieldCheck, Star, Award, Building2, ArrowUpRight } from 'lucide-react';

export const AlibabaSection: React.FC = () => {
  const alibabaStores = [
    {
      id: 'aifran-sports',
      name: 'Aifran Sports',
      subtitle: 'Primary OEM Tactical & Combat Gear Storefront',
      url: 'https://aifransports.trustpass.alibaba.com/company_profile.html',
      badge: 'VERIFIED GOLD SUPPLIER',
      yearsActive: '10+ Years On Alibaba',
      focus: 'Combat Gloves, Tactical Gloves, Duty Gear & Custom Equipment',
      highlights: [
        'Direct Factory Verification & On-Site Audit',
        'Trade Assurance Buyer Protection',
        'OEM / ODM Customization Supported',
        'Rapid Sample Dispatch System',
      ],
      btnBg: 'bg-[#FF6A00] hover:bg-[#e55f00]',
    },
    {
      id: 'aifran-sporting-goods',
      name: 'Aifran Sporting Goods',
      subtitle: 'Tactical Garments & Apparel Storefront',
      url: 'https://aifransportinggoods.trustpass.alibaba.com/company_profile.html',
      badge: 'VERIFIED GOLD SUPPLIER',
      yearsActive: 'Gold Member Store',
      focus: 'Tactical Garments, Uniforms, Outerwear & Accessories',
      highlights: [
        'Certified Factory Capacity Inspection',
        '100% On-Time Shipment Guarantee',
        'Tech-Pack & Spec-Driven Production',
        'Global Express B2B Shipping',
      ],
      btnBg: 'bg-[#EA580C] hover:bg-[#d94e07]',
    },
  ];

  return (
    <section id="alibaba-suppliers" className="py-16 sm:py-20 bg-[#F4F6F8] text-slate-900 relative overflow-hidden border-t border-b border-slate-200/80">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 font-['JetBrains_Mono',monospace] text-xs font-extrabold uppercase tracking-wider shadow-xs">
            <Star className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
            <span>VERIFIED ALIBABA GOLD SUPPLIER</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-['Outfit',sans-serif] tracking-tight text-slate-900 uppercase">
            OUR <span className="text-[#EA580C]">ALIBABA STOREFRONTS</span>
          </h2>

          <p className="text-slate-600 font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            AIFRAN SPORTS maintains two verified Gold Supplier accounts on Alibaba. Access our official company profiles, audited factory credentials, and order with Trade Assurance protection.
          </p>
        </div>

        {/* 2 Storefront Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {alibabaStores.map((store) => (
            <div
              key={store.id}
              className="bg-white border border-slate-200/90 hover:border-amber-500/60 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <div className="space-y-6">
                {/* Card Top Pill & Badges */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-['JetBrains_Mono',monospace] font-extrabold text-[#FF6A00] tracking-wider uppercase">
                      {store.badge}
                    </span>
                  </div>
                  <span className="text-[10px] font-['JetBrains_Mono',monospace] font-extrabold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {store.yearsActive}
                  </span>
                </div>

                {/* Store Header */}
                <div className="space-y-2 border-b border-slate-200/80 pb-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black font-['Outfit',sans-serif] text-slate-900 tracking-tight group-hover:text-[#EA580C] transition-colors">
                        {store.name}
                      </h3>
                      <p className="text-xs font-['Plus_Jakarta_Sans',sans-serif] text-slate-500 mt-0.5 font-medium">
                        {store.subtitle}
                      </p>
                    </div>
                    <div className="p-3 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-[#EA580C] shrink-0">
                      <Building2 className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Store Focus & Highlights */}
                <div className="space-y-4">
                  <div>
                    <div className="text-[10px] font-['JetBrains_Mono',monospace] font-extrabold uppercase tracking-widest text-slate-500 mb-1">
                      PRODUCTION FOCUS
                    </div>
                    <div className="text-xs sm:text-sm font-semibold font-['Plus_Jakarta_Sans',sans-serif] text-slate-800 bg-orange-50 border border-orange-200/70 p-3.5 rounded-2xl">
                      {store.focus}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-[10px] font-['JetBrains_Mono',monospace] font-extrabold uppercase tracking-widest text-slate-500">
                      VERIFIED STOREFRONT HIGHLIGHTS
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {store.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-xs font-['Plus_Jakarta_Sans',sans-serif] text-slate-700 bg-slate-50 border border-slate-200/80 p-2.5 rounded-xl font-medium"
                        >
                          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span className="leading-tight">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-200/80">
                <a
                  href={store.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 px-6 rounded-2xl ${store.btnBg} text-white font-['Outfit',sans-serif] font-extrabold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 group-hover:scale-[1.01] cursor-pointer`}
                >
                  <span>Visit Verified Alibaba Profile</span>
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Banner Bar */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-orange-500/10 text-[#EA580C] border border-orange-500/20 shrink-0 hidden sm:block">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold font-['Outfit',sans-serif] text-slate-900">
                Need customized OEM tech packs or instant bulk quotations?
              </div>
              <div className="text-xs font-['Plus_Jakarta_Sans',sans-serif] text-slate-600 font-medium">
                You can reach us through either Alibaba storefront or request a direct RFQ right here on our website.
              </div>
            </div>
          </div>
          <a
            href="https://aifransports.trustpass.alibaba.com/company_profile.html"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-['Outfit',sans-serif] font-bold uppercase tracking-wider transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <span>Alibaba TrustPass</span>
            <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
