import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'symbol-light' | 'symbol-dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  className = '',
  size = 'md',
}) => {
  const isDark = variant === 'dark' || variant === 'symbol-dark';
  const isSymbolOnly = variant === 'symbol-light' || variant === 'symbol-dark';

  const letterColor = isDark ? '#FFFFFF' : '#111318';
  const subtextColor = isDark ? '#A0A5AD' : '#666B73';

  // Dimension scaling (increased by ~20-25% for commanding desktop presence)
  const heightMap = {
    sm: isSymbolOnly ? 30 : 38,
    md: isSymbolOnly ? 44 : 56,
    lg: isSymbolOnly ? 56 : 74,
    hero: isSymbolOnly ? 72 : 96,
  };

  const h = heightMap[size];

  if (isSymbolOnly) {
    return (
      <svg
        viewBox="0 0 160 110"
        height={h}
        className={`inline-block ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="AKGLOBAL Symbol"
      >
        <defs>
          <linearGradient id="akSwooshGrad" x1="10" y1="90" x2="150" y2="15" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="25%" stopColor="#C026A8" />
            <stop offset="70%" stopColor="#A21A8D" />
            <stop offset="100%" stopColor="#7B0E6A" />
          </linearGradient>
        </defs>

        {/* 'A' letterform */}
        <path
          d="M 14 96 L 46 16 L 68 16 L 92 96 L 68 96 L 63 76 L 38 76 L 33 96 Z M 43 56 L 58 56 L 51 28 Z"
          fill={letterColor}
        />

        {/* 'K' letterform */}
        <path
          d="M 88 16 L 110 16 L 110 96 L 88 96 Z M 110 52 L 138 16 L 164 16 L 128 58 L 166 96 L 138 96 L 110 66 Z"
          fill={letterColor}
        />

        {/* Dynamic Curved Magenta Swoosh */}
        <path
          d="M 6 86 C 18 64, 48 34, 100 20 C 124 13, 146 12, 162 10 C 152 14, 134 20, 112 28 C 64 46, 32 72, 12 94 C 9 92, 7 89, 6 86 Z"
          fill="url(#akSwooshGrad)"
        />
      </svg>
    );
  }

  return (
    <div className={`inline-flex flex-col items-start ${className}`}>
      <svg
        viewBox="0 0 280 90"
        height={h}
        className="w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="AKGLOBAL TRADING PTY"
      >
        <defs>
          <linearGradient id={`akSwooshGradMaster-${variant}`} x1="10" y1="75" x2="140" y2="12" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F5D0F0" />
            <stop offset="30%" stopColor="#C026A8" />
            <stop offset="70%" stopColor="#A21A8D" />
            <stop offset="100%" stopColor="#7B0E6A" />
          </linearGradient>
        </defs>

        {/* AK Monogram Graphic */}
        <g transform="translate(10, 2) scale(0.65)">
          {/* 'A' */}
          <path
            d="M 16 94 L 46 16 L 68 16 L 94 94 L 70 94 L 64 74 L 38 74 L 32 94 Z M 44 54 L 58 54 L 51 28 Z"
            fill={letterColor}
          />
          {/* 'K' */}
          <path
            d="M 88 16 L 110 16 L 110 94 L 88 94 Z M 110 52 L 138 16 L 165 16 L 128 58 L 168 94 L 138 94 L 110 65 Z"
            fill={letterColor}
          />
          {/* Magenta Swoosh */}
          <path
            d="M 6 84 C 18 62, 50 32, 102 18 C 126 12, 150 10, 168 8 C 156 12, 136 18, 114 26 C 64 44, 32 70, 12 92 C 9 90, 7 87, 6 84 Z"
            fill={`url(#akSwooshGradMaster-${variant})`}
          />
        </g>

        {/* Primary Company Name */}
        <text
          x="125"
          y="38"
          fill={letterColor}
          fontSize="21"
          fontWeight="700"
          fontFamily="'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
          letterSpacing="0.08em"
        >
          AKGLOBAL
        </text>
        <text
          x="125"
          y="56"
          fill={letterColor}
          fontSize="13"
          fontWeight="600"
          fontFamily="'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
          letterSpacing="0.16em"
        >
          TRADING PTY
        </text>

        {/* Official Stationery Subtitle */}
        <text
          x="125"
          y="71"
          fill={subtextColor}
          fontSize="7.5"
          fontWeight="500"
          fontFamily="'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
          letterSpacing="0.22em"
        >
          QUALITY EQUIPMENT. RELIABLE SUPPLY.
        </text>
      </svg>
    </div>
  );
};
