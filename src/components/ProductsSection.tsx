import React, { useState } from 'react';
import { PRODUCTS_DATA } from '../data/companyData';
import { Search, SlidersHorizontal, ArrowRight } from 'lucide-react';

interface ProductsSectionProps {
  onSelectProductForQuote: (productName: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onSelectProductForQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

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
    'K9 Equipment',
  ];

  const filteredProducts = PRODUCTS_DATA.filter((p) => {
    const matchesCategory =
      selectedCategory === 'ALL' || p.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      searchQuery === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.materials.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.specCode && p.specCode.toLowerCase().includes(searchQuery.toLowerCase())) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-16 sm:py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Search Bar & Result Count Row (matches screenshot) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
          {/* Search Input Box */}
          <div className="relative w-full sm:w-80 lg:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search products, materials, MIL specs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200/90 rounded-xl text-xs font-['Inter'] text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 shadow-xs"
            />
          </div>

          {/* Showing Count */}
          <div className="flex items-center gap-2 text-[11px] font-mono font-extrabold uppercase tracking-wider text-slate-600 self-end sm:self-auto">
            <SlidersHorizontal className="w-3.5 h-3.5 text-amber-600" />
            <span>SHOWING {filteredProducts.length} OEM PRODUCT LINES</span>
          </div>
        </div>

        {/* Category Filter Pills (matching screenshot) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory.toLowerCase() === cat.toLowerCase();
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-['Manrope'] font-extrabold uppercase tracking-wider whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#EA580C] text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200/90 hover:bg-slate-100'
                }`}
              >
                {cat === 'ALL' ? 'ALL' : cat.toUpperCase()}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid (matching screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Image Container with Title overlayed at bottom */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

                <div className="absolute top-3 left-3 bg-amber-600 text-white text-[10px] font-mono font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-xs">
                  {product.specCode || product.category}
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-base sm:text-lg font-black font-['Sora'] uppercase tracking-tight text-white leading-tight drop-shadow-sm">
                    {product.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4 font-['Inter'] bg-white">
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {product.shortDescription}
                </p>

                {/* Card Footer Button */}
                <div className="pt-3 border-t border-slate-100 font-mono text-xs">
                  <button
                    onClick={() => onSelectProductForQuote(product.name)}
                    className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-['Manrope'] font-extrabold text-xs uppercase tracking-wider transition-all shadow-xs flex items-center justify-center gap-2 group/btn"
                  >
                    <span>REQUEST RFQ</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform text-amber-400" />
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
