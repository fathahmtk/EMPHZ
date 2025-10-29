import {
  ProductCategory,
  KeyValueProposition,
  BrandPillar,
  Industry,
  QualityPoint,
  CostComparison,
  CorporateDetail,
  TechnicalStandard,
  FAQItem
} from './types';

// --- Homepage Content ---
export const HERO_SECTION = {
  headline: "Engineering Tomorrow’s Infrastructure — Today",
  subline: "High-performance GRP composite solutions engineered to outlast steel, outperform concrete, and redefine sustainability.",
  cta1: "Explore Our Products",
  cta2: "Request a Quote",
  backgroundImages: [
    "https://www.dropbox.com/scl/fi/3q4zsq0vxb6bscss6j98z/Emphz-GRP-Portable-Toilet.png?rlkey=cjq4lyp3emeqwj7hf0q1cchxe&st=135v3dzm&dl=1",
    "https://www.dropbox.com/scl/fi/i0r4s035cvcc8v8ykg9ba/Emphz-GRP-Hero-Image-3.png?rlkey=obfwaz3804vodjbnk2rpgmdj9&st=2kcxqe9b&dl=1",
    "https://www.dropbox.com/scl/fi/p9nv1veh2fxa52ymwtghl/Emphz-GRP-Hero-Image-1.png?rlkey=dxhpiufpindtycgfv0ch48w48&st=14k83l73&dl=1",
    "https://www.dropbox.com/scl/fi/rdjc4ppeb575uu4jzp9sw/Emphz-GRP-Electrical-Enclosures.png?rlkey=qk70gdenb7dhcxyajkerv4q0o&st=fwzq5iyr&dl=1",
    "https://www.dropbox.com/scl/fi/i3jblkxsh97yoq6b61i1k/Emphz-GRP-Hero-Image-2.png?rlkey=wudzy7fl1pquzayw3yd2865mt&st=aznaxs17&dl=1",
  ],
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
    slug: 'grp-enclosures',
    tagline: 'Precision protection engineered for reliability and safety.',
    image: 'https://www.dropbox.com/scl/fi/qw4y5jznrfkjlvrrsu5z3/Emphz-GRP-Single-door-enclosure.png?rlkey=xiy2y9bmobq14losztoeipgcz&st=lpeop70h&dl=1',
    products: [
      {
        code: 'E-101',
        name: 'GRP Single-Door Enclosure',
        description: 'Compact IP66 cabinet for small control panels, CCTV power boxes, and sensors.',
        image: [
          'https://www.dropbox.com/scl/fi/qw4y5jznrfkjlvrrsu5z3/Emphz-GRP-Single-door-enclosure.png?rlkey=xiy2y9bmobq14losztoeipgcz&st=lpeop70h&dl=1',
          'https://www.dropbox.com/scl/fi/r42j664ik0qzwgk6b98zy/Emphz-GRP-Single-door-enclosure-Open.png?rlkey=4szqk2rqkbinm2wq4e9zr9288&st=0qicliv1&dl=1'
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
    technicalSnapshot: [
      { parameter: "Ingress Protection", specification: "IP66", certification: "IEC 60529" },
      { parameter: "Impact Resistance", specification: "IK10", certification: "IEC 62262" },
      { parameter: "Fire Retardancy", specification: "UL 94 V-0", certification: "UL / BS 476" },
      { parameter: "UV Resistance", specification: "> 10 Years", certification: "ISO 4892" },
      { parameter: "Mechanical Strength", specification: "150–230 MPa", certification: "ASTM D790" },
      { parameter: "Electrical Insulation", specification: "15 kV/mm", certification: "ASTM D149" },
      { parameter: "Material Density", specification: "1.8 g/cm³", certification: "ASTM D792" },
    ],
    materials: ["Sheet Molding Compound (SMC)", "Glass Reinforced Polyester (GRP)"],
    accessories: ["SS 316 Hardware", "Mounting Rails", "Ventilation Louvers", "Transparent Doors", "Gland Plates"],
  },
  {
    code: 'CAT2',
    name: 'GRP MODULAR & PORTABLE STRUCTURES',
    slug: 'grp-modular-structures',
    tagline: 'Rapid-deployment living, work, and service spaces.',
    image: 'https://picsum.photos/600/400?random=cabin-1',
    products: [
      {
        code: 'M-201',
        name: 'GRP Security / Guard Cabin',
        useCase: 'Prefab sentry units for factories, offices, and gated communities.',
        description: 'Prefab sentry units for factories, offices, and gated communities.',
        image: 'https://picsum.photos/600/400?random=cabin-1',
      },
      {
        code: 'M-202',
        name: 'GRP Information / Ticket Kiosk',
        useCase: 'Public information booths, toll and ticket counters.',
        description: 'Public information booths, toll and ticket counters.',
      },
      {
        code: 'M-203',
        name: 'GRP Portable Toilets & Restrooms',
        useCase: 'Hygienic sanitation cabins with plumbing and vent systems.',
        description: 'Hygienic sanitation cabins with plumbing and vent systems.',
        image: 'https://picsum.photos/600/400?random=cabin-toilets',
      },
      {
        code: 'M-204',
        name: 'GRP Executive Office Cabin',
        useCase: 'Prefab cabins with A/C, lighting, and internal partitions.',
        description: 'Prefab cabins with A/C, lighting, and internal partitions.',
        image: 'https://picsum.photos/600/400?random=cabin-2',
      },
      {
        code: 'M-205',
        name: 'GRP Modular Villa / Worker Housing',
        useCase: 'Fast-install housing, insulated, termite-proof.',
        description: 'Fast-install housing, insulated, termite-proof.',
      },
      {
        code: 'M-206',
        name: 'GRP ATM / Telecom Booth',
        useCase: 'Secure standalone kiosk for ATM or telecom nodes.',
        description: 'Secure standalone kiosk for ATM or telecom nodes.',
      },
      {
        code: 'M-207',
        name: 'GRP Portable Kitchen / Canteen Unit',
        useCase: 'Food-safe, washable interior cabins for remote camps.',
        description: 'Food-safe, washable interior cabins for remote camps.',
      },
      {
        code: 'M-208',
        name: 'GRP Smart Charging Pod / EV Booth',
        useCase: 'Weatherproof composite charging station kiosks.',
        description: 'Weatherproof composite charging station kiosks.',
        image: 'https://picsum.photos/600/400?random=charging-pod',
      },
      {
        code: 'M-209',
        name: 'GRP Toilet-Shower Combo Unit',
        useCase: 'For labour sites, events, and public areas.',
        description: 'For labour sites, events, and public areas.',
      },
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
    technicalSnapshot: [
      { parameter: "Structural Integrity", specification: "Wind/Seismic Proof", certification: "IS 875 / 1893" },
      { parameter: "Thermal Insulation", specification: "<0.5 W/m²K", certification: "ASTM C518" },
      { parameter: "Fire Safety", specification: "Self-Extinguishing", certification: "BS 476 Part 7" },
      { parameter: "Sound Insulation", specification: "25-30 dB", certification: "ISO 140" },
      { parameter: "Water Absorption", specification: "<0.1%", certification: "ASTM D570" },
      { parameter: "Termite Resistance", specification: "100% Proof", certification: "IS 4020" },
    ],
    materials: ["GRP Composite Panels", "PUF/EPS Insulation Core", "Steel Sub-Frame"],
    accessories: ["Insulated Doors/Windows", "Electrical Wiring", "Plumbing Fixtures", "Flooring", "A/C Units"],
  },
  {
    code: 'CAT3',
    name: 'GRP UTILITY & INFRASTRUCTURE PRODUCTS',
    slug: 'grp-utility-infrastructure',
    tagline: 'Composite solutions for water, waste, and urban systems.',
    image: 'https://picsum.photos/600/400?random=tank-1',
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
    technicalSnapshot: [
      { parameter: "Load Bearing", specification: "A15 to D400", certification: "BS EN 124" },
      { parameter: "Compressive Strength", specification: ">120 MPa", certification: "ASTM D695" },
      { parameter: "Water Absorption", specification: "<0.1%", certification: "ASTM D570" },
      { parameter: "Chemical Resistance", specification: "Acids/Alkalis", certification: "ASTM D543" },
      { parameter: "Fire Resistance", specification: "Self-Extinguishing", certification: "BS 476" },
    ],
    materials: ["Isophthalic/Vinylester Resins", "Woven Roving Glass Fiber"],
    accessories: ["Lifting Hooks", "SS Fasteners", "Sealing Gaskets", "Vents"],
  },
  {
    code: 'CAT4',
    name: 'GRP INDUSTRIAL COMPONENTS & CUSTOM FABRICATION',
    slug: 'grp-industrial-components',
    tagline: 'Tailor-made composites for specialized industries.',
    image: 'https://picsum.photos/600/400?random=custom-part-1',
    products: [
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
    technicalSnapshot: [
      { parameter: "Tensile Strength", specification: "80-150 MPa", certification: "ASTM D638" },
      { parameter: "Flexural Strength", specification: "150-230 MPa", certification: "ASTM D790" },
      { parameter: "Dielectric Strength", specification: "15 kV/mm", certification: "ASTM D149" },
      { parameter: "Max Temperature", specification: "150-180 °C", certification: "ASTM D648" },
      { parameter: "Manufacturing Process", specification: "SMC/BMC, RTM, Hand Lay-up", certification: "" },
    ],
    materials: ["Polyester/Epoxy Resin", "E-Glass/Carbon Fiber", "Gelcoat Finish"],
    accessories: ["Metal Inserts", "Custom Mounts", "RF-Transparent Windows"],
  },
  {
    code: 'CAT5',
    name: 'GRP MARINE, OFFSHORE & ENERGY SOLUTIONS',
    slug: 'grp-marine-offshore',
    tagline: 'Resistant to salt, UV, and extreme climates.',
    image: 'https://picsum.photos/600/400?random=offshore-1',
    products: [
      {
        code: 'O-501',
        name: 'GRP Offshore Electrical Enclosure',
        useCase: 'Marine platforms, desalination plants.',
        description: 'Electrical enclosures designed for marine platforms and desalination plants.',
        image: 'https://picsum.photos/600/400?random=offshore-1',
      },
      {
        code: 'O-502',
        name: 'GRP Navigation Light Housings',
        useCase: 'Saltwater-resistant protective boxes.',
        description: 'Saltwater-resistant protective housings for navigation lights.',
      },
      {
        code: 'O-503',
        name: 'GRP Battery Compartment for Vessels',
        useCase: 'Anti-corrosive, lightweight battery storage.',
        description: 'Anti-corrosive, lightweight battery storage compartments for vessels.',
      },
      {
        code: 'O-504',
        name: 'GRP Solar Panel Mounting Structures',
        useCase: 'Composite frames for coastal solar arrays.',
        description: 'Composite mounting frames specifically for coastal solar arrays.',
        image: 'https://picsum.photos/600/400?random=marine-solar-1',
      },
      {
        code: 'O-505',
        name: 'GRP Dock / Jetty Control Cabinets',
        useCase: 'Water-resistant junction cabinets.',
        description: 'Water-resistant junction cabinets for dock and jetty control systems.',
      },
    ],
    technicalSnapshot: [
      { parameter: "Ingress Protection", specification: "IP67", certification: "IEC 60529" },
      { parameter: "Salt Spray Test", specification: ">1000 Hours", certification: "ASTM B117" },
      { parameter: "UV Resistance", specification: "Conforms", certification: "ISO 4892" },
      { parameter: "Fire Rating", specification: "UL 94 V-0", certification: "" },
      { parameter: "Impact Strength", specification: "IK10", certification: "IEC 62262" },
    ],
    materials: ["Fire Retardant Resin", "UV-Stabilized Gelcoat", "SS 316 Hardware"],
    accessories: ["Marine-Grade Hinges", "Breather Drains", "EMI/RFI Shielding"],
  },
  {
    code: 'CAT6',
    name: 'GRP SUSTAINABLE & SMART SOLUTIONS',
    slug: 'grp-smart-solutions',
    tagline: 'Innovating toward circular and intelligent infrastructure.',
    image: 'https://picsum.photos/600/400?random=iot-kiosk-1',
    products: [
      {
        code: 'S-601',
        name: 'GRP Smart IoT Kiosk',
        innovation: 'Built-in display, solar charging, and data sensors.',
        description: 'An innovative kiosk with built-in display, solar charging, and data sensors for smart applications.',
        image: 'https://picsum.photos/600/400?random=iot-kiosk-1',
      },
      {
        code: 'S-602',
        name: 'GRP Recycling Collection Booth',
        innovation: 'Modular waste segregation pods.',
        description: 'Modular pods designed for efficient waste segregation and collection.',
      },
      {
        code: 'S-603',
        name: 'GRP EV Charging Station Shelter',
        innovation: 'Fire-safe composite structure for electric vehicle hubs.',
        description: 'A fire-safe composite shelter solution for electric vehicle charging stations.',
        image: 'https://picsum.photos/600/400?random=ev-shelter-1',
      },
      {
        code: 'S-604',
        name: 'GRP Solar Inverter Enclosure (Hybrid)',
        innovation: 'Passive-cooled cabinet with integrated monitoring.',
        description: 'A passive-cooled cabinet for hybrid solar inverters with integrated monitoring capabilities.',
      },
      {
        code: 'S-605',
        name: 'GRP Telecom Shelter Pod',
        innovation: 'Climate-controlled composite pods for 5G base stations.',
        description: 'Climate-controlled composite pods providing robust shelter for 5G base stations.',
      },
    ],
    technicalSnapshot: [
      { parameter: "IoT Integration", specification: "Sensor/Display Mounts", certification: "" },
      { parameter: "Solar Compatibility", specification: "Integrated Solar Panel Frames", certification: "" },
      { parameter: "Recyclability", specification: "100%", certification: "" },
      { parameter: "Design Life", specification: "50+ Years", certification: "" },
      { parameter: "Thermal Management", specification: "Passive Cooling Vents", certification: "" },
    ],
    materials: ["Bio-Resins (on request)", "Recycled Fiber Core", "Low-VOC Gelcoat"],
    accessories: ["Solar Charge Controllers", "IoT Sensors", "Touchscreen Displays", "LED Lighting"],
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

// --- Frequently Asked Questions (General) ---
export const PRODUCT_FAQS: FAQItem[] = [
  {
    question: "What is GRP and why is it superior to traditional materials like steel?",
    answer: "GRP (Glass Reinforced Plastic) is a composite material that is corrosion-immune, lightweight (75% lighter than steel), and exceptionally durable. Unlike steel, it does not rust, require painting, or degrade in harsh chemical or coastal environments, offering a 50+ year maintenance-free lifecycle."
  },
  {
    question: "Are EMPHZ products certified for international standards?",
    answer: "Yes. Our products are engineered to meet or exceed major international and national standards, including IP66 for ingress protection, IK10 for impact resistance, UL 94 V-0 for fire retardancy, and compliance with IEC, UL, and BIS codes."
  },
  {
    question: "Can I get a custom-sized enclosure or cabin?",
    answer: "Absolutely. We specialize in custom fabrication. Our in-house R&D and mold design capabilities allow us to create tailor-made composite solutions for specialized industrial applications. Please contact us with your project requirements to get a quote."
  },
  {
    question: "What is the typical installation process for a portable cabin?",
    answer: "Our modular structures are designed for rapid deployment. The typical installation requires a simple RCC/PCC base foundation and proper anchoring with chemical bolts. Certified electrical and plumbing points are needed for final hookup. The lightweight nature of GRP significantly reduces installation time and heavy machinery requirements."
  },
  {
    question: "What is the warranty coverage on EMPHZ products?",
    answer: "We offer a comprehensive warranty of 5 to 10 years covering product integrity and corrosion resistance. This reflects our confidence in the long-term performance and durability of our GRP composite solutions. Please refer to our full warranty document for specific terms."
  }
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

export const SOCIAL_LINKS = {
  linkedIn: "#",
  twitter: "#",
  googleBusiness: "https://share.google/dOm0irJP3POkKMhSN",
};

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
    title: "EMPHZ Product Categories - GRP Composite Solutions",
    description: "Explore EMPHZ's comprehensive range of GRP product categories, from electrical enclosures and modular structures to custom industrial components.",
  },
  productCategory: {
    title: (categoryName: string) => `${categoryName} | EMPHZ Products`,
    description: (categoryTagline: string) => `Discover our range of ${categoryTagline.toLowerCase()}. High-performance GRP composite solutions by EMPHZ.`,
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
    description: "Connect with EMPHZ for general inquiries, technical support, or to request a quote. Our team is ready to engineer your next project.",
  },
  admin: {
    title: "EMPHZ Admin Portal",
    description: "Admin portal for managing EMPHZ product catalog and assets."
  }
};