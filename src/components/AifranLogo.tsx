import React from 'react';

interface AifranLogoProps {
  className?: string;
  variant?: 'full' | 'mark' | 'text';
  color?: string; // e.g. 'white', '#FFFFFF', '#0F172A', 'currentColor'
  accentColor?: string; // e.g. '#EA580C' or '#84A93C'
  showTagline?: boolean;
}

export const AifranLogo: React.FC<AifranLogoProps> = ({
  className = 'h-10 w-auto',
  variant = 'full',
  color = 'currentColor',
  accentColor = '#EA580C',
  showTagline = false,
}) => {
  const fillColor = color === 'currentColor' ? 'currentColor' : color;

  // Sharp, high-definition SVG mark modeled directly on the AIFRAN SPORTS geometric emblem
  const LogoMark = (
    <svg
      viewBox="0 0 500 370"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-9 sm:h-10 w-auto shrink-0 drop-shadow-sm"
    >
      <g fill={fillColor === 'currentColor' ? '#FFFFFF' : fillColor}>
        {/* Left sharp diagonal outer blade */}
        <path d="M 248 10 L 72 360 L 138 298 L 212 148 Z" />
        
        {/* Main 'A' chassis */}
        <path d="M 268 70 L 180 252 L 272 208 L 332 208 L 388 305 L 342 305 L 315 258 L 225 258 L 205 296 L 160 296 L 268 70 Z" />
        
        {/* Slashed dynamic right wing */}
        <path d="M 180 248 L 430 140 L 320 208 L 225 228 Z" />
      </g>
    </svg>
  );

  if (variant === 'mark') {
    return <div className={`inline-flex items-center ${className}`}>{LogoMark}</div>;
  }

  return (
    <div className={`inline-flex items-center gap-3.5 ${className}`}>
      {LogoMark}

      {variant === 'full' && (
        <div className="flex flex-col justify-center">
          <div className="text-lg sm:text-xl font-black tracking-wider uppercase font-['Outfit',sans-serif] leading-none text-white">
            AIFRAN <span style={{ color: accentColor }}>SPORTS</span>
          </div>
          {showTagline && (
            <span className="text-[9px] text-amber-500 font-['JetBrains_Mono',monospace] tracking-widest uppercase block mt-1 font-bold">
              CUT • SEW • MANUFACTURE
            </span>
          )}
        </div>
      )}
    </div>
  );
};
