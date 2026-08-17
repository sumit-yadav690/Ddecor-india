import React, { useEffect } from 'react';
import { MapPin, Clock, Check, Phone, MessageCircle, Navigation, Star } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../config/business';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { GoogleReviewsBadge } from '../components/common/GoogleReviewsBadge';
import { updateDocumentSEO } from '../lib/seo';
import { trackPhoneClick, trackWhatsAppClick } from '../lib/analytics';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    updateDocumentSEO({
      title: 'About Us | Ddecor Curtain Shop Decor India Gurgaon',
      description: 'Learn about Ddecor Curtain Shop in Sector 84 Gurugram. Experienced specialists in custom curtains, roller/zebra blinds and luxury wallpaper.',
      canonicalPath: '/about',
      h1: 'About Ddecor Curtain Shop Decor India',
    });
  }, []);

  return (
    <main>
      <div className="bg-white border-b border-[#E5E1DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'About Us' }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E5E1DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#8B735B] uppercase mb-3">
              <div className="w-8 h-[1px] bg-[#8B735B]"></div>
              <span>LOCAL EXCELLENCE IN GURUGRAM</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#1C1C1C] leading-[1.1] mb-4">
              About D'DECOR Curtain Shop <br className="hidden sm:inline" />
              <span className="italic font-normal">Decor India</span>
            </h1>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
              Located at <strong>Shop No. 6, near Elan Miracle Mall, Sector 84, Gurugram</strong>, we are a dedicated home decor and window treatment studio serving residences and businesses across New Gurgaon and the National Capital Region.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-serif text-[#1C1C1C]">
                Crafting Beautiful Living Spaces with Precision &amp; Transparency
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Choosing the right window treatments shouldn't involve guesswork. Unlike standard off-the-shelf curtains that rarely fit standard Gurgaon apartment heights, we specialize in <strong>made-to-measure tailoring</strong> that accounts for false ceilings, floor clearance, and motorized tracks.
              </p>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Whether you are furnishing a new flat in Sector 84, upgrading blinds in an executive office in Cyber City, or creating a designer wallpaper accent wall in a luxury villa on Golf Course Extension Road, our team brings samples directly to your doorstep.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-stone-800 font-medium">
                <div className="flex items-center gap-2.5">
                  <span className="w-4 h-4 bg-[#8B735B] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>Doorstep Laser Measurement</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-4 h-4 bg-[#8B735B] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>1000+ Fabric &amp; Wallpaper Binders</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-4 h-4 bg-[#8B735B] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>In-House Skilled Tailors &amp; Fitters</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-4 h-4 bg-[#8B735B] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>Google Rated 4.9/5 (30 Reviews)</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#FAF9F6] p-6 sm:p-8 border border-[#E5E1DA] shadow-2xs space-y-6">
                <div className="flex flex-col items-center justify-center p-6 bg-white border border-[#E5E1DA] text-center">
                  <h3 className="font-serif text-3xl font-bold uppercase tracking-tight text-[#1C1C1C]">
                    D'DECOR <span className="font-light italic text-[#8B735B]">India</span>
                  </h3>
                  <p className="text-xs text-[#8B735B] font-semibold tracking-[0.24em] uppercase mt-2">
                    Sector 84, Gurugram • Est. 2018
                  </p>
                </div>

                <GoogleReviewsBadge variant="card" />

                <div className="bg-white p-5 border border-[#E5E1DA] space-y-3">
                  <h3 className="text-sm font-serif font-semibold text-[#1C1C1C] flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#8B735B]" />
                    Visit Our Sector 84 Showroom
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {BUSINESS_CONFIG.address.fullFormatted}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-stone-700 font-semibold pt-1">
                    <Clock className="w-3.5 h-3.5 text-[#8B735B]" />
                    <span>Open 7 Days: 10:00 AM – 9:00 PM</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    id="about-whatsapp-btn"
                    href={getWhatsAppLink('Hi Ddecor India, I would like to book a doorstep visit in Gurgaon.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick('About Page')}
                    className="flex-1 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs uppercase tracking-widest transition text-center flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Chat on WhatsApp</span>
                  </a>

                  <a
                    id="about-directions-btn"
                    href={BUSINESS_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 bg-[#1C1C1C] hover:bg-[#333333] text-white font-semibold text-xs uppercase tracking-widest transition text-center flex items-center justify-center gap-2"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#8B735B]" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
