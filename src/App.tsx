import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileStickyBar } from './components/layout/MobileStickyBar';
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp';

// Pages
import { HomePage } from './pages/HomePage';
import { CurtainsPage } from './pages/CurtainsPage';
import { BlindsPage } from './pages/BlindsPage';
import { WallpaperPage } from './pages/WallpaperPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { ThankYouPage } from './pages/ThankYouPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { SitemapPage } from './pages/SitemapPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname || '/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigate = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Route selector
  const renderPage = () => {
    const normalizedPath = currentPath.toLowerCase().replace(/\/$/, '') || '/';

    switch (normalizedPath) {
      case '/':
        return <HomePage onNavigate={navigate} />;
      case '/curtains-gurgaon':
        return <CurtainsPage onNavigate={navigate} />;
      case '/blinds-gurgaon':
        return <BlindsPage onNavigate={navigate} />;
      case '/wallpaper-gurgaon':
        return <WallpaperPage onNavigate={navigate} />;
      case '/about':
        return <AboutPage onNavigate={navigate} />;
      case '/gallery':
        return <GalleryPage onNavigate={navigate} />;
      case '/contact':
        return <ContactPage />;
      case '/thank-you':
        return <ThankYouPage onNavigate={navigate} />;
      case '/privacy-policy':
        return <PrivacyPolicyPage />;
      case '/terms-and-conditions':
        return <TermsPage />;
      case '/sitemap':
        return <SitemapPage onNavigate={navigate} />;
      default:
        return (
          <div className="py-24 text-center px-4 bg-[#FAF9F6]">
            <h1 className="text-4xl font-serif font-light text-[#1C1C1C] mb-4">404 - Page Not Found</h1>
            <p className="text-stone-600 mb-6 max-w-md mx-auto text-sm">
              The page you are looking for does not exist. Explore our custom curtains, window blinds, and designer wallpaper in Gurgaon.
            </p>
            <button
              onClick={() => navigate('/')}
              className="bg-[#1C1C1C] hover:bg-[#333333] text-white font-semibold px-6 py-3 text-xs uppercase tracking-widest transition cursor-pointer"
            >
              Back to Home
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAF9F6] text-[#1C1C1C]">
      <Navbar currentPath={currentPath} onNavigate={navigate} />

      <div className="flex-1">
        {renderPage()}
      </div>

      <Footer onNavigate={navigate} />

      {/* Floating and Mobile CTAs */}
      <FloatingWhatsApp />
      <MobileStickyBar onNavigate={navigate} />
    </div>
  );
}
