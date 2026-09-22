import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Currency, Language, CoachingSlot } from '../types';
import { COACHING_OFFERS } from '../data/coaching';
import { translations } from '../i18n/translations';
import { trackConversion } from '../services/tracker';
import { OFFICIAL_CONTACT, getWhatsAppLink } from '../data/contact';
import { 
  Calendar, 
  Clock, 
  Check, 
  MessageSquare, 
  CheckCircle2, 
  ExternalLink,
  Zap,
  Sparkles,
  Award
} from 'lucide-react';

interface CoachingPageProps {
  currency: Currency;
  language: Language;
}

export const CoachingPage: React.FC<CoachingPageProps> = ({ currency, language }) => {
  const [selectedOffer, setSelectedOffer] = useState<CoachingSlot>(COACHING_OFFERS[0]);
  const [selectedSlot, setSelectedSlot] = useState<string>('Mardi 15h00 GMT+1');
  const [fullName, setFullName] = useState<string>('');
  const [whatsappPhone, setWhatsappPhone] = useState<string>('');
  const [projectGoal, setProjectGoal] = useState<string>('');
  const [confirmed, setConfirmed] = useState<boolean>(false);

  const t = translations[language];

  const formatPrice = (priceUSD: number, priceXAF: number): string => {
    switch (currency) {
      case 'XAF':
        return `${priceXAF.toLocaleString('fr-FR')} FCFA`;
      case 'EUR':
        return `${Math.round(priceUSD * 0.92)} €`;
      case 'USD':
      default:
        return `$${priceUSD.toFixed(2)}`;
    }
  };

  const availableSlots = [
    'Mardi 15h00 GMT+1',
    'Mardi 18h00 GMT+1',
    'Jeudi 14h00 GMT+1',
    'Jeudi 19h00 GMT+1',
    'Samedi 11h00 GMT+1',
    'Samedi 16h00 GMT+1',
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    trackConversion('coaching_booking', `Réservation Coaching - ${selectedOffer.title}`, {
      offerTitle: selectedOffer.title,
      priceUSD: selectedOffer.priceUSD,
      slot: selectedSlot,
      clientName: fullName,
      phone: whatsappPhone,
    });

    const msg = language === 'fr'
      ? `Bonjour Kevin Chris, je souhaite réserver la session de coaching "${selectedOffer.title}".\n- Nom : ${fullName}\n- WhatsApp : ${whatsappPhone}\n- Créneau souhaité : ${selectedSlot}\n- Objectif : ${projectGoal}`
      : `Hello Kevin Chris, I would like to book the coaching session "${selectedOffer.title}".\n- Name: ${fullName}\n- WhatsApp: ${whatsappPhone}\n- Preferred Slot: ${selectedSlot}\n- Goal: ${projectGoal}`;

    window.open(getWhatsAppLink(msg), '_blank');
    setConfirmed(true);
  };

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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16">
      
      {/* Header & Mentor Highlight with Stagger Entrance */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
      >
        <div className="lg:col-span-8 space-y-4">
          <motion.h1 variants={itemFadeInUp} className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-['Outfit',sans-serif]">
            {t.coaching.pageTitle}
          </motion.h1>
          <motion.p variants={itemFadeInUp} className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.coaching.pageSub}
          </motion.p>

          {/* Masterclass External Link */}
          <motion.div variants={itemFadeInUp} className="pt-2">
            <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
              <div className="text-xs">
                <span className="font-bold text-blue-950 dark:text-blue-200 block text-sm">
                  Masterclass FaceHOOK : Contenu, Hook & Monétisation
                </span>
                <span className="text-slate-600 dark:text-slate-400 text-xs">
                  Accédez au programme complet FaceHOOK et à l'accompagnement personnalisé
                </span>
              </div>
              <a
                href={OFFICIAL_CONTACT.coachingExternalUrl}
                target="_blank"
                rel="noreferrer"
                className="cta-pulse-glow px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-2 transition-all hover-glow-blue shrink-0 shadow-md shadow-blue-600/20"
              >
                <span>facehook.net/coaching</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Real Photo: Kevin Chris in coaching studio */}
        <motion.div variants={itemFadeInUp} className="lg:col-span-4 flex justify-center">
          <div className="relative w-full max-w-xs rounded-3xl overflow-hidden shadow-2xl border border-blue-500/30 hover-blue-halo group">
            <img 
              src="/img/kevin_success_mic.jpg" 
              alt="Kevin Chris coaching et mentorat"
              className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-700"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
            <div className="absolute bottom-3 left-4 right-4 text-white">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-600 text-white uppercase tracking-wider">
                Coach FaceHOOK
              </span>
              <p className="text-xs font-bold mt-1">Séances 1-on-1 & Analyse en Direct</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Offers Selection */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {COACHING_OFFERS.map((offer: CoachingSlot) => {
          const isSelected = selectedOffer.id === offer.id;
          return (
            <motion.div 
              key={offer.id}
              variants={itemFadeInUp}
              onClick={() => {
                setSelectedOffer(offer);
                setConfirmed(false);
              }}
              className={`p-7 sm:p-9 rounded-3xl border cursor-pointer transition-all flex flex-col justify-between hover-blue-halo ${
                isSelected
                  ? 'bg-white dark:bg-slate-900 border-blue-500 ring-2 ring-blue-500/30 shadow-xl shadow-blue-950/20'
                  : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-800'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Formule Intensive</span>
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{offer.duration}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 font-['Outfit',sans-serif]">
                  {offer.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {offer.target}
                </p>

                <div className="space-y-2.5 mb-6">
                  <div className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                    {t.coaching.programLabel}
                  </div>
                  {offer.deliverables.map((deliv: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                      <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-['Outfit',sans-serif]">
                    {formatPrice(offer.priceUSD, offer.priceXAF)}
                  </span>
                  <span className="block text-[11px] text-slate-400">
                    {t.coaching.momoNotice}
                  </span>
                </div>

                <button
                  type="button"
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {isSelected ? 'Sélectionné' : 'Choisir cette offre'}
                </button>
              </div>

            </motion.div>
          );
        })}
      </motion.div>

      {/* Interactive Booking Calendar Interface with Revolving Perimeter Beam */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="blue-perimeter-beam shadow-2xl shadow-blue-950/30"
      >
        <motion.div variants={itemFadeInUp} className="blue-perimeter-inner bg-white dark:bg-slate-900 p-7 sm:p-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
              <Calendar className="w-4 h-4" />
              <span>Calendrier de réservation en ligne</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-['Outfit',sans-serif]">
              {t.coaching.modalTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 mb-8">
              Formule sélectionnée : <strong className="text-blue-600 dark:text-blue-400">{selectedOffer.title}</strong> ({formatPrice(selectedOffer.priceUSD, selectedOffer.priceXAF)})
            </p>
          </div>

          {!confirmed ? (
            <form onSubmit={handleBookingSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {t.coaching.modalSlotLabel}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {availableSlots.map((slot, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`p-3 rounded-xl text-xs font-medium text-left border transition-all ${
                        selectedSlot === slot
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/50 text-blue-800 dark:text-blue-300 font-bold shadow-sm'
                          : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {t.coaching.modalNameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Christian Mbarga"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {t.coaching.modalPhoneLabel}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ex: +237 6XX XX XX XX"
                    value={whatsappPhone}
                    onChange={(e) => setWhatsappPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {t.coaching.modalGoalLabel}
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Décrivez votre page Facebook, votre audience actuelle et vos attentes..."
                  value={projectGoal}
                  onChange={(e) => setProjectGoal(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Confirmation directe sur WhatsApp avec Kevin Chris</span>
                </div>

                <button
                  type="submit"
                  className="cta-pulse-glow w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all active:scale-98"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>{t.coaching.modalSubmit}</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Demande envoyée avec succès !
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                Votre requête pour la formule <strong>{selectedOffer.title}</strong> a été transmise. Kevin Chris vous recontactera sous quelques heures sur votre numéro WhatsApp ({whatsappPhone}).
              </p>
              <button
                type="button"
                onClick={() => setConfirmed(false)}
                className="px-6 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
              >
                Réserver un autre créneau
              </button>
            </div>
          )}

        </motion.div>
      </motion.div>

    </div>
  );
};
