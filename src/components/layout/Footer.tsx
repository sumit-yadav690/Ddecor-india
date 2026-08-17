import React from 'react';
import { Phone, Mail, MapPin, Clock, Star, ArrowUpRight, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../../config/business';
import { trackPhoneClick, trackWhatsAppClick } from '../../lib/analytics';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="bg-[#1C1C1C] text-[#E5E1DA] border-t border-stone-800 pt-16 pb-24 md:pb-14 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand & Address Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt="Ddecor Curtain Shop Decor India Logo"
                className="h-14 sm:h-16 w-auto object-contain bg-white p-1 border border-stone-700 shadow-2xs"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <div className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white uppercase">
                  Ddecor <span className="font-light italic text-[#8B735B]">India</span>
                </div>
                <div className="text-[10px] tracking-[0.22em] text-[#8B735B] uppercase font-semibold mt-1">
                  Curtain &amp; Decor Studio • Sector 84
                </div>
              </div>
            </div>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
              Gurgaon’s trusted destination for customized window treatments and designer wallpaper. Free doorstep measurement, transparent pricing, and precision installation.
            </p>

            <div className="pt-2">
              <a
                href={BUSINESS_CONFIG.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#262626] border border-stone-700/80 px-3.5 py-2 text-xs font-semibold text-[#8B735B] hover:border-[#8B735B] transition"
              >
                <div className="flex text-[#8B735B]">
                  <Star className="w-4 h-4 fill-[#8B735B]" />
                </div>
                <span className="font-bold text-white">{BUSINESS_CONFIG.rating} / 5</span>
                <span className="text-stone-400">({BUSINESS_CONFIG.reviewsCount} Google Reviews)</span>
              </a>
            </div>
          </div>

          {/* Quick Service Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-white font-semibold text-xs tracking-[0.2em] uppercase font-sans">
              Services in Gurgaon
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="/curtains-gurgaon"
                  onClick={(e) => handleNav(e, '/curtains-gurgaon')}
                  className="hover:text-[#8B735B] transition flex items-center justify-between group text-stone-300"
                >
                  <span>Custom Curtains in Gurgaon</span>
                  <span className="text-stone-600 group-hover:text-[#8B735B]">→</span>
                </a>
              </li>
              <li>
                <a
                  href="/blinds-gurgaon"
                  onClick={(e) => handleNav(e, '/blinds-gurgaon')}
                  className="hover:text-[#8B735B] transition flex items-center justify-between group text-stone-300"
                >
                  <span>Window Blinds in Gurgaon</span>
                  <span className="text-stone-600 group-hover:text-[#8B735B]">→</span>
                </a>
              </li>
              <li>
                <a
                  href="/wallpaper-gurgaon"
                  onClick={(e) => handleNav(e, '/wallpaper-gurgaon')}
                  className="hover:text-[#8B735B] transition flex items-center justify-between group text-stone-300"
                >
                  <span>Designer Wallpaper in Gurgaon</span>
                  <span className="text-stone-600 group-hover:text-[#8B735B]">→</span>
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  onClick={(e) => handleNav(e, '/gallery')}
                  className="hover:text-[#8B735B] transition flex items-center justify-between group text-stone-300"
                >
                  <span>Real Project Gallery</span>
                  <span className="text-stone-600 group-hover:text-[#8B735B]">→</span>
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => handleNav(e, '/about')}
                  className="hover:text-[#8B735B] transition flex items-center justify-between group text-stone-300"
                >
                  <span>About Our Showroom</span>
                  <span className="text-stone-600 group-hover:text-[#8B735B]">→</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Visiting Hours */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-white font-semibold text-xs tracking-[0.2em] uppercase font-sans">
              Showroom Location & Contact
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-stone-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#8B735B] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">
                    {BUSINESS_CONFIG.address.shopNumber}, {BUSINESS_CONFIG.address.landmark}
                  </div>
                  <div className="text-stone-400">
                    {BUSINESS_CONFIG.address.sector}, {BUSINESS_CONFIG.address.city}, {BUSINESS_CONFIG.address.state} {BUSINESS_CONFIG.address.pincode}
                  </div>
                  <a
                    href={BUSINESS_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#8B735B] hover:text-white underline underline-offset-2 mt-1 inline-flex items-center gap-1"
                  >
                    Open in Google Maps <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#8B735B] shrink-0" />
                <span>
                  <strong className="text-white">Business Hours:</strong> {BUSINESS_CONFIG.hours.timing}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#8B735B] shrink-0" />
                <div className="flex items-center gap-2">
                  <span className="text-stone-400">Phone / WhatsApp:</span>
                  <a
                    id="footer-phone-link"
                    href={`tel:${BUSINESS_CONFIG.phoneClean}`}
                    onClick={() => trackPhoneClick('Footer')}
                    className="text-white font-bold hover:text-[#8B735B] transition"
                  >
                    {BUSINESS_CONFIG.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#8B735B] shrink-0" />
                <a
                  href={`mailto:${BUSINESS_CONFIG.email}`}
                  className="text-stone-300 hover:text-[#8B735B] transition"
                >
                  {BUSINESS_CONFIG.email}
                </a>
              </div>

              <div className="pt-1">
                <a
                  id="footer-whatsapp-btn"
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('Footer')}
                  className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold uppercase tracking-wider px-4 py-2.5 transition"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>WhatsApp: {BUSINESS_CONFIG.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} {BUSINESS_CONFIG.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="/privacy-policy"
              onClick={(e) => handleNav(e, '/privacy-policy')}
              className="hover:text-stone-300 transition"
            >
              Privacy Policy
            </a>
            <span>•</span>
            <a
              href="/terms-and-conditions"
              onClick={(e) => handleNav(e, '/terms-and-conditions')}
              className="hover:text-stone-300 transition"
            >
              Terms & Conditions
            </a>
            <span>•</span>
            <a
              href="/sitemap"
              onClick={(e) => handleNav(e, '/sitemap')}
              className="hover:text-stone-300 transition"
            >
              HTML Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
