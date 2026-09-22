import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

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
        }, 180);
        return () => clearTimeout(timeout);
      }
    };

    animationFrameId = requestAnimationFrame(updateLoader);
    return () => cancelAnimationFrame(animationFrameId);
  }, [durationMs, onFinish]);

  // Radius and Circumference for circular progress ring
  const radius = 88;
  const circumference = 2 * Math.PI * radius; // ~552.92
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  // Status message according to progress
  const getStatusMessage = () => {
    if (progress < 25) return "Initialisation de l'environnement IA...";
    if (progress < 55) return "Chargement des masterclasses & écosystèmes...";
    if (progress < 85) return "Synchronisation de la plateforme...";
    return "Système prêt. Bienvenue sur Kevin Chris Digital.";
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.03 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#070b14] text-white select-none overflow-hidden"
    >
      {/* Subtle futuristic background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-br from-blue-600/20 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      {/* Subtle tech background grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative flex flex-col items-center z-10 px-4">
        
        {/* Holographic Header Tag */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-[11px] font-mono tracking-widest uppercase mb-7 shadow-lg shadow-cyan-950/50"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>AI PROCESSING • ACTIVE</span>
        </motion.div>

        {/* Central Circular Avatar with Circular Spinner Ring */}
        <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center">
          
          {/* Subtle radar pulsing wave */}
          <div className="absolute inset-0 rounded-full bg-cyan-500/15 animate-ping duration-1000 pointer-events-none" />

          {/* SVG Circular Progress Loader */}
          <svg 
            className="absolute inset-0 w-full h-full -rotate-90 transform"
            viewBox="0 0 200 200"
          >
            <defs>
              <linearGradient id="loader-ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>

              {/* Glow filter */}
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background Track Circle */}
            <circle
              cx="100"
              cy="100"
              r={radius}
              stroke="#1e293b"
              strokeWidth="4"
              fill="none"
              strokeOpacity="0.5"
            />

            {/* Secondary rotating dashed tech ring */}
            <circle
              cx="100"
              cy="100"
              r={radius + 6}
              stroke="#38bdf8"
              strokeWidth="1.2"
              fill="none"
              strokeDasharray="4 6"
              strokeOpacity="0.35"
              className="animate-[spin_10s_linear_infinite]"
            />

            {/* Progress Circular Stroke */}
            <circle
              cx="100"
              cy="100"
              r={radius}
              stroke="url(#loader-ring-grad)"
              strokeWidth="5.5"
              strokeLinecap="round"
              fill="none"
              filter="url(#glow)"
              style={{
                strokeDasharray: circumference,
                strokeDashoffset: strokeDashoffset,
                transition: 'stroke-dashoffset 80ms linear'
              }}
            />
          </svg>

          {/* Image au centre (Kevin Chris IA Portrait) */}
          <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-full overflow-hidden p-1 bg-gradient-to-tr from-cyan-500/40 via-blue-600/30 to-indigo-500/40 shadow-2xl shadow-cyan-950/80">
            <img 
              src="/img/logo_kevin.jpg"
              alt="Kevin Chris"
              className="w-full h-full object-cover object-top rounded-full transform hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (!target.src.includes('kevin_ai_portrait.jpg')) {
                  target.src = '/img/kevin_ai_portrait.jpg';
                }
              }}
            />
            {/* Holographic lens tint */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Orbiting progress dot */}
          <div 
            className="absolute w-full h-full pointer-events-none"
            style={{
              transform: `rotate(${(progress / 100) * 360}deg)`,
              transition: 'transform 80ms linear'
            }}
          >
            <div className="w-3.5 h-3.5 -mt-1.5 mx-auto rounded-full bg-cyan-300 shadow-[0_0_12px_#38bdf8] border-2 border-white" />
          </div>
        </div>

        {/* Progress Counter and Brand Info */}
        <div className="mt-8 text-center space-y-2">
          
          {/* Percentage */}
          <div className="font-mono text-3xl sm:text-4xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-sky-200">
            {progress}%
          </div>

          {/* Title */}
          <h1 className="text-lg sm:text-xl font-extrabold tracking-tight text-white font-['Outfit',sans-serif]">
            Kevin Chris Digital
          </h1>

          {/* Dynamic Status Text */}
          <p className="text-xs sm:text-sm text-cyan-200/80 font-mono tracking-wide h-6">
            {getStatusMessage()}
          </p>
        </div>

        {/* Skip button for optimal UX */}
        <div className="mt-7">
          <button
            type="button"
            onClick={onFinish}
            className="px-4 py-1.5 rounded-full text-xs text-slate-400 hover:text-cyan-300 hover:bg-slate-800/60 border border-transparent hover:border-cyan-500/30 transition-all font-mono"
          >
            Passer l'introduction &rarr;
          </button>
        </div>

      </div>
    </motion.div>
  );
};
