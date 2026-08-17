import React, { useEffect } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { updateDocumentSEO } from '../lib/seo';
import { BUSINESS_CONFIG } from '../config/business';

export const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
    updateDocumentSEO({
      title: 'Privacy Policy | Ddecor Curtain Shop Decor India Gurgaon',
      description: 'Privacy policy for Ddecor Curtain Shop in Sector 84 Gurugram. We respect your personal data and protect your contact information.',
      canonicalPath: '/privacy-policy',
      h1: 'Privacy Policy',
    });
  }, []);

  return (
    <main className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

        <div className="bg-[#FAF9F6] p-8 sm:p-12 border border-[#E5E1DA] shadow-2xs mt-6 space-y-6 text-stone-700 text-xs sm:text-sm leading-relaxed">
          <div className="flex items-center space-x-2 text-[10px] font-bold tracking-[0.2em] text-[#8B735B] uppercase">
            <div className="w-6 h-[1px] bg-[#8B735B]"></div>
            <span>LEGAL</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-light text-[#1C1C1C]">Privacy Policy</h1>
          <p className="text-xs text-stone-500">Last Updated: January 2025</p>

          <p>
            At <strong>{BUSINESS_CONFIG.name}</strong>, we are committed to protecting the privacy and security of our visitors and customers in Gurugram, Haryana and across India. This Privacy Policy explains how we collect, use, and protect your information when you request a quotation or interact with our website.
          </p>

          <h2 className="text-xl font-serif font-semibold text-[#1C1C1C] pt-2">1. Information We Collect</h2>
          <p>
            When you submit an enquiry form or contact us via WhatsApp or Phone, we collect the following details:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-stone-600">
            <li>Your Name</li>
            <li>Your Phone / WhatsApp Number</li>
            <li>Your Location or Society in Gurgaon (e.g., Sector 84, Vatika India Next)</li>
            <li>Your service requirements (Curtains, Blinds, Wallpaper)</li>
          </ul>

          <h2 className="text-xl font-serif font-semibold text-[#1C1C1C] pt-2">2. How We Use Your Information</h2>
          <p>
            We use your contact information solely to:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-stone-600">
            <li>Coordinate and confirm your free doorstep measurement and catalog visit.</li>
            <li>Send accurate price estimates and fabric/wallpaper availability updates.</li>
            <li>Provide customer support before, during, and after installation.</li>
          </ul>
          <p>
            We do <strong>not</strong> sell, rent, or trade your personal contact information to any third-party marketing companies.
          </p>

          <h2 className="text-xl font-serif font-semibold text-[#1C1C1C] pt-2">3. Cookies and Analytics</h2>
          <p>
            Our website uses standard analytics technologies (like Google Analytics and Google Ads conversion pixels) to understand anonymous website traffic patterns and improve user experience.
          </p>

          <h2 className="text-xl font-serif font-semibold text-[#1C1C1C] pt-2">4. Contact Us</h2>
          <p>
            If you have questions regarding our privacy practices, please visit our showroom at:
            <br />
            <strong>{BUSINESS_CONFIG.address.fullFormatted}</strong>
            <br />
            Phone: {BUSINESS_CONFIG.phone} | Email: {BUSINESS_CONFIG.email}
          </p>
        </div>
      </div>
    </main>
  );
};
