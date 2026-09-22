import React from 'react';
import { trackConversion } from '../services/tracker';
import { OFFICIAL_CONTACT, getWhatsAppLink } from '../data/contact';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const handleClick = () => {
    trackConversion('whatsapp_direct', 'Floating WhatsApp Button Click');
    const message = "Bonjour Kevin Chris, je visite votre site et je souhaite échanger directement avec vous ou votre équipe.";
    window.open(getWhatsAppLink(message), '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 group">
      {/* Tooltip on desktop hover */}
      <div className="hidden md:flex items-center gap-2 py-2 px-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md text-white text-xs font-semibold shadow-2xl border border-blue-500/30 pointer-events-none transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-200">
        <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
        <span>Discuter avec Kevin Chris</span>
      </div>

      {/* Floating Button with Blue Glow and Pulse */}
      <button
        type="button"
        id="floating-whatsapp-btn"
        onClick={handleClick}
        className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-lg shadow-blue-600/40 hover-glow-blue hover:scale-108 active:scale-95 transition-all duration-300 relative border border-blue-400/40"
        aria-label="Contacter Kevin Chris sur WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-sky-400 border-2 border-white dark:border-slate-900 animate-pulse" />
      </button>
    </div>
  );
};
