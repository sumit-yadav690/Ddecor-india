import React, { useEffect, useState } from 'react';
import { CheckCircle2, Phone, MessageCircle, ArrowLeft, Calendar, ShieldCheck, Home } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../config/business';
import { LeadFormData } from '../types';
import { updateDocumentSEO } from '../lib/seo';
import { trackPhoneClick, trackWhatsAppClick } from '../lib/analytics';

interface ThankYouPageProps {
  onNavigate: (path: string) => void;
}

export const ThankYouPage: React.FC<ThankYouPageProps> = ({ onNavigate }) => {
  const [lead, setLead] = useState<LeadFormData | null>(null);

  useEffect(() => {
    updateDocumentSEO({
      title: 'Thank You | Quote Request Received | Ddecor Curtain Shop Gurgaon',
      description: 'Thank you for contacting Ddecor Curtain Shop Decor India Sector 84 Gurugram. We will contact you shortly to confirm your doorstep appointment.',
      canonicalPath: '/thank-you',
      h1: 'Thank You for Your Enquiry',
    });

    try {
      const stored = sessionStorage.getItem('latest_lead');
      if (stored) {
        setLead(JSON.parse(stored));
      }
    } catch {
      // safe fallback
    }
  }, []);

  return (
    <main className="py-16 sm:py-24 bg-white min-h-[70vh] flex items-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#FAF9F6] p-8 sm:p-12 border border-[#E5E1DA] shadow-2xs text-center">
          <div className="w-14 h-14 bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="inline-flex items-center space-x-2 text-[10px] font-bold tracking-[0.2em] text-[#8B735B] uppercase mb-2">
            <div className="w-6 h-[1px] bg-[#8B735B]"></div>
            <span>ENQUIRY RECEIVED</span>
            <div className="w-6 h-[1px] bg-[#8B735B]"></div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-serif font-light text-[#1C1C1C] mt-2 mb-3">
            Thank You{lead?.name ? `, ${lead.name}` : ''}
          </h1>

          <p className="text-stone-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed mb-8 font-normal">
            We have received your request for{' '}
            <strong className="text-[#1C1C1C]">{lead?.service || 'Window & Wall Decor'}</strong> in Gurgaon. Our specialist from our Sector 84 showroom will call you on{' '}
            <strong className="text-[#1C1C1C]">{lead?.phone || 'your phone number'}</strong> within 15–30 minutes to schedule your free doorstep measurement and catalog presentation.
          </p>

          {/* Next Steps Card */}
          <div className="bg-white p-6 border border-[#E5E1DA] text-left mb-8 max-w-xl mx-auto space-y-4">
            <div className="text-[10px] font-bold tracking-[0.2em] text-[#8B735B] uppercase">WHAT HAPPENS NEXT?</div>
            <div className="space-y-3 text-xs sm:text-sm text-stone-700">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-[#1C1C1C] text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <strong className="text-[#1C1C1C]">Phone Confirmation:</strong> We confirm your preferred date and time for the home/office visit.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-[#1C1C1C] text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <strong className="text-[#1C1C1C]">Doorstep Catalogs &amp; Laser Measurement:</strong> Our specialist brings 1,000+ fabric, blind, and wallpaper samples directly to you.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-[#1C1C1C] text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <strong className="text-[#1C1C1C]">Immediate Transparent Quotation:</strong> Transparent pricing with zero hidden charges and fast 3–5 days delivery.
                </div>
              </div>
            </div>
          </div>

          {/* Direct WhatsApp CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              id="thank-you-whatsapp-btn"
              href={getWhatsAppLink(
                `Hi Ddecor Curtain Shop, I just submitted an inquiry for ${lead?.service || 'Curtains/Blinds/Wallpaper'} on your website. My name is ${lead?.name || ''}.`,
                lead?.service
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('Thank You Page', lead?.service)}
              className="w-full sm:w-auto px-7 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs uppercase tracking-widest transition inline-flex items-center justify-center gap-2 shadow-2xs"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Connect on WhatsApp for Instant Reply</span>
            </a>

            <button
              id="thank-you-back-home-btn"
              onClick={() => onNavigate('/')}
              className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-stone-50 text-[#1C1C1C] font-semibold text-xs uppercase tracking-widest transition inline-flex items-center justify-center gap-2 cursor-pointer border border-[#1C1C1C]"
            >
              <Home className="w-3.5 h-3.5 text-[#8B735B]" />
              <span>Return to Homepage</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
