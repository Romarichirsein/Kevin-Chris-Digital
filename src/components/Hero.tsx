import React from 'react';
import { trackConversion } from '../services/tracker';
import { 
  Sparkles, 
  Palette, 
  TrendingUp, 
  Users, 
  BookOpen, 
  ArrowUpRight, 
  CheckCircle2, 
  Smartphone,
  Zap
} from 'lucide-react';

interface HeroProps {
  onDiscoverGuide: () => void;
  onExplorePortfolio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDiscoverGuide, onExplorePortfolio }) => {
  const handleGuideClick = () => {
    trackConversion('chariow_guide_ia', 'Hero Primary CTA - Découvrir le Guide IA');
    onDiscoverGuide();
  };

  const handlePortfolioClick = () => {
    trackConversion('behance_portfolio', 'Hero Secondary CTA - Voir mon Portfolio Design');
    onExplorePortfolio();
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-800/60" id="hero">
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-500/10 via-teal-500/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6 font-['Outfit',sans-serif]">
            L’Intelligence Artificielle et le Design au service de votre{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              liberté financière
            </span>
            .
          </h1>

          {/* Subtitle - EXACT REQUEST */}
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
            Découvrez les stratégies concrètes pour monétiser vos compétences, automatiser vos revenus et propulser votre business en Afrique, même en partant de zéro.
          </p>

          {/* Action CTAs - EXACT REQUEST */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14">
            <button
              type="button"
              id="hero-cta-guide-ia"
              onClick={handleGuideClick}
              className="w-full sm:w-auto px-8 py-4 text-base font-bold text-[#0b0f19] bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 rounded-xl shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/35 transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-3"
            >
              <Sparkles className="w-5 h-5 fill-current" />
              <span>Découvrir le Guide IA 🚀</span>
            </button>

            <button
              type="button"
              id="hero-cta-portfolio"
              onClick={handlePortfolioClick}
              className="w-full sm:w-auto px-7 py-4 text-base font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2.5"
            >
              <Palette className="w-5 h-5 text-teal-400" />
              <span>Voir mon Portfolio Design 🎨</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          {/* Trust Metrics Grid (Adapting to user specifications) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-left">
            
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold mb-1">
                <TrendingUp className="w-4 h-4" />
                <span>Impact Éprouvé</span>
              </div>
              <div className="text-xl sm:text-2xl font-black text-white">x4 Chiffre d'Affaires</div>
              <p className="text-xs text-slate-400 mt-1">Grâce aux tunnels automatisés sur Chariow</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold mb-1">
                <BookOpen className="w-4 h-4" />
                <span>Méthode Terrain</span>
              </div>
              <div className="text-xl sm:text-2xl font-black text-white">+20 Fiches IA</div>
              <p className="text-xs text-slate-400 mt-1">Guides pas-à-pas pour monétiser en Afrique</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-teal-400 text-xs font-semibold mb-1">
                <Users className="w-4 h-4" />
                <span>Audience</span>
              </div>
              <div className="text-xl sm:text-2xl font-black text-white">+500K Abonnés</div>
              <p className="text-xs text-slate-400 mt-1">Communauté active sur TikTok, FB, Insta</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold mb-1">
                <Smartphone className="w-4 h-4" />
                <span>Paiement Local</span>
              </div>
              <div className="text-xl sm:text-2xl font-black text-white">Mobile Money</div>
              <p className="text-xs text-slate-400 mt-1">Orange Money, MTN MoMo, Wave intégrés</p>
            </div>

          </div>

          {/* Quick Real-Time Guarantee Note */}
          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Aucune compétence technique initiale requise • Optimisé smartphone & connexions locales</span>
          </div>

        </div>
      </div>
    </section>
  );
};
