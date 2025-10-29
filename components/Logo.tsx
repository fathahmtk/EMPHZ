import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = 'h-12 w-auto' }) => {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        role="img"
        aria-labelledby="logo-title logo-desc"
      >
        <title id="logo-title">EMPHZ Logo</title>
        <desc id="logo-desc">The official logo for EMPHZ Private Limited. It features a stylized 3D letter 'E' with a metallic finish, intersected by a vibrant teal lightning bolt. Below the icon is the word 'Emphz' in a dark, embossed font.</desc>
        <defs>
          {/* Gradients inspired by the new, high-quality render */}
          {/* Lighter, more contrasted metallic 'E' */}
          <linearGradient id="metal-main" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E5E7EB" />
            <stop offset="50%" stopColor="#D1D5DB" />
            <stop offset="100%" stopColor="#B0B4BA" />
          </linearGradient>
          <linearGradient id="metal-shadow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#808892" />
            <stop offset="100%" stopColor="#6B7280" />
          </linearGradient>
          
          {/* More vibrant teal for the lightning bolt */}
          <linearGradient id="teal-main" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14B8A6" /> {/* Tailwind teal-500 */}
            <stop offset="100%" stopColor="#0D9488" /> {/* Tailwind teal-600 */}
          </linearGradient>
          <linearGradient id="teal-shadow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F766E" /> {/* Tailwind teal-700 */}
            <stop offset="100%" stopColor="#134E4A" /> {/* Tailwind teal-900 */}
          </linearGradient>
          
          {/* Darker, richer text with a subtle sheen */}
          <linearGradient id="text-main" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4B5563" /> {/* gray-600 */}
            <stop offset="100%" stopColor="#1F2937" /> {/* gray-800 */}
          </linearGradient>
          <linearGradient id="text-extrusion" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#222935" />
            <stop offset="100%" stopColor="#111827" />
          </linearGradient>

          {/* Filter for a softer, more realistic drop shadow */}
          <filter id="logo-shadow" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="6" dy="8" stdDeviation="15" floodColor="#000" floodOpacity="0.4" />
          </filter>

          {/* Filter for a tighter, more defined text shadow */}
           <filter id="text-shadow">
            <feDropShadow dx="4" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* --- Icon Group --- */}
        <g transform="translate(80, 45)" filter="url(#logo-shadow)">
          <title>EMPHZ Engineering Icon</title>
          
          {/* E-Shape (Extrusion layer) - Decorative */}
          <path 
            aria-hidden="true"
            transform="translate(6, 6)"
            d="M 0 0 H 280 V 50 H 70 V 130 H 250 V 180 H 70 V 260 H 280 V 310 H 0 Z" 
            fill="url(#metal-shadow)"
            rx="10"
          />
          {/* E-Shape (Main layer) */}
          <path 
            d="M 0 0 H 280 V 50 H 70 V 130 H 250 V 180 H 70 V 260 H 280 V 310 H 0 Z" 
            fill="url(#metal-main)"
            rx="10"
          />

          {/* Lightning Bolt (Extrusion layer) - Decorative */}
          <path 
            aria-hidden="true"
            transform="translate(6, 6)"
            d="M 240 -20 L 400 -20 L 260 160 L 320 160 L 180 330 L 280 150 L 240 150 Z" 
            fill="url(#teal-shadow)"
          />
          {/* Lightning Bolt (Main layer) */}
          <path 
            d="M 240 -20 L 400 -20 L 260 160 L 320 160 L 180 330 L 280 150 L 240 150 Z" 
            fill="url(#teal-main)"
          />
        </g>
        
        {/* --- Wordmark Group with 3D Extrusion --- */}
        <g transform="translate(25, 370)" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "110px", fontWeight: "600" }} filter="url(#text-shadow)">
          <title>EMPHZ Wordmark</title>
          {/* Extrusion Layer for Wordmark - Decorative */}
          <g transform="translate(4,4)" aria-hidden="true">
              {/* Stylized 'E' extrusion */}
              <g fill="url(#text-extrusion)">
                  <rect x="0" y="12" width="130" height="18" rx="6"/>
                  <rect x="0" y="45" width="130" height="18" rx="6"/>
                  <rect x="0" y="78" width="130" height="18" rx="6"/>
              </g>
              {/* 'mphz' text extrusion */}
              <text x="145" y="95" fill="url(#text-extrusion)">mphz</text>
          </g>

          {/* Main Layer for Wordmark */}
          <g fill="url(#text-main)">
              {/* Stylized 'E' main */}
              <g>
                  <rect x="0" y="12" width="130" height="18" rx="6"/>
                  <rect x="0" y="45" width="130" height="18" rx="6"/>
                  <rect x="0" y="78" width="130" height="18" rx="6"/>
              </g>
              {/* 'mphz' text main */}
              <text x="145" y="95">mphz</text>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Logo;