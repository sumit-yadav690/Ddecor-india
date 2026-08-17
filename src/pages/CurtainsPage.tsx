import React, { useEffect } from 'react';
import { CURTAINS_SERVICES, CURTAINS_FAQS, BUSINESS_CONFIG, getWhatsAppLink } from '../config/business';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { ProjectGallery } from '../components/common/ProjectGallery';
import { MeasurementProcess } from '../components/common/MeasurementProcess';
import { LeadForm } from '../components/forms/LeadForm';
import { updateDocumentSEO } from '../lib/seo';
import { trackPhoneClick, trackWhatsAppClick } from '../lib/analytics';
import { Check, Phone, MessageCircle, Layers, Sparkles, MapPin } from 'lucide-react';

interface CurtainsPageProps {
  onNavigate: (path: string) => void;
}

export const CurtainsPage: React.FC<CurtainsPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    updateDocumentSEO(
      {
        title: 'Custom Curtains in Gurgaon | Blackout, Sheer & Motorized Drapes | Ddecor',
        description: 'Explore custom tailored blackout curtains, sheer drapes, luxury velvet, and smart motorized tracks in Sector 84 Gurugram. Free doorstep measurement & 1000+ fabrics.',
        canonicalPath: '/curtains-gurgaon',
        h1: 'Custom Made Curtains in Gurgaon',
      },
      CURTAINS_FAQS
    );
  }, []);

  const curtainStyles = [
    { name: '100% Blackout Curtains', desc: 'Triple-weave thermal lining blocking 100% harsh sunlight, UV rays and Gurgaon traffic noise.' },
    { name: 'Airy Sheer Curtains', desc: 'Soft voile, linen textures and embroidered sheer panels for diffused daylight and elegant daytime privacy.' },
    { name: 'Luxury Velvet Drapes', desc: 'Heavyweight velvet and chenille drapery in champagne, emerald, and jewel tones for high-end luxury fall.' },
    { name: 'Smart Motorized Curtains', desc: 'Whisper-quiet automated tracks compatible with Alexa, Google Assistant, RF remotes and mobile apps.' },
    { name: 'Organic Linen & Cotton', desc: 'Natural breathable textured fabrics for Scandinavian and contemporary minimalist Gurgaon flats.' },
    { name: 'Commercial & Office Drapes', desc: 'Flame retardant (FR) certified commercial curtains for corporate conference rooms in Cyber City.' },
  ];

  return (
    <main>
      <div className="bg-white border-b border-[#E5E1DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Curtains in Gurgaon' }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-white border-b border-[#E5E1DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-2 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#8B735B] uppercase">
                <div className="w-8 h-[1px] bg-[#8B735B]"></div>
                <span>BESPOKE WINDOW DRAPERY IN GURGAON</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#1C1C1C] leading-[1.1]">
                Custom Made Curtains <br className="hidden sm:inline" />
                <span className="italic font-normal">in Gurgaon</span>
              </h1>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-xl font-normal">
                Expert tailored curtains in Sector 84 near Elan Miracle. From 100% thermal blackout drapes to elegant sheer curtains and automated smart tracks, we bring 1,000+ fabric catalogs directly to your home.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-stone-800">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-[#8B735B] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>Laser Window Measurement at Home</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-[#8B735B] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>100% Light Blockout Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-[#8B735B] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>American, Eyelet, Wave &amp; Pinch Pleats</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-[#8B735B] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>Heavy-Duty Recessed &amp; Motorized Tracks</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3.5 pt-4">
                <a
                  id="curtains-hero-whatsapp-btn"
                  href={getWhatsAppLink('Hi Ddecor India, I would like to explore custom curtains and get catalog swatches in Gurgaon.', 'Curtains')}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('Curtains Hero WhatsApp', 'Curtains')}
                  className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-7 py-3.5 text-xs uppercase tracking-[0.18em] transition active:scale-[0.98] inline-flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  id="curtains-hero-contact-btn"
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
                    src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80"
                    alt="Layered sheer and blackout custom curtains in Gurgaon"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curtain Styles Breakdown */}
      <section className="py-16 sm:py-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 text-[10px] font-bold tracking-[0.2em] text-[#8B735B] uppercase mb-2">
              <div className="w-6 h-[1px] bg-[#8B735B]"></div>
              <span>TAILORED OPTIONS</span>
              <div className="w-6 h-[1px] bg-[#8B735B]"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1C1C1C] mt-2">
              Curtain Types &amp; Fabric Collections
            </h2>
            <p className="mt-2 text-stone-600 text-sm">
              Tailored to your exact ceiling height and floor clearance in Gurgaon homes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curtainStyles.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 border border-[#E5E1DA] shadow-2xs hover:border-[#8B735B] transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 bg-[#FAF9F6] border border-[#E5E1DA] text-[#8B735B] flex items-center justify-center">
                      <Layers className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-serif text-stone-400">0{idx + 1}</span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-[#1C1C1C] mb-2">{item.name}</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">{item.desc}</p>
                </div>

                <div className="pt-4 border-t border-[#E5E1DA] flex items-center justify-between">
                  <a
                    id={`curtain-style-whatsapp-${idx}`}
                    href={getWhatsAppLink(`Hi Ddecor India, I am interested in ${item.name} for my Gurgaon apartment. Please share catalogs and pricing.`, item.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick(`Curtain Style ${item.name}`, 'Curtains')}
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

      {/* Curtain Heading Styles */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E5E1DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center space-x-2 text-[10px] font-bold tracking-[0.2em] text-[#8B735B] uppercase">
                <div className="w-6 h-[1px] bg-[#8B735B]"></div>
                <span>PRECISION STITCHING HEADERS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#1C1C1C]">
                Custom Pleating &amp; Header Styles
              </h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                The way a curtain folds determines its elegance. We craft every header in our local workshop using reinforced interfacing and weighted hems so your curtains drape with uniform architectural folds.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2 text-xs text-stone-800 font-medium">
                <div className="p-3 bg-[#FAF9F6] border border-[#E5E1DA]">
                  <div className="font-bold text-[#1C1C1C] mb-1">Ripple Fold / Wave Fold</div>
                  <div className="text-stone-600">Continuous S-curve wave on slim ceiling tracks.</div>
                </div>
                <div className="p-3 bg-[#FAF9F6] border border-[#E5E1DA]">
                  <div className="font-bold text-[#1C1C1C] mb-1">Triple Pinch Pleat</div>
                  <div className="text-stone-600">Classic tailored clusters for maximum fabric fullness.</div>
                </div>
                <div className="p-3 bg-[#FAF9F6] border border-[#E5E1DA]">
                  <div className="font-bold text-[#1C1C1C] mb-1">Eyelet / Grommet</div>
                  <div className="text-stone-600">Contemporary metal rings gliding smoothly on rods.</div>
                </div>
                <div className="p-3 bg-[#FAF9F6] border border-[#E5E1DA]">
                  <div className="font-bold text-[#1C1C1C] mb-1">Motorized Somfy &amp; Tuya</div>
                  <div className="text-stone-600">Automated silent tracks with remote and mobile control.</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#FAF9F6] p-6 sm:p-8 border border-[#E5E1DA]">
                <LeadForm
                  defaultService="Curtains"
                  idPrefix="curtains-middle-contact"
                  formTitle="Inquire About Custom Curtains"
                  formSubtitle="Get fabric swatch catalogs and free doorstep laser measurement in Gurugram."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Measurement Process */}
      <MeasurementProcess serviceName="Curtains" onNavigate={onNavigate} />

      {/* Curtains Gallery */}
      <ProjectGallery
        initialFilter="curtains"
        title="Curtain Installations in Gurgaon Homes"
        subtitle="Explore real photos of double-height drapery, sheer layers, and blackout curtains in Sector 84, Vatika India Next, and New Gurgaon."
      />

      {/* Curtains FAQ */}
      <FAQAccordion
        items={CURTAINS_FAQS}
        title="Curtains in Gurgaon – Frequently Asked Questions"
        subtitle="Everything you need to know about fabric selection, blackout vs sheer, stitching, and motorized tracks."
      />
    </main>
  );
};
