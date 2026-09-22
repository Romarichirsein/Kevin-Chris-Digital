import React from 'react';
import { motion } from 'motion/react';
import { Currency, Language, PageId } from '../types';
import { translations } from '../i18n/translations';
import { trackConversion } from '../services/tracker';
import { FEATURED_PRODUCT } from '../data/products';
import { Testimonials } from '../components/Testimonials';
import { FAQSection } from '../components/FaqSection';
import { getWhatsAppLink } from '../data/contact';
import { 
  Sparkles, 
  Palette, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  BookOpen, 
  Users, 
  Smartphone, 
  User, 
  Briefcase, 
  Calendar, 
  Rocket,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  language: Language;
  currency: Currency;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, language, currency }) => {
  const t = translations[language];

  const handleGuideClick = () => {
    trackConversion('chariow_guide_ia', 'Home CTA -> Guide IA Page');
    onNavigate('guide-ia');
  };

  const handlePortfolioClick = () => {
    trackConversion('behance_portfolio', 'Home CTA -> Portfolio Page');
    onNavigate('solutions-entreprises');
  };

  const handleWhatsAppFaq = () => {
    const msg = language === 'fr'
      ? "Bonjour Kevin Chris, j'ai parcouru la FAQ de kevinchrisdigital.com et je souhaiterais vous poser une question sur la monétisation."
      : "Hello Kevin Chris, I checked the FAQ on kevinchrisdigital.com and would like to ask a specific question regarding monetization.";
    window.open(getWhatsAppLink(msg), '_blank');
  };

  // Standard Stagger Container & Child Entrance Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  };

  const itemFadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="space-y-16 lg:space-y-24 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION WITH BLUE LIGHT AURA, REAL KEVIN CHRIS PORTRAIT & PERIMETER BEAM */}
      <section className="relative pt-8 pb-12 lg:pt-16 lg:pb-16 border-b border-slate-200 dark:border-slate-800/80">
        
        {/* Soft Blue Atmospheric Backdrop Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-blue-600/15 via-sky-500/10 to-indigo-600/10 blur-[130px] pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14"
          >
            {/* Left Content Column */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">

              {/* Main H1 - Executive Blue */}
              <motion.h1 
                variants={itemFadeInUp}
                className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] font-['Outfit',sans-serif]"
              >
                {t.hero.titleStart}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 dark:from-blue-400 dark:via-sky-300 dark:to-indigo-400">
                  {t.hero.titleHighlight}
                </span>
                {t.hero.titleEnd}
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                variants={itemFadeInUp}
                className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-normal"
              >
                {t.hero.subtitle}
              </motion.p>

              {/* Action CTAs */}
              <motion.div 
                variants={itemFadeInUp}
                className="flex flex-col sm:flex-row items-center lg:items-start gap-4 pt-2"
              >
                <button
                  type="button"
                  id="home-primary-cta-guide"
                  onClick={handleGuideClick}
                  className="cta-pulse-glow w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-2xl shadow-lg shadow-blue-600/30 hover-glow-blue transition-all flex items-center justify-center gap-2.5 active:scale-95 group"
                >
                  <Sparkles className="w-4 h-4 fill-current group-hover:rotate-12 transition-transform" />
                  <span>{t.hero.primaryCta} 🚀</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  type="button"
                  id="home-secondary-cta-portfolio"
                  onClick={handlePortfolioClick}
                  className="w-full sm:w-auto px-7 py-4 text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 rounded-2xl transition-all flex items-center justify-center gap-2.5 hover-glow-blue"
                >
                  <Palette className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>{t.hero.secondaryCta} 🎨</span>
                </button>
              </motion.div>
            </div>

            {/* Right Visual Column: High-End Portrait Card with Blue Glow */}
            <motion.div variants={itemFadeInUp} className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-blue-600 via-sky-400 to-indigo-600 opacity-60 blur-xl"></div>
                <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-blue-500/40 shadow-2xl hover-blue-halo transition-all group">
                  <img 
                    src="/img/kevin_ai_hologram.avif" 
                    alt="Kevin Chris - Formateur Digital & IA"
                    className="w-full h-[410px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-85"></div>
                  
                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/80 dark:border-blue-500/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-extrabold text-sm text-slate-900 dark:text-white font-['Outfit',sans-serif]">
                          Kevin Chris Atchof
                        </h3>
                        <p className="text-[11px] text-blue-600 dark:text-blue-400 font-semibold">
                          Méthode FaceHOOK & Monétisation IA
                        </p>
                      </div>
                      <span className="px-2.5 py-1 rounded-xl text-[10px] font-bold bg-blue-600 text-white uppercase tracking-wider">
                        Officiel
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* REVOLVING BLUE BEAM AROUND THE TRUST METRICS CONTAINER */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="blue-perimeter-beam shadow-xl shadow-blue-950/20"
          >
            <div className="blue-perimeter-inner bg-white dark:bg-slate-900/90 p-5 sm:p-7 backdrop-blur-md">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 hover-glow-blue">
                  <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Expérience</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-['Outfit',sans-serif]">
                    {t.hero.stat1Number}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {t.hero.stat1Label}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 hover-glow-blue">
                  <div className="flex items-center gap-1.5 text-sky-600 dark:text-sky-400 text-xs font-semibold mb-1">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Programme</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-['Outfit',sans-serif]">
                    {t.hero.stat2Number}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {t.hero.stat2Label}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 hover-glow-blue">
                  <div className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 text-xs font-semibold mb-1">
                    <Users className="w-3.5 h-3.5" />
                    <span>Audience</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-['Outfit',sans-serif]">
                    {t.hero.stat3Number}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {t.hero.stat3Label}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 hover-glow-blue">
                  <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-1">
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Mobile Money</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-['Outfit',sans-serif]">
                    {t.hero.stat4Number}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {t.hero.stat4Label}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center gap-2 text-xs text-slate-600 dark:text-slate-400 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>{t.hero.guarantee}</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. FEATURED BEST-SELLER SHOWCASE WITH STAGGERED FADE-IN-UP */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemFadeInUp} className="blue-perimeter-beam shadow-2xl shadow-blue-950/30 hover-blue-halo transition-all">
          <div className="blue-perimeter-inner bg-white dark:bg-slate-900 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 sm:p-12 items-center">
              
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border border-blue-500/30 hover-glow-blue transition-transform group">
                  <img 
                    src="/images/book_cover_preview.png" 
                    alt="Visibilité & Monétisation - Kevin Chris Atchof"
                    className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-[10px] tracking-wider uppercase px-3 py-1 rounded-full shadow-lg">
                    {t.homePreviews.guideBadge}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-['Outfit',sans-serif]">
                    {t.homePreviews.guideTitle}
                  </h2>
                  <p className="text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400 mt-1">
                    {t.homePreviews.guideSubtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Le manuel pas-à-pas pour transformer votre audience Facebook en revenus récurrents. Apprenez à concevoir des hooks captivants, sécuriser votre page contre les restrictions et encaisser directement par Mobile Money.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span>Algorithme & Signaux de rétention</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span>Déblocage pays non éligibles</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span>Scripts & Prompts IA réutilisables</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span>Encaissement Orange / MTN / Wave</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                  <button
                    type="button"
                    onClick={handleGuideClick}
                    className="cta-pulse-glow w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 shadow-md shadow-blue-600/30 flex items-center justify-center gap-2 transition-all active:scale-98"
                  >
                    <span>{t.homePreviews.guideAction}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={FEATURED_PRODUCT.chariowUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-xs text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 hover:border-blue-400 flex items-center justify-center gap-2 transition-all hover-glow-blue"
                  >
                    <span>Commander directement sur Chariow</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* 3. INTERACTIVE FAQ ACCORDION DIRECTLY UNDER PRODUCTS (USER EXPLICIT PLACEMENT) */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.div variants={itemFadeInUp}>
          <FAQSection onAskWhatsApp={handleWhatsAppFaq} />
        </motion.div>
      </motion.div>

      {/* 4. LES 3 PILIERS FACEHOOK & OPEN-SPACE TEAM PHOTO */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemFadeInUp} className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-['Outfit',sans-serif]">
            {t.homePreviews.methodSectionTitle}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {t.homePreviews.methodSectionSub}
          </p>
        </motion.div>

        {/* The 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1 */}
          <motion.div variants={itemFadeInUp} className="p-7 rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-blue-500/60 shadow-sm hover-blue-halo group transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/60 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Algorithme & Hook dès les premières secondes
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Comprendre les signaux précoces (durée de visionnage, engagement, rétention). Créer des accroches percutantes sur smartphone pour maximiser la diffusion organique.
            </p>
          </motion.div>

          {/* Card 2 - Center Card with Blue Halo */}
          <motion.div variants={itemFadeInUp} className="relative p-7 rounded-3xl bg-gradient-to-b from-blue-50/50 via-white to-white dark:from-blue-950/40 dark:via-slate-900/90 dark:to-slate-900/90 border border-blue-400/50 dark:border-blue-500/50 shadow-md blue-halo hover-blue-halo group transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md shadow-blue-500/30">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              L'IA comme accélérateur de productivité
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Multipliez par 5 votre production avec ChatGPT, Midjourney, Runway, HeyGen et Gamma tout en préservant votre personnalité, votre voix et votre authenticité.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={itemFadeInUp} className="p-7 rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-blue-500/60 shadow-sm hover-blue-halo group transition-all">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/60 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Protection de page & Diversification
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Sécurisez vos droits administratifs, évitez les blocages et monétisez via vos propres infoproduits, formations et tunnels WhatsApp sans dépendre uniquement de Meta.
            </p>
          </motion.div>
        </div>

        {/* Real Team Open Space Banner from img folder */}
        <motion.div variants={itemFadeInUp} className="relative rounded-3xl overflow-hidden border border-blue-500/30 shadow-2xl hover-blue-halo group">
          <div className="h-64 sm:h-80 relative overflow-hidden">
            <img 
              src="/img/office_facehook.jpg" 
              alt="Équipe FaceHOOK - Soyez vues pour vivre"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-blue-600 text-white uppercase tracking-wider">
                L'Équipe FaceHOOK
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-white font-['Outfit',sans-serif] mt-1.5">
                « Soyez vues pour vivre »
              </h4>
              <p className="text-xs text-slate-300 max-w-xl mt-1">
                Une équipe dédiée à la stratégie de contenu, à l'analyse algorithmique et au déploiement de tunnels rentables pour créateurs et marques.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('solutions-entreprises')}
              className="px-5 py-2.5 rounded-xl bg-white/95 hover:bg-white text-slate-900 font-bold text-xs flex items-center gap-1.5 shrink-0 transition-transform active:scale-95 shadow-md"
            >
              <span>Découvrir nos solutions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>

      </motion.section>

      {/* 5. TÉMOIGNAGES AVEC CARROUSEL DYNAMIQUE, FRAMER MOTION & HALO LUMINEUX */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.div variants={itemFadeInUp}>
          <Testimonials onExploreCourses={handleGuideClick} />
        </motion.div>
      </motion.div>

      {/* 6. MULTI-PAGE PORTAL DIRECTORY WITH REAL PHOTOS & STAGGER */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="border-t border-slate-200 dark:border-slate-800 pt-12">
          <motion.div variants={itemFadeInUp} className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Explorer l'écosystème
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-['Outfit',sans-serif] mt-1">
                Accédez directement aux sections du site
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1: Guide IA & Boutique */}
            <motion.div variants={itemFadeInUp} className="p-7 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-blue-500/80 shadow-sm hover-blue-halo transition-all group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-bold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800/60 rounded-xl">
                    {t.homePreviews.guideBadge}
                  </span>
                  <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {t.homePreviews.guideTitle}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-3">
                  {t.homePreviews.guideSubtitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Accédez au catalogue officiel des formations Chariow (Ebook Visibilité & Monétisation, Masterclass FaceHOOK, Capcut Mobile, Packs).
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => onNavigate('guide-ia')}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 transition-all active:scale-98"
                >
                  <span>{t.homePreviews.guideAction}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>

            {/* Card 2: À Propos */}
            <motion.div variants={itemFadeInUp} className="p-7 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-blue-500/80 shadow-sm hover-blue-halo transition-all group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl">
                    Qui est Kevin Chris ?
                  </span>
                  <User className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {t.homePreviews.aboutTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-3">
                  {t.homePreviews.aboutSnippet}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => onNavigate('a-propos')}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 hover:border-blue-400 flex items-center justify-center gap-2 transition-all active:scale-98"
                >
                  <span>{t.homePreviews.aboutAction}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>

            {/* Card 3: Solutions Entreprises */}
            <motion.div variants={itemFadeInUp} className="p-7 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-blue-500/80 shadow-sm hover-blue-halo transition-all group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-bold bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-400 rounded-xl border border-blue-200 dark:border-blue-900/60">
                    Startupic Consulting
                  </span>
                  <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {t.homePreviews.corporateTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-3">
                  {t.homePreviews.corporateSnippet}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => onNavigate('solutions-entreprises')}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 hover:border-blue-400 flex items-center justify-center gap-2 transition-all active:scale-98"
                >
                  <span>{t.homePreviews.corporateAction}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>

            {/* Card 4: Coaching & Calendrier */}
            <motion.div variants={itemFadeInUp} className="p-7 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-blue-500/80 shadow-sm hover-blue-halo transition-all group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-bold bg-sky-50 dark:bg-sky-950/40 text-sky-800 dark:text-sky-400 rounded-xl border border-sky-200 dark:border-sky-900/60">
                    Mentorat Direct
                  </span>
                  <Calendar className="w-5 h-5 text-sky-600 dark:text-sky-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {t.homePreviews.coachingTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-3">
                  {t.homePreviews.coachingSnippet}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => onNavigate('coaching')}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 hover:border-sky-400 flex items-center justify-center gap-2 transition-all active:scale-98"
                >
                  <span>{t.homePreviews.coachingAction}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>

    </div>
  );
};
