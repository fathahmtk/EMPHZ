import {
  ProductCategory,
  KeyValueProposition,
  BrandPillar,
  Industry,
  QualityPoint,
  CostComparison,
  CorporateDetail,
  TechnicalStandard,
  FAQItem,
  AutomobilePageData
} from './types';

// --- Homepage Content ---
export const HERO_SECTION = {
  headline: "Engineering a Resilient Future. Today.",
  subline: "Discover GRP composites: the corrosion-proof, lightweight alternative to steel and concrete, engineered for a 50-year sustainable lifecycle.",
  cta1: "View Product Catalog",
  cta2: "Get a Project Quote",
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
    icon: "durability",
    coreValue: "Corrosion-Immune Materials",
    description: "Built for endurance — EMPHZ composites remain unaffected by salt, humidity, and chemicals even in coastal and industrial zones.",
  },
  {
    icon: "sustainability",
    coreValue: "50-Year Lifecycle Advantage",
    description: "Maintenance-free operation with zero repainting, no rust, and the lowest Total Cost of Ownership in the industry.",
  },
  {
    icon: "engineering",
    coreValue: "Engineered for Precision",
    description: "Every EMPHZ product meets or exceeds IEC, UL, and BIS standards — ensuring unmatched reliability and safety.",
  },
];

export const ICONS = {
  sustainability: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z',
  engineering: 'M12.5 8c-2.65 0-5.18.5-7.5 1.5v9c2.32-1 4.85-1.5 7.5-1.5s5.18.5 7.5 1.5v-9c-2.32-1-4.85-1.5-7.5-1.5zm-1 9.48c-1.25.29-2.5.67-3.75 1.13V10.2c1.23-.42 2.48-.78 3.75-1.05v9.33zm5.75.13c-1.25-.46-2.5-.84-3.75-1.13V9.15c1.27.27 2.52.63 3.75 1.05v9.41zM12.5 3L22 7v10.31c0 .3-.02.6-.05.89l-1.6-1.59C20.62 16.2 21 15.7 21 15V8.5l-8.5-4L4 8.5v6.5c0 .7.38 1.2 1.05 1.61l-1.6 1.6c-.03-.29-.05-.59-.05-.89V7l9.5-4z',
  strength: 'M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.48 10 10 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z',
  customization: 'M20.5 4c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 6c1.86.5 4.37.83 6.5 1v10.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V7c2.13-.17 4.64-.5 6.5-1l.5-2zM12 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z',
  linkedin: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
  twitter: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.119 0-5.515 2.57-5.515 5.734 0 .442.05.874.146 1.284-4.576-.229-8.632-2.424-11.353-5.762-.474.813-.746 1.748-.746 2.734 0 1.983 1.01 3.733 2.538 4.752-.947-.03-1.838-.289-2.618-.724v.072c0 2.774 1.973 5.086 4.591 5.612-.48.131-.986.202-1.503.202-.37 0-.728-.036-1.076-.104.729 2.27 2.844 3.933 5.353 3.979-1.959 1.527-4.425 2.437-7.11 2.437-.462 0-.919-.027-1.368-.08.572.368 1.246.583 1.964.583 2.35 0 4.538-.773 6.388-2.189 1.85-1.417 2.924-3.383 2.924-5.617v-.272c.99-.714 1.848-1.606 2.538-2.634z',
  google: 'M21.35,11.1H12.18V13.83H18.67C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12.5C5,8.75 8.36,5.73 12.19,5.73C15.22,5.73 17.45,7.92 17.45,7.92L19.07,6.31C19.07,6.31 16.59,4 12.19,4C7.03,4 3,7.55 3,12.5C3,17.45 7.03,21 12.19,21C17.83,21 21.64,17.25 21.64,11.39C21.64,11.19 21.35,11.1 21.35,11.1Z',
  lightweight: 'M18.36,8.36C17.18,7.18,15.67,6,14,5.43V4c0-0.55-0.45-1-1-1h-2c-0.55,0-1,0.45-1,1v1.43C8.33,6,6.82,7.18,5.64,8.36C4.46,9.54,3.7,11.21,3.54,13H2c-0.55,0-1,0.45-1,1v2c0,0.55,0.45,1,1,1h1.54c0.16,1.79,0.92,3.46,2.1,4.64c1.18,1.18,2.69,2.36,4.36,2.93V20c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-1.43c1.67-0.57,3.18-1.75,4.36-2.93c1.18-1.18,1.94-2.85,2.1-4.64H22c0.55,0,1-0.45,1-1v-2c0-0.55-0.45-1-1-1h-1.54C20.3,11.21,19.54,9.54,18.36,8.36z M12,16c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,16,12,16z',
  fuel: 'M16.9,8.58l-1.42-1.42l-2.04,2.05l-2.04-2.05l-1.42,1.42L12,10.61V14c0,1.1,0.9,2,2,2h2v2H8v-2h2v-3.39L12,8.61l1.9-1.91l1.42,1.42L13.41,10L12,11.41V16h4v-2c1.1,0,2-0.9,2-2v-2.42L16.9,8.58z M15,4h-1V3c0-0.55-0.45-1-1-1h-2c-0.55,0-1,0.45-1,1v1h-1c-1.1,0-2,0.9-2,2v2.17c0,0.53,0.21,1.04,0.59,1.41l2.41,2.41H11v1.41l-2.71,2.71C7.53,18.47,7,19.2,7,20v1c0,0.55,0.45,1,1,1h8c0.55,0,1-0.45,1-1v-1c0-0.8-0.53-1.53-1.29-1.88L13,15.41V14h1.59l2.41-2.41c0.38-0.38,0.59-0.88,0.59-1.41V6C17,4.9,16.1,4,15,4z',
  aerodynamic: 'M21.9,12.5c-0.2-0.7-0.6-1.4-1.2-1.8L13.8,6c-0.4-0.4-1-0.4-1.4,0L7.6,10.8c-1,1-1.6,2.3-1.6,3.7c0,3,2.5,5.5,5.5,5.5c1.4,0,2.7-0.5,3.7-1.6L20,13.6c0.4-0.4,0.4-1,0-1.4l-1.4-1.4c-0.4-0.4-1-0.4-1.4,0L13,15.1c-0.8,0.8-2.1,0.8-2.8,0c-0.8-0.8-0.8-2.1,0-2.8l4.2-4.2l5.4,4.2c0.2,0.2,0.5,0.2,0.7,0s0.2-0.5,0-0.7l-5.8-4.5c-0.2-0.2-0.5-0.2-0.7,0l-5.8,4.5c-0.2,0.2-0.2,0.5,0,0.7s0.5,0.2,0.7,0l5.4-4.2l-4.2,4.2c-0.8,0.8-0.8,2.1,0,2.8c0.8,0.8,2.1,0.8,2.8,0L17,10.9l2.1,2.1c0.2,0.2,0.5,0.2,0.7,0s0.2-0.5,0-0.7l-2.5-2.5c-0.2-0.2-0.5-0.2-0.7,0l-2.5,2.5c-0.2,0.2-0.2,0.5,0,0.7s0.5,0.2,0.7,0l2.1-2.1l-2.1,2.1c-0.2,0.2-0.2,0.5,0,0.7s0.5,0.2,0.7,0l2.1-2.1c-0.2-0.2-0.5-0.2-0.7,0l-2.1,2.1c-0.2,0.2-0.2,0.5,0,0.7s0.5,0.2,0.7,0l2.1-2.1l-2.1,2.1c-0.2,0.2-0.2,0.5,0,0.7s0.5,0.2,0.7,0l2.1-2.1',
  durability: 'M12,1L3,5v6c0,5.55,3.84,10.74,9,12c5.16-1.26,9-6.45,9-12V5L12,1z M10,17l-4-4l1.41-1.41L10,14.17l6.59-6.59L18,9L10,17z',
  design: 'M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9c0.83,0,1.5-0.67,1.5-1.5c0-0.39-0.15-0.74-0.39-1.01c-0.23-0.26-0.38-0.61-0.38-0.99c0-0.83,0.67-1.5,1.5-1.5H16c2.76,0,5-2.24,5-5c0-4.42-4.03-8-9-8V3z M6.5,12C5.67,12,5,11.33,5,10.5S5.67,9,6.5,9S8,9.67,8,10.5S7.33,12,6.5,12z M9.5,8C8.67,8,8,7.33,8,6.5S8.67,5,9.5,5S11,5.67,11,6.5S10.33,8,9.5,8z M14.5,8C13.67,8,13,7.33,13,6.5S13.67,5,14.5,5S16,5.67,16,6.5S15.33,8,14.5,8z M17.5,12c-0.83,0-1.5-0.67-1.5-1.5S16.67,9,17.5,9S19,9.67,19,10.5S18.33,12,17.5,12z',
  safety: 'M13,14h-2v-2h2V14z M13,10h-2V4h2V10z M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20z',
  nvh: 'M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z',
  assembly: 'M11 17h2v-1.17l6.78-6.78-7.95-7.95L4.05 8.88 2.64 7.46 4.05 6.05l1.41 1.41L11 1.83l9.17 9.17-6.78 6.78V17zm-7-2h2v2H4v-2zm4 0h2v2H8v-2zm4 0h2v2h-2v-2z',
};


export const BRAND_PILLARS: BrandPillar[] = [
  {
    icon: "sustainability",
    title: "Sustainability by Design",
    description: "100% recyclable GRP composites",
  },
  {
    icon: "engineering",
    title: "Smart Engineering",
    description: "Designed and validated in-house with precision tooling",
  },
  {
    icon: "strength",
    title: "Lightweight Strength",
    description: "75% lighter than steel; stronger than aluminum",
  },
  {
    icon: "customization",
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
        image: 'https://i.ibb.co/bF9gYgJ/emphz-grp-double-door-enclosure.png',
      },
      {
        code: 'E-103',
        name: 'GRP Feeder Pillar Cabinet',
        description: 'Multi-door outdoor cabinet for power distribution and street-lighting networks.',
        image: 'https://i.ibb.co/Rz3yV0M/emphz-grp-feeder-pillar.png',
      },
      {
        code: 'E-104',
        name: 'GRP Weatherproof Panel Board',
        description: 'Heavy-duty enclosure for marine/coastal and desert environments.',
        image: 'https://i.ibb.co/BwWzWqS/emphz-grp-weatherproof-panel.png',
      },
      {
        code: 'E-105',
        name: 'GRP Meter Box / Junction Box',
        description: 'Utility meter housings and telecom termination boxes.',
        image: 'https://i.ibb.co/yQxGdtY/emphz-grp-meter-box.png',
      },
      {
        code: 'E-106',
        name: 'GRP Transformer Kiosk / Ring Main Unit (RMU) Housing',
        description: 'Outdoor protection for RMU, isolator, and LV distribution gear.',
        image: 'https://i.ibb.co/3kpvL2L/emphz-grp-transformer-kiosk.png',
      },
      {
        code: 'E-107',
        name: 'GRP Instrument / Control Enclosure',
        description: 'Custom panel housings for automation and PLC systems.',
        image: 'https://i.ibb.co/YyY4Vf8/emphz-grp-instrument-enclosure.png',
      },
      {
        code: 'E-108',
        name: 'GRP Battery / UPS Cabinet',
        description: 'Ventilated enclosures for energy storage and solar backup systems.',
        image: 'https://i.ibb.co/pwnWvYQ/emphz-grp-battery-cabinet.png',
      },
      {
        code: 'E-109',
        name: 'GRP Cable Management Box',
        description: 'Insulated cabinet for junctions and feeder joints in industrial environments.',
        image: 'https://i.ibb.co/6P8J5Pz/emphz-grp-cable-management.png',
      },
      {
        code: 'E-110',
        name: 'GRP Street-Light Control Panel',
        description: 'Smart controller housing with timer and IoT integration options.',
        image: 'https://i.ibb.co/mHq3QdF/emphz-grp-streetlight-panel.png',
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
    image: 'https://www.dropbox.com/scl/fi/c0tk1p87wwt2d0y9ksp8e/Emphz-GRP-Portable-Toilet3.png?rlkey=ix46vgc81i0wz058udkx4p1ql&st=xkn13hb5&dl=1',
    products: [
      {
        code: 'M-201',
        name: 'GRP Security / Guard Cabin',
        useCase: 'Prefab sentry units for factories, offices, and gated communities.',
        description: 'Prefab sentry units for factories, offices, and gated communities.',
        image: 'https://i.ibb.co/yWjX9jL/emphz-grp-security-cabin.png',
      },
      {
        code: 'M-202',
        name: 'GRP Information / Ticket Kiosk',
        useCase: 'Public information booths, toll and ticket counters.',
        description: 'Public information booths, toll and ticket counters.',
        image: 'https://i.ibb.co/Wc2g1G9/emphz-grp-ticket-kiosk.png',
      },
      {
        code: 'M-203',
        name: 'GRP Portable Toilets & Restrooms',
        useCase: 'Hygienic sanitation cabins with plumbing and vent systems.',
        description: 'Hygienic sanitation cabins with plumbing and vent systems.',
        image: [
            "https://www.dropbox.com/scl/fi/c0tk1p87wwt2d0y9ksp8e/Emphz-GRP-Portable-Toilet3.png?rlkey=ix46vgc81i0wz058udkx4p1ql&st=xkn13hb5&dl=1",
            "https://www.dropbox.com/scl/fi/z0lapo5rr6fwbaj6nav95/Emphz-GRP-Portable-Toilet2.png?rlkey=c3utquy3sz2s6eo7riwgvmftm&st=92fepjrh&dl=1",
            "https://www.dropbox.com/scl/fi/jfshpoh8ixrx7mykhdy2x/Emphz-GRP-Portable-Toilet6.png?rlkey=50gsigv2szjdjfd2i3tc368a1&st=ej3pc484&dl=1",
            "https://www.dropbox.com/scl/fi/xsf9jg62b0z1hq0wefwe4/Emphz-GRP-Portable-Toilet5.png?rlkey=kl57esgeyuxx80adetcff520p&st=8c23pxs0&dl=1",
            "https://www.dropbox.com/scl/fi/g6grmmy6x5zse8kwqntzy/Emphz-GRP-Portable-Toilet9.png?rlkey=74jp2e15mp4qdjnnojz0590ly&st=byhyd08h&dl=1",
            "https://www.dropbox.com/scl/fi/iybzuipde43j7iik4pxnz/Emphz-GRP-Portable-Toilet8.png?rlkey=qzfl1tr0189g47k9x83ru7ub9&st=l0mkz7cu&dl=1",
            "https://www.dropbox.com/scl/fi/ucvfzpqgtloe261ohehem/Emphz-GRP-Portable-Toilet15.png?rlkey=0x6eg64krw9sb1po4cp00roye&st=27ynmfl3&dl=1",
            "https://www.dropbox.com/scl/fi/xgpdf7o58bzuk3bxlwdcx/Emphz-GRP-Portable-Toilet14.png?rlkey=gpt4qav1bdlmsrjy569itf8b1&st=uawes17w&dl=1",
            "https://www.dropbox.com/scl/fi/1qbk0lro0rk87e0w4mkan/Emphz-GRP-Portable-Toilet13.png?rlkey=85rswr89uohxu6rf1yv7qu3i7&st=pzkyht8o&dl=1",
            "https://www.dropbox.com/scl/fi/dirsd8yvopssfjcl4ae6a/Emphz-GRP-Portable-Toilet12.png?rlkey=87qyxe43i94lz9pxcl59ah7jx&st=mzw80lh4&dl=1"
        ],
      },
      {
        code: 'M-204',
        name: 'GRP Executive Office Cabin',
        useCase: 'Prefab cabins with A/C, lighting, and internal partitions.',
        description: 'Prefab cabins with A/C, lighting, and internal partitions.',
        image: 'https://i.ibb.co/3zdVKt7/emphz-grp-office-cabin.png',
      },
      {
        code: 'M-205',
        name: 'GRP Modular Villa / Worker Housing',
        useCase: 'Fast-install housing, insulated, termite-proof.',
        description: 'Fast-install housing, insulated, termite-proof.',
        image: 'https://i.ibb.co/zXWkR1p/emphz-grp-modular-villa.png',
      },
      {
        code: 'M-206',
        name: 'GRP ATM / Telecom Booth',
        useCase: 'Secure standalone kiosk for ATM or telecom nodes.',
        description: 'Secure standalone kiosk for ATM or telecom nodes.',
        image: 'https://i.ibb.co/P9tN4Qd/emphz-grp-atm-booth.png',
      },
      {
        code: 'M-207',
        name: 'GRP Portable Kitchen / Canteen Unit',
        useCase: 'Food-safe, washable interior cabins for remote camps.',
        description: 'Food-safe, washable interior cabins for remote camps.',
        image: 'https://i.ibb.co/L5YwYc1/emphz-grp-portable-kitchen.png',
      },
      {
        code: 'M-208',
        name: 'GRP Smart Charging Pod / EV Booth',
        useCase: 'Weatherproof composite charging station kiosks.',
        description: 'Weatherproof composite charging station kiosks.',
        image: 'https://i.ibb.co/mNyqW6h/emphz-grp-ev-booth.png',
      },
      {
        code: 'M-209',
        name: 'GRP Toilet-Shower Combo Unit',
        useCase: 'For labour sites, events, and public areas.',
        description: 'For labour sites, events, and public areas.',
        image: 'https://i.ibb.co/FJhL5zW/emphz-grp-toilet-shower.png',
      },
      {
        code: 'M-210',
        name: 'GRP Site Office Cabin',
        useCase: 'Fully furnished project management cabin with flooring and electrical fit-out.',
        description: 'Fully furnished project management cabin with flooring and electrical fit-out.',
        image: 'https://i.ibb.co/Kmf4p8p/emphz-grp-site-office.png',
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
    image: 'https://i.ibb.co/tZ57R7M/emphz-grp-water-tank.png',
    products: [
      {
        code: 'U-301',
        name: 'GRP Water Storage Tanks',
        description: 'Cylindrical or rectangular, 500 L–50 000 L, UV-resistant.',
        image: 'https://i.ibb.co/tZ57R7M/emphz-grp-water-tank.png',
      },
      {
        code: 'U-302',
        name: 'GRP Chemical Storage Tanks',
        description: 'For acids, effluents, and industrial liquids; FR-grade resin.',
        image: 'https://i.ibb.co/q1t75P5/emphz-grp-chemical-tank.png',
      },
      {
        code: 'U-303',
        name: 'GRP Septic Tanks',
        description: 'One-piece molded, leak-proof, maintenance-free.',
        image: 'https://i.ibb.co/mS7xXfD/emphz-grp-septic-tank.png',
      },
      {
        code: 'U-304',
        name: 'GRP Grease Traps / Interceptors',
        description: 'For kitchens, restaurants, and processing plants.',
        image: 'https://i.ibb.co/pwnWvYQ/emphz-grp-battery-cabinet.png',
      },
      {
        code: 'U-305',
        name: 'GRP Manholes & Chambers',
        description: 'Load class A15–D400, slip-resistant, non-sparking.',
        image: 'https://i.ibb.co/3s3XfJ2/emphz-grp-manhole.png',
      },
      {
        code: 'U-306',
        name: 'GRP Drainage Covers & Gratings',
        description: 'Anti-corrosive gratings for municipal networks.',
        image: 'https://i.ibb.co/Wc2g1G9/emphz-grp-ticket-kiosk.png',
      },
      {
        code: 'U-307',
        name: 'GRP Cable Trays & Trenches',
        description: 'Electrically insulating trays for power/data cabling.',
        image: 'https://i.ibb.co/VMyLh8h/emphz-grp-cable-tray.png',
      },
      {
        code: 'U-308',
        name: 'GRP Transformer Foundation Bases',
        description: 'Corrosion-proof base platforms for pad-mounted equipment.',
        image: 'https://i.ibb.co/pwnWvYQ/emphz-grp-battery-cabinet.png',
      },
      {
        code: 'U-309',
        name: 'GRP Rainwater Harvest Modules',
        description: 'Modular underground tanks for eco-projects.',
        image: 'https://i.ibb.co/BwWzWqS/emphz-grp-weatherproof-panel.png',
      },
      {
        code: 'U-310',
        name: 'GRP Chemical Dosing & Pump Cabinets',
        description: 'Compact housings for metering pumps and chemical handling.',
        image: 'https://i.ibb.co/YyY4Vf8/emphz-grp-instrument-enclosure.png',
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
    image: 'https://i.ibb.co/QcxLgJr/emphz-grp-custom-molding.png',
    products: [
      {
        code: 'C-401',
        name: 'GRP Custom Molded Parts',
        applications: ['Telecom', 'rail', 'defense', 'automotive'],
        description: 'Custom molded parts for applications in telecom, rail, defense, and automotive industries.',
        image: 'https://i.ibb.co/QcxLgJr/emphz-grp-custom-molding.png',
      },
      {
        code: 'C-402',
        name: 'GRP Control Panel Frames & Bases',
        description: 'Skid mounts and non-conductive frames.',
        image: 'https://i.ibb.co/pwnWvYQ/emphz-grp-battery-cabinet.png',
      },
      {
        code: 'C-403',
        name: 'GRP Acoustic / Fire-Shield Panels',
        description: 'Sound-attenuating and FR enclosures.',
        image: 'https://i.ibb.co/YyY4Vf8/emphz-grp-instrument-enclosure.png',
      },
      {
        code: 'C-404',
        name: 'GRP Battery Racks & Shelves',
        description: 'Lightweight, corrosion-free storage frames.',
        image: 'https://i.ibb.co/BwWzWqS/emphz-grp-weatherproof-panel.png',
      },
      {
        code: 'C-405',
        name: 'GRP Instrument Housings',
        description: 'Weatherproof protection for sensors.',
        image: 'https://i.ibb.co/yQxGdtY/emphz-grp-meter-box.png',
      },
      {
        code: 'C-406',
        name: 'GRP Wind Turbine Nacelle Covers',
        description: 'Renewable-energy composite shells.',
        image: 'https://i.ibb.co/JqKxZ0H/emphz-grp-nacelle-cover.png',
      },
      {
        code: 'C-407',
        name: 'GRP HVAC Ducts & Covers',
        description: 'Non-metallic, corrosion-resistant ducts.',
        image: 'https://i.ibb.co/6P8J5Pz/emphz-grp-cable-management.png',
      },
      {
        code: 'C-408',
        name: 'GRP Motor Canopies & Pump Housings',
        description: 'Mechanical protection with ventilation.',
        image: 'https://i.ibb.co/pwnWvYQ/emphz-grp-battery-cabinet.png',
      },
      {
        code: 'C-409',
        name: 'GRP Solar Equipment Cabinets',
        description: 'UV-stable composite enclosures for PV systems.',
        image: 'https://i.ibb.co/mHq3QdF/emphz-grp-streetlight-panel.png',
      },
      {
        code: 'C-410',
        name: 'GRP Busbar / Switchgear Barriers',
        description: 'Insulated dielectric partitions for LV panels.',
        image: 'https://i.ibb.co/6P8J5Pz/emphz-grp-cable-management.png',
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
    image: 'https://i.ibb.co/1n4yBZn/emphz-grp-offshore-enclosure.png',
    products: [
      {
        code: 'O-501',
        name: 'GRP Offshore Electrical Enclosure',
        useCase: 'Marine platforms, desalination plants.',
        description: 'Electrical enclosures designed for marine platforms and desalination plants.',
        image: 'https://i.ibb.co/1n4yBZn/emphz-grp-offshore-enclosure.png',
      },
      {
        code: 'O-502',
        name: 'GRP Navigation Light Housings',
        useCase: 'Saltwater-resistant protective boxes.',
        description: 'Saltwater-resistant protective housings for navigation lights.',
        image: 'https://i.ibb.co/6P8J5Pz/emphz-grp-cable-management.png',
      },
      {
        code: 'O-503',
        name: 'GRP Battery Compartment for Vessels',
        useCase: 'Anti-corrosive, lightweight battery storage.',
        description: 'Anti-corrosive, lightweight battery storage compartments for vessels.',
        image: 'https://i.ibb.co/pwnWvYQ/emphz-grp-battery-cabinet.png',
      },
      {
        code: 'O-504',
        name: 'GRP Solar Panel Mounting Structures',
        useCase: 'Composite frames for coastal solar arrays.',
        description: 'Composite mounting frames specifically for coastal solar arrays.',
        image: 'https://i.ibb.co/sK3YyYF/emphz-grp-solar-mounts.png',
      },
      {
        code: 'O-505',
        name: 'GRP Dock / Jetty Control Cabinets',
        useCase: 'Water-resistant junction cabinets.',
        description: 'Water-resistant junction cabinets for dock and jetty control systems.',
        image: 'https://i.ibb.co/BwWzWqS/emphz-grp-weatherproof-panel.png',
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
    image: 'https://i.ibb.co/RSC5b0w/emphz-grp-smart-kiosk.png',
    products: [
      {
        code: 'S-601',
        name: 'GRP Smart IoT Kiosk',
        innovation: 'Built-in display, solar charging, and data sensors.',
        description: 'An innovative kiosk with built-in display, solar charging, and data sensors for smart applications.',
        image: 'https://i.ibb.co/RSC5b0w/emphz-grp-smart-kiosk.png',
      },
      {
        code: 'S-602',
        name: 'GRP Recycling Collection Booth',
        innovation: 'Modular waste segregation pods.',
        description: 'Modular pods designed for efficient waste segregation and collection.',
        image: 'https://i.ibb.co/FJhL5zW/emphz-grp-toilet-shower.png',
      },
      {
        code: 'S-603',
        name: 'GRP EV Charging Station Shelter',
        innovation: 'Fire-safe composite structure for electric vehicle hubs.',
        description: 'A fire-safe composite shelter solution for electric vehicle charging stations.',
        image: 'https://i.ibb.co/yS54N0d/emphz-grp-ev-shelter.png',
      },
      {
        code: 'S-604',
        name: 'GRP Solar Inverter Enclosure (Hybrid)',
        innovation: 'Passive-cooled cabinet with integrated monitoring.',
        description: 'A passive-cooled cabinet for hybrid solar inverters with integrated monitoring capabilities.',
        image: 'https://i.ibb.co/mHq3QdF/emphz-grp-streetlight-panel.png',
      },
      {
        code: 'S-605',
        name: 'GRP Telecom Shelter Pod',
        innovation: 'Climate-controlled composite pods for 5G base stations.',
        description: 'Climate-controlled composite pods providing robust shelter for 5G base stations.',
        image: 'https://i.ibb.co/3zdVKt7/emphz-grp-office-cabin.png',
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
  {
    code: 'CAT7',
    name: 'GRP Transport & Automotive Components',
    slug: 'grp-transport-automotive',
    tagline: 'Lightweight, durable, and aerodynamic composite bodies for modern transport.',
    image: 'https://i.ibb.co/6r0M5kQ/emphz-grp-bus-body.png',
    products: [
      {
        code: 'A-701',
        name: 'GRP Bus Body Panels & Front Fascia',
        description: 'Complete GRP panel kits, roofs, and aerodynamic front fascias for city buses and coaches, offering significant weight reduction and fuel efficiency.',
        image: 'https://i.ibb.co/6r0M5kQ/emphz-grp-bus-body.png',
      },
      {
        code: 'A-702',
        name: 'GRP Auto-Rickshaw Body & Canopy',
        description: 'Rust-proof, lightweight bodies and canopies for three-wheelers, enhancing durability, safety, and passenger comfort.',
        image: 'https://i.ibb.co/hXN0GfW/emphz-grp-auto-rickshaw-body.png',
      },
      {
        code: 'A-703',
        name: 'GRP Truck & Van Aerodynamic Kits',
        description: 'Custom-molded fairings, spoilers, and side skirts to reduce drag and improve fuel economy for commercial vehicles.',
        image: 'https://i.ibb.co/fDbPNSb/emphz-grp-truck-fairing.png',
      },
      {
        code: 'A-704',
        name: 'GRP Ambulance & Mobile Clinic Bodies',
        description: 'Hygienic, easy-to-clean, and customizable composite bodies for special-purpose medical vehicles, ensuring durability and insulation.',
        image: 'https://i.ibb.co/hK5J9ZJ/emphz-grp-ambulance-body.png',
      },
    ],
    technicalSnapshot: [
      { parameter: "Flexural Strength", specification: "180-250 MPa", certification: "ASTM D790" },
      { parameter: "Impact Resistance", specification: "IK09", certification: "IEC 62262" },
      { parameter: "Fire Standard", specification: "FMVSS 302 Compliant", certification: "AIS 004" },
      { parameter: "UV Resistance", specification: "Automotive Grade Gelcoat", certification: "ISO 4892" },
      { parameter: "Weight Savings vs Steel", specification: "Up to 40%", certification: "" },
    ],
    materials: ["SMC/BMC Composites", "Automotive-Grade Resin", "UV-Resistant Gelcoat"],
    accessories: ["Integrated Mountings", "Structural Inserts", "Custom Paint Finish"],
  },
];

// --- Industries We Empower ---
export const INDUSTRIES: Industry[] = [
  {
    name: "Electrical & Utilities",
    slug: "electrical-utilities",
    applicationExample: "GRP feeder pillars and transformer enclosures",
    image: 'https://i.ibb.co/qD4D6qY/industry-electrical.jpg',
    description: "EMPHZ provides mission-critical GRP enclosures and housings for the electrical power transmission and distribution sector. Our non-conductive, corrosion-proof solutions protect sensitive equipment like switchgear, transformers, and control panels from harsh environmental conditions, ensuring grid reliability and safety.",
    details: [
      "IP66/IK10 rated enclosures for superior protection against dust, water, and impact.",
      "UV-stabilized and fire-retardant materials for long-term outdoor performance.",
      "Customizable designs for feeder pillars, RMU housings, and transformer kiosks.",
      "Lightweight construction for easy transportation and installation in remote locations."
    ],
    relatedCategories: ['CAT1', 'CAT3', 'CAT4'],
    featuredProducts: ['E-103', 'E-106', 'U-307', 'U-308']
  },
  {
    name: "Renewable Energy",
    slug: "renewable-energy",
    applicationExample: "Solar inverter cabinets, wind farm junction boxes",
    image: 'https://i.ibb.co/PNSc9Cf/industry-renewable.jpg',
    description: "In the renewable energy sector, our GRP solutions provide durable, maintenance-free protection for critical components in solar and wind farms. From inverter cabinets to nacelle covers, our composites withstand extreme weather, ensuring maximum uptime and a low total cost of ownership for green energy projects.",
    details: [
      "UV-stable GRP cabinets for solar inverters and battery storage systems.",
      "Lightweight, high-strength nacelle covers for wind turbines.",
      "Corrosion-proof junction boxes and control panels for coastal and offshore installations.",
      "Thermally insulated designs to protect sensitive electronics from temperature extremes."
    ],
    relatedCategories: ['CAT1', 'CAT4', 'CAT5', 'CAT6'],
    featuredProducts: ['E-108', 'C-406', 'C-409', 'O-504']
  },
  {
    name: "Telecom & IT",
    slug: "telecom-it",
    applicationExample: "Weatherproof kiosk housings for fiber and base stations",
    image: 'https://i.ibb.co/3mS7bJd/industry-telecom.jpg',
    description: "EMPHZ engineers robust GRP enclosures and shelters for the telecom and IT industries, safeguarding sensitive network equipment from environmental hazards. Our solutions offer excellent thermal management and RF transparency, making them ideal for 5G base stations, fiber optic junction boxes, and remote data-gathering nodes.",
    details: [
      "Weatherproof kiosks and cabinets with advanced thermal management options.",
      "Customizable enclosures with EMI/RFI shielding for sensitive electronics.",
      "RF-transparent materials ideal for antenna housings and communication equipment.",
      "Secure and durable shelters for remote base stations and network hubs."
    ],
    relatedCategories: ['CAT1', 'CAT2', 'CAT4', 'CAT6'],
    featuredProducts: ['E-105', 'M-206', 'C-401', 'S-605']
  },
  {
    name: "Construction & Infrastructure",
    slug: "construction-infrastructure",
    applicationExample: "Portable toilets, control cabins, and pump rooms",
    image: 'https://i.ibb.co/yQjD4sR/industry-construction.jpg',
    description: "For the construction and public infrastructure sectors, EMPHZ delivers rapid-deployment modular GRP structures and durable utility products. Our lightweight yet strong portable cabins, restrooms, and site offices offer a superior alternative to traditional materials, while our composite manhole covers and cable trenches ensure long-term, corrosion-free performance.",
    details: [
      "Rapid-deployment portable cabins, site offices, and security booths.",
      "Hygienic, easy-to-clean portable toilets and restroom units.",
      "High-strength, lightweight manhole covers and drainage gratings.",
      "Corrosion-immune water storage and septic tanks for reliable sanitation."
    ],
    relatedCategories: ['CAT2', 'CAT3'],
    featuredProducts: ['M-201', 'M-203', 'M-210', 'U-305']
  },
  {
    name: "Marine & Offshore",
    slug: "marine-offshore",
    applicationExample: "Anti-corrosive enclosures for coastal facilities",
    image: 'https://i.ibb.co/3d2C7Kq/industry-marine.jpg',
    description: "EMPHZ's specialized GRP composites are engineered to withstand the most corrosive marine and offshore environments. Our IP67-rated enclosures, cabinets, and custom-molded components provide unparalleled protection against saltwater, humidity, and UV radiation, making them the ideal choice for ports, desalination plants, and offshore platforms.",
    details: [
      "IP67-rated enclosures certified for over 1000 hours of salt spray testing.",
      "Corrosion-immune materials for junction boxes, control cabinets, and battery compartments.",
      "Lightweight structures that reduce structural load on offshore platforms and vessels.",
      "Fire-retardant and UV-stabilized formulations for enhanced safety and longevity."
    ],
    relatedCategories: ['CAT1', 'CAT5'],
    featuredProducts: ['E-104', 'O-501', 'O-503', 'O-505']
  },
  {
    name: "Automobile & Transport",
    slug: "automobile-transport",
    applicationExample: "GRP bus body panels and auto-rickshaw bodies",
    image: 'https://i.ibb.co/N2cZ9N6/industry-automotive.jpg',
    description: "EMPHZ delivers high-performance GRP composite solutions to the automotive and transport sectors, focusing on lightweight, durable, and aerodynamic components that improve fuel efficiency and reduce lifecycle costs.",
    details: [], // Details are on the dedicated page
    relatedCategories: ['CAT7'],
    featuredProducts: ['A-701', 'A-702', 'A-703']
  },
];

// --- Dedicated Page Data: Automobile ---
export const AUTOMOBILE_PAGE_DATA: AutomobilePageData = {
  hero: {
    videoUrl: "https://videos.pexels.com/video-files/8141341/8141341-hd_1920_1080_25fps.mp4",
    title: "Driving the Future with GRP Composites",
    subtitle: "Lightweight, aerodynamic, and durable solutions for the modern transport industry."
  },
  introduction: {
    title: "Innovating Mobility with Advanced Composites",
    content: "EMPHZ is at the forefront of revolutionizing the automobile and transport industry with our advanced GRP composite solutions. By replacing traditional heavy metals with our lightweight, high-strength materials, we help manufacturers build more fuel-efficient, durable, and aesthetically pleasing vehicles. From public transport to commercial logistics, our components are engineered to meet the rigorous demands of modern mobility."
  },
  solutions: [
    {
      title: "Buses & Coaches",
      description: "We provide complete GRP solutions including front and rear fascias, roof panels, and interior components. Our products reduce overall vehicle weight, leading to significant fuel savings and lower emissions, while offering superior durability against daily wear and tear.",
      image: "https://i.ibb.co/6r0M5kQ/emphz-grp-bus-body.png"
    },
    {
      title: "Auto-Rickshaws & Three-Wheelers",
      description: "Our rust-proof, impact-resistant GRP bodies and canopies for auto-rickshaws enhance vehicle longevity and passenger safety. The lightweight nature also improves maneuverability and operational efficiency in urban environments.",
      image: "https://i.ibb.co/hXN0GfW/emphz-grp-auto-rickshaw-body.png"
    },
    {
      title: "Commercial Trucks & Vans",
      description: "EMPHZ designs and manufactures aerodynamic kits, including fairings and side skirts, that reduce drag and substantially improve fuel economy for long-haul trucks and commercial vans. Our solutions are built to withstand harsh road conditions.",
      image: "https://i.ibb.co/fDbPNSb/emphz-grp-truck-fairing.png"
    },
    {
      title: "Specialized Vehicles",
      description: "We custom-fabricate GRP bodies for specialized vehicles like ambulances, mobile clinics, and refrigerated vans. The hygienic, easy-to-clean, and insulating properties of our composites make them the ideal material for these critical applications.",
      image: "https://i.ibb.co/hK5J9ZJ/emphz-grp-ambulance-body.png"
    }
  ],
  advantages: [
    { icon: "lightweight", title: "Weight Reduction", description: "Up to 40% lighter than steel, directly improving fuel efficiency, handling, and payload capacity." },
    { icon: "durability", title: "Superior Durability", description: "High impact resistance and immunity to corrosion from road salt and environmental pollutants." },
    { icon: "design", title: "Design Flexibility", description: "GRP allows for creative, complex, and aerodynamic shapes, enabling modern and aesthetically superior vehicle bodies." },
    { icon: "nvh", title: "Noise & Vibration Damping", description: "Inherent material properties reduce NVH levels, leading to a quieter and more comfortable ride experience." },
    { icon: "safety", title: "Enhanced Safety", description: "High strength-to-weight ratio contributes to safer vehicle structures with excellent impact absorption properties." },
    { icon: "assembly", title: "Faster Production Cycles", description: "Consolidated parts and lightweight modules simplify the assembly process, reducing manufacturing time and costs." },
  ],
  featuredProducts: ['A-701', 'A-702', 'A-703', 'A-704']
};


// --- Innovation & Quality ---
export const QUALITY_FRAMEWORK: QualityPoint[] = [
  { title: "ISO 9001 Certified Manufacturing" },
  { title: "CE Marked Products" },
  { title: "BIS-Compliant Materials" },
  { title: "100% In-house R&D and mold design" },
  { title: "Final product testing", description: ": Thermal, UV, impact, and dielectric strength" },
];

export const PROCESS_PHILOSOPHY = "Every EMPHZ product undergoes a closed-loop design-to-delivery system — from CAD modeling to finished product validation — ensuring zero tolerance for defects.";
export const FACTORY_IMAGES = [
  "https://i.ibb.co/9gZczP3/emphz-factory-press.jpg",
  "https://i.ibb.co/gDHm9d4/emphz-factory-qc.jpg"
];

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
  industryDetail: {
    title: (industryName: string) => `GRP Solutions for the ${industryName} Sector | EMPHZ`,
    description: (industryName: string, industryDescription: string) => `Explore EMPHZ's specialized GRP composite solutions for the ${industryName} sector. ${industryDescription.substring(0, 150)}...`,
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