import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../../config/business';
import { trackWhatsAppClick } from '../../lib/analytics';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 group">
      <a
        id="floating-whatsapp-btn"
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick('Floating Widget')}
        className="flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-3 rounded-full shadow-lg transition active:scale-95 group-hover:shadow-emerald-600/30"
        aria-label="Chat with Ddecor Curtain Shop on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white shrink-0" />
        <span className="text-sm font-semibold hidden md:inline pr-1">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
};
