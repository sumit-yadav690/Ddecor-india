import { FAQItem, GalleryProject, ReviewItem, ServiceItem } from '../types';

export const BUSINESS_CONFIG = {
  name: 'Ddecor Curtain Shop Decor India',
  shortName: 'Ddecor Curtain Shop',
  tagline: 'Custom Curtains, Window Blinds & Designer Wallpaper in Gurgaon',
  
  // Exact Physical Location
  address: {
    shopNumber: 'Shop No. 6',
    landmark: 'Near Elan Miracle Mall',
    sector: 'Sector 84',
    city: 'Gurugram',
    state: 'Haryana',
    pincode: '122012',
    country: 'India',
    fullFormatted: 'Shop No. 6, near Elan Miracle Mall, Sector 84, Gurugram, Haryana 122012, India',
  },

  // Geo Coordinates for Sector 84 Gurugram near Elan Miracle
  geo: {
    latitude: 28.4055,
    longitude: 76.9632,
  },

  // Contact Information
  phone: import.meta.env.VITE_BUSINESS_PHONE || '+91 96679 05817',
  phoneClean: (import.meta.env.VITE_BUSINESS_PHONE || '+91 96679 05817').replace(/[^0-9+]/g, ''),
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '919667905817',
  email: import.meta.env.VITE_BUSINESS_EMAIL || 'contact@ddecordecorindia.com',

  // Google Business Profile Real Statistics
  rating: 4.9,
  reviewsCount: 30,
  googleMapsUrl: 'https://maps.google.com/?q=Ddecor+Curtain+Shop+Decor+India+Sector+84+Gurugram+Haryana+122012',
  googleReviewsUrl: 'https://maps.google.com/?q=Ddecor+Curtain+Shop+Decor+India+Sector+84+Gurugram+Haryana+122012',

  // Business Hours
  hours: {
    days: 'Monday – Sunday (All 7 Days)',
    timing: '10:00 AM – 9:00 PM daily',
    opensAt: '10:00',
    closesAt: '21:00',
  },

  // Key Value Propositions
  usps: [
    {
      title: 'Free Doorstep Measurement',
      desc: 'Our window treatment specialist visits your Gurugram home or office with fabric catalogs and laser measuring tools.',
      icon: 'Ruler',
    },
    {
      title: '1,000+ Fabric & Wallpaper Samples',
      desc: 'Explore sheer, blackout, velvet, linen, imported wallpapers, and motorized blind catalogs in person.',
      icon: 'Palette',
    },
    {
      title: 'Perfect Custom Tailoring',
      desc: 'Precision stitching, flawless pleating, and high-durability hardware crafted to your exact window dimensions.',
      icon: 'Scissors',
    },
    {
      title: 'Hassle-Free Installation',
      desc: 'Trained in-house technicians ensure clean, dust-controlled drilling and perfect fitting in Sector 84 & all Gurugram.',
      icon: 'CheckCircle2',
    },
    {
      title: 'Transparent Local Pricing',
      desc: 'Honest pricing with no hidden charges. Custom solutions fitting every budget from modern flats to luxury villas.',
      icon: 'BadgePercent',
    },
  ],

  // Gurugram Service Areas Covered
  serviceAreas: [
    'Sector 84',
    'Sector 83',
    'Sector 82',
    'Sector 85',
    'Sector 86',
    'Vatika India Next',
    'New Gurgaon',
    'Dwarka Expressway',
    'Golf Course Extension Road',
    'Golf Course Road',
    'Sohna Road',
    'DLF Phase 1, 2, 3, 4, 5',
    'Cyber City & Udyog Vihar',
    'Sushant Lok',
    'South City 1 & 2',
    'Sector 48, 49, 50, 56, 57',
  ],
};

// WhatsApp link generator with contextual intent
export function getWhatsAppLink(customMessage?: string, service?: string): string {
  const base = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}`;
  const defaultText = `Hi Ddecor Curtain Shop, I am interested in ${service || 'Curtains/Blinds/Wallpaper'} in Gurgaon. Please share catalogs and quotation.`;
  const text = encodeURIComponent(customMessage || defaultText);
  return `${base}?text=${text}`;
}

// Curated High-Definition Interior Photography (Focused on authentic curtains, blinds, wallpapers)
export const CURTAINS_SERVICES: ServiceItem[] = [
  {
    id: 'blackout-curtains',
    name: '100% Blackout Curtains',
    category: 'curtains',
    tagline: 'Deep Sleep & Thermal Insulation',
    shortDesc: 'Multi-layer blackout fabrics that block 99-100% sunlight and reduce external Gurugram traffic noise.',
    features: ['100% Light blocking', 'Thermal insulation saves AC power', 'Acoustic dampening', 'Custom pinch pleat or eyelet'],
    idealFor: 'Master bedrooms, home theaters, and sunny Gurgaon balconies.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    popular: true,
  },
  {
    id: 'sheer-curtains',
    name: 'Designer Sheer Curtains',
    category: 'curtains',
    tagline: 'Soft Daylight & Airy Elegance',
    shortDesc: 'Delicate linen, voile, and embroidered sheers that filter soft sunlight while maintaining daytime privacy.',
    features: ['Gentle diffused lighting', 'Breathable airy textures', 'Anti-static fabric treatment', 'Layered double-track ready'],
    idealFor: 'Living rooms, drawing rooms, and dining areas in high-rise apartments.',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80',
    popular: true,
  },
  {
    id: 'velvet-drapes',
    name: 'Luxury Velvet Drapes',
    category: 'curtains',
    tagline: 'Regal Texture & Statement Living',
    shortDesc: 'Rich heavyweight velvet and chenille drapes in jewel tones, champagne, and earthy tones with premium fall.',
    features: ['Rich tactile velvet finish', 'Heavyweight luxurious drape fall', 'Crease-resistant', 'Custom header styles'],
    idealFor: 'Luxury villas, penthouse living spaces, and statement dining rooms.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'motorized-curtains',
    name: 'Smart Motorized Curtains',
    category: 'curtains',
    tagline: 'Remote & Mobile Controlled Drapery',
    shortDesc: 'Whisper-quiet automated tracks compatible with Alexa, Google Home, handheld remote, or wall switch.',
    features: ['Silent motor technology', 'Smart Home automation ready', 'Scheduled open/close timers', 'Manual pull override'],
    idealFor: 'Double-height windows, wide balconies, and smart Gurgaon homes.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'pure-linen-curtains',
    name: 'Organic Linen & Cotton Curtains',
    category: 'curtains',
    tagline: 'Scandinavian & Earthy Minimalism',
    shortDesc: 'Natural textured Belgian linen and organic cotton blends for a timeless, relaxed aesthetic.',
    features: ['Natural breathable fiber', 'Pre-shrunk fabric treatment', 'Textured earthy weave', 'Soft cascading fold'],
    idealFor: 'Modern minimalist apartments, sunrooms, and cozy bedrooms.',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'office-drapes',
    name: 'Commercial & Office Curtains',
    category: 'curtains',
    tagline: 'Professional Aesthetic & Flame Retardant',
    shortDesc: 'Durable, fire-retardant, low-maintenance curtain fabrics designed for corporate boardrooms and hotel suites.',
    features: ['FR (Flame Retardant) certified', 'Fade resistant', 'Easy to clean and maintain', 'Clean commercial heading'],
    idealFor: 'Corporate offices in Cyber City, clinics, boutiques, and meeting rooms.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
  },
];

export const BLINDS_SERVICES: ServiceItem[] = [
  {
    id: 'roller-blinds',
    name: 'Custom Roller Blinds',
    category: 'blinds',
    tagline: 'Sleek, Clean & Practical Light Control',
    shortDesc: 'High-performance blackout, sunscreen, and translucent roller fabrics with heavy-duty operating mechanisms.',
    features: ['Anti-microbial & dust repellent', 'Compact top cassette profile', 'Smooth bead-chain / motor control', 'UV protection fabrics'],
    idealFor: 'Kitchens, modern office cabins, study rooms, and compact windows.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    popular: true,
  },
  {
    id: 'zebra-blinds',
    name: 'Zebra / Day & Night Blinds',
    category: 'blinds',
    tagline: 'Dual Layer Precision Lighting',
    shortDesc: 'Alternating sheer and solid stripes that slide over one another to effortlessly adjust between soft view and complete privacy.',
    features: ['Dual-function sheer & solid', 'Modern horizontal aesthetic', 'Zero cords tangle design', 'Available in 100+ pastel & wood tones'],
    idealFor: 'Living rooms, bedrooms, and contemporary Gurgaon apartments.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80',
    popular: true,
  },
  {
    id: 'wooden-venetian-blinds',
    name: 'Wooden & Venetian Blinds',
    category: 'blinds',
    tagline: 'Warm Organic Wood & Aluminum Slats',
    shortDesc: 'Premium basswood, faux wood (moisture-resistant), and sleek aluminum slats with tilting wand control.',
    features: ['Authentic natural wood grains', 'Waterproof faux wood options', 'Precision angle tilt', 'Classic architectural look'],
    idealFor: 'Executive offices, study libraries, bathrooms, and dining areas.',
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'roman-blinds',
    name: 'Custom Roman Blinds',
    category: 'blinds',
    tagline: 'Fabric Warmth with Blind Compactness',
    shortDesc: 'Horizontal fabric folds that stack neatly when raised and lay flat to show exquisite patterns when lowered.',
    features: ['Available in 500+ curtain fabrics', 'Blackout lining optional', 'Neat horizontal fold bars', 'Space-saving elegance'],
    idealFor: 'Bay windows, children bedrooms, and powder rooms.',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'motorized-blinds',
    name: 'Motorized Smart Blinds',
    category: 'blinds',
    tagline: 'Automated Window Solutions',
    shortDesc: 'Battery or AC powered motors controlled by remote, voice assistants, or automated sunrise/sunset routines.',
    features: ['Cordless child & pet safe', 'Multi-channel remote control', 'Smart phone app integration', 'Silent tubular motors'],
    idealFor: 'Hard-to-reach high windows, modern offices, and smart luxury flats.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
  },
];

export const WALLPAPER_SERVICES: ServiceItem[] = [
  {
    id: '3d-textured-wallpaper',
    name: '3D Textured & Geometric Wallpaper',
    category: 'wallpaper',
    tagline: 'Tactile Depth & Modern Architecture',
    shortDesc: 'Embossed textures, concrete textures, metallic geometric weaves, and faux brick wallpapers with realistic touch.',
    features: ['Heavy embossed vinyl finish', 'Washable and scrubbable surface', 'Seamless pattern alignment', 'Long lifespan (8-10 years)'],
    idealFor: 'TV accent walls, living room feature walls, and entryway foyers.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
    popular: true,
  },
  {
    id: 'luxury-floral-damask',
    name: 'Luxury Damask & Floral Wallpaper',
    category: 'wallpaper',
    tagline: 'Timeless Royal Heritage & Botanicals',
    shortDesc: 'Classic European damask, gold foil accents, watercolor botanical gardens, and vintage Japanese murals.',
    features: ['Metallic gold/silver foil detailing', 'Non-woven breathable backing', 'Non-toxic eco-friendly inks', 'Anti-peeling edge guarantee'],
    idealFor: 'Master bedroom headboard walls, powder rooms, and guest suites.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    popular: true,
  },
  {
    id: 'custom-wall-murals',
    name: 'Customized High-Res Wall Murals',
    category: 'wallpaper',
    tagline: 'Tailored Exactly to Your Wall Dimensions',
    shortDesc: 'Custom printed landscape murals, abstract art, world maps, tropical foliage, and customized family themes.',
    features: ['Made-to-measure exact wall sizing', 'Zero seam distortion', 'High DPI resolution printing', 'Seamless matte or canvas texture'],
    idealFor: 'Spacious living rooms, kids bedrooms, cafes, and creative office spaces.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'commercial-office-wallpaper',
    name: 'Commercial & Office Wallcoverings',
    category: 'wallpaper',
    tagline: 'Durable, Professional & Brand Aligning',
    shortDesc: 'Heavy-duty commercial grade vinyl wallpaper designed for high-traffic corridors, conference rooms, and reception areas.',
    features: ['Class A Fire Rated', 'Stain resistant & easy to wipe', 'Subtle sophisticated weaves', 'Acoustic backing option'],
    idealFor: 'Corporate offices in Cyber Hub, clinics, hotels, and retail stores in Gurugram.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
  },
];

// Project Gallery
export const REAL_PROJECTS: GalleryProject[] = [
  {
    id: 'p1',
    title: 'Double-Height Living Room Sheer & Blackout Drapes',
    category: 'curtains',
    location: 'Vatika India Next, Sector 84 Gurugram',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80',
    description: 'Custom motorized 18-foot ripple fold curtains with motorized sheer backing in a luxury penthouse.',
    tag: 'Motorized Curtains',
  },
  {
    id: 'p2',
    title: 'Modern High-Rise Dual Layer Zebra Blinds',
    category: 'blinds',
    location: 'DLF The Ultima, Sector 81 Gurugram',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80',
    description: 'Custom charcoal grey zebra blinds providing flexible daylight control in a 3BHK living area.',
    tag: 'Zebra Blinds',
  },
  {
    id: 'p3',
    title: 'Embossed Metallic TV Accent Wall',
    category: 'wallpaper',
    location: 'Godrej Air, Sector 85 Gurugram',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
    description: 'Textured geometric 3D wallpaper with warm spotlighting behind a 75-inch entertainment unit.',
    tag: '3D Wallpaper',
  },
  {
    id: 'p4',
    title: 'Master Bedroom 100% Thermal Blackout Curtains',
    category: 'curtains',
    location: 'SS The Coralwood, Sector 84 Gurugram',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    description: 'Triple-weave Belgian linen blend blackout drapes on concealed recessed ceiling tracks.',
    tag: 'Blackout Drapes',
  },
  {
    id: 'p5',
    title: 'Executive Conference Room Roller Blinds',
    category: 'blinds',
    location: 'Cyber City, Gurugram',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
    description: 'Flame retardant 3% openness solar screen roller blinds minimizing screen glare in boardroom.',
    tag: 'Commercial Blinds',
  },
  {
    id: 'p6',
    title: 'Tropical Botanical Wall Mural in Master Bedroom',
    category: 'wallpaper',
    location: 'Bestech Park View Grand Spa, Sector 81',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80',
    description: 'Custom scaled lush green botanical wallpaper on smooth non-woven fabric backing.',
    tag: 'Designer Mural',
  },
  {
    id: 'p7',
    title: 'Warm Natural Basswood Wooden Blinds',
    category: 'blinds',
    location: 'Sohna Road Villa, Gurugram',
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1000&q=80',
    description: '50mm natural oak wood venetian blinds with matching decorative fabric tapes in home library.',
    tag: 'Wooden Blinds',
  },
  {
    id: 'p8',
    title: 'Dining Room Classic European Damask Wallpaper',
    category: 'wallpaper',
    location: 'Golf Course Extension Road, Gurugram',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1000&q=80',
    description: 'Champagne gold embossed wallpaper paired with crystal chandelier for a warm royal ambiance.',
    tag: 'Luxury Wallpaper',
  },
];

// Customer Reviews (Truthful with official 4.9/5 rating badge)
export const CUSTOMER_REVIEWS: ReviewItem[] = [
  {
    id: 'r1',
    author: 'Rajiv Sharma',
    location: 'Sector 84, Gurugram',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Got blackout curtains and sheer curtains for our 3BHK flat near Elan Miracle. The owner visited with fabric catalogs, took laser measurements, and completed the installation within 4 days. Flawless stitch and finish!',
    serviceUsed: 'Curtains',
  },
  {
    id: 'r2',
    author: 'Priya Mehra',
    location: 'Vatika India Next, Gurgaon',
    rating: 5,
    date: '1 month ago',
    comment: 'Superb quality zebra blinds for our living room and study. Very smooth mechanism and neat installation with zero dust left behind. Pricing was transparent and much better than online brands.',
    serviceUsed: 'Blinds',
  },
  {
    id: 'r3',
    author: 'Amitabh Verma',
    location: 'Sector 83, Gurugram',
    rating: 5,
    date: '1 month ago',
    comment: 'Installed 3D textured wallpaper in our drawing room feature wall. The technician aligned the patterns so seamlessly that it looks like a single continuous art piece. Highly recommended shop in Sector 84!',
    serviceUsed: 'Wallpaper',
  },
  {
    id: 'r4',
    author: 'Neha Kapoor',
    location: 'Golf Course Extension Road',
    rating: 5,
    date: '2 months ago',
    comment: 'We did full home window treatments with Ddecor Curtain Shop. Motorized tracks in double-height windows and wooden blinds in the kitchen. Very polite staff and prompt after-sales support.',
    serviceUsed: 'Full Home Decor',
  },
];

// Service Specific FAQs
export const GENERAL_FAQS: FAQItem[] = [
  {
    question: 'Where is your curtain and wallpaper shop located in Gurgaon?',
    answer: 'Our showroom is located at Shop No. 6, near Elan Miracle Mall, Sector 84, Gurugram, Haryana 122012. We are open all 7 days a week from 10:00 AM to 9:00 PM.',
    category: 'general',
  },
  {
    question: 'Do you offer free doorstep measurement and catalog visits in Gurgaon?',
    answer: 'Yes! We provide free doorstep measurement across Sector 84, New Gurgaon, Golf Course Ext, Dwarka Expressway, Sohna Road, and all Gurugram areas. Our expert brings physical fabric and wallpaper sample catalogs directly to your home or office.',
    category: 'general',
  },
  {
    question: 'How long does custom curtain stitching and blind installation take?',
    answer: 'Standard custom curtain stitching and blind manufacturing usually takes 3 to 5 working days from measurement confirmation. Once ready, our in-house installation team completes fitting in a few hours.',
    category: 'general',
  },
  {
    question: 'Can you bring motorized curtain and smart blind options?',
    answer: 'Yes, we specialize in motorized curtain tracks and smart roller/zebra blinds compatible with mobile apps, RF remotes, and home automation systems like Alexa and Google Home.',
    category: 'general',
  },
];

export const CURTAINS_FAQS: FAQItem[] = [
  {
    question: 'How do I choose between sheer and blackout curtains in Gurgaon?',
    answer: 'For Gurgaon apartments with strong sunlight (especially south/west facing), we recommend double-track layering: a 100% blackout curtain for restful sleep and heat reduction, paired with a sheer curtain to enjoy soft daylight and privacy during the daytime.',
    category: 'curtains',
  },
  {
    question: 'Do you provide curtain measurement and installation in Gurugram?',
    answer: 'Yes, our team handles the entire end-to-end process: precision laser window measurement, customized header stitching (Eyelet, American Pleat, Triple Pinch, Wave/Ripple fold), heavy-duty curtain rods/tracks, and clean installation.',
    category: 'curtains',
  },
  {
    question: 'Which curtain fabrics are best for easy maintenance?',
    answer: 'High-density polyester blends, linen-cotton blends, and jacquard fabrics are durable, colorfast, and wrinkle-resistant, making them ideal for Gurugram weather conditions.',
    category: 'curtains',
  },
  {
    question: 'Do you customize curtains for large double-height windows and balcony sliders?',
    answer: 'Yes, we regularly fabricate continuous wide-span and double-height drapery up to 20+ feet tall, including heavy-duty motorized track installations for high-rise Gurugram apartments.',
    category: 'curtains',
  },
];

export const BLINDS_FAQS: FAQItem[] = [
  {
    question: 'Which blinds are best for home windows in Gurgaon?',
    answer: 'Zebra blinds (Day & Night) are our most popular choice for living rooms because of versatile light filtering. For bedrooms, 100% blackout roller blinds are ideal. For kitchens and study rooms, wooden or faux wood venetian blinds provide classic warmth and moisture resistance.',
    category: 'blinds',
  },
  {
    question: 'Are roller blinds and zebra blinds easy to clean?',
    answer: 'Yes! Our roller and zebra fabrics are treated with dust-repellent coatings. They can be easily cleaned with a feather duster or gently wiped with a damp microfiber cloth without removing the blind.',
    category: 'blinds',
  },
  {
    question: 'Do you supply and install commercial office blinds in Cyber City / Udyog Vihar?',
    answer: 'Yes, we provide bulk commercial solar-screen roller blinds, motorized conference room blinds, and vertical blinds with fire-retardant certification for offices across Gurgaon.',
    category: 'blinds',
  },
  {
    question: 'What is the warranty on blind mechanisms and motors?',
    answer: 'Our premium blind clutch mechanisms and tubular motors come with standard manufacturer warranties ranging from 1 to 5 years, supported by prompt local service in Gurugram.',
    category: 'blinds',
  },
];

export const WALLPAPER_FAQS: FAQItem[] = [
  {
    question: 'Do you provide professional wallpaper installation in Gurgaon?',
    answer: 'Yes, our experienced wallpaper installers ensure proper wall inspection, primer application, perfect pattern alignment, bubble-free adhesion, and concealed seams.',
    category: 'wallpaper',
  },
  {
    question: 'Are your wallpapers washable and durable?',
    answer: 'Yes, our vinyl-coated and non-woven wallpapers are washable with a soft sponge and mild soap. High-quality wallpapers typically last 8 to 12 years without fading or peeling.',
    category: 'wallpaper',
  },
  {
    question: 'Can wallpaper be customized to my exact wall size?',
    answer: 'Yes, we create custom-printed wall murals tailored to your exact height and width measurements, ensuring the design fits without awkward cropping.',
    category: 'wallpaper',
  },
  {
    question: 'How long does wallpaper installation take for a single room?',
    answer: 'Installing a feature wall wallpaper generally takes 2 to 3 hours. A complete 3-wall bedroom can be finished within one working day.',
    category: 'wallpaper',
  },
];
