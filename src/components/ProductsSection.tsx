import React, { useState } from 'react';
import { PRODUCTS_DATA } from '../data/companyData';
import { Layers, ArrowRight, FileText } from 'lucide-react';

interface ProductsSectionProps {
  onSelectProductForQuote: (productName: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onSelectProductForQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = [
    'ALL',
    'Tactical Gloves',
    'Combat Uniforms',
    'Tactical Pants',
    'Duty Belts',
    'Headwear',
    'Backpacks',
    'Pouches',
    'Morale Patches',
  ];

  const filteredProducts =
    selectedCategory === 'ALL'
      ? PRODUCTS_DATA
      : PRODUCTS_DATA.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="products" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider border border-slate-300">
            <FileText className="w-3.5 h-3.5 text-amber-600" />
            OEM B2B CATALOGUE & SPEC SHEETS
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Sora'] tracking-tight text-slate-900 uppercase">
            TACTICAL <span className="text-amber-600">PRODUCTS</span>
          </h2>

          <p className="text-slate-600 font-['Inter'] text-sm sm:text-base leading-relaxed">
            Field-tested combat equipment manufactured under strict ISO and MIL-SPEC quality controls for global defense and private brands.
          </p>
        </div>

        {/* Category Filter Pills (matching video 00:30 - 00:38) */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-['Manrope'] font-extrabold uppercase tracking-wider whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-600 text-white shadow-md scale-105'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat === 'ALL' ? 'ALL PRODUCTS' : cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-slate-900 rounded-2xl border border-slate-800 shadow-xl overflow-hidden flex flex-col group transition-all duration-300 hover:border-amber-500/50 hover:-translate-y-1"
            >
              {/* Image Container with Dark Gradient Overlay */}
              <div className="relative h-64 overflow-hidden bg-slate-950">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                <div className="absolute top-3 left-3 bg-amber-500 text-[#0B0B0B] text-[10px] font-mono font-extrabold px-2.5 py-1 rounded uppercase tracking-wider shadow">
                  {product.specCode || product.category}
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
                  <h3 className="text-base font-extrabold font-['Sora'] uppercase tracking-tight text-white group-hover:text-amber-400 transition-colors">
                    {product.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4 font-['Inter'] text-slate-300 bg-slate-900">
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {product.shortDescription}
                </p>

                {/* Specs & Material Footer */}
                <div className="pt-3 border-t border-slate-800 space-y-3 font-mono text-xs">
                  <div className="text-[11px] text-slate-400 flex items-start gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                    <span className="line-clamp-2"><strong>SPEC:</strong> {product.materials}</span>
                  </div>

                  <button
                    onClick={() => onSelectProductForQuote(product.name)}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-['Manrope'] font-extrabold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 group/btn"
                  >
                    <span>REQUEST RFQ</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
