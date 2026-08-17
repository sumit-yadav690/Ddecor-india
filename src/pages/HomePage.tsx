import React, { useEffect } from 'react';
import { Phone, MessageCircle, ArrowRight, Check, Layers, Eye, Palette, Star, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG, GENERAL_FAQS, getWhatsAppLink } from '../config/business';
import { GoogleReviewsBadge } from '../components/common/GoogleReviewsBadge';
import { ProjectGallery } from '../components/common/ProjectGallery';
import { MeasurementProcess } from '../components/common/MeasurementProcess';
import { ServiceAreaCoverage } from '../components/common/ServiceAreaCoverage';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { LeadForm } from '../components/forms/LeadForm';
import { updateDocumentSEO } from '../lib/seo';
import { trackPhoneClick, trackWhatsAppClick } from '../lib/analytics';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  useEffect(() => {
    updateDocumentSEO(
      {
        title: 'Premium Curtains, Blinds & Wallpaper in Gurgaon | Ddecor Curtain Shop',
        description: 'Custom curtains, stylish blinds and premium wallpaper for homes and offices in Gurugram. Free doorstep measurement, 1000+ fabrics & expert installation.',
        canonicalPath: '/',
        h1: 'Premium Curtains, Blinds & Wallpaper in Gurgaon',
      },
      GENERAL_FAQS
    );
  }, []);

  const serviceCards = [
    {
      id: 'curtains',
      title: 'Curtains in Gurgaon',
      path: '/curtains-gurgaon',
      tagline: 'Custom Tailored Drapery',
      desc: '100% Blackout curtains, elegant sheer drapes, luxury velvet, organic linen, and smart motorized curtain tracks.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      features: ['Free doorstep measurement', '1000+ fabric choices', 'Motorized & manual tracks'],
      icon: Layers,
    },
    {
      id: 'blinds',
      title: 'Blinds in Gurgaon',
      path: '/blinds-gurgaon',
      tagline: 'Precision Light Control',
      desc: 'Modern roller blinds, dual-layer zebra blinds, authentic wooden venetian blinds, and motorized office window treatments.',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
      features: ['Zebra & Roller styles', 'Dust repellent fabrics', 'Office & home solutions'],
      icon: Eye,
    },
    {
      id: 'wallpaper',
      title: 'Wallpaper in Gurgaon',
      path: '/wallpaper-gurgaon',
      tagline: 'Luxury Accent Walls',
      desc: '3D embossed textured wallpaper, European floral & damask, modern geometric designs, and custom sized wall murals.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      features: ['Washable vinyl options', 'Seamless pattern fitting', 'Custom printed murals'],
      icon: Palette,
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-8 pb-16 sm:pt-12 sm:pb-24 overflow-hidden border-b border-[#E5E1DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center space-x-2 text-[11px] sm:text-xs font-bold tracking-[0.24em] text-[#8B735B] uppercase">
                  <div className="w-6 h-[1px] bg-[#8B735B]"></div>
                  <span>D'DECOR INDIA • SECTOR 84 GURUGRAM</span>
                </div>
                <div className="text-xs text-stone-500 font-serif italic mt-1">Curtains • Window Blinds • Luxury Wallpaper</div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#1C1C1C] leading-[1.1]">
                Premium Curtains, <br className="hidden sm:inline" />
                Blinds &amp; Wallpaper <br className="hidden sm:inline" />
                <span className="italic font-normal">in Gurgaon</span>
              </h1>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-xl font-normal">
                Shop No. 6, near Elan Miracle Mall, Sector 84. Transform your living and workspace with bespoke tailored drapery, precision window blinds, and luxury European wallpapers.
              </p>

              {/* Trust Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-stone-800">
                <div className="flex items-center gap-2.5">
                  <span className="w-4 h-4 rounded-none bg-[#8B735B] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  <span><strong>Free Doorstep Measurement</strong> in Gurgaon</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-4 h-4 rounded-none bg-[#8B735B] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  <span><strong>1,000+ Fabric &amp; Wallpaper</strong> Swatches</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-4 h-4 rounded-none bg-[#8B735B] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  <span><strong>Dust-Controlled</strong> Precision Fitting</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-4 h-4 rounded-none bg-[#8B735B] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  <span><strong>Sector 84 Showroom</strong> near Elan Miracle</span>
                </div>
              </div>

              {/* Direct Action Buttons: WhatsApp & Contact */}
              <div className="flex flex-wrap items-center gap-3.5 pt-4">
                <a
                  id="hero-whatsapp-btn"
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('Home Hero WhatsApp')}
                  className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-7 py-3.5 text-xs uppercase tracking-[0.18em] transition active:scale-[0.98] inline-flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  id="hero-contact-btn"
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

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative border border-[#E5E1DA] p-3 bg-white">
                <div className="aspect-4/3 sm:aspect-5/4 overflow-hidden bg-stone-200 relative">
                  <img
                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80"
                    alt="Luxury modern living room with custom drapes and window treatments in Gurugram"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  
                  {/* Geometric Frame Overlay */}
                  <div className="absolute inset-x-3 bottom-3 bg-stone-900/90 backdrop-blur-xs p-3.5 border-l-2 border-[#8B735B] text-white">
                    <div className="text-[10px] tracking-[0.2em] uppercase text-[#8B735B] font-bold">Sector 84 Showroom</div>
                    <div className="text-xs sm:text-sm font-serif font-light text-stone-100 mt-0.5">Free doorstep measurement with 1,000+ catalog samples</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geometric 4-Column Feature Bar */}
      <section className="border-b border-[#E5E1DA] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <a
              href="/curtains-gurgaon"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/curtains-gurgaon');
              }}
              className="p-6 border-b md:border-b-0 md:border-r border-[#E5E1DA] hover:bg-[#FAF9F6] transition group"
            >
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8B735B] mb-2">01. Curtains</div>
              <h3 className="font-serif text-lg text-[#1C1C1C] font-semibold mb-1 group-hover:text-[#8B735B] transition">Custom Tailored Drapery</h3>
              <p className="text-xs text-stone-600 leading-relaxed">100% Blackout, sheer drapes, luxury velvet, and motorized tracks.</p>
            </a>

            <a
              href="/blinds-gurgaon"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/blinds-gurgaon');
              }}
              className="p-6 border-b md:border-b-0 md:border-r border-[#E5E1DA] hover:bg-[#FAF9F6] transition group"
            >
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8B735B] mb-2">02. Blinds</div>
              <h3 className="font-serif text-lg text-[#1C1C1C] font-semibold mb-1 group-hover:text-[#8B735B] transition">Precision Light Control</h3>
              <p className="text-xs text-stone-600 leading-relaxed">Roller blinds, zebra blinds, authentic wooden venetian &amp; motorized.</p>
            </a>

            <a
              href="/wallpaper-gurgaon"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/wallpaper-gurgaon');
              }}
              className="p-6 border-b lg:border-b-0 lg:border-r border-[#E5E1DA] hover:bg-[#FAF9F6] transition group"
            >
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8B735B] mb-2">03. Wallpaper</div>
              <h3 className="font-serif text-lg text-[#1C1C1C] font-semibold mb-1 group-hover:text-[#8B735B] transition">Luxury Accent Walls</h3>
              <p className="text-xs text-stone-600 leading-relaxed">3D textured vinyl, European patterns, and custom sized wall murals.</p>
            </a>

            <div className="p-6 bg-[#1C1C1C] text-white flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-[#8B735B] font-semibold tracking-wider uppercase mb-1">
                  <Star className="w-3.5 h-3.5 fill-[#8B735B]" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="text-xs text-stone-300 font-medium">{BUSINESS_CONFIG.reviewsCount} Verified Google Reviews</div>
              </div>
              <div className="text-[11px] text-stone-400 mt-3 pt-2 border-t border-stone-800">
                Shop No. 6, Sector 84 Gurugram • 10 AM – 9 PM
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Main Service Cards */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 text-[10px] font-bold tracking-[0.2em] text-[#8B735B] uppercase mb-2">
              <div className="w-6 h-[1px] bg-[#8B735B]"></div>
              <span>OUR CORE SPECIALTIES</span>
              <div className="w-6 h-[1px] bg-[#8B735B]"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1C1C1C] mt-2">
              Explore Our Services in Gurgaon
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base font-normal">
              Click below to explore fabrics, motorized options, and installation details for your home or office.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCards.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.id}
                  className="group bg-white border border-[#E5E1DA] shadow-2xs hover:border-[#8B735B] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                      <img
                        src={srv.image}
                        alt={srv.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                      <span className="absolute top-3 left-3 bg-[#1C1C1C]/90 text-white text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1">
                        0{idx + 1}. {srv.tagline}
                      </span>
                    </div>

                    <div className="p-6">
                      <div className="w-9 h-9 bg-[#FAF9F6] border border-[#E5E1DA] text-[#8B735B] flex items-center justify-center mb-4">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-xl font-serif text-[#1C1C1C] font-semibold mb-2 group-hover:text-[#8B735B] transition">
                        {srv.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                        {srv.desc}
                      </p>

                      <ul className="space-y-1.5 text-xs font-medium text-stone-700 mb-6">
                        {srv.features.map((f, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#8B735B]"></span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-6 pt-0 space-y-2">
                    <a
                      href={srv.path}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(srv.path);
                      }}
                      className="w-full py-3 px-4 bg-[#FAF9F6] group-hover:bg-[#1C1C1C] text-[#1C1C1C] group-hover:text-white font-semibold text-xs uppercase tracking-widest transition flex items-center justify-center gap-2 border border-[#E5E1DA] group-hover:border-[#1C1C1C] cursor-pointer"
                    >
                      <span>Explore {srv.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={getWhatsAppLink(`Hi Ddecor India, I would like to inquire about ${srv.title}. Please share fabric samples and pricing.`, srv.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 text-emerald-700 hover:text-emerald-800 font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-emerald-600" />
                      <span>WhatsApp for {srv.title.split(' ')[0]}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Measurement & Installation 4-Step Process */}
      <MeasurementProcess onNavigate={onNavigate} />

      {/* Real Projects Gallery */}
      <ProjectGallery limit={4} />

      {/* Local Service Area Coverage */}
      <ServiceAreaCoverage onNavigate={onNavigate} />

      {/* Customer Reviews Section */}
      <section className="py-16 sm:py-24 bg-white border-t border-[#E5E1DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 text-[10px] font-bold tracking-[0.2em] text-[#8B735B] uppercase mb-2">
              <div className="w-6 h-[1px] bg-[#8B735B]"></div>
              <span>LOCAL TESTIMONIALS</span>
              <div className="w-6 h-[1px] bg-[#8B735B]"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1C1C1C] mt-2">
              Trusted by Homeowners Across Gurgaon
            </h2>
            <p className="mt-2 text-stone-600 text-sm">
              Rated <strong className="text-[#1C1C1C]">{BUSINESS_CONFIG.rating}/5</strong> on Google Business Profile with {BUSINESS_CONFIG.reviewsCount} verified reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GoogleReviewsBadge variant="card" className="h-full" />

            <div className="bg-[#FAF9F6] p-6 border border-[#E5E1DA] flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-[#8B735B] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed mb-4">
                  "Got blackout and sheer curtains for our 3BHK flat near Elan Miracle. Laser measurement was accurate and stitching is top-notch."
                </p>
              </div>
              <div className="text-xs pt-3 border-t border-[#E5E1DA]">
                <div className="font-bold text-[#1C1C1C]">Rajiv Sharma</div>
                <div className="text-[#8B735B] text-[11px] font-medium">Sector 84, Gurugram • Curtains</div>
              </div>
            </div>

            <div className="bg-[#FAF9F6] p-6 border border-[#E5E1DA] flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-[#8B735B] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed mb-4">
                  "Superb quality zebra blinds for our living room. Very smooth mechanism and neat installation with zero dust left behind."
                </p>
              </div>
              <div className="text-xs pt-3 border-t border-[#E5E1DA]">
                <div className="font-bold text-[#1C1C1C]">Priya Mehra</div>
                <div className="text-[#8B735B] text-[11px] font-medium">Vatika India Next • Blinds</div>
              </div>
            </div>

            <div className="bg-[#FAF9F6] p-6 border border-[#E5E1DA] flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-[#8B735B] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed mb-4">
                  "Installed 3D textured wallpaper in our drawing room. Seamless pattern alignment and very professional staff."
                </p>
              </div>
              <div className="text-xs pt-3 border-t border-[#E5E1DA]">
                <div className="font-bold text-[#1C1C1C]">Amitabh Verma</div>
                <div className="text-[#8B735B] text-[11px] font-medium">Sector 83, Gurugram • Wallpaper</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact Action Section */}
      <section className="py-16 sm:py-24 bg-[#1C1C1C] text-[#E5E1DA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center space-x-2 text-[10px] font-bold tracking-[0.2em] text-[#8B735B] uppercase">
                <div className="w-6 h-[1px] bg-[#8B735B]"></div>
                <span>GET STARTED TODAY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-light text-white leading-tight">
                Transform Your Gurgaon Home or Office With Custom Window Treatments
              </h2>
              <p className="text-stone-300 text-sm leading-relaxed">
                Contact our local Sector 84 team. We bring complete fabric swatches, wallpaper binders, and motorized track demonstrators directly to your doorstep in Gurugram.
              </p>

              <div className="p-4 bg-[#262626] border border-stone-800 text-xs space-y-2">
                <div className="flex items-center gap-2 text-stone-300">
                  <span className="w-1.5 h-1.5 bg-[#8B735B]"></span>
                  <span>Response time: Instant WhatsApp or phone call during shop hours (10 AM – 9 PM)</span>
                </div>
                <div className="flex items-center gap-2 text-stone-300">
                  <span className="w-1.5 h-1.5 bg-[#8B735B]"></span>
                  <span>Transparent quotation with clear per-sq-ft or per-window pricing</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <LeadForm
                idPrefix="home-bottom-contact"
                formTitle="Directly Connect For Free Measurement"
                formSubtitle="Message on WhatsApp for instant doorstep visit in Sector 84 and all Gurugram."
              />
            </div>
          </div>
        </div>
      </section>

      {/* General FAQs */}
      <FAQAccordion items={GENERAL_FAQS} />
    </main>
  );
};
