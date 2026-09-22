import React from 'react';
import { 
  Target, 
  Smartphone, 
  Sparkles, 
  Workflow, 
  ShieldCheck, 
  Coins, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { trackConversion } from '../services/tracker';

export const ValueProposition: React.FC = () => {
  const handleCta = () => {
    trackConversion('chariow_guide_ia', 'Value Prop CTA - Découvrir la méthode');
    const el = document.getElementById('guide-ia');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const steps = [
    {
      num: '01',
      title: 'L’IA adaptée au terrain africain',
      desc: 'Pas de théories complexes. Des prompts testés sur ChatGPT, Claude et Gemini pour rédiger des scripts TikTok viraux, des offres et des pages de vente en 10 minutes chrono.',
      icon: Target,
      tag: 'Pragmatisme 100%'
    },
    {
      num: '02',
      title: 'Monétisation sans carte bancaire internationale',
      desc: 'Mise en place de tunnels de vente automatisés sur Chariow connectés directement à Orange Money, MTN MoMo et Wave. Vous encaissez instantanément en FCFA.',
      icon: Smartphone,
      tag: 'Mobile Money'
    },
    {
      num: '03',
      title: 'Automatisation complète (Tunnels Chariow)',
      desc: 'La livraison de vos e-books et formations se fait en automatique 24h/24 sans que vous ayez à envoyer manuellement les fichiers. C’est ce système qui a multiplié mon CA par 4.',
      icon: Workflow,
      tag: 'CA x4 Prouvé'
    }
  ];

  return (
    <section className="py-16 bg-[#090d16] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Value Proposition Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            Proposition de valeur & méthode
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-['Outfit',sans-serif]">
            Pourquoi cette méthode fonctionne là où les formations classiques échouent ?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400">
            Une approche taillée sur-mesure pour les réalités du marché africain francophone.
          </p>
        </div>

        {/* 3 Step Strategy Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div 
                key={i}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black text-slate-500 font-mono">
                      PHASE {s.num}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {s.tag}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">
                    {s.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Applicable dès aujourd'hui</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Official Chariow Testimony Highlight */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                Témoignage officiel & Étude de cas
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">
                « L'automatisation des tunnels de vente et l'intégration Mobile Money ont multiplié mon chiffre d'affaires par 4. »
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Kevin Chris Atchof, ambassadeur officiel de la plateforme panafricaine Chariow.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleCta}
            className="shrink-0 px-5 py-2.5 text-xs font-bold rounded-xl bg-emerald-400 text-[#0b0f19] hover:bg-emerald-300 transition-colors flex items-center gap-2 shadow-md shadow-emerald-500/20"
          >
            <span>Découvrir le guide pratique</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
