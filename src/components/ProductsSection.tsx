import React, { useState } from 'react';
import { PRODUCTS_DATA } from '../data/companyData';
import { ProductItem } from '../types';
import { Shield, ArrowRight, Layers } from 'lucide-react';

interface ProductsSectionProps {
  onSelectProductForQuote: (productName: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onSelectProductForQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Tactical Gloves',
    'Combat Uniforms',
    'Tactical Pants',
    'Duty Belts',
    'Headwear',
    'Backpacks',
    'Pouches',
    'Morale Patches',
    'K9 Equipment',
  ];

  const filteredProducts =
    selectedCategory === 'All'
      ? PRODUCTS_DATA
      : PRODUCTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="products" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5 text-amber-600" /> B2B PRODUCT CATALOGUE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Sora'] tracking-tight text-slate-900">
            Tactical & Sports <span className="text-amber-600">Equipment</span>
          </h2>
          <p className="text-slate-600 font-['Inter'] text-base leading-relaxed">
            High-performance gear crafted for military forces, law enforcement, and global OEM partners.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-['Manrope'] font-bold whitespace-nowrap transition-all uppercase tracking-wider ${
                selectedCategory === cat
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
            >
              {/* Product Image Container */}
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-amber-400 text-[10px] font-mono font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                  {product.category}
                </div>
              </div>

              {/* Product Details (Cleanly placed below the image) */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4 font-['Inter']">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold font-['Sora'] text-slate-900 group-hover:text-amber-600 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {product.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-3">
                  <div className="text-[11px] font-mono text-slate-500 flex items-start gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Materials:</strong> {product.materials}</span>
                  </div>

                  <button
                    onClick={() => onSelectProductForQuote(product.name)}
                    className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-amber-600 text-white font-['Manrope'] font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Request Quote</span>
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
