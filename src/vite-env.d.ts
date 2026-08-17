/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BUSINESS_PHONE?: string;
  readonly VITE_WHATSAPP_NUMBER?: string;
  readonly VITE_BUSINESS_EMAIL?: string;
  readonly VITE_GA4_MEASUREMENT_ID?: string;
  readonly VITE_GTM_ID?: string;
  readonly VITE_GOOGLE_ADS_ID?: string;
  readonly VITE_GOOGLE_ADS_CONVERSION_LABEL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
