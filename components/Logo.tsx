
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = 'h-12 w-auto' }) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-full w-auto" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="logoGradient" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#008C99" />
            <stop offset="100%" stopColor="#005f66" />
          </linearGradient>
        </defs>
        <g>
            <title>EMPHZ Logo</title>
            <path d="M0 0 H25 L20 8 H0 V0 Z" fill="url(#logoGradient)" />
            <path d="M0 16 H32 L27 24 H0 V16 Z" fill="url(#logoGradient)" />
            <path d="M0 32 H25 L20 40 H0 V32 Z" fill="url(#logoGradient)" />
            <path d="M30 0 H40 L35 8 H30 V0 Z" fill="url(#logoGradient)" opacity="0.7" />
            <path d="M37 16 H40 L38.5 24 H37 V16 Z" fill="url(#logoGradient)" opacity="0.7"/>
        </g>
      </svg>
      <span className="font-bold text-2xl tracking-tight text-gray-800 dark:text-gray-200 font-poppins">
        EMPHZ
      </span>
    </div>
  );
};

export default Logo;
