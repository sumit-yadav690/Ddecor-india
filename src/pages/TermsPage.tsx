import React, { useEffect } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { updateDocumentSEO } from '../lib/seo';
import { BUSINESS_CONFIG } from '../config/business';

export const TermsPage: React.FC = () => {
  useEffect(() => {
    updateDocumentSEO({
      title: 'Terms & Conditions | Ddecor Curtain Shop Decor India Gurgaon',
      description: 'Terms and conditions for custom curtains, blinds and wallpaper services provided by Ddecor Curtain Shop in Sector 84 Gurugram.',
      canonicalPath: '/terms-and-conditions',
      h1: 'Terms and Conditions',
    });
  }, []);

  return (
    <main className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />

        <div className="bg-[#FAF9F6] p-8 sm:p-12 border border-[#E5E1DA] shadow-2xs mt-6 space-y-6 text-stone-700 text-xs sm:text-sm leading-relaxed">
          <div className="flex items-center space-x-2 text-[10px] font-bold tracking-[0.2em] text-[#8B735B] uppercase">
            <div className="w-6 h-[1px] bg-[#8B735B]"></div>
            <span>TERMS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-light text-[#1C1C1C]">Terms and Conditions</h1>
          <p className="text-xs text-stone-500">Last Updated: January 2025</p>

          <p>
            Welcome to the official website of <strong>{BUSINESS_CONFIG.name}</strong>. By accessing our website or booking our doorstep measurement and installation services in Gurugram, you agree to these terms and conditions.
          </p>

          <h2 className="text-xl font-serif font-semibold text-[#1C1C1C] pt-2">1. Measurement &amp; Quotation</h2>
          <p>
            Doorstep consultations and laser measurements are provided without initial obligation across Sector 84 and designated Gurugram localities. Written quotations provided are valid for 15 calendar days from the date of issuance unless stated otherwise.
          </p>

          <h2 className="text-xl font-serif font-semibold text-[#1C1C1C] pt-2">2. Custom Fabrication &amp; Stitching</h2>
          <p>
            Because window curtains, blinds, and customized wallpaper murals are tailored to your unique specifications and window dimensions, fabrication begins once fabric selection and advance confirmation are finalized.
          </p>

          <h2 className="text-xl font-serif font-semibold text-[#1C1C1C] pt-2">3. Installation Services</h2>
          <p>
            Our in-house installation team conducts dust-controlled drilling and hardware leveling. Customers are requested to ensure access to the installation area and safe power points for motor testing if motorized systems are installed.
          </p>

          <h2 className="text-xl font-serif font-semibold text-[#1C1C1C] pt-2">4. Warranty &amp; Support</h2>
          <p>
            Hardware, motorized tracks, and tubular blind motors carry their respective manufacturer warranties (ranging from 1 to 5 years). We provide prompt local after-sales service from our Sector 84 showroom.
          </p>

          <h2 className="text-xl font-serif font-semibold text-[#1C1C1C] pt-2">5. Governing Jurisdiction</h2>
          <p>
            Any disputes arising from services rendered shall be governed under the jurisdiction of the courts of Gurugram, Haryana, India.
          </p>
        </div>
      </div>
    </main>
  );
};
