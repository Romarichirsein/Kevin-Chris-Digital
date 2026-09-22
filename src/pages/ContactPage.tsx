import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { trackConversion } from '../services/tracker';
import { OFFICIAL_CONTACT, getWhatsAppLink } from '../data/contact';
import { 
  FacebookIcon, 
  TikTokIcon, 
  InstagramIcon, 
  LinkedInIcon, 
  WhatsAppIcon,
  YouTubeIcon,
  BehanceIcon
} from '../components/SocialIcons';
import { 
  PhoneCall, 
  ExternalLink, 
  Building2, 
  Mail, 
  Copy, 
  Check, 
  CheckCircle2,
  GraduationCap
} from 'lucide-react';

interface ContactPageProps {
  language: Language;
  onOpenAudit: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ language, onOpenAudit }) => {
  const t = translations[language];
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleWhatsApp = () => {
    trackConversion('whatsapp_direct', 'Contact Page Main WhatsApp Button');
    const msg = language === 'fr'
      ? "Bonjour Kevin Chris, je vous contacte depuis la page Contact de kevinchrisdigital.com au sujet d'une formation ou d'un projet."
      : "Hello Kevin Chris, I am reaching out from the Contact page of kevinchrisdigital.com regarding courses or a project.";
    window.open(getWhatsAppLink(msg), '_blank');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(OFFICIAL_CONTACT.emailPubCollab);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSocial = (name: string, url: string) => {
    trackConversion('whatsapp_direct', `Contact Page Social - ${name}`);
    window.open(url, '_blank');
  };

  const channels = [
    {
      name: 'WhatsApp Direct',
      handle: `${OFFICIAL_CONTACT.phone} • Ligne directe`,
      desc: t.contact.directWhatsAppDesc,
      icon: WhatsAppIcon,
      iconColor: 'bg-[#25D366]/10 text-[#25D366]',
      action: handleWhatsApp,
      btnText: t.contact.openWhatsAppBtn,
      highlight: true,
    },
    {
      name: 'Pub & Collaboration',
      handle: OFFICIAL_CONTACT.emailPubCollab,
      desc: t.contact.emailPubCollabDesc,
      icon: Mail,
      iconColor: 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400',
      action: () => {
        window.location.href = `mailto:${OFFICIAL_CONTACT.emailPubCollab}?subject=Proposition%20Partenariat%20/%20Pub`;
      },
      btnText: 'Envoyer un e-mail',
    },
    {
      name: 'Masterclass FaceHOOK',
      handle: 'facehook.net/coaching/',
      desc: 'Création de contenu, hook viral et monétisation Facebook de zéro aux premiers retraits.',
      icon: GraduationCap,
      iconColor: 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400',
      action: () => window.open(OFFICIAL_CONTACT.coachingExternalUrl, '_blank'),
      btnText: 'Accéder à FaceHOOK',
    },
    {
      name: 'Plateforme Formations',
      handle: 'formation.kevinchrisdigital.com',
      desc: 'L\'ensemble de nos cours et ebooks pour transformer votre temps en cash.',
      icon: GraduationCap,
      iconColor: 'bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400',
      action: () => window.open(OFFICIAL_CONTACT.platformFormationUrl, '_blank'),
      btnText: 'Voir la plateforme',
    },
    {
      name: 'Facebook Officiel',
      handle: `${OFFICIAL_CONTACT.name} • 492 K followers`,
      desc: t.contact.fbDesc,
      icon: FacebookIcon,
      iconColor: 'bg-[#1877F2]/10 text-[#1877F2]',
      action: () => handleSocial('Facebook', 'https://www.facebook.com/kevinchristatchof/'),
      btnText: 'Rejoindre sur Facebook',
    },
    {
      name: 'TikTok Officiel',
      handle: `${OFFICIAL_CONTACT.name} • @kevinchrisatchof01`,
      desc: t.contact.tkDesc,
      icon: TikTokIcon,
      iconColor: 'bg-slate-900 dark:bg-white text-white dark:text-slate-900',
      action: () => handleSocial('TikTok', 'https://www.tiktok.com/@kevinchrisatchof01'),
      btnText: 'Suivre sur TikTok',
    },
    {
      name: 'Instagram Officiel',
      handle: '@kevinchris_atchof',
      desc: t.contact.igDesc,
      icon: InstagramIcon,
      iconColor: 'bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white',
      action: () => handleSocial('Instagram', 'https://www.instagram.com/kevinchris_atchof/'),
      btnText: 'Voir sur Instagram',
    },
    {
      name: 'LinkedIn Professionnel',
      handle: 'Kevin Chris Atchof',
      desc: t.contact.lnDesc,
      icon: LinkedInIcon,
      iconColor: 'bg-[#0A66C2]/10 text-[#0A66C2]',
      action: () => handleSocial('LinkedIn', 'https://www.linkedin.com/'),
      btnText: 'Connecter sur LinkedIn',
    },
    {
      name: 'YouTube Masterclass',
      handle: 'Kevin Chris Digital',
      desc: 'Tutoriels approfondis, analyses d\'algorithmes et études de cas vidéo.',
      icon: YouTubeIcon,
      iconColor: 'bg-[#FF0000]/10 text-[#FF0000]',
      action: () => handleSocial('YouTube', 'https://www.youtube.com/'),
      btnText: 'Regarder sur YouTube',
    },
    {
      name: 'Behance Portfolio Design',
      handle: 'Startupic / Kevin Chris',
      desc: 'Études de cas UI/UX, identités graphiques et prototypage mobile sur Behance.',
      icon: BehanceIcon,
      iconColor: 'bg-[#1769FF]/10 text-[#1769FF]',
      action: () => handleSocial('Behance', 'https://www.behance.net/'),
      btnText: 'Explorer le portfolio',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16">
      
      {/* Page Header with Stagger Entrance */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl"
      >
        <motion.div variants={itemFadeInUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-3 border border-blue-200 dark:border-blue-900/60 shadow-sm">
          <PhoneCall className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          <span>Canaux Officiels & Contact Direct</span>
        </motion.div>
        <motion.h1 variants={itemFadeInUp} className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-['Outfit',sans-serif]">
          {t.contact.pageTitle}
        </motion.h1>
        <motion.p variants={itemFadeInUp} className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          {t.contact.pageSub}
        </motion.p>
      </motion.div>

      {/* Official Identity & Direct Banner with Real Photo & Perimeter Beam */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="blue-perimeter-beam shadow-2xl shadow-blue-950/40 hover-blue-halo transition-all"
      >
        <motion.div variants={itemFadeInUp} className="blue-perimeter-inner bg-white dark:bg-slate-900 p-8 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 text-xs font-bold border border-blue-200 dark:border-blue-800">
                  {OFFICIAL_CONTACT.experienceYears}
                </span>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  {OFFICIAL_CONTACT.socialAudienceFull}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-['Outfit',sans-serif]">
                {OFFICIAL_CONTACT.name}
              </h2>

              <p className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-semibold">
                « {OFFICIAL_CONTACT.motto} »
              </p>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                {OFFICIAL_CONTACT.experienceDesc}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/80 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700">
                  <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span className="font-mono text-xs">{OFFICIAL_CONTACT.emailPubCollab}</span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1 text-slate-400 hover:text-blue-600 transition-colors"
                    title="Copier l'adresse"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-blue-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/80 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700">
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span className="font-mono font-bold text-xs">{OFFICIAL_CONTACT.phone}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="cta-pulse-glow px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2.5 transition-all hover-glow-blue active:scale-98"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current text-white" />
                  <span>{t.contact.openWhatsAppBtn}</span>
                </button>

                <button
                  type="button"
                  onClick={onOpenAudit}
                  className="px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-2 transition-all hover-glow-blue"
                >
                  <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Demander un audit entreprise</span>
                </button>
              </div>
            </div>

            {/* Right Photo Column: Real Kevin Chris Photo in FaceHOOK t-shirt */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-xs rounded-3xl overflow-hidden shadow-2xl border border-blue-500/30 group hover-blue-halo">
                <img 
                  src="/img/kevin_facehook_tshirt.jpg" 
                  alt="Kevin Chris Atchof en t-shirt FaceHOOK"
                  className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-600 text-white uppercase tracking-wider">
                    Ligne Directe
                  </span>
                  <p className="text-xs font-bold mt-1">Disponible sur WhatsApp & Collaborations</p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </motion.div>

      {/* Directory of Channels Grid with Stagger & Hover Halo */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="space-y-6"
      >
        <motion.div variants={itemFadeInUp}>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-['Outfit',sans-serif]">
            {t.contact.channelsTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Sélectionnez votre canal de communication préféré pour échanger avec Kevin Chris et son équipe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {channels.map((chan, idx: number) => {
            const Icon = chan.icon;
            return (
              <motion.div
                key={idx}
                variants={itemFadeInUp}
                className={`p-6 rounded-3xl border transition-all flex flex-col justify-between hover-blue-halo ${
                  chan.highlight
                    ? 'bg-blue-50/50 dark:bg-blue-950/40 border-blue-400 dark:border-blue-600 shadow-md ring-1 ring-blue-500/20'
                    : 'bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 hover:border-blue-400'
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${chan.iconColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-slate-900 dark:text-white font-['Outfit',sans-serif]">
                        {chan.name}
                      </h3>
                      <span className="font-mono text-[11px] text-blue-600 dark:text-blue-400 font-semibold block truncate max-w-[200px]">
                        {chan.handle}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {chan.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={chan.action}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                      chan.highlight
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20'
                        : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 hover:text-blue-600'
                    }`}
                  >
                    <span>{chan.btnText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

    </div>
  );
};
