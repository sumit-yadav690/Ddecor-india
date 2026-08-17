import React, { useEffect } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { updateDocumentSEO } from '../lib/seo';
import { BUSINESS_CONFIG } from '../config/business';
import { Layers, Eye, Palette, MapPin, ArrowRight } from 'lucide-react';

interface SitemapPageProps {
  onNavigate: (path: string) => void;
}

export const SitemapPage: React.FC<SitemapPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    updateDocumentSEO({
      title: 'Sitemap | Ddecor Curtain Shop Decor India Gurgaon',
      description: 'HTML sitemap and full site index for Ddecor Curtain Shop Decor India Sector 84 Gurugram.',
      canonicalPath: '/sitemap',
      h1: 'Website Sitemap',
    });
  }, []);

  const handleNav = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  const siteLinks = [
    {
      category: 'Main Pages',
      links: [
        { name: 'Homepage (Curtains, Blinds & Wallpaper in Gurgaon)', path: '/' },
        { name: 'About Our Showroom', path: '/about' },
        { name: 'Real Project Gallery', path: '/gallery' },
        { name: 'Contact & Showroom Directions', path: '/contact' },
        { name: 'Free Quote Confirmation Page', path: '/thank-you' },
      ],
    },
    {
      category: 'Service Landing Pages',
      links: [
        { name: 'Custom Curtains in Gurgaon (/curtains-gurgaon)', path: '/curtains-gurgaon' },
        { name: 'Window Blinds in Gurgaon (/blinds-gurgaon)', path: '/blinds-gurgaon' },
        { name: 'Designer Wallpaper in Gurgaon (/wallpaper-gurgaon)', path: '/wallpaper-gurgaon' },
      ],
    },
    {
      category: 'Legal & Policies',
      links: [
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Terms & Conditions', path: '/terms-and-conditions' },
      ],
    },
  ];

  return (
    <main className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'HTML Sitemap' }]} />

        <div className="bg-[#FAF9F6] p-8 sm:p-12 border border-[#E5E1DA] shadow-2xs mt-6 space-y-8">
          <div>
            <div className="flex items-center space-x-2 text-[10px] font-bold tracking-[0.2em] text-[#8B735B] uppercase mb-2">
              <div className="w-6 h-[1px] bg-[#8B735B]"></div>
              <span>INDEX</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-light text-[#1C1C1C]">Website Sitemap</h1>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              Comprehensive list of all active pages and local landing pages for {BUSINESS_CONFIG.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteLinks.map((group, idx) => (
              <div key={idx} className="space-y-3">
                <h2 className="text-xs font-bold font-serif uppercase tracking-widest text-[#8B735B] border-b border-[#E5E1DA] pb-2">
                  {group.category}
                </h2>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {group.links.map((link, lidx) => (
                    <li key={lidx}>
                      <a
                        href={link.path}
                        onClick={(e) => handleNav(e, link.path)}
                        className="text-stone-700 hover:text-[#1C1C1C] font-normal transition flex items-center justify-between group py-1"
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#8B735B] group-hover:translate-x-0.5 transition" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Local Gurugram Service Area Matrix */}
          <div className="pt-6 border-t border-[#E5E1DA]">
            <h2 className="text-xs font-bold font-serif uppercase tracking-widest text-[#8B735B] mb-3">
              Doorstep Service Coverage Areas in Gurugram
            </h2>
            <div className="flex flex-wrap gap-2 text-xs text-stone-600">
              {BUSINESS_CONFIG.serviceAreas.map((area, aidx) => (
                <span key={aidx} className="bg-white px-3 py-1.5 border border-[#E5E1DA] text-stone-700">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
