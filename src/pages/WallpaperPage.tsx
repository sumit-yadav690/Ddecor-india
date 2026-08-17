import React, { useEffect } from 'react';
import { WALLPAPER_SERVICES, WALLPAPER_FAQS, BUSINESS_CONFIG, getWhatsAppLink } from '../config/business';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { ProjectGallery } from '../components/common/ProjectGallery';
import { MeasurementProcess } from '../components/common/MeasurementProcess';
import { LeadForm } from '../components/forms/LeadForm';
import { updateDocumentSEO } from '../lib/seo';
import { trackPhoneClick, trackWhatsAppClick } from '../lib/analytics';
import { Check, Phone, MessageCircle, Palette, Sparkles, MapPin } from 'lucide-react';

interface WallpaperPageProps {
  onNavigate: (path: string) => void;
}

export const WallpaperPage: React.FC<WallpaperPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    updateDocumentSEO(
      {
        title: 'Designer Wallpaper in Gurgaon | 3D, Floral, Murals & Vinyl | Ddecor',
        description: 'Shop luxury European wallpaper in Sector 84 Gurugram. 3D textured, damask, modern geometric, and custom wall murals with bubble-free professional installation.',
        canonicalPath: '/wallpaper-gurgaon',
        h1: 'Designer Wallpaper in Gurgaon',
      },
      WALLPAPER_FAQS
    );
  }, []);

  const wallpaperCategories = [
    {
      title: '3D Textured & Geometric Wallpaper',
      tagline: 'Architectural Depth',
      desc: 'Embossed vinyl textures, concrete textures, metallic weaves, and realistic brick designs for TV accent walls and modern living spaces.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Luxury Damask & Floral Wallpaper',
      tagline: 'Royal European Heritage',
      desc: 'Classic gold foil damask, watercolor botanical garden murals, and vintage Japanese textures for master bedroom headboard walls.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Custom High-Res Wall Murals',
      tagline: 'Tailored Exactly to Your Wall Size',
      desc: 'Custom-scaled landscape murals, abstract artwork, tropical jungle foliage, and world maps printed seamlessly without distortion.',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Commercial & Office Wallcoverings',
      tagline: 'High Durability & Class A Fire Rated',
      desc: 'Heavy-duty scrubbable vinyl wallpaper for high-traffic corridors, reception lobbies, and conference rooms in Gurugram corporate offices.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <main>
      <div className="bg-white border-b border-[#E5E1DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Wallpaper in Gurgaon' }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-white border-b border-[#E5E1DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-2 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#8B735B] uppercase">
                <div className="w-8 h-[1px] bg-[#8B735B]"></div>
                <span>LUXURY WALL DECOR IN GURUGRAM</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#1C1C1C] leading-[1.1]">
                Designer Wallpaper <br className="hidden sm:inline" />
                <span className="italic font-normal">in Gurgaon</span>
              </h1>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-xl font-normal">
                Shop Sector 84 near Elan Miracle. Explore 1,000+ imported European wallpapers, 3D embossed designs, and custom-sized wall murals with dust-free, bubble-free professional installation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-stone-800">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-[#8B735B] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>100% Washable Vinyl &amp; Non-Woven Backing</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-[#8B735B] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>Seamless Pattern Matching &amp; Zero Bubbles</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-[#8B735B] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>Custom Sized Wall Murals</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-[#8B735B] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>Free Home Consultation with Swatch Books</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3.5 pt-4">
                <a
                  id="wallpaper-hero-whatsapp-btn"
                  href={getWhatsAppLink('Hi Ddecor India, I am interested in designer wallpaper in Gurgaon. Please share wallpaper catalogs and quotation.', 'Wallpaper')}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('Wallpaper Hero WhatsApp', 'Wallpaper')}
                  className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-7 py-3.5 text-xs uppercase tracking-[0.18em] transition active:scale-[0.98] inline-flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  id="wallpaper-hero-contact-btn"
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
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
                    alt="Luxury 3D textured accent wallpaper in Gurugram"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wallpaper Collections */}
      <section className="py-16 sm:py-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 text-[10px] font-bold tracking-[0.2em] text-[#8B735B] uppercase mb-2">
              <div className="w-6 h-[1px] bg-[#8B735B]"></div>
              <span>WALLPAPER DESIGNS</span>
              <div className="w-6 h-[1px] bg-[#8B735B]"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1C1C1C] mt-2">
              Transform Any Accent Wall in Gurugram
            </h2>
            <p className="mt-2 text-stone-600 text-sm">
              From contemporary TV units to royal bedroom feature walls, explore our designer collections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {wallpaperCategories.map((wp, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E5E1DA] shadow-2xs hover:border-[#8B735B] transition flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                    <img
                      src={wp.image}
                      alt={wp.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 bg-[#1C1C1C]/90 text-white text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1">
                      {wp.tagline}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-[#1C1C1C] mb-2">{wp.title}</h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{wp.desc}</p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#E5E1DA]/80 flex items-center justify-between mt-4">
                  <a
                    id={`wallpaper-style-whatsapp-${idx}`}
                    href={getWhatsAppLink(`Hi Ddecor India, I am interested in ${wp.title} for my wall in Gurgaon. Please share wallpaper catalogs and quotation.`, wp.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick(`Wallpaper Style ${wp.title}`, 'Wallpaper')}
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

      {/* Measurement & Application Process */}
      <MeasurementProcess serviceName="Wallpaper" onNavigate={onNavigate} />

      {/* Wallpaper Gallery */}
      <ProjectGallery
        initialFilter="wallpaper"
        title="Wallpaper Installations in Gurgaon"
        subtitle="Explore real photos of 3D feature walls, custom murals, and bedroom wallpaper installed across Sector 84, Sector 85, and Golf Course Extension."
      />

      {/* FAQs */}
      <FAQAccordion
        items={WALLPAPER_FAQS}
        title="Wallpaper in Gurgaon – FAQs"
        subtitle="Answers regarding wall preparation, washable vinyl, custom mural sizing, and installation times."
      />
    </main>
  );
};
