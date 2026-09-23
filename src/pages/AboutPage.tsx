import React from 'react';
import { motion } from 'motion/react';
import { Language, PageId } from '../types';
import { translations } from '../i18n/translations';
import { OFFICIAL_CONTACT, getWhatsAppLink } from '../data/contact';
import { getAssetUrl } from '../utils/assets';
import { 
  User, 
  Sparkles, 
  Palette, 
  MapPin, 
  Building2, 
  CheckCircle2, 
  ArrowRight,
  BookOpen,
  Briefcase,
  Phone,
  ExternalLink,
  Mic,
  Camera
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  language: Language;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, language }) => {
  const t = translations[language];

  // Staggered motion container and item variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemFadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16">
      
      {/* Header with blue badge & stagger entrance */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl"
      >
        <motion.h1 variants={itemFadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-['Outfit',sans-serif]">
          {t.about.pageTitle}
        </motion.h1>
        <motion.p variants={itemFadeInUp} className="mt-2 text-base sm:text-lg text-blue-600 dark:text-blue-400 font-medium">
          {t.about.pageSub}
        </motion.p>
      </motion.div>

      {/* Main Narrative & Portrait with Revolving Light Frame */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
      >
        
        {/* Photo Portrait & Profile Card */}
        <motion.div variants={itemFadeInUp} className="lg:col-span-5 space-y-6">
          <div className="blue-perimeter-beam shadow-2xl shadow-blue-950/30 hover-blue-halo transition-all">
            <div className="blue-perimeter-inner bg-white dark:bg-slate-900 overflow-hidden">
              <div className="relative group">
                <img 
                  src={getAssetUrl('img/kevin_executive_portrait.jpg')} 
                  alt="Kevin Chris Atchof - Formateur Digital & Fondateur FaceHOOK"
                  className="w-full h-[400px] object-cover object-top group-hover:scale-103 transition-transform duration-500"
                  loading="eager"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('kevin_ai_portrait')) {
                      target.src = getAssetUrl('img/kevin_ai_portrait.jpg');
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-xs font-semibold text-blue-300">Profil Officiel</span>
                  <p className="text-base font-bold">{OFFICIAL_CONTACT.name}</p>
                </div>
              </div>

              <div className="p-6 space-y-5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white font-['Outfit',sans-serif]">
                      {OFFICIAL_CONTACT.name}
                    </h3>
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold mt-0.5">
                      Formateur Digital & Consultant Stratégique
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800 text-xs font-bold">
                      {OFFICIAL_CONTACT.followersCount} Followers
                    </span>
                    <div className="text-[10px] text-slate-400 mt-1">
                      {OFFICIAL_CONTACT.socialAudienceFull}
                    </div>
                  </div>
                </div>

                {/* Verified Expertise Tags */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
                  {OFFICIAL_CONTACT.roles.map((role, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                      <span>{role}</span>
                    </div>
                  ))}
                </div>

                {/* Direct Quick Contact Info (Removed awkward email etiquette badge) */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-3 text-xs text-slate-600 dark:text-slate-300">
                  <a 
                    href={getWhatsAppLink("Bonjour Kevin Chris, je vous écris depuis votre profil sur kevinchrisdigital.com.")}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-800/60"
                  >
                    <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span className="font-mono text-[11px] font-bold">WhatsApp Direct : {OFFICIAL_CONTACT.phone}</span>
                  </a>

                  <div className="flex items-center gap-2.5 px-2">
                    <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span>{t.about.identityHQ}</span>
                  </div>
                  <div className="flex items-center gap-2.5 px-2">
                    <Building2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
                    <span>{t.about.identityAffiliation}</span>
                  </div>
                </div>

                {/* Coaching Callout in Card */}
                <div className="pt-2">
                  <a
                    href={OFFICIAL_CONTACT.coachingExternalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 transition-all hover-glow-blue"
                  >
                    <span>Masterclass FaceHOOK : Contenu & Monétisation</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>
          </div>
        </motion.div>

        {/* Narrative & Dual Profile in Blue Executive Styling */}
        <motion.div variants={itemFadeInUp} className="lg:col-span-7 space-y-8">
          
          {/* Bio Intro */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
            <p className="text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed font-normal">
              {t.about.bioIntro}
            </p>
          </div>

          {/* Dual Profile Cards with Hover Lift */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {t.about.dualHeader}
            </h3>

            {/* Profile 1 */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-blue-500/60 shadow-sm hover-blue-halo transition-all group">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {t.about.profile1Title}
                  </h4>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                  {t.about.profile1Badge}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {t.about.profile1Text}
              </p>
            </div>

            {/* Profile 2 */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-blue-500/60 shadow-sm hover-blue-halo transition-all group">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-800 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                    <Palette className="w-5 h-5" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {t.about.profile2Title}
                  </h4>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-400 border border-sky-200 dark:border-sky-800">
                  {t.about.profile2Badge}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {t.about.profile2Text}
              </p>
            </div>
          </div>

          {/* Signature Quote with Blue Accent */}
          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border-l-4 border-blue-600 dark:border-blue-400 text-slate-800 dark:text-slate-200 italic text-sm sm:text-base leading-relaxed border border-slate-200 dark:border-slate-800 shadow-sm">
            {t.about.quote}
          </div>

          {/* Page Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              type="button"
              onClick={() => onNavigate('guide-ia')}
              className="cta-pulse-glow px-7 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 hover-glow-blue transition-all active:scale-98"
            >
              <BookOpen className="w-4 h-4" />
              <span>{t.about.ctaCourses}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('solutions-entreprises')}
              className="px-7 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 hover:border-blue-400 flex items-center justify-center gap-2 transition-all hover-glow-blue active:scale-98"
            >
              <Briefcase className="w-4 h-4" />
              <span>{t.about.ctaPortfolio}</span>
            </button>
          </div>

        </motion.div>

      </motion.div>

      {/* Media & Key Moments Gallery with Photos from img folder */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="pt-8 border-t border-slate-200 dark:border-slate-800"
      >
        <motion.div variants={itemFadeInUp} className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Terrain, Médias & Créativité
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-['Outfit',sans-serif] mt-1">
            Kevin Chris en Action
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
            Interviews radio, interventions médias, sessions créatives et accompagnements d'entreprises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Photo 1: Radio Studio */}
          <motion.div variants={itemFadeInUp} className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover-blue-halo group shadow-xl">
            <div className="h-72 overflow-hidden">
              <img 
                src={getAssetUrl('img/kevin_radio_studio.jpg')} 
                alt="Kevin Chris en studio radio et interview média"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('kevin_executive_portrait')) {
                    target.src = getAssetUrl('img/kevin_executive_portrait.jpg');
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
            </div>
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-blue-600/90 text-white text-[10px] font-bold uppercase tracking-wider mb-2">
                <Mic className="w-3.5 h-3.5" />
                <span>Interventions Médias & Podcast</span>
              </div>
              <h3 className="font-bold text-base sm:text-lg text-white">
                Partage d'expertise & Décryptage Digital
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Invité régulier sur les ondes et plateaux pour analyser l'impact de l'IA et de la monétisation pour les jeunes Africains.
              </p>
            </div>
          </motion.div>

          {/* Photo 2: Creative Mural */}
          <motion.div variants={itemFadeInUp} className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover-blue-halo group shadow-xl">
            <div className="h-72 overflow-hidden">
              <img 
                src={getAssetUrl('img/kevin_creative_mural.jpg')} 
                alt="Kevin Chris créativité et branding digital"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('kevin_executive_portrait')) {
                    target.src = getAssetUrl('img/kevin_executive_portrait.jpg');
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
            </div>
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-sky-600/90 text-white text-[10px] font-bold uppercase tracking-wider mb-2">
                <Camera className="w-3.5 h-3.5" />
                <span>Création & Identité Visuelle</span>
              </div>
              <h3 className="font-bold text-base sm:text-lg text-white">
                Design Visuel & Direction Artistique
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                6 ans d'expérience au croisement du design d'interface, de l'identité de marque et des stratégies de contenu virales.
              </p>
            </div>
          </motion.div>

        </div>
      </motion.section>

    </div>
  );
};
