import React, { useState, useEffect } from 'react';
import { STUDENT_TESTIMONIALS, StudentTestimonial } from '../data/testimonials';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  Quote, 
  TrendingUp, 
  Sparkles,
  Award,
  Users
} from 'lucide-react';

interface TestimonialsProps {
  onExploreCourses?: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onExploreCourses }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [direction, setDirection] = useState<number>(1);

  const testimonials = STUDENT_TESTIMONIALS;

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6500);
    return () => clearInterval(interval);
  }, [isAutoPlay, currentIndex]);

  const current = testimonials[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.35 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.25,
      },
    }),
  };

  return (
    <section 
      className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-3 border border-blue-200 dark:border-blue-900/60 shadow-sm">
            <Award className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Résultats Concrets & Réussites Terrain</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-['Outfit',sans-serif] tracking-tight">
            Témoignages & Études de Cas des Apprenants
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            De la création de contenu percutante jusqu'aux encaissements réels en FCFA et USD : découvrez l'impact direct de la méthode FaceHOOK.
          </p>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center gap-3 self-start md:self-end">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Témoignage précédent"
            className="w-11 h-11 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 dark:hover:border-blue-700 flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Témoignage suivant"
            className="w-11 h-11 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 dark:hover:border-blue-700 flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Feature Carousel Card with hover-blue-halo */}
      <div className="hover-blue-halo blue-perimeter-beam shadow-2xl shadow-blue-950/30">
        <div className="blue-perimeter-inner bg-white dark:bg-slate-900 p-6 sm:p-10 lg:p-12">
          
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              
              {/* Left Column: Metric Highlight Card with Blue Halo */}
              <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-600/10 via-indigo-600/5 to-transparent dark:from-blue-950/60 dark:via-slate-900/80 dark:to-slate-900 border border-blue-200 dark:border-blue-800/80 relative overflow-hidden group hover-blue-halo">
                
                {/* Background watermarked icon */}
                <TrendingUp className="absolute -right-6 -bottom-6 w-36 h-36 text-blue-600/10 dark:text-blue-400/10 pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-blue-600 text-white uppercase tracking-wider shadow-sm">
                      {current.program}
                    </span>
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(current.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                      Résultat chiffré constaté :
                    </span>
                    <div className="text-3xl sm:text-4xl font-black text-blue-600 dark:text-blue-400 tracking-tight font-['Outfit',sans-serif]">
                      {current.resultMetric}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium mt-1">
                      {current.metricLabel}
                    </p>
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-blue-100 dark:border-blue-900/50 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 relative z-10">
                  <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Résultat vérifié terrain</span>
                  </div>
                  <span>{current.location}</span>
                </div>

              </div>

              {/* Right Column: Quote & Student Identity */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                
                <div className="space-y-4">
                  <Quote className="w-10 h-10 text-blue-500/30 dark:text-blue-400/20" />
                  <blockquote className="text-base sm:text-xl text-slate-800 dark:text-slate-100 leading-relaxed font-normal">
                    « {current.quote} »
                  </blockquote>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-black text-sm flex items-center justify-center shadow-md shadow-blue-600/30">
                      {current.initials}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white font-['Outfit',sans-serif]">
                        {current.name}
                      </h4>
                      <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                        {current.role} • {current.location}
                      </p>
                    </div>
                  </div>

                  {onExploreCourses && (
                    <button
                      type="button"
                      onClick={onExploreCourses}
                      className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Rejoindre nos apprenants</span>
                    </button>
                  )}
                </div>

              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </div>

      {/* Pagination Indicators & Mini Previews */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {testimonials.map((t, idx) => (
          <button
            key={t.id}
            type="button"
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            aria-label={`Aller au témoignage de ${t.name}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? 'w-8 bg-blue-600 shadow-sm shadow-blue-600/40'
                : 'w-2.5 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600'
            }`}
          />
        ))}
      </div>

      {/* Grid of Other Success Stories with hover-blue-halo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        {testimonials.slice(0, 3).map((item, idx) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -4 }}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={`p-5 rounded-2xl border cursor-pointer hover-blue-halo transition-all ${
              idx === currentIndex 
                ? 'bg-blue-50/50 dark:bg-blue-950/40 border-blue-400 dark:border-blue-600' 
                : 'bg-white dark:bg-slate-900/70 border-slate-200 dark:border-slate-800'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                {item.program}
              </span>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                {item.resultMetric}
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
              « {item.quote} »
            </p>
            <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
              <span className="font-semibold text-slate-700 dark:text-slate-300">{item.name}</span>
              <span>{item.location}</span>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export { Testimonials as TestimonialsSlider };
