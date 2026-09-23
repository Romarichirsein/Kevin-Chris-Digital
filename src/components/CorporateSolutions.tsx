import React from 'react';
import { PORTFOLIO_PROJECTS } from '../data/portfolio';
import { trackConversion } from '../services/tracker';
import { getAssetUrl } from '../utils/assets';
import { 
  Palette, 
  Building2, 
  ExternalLink, 
  Layers, 
  CheckCircle, 
  Sparkles, 
  Figma, 
  Smartphone, 
  TrendingUp,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

interface CorporateSolutionsProps {
  onOpenAudit: () => void;
}

export const CorporateSolutions: React.FC<CorporateSolutionsProps> = ({ onOpenAudit }) => {
  const handleBehanceClick = () => {
    trackConversion('behance_portfolio', 'Corporate Section - Behance Portfolio Click');
    window.open('https://www.behance.net/', '_blank');
  };

  const handleAuditClick = () => {
    trackConversion('audit_startupic', 'Corporate Section - Réserver un audit Startupic');
    onOpenAudit();
  };

  return (
    <section className="py-20 lg:py-28 bg-[#0d1322] border-b border-slate-800/80 relative" id="solutions-entreprises">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
            Besoin d'un design d'interface ou d'une stratégie de croissance ?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Vous êtes une startup ou une entreprise établie ? Donnez à votre produit digital l'impact visuel qu'il mérite. En tant que Designer Senior, j'interviens sur la création de vos chartes graphiques, le prototypage de vos applications et l'optimisation de vos interfaces pour maximiser vos conversions.
          </p>
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            type="button"
            id="corporate-behance-btn"
            onClick={handleBehanceClick}
            className="w-full sm:w-auto px-6 py-3.5 text-sm font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2.5"
          >
            <Palette className="w-4 h-4 text-cyan-400" />
            <span>Explorer mon portfolio sur Behance 💼</span>
            <ExternalLink className="w-4 h-4 text-slate-400" />
          </button>

          <button
            type="button"
            id="corporate-audit-btn"
            onClick={handleAuditClick}
            className="w-full sm:w-auto px-7 py-3.5 text-sm font-bold text-[#0b0f19] bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 rounded-xl shadow-xl shadow-cyan-500/20 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Building2 className="w-4 h-4" />
            <span>Réserver un audit avec Startupic Consulting 🏢</span>
          </button>
        </div>

        {/* Featured Collaboration: Startupic Consulting Douala */}
        <div className="mb-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/20 border border-cyan-500/20 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Partenariat Institutionnel</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Collaborateur & Designer Senior chez Startupic Consulting
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Basé au cœur de la capitale économique camerounaise à <strong>Douala</strong>, j'accompagne aux côtés du cabinet <strong>Startupic Consulting</strong> des startups technologiques, institutions et PME dans la refonte de leur image de marque, l'ergonomie mobile et leurs leviers d'acquisition.
              </p>
            </div>

            <button
              type="button"
              onClick={handleAuditClick}
              className="shrink-0 px-5 py-3 text-xs font-bold rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition-colors flex items-center gap-2"
            >
              <span>Demander un devis ou un audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Portfolio Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_PROJECTS.map((proj) => (
            <div 
              key={proj.id}
              className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 overflow-hidden flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                <div className="relative aspect-video overflow-hidden bg-slate-950">
                  <img
                    src={getAssetUrl(proj.image)}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('uiux_startupic_showcase.jpg')) {
                        target.src = getAssetUrl('images/uiux_startupic_showcase.jpg');
                      }
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-[10px] font-bold bg-[#0b0f19]/90 text-cyan-300 rounded-md border border-cyan-500/30 backdrop-blur-sm">
                      {proj.category}
                    </span>
                  </div>
                  {proj.metrics && (
                    <div className="absolute bottom-3 right-3">
                      <span className="px-2 py-0.5 text-[10px] font-semibold bg-emerald-500/90 text-[#0b0f19] rounded-md font-sans">
                        {proj.metrics}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <div className="text-[11px] font-semibold text-slate-400 mb-1">
                    {proj.client}
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {proj.title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.tags.map((t, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleBehanceClick}
                  className="w-full py-2 px-3 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Consulter sur Behance</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Design Services Matrix */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
            <Palette className="w-5 h-5 text-emerald-400 mb-2" />
            <h5 className="text-sm font-bold text-white">Identité & Chartes</h5>
            <p className="text-xs text-slate-400 mt-1">Logo, typographies, palettes de couleurs et guide de style de marque complet.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
            <Smartphone className="w-5 h-5 text-cyan-400 mb-2" />
            <h5 className="text-sm font-bold text-white">Prototypage Mobile</h5>
            <p className="text-xs text-slate-400 mt-1">Conception sous Figma d'applications iOS/Android adaptées aux écrans africains.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
            <TrendingUp className="w-5 h-5 text-teal-400 mb-2" />
            <h5 className="text-sm font-bold text-white">Optimisation CRO</h5>
            <p className="text-xs text-slate-400 mt-1">Refonte de vos tunnels de conversion pour maximiser les ventes et l'engagement.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
            <Layers className="w-5 h-5 text-purple-400 mb-2" />
            <h5 className="text-sm font-bold text-white">Design Systems</h5>
            <p className="text-xs text-slate-400 mt-1">Composants réutilisables pour accélérer le travail de vos équipes de développeurs.</p>
          </div>
        </div>

      </div>
    </section>
  );
};
