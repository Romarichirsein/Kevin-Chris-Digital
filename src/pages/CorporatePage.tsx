import React from 'react';
import { motion } from 'motion/react';
import { Language, PortfolioProject } from '../types';
import { PORTFOLIO_PROJECTS } from '../data/portfolio';
import { translations } from '../i18n/translations';
import { trackConversion } from '../services/tracker';
import { getAssetUrl } from '../utils/assets';
import { 
  Briefcase, 
  ExternalLink, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Smartphone, 
  TrendingUp, 
  Component,
  Users,
  Award
} from 'lucide-react';

interface CorporatePageProps {
  language: Language;
  onOpenAudit: () => void;
}

export const CorporatePage: React.FC<CorporatePageProps> = ({ language, onOpenAudit }) => {
  const t = translations[language];

  const handleBehanceClick = (projectTitle?: string) => {
    trackConversion('behance_portfolio', projectTitle ? `Behance - ${projectTitle}` : 'Behance Main Profile Click');
    window.open('https://www.behance.net/', '_blank');
  };

  const services = [
    {
      title: t.corporate.s1Title,
      desc: t.corporate.s1Desc,
      icon: Layers,
    },
    {
      title: t.corporate.s2Title,
      desc: t.corporate.s2Desc,
      icon: Smartphone,
    },
    {
      title: t.corporate.s3Title,
      desc: t.corporate.s3Desc,
      icon: TrendingUp,
    },
    {
      title: t.corporate.s4Title,
      desc: t.corporate.s4Desc,
      icon: Component,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.06,
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16">
      
      {/* Header & Hero with Stagger Entrance */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl"
      >
        <motion.h1 variants={itemFadeInUp} className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-['Outfit',sans-serif]">
          {t.corporate.pageSub}
        </motion.h1>
        <motion.p variants={itemFadeInUp} className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          {t.corporate.intro}
        </motion.p>

        {/* Primary Action Buttons */}
        <motion.div variants={itemFadeInUp} className="flex flex-col sm:flex-row gap-3.5 pt-6">
          <button
            type="button"
            id="corporate-audit-btn"
            onClick={onOpenAudit}
            className="cta-pulse-glow px-7 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 hover-glow-blue transition-all active:scale-98"
          >
            <Building2 className="w-4 h-4" />
            <span>{t.corporate.auditBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            id="corporate-behance-btn"
            onClick={() => handleBehanceClick()}
            className="px-7 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-2 hover-glow-blue transition-all"
          >
            <span>{t.corporate.behanceBtn}</span>
            <ExternalLink className="w-4 h-4 text-blue-500" />
          </button>
        </motion.div>
      </motion.div>

      {/* Real FaceHOOK Open Space & Team Showcase */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.div variants={itemFadeInUp} className="relative rounded-3xl overflow-hidden border border-blue-500/30 shadow-2xl hover-blue-halo group">
          <div className="h-80 sm:h-96 relative overflow-hidden">
            <img 
              src={getAssetUrl('img/office_facehook.jpg')} 
              alt="Espace de travail et équipe FaceHOOK"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
              loading="eager"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('kevin_ai_portrait.jpg')) {
                  target.src = getAssetUrl('img/kevin_ai_portrait.jpg');
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4 text-white">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-blue-600 text-white uppercase tracking-wider">
                  Cabinet FaceHOOK & Startupic Consulting
                </span>
                <span className="text-xs text-blue-300 font-semibold flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" />
                  <span>Équipe terrain dédiée</span>
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit',sans-serif]">
                « Soyez vues pour vivre » — Ingénierie de Contenu & IA
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1 leading-relaxed">
                Notre pôle d'experts accompagne les marques, institutions et PME dans la création de contenus haute rétention, l'automatisation des tunnels et l'audit de visibilité.
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenAudit}
              className="px-6 py-3 rounded-xl bg-white hover:bg-blue-50 text-slate-900 font-bold text-xs flex items-center gap-2 shrink-0 transition-transform active:scale-95 shadow-lg"
            >
              <span>Demander un audit entreprise</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Startupic Consulting Partnership Banner WITH REVOLVING BLUE BEAM */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.div variants={itemFadeInUp} className="blue-perimeter-beam shadow-xl shadow-blue-950/20">
          <div className="blue-perimeter-inner bg-slate-900 text-white p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>{t.corporate.cabinetTitle}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit',sans-serif]">
                Un accompagnement d'élite pour les entreprises africaines
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                {t.corporate.cabinetDesc}
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenAudit}
              className="shrink-0 px-6 py-3.5 rounded-xl text-xs font-bold text-slate-900 bg-white hover:bg-blue-50 hover:text-blue-600 shadow-md transition-all hover-glow-blue active:scale-98"
            >
              Demander une étude de projet
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Core Services Grid with Stagger */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="space-y-6"
      >
        <motion.div variants={itemFadeInUp}>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-['Outfit',sans-serif]">
            {t.corporate.servicesTitle}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i: number) => {
            const Icon = s.icon;
            return (
              <motion.div 
                key={i}
                variants={itemFadeInUp}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-blue-500/60 shadow-sm hover-blue-halo flex flex-col justify-between transition-all group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/60 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Expertise certifiée</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Featured Projects Showcase with Hover Effects */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="space-y-6"
      >
        <motion.div variants={itemFadeInUp} className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-['Outfit',sans-serif]">
              {t.corporate.projectsTitle}
            </h2>
          </div>
          <button
            type="button"
            onClick={() => handleBehanceClick()}
            className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            <span>Voir tout sur Behance</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_PROJECTS.map((proj: PortfolioProject) => (
            <motion.div 
              key={proj.id}
              variants={itemFadeInUp}
              className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/60 overflow-hidden shadow-sm hover-blue-halo transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img 
                    src={getAssetUrl(proj.image)} 
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('uiux_startupic_showcase.jpg')) {
                        target.src = getAssetUrl('images/uiux_startupic_showcase.jpg');
                      }
                    }}
                  />
                  <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-sm text-white text-[10px] font-bold">
                    {proj.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-blue-500 mb-1">
                    {proj.client}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {proj.tags.map((tg: string, idx: number) => (
                      <span key={idx} className="text-[10px] px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium">
                        {tg}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => handleBehanceClick(proj.title)}
                  className="w-full py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>{t.corporate.viewOnBehance}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  );
};
