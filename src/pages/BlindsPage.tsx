import React, { useEffect } from 'react';
import { BLINDS_SERVICES, BLINDS_FAQS, BUSINESS_CONFIG, getWhatsAppLink } from '../config/business';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { ProjectGallery } from '../components/common/ProjectGallery';
import { MeasurementProcess } from '../components/common/MeasurementProcess';
import { LeadForm } from '../components/forms/LeadForm';
import { updateDocumentSEO } from '../lib/seo';
import { trackPhoneClick, trackWhatsAppClick } from '../lib/analytics';
import { Check, Phone, MessageCircle, Eye, Sliders, MapPin } from 'lucide-react';

interface BlindsPageProps {
  onNavigate: (path: string) => void;
}

export const BlindsPage: React.FC<BlindsPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    updateDocumentSEO(
      {
        title: 'Window Blinds in Gurgaon | Roller, Zebra, Wooden & Motorized | Ddecor',
        description: 'Buy custom window blinds in Sector 84 Gurugram. Roller blinds, zebra blinds, authentic wooden venetian blinds & motorized office blinds with free installation.',
        canonicalPath: '/blinds-gurgaon',
        h1: 'Window Blinds in Gurgaon',
      },
      BLINDS_FAQS
    );
  }, []);

  const blindTypes = [
    {
      title: 'Zebra / Day & Night Blinds',
      tagline: 'Dual Layer Light Filtering',
      desc: 'Alternating sheer and solid fabric horizontal bands that slide over each other for flexible privacy and ambient light in Gurgaon apartments.',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Custom Roller Blinds',
      tagline: 'Sleek & Space-Saving',
      desc: '100% Blackout, translucent, and solar screen roller blinds with dust-repellent fabrics for modern bedrooms, kitchens, and office cabins.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Authentic Wooden & Venetian Blinds',
      tagline: 'Natural Basswood & Faux Wood',
      desc: '50mm natural wood slats and moisture-resistant faux wood with tilt wand control for executive study rooms, dining areas, and villas.',
      image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Smart Motorized Blinds',
      tagline: 'Remote & Mobile Controlled',
      desc: 'Automated tubular motors compatible with smart home apps, Alexa, and scheduled timers for high-reach windows and modern flats.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Custom Roman Blinds',
      tagline: 'Fabric Warmth with Blind Compactness',
      desc: 'Soft horizontal fabric folds that raise into structured pleats, available in 500+ curtain fabrics with optional blackout lining.',
      image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Commercial & Office Blinds',
      tagline: 'Glare Reduction & FR Certified',
      desc: 'High-durability solar screen and vertical blinds for corporate boardrooms and IT offices in Cyber City and Udyog Vihar.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <main>
      <div className="bg-white border-b border-[#E5E1DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Blinds in Gurgaon' }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-white border-b border-[#E5E1DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-2 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#8B735B] uppercase">
                <div className="w-8 h-[1px] bg-[#8B735B]"></div>
                <span>PRECISION WINDOW COVERINGS</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#1C1C1C] leading-[1.1]">
                Window Blinds <br className="hidden sm:inline" />
                <span className="italic font-normal">in Gurgaon</span>
              </h1>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-xl font-normal">
                Modern roller blinds, dual-layer zebra blinds, wooden venetians, and automated smart blinds in Sector 84 Gurugram. Millimeter-accurate laser sizing and clean installation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-stone-800">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-[#8B735B] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>Dust &amp; Moisture Repellent Fabrics</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-[#8B735B] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>Compact Top Cassette Profiles</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-[#8B735B] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>Child &amp; Pet Safe Cordless Options</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-[#8B735B] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>Commercial FR Certified Blinds</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3.5 pt-4">
                <a
                  id="blinds-hero-whatsapp-btn"
                  href={getWhatsAppLink('Hi Ddecor India, I am looking for custom window blinds in Gurgaon. Please share blind catalogs and price quote.', 'Blinds')}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('Blinds Hero WhatsApp', 'Blinds')}
                  className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-7 py-3.5 text-xs uppercase tracking-[0.18em] transition active:scale-[0.98] inline-flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  id="blinds-hero-contact-btn"
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/contact');
                  }}
                  className="bg-[#1C1C1C] hover:bg-[#333333] text-white font-semibold px-6 py-3.5 text-xs uppercase tracking-[0.18em] transition active:scale-[0.98] inline-flex items-center gap-2"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#8B735B]" />
                  <span>Visit Showroom / Contact Us</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="border border-[#E5E1DA] p-3 bg-[#FAF9F6]">
                <div className="aspect-4/3 sm:aspect-5/4 overflow-hidden bg-stone-200">
                  <img
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80"
                    alt="Custom zebra blinds in Gurgaon apartment living room"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blind Styles Grid */}
      <section className="py-16 sm:py-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 text-[10px] font-bold tracking-[0.2em] text-[#8B735B] uppercase mb-2">
              <div className="w-6 h-[1px] bg-[#8B735B]"></div>
              <span>OUR BLIND COLLECTIONS</span>
              <div className="w-6 h-[1px] bg-[#8B735B]"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1C1C1C] mt-2">
              Blinds Engineered for Modern Living
            </h2>
            <p className="mt-2 text-stone-600 text-sm">
              Explore light filtering, blackout, and motorized window solutions for your space in Gurgaon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blindTypes.map((blind, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E5E1DA] shadow-2xs hover:border-[#8B735B] transition flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                    <img
                      src={blind.image}
                      alt={blind.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 bg-[#1C1C1C]/90 text-white text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1">
                      {blind.tagline}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-lg font-semibold text-[#1C1C1C] mb-2">{blind.title}</h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{blind.desc}</p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#E5E1DA]/80 flex items-center justify-between mt-4">
                  <a
                    id={`blind-style-whatsapp-${idx}`}
                    href={getWhatsAppLink(`Hi Ddecor India, I am interested in ${blind.title} for my windows in Gurgaon. Please share blind catalogs and price quote.`, blind.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick(`Blind Style ${blind.title}`, 'Blinds')}
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 uppercase tracking-wider flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-emerald-600" />
                    <span>WhatsApp Catalogs</span>
                  </a>

                  <span className="text-[11px] text-stone-500 font-medium">Free Doorstep Visit</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Measurement Process */}
      <MeasurementProcess serviceName="Blinds" onNavigate={onNavigate} />

      {/* Project Gallery for Blinds */}
      <ProjectGallery
        initialFilter="blinds"
        title="Blinds Installations Across Gurgaon"
        subtitle="Explore real photos of zebra blinds, roller shades, and wooden venetians in Sector 84, Vatika India Next, and Cyber City."
      />

      {/* FAQs */}
      <FAQAccordion
        items={BLINDS_FAQS}
        title="Window Blinds in Gurgaon – FAQs"
        subtitle="Frequently asked questions on blind cleaning, motorization, roller vs zebra, and commercial installation."
      />
    </main>
  );
};
