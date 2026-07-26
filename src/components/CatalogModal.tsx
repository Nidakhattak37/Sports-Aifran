import React, { useState } from 'react';
import { X, Search, FileText, Download, ArrowRight, Shield } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/companyData';

interface CatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProductForQuote: (productName: string) => void;
}

export const CatalogModal: React.FC<CatalogModalProps> = ({
  isOpen,
  onClose,
  onSelectProductForQuote,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  if (!isOpen) return null;

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

  const filteredProducts = PRODUCTS_DATA.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#0B0B0B] border border-slate-800 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl text-white font-['Inter']">
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold font-['Sora'] text-white">
                AIFRAN SPORTS <span className="text-amber-500">Digital Catalogue</span>
              </h2>
              <p className="text-xs text-slate-400 font-mono">
                B2B OEM / ODM MASTER EQUIPMENT LISTING
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-6 border-b border-slate-800/80 bg-slate-950 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search catalog by keyword or material..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-['Manrope'] font-bold whitespace-nowrap transition-all uppercase ${
                  selectedCategory === cat
                    ? 'bg-amber-600 text-white'
                    : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Catalog Items Grid */}
        <div className="p-6 overflow-y-auto max-h-[60vh] grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 transition-all flex gap-4"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-24 h-24 rounded-lg object-cover bg-slate-950 shrink-0"
              />

              <div className="flex-1 flex flex-col justify-between space-y-1">
                <div>
                  <span className="text-[10px] font-mono text-amber-400 uppercase font-bold">
                    {p.category}
                  </span>
                  <h4 className="font-bold text-sm text-white font-['Sora'] line-clamp-1">{p.name}</h4>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{p.shortDescription}</p>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-slate-800">
                  <span className="text-[10px] font-mono text-slate-500 truncate max-w-[150px]">
                    {p.materials}
                  </span>
                  <button
                    onClick={() => {
                      onClose();
                      onSelectProductForQuote(p.name);
                    }}
                    className="px-3 py-1.5 rounded bg-amber-600 hover:bg-amber-500 text-white font-bold text-[11px] uppercase tracking-wider flex items-center gap-1 transition-colors"
                  >
                    <span>Quote</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/80 flex items-center justify-between text-xs font-mono text-slate-400">
          <span>{filteredProducts.length} Products Catalogued</span>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>ISO Quality Assured</span>
          </div>
        </div>
      </div>
    </div>
  );
};
