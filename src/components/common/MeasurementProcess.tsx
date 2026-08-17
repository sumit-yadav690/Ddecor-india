import React from 'react';
import { CalendarCheck, Ruler, Scissors, Sparkles, MessageCircle, MapPin } from 'lucide-react';
import { getWhatsAppLink } from '../../config/business';
import { trackWhatsAppClick } from '../../lib/analytics';

interface MeasurementProcessProps {
  serviceName?: string;
  onNavigate?: (path: string) => void;
}

export const MeasurementProcess: React.FC<MeasurementProcessProps> = ({ serviceName = 'Curtains & Blinds', onNavigate }) => {
  const steps = [
    {
      num: '01',
      title: 'Free Doorstep Consultation',
      desc: 'Schedule a free consultation. Our specialist visits your Gurugram home or office with hundreds of fabric swatch books and catalogs.',
      icon: CalendarCheck,
    },
    {
      num: '02',
      title: 'Precision Laser Measurement',
      desc: 'We measure every window width, drop height, clearance, and mounting structure with millimeter accuracy using laser tools.',
      icon: Ruler,
    },
    {
      num: '03',
      title: 'Custom Tailoring & Crafting',
      desc: 'Your curtains are stitched with reinforced headers and weighted hems; blinds are custom cut with heavy-duty aluminum hardware.',
      icon: Scissors,
    },
    {
      num: '04',
      title: 'Clean, On-Time Installation',
      desc: 'Our trained technicians arrive on schedule, drill with dust-catcher attachments, level tracks, and steam-dress your drapes.',
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-[#E5E1DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-[10px] font-bold tracking-[0.2em] text-[#8B735B] uppercase mb-2">
            <div className="w-6 h-[1px] bg-[#8B735B]"></div>
            <span>SIMPLE 4-STEP PROCESS</span>
            <div className="w-6 h-[1px] bg-[#8B735B]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1C1C1C] mt-2">
            How We Deliver Perfect Window Treatments in Gurgaon
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base font-normal">
            From initial design consultation to final installation, we manage everything seamlessly with zero guesswork.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF9F6] p-6 border border-[#E5E1DA] shadow-2xs flex flex-col justify-between relative group hover:border-[#8B735B] transition"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-white text-[#8B735B] border border-[#E5E1DA] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xl font-serif font-light text-stone-400 group-hover:text-[#8B735B] transition">{step.num}</span>
                  </div>
                  <h3 className="text-base font-serif text-[#1C1C1C] font-semibold mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-center">
          <a
            id="book-measurement-whatsapp-btn"
            href={getWhatsAppLink(`Hi Ddecor India, I would like to book a free doorstep measurement for ${serviceName} in Gurgaon.`, serviceName)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('Measurement Process CTA', serviceName)}
            className="inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-8 py-4 text-xs uppercase tracking-widest transition active:scale-[0.98] cursor-pointer shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Book Doorstep Measurement on WhatsApp</span>
          </a>

          {onNavigate && (
            <a
              id="book-measurement-contact-btn"
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/contact');
              }}
              className="inline-flex items-center justify-center gap-2 bg-[#1C1C1C] hover:bg-[#333333] text-white font-semibold px-8 py-4 text-xs uppercase tracking-widest transition active:scale-[0.98] cursor-pointer shadow-sm"
            >
              <MapPin className="w-3.5 h-3.5 text-[#8B735B]" />
              <span>Visit Showroom / Contact Us</span>
            </a>
          )}
        </div>
        <p className="text-xs text-stone-500 text-center mt-3">No commitment required • 1,000+ catalog samples brought to your home in Gurgaon</p>
      </div>
    </section>
  );
};
