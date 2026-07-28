import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/923341114728"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with AIFRAN SPORTS"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:shadow-[0_0_30px_rgba(16,185,129,0.8)] transition-all duration-300 flex items-center justify-center group hover:scale-110"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-75 animate-ping"></span>
      <MessageCircle className="w-7 h-7 fill-white text-emerald-600 relative z-10 stroke-[1.5]" />
    </a>
  );
};
