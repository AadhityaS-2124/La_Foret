import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  invert?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-8 w-8", invert = false }) => {
  const [imgFailed, setImgFailed] = useState(false);

  if (!imgFailed) {
    return (
      <img
        src="/logo.png"
        alt="La Forêt Logo"
        className={`${className} object-contain mr-2 ${invert ? 'brightness-0 invert' : ''}`}
        onError={() => setImgFailed(true)}
      />
    );
  }

  // Fallback: A beautiful minimalist 2D SVG of a tiger head peeking out of grass
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className} fill-current mr-2`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Tiger Head Geometry */}
      <path d="M50,15 L35,30 L38,45 L32,50 L38,65 L50,75 L62,65 L68,50 L62,45 L65,30 Z" />
      {/* Ears */}
      <polygon points="35,30 25,15 38,25" />
      <polygon points="65,30 75,15 62,25" />
      {/* Eyes (Negative space - adapts to background color) */}
      <polygon points="42,42 47,45 42,48" fill={invert ? '#1A1A1A' : '#FBFBF9'} />
      <polygon points="58,42 53,45 58,48" fill={invert ? '#1A1A1A' : '#FBFBF9'} />
      {/* Nose (Negative space) */}
      <polygon points="48,55 52,55 50,60" fill={invert ? '#1A1A1A' : '#FBFBF9'} />
      {/* Stripes (Negative space) */}
      <path d="M38,38 L45,40 M62,38 L55,40 M36,52 L43,50 M64,52 L57,50" stroke={invert ? '#1A1A1A' : '#FBFBF9'} strokeWidth="2" strokeLinecap="round" />
      {/* Tall Grasses at the bottom (Peeking out effect) */}
      <path d="M15,90 Q30,40 32,90" />
      <path d="M25,90 Q40,30 45,90" />
      <path d="M38,90 Q50,20 52,90" />
      <path d="M55,90 Q62,35 68,90" />
      <path d="M70,90 Q80,45 85,90" />
      <path d="M80,90 Q90,55 92,90" />
    </svg>
  );
};
