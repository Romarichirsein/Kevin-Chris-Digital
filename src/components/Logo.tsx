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
      {/* Official AI Portrait Logo Emblem */}
      <div className="relative flex items-center justify-center">
        {/* Subtle glowing halo on hover */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-500 opacity-30 group-hover:opacity-80 blur-md transition-opacity duration-300 pointer-events-none" />
        
        {/* Circular Avatar Container with Tech Cyan Border */}
        <div className="relative w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-cyan-400 via-blue-600 to-indigo-500 shadow-md shadow-blue-950/40 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
          <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 flex items-center justify-center">
            <img 
              src="/img/logo_kevin.jpg" 
              alt="Logo Kevin Chris" 
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (!target.src.includes('kevin_ai_portrait.jpg')) {
                  target.src = '/img/kevin_ai_portrait.jpg';
                }
              }}
            />
          </div>

          {/* Active AI badge pulse dot */}
          <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-900 shadow-sm" title="Actif en ligne" />
        </div>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors font-['Outfit',sans-serif]">
          Kevin Chris
        </span>
        <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium tracking-wide">
          Intelligence Artificielle & Monétisation
        </span>
      </div>
    </button>
  );
};
