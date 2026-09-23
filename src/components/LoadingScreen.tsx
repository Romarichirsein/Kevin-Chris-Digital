import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { getAssetUrl } from '../utils/assets';

interface LoadingScreenProps {
  onFinish: () => void;
  durationMs?: number;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  onFinish, 
  durationMs = 5000 
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = performance.now();
    let animationFrameId: number;

    const updateLoader = (now: number) => {
      const elapsed = now - startTime;
      const pct = Math.min(100, Math.floor((elapsed / durationMs) * 100));
      setProgress(pct);

      if (elapsed < durationMs) {
        animationFrameId = requestAnimationFrame(updateLoader);
      } else {
        setProgress(100);
        const timeout = setTimeout(() => {
          onFinish();
        }, 150);
        return () => clearTimeout(timeout);
      }
    };

    animationFrameId = requestAnimationFrame(updateLoader);
    return () => cancelAnimationFrame(animationFrameId);
  }, [durationMs, onFinish]);

  // Radius and Circumference for circular progress ring
  const radius = 86;
  const circumference = 2 * Math.PI * radius; // ~540.35
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#070a12] text-white select-none overflow-hidden"
    >
      {/* Subtle warm luxury background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative flex flex-col items-center z-10 px-4">
        
        {/* Central Circular Avatar with Circular Spinner Ring */}
        <div className="relative w-52 h-52 sm:w-60 sm:h-60 flex items-center justify-center">
          
          {/* SVG Circular Progress Loader */}
          <svg 
            className="absolute inset-0 w-full h-full -rotate-90 transform"
            viewBox="0 0 200 200"
          >
            <defs>
              <linearGradient id="loader-ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>

            {/* Background Track Circle */}
            <circle
              cx="100"
              cy="100"
              r={radius}
              stroke="#1e293b"
              strokeWidth="4"
              fill="none"
              strokeOpacity="0.4"
            />

            {/* Progress Circular Stroke */}
            <circle
              cx="100"
              cy="100"
              r={radius}
              stroke="url(#loader-ring-grad)"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
              style={{
                strokeDasharray: circumference,
                strokeDashoffset: strokeDashoffset,
                transition: 'stroke-dashoffset 80ms linear'
              }}
            />
          </svg>

          {/* Image au centre (Kevin Chris Portrait) */}
          <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden p-1 bg-slate-900 border border-blue-500/30 shadow-xl shadow-blue-950/50">
            <img 
              src={getAssetUrl('img/logo_kevin.jpg')}
              alt="Kevin Chris"
              className="w-full h-full object-cover object-top rounded-full"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (!target.src.includes('kevin_ai_portrait.jpg')) {
                  target.src = getAssetUrl('img/kevin_ai_portrait.jpg');
                }
              }}
            />
          </div>

          {/* Orbiting progress point */}
          <div 
            className="absolute w-full h-full pointer-events-none"
            style={{
              transform: `rotate(${(progress / 100) * 360}deg)`,
              transition: 'transform 80ms linear'
            }}
          >
            <div className="w-3 h-3 -mt-1 mx-auto rounded-full bg-sky-400 shadow-[0_0_10px_#38bdf8] border-2 border-white" />
          </div>
        </div>

        {/* Progress and Brand Information */}
        <div className="mt-7 text-center space-y-2">
          <div className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {progress}%
          </div>

          <h1 className="text-lg sm:text-xl font-extrabold tracking-tight text-white font-['Outfit',sans-serif]">
            Kevin Chris Digital
          </h1>

          <p className="text-xs text-slate-400 font-medium tracking-wide">
            Chargement de votre espace...
          </p>
        </div>

        {/* Passer button */}
        <div className="mt-6">
          <button
            type="button"
            onClick={onFinish}
            className="px-4 py-1.5 rounded-full text-xs text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all"
          >
            Passer &rarr;
          </button>
        </div>

      </div>
    </motion.div>
  );
};
