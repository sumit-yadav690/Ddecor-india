// Analytics & Conversion Tracking Helper

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  // Push to GTM dataLayer if present
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...params,
      timestamp: new Date().toISOString(),
    });
  }

  // Push to gtag if present
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }

  // Optional log in dev mode for debugging
  if (import.meta.env.DEV) {
    console.log(`[Analytics Event] ${eventName}:`, params);
  }
}

export function trackPhoneClick(sourceLocation: string) {
  trackEvent('phone_call_click', {
    category: 'Lead Generation',
    label: sourceLocation,
    value: 1,
  });
}

export function trackWhatsAppClick(sourceLocation: string, service?: string) {
  trackEvent('whatsapp_chat_click', {
    category: 'Lead Generation',
    label: sourceLocation,
    service: service || 'General',
    value: 1,
  });
}

export function trackQuoteCTAClick(buttonLabel: string, pageUrl: string) {
  trackEvent('quote_cta_click', {
    category: 'Engagement',
    label: buttonLabel,
    page: pageUrl,
  });
}

export function trackFormSubmission(service: string, area: string) {
  trackEvent('lead_form_submitted', {
    category: 'Conversion',
    service: service,
    location_area: area,
    value: 5,
  });

  // Google Ads conversion trigger if conversion ID configured
  const googleAdsId = import.meta.env.VITE_GOOGLE_ADS_ID;
  const conversionLabel = import.meta.env.VITE_GOOGLE_ADS_CONVERSION_LABEL;
  if (typeof window !== 'undefined' && typeof window.gtag === 'function' && googleAdsId && conversionLabel) {
    window.gtag('event', 'conversion', {
      send_to: `${googleAdsId}/${conversionLabel}`,
    });
  }
}
