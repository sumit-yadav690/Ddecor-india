import React from 'react';
import { MapPin, Navigation, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../../config/business';
import { trackPhoneClick, trackWhatsAppClick } from '../../lib/analytics';

interface ServiceAreaCoverageProps {
  onNavigate?: (path: string) => void;
}

export const ServiceAreaCoverage: React.FC<ServiceAreaCoverageProps> = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#1C1C1C] text-[#E5E1DA] relative overflow-hidden border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <div className="flex items-center space-x-2 text-[10px] font-bold tracking-[0.2em] text-[#8B735B] uppercase mb-3">
              <div className="w-6 h-[1px] bg-[#8B735B]"></div>
              <span>GURGAON LOCAL SERVICE NETWORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-white leading-tight">
              Doorstep Service Across Sector 84 &amp; All Gurugram
            </h2>
            <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed font-normal">
              Based at <strong className="text-white font-semibold">Shop No. 6, near Elan Miracle Mall, Sector 84</strong>, our mobile measurement team visits your high-rise apartment, independent villa, or corporate office across Gurugram with comprehensive fabric and wallpaper swatch books.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {BUSINESS_CONFIG.serviceAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="bg-[#262626] text-stone-200 border border-stone-800 px-3 py-1.5 text-xs font-medium"
                >
                  {area}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                id="area-whatsapp-visit-btn"
                href={getWhatsAppLink('Hi Ddecor India, I would like to schedule a doorstep visit for curtains/blinds/wallpaper in Gurgaon.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('Service Area Coverage')}
                className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-7 py-3.5 text-xs uppercase tracking-widest transition cursor-pointer shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Doorstep Visit</span>
              </a>

              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#262626] hover:bg-[#333333] text-stone-200 font-semibold px-6 py-3.5 text-xs uppercase tracking-widest transition border border-stone-700"
              >
                <Navigation className="w-3.5 h-3.5 text-[#8B735B]" />
                <span>Sector 84 Showroom Directions</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#262626] p-6 sm:p-8 border border-stone-800">
            <h3 className="text-xl font-serif text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#8B735B]"></span>
              Why Gurgaon Residents Choose Us
            </h3>

            <div className="space-y-5 text-sm text-stone-300">
              <div className="flex gap-4 items-start">
                <div className="w-7 h-7 bg-[#1C1C1C] border border-stone-700 text-[#8B735B] font-serif flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  01
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-white">Local Showroom &amp; Prompt Support</h4>
                  <p className="text-xs text-stone-400 mt-1 leading-relaxed">Walk in anytime between 10:00 AM – 9:00 PM near Elan Miracle Mall, Sector 84, or request an in-home visit.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-7 h-7 bg-[#1C1C1C] border border-stone-700 text-[#8B735B] font-serif flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  02
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-white">Zero Guesswork On Measurements</h4>
                  <p className="text-xs text-stone-400 mt-1 leading-relaxed">Avoid wrong online curtain lengths. We take exact laser measurements factoring in rod heights, false ceilings, and floor clearance.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-7 h-7 bg-[#1C1C1C] border border-stone-700 text-[#8B735B] font-serif flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  03
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-white">Fast Turnaround (3–5 Days)</h4>
                  <p className="text-xs text-stone-400 mt-1 leading-relaxed">Precision stitching, pleating, and testing in our local workshop followed by swift clean installation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
