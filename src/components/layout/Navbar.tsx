import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Star, MapPin, MessageCircle, ChevronDown, Sparkles, Layers, Image as ImageIcon } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../../config/business';
import { trackWhatsAppClick } from '../../lib/analytics';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const serviceSublinks = [
    {
      name: 'Custom Curtains',
      path: '/curtains-gurgaon',
      desc: 'Blackout, sheer, motorized & luxury drapery',
      icon: Layers,
    },
    {
      name: 'Window Blinds',
      path: '/blinds-gurgaon',
      desc: 'Roller, zebra, wooden & automated blinds',
      icon: Sparkles,
    },
    {
      name: 'Designer Wallpaper',
      path: '/wallpaper-gurgaon',
      desc: '3D textures, geometric, floral & custom murals',
      icon: ImageIcon,
    },
  ];

  const isServicesActive = serviceSublinks.some((s) => s.path === currentPath);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#E5E1DA]">
      {/* Top micro bar for Local Trust & Hours */}
      <div className="bg-[#1C1C1C] text-[#E5E1DA] text-[11px] py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-stone-200 font-medium tracking-wide">
              <MapPin className="w-3.5 h-3.5 text-[#8B735B]" />
              Shop No. 6, Near Elan Miracle Mall, Sector 84, Gurugram
            </span>
            <span className="text-stone-600">•</span>
            <span className="text-[#E5E1DA]/80 tracking-wide">Open 7 Days: 10:00 AM – 9:00 PM</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={BUSINESS_CONFIG.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#E5E1DA] hover:text-[#8B735B] transition font-medium"
            >
              <Star className="w-3.5 h-3.5 fill-[#8B735B] text-[#8B735B]" />
              <span className="tracking-wide">4.9★ (30 Google Reviews)</span>
            </a>
            <span className="text-stone-600">•</span>
            <a
              id="topbar-whatsapp-link"
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('Top Bar')}
              className="font-bold text-emerald-400 hover:text-emerald-300 transition tracking-wider flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-400" />
              <span>WhatsApp / Contact: {BUSINESS_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Local Identity */}
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className="flex flex-col group cursor-pointer py-1"
            aria-label="D'DECOR Curtain Shop Decor India Home"
          >
            <div className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1C1C] leading-none uppercase group-hover:text-[#8B735B] transition-colors">
              D'DECOR <span className="font-light italic text-[#8B735B]">India</span>
            </div>
            <div className="text-[9px] sm:text-[10px] tracking-[0.24em] text-[#8B735B] uppercase font-semibold mt-1.5">
              Curtain &amp; Decor Studio • Sector 84
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Navigation">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className={`text-xs font-semibold uppercase tracking-[0.15em] transition-colors relative py-1 cursor-pointer ${
                currentPath === '/'
                  ? 'text-[#1C1C1C] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#8B735B]'
                  : 'text-[#1C1C1C]/70 hover:text-[#8B735B]'
              }`}
            >
              Home
            </a>

            {/* Services Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                id="services-menu-dropdown-toggle"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`text-xs font-semibold uppercase tracking-[0.15em] transition-colors flex items-center gap-1.5 py-2 cursor-pointer ${
                  isServicesActive
                    ? 'text-[#1C1C1C] font-bold'
                    : 'text-[#1C1C1C]/70 hover:text-[#8B735B]'
                }`}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-[#8B735B]' : 'text-stone-400'
                  }`}
                />
              </button>

              {/* Dropdown Menu Box */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white border border-[#E5E1DA] shadow-xl p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-3 py-2 border-b border-[#E5E1DA] mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8B735B]">
                      Our Custom Solutions
                    </span>
                  </div>
                  {serviceSublinks.map((sublink) => {
                    const Icon = sublink.icon;
                    const isActive = currentPath === sublink.path;
                    return (
                      <a
                        key={sublink.path}
                        href={sublink.path}
                        onClick={(e) => handleLinkClick(e, sublink.path)}
                        className={`flex items-start gap-3 p-3 transition rounded-none group cursor-pointer ${
                          isActive
                            ? 'bg-[#FAF9F6] border-l-2 border-[#8B735B]'
                            : 'hover:bg-[#FAF9F6]'
                        }`}
                      >
                        <div
                          className={`w-8 h-8 flex items-center justify-center shrink-0 border ${
                            isActive
                              ? 'bg-[#8B735B] text-white border-[#8B735B]'
                              : 'bg-white text-stone-600 border-[#E5E1DA] group-hover:border-[#8B735B] group-hover:text-[#8B735B]'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div
                            className={`text-xs font-semibold uppercase tracking-wider ${
                              isActive
                                ? 'text-[#1C1C1C] font-bold'
                                : 'text-[#1C1C1C] group-hover:text-[#8B735B]'
                            }`}
                          >
                            {sublink.name}
                          </div>
                          <div className="text-[11px] text-stone-500 mt-0.5 leading-snug">
                            {sublink.desc}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            <a
              href="/gallery"
              onClick={(e) => handleLinkClick(e, '/gallery')}
              className={`text-xs font-semibold uppercase tracking-[0.15em] transition-colors relative py-1 cursor-pointer ${
                currentPath === '/gallery'
                  ? 'text-[#1C1C1C] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#8B735B]'
                  : 'text-[#1C1C1C]/70 hover:text-[#8B735B]'
              }`}
            >
              Gallery
            </a>

            <a
              href="/about"
              onClick={(e) => handleLinkClick(e, '/about')}
              className={`text-xs font-semibold uppercase tracking-[0.15em] transition-colors relative py-1 cursor-pointer ${
                currentPath === '/about'
                  ? 'text-[#1C1C1C] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#8B735B]'
                  : 'text-[#1C1C1C]/70 hover:text-[#8B735B]'
              }`}
            >
              About
            </a>

            <a
              href="/contact"
              onClick={(e) => handleLinkClick(e, '/contact')}
              className={`text-xs font-semibold uppercase tracking-[0.15em] transition-colors relative py-1 cursor-pointer ${
                currentPath === '/contact'
                  ? 'text-[#1C1C1C] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#8B735B]'
                  : 'text-[#1C1C1C]/70 hover:text-[#8B735B]'
              }`}
            >
              Contact Us
            </a>
          </nav>

          {/* Right Action CTAs: Direct WhatsApp & Contact Us */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="navbar-whatsapp-btn"
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('Navbar Button')}
              className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold uppercase tracking-[0.18em] px-4 py-2.5 transition active:scale-[0.98] cursor-pointer shadow-2xs"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              id="navbar-contact-link-btn"
              href="/contact"
              onClick={(e) => handleLinkClick(e, '/contact')}
              className="inline-flex items-center gap-2 bg-[#1C1C1C] hover:bg-[#333333] text-white text-xs font-semibold uppercase tracking-[0.18em] px-4 py-2.5 transition active:scale-[0.98] cursor-pointer"
            >
              <span>Contact Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('Mobile Nav WhatsApp')}
              className="p-2.5 text-emerald-700 border border-[#E5E1DA] bg-white sm:hidden"
              aria-label="WhatsApp Us"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
            </a>

            <button
              id="mobile-nav-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-[#1C1C1C] border border-[#E5E1DA] bg-white hover:bg-stone-50 transition cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E5E1DA] bg-[#FAF9F6] px-4 pt-4 pb-6 space-y-2 max-h-[85vh] overflow-y-auto">
          <div className="p-3 bg-white border border-[#E5E1DA] mb-3 flex items-center justify-between text-xs">
            <span className="font-bold text-[#1C1C1C] uppercase tracking-wider">Sector 84, Gurugram</span>
            <span className="text-[#8B735B] font-semibold">4.9★ (30 Reviews)</span>
          </div>

          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className={`block px-4 py-3 text-xs uppercase tracking-widest font-semibold transition border ${
              currentPath === '/'
                ? 'bg-[#1C1C1C] text-white border-[#1C1C1C]'
                : 'bg-white text-[#1C1C1C] border-[#E5E1DA] hover:border-[#8B735B]'
            }`}
          >
            Home
          </a>

          {/* Mobile Services Accordion */}
          <div className="border border-[#E5E1DA] bg-white">
            <button
              id="mobile-services-accordion-btn"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between px-4 py-3 text-xs uppercase tracking-widest font-semibold text-[#1C1C1C] cursor-pointer"
            >
              <span className={isServicesActive ? 'text-[#8B735B] font-bold' : ''}>
                Services (Curtains, Blinds &amp; Wallpaper)
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileServicesOpen ? 'rotate-180 text-[#8B735B]' : 'text-stone-400'
                }`}
              />
            </button>

            {mobileServicesOpen && (
              <div className="border-t border-[#E5E1DA] bg-[#FAF9F6] p-2 space-y-1">
                {serviceSublinks.map((sublink) => {
                  const Icon = sublink.icon;
                  const isActive = currentPath === sublink.path;
                  return (
                    <a
                      key={sublink.path}
                      href={sublink.path}
                      onClick={(e) => handleLinkClick(e, sublink.path)}
                      className={`flex items-center gap-3 px-3 py-2.5 text-xs transition ${
                        isActive
                          ? 'bg-[#1C1C1C] text-white'
                          : 'bg-white text-[#1C1C1C] hover:bg-stone-50 border border-[#E5E1DA]'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#8B735B]' : 'text-[#8B735B]'}`} />
                      <span className="font-semibold uppercase tracking-wider">{sublink.name}</span>
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          <a
            href="/gallery"
            onClick={(e) => handleLinkClick(e, '/gallery')}
            className={`block px-4 py-3 text-xs uppercase tracking-widest font-semibold transition border ${
              currentPath === '/gallery'
                ? 'bg-[#1C1C1C] text-white border-[#1C1C1C]'
                : 'bg-white text-[#1C1C1C] border-[#E5E1DA] hover:border-[#8B735B]'
            }`}
          >
            Gallery
          </a>

          <a
            href="/about"
            onClick={(e) => handleLinkClick(e, '/about')}
            className={`block px-4 py-3 text-xs uppercase tracking-widest font-semibold transition border ${
              currentPath === '/about'
                ? 'bg-[#1C1C1C] text-white border-[#1C1C1C]'
                : 'bg-white text-[#1C1C1C] border-[#E5E1DA] hover:border-[#8B735B]'
            }`}
          >
            About
          </a>

          <a
            href="/contact"
            onClick={(e) => handleLinkClick(e, '/contact')}
            className={`block px-4 py-3 text-xs uppercase tracking-widest font-semibold transition border ${
              currentPath === '/contact'
                ? 'bg-[#1C1C1C] text-white border-[#1C1C1C]'
                : 'bg-white text-[#1C1C1C] border-[#E5E1DA] hover:border-[#8B735B]'
            }`}
          >
            Contact Us
          </a>

          <div className="pt-3 flex flex-col gap-2">
            <a
              id="mobile-menu-whatsapp-btn"
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setMobileMenuOpen(false);
                trackWhatsAppClick('Mobile Menu');
              }}
              className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs uppercase tracking-widest py-3.5 text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp ({BUSINESS_CONFIG.phone})</span>
            </a>

            <a
              id="mobile-menu-contact-btn"
              href="/contact"
              onClick={(e) => handleLinkClick(e, '/contact')}
              className="w-full bg-[#1C1C1C] text-white font-semibold text-xs uppercase tracking-widest py-3.5 text-center flex items-center justify-center gap-2"
            >
              <MapPin className="w-3.5 h-3.5 text-[#8B735B]" />
              <span>Visit Showroom / Contact Us</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
