import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, MessageCircle, Star } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../config/business';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { GoogleReviewsBadge } from '../components/common/GoogleReviewsBadge';
import { LeadForm } from '../components/forms/LeadForm';
import { updateDocumentSEO } from '../lib/seo';
import { trackPhoneClick, trackWhatsAppClick } from '../lib/analytics';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    updateDocumentSEO({
      title: 'Contact Ddecor Curtain Shop Gurgaon | Sector 84 Near Elan Miracle',
      description: 'Visit Ddecor Curtain Shop at Shop No. 6 near Elan Miracle Mall, Sector 84 Gurugram. Connect on WhatsApp or visit our showroom for free measurement.',
      canonicalPath: '/contact',
      h1: 'Contact Ddecor Curtain Shop Decor India',
    });
  }, []);

  return (
    <main>
      <div className="bg-white border-b border-[#E5E1DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Contact Us' }]} />
        </div>
      </div>

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 text-[10px] font-bold tracking-[0.2em] text-[#8B735B] uppercase mb-2">
              <div className="w-6 h-[1px] bg-[#8B735B]"></div>
              <span>GET IN TOUCH</span>
              <div className="w-6 h-[1px] bg-[#8B735B]"></div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#1C1C1C] mt-2">
              Visit or Contact <br className="hidden sm:inline" />
              <span className="italic font-normal">Our Sector 84 Showroom</span>
            </h1>
            <p className="mt-3 text-stone-600 text-sm sm:text-base font-normal">
              Walk into our showroom near Elan Miracle Mall or schedule a doorstep visit with sample catalogs across Gurugram.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-6 sm:p-8 border border-[#E5E1DA] shadow-2xs space-y-6">
                <div className="flex items-center gap-4 pb-4 border-b border-[#E5E1DA]">
                  <img
                    src="/logo.jpg"
                    alt="Ddecor Curtain Shop Decor India Official Brand Emblem"
                    className="h-16 w-auto object-contain bg-white p-1 border border-[#E5E1DA]"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h2 className="text-xl font-serif font-semibold text-[#1C1C1C] leading-tight">
                      {BUSINESS_CONFIG.name}
                    </h2>
                    <p className="text-[10px] text-stone-500 uppercase tracking-wider mt-1">Curtains • Blinds • Wallpaper</p>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-stone-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#8B735B] shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-[#1C1C1C] text-xs uppercase tracking-wider">Showroom Address:</div>
                      <div className="text-stone-600 text-xs sm:text-sm mt-0.5 leading-relaxed">
                        {BUSINESS_CONFIG.address.fullFormatted}
                      </div>
                      <a
                        href={BUSINESS_CONFIG.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#8B735B] hover:text-[#1C1C1C] mt-2"
                      >
                        <Navigation className="w-3.5 h-3.5" /> Get Driving Directions on Google Maps →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#8B735B] shrink-0" />
                    <div>
                      <div className="font-semibold text-[#1C1C1C] text-xs uppercase tracking-wider">Visiting Hours:</div>
                      <div className="text-stone-600 text-xs sm:text-sm mt-0.5">
                        {BUSINESS_CONFIG.hours.timing} (Open all 7 days)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#8B735B] shrink-0" />
                    <div>
                      <div className="font-semibold text-[#1C1C1C] text-xs uppercase tracking-wider">Phone &amp; WhatsApp:</div>
                      <a
                        id="contact-page-phone-link"
                        href={`tel:${BUSINESS_CONFIG.phoneClean}`}
                        onClick={() => trackPhoneClick('Contact Page')}
                        className="text-[#1C1C1C] font-bold hover:text-[#8B735B] text-sm"
                      >
                        {BUSINESS_CONFIG.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#8B735B] shrink-0" />
                    <div>
                      <div className="font-semibold text-[#1C1C1C] text-xs uppercase tracking-wider">Email:</div>
                      <a
                        href={`mailto:${BUSINESS_CONFIG.email}`}
                        className="text-stone-600 hover:text-[#8B735B] text-xs sm:text-sm"
                      >
                        {BUSINESS_CONFIG.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    id="contact-whatsapp-btn"
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick('Contact Page')}
                    className="flex-1 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2 shadow-2xs transition"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Chat on WhatsApp</span>
                  </a>
                  <a
                    id="contact-directions-btn"
                    href={BUSINESS_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 bg-[#1C1C1C] hover:bg-[#333333] text-white font-semibold text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2 shadow-2xs transition"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#8B735B]" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

              <GoogleReviewsBadge variant="card" />
            </div>

            {/* Lead Form Column */}
            <div className="lg:col-span-7">
              <LeadForm
                idPrefix="contact-page-form"
                formTitle="Send Us An Enquiry"
                formSubtitle="Request a free doorstep catalog presentation or ask about pricing and delivery schedules."
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
