import React from 'react';
import { getAssetUrl } from '../utils/assets';

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
      {/* Official Portrait Emblem */}
      <div className="relative flex items-center justify-center">
        {/* Subtle hover glow */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-600 to-sky-400 opacity-0 group-hover:opacity-60 blur-md transition-opacity duration-300 pointer-events-none" />
        
        {/* Circular Avatar Container */}
        <div className="relative w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-md shadow-blue-950/30 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
          <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 flex items-center justify-center">
            <img 
              src={getAssetUrl('img/logo_kevin.jpg')} 
              alt="Kevin Chris" 
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (!target.src.includes('kevin_ai_portrait.jpg')) {
                  target.src = getAssetUrl('img/kevin_ai_portrait.jpg');
                }
              }}
            />
          </div>
        </div>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-['Outfit',sans-serif]">
          Kevin Chris
        </span>
        <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium tracking-wide">
          Social Media & Monétisation
        </span>
      </div>
    </button>
  );
};
