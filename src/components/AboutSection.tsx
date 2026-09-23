import React from 'react';
import { trackConversion } from '../services/tracker';
import { getAssetUrl } from '../utils/assets';
import { 
  Bot, 
  Layers, 
  MapPin, 
  Quote, 
  Award, 
  ExternalLink, 
  CheckCircle,
  Briefcase,
  Sparkles
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const handleChariowBioClick = () => {
    trackConversion('chariow_product', 'Bio Chariow Ambassadeur Link');
    window.open('https://formation.kevinchrisdigital.com/', '_blank');
  };

  const handleStartupicClick = () => {
    trackConversion('audit_startupic', 'Bio Startupic Consulting Link');
  };

  return (
    <section className="py-20 lg:py-28 bg-[#0d1322] border-b border-slate-800/80 relative" id="a-propos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
            L'alliance de l'expertise technique et de l'entrepreneuriat digital.
          </h2>
        </div>

        {/* Main Content Grid: Image + Bio Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Professional Photo & Badges */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md">
              {/* Decorative gradient border glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 opacity-30 blur-lg" />
              
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl">
                <img
                  src={getAssetUrl('images/kevin_chris_portrait_1790066142907.jpg')}
                  alt="Kevin Chris Atchof - Expert IA et Designer Senior à Douala"
                  className="w-full aspect-[4/4.2] object-cover object-center"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('kevin_ai_portrait.jpg')) {
                      target.src = getAssetUrl('img/kevin_ai_portrait.jpg');
                    }
                  }}
                />
                
                {/* Overlay Badge at Bottom of photo */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/90 to-transparent p-5 pt-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white">Kevin Chris Atchof</h3>
                      <p className="text-xs text-emerald-400 font-medium flex items-center gap-1.5 mt-0.5">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>Douala, Cameroun</span>
                      </p>
                    </div>
                    <span className="px-2.5 py-1 text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-lg">
                      Ambassadeur Chariow
                    </span>
                  </div>
                </div>
              </div>

              {/* Float Card 1: Startupic Consulting */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-slate-900/95 border border-slate-700/90 rounded-xl p-3.5 shadow-xl backdrop-blur-md max-w-[240px]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">Cabinet Partenaire</div>
                    <div className="text-xs font-bold text-white">Startupic Consulting</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fiche d'identité condensée */}
            <div className="w-full max-w-md mt-10 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 space-y-2">
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400 font-medium">Nom de marque :</span>
                <span className="font-bold text-white">Kevin Chris Digital</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400 font-medium">Rôle en entreprise :</span>
                <span className="font-semibold text-emerald-400">Designer Senior & Consultant UI/UX</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400 font-medium">Slogan :</span>
                <span className="font-medium text-slate-200 text-right">L'IA & le digital au service de l'Afrique</span>
              </div>
            </div>
          </div>

          {/* Right: Detailed Story & Dual Profile */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Introductory Statement */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Je m'appelle <strong className="text-white font-bold">Kevin Chris Atchof</strong>. Derrière <span className="text-emerald-400 font-semibold">Kevin Chris Digital</span>, il y a une mission simple : <span className="text-slate-100">briser les barrières technologiques et financières</span> pour permettre à la jeunesse africaine de s'imposer sur le marché mondial du web.
            </p>

            {/* Dual Profile Section */}
            <div className="space-y-4 pt-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                Mon double profil, votre garantie de résultats :
              </h4>

              {/* Profile Card 1: Infopreneur & Expert IA */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-1">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h5 className="text-base font-bold text-white">L'Infopreneur & Expert IA</h5>
                      <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-500/15 text-emerald-400 rounded-md">
                        Best-Seller
                      </span>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Coauteur du best-seller <em className="text-emerald-300 not-italic font-semibold">Monétisation de l'IA : Guide Pratique (Afrique)</em>, j'aide des milliers de freelances, d'étudiants et de particuliers à transformer de simples outils (comme ChatGPT, Claude ou Gemini) en véritables machines à générer des revenus. J'ai prouvé l'efficacité de mes méthodes en multipliant mon propre chiffre d'affaires par 4 grâce à l'automatisation des tunnels de vente en Afrique.
                    </p>
                  </div>
                </div>
              </div>

              {/* Profile Card 2: Designer Senior & Consultant */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-1">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h5 className="text-base font-bold text-white">Le Designer Senior & Consultant</h5>
                      <span className="px-2 py-0.5 text-[10px] font-bold bg-cyan-500/15 text-cyan-400 rounded-md">
                        Corporate
                      </span>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Basé à Douala et collaborant activement avec le cabinet <strong className="text-cyan-300 font-semibold">Startupic Consulting</strong>, je conçois des interfaces (UI/UX) et des identités de marque percutantes pour des entreprises en pleine croissance. Mon savoir-faire technique est ma signature.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Powerful Philosophy Quote */}
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-emerald-950/20 border-l-4 border-l-emerald-400 border border-slate-800 my-6 shadow-xl">
              <Quote className="w-8 h-8 text-emerald-400/40 absolute top-4 right-4" />
              <p className="text-base sm:text-lg text-slate-100 italic leading-relaxed">
                « Je ne vous vends pas des théories occidentales inapplicables. Je vous transmets des plans d'action testés sur le terrain africain, adaptés à nos connexions, nos smartphones et nos réalités économiques. »
              </p>
              <div className="mt-3 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                — Kevin Chris Atchof
              </div>
            </div>

            {/* Quick Action links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={handleChariowBioClick}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/30 transition-colors"
              >
                <span>Voir mes formations sur Chariow</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
              
              <a
                href="#solutions-entreprises"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <span>Découvrir mes réalisations UI/UX</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
