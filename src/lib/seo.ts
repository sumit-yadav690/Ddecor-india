import { BUSINESS_CONFIG } from '../config/business';
import { FAQItem, SEOMetadata } from '../types';

export function updateDocumentSEO(seo: SEOMetadata, faqs?: FAQItem[]) {
  // Update Title
  document.title = seo.title;

  // Update Meta Description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', seo.description);

  // Update Canonical Link
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : 'https://ddecordecorindia.com';
  canonicalLink.setAttribute('href', `${currentOrigin}${seo.canonicalPath}`);

  // Update OG tags
  const ogTags: Record<string, string> = {
    'og:title': seo.title,
    'og:description': seo.description,
    'og:url': `${currentOrigin}${seo.canonicalPath}`,
    'og:type': 'website',
  };

  Object.entries(ogTags).forEach(([property, content]) => {
    let el = document.querySelector(`meta[property="${property}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('property', property);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  });

  // Inject/Update JSON-LD Schemas
  injectStructuredData(seo, faqs);
}

function injectStructuredData(seo: SEOMetadata, faqs?: FAQItem[]) {
  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : 'https://ddecordecorindia.com';
  const pageUrl = `${currentOrigin}${seo.canonicalPath}`;

  // 1. Local Business Schema (HomeGoodsStore / Window Treatments)
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'HomeGoodsStore',
    '@id': `${currentOrigin}/#localbusiness`,
    name: BUSINESS_CONFIG.name,
    alternateName: BUSINESS_CONFIG.shortName,
    description: BUSINESS_CONFIG.tagline,
    url: currentOrigin,
    telephone: BUSINESS_CONFIG.phoneClean,
    email: BUSINESS_CONFIG.email,
    priceRange: '₹₹',
    image: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${BUSINESS_CONFIG.address.shopNumber}, ${BUSINESS_CONFIG.address.landmark}, ${BUSINESS_CONFIG.address.sector}`,
      addressLocality: BUSINESS_CONFIG.address.city,
      addressRegion: BUSINESS_CONFIG.address.state,
      postalCode: BUSINESS_CONFIG.address.pincode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_CONFIG.geo.latitude,
      longitude: BUSINESS_CONFIG.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: BUSINESS_CONFIG.hours.opensAt,
        closes: BUSINESS_CONFIG.hours.closesAt,
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Window Treatment & Home Decor Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Curtains & Installation',
            description: 'Custom tailored sheer, blackout, motorized, and designer curtains in Gurugram.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Window Blinds & Installation',
            description: 'Roller, zebra, wooden, and motorized blinds for homes and offices in Gurugram.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Designer Wallpaper Supply & Installation',
            description: '3D textured, floral, geometric, and customized wall murals in Sector 84 Gurugram.',
          },
        },
      ],
    },
    areaServed: BUSINESS_CONFIG.serviceAreas.map((area) => ({
      '@type': 'City',
      name: `${area}, Gurugram`,
    })),
  };

  // 2. Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BUSINESS_CONFIG.name,
    url: currentOrigin,
    logo: `${currentOrigin}/favicon.svg`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS_CONFIG.phoneClean,
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
  };

  // 3. WebPage & Breadcrumbs
  const breadcrumbItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: currentOrigin,
    },
  ];

  if (seo.canonicalPath !== '/') {
    const pageName = seo.h1 || seo.title.split('|')[0].trim();
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: pageName,
      item: pageUrl,
    });
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems,
  };

  // 4. FAQ Schema if FAQs present
  let faqSchema = null;
  if (faqs && faqs.length > 0) {
    faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };
  }

  // Combine schemas into an array
  const allSchemas: object[] = [localBusinessSchema, organizationSchema, breadcrumbSchema];
  if (faqSchema) {
    allSchemas.push(faqSchema);
  }

  // Inject script
  let scriptEl = document.getElementById('jsonld-schema');
  if (!scriptEl) {
    scriptEl = document.createElement('script');
    scriptEl.id = 'jsonld-schema';
    scriptEl.setAttribute('type', 'application/ld+json');
    document.head.appendChild(scriptEl);
  }
  scriptEl.textContent = JSON.stringify(allSchemas);
}
