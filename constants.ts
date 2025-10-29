
import {
  ProductCategory,
  KeyValueProposition,
  BrandPillar,
  Industry,
  QualityPoint,
  CostComparison,
  CorporateDetail,
  TechnicalStandard
} from './types';

// --- Color Palette (Derived from EMPHZ Logo) ---
export const COLOR_PALETTE = {
  NAVY: '#2A2A2A',          // Charcoal Black from Logo Text (used as primary)
  TEAL: '#008C99',          // Teal/Cyan from Logo Bolt (used as accent)
  WHITE: '#FFFFFF',
  BACKGROUND: '#F4F4F4',      // Off-White from Logo Background
  TEXT_PRIMARY: '#2A2A2A',     // Charcoal Black
  TEXT_SECONDARY: '#808080',   // Brushed Metal Gray
  BORDER: '#DCDCDC',         // Light Metallic Gray
  SUCCESS: '#28A745',          // Vibrant Green (Standard UI color)
  NEUTRAL: '#808080',          // Standard Gray (same as secondary text)
};

// --- Homepage Content ---
export const HERO_SECTION = {
  headline: "Engineering Tomorrow’s Infrastructure — Today",
  subline: "High-performance GRP composite solutions engineered to outlast steel, outperform concrete, and redefine sustainability.",
  cta1: "Explore Our Products",
  cta2: "Request a Project Quote",
  backgroundImage: "https://picsum.photos/1920/1080?random=factory-cinematic",
};

export const KEY_VALUE_PROPOSITIONS: KeyValueProposition[] = [
  {
    coreValue: "Corrosion-Immune Materials",
    description: "Built for endurance — EMPHZ composites remain unaffected by salt, humidity, and chemicals even in coastal and industrial zones.",
  },
  {
    coreValue: "50-Year Lifecycle Advantage",
    description: "Maintenance-free operation with zero repainting, no rust, and the lowest Total Cost of Ownership in the industry.",
  },
  {
    coreValue: "Engineered for Precision",
    description: "Every EMPHZ product meets or exceeds IEC, UL, and BIS standards — ensuring unmatched reliability and safety.",
  },
];

export const BRAND_PILLARS: BrandPillar[] = [
  {
    icon: "🌎", // Placeholder for actual icon
    title: "Sustainability by Design",
    description: "100% recyclable GRP composites",
  },
  {
    icon: "⚙️", // Placeholder for actual icon
    title: "Smart Engineering",
    description: "Designed and validated in-house with precision tooling",
  },
  {
    icon: "🧱", // Placeholder for actual icon
    title: "Lightweight Strength",
    description: "75% lighter than steel; stronger than aluminum",
  },
  {
    icon: "💡", // Placeholder for actual icon
    title: "Customization",
    description: "From small enclosures to modular villas, tailored for every industry",
  },
];

// --- Product Catalog Data ---
export const PRODUCT_CATALOG: ProductCategory[] = [
  {
    code: 'CAT1',
    name: 'GRP ELECTRICAL & UTILITY ENCLOSURES',
    tagline: 'Precision protection engineered for reliability and safety.',
    products: [
      {
        code: 'E-101',
        name: 'GRP Single-Door Enclosure',
        description: 'Compact IP66 cabinet for small control panels, CCTV power boxes, and sensors.',
        image: [
          'https://picsum.photos/800/600?random=enclosure-1a',
          'https://picsum.photos/800/600?random=enclosure-1b',
          'https://picsum.photos/800/600?random=enclosure-1c',
          'https://picsum.photos/800/600?random=enclosure-1d'
        ],
      },
      {
        code: 'E-102',
        name: 'GRP Double-Door Enclosure',
        description: 'Medium-size cabinet for MCCs, switchgear assemblies, and distribution boards.',
        image: 'https://picsum.photos/600/400?random=enclosure-2',
      },
      {
        code: 'E-103',
        name: 'GRP Feeder Pillar Cabinet',
        description: 'Multi-door outdoor cabinet for power distribution and street-lighting networks.',
        image: 'https://picsum.photos/600/400?random=enclosure-3',
      },
      {
        code: 'E-104',
        name: 'GRP Weatherproof Panel Board',
        description: 'Heavy-duty enclosure for marine/coastal and desert environments.',
        image: 'https://picsum.photos/600/400?random=enclosure-4',
      },
      {
        code: 'E-105',
        name: 'GRP Meter Box / Junction Box',
        description: 'Utility meter housings and telecom termination boxes.',
      },
      {
        code: 'E-106',
        name: 'GRP Transformer Kiosk / Ring Main Unit (RMU) Housing',
        description: 'Outdoor protection for RMU, isolator, and LV distribution gear.',
      },
      {
        code: 'E-107',
        name: 'GRP Instrument / Control Enclosure',
        description: 'Custom panel housings for automation and PLC systems.',
      },
      {
        code: 'E-108',
        name: 'GRP Battery / UPS Cabinet',
        description: 'Ventilated enclosures for energy storage and solar backup systems.',
      },
      {
        code: 'E-109',
        name: 'GRP Cable Management Box',
        description: 'Insulated cabinet for junctions and feeder joints in industrial environments.',
      },
      {
        code: 'E-110',
        name: 'GRP Street-Light Control Panel',
        description: 'Smart controller housing with timer and IoT integration options.',
      },
    ],
    sharedHighlights: [
      'IP66 / IK10 rated',
      'Fire retardant UL 94 V-0',
      'SS 316 hardware, anti-condensation design',
      'Double insulation, UV-stabilized gel coat',
      'Options: transparent door, window kit, fan filters, mounting rails',
    ],
  },
  {
    code: 'CAT2',
    name: 'GRP MODULAR & PORTABLE STRUCTURES',
    tagline: 'Rapid-deployment living, work, and service spaces.',
    products: [
      // Added `description` using `useCase` value to satisfy the Product interface
      {
        code: 'M-201',
        name: 'GRP Security / Guard Cabin',
        useCase: 'Prefab sentry units for factories, offices, and gated communities.',
        description: 'Prefab sentry units for factories, offices, and gated communities.',
        image: 'https://picsum.photos/600/400?random=cabin-1',
      },
      // Added `description` using `useCase` value to satisfy the Product interface
      {
        code: 'M-202',
        name: 'GRP Information / Ticket Kiosk',
        useCase: 'Public information booths, toll and ticket counters.',
        description: 'Public information booths, toll and ticket counters.',
      },
      // Added `description` using `useCase` value to satisfy the Product interface
      {
        code: 'M-203',
        name: 'GRP Portable Toilets & Restrooms',
        useCase: 'Hygienic sanitation cabins with plumbing and vent systems.',
        description: 'Hygienic sanitation cabins with plumbing and vent systems.',
        image: 'https://picsum.photos/600/400?random=cabin-toilets',
      },
      // Added `description` using `useCase` value to satisfy the Product interface
      {
        code: 'M-204',
        name: 'GRP Executive Office Cabin',
        useCase: 'Prefab cabins with A/C, lighting, and internal partitions.',
        description: 'Prefab cabins with A/C, lighting, and internal partitions.',
        image: 'https://picsum.photos/600/400?random=cabin-2',
      },
      // Added `description` using `useCase` value to satisfy the Product interface
      {
        code: 'M-205',
        name: 'GRP Modular Villa / Worker Housing',
        useCase: 'Fast-install housing, insulated, termite-proof.',
        description: 'Fast-install housing, insulated, termite-proof.',
      },
      // Added `description` using `useCase` value to satisfy the Product interface
      {
        code: 'M-206',
        name: 'GRP ATM / Telecom Booth',
        useCase: 'Secure standalone kiosk for ATM or telecom nodes.',
        description: 'Secure standalone kiosk for ATM or telecom nodes.',
      },
      // Added `description` using `useCase` value to satisfy the Product interface
      {
        code: 'M-207',
        name: 'GRP Portable Kitchen / Canteen Unit',
        useCase: 'Food-safe, washable interior cabins for remote camps.',
        description: 'Food-safe, washable interior cabins for remote camps.',
      },
      // Added `description` using `useCase` value to satisfy the Product interface
      {
        code: 'M-208',
        name: 'GRP Smart Charging Pod / EV Booth',
        useCase: 'Weatherproof composite charging station kiosks.',
        description: 'Weatherproof composite charging station kiosks.',
        image: 'https://picsum.photos/600/400?random=charging-pod',
      },
      // Added `description` using `useCase` value to satisfy the Product interface
      {
        code: 'M-209',
        name: 'GRP Toilet-Shower Combo Unit',
        useCase: 'For labour sites, events, and public areas.',
        description: 'For labour sites, events, and public areas.',
      },
      // Added `description` using `useCase` value to satisfy the Product interface
      {
        code: 'M-210',
        name: 'GRP Site Office Cabin',
        useCase: 'Fully furnished project management cabin with flooring and electrical fit-out.',
        description: 'Fully furnished project management cabin with flooring and electrical fit-out.',
      },
    ],
    compliance: [
      'IS 875 (Loads)',
      'IS 1893 (Seismic)',
      'IS 14856 (Doors)',
      'Wind-resistant, earthquake-safe, thermally insulated panels',
    ],
    // Removed 'advantages' as per new specification not including it for this category
  },
  {
    code: 'CAT3',
    name: 'GRP UTILITY & INFRASTRUCTURE PRODUCTS',
    tagline: 'Composite solutions for water, waste, and urban systems.',
    products: [
      {
        code: 'U-301',
        name: 'GRP Water Storage Tanks',
        description: 'Cylindrical or rectangular, 500 L–50 000 L, UV-resistant.',
        image: 'https://picsum.photos/600/400?random=tank-1',
      },
      {
        code: 'U-302',
        name: 'GRP Chemical Storage Tanks',
        description: 'For acids, effluents, and industrial liquids; FR-grade resin.',
      },
      {
        code: 'U-303',
        name: 'GRP Septic Tanks',
        description: 'One-piece molded, leak-proof, maintenance-free.',
      },
      {
        code: 'U-304',
        name: 'GRP Grease Traps / Interceptors',
        description: 'For kitchens, restaurants, and processing plants.',
      },
      {
        code: 'U-305',
        name: 'GRP Manholes & Chambers',
        description: 'Load class A15–D400, slip-resistant, non-sparking.',
        image: 'https://picsum.photos/600/400?random=manhole-1',
      },
      {
        code: 'U-306',
        name: 'GRP Drainage Covers & Gratings',
        description: 'Anti-corrosive gratings for municipal networks.',
      },
      {
        code: 'U-307',
        name: 'GRP Cable Trays & Trenches',
        description: 'Electrically insulating trays for power/data cabling.',
        image: 'https://picsum.photos/600/400?random=cable-tray-1',
      },
      {
        code: 'U-308',
        name: 'GRP Transformer Foundation Bases',
        description: 'Corrosion-proof base platforms for pad-mounted equipment.',
      },
      {
        code: 'U-309',
        name: 'GRP Rainwater Harvest Modules',
        description: 'Modular underground tanks for eco-projects.',
      },
      {
        code: 'U-310',
        name: 'GRP Chemical Dosing & Pump Cabinets',
        description: 'Compact housings for metering pumps and chemical handling.',
      },
    ],
  },
  {
    code: 'CAT4',
    name: 'GRP INDUSTRIAL COMPONENTS & CUSTOM FABRICATION',
    tagline: 'Tailor-made composites for specialized industries.',
    products: [
      // Added `description` for C-401 to satisfy the Product interface
      {
        code: 'C-401',
        name: 'GRP Custom Molded Parts',
        applications: ['Telecom', 'rail', 'defense', 'automotive'],
        description: 'Custom molded parts for applications in telecom, rail, defense, and automotive industries.',
        image: 'https://picsum.photos/600/400?random=custom-part-1',
      },
      {
        code: 'C-402',
        name: 'GRP Control Panel Frames & Bases',
        description: 'Skid mounts and non-conductive frames.',
      },
      {
        code: 'C-403',
        name: 'GRP Acoustic / Fire-Shield Panels',
        description: 'Sound-attenuating and FR enclosures.',
      },
      {
        code: 'C-404',
        name: 'GRP Battery Racks & Shelves',
        description: 'Lightweight, corrosion-free storage frames.',
      },
      {
        code: 'C-405',
        name: 'GRP Instrument Housings',
        description: 'Weatherproof protection for sensors.',
      },
      {
        code: 'C-406',
        name: 'GRP Wind Turbine Nacelle Covers',
        description: 'Renewable-energy composite shells.',
        image: 'https://picsum.photos/600/400?random=wind-turbine-1',
      },
      {
        code: 'C-407',
        name: 'GRP HVAC Ducts & Covers',
        description: 'Non-metallic, corrosion-resistant ducts.',
      },
      {
        code: 'C-408',
        name: 'GRP Motor Canopies & Pump Housings',
        description: 'Mechanical protection with ventilation.',
      },
      {
        code: 'C-409',
        name: 'GRP Solar Equipment Cabinets',
        description: 'UV-stable composite enclosures for PV systems.',
      },
      {
        code: 'C-410',
        name: 'GRP Busbar / Switchgear Barriers',
        description: 'Insulated dielectric partitions for LV panels.',
      },
    ],
  },
  {
    code: 'CAT5',
    name: 'GRP MARINE, OFFSHORE & ENERGY SOLUTIONS',
    tagline: 'Resistant to salt, UV, and extreme climates.',
    products: [
      // Added `description` using `useCase` value to satisfy the Product interface
      {
        code: 'O-501',
        name: 'GRP Offshore Electrical Enclosure',
        useCase: 'Marine platforms, desalination plants.',
        description: 'Electrical enclosures designed for marine platforms and desalination plants.',
        image: 'https://picsum.photos/600/400?random=offshore-1',
      },
      // Added `description` using `useCase` value to satisfy the Product interface
      {
        code: 'O-502',
        name: 'GRP Navigation Light Housings',
        useCase: 'Saltwater-resistant protective boxes.',
        description: 'Saltwater-resistant protective housings for navigation lights.',
      },
      // Added `description` using `useCase` value to satisfy the Product interface
      {
        code: 'O-503',
        name: 'GRP Battery Compartment for Vessels',
        useCase: 'Anti-corrosive, lightweight battery storage.',
        description: 'Anti-corrosive, lightweight battery storage compartments for vessels.',
      },
      // Added `description` using `useCase` value to satisfy the Product interface
      {
        code: 'O-504',
        name: 'GRP Solar Panel Mounting Structures',
        useCase: 'Composite frames for coastal solar arrays.',
        description: 'Composite mounting frames specifically for coastal solar arrays.',
        image: 'https://picsum.photos/600/400?random=marine-solar-1',
      },
      // Added `description` using `useCase` value to satisfy the Product interface
      {
        code: 'O-505',
        name: 'GRP Dock / Jetty Control Cabinets',
        useCase: 'Water-resistant junction cabinets.',
        description: 'Water-resistant junction cabinets for dock and jetty control systems.',
      },
    ],
  },
  {
    code: 'CAT6',
    name: 'GRP SUSTAINABLE & SMART SOLUTIONS',
    tagline: 'Innovating toward circular and intelligent infrastructure.',
    products: [
      // Added `description` using `innovation` value to satisfy the Product interface
      {
        code: 'S-601',
        name: 'GRP Smart IoT Kiosk',
        innovation: 'Built-in display, solar charging, and data sensors.',
        description: 'An innovative kiosk with built-in display, solar charging, and data sensors for smart applications.',
        image: 'https://picsum.photos/600/400?random=iot-kiosk-1',
      },
      // Added `description` using `innovation` value to satisfy the Product interface
      {
        code: 'S-602',
        name: 'GRP Recycling Collection Booth',
        innovation: 'Modular waste segregation pods.',
        description: 'Modular pods designed for efficient waste segregation and collection.',
      },
      // Added `description` using `innovation` value to satisfy the Product interface
      {
        code: 'S-603',
        name: 'GRP EV Charging Station Shelter',
        innovation: 'Fire-safe composite structure for electric vehicle hubs.',
        description: 'A fire-safe composite shelter solution for electric vehicle charging stations.',
        image: 'https://picsum.photos/600/400?random=ev-shelter-1',
      },
      // Added `description` using `innovation` value to satisfy the Product interface
      {
        code: 'S-604',
        name: 'GRP Solar Inverter Enclosure (Hybrid)',
        innovation: 'Passive-cooled cabinet with integrated monitoring.',
        description: 'A passive-cooled cabinet for hybrid solar inverters with integrated monitoring capabilities.',
      },
      // Added `description` using `innovation` value to satisfy the Product interface
      {
        code: 'S-605',
        name: 'GRP Telecom Shelter Pod',
        innovation: 'Climate-controlled composite pods for 5G base stations.',
        description: 'Climate-controlled composite pods providing robust shelter for 5G base stations.',
      },
    ],
  },
];

// --- Industries We Empower ---
export const INDUSTRIES: Industry[] = [
  {
    name: "Electrical & Utilities",
    applicationExample: "GRP feeder pillars and transformer enclosures",
    image: "https://picsum.photos/600/400?random=electrical"
  },
  {
    name: "Renewable Energy",
    applicationExample: "Solar inverter cabinets, wind farm junction boxes",
    image: "https://picsum.photos/600/400?random=renewable"
  },
  {
    name: "Telecom & IT",
    applicationExample: "Weatherproof kiosk housings for fiber and base stations",
    image: "https://picsum.photos/600/400?random=telecom"
  },
  {
    name: "Construction & Infrastructure",
    applicationExample: "Portable toilets, control cabins, and pump rooms",
    image: "https://picsum.photos/600/400?random=construction"
  },
  {
    name: "Marine & Offshore",
    applicationExample: "Anti-corrosive enclosures for coastal facilities",
    image: "https://picsum.photos/600/400?random=marine"
  },
];

// --- Innovation & Quality ---
export const QUALITY_FRAMEWORK: QualityPoint[] = [
  { title: "ISO 9001 Certified Manufacturing" },
  { title: "CE Marked Products" },
  { title: "BIS-Compliant Materials" },
  { title: "100% In-house R&D and mold design" },
  { title: "Final product testing", description: ": Thermal, UV, impact, and dielectric strength" },
];

export const PROCESS_PHILOSOPHY = "Every EMPHZ product undergoes a closed-loop design-to-delivery system — from CAD modeling to finished product validation — ensuring zero tolerance for defects.";

// --- Sustainability & Total Cost Advantage ---
export const COST_COMPARISON: CostComparison[] = [
  { factor: "Maintenance", emphzAdvantage: "None (zero corrosion)", competitor: "High (repainting, rust removal)" },
  { factor: "Installation", emphzAdvantage: "Fast (lightweight modules)", competitor: "Slow, requires heavy lifting" },
  { factor: "Lifecycle", emphzAdvantage: "50+ years", competitor: "10–20 years typical" },
  { factor: "Carbon Footprint", emphzAdvantage: "Minimal", competitor: "High embodied energy" },
];

// --- Corporate Governance & Certifications ---
export const CORPORATE_DETAILS: CorporateDetail[] = [
  { parameter: "CIN", detail: "U16212KL2023PTC083148" },
  { parameter: "Incorporation Date", detail: "23 August 2023" },
  { parameter: "Proposed NIC Code", detail: "2220 – Manufacture of Plastics Products" },
  { parameter: "Headquarters", detail: "Vadakara, Kerala, India" },
  { parameter: "Factory", detail: "Hebbal Industrial Area, Mysore, Karnataka" },
  { parameter: "Certifications", detail: "ISO 9001 • CE Mark • BIS Compliant • “Make in India” Initiative" },
];

export const CERTIFICATE_DOWNLOADS = [
  { name: "Certificate PDFs", link: "#" },
  { name: "MSME Registration", link: "#" },
  { name: "ISO Reports", link: "#" },
];

// --- Warranty & Service ---
export const WARRANTY_COVERAGE = "5–10 years (product integrity & corrosion resistance)";
export const WARRANTY_EXCLUSIONS = "Unauthorized modification, natural disasters, or improper installation.";
export const INSTALLATION_REQUIREMENTS = [
  "RCC / PCC base foundation",
  "Proper anchoring with chemical bolts",
  "Certified electrical & plumbing points",
];
export const SUPPORT_CONTACT = {
  phone: "+91 86488 81888",
  email: "service@emphz.com",
};

// --- Insights & Knowledge Center ---
export const BLOG_ARTICLES = [
  {
    title: "The Future Is Composite: Why GRP Outlasts Metal",
    link: "#",
    description: "An in-depth look at the superior lifespan and performance of GRP composites compared to traditional materials.",
  },
  {
    title: "EMPHZ Innovation: Composite Technology for Smart Infrastructure",
    link: "#",
    description: "Discover how EMPHZ is leveraging cutting-edge composite technology to build smarter, more resilient infrastructure.",
  },
  {
    title: "GRP in Coastal Environments — A Case for Corrosion-Free Design",
    link: "#",
    description: "Exploring the unparalleled benefits of GRP in harsh coastal and marine environments where corrosion is a critical concern.",
  },
];

export const KNOWLEDGE_RESOURCES = [
  { name: "Industry Whitepapers", link: "#" },
  { name: "Test Reports", link: "#" },
  { name: "CAD Drawings (DWG / STEP)", link: "#" },
];

// --- Contact & RFQ ---
export const CONTACT_OPTIONS = {
  generalEnquiry: "info@emphz.com",
  technicalSupport: "support@emphz.com",
  whatsApp: "https://wa.me/918648881888",
};
export const OFFICE_LOCATIONS = [
  "Head Office: Vadakara, Kerala, India",
  "Factory: Mysore, Karnataka, India",
];

// --- Downloads ---
export const GENERAL_DOWNLOADS = [
  { name: "EMPHZ Product Catalog (PDF)", link: "#" },
  { name: "Technical Datasheets (ZIP)", link: "#" },
  { name: "CAD Drawings (DWG / STEP)", link: "#" },
  { name: "Installation & Warranty Guide", link: "#" },
  { name: "Quality Certificates (ISO, CE, BIS)", link: "#" },
];

// --- Technical Standard Summary ---
export const TECHNICAL_STANDARD_SUMMARY: TechnicalStandard[] = [
  { property: "IP Rating", emphzStandard: "IP66", internationalCode: "IEC 60529" },
  { property: "Impact Resistance", emphzStandard: "IK10", internationalCode: "IEC 62262" },
  { property: "Fire Rating", emphzStandard: "UL 94 V-0", internationalCode: "UL / BS 476" },
  { property: "UV Stability", emphzStandard: "> 10 Years", internationalCode: "ISO 4892" },
  { property: "Mechanical Strength", emphzStandard: "150–230 MPa", internationalCode: "ASTM D790" },
  { property: "Electrical Insulation", emphzStandard: "15 kV/mm", internationalCode: "ASTM D149" },
  { property: "Density", emphzStandard: "1.8 g/cm³", internationalCode: "ASTM D792" },
];

// --- SEO Data (for dynamic meta tags if a router is used) ---
export const SEO_DATA = {
  home: {
    title: "EMPHZ Global - GRP Composite Manufacturer India",
    description: "EMPHZ is a global leader in GRP composite engineering, offering high-performance electrical enclosures, modular structures, and infrastructure solutions for critical applications.",
  },
  products: {
    title: "EMPHZ Industrial Cabinets - GRP Electrical Enclosures",
    description: "Explore EMPHZ's comprehensive range of GRP electrical enclosures, modular structures, and utility products designed for durability and performance.",
  },
  modularStructures: {
    title: "EMPHZ Prefab Solutions - GRP Portable Cabins & Villas",
    description: "Discover EMPHZ's rapid-deployment GRP portable cabins, security kiosks, restrooms, and modular villas built for strength and hygiene.",
  },
  industries: {
    title: "EMPHZ Composite Engineering - GRP Applications Across India",
    description: "EMPHZ empowers industries from electrical utilities to marine & offshore with advanced GRP composite solutions tailored for diverse applications.",
  },
  innovation: {
    title: "EMPHZ Innovation & Quality - Precision in Every Layer",
    description: "Learn about EMPHZ's commitment to innovation, quality framework, and in-house R&D that ensures zero-defect GRP composite products.",
  },
  sustainability: {
    title: "Sustainability & Total Cost Advantage - EMPHZ GRP Solutions",
    description: "EMPHZ's GRP composites offer a significant total cost advantage and minimal carbon footprint, making sustainability an engineering standard.",
  },
  corporate: {
    title: "EMPHZ Corporate Governance & Certifications",
    description: "Transparency and trust define EMPHZ. View our corporate details, certifications (ISO, CE, BIS), and commitment to compliance.",
  },
  support: {
    title: "EMPHZ Warranty & Service - Confidence Engineered",
    description: "Comprehensive warranty coverage and dedicated support services for all EMPHZ GRP composite products. Ensuring peace of mind for our clients.",
  },
  knowledge: {
    title: "EMPHZ Knowledge Hub - GRP Technology Articles & Whitepapers",
    description: "Access thought leadership articles, industry whitepapers, test reports, and CAD drawings from EMPHZ, your partner in composite engineering.",
  },
  contact: {
    title: "GRP Composite Solutions for Your Project - EMPHZ Sales & Support",
    description: "Connect with EMPHZ for general inquiries, technical support, or to request a project quotation. Our team is ready to engineer your next project.",
  },
  admin: {
    title: "EMPHZ Admin Portal",
    description: "Admin portal for managing EMPHZ product catalog and assets."
  }
};