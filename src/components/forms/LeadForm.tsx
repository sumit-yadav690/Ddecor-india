import React from 'react';
import { MessageCircle, MapPin, Clock, Sparkles, Navigation, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../../config/business';
import { trackWhatsAppClick } from '../../lib/analytics';

interface DirectContactSectionProps {
  defaultService?: 'Curtains' | 'Blinds' | 'Wallpaper' | 'Complete Window & Wall Decor';
  formTitle?: string;
  formSubtitle?: string;
  idPrefix?: string;
}

export const LeadForm: React.FC<DirectContactSectionProps> = ({
  defaultService = 'Curtains',
  formTitle = 'Directly Connect With Our Gurgaon Studio',
  formSubtitle = 'Message us on WhatsApp for instant catalog samples, price estimates, and free doorstep measurement across Gurugram.',
  idPrefix = 'direct-contact',
}) => {
  const whatsappUrl = getWhatsAppLink(
    `Hi Ddecor India, I would like to inquire about ${defaultService} for my space in Gurgaon. Please share details and catalog.`,
    defaultService
  );

  return (
    <div className="bg-white p-6 sm:p-8 border border-[#E5E1DA] shadow-2xs relative overflow-hidden">
      <div className="mb-6">
        <div className="flex items-center space-x-2 text-[10px] font-bold tracking-[0.2em] text-[#8B735B] uppercase mb-1">
          <div className="w-4 h-[1px] bg-[#8B735B]"></div>
          <span>DIRECT INSTANT CONTACT</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-serif text-[#1C1C1C]">
          {formTitle}
        </h3>
        {formSubtitle && (
          <p className="text-xs sm:text-sm text-stone-600 mt-1.5 leading-relaxed">
            {formSubtitle}
          </p>
        )}
      </div>

      <div className="space-y-4">
        {/* Action Button: Direct WhatsApp */}
        <div>
          <a
            id={`${idPrefix}-whatsapp-btn`}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('Direct Contact Card', defaultService)}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-5 transition active:scale-[0.98] flex items-center justify-center gap-2.5 text-xs sm:text-sm uppercase tracking-widest cursor-pointer shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Showroom Details Box */}
        <div className="p-4 bg-[#FAF9F6] border border-[#E5E1DA] space-y-3 mt-4">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-[#8B735B] shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-xs text-[#1C1C1C] uppercase tracking-wider">
                Showroom Address:
              </div>
              <div className="text-xs text-stone-600 mt-0.5">
                {BUSINESS_CONFIG.address.shopNumber}, {BUSINESS_CONFIG.address.landmark}, {BUSINESS_CONFIG.address.sector}, Gurugram
              </div>
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-[#8B735B] hover:text-[#1C1C1C] mt-1"
              >
                <Navigation className="w-3 h-3" /> Get Directions on Google Maps →
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2 border-t border-[#E5E1DA]/80 text-xs text-stone-700">
            <Clock className="w-4 h-4 text-[#8B735B] shrink-0" />
            <span>
              <strong>Timings:</strong> {BUSINESS_CONFIG.hours.timing} (Open all 7 days)
            </span>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-stone-500 pt-2 border-t border-[#E5E1DA]">
          <span className="flex items-center gap-1 text-emerald-700 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Instant WhatsApp Response
          </span>
          <span className="flex items-center gap-1 text-stone-600 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#8B735B]" />
            Free Doorstep Measurement in Gurgaon
          </span>
        </div>
      </div>
    </div>
  );
};
