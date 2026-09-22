import React from 'react';
import { Language, PageId } from '../types';
import { translations } from '../i18n/translations';
import { trackConversion } from '../services/tracker';
import { OFFICIAL_CONTACT, getWhatsAppLink } from '../data/contact';
import { 
  FacebookIcon, 
  TikTokIcon, 
  InstagramIcon, 
  LinkedInIcon, 
  WhatsAppIcon,
  YouTubeIcon
} from './SocialIcons';
import { 
  MessageSquare, 
  ExternalLink, 
  Phone, 
  Mail, 
  BookOpen,
  GraduationCap
} from 'lucide-react';

interface FooterProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  language: Language;
  onOpenTracker: () => void;
  onOpenAudit: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  language,
  onOpenAudit,
}) => {
  const t = translations[language];

  const handleSocialClick = (platform: string, url: string) => {
    trackConversion('whatsapp_direct', `Footer Link - ${platform}`);
    window.open(url, '_blank');
  };

  const handleWhatsAppFooter = () => {
    trackConversion('whatsapp_direct', 'Footer WhatsApp CTA');
    const msg = language === 'fr'
      ? "Bonjour Kevin Chris, je vous contacte depuis le bas de page de kevinchrisdigital.com pour échanger sur la monétisation et vos formations."
      : "Hello Kevin Chris, I am contacting you from the footer of kevinchrisdigital.com to discuss monetization and your courses.";
    window.open(getWhatsAppLink(msg), '_blank');
  };

  return (
    <footer className="bg-slate-50 dark:bg-[#070a12] text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/80 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top closing punchline banner WITH BLUE PERIMETER BEAM */}
        <div className="blue-perimeter-beam shadow-2xl shadow-blue-950/30 mb-16">
          <div className="blue-perimeter-inner bg-white dark:bg-slate-900 p-8 sm:p-12 text-center relative">
            <div className="max-w-2xl mx-auto space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                Kevin Chris Digital
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-['Outfit',sans-serif]">
                « {t.footer.closingPunchline} »
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {t.footer.closingSub}
              </p>
              <div className="pt-3 flex flex-wrap items-center justify-center gap-3.5">
                <button
                  type="button"
                  onClick={handleWhatsAppFooter}
                  className="px-7 py-3.5 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 shadow-md shadow-blue-600/30 hover-glow-blue transition-all flex items-center gap-2 active:scale-98"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current text-white" />
                  <span>Discuter sur WhatsApp</span>
                </button>
                
                <a
                  href={OFFICIAL_CONTACT.platformFormationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-xl font-bold text-xs text-white bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 shadow-md flex items-center gap-2 transition-all hover-glow-blue"
                >
                  <GraduationCap className="w-4 h-4 text-blue-400" />
                  <span>formation.kevinchrisdigital.com</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <button
                  type="button"
                  onClick={onOpenAudit}
                  className="px-6 py-3.5 rounded-xl font-semibold text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-400 transition-all hover-glow-blue"
                >
                  <span>Audit Startupic Consulting 🏢</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation & Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center font-black text-sm shadow-md shadow-blue-600/30">
                KC
              </div>
              <div>
                <span className="font-extrabold text-lg text-slate-900 dark:text-white tracking-tight font-['Outfit',sans-serif] block">
                  Kevin Chris Digital
                </span>
                <span className="text-[11px] text-blue-600 dark:text-blue-400 font-semibold block">
                  {OFFICIAL_CONTACT.experienceYears} en Social Media Management
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              Formateur digital, social media manager et accompagnateur de créateurs, artistes, marques et entreprises. Transformer votre temps en cash grâce à des formations concrètes et adaptées aux réalités locales.
            </p>

            <div className="space-y-2 pt-1 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                <a href={`mailto:${OFFICIAL_CONTACT.emailPubCollab}`} className="hover:text-blue-600 dark:hover:text-blue-400 font-mono text-[11px] transition-colors">
                  Pub & Collab : {OFFICIAL_CONTACT.emailPubCollab}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                <a href={getWhatsAppLink("Bonjour Kevin Chris, je vous écris depuis votre site.")} target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 font-mono text-[11px] transition-colors">
                  WhatsApp : {OFFICIAL_CONTACT.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Formations & Plateformes */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Formations & Offres
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('guide-ia')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left"
                >
                  Ebook Visibilité & Monétisation
                </button>
              </li>
              <li>
                <a
                  href={OFFICIAL_CONTACT.coachingExternalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  <span>Masterclass FaceHOOK</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href={OFFICIAL_CONTACT.platformFormationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  <span>Plateforme de Formation</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('coaching')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left"
                >
                  Diagnostic & FaceHOOK Review
                </button>
              </li>
            </ul>
          </div>

          {/* Pages du site */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('a-propos')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  À Propos (6 ans d'expérience)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('solutions-entreprises')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Solutions Entreprises
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Contact & Canaux
                </button>
              </li>
            </ul>
          </div>

          {/* Communauté & Réseaux Sociaux AVEC VRAIS LOGOS OFFICIELS */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Réseaux Officiels
            </h4>
            <div className="flex flex-col space-y-2 text-xs">
              <button
                type="button"
                onClick={() => handleSocialClick('Facebook', 'https://www.facebook.com/kevinchristatchof/')}
                className="group flex items-center gap-2.5 p-1.5 -ml-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all text-slate-700 dark:text-slate-300"
              >
                <div className="w-6 h-6 rounded-md bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <FacebookIcon className="w-4 h-4 fill-current" />
                </div>
                <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Facebook ({OFFICIAL_CONTACT.socialAudienceFull})
                </span>
                <ExternalLink className="w-3 h-3 text-slate-400 ml-auto" />
              </button>

              <button
                type="button"
                onClick={() => handleSocialClick('TikTok', 'https://www.tiktok.com/@kevinchrisatchof01')}
                className="group flex items-center gap-2.5 p-1.5 -ml-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all text-slate-700 dark:text-slate-300"
              >
                <div className="w-6 h-6 rounded-md bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <TikTokIcon className="w-3.5 h-3.5 fill-current" />
                </div>
                <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  TikTok (+67k abonnés)
                </span>
                <ExternalLink className="w-3 h-3 text-slate-400 ml-auto" />
              </button>

              <button
                type="button"
                onClick={() => handleSocialClick('Instagram', 'https://www.instagram.com/kevinchris_atchof/')}
                className="group flex items-center gap-2.5 p-1.5 -ml-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all text-slate-700 dark:text-slate-300"
              >
                <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <InstagramIcon className="w-3.5 h-3.5 fill-current" />
                </div>
                <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Instagram
                </span>
                <ExternalLink className="w-3 h-3 text-slate-400 ml-auto" />
              </button>

              <button
                type="button"
                onClick={() => handleSocialClick('LinkedIn', 'https://www.linkedin.com/')}
                className="group flex items-center gap-2.5 p-1.5 -ml-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all text-slate-700 dark:text-slate-300"
              >
                <div className="w-6 h-6 rounded-md bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <LinkedInIcon className="w-3.5 h-3.5 fill-current" />
                </div>
                <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  LinkedIn
                </span>
                <ExternalLink className="w-3 h-3 text-slate-400 ml-auto" />
              </button>

              <button
                type="button"
                onClick={() => handleSocialClick('WhatsApp', getWhatsAppLink("Bonjour Kevin Chris"))}
                className="group flex items-center gap-2.5 p-1.5 -ml-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all text-slate-700 dark:text-slate-300"
              >
                <div className="w-6 h-6 rounded-md bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                </div>
                <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  WhatsApp Direct
                </span>
                <ExternalLink className="w-3 h-3 text-slate-400 ml-auto" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar with powerd by NHR DIGITAL AGENCY . */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            {t.footer.copyright}
          </div>

          <div className="font-semibold text-slate-600 dark:text-slate-300 tracking-wide text-xs">
            {t.footer.poweredBy}
          </div>
        </div>

      </div>
    </footer>
  );
};
