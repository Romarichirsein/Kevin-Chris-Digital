import React from 'react';

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ className = '', onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex items-center gap-3 text-left focus:outline-none ${className}`}
      id="brand-logo-btn"
      aria-label="Accueil Kevin Chris"
    >
      {/* Modern High-End Monogram Emblem */}
      <div className="relative flex items-center justify-center">
        {/* Subtle glowing halo on hover */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-400 opacity-0 group-hover:opacity-60 blur-md transition-opacity duration-300" />
        
        <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 border border-blue-500/40 p-1.5 shadow-lg shadow-blue-950/40 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
          <svg 
            viewBox="0 0 40 40" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {/* Geometric stylized K & C in electric cyan & cobalt */}
            <defs>
              <linearGradient id="logo-blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="60%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>

            {/* Background geometric accents */}
            <circle cx="20" cy="20" r="18" stroke="#3b82f6" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="3 3" />
            
            {/* The 'K' vertical pillar */}
            <path 
              d="M12 9V31" 
              stroke="url(#logo-blue-grad)" 
              strokeWidth="3.2" 
              strokeLinecap="round" 
            />
            {/* The 'K' diagonals */}
            <path 
              d="M24 10L14 20L25 31" 
              stroke="url(#logo-blue-grad)" 
              strokeWidth="3.2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
            {/* The 'C' curve surrounding with high-tech finish */}
            <path 
              d="M30 14C27.5 11 23 11 19 13C16 14.5 14 17.5 14 20C14 22.5 16 25.5 19 27C23 29 27.5 29 30 26" 
              stroke="#60a5fa" 
              strokeWidth="2.2" 
              strokeLinecap="round" 
              strokeOpacity="0.85"
            />
            {/* Center spark point */}
            <circle cx="20" cy="20" r="1.5" fill="#38bdf8" />
          </svg>
        </div>
      </div>

      {/* Brand Typography (NO "digital" label/etiquette badge) */}
      <div className="flex flex-col">
        <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-['Outfit',sans-serif]">
          Kevin Chris
        </span>
        <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium tracking-wide">
          Intelligence Artificielle & Design
        </span>
      </div>
    </button>
  );
};
