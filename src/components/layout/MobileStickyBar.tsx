import React from 'react';
import { MessageCircle, MapPin } from 'lucide-react';
import { getWhatsAppLink } from '../../config/business';
import { trackWhatsAppClick } from '../../lib/analytics';

interface MobileStickyBarProps {
  onNavigate?: (path: string) => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onNavigate }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[#1C1C1C] text-white border-t border-stone-800 shadow-[0_-4px_20px_rgba(0,0,0,0.25)] px-3 py-2.5">
      <div className="grid grid-cols-2 gap-2.5">
        {/* WhatsApp Button: Direct WhatsApp Chat */}
        <a
          id="mobile-sticky-whatsapp-btn"
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('Mobile Sticky Bar')}
          className="flex items-center justify-center gap-2 py-3 px-2 bg-[#25D366] active:bg-[#1EBE5D] text-white text-xs uppercase tracking-widest font-semibold transition shadow-sm"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>Chat on WhatsApp</span>
        </a>

        {/* Contact Showroom Button */}
        <a
          id="mobile-sticky-contact-btn"
          href="/contact"
          onClick={(e) => {
            if (onNavigate) {
              e.preventDefault();
              onNavigate('/contact');
            }
          }}
          className="flex items-center justify-center gap-2 py-3 px-2 bg-[#8B735B] active:bg-[#78614B] text-white text-xs uppercase tracking-widest font-semibold transition cursor-pointer"
          aria-label="Visit Showroom"
        >
          <MapPin className="w-4 h-4 text-white" />
          <span>Showroom &amp; Info</span>
        </a>
      </div>
    </div>
  );
};
