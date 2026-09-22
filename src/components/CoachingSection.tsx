import React, { useState } from 'react';
import { Currency } from '../types';
import { COACHING_OFFERS } from '../data/portfolio';
import { trackConversion } from '../services/tracker';
import { getWhatsAppLink } from '../data/contact';
import { 
  Calendar, 
  Clock, 
  Check, 
  Smartphone, 
  Video, 
  MessageSquare, 
  Sparkles,
  CalendarCheck,
  CheckCircle2,
  X
} from 'lucide-react';

interface CoachingSectionProps {
  currency: Currency;
}

export const CoachingSection: React.FC<CoachingSectionProps> = ({ currency }) => {
  const [selectedOffer, setSelectedOffer] = useState<string>('session-strategique');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>('Demain à 15h00 (GMT+1)');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [projectGoal, setProjectGoal] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const formatPrice = (usd: number, xaf: number) => {
    if (currency === 'XAF') {
      return `${xaf.toLocaleString('fr-FR')} FCFA`;
    }
    if (currency === 'EUR') {
      return `${(usd * 0.92).toFixed(2)} €`;
    }
    return `$${usd.toFixed(2)}`;
  };

  const handleStartBooking = (offerId: string) => {
    setSelectedOffer(offerId);
    setIsBookingModalOpen(true);
    setBookingConfirmed(false);
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const currentOffer = COACHING_OFFERS.find(o => o.id === selectedOffer) || COACHING_OFFERS[0];
    
    trackConversion('coaching_booking', `Réservation Coaching - ${currentOffer.title}`, {
      clientName,
      clientPhone,
      selectedDate,
      offerId: selectedOffer
    });

    setBookingConfirmed(true);

    // Open WhatsApp confirmation
    const message = 
      `Bonjour Kevin Chris,\n\nJe souhaite réserver mon coaching : *${currentOffer.title}*\nNom : ${clientName}\nTéléphone : ${clientPhone}\nCréneau souhaité : ${selectedDate}\nObjectif : ${projectGoal || 'Non spécifié'}`;
    window.open(getWhatsAppLink(message), '_blank');
  };

  const activeOffer = COACHING_OFFERS.find(o => o.id === selectedOffer) || COACHING_OFFERS[0];

  const availableSlots = [
    'Demain à 11h00 (GMT+1 / Heure de Douala)',
    'Demain à 15h00 (GMT+1 / Heure de Douala)',
    'Après-demain à 10h00 (GMT+1 / Heure de Douala)',
    'Après-demain à 17h00 (GMT+1 / Heure de Douala)',
    'Samedi à 14h00 (GMT+1 / Heure de Douala)',
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#0b0f19] border-b border-slate-800/80 relative" id="coaching">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Section Coaching & Accompagnement</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
            Coaching personnalisé : Du smartphone aux premiers revenus
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Séances de coaching sur-mesure pour la création et la vente de produits digitaux avec un simple smartphone et une connexion internet en Afrique.
          </p>
        </div>

        {/* Coaching Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {COACHING_OFFERS.map((offer) => (
            <div
              key={offer.id}
              className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                offer.id === 'mentorat-intensif'
                  ? 'bg-gradient-to-b from-slate-900 to-emerald-950/30 border-2 border-emerald-500/50 shadow-2xl shadow-emerald-500/10'
                  : 'bg-slate-900/60 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {offer.id === 'mentorat-intensif' && (
                <div className="absolute -top-3.5 right-6 px-3 py-0.5 rounded-full bg-emerald-500 text-[#0b0f19] font-black text-[11px] uppercase tracking-wider">
                  Le Plus Recommandé
                </div>
              )}

              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 mb-2">
                  <Clock className="w-4 h-4" />
                  <span>{offer.duration}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {offer.title}
                </h3>
                
                <p className="text-xs text-slate-400 mb-6">
                  Pour : <span className="text-slate-200 font-medium">{offer.target}</span>
                </p>

                <div className="space-y-3 mb-8">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Au programme de votre accompagnement :
                  </div>
                  {offer.deliverables.map((d, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800">
                <div className="flex items-baseline justify-between mb-5">
                  <div>
                    <span className="text-xs text-slate-400">Investissement :</span>
                    <div className="text-2xl sm:text-3xl font-black text-white font-['Outfit',sans-serif]">
                      {formatPrice(offer.priceUSD, offer.priceXAF)}
                    </div>
                  </div>
                  <span className="text-[11px] text-slate-400">Paiement Mobile Money disponible</span>
                </div>

                <button
                  type="button"
                  onClick={() => handleStartBooking(offer.id)}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg ${
                    offer.id === 'mentorat-intensif'
                      ? 'bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-[#0b0f19] shadow-emerald-500/25'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                  }`}
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Réserver un entretien stratégique</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Quick Trust Info */}
        <div className="max-w-3xl mx-auto rounded-xl bg-slate-900/40 border border-slate-800 p-4 text-center text-xs text-slate-400 flex flex-wrap items-center justify-center gap-6">
          <span className="flex items-center gap-1.5">
            <Video className="w-4 h-4 text-emerald-400" />
            Entretien par Google Meet ou WhatsApp Vidéo
          </span>
          <span className="flex items-center gap-1.5">
            <Smartphone className="w-4 h-4 text-cyan-400" />
            Méthodes 100% faisables sur Smartphone
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-teal-400" />
            Plans d'action concrets & applicables immédiatement
          </span>
        </div>

      </div>

      {/* Booking Calendar Modal (Type Calendly) */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-[#0d1322] border border-slate-700 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[90vh] overflow-y-auto">
            
            <button
              type="button"
              onClick={() => setIsBookingModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            {!bookingConfirmed ? (
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 mb-1">
                  <Calendar className="w-4 h-4" />
                  <span>Calendrier de Réservation en Ligne</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">
                  Planifier votre séance : {activeOffer.title}
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Remplissez vos coordonnées pour bloquer votre créneau avec Kevin Chris Atchof.
                </p>

                <form onSubmit={handleSubmitBooking} className="space-y-4">
                  {/* Select slot */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Choisissez un créneau disponible :
                    </label>
                    <select
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-emerald-500"
                    >
                      {availableSlots.map((s, i) => (
                        <option key={i} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Votre Nom complet :
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Paul Mbarga"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  {/* WhatsApp Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Numéro WhatsApp (avec indicatif pays) :
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: +237 690 00 00 00 / +225 ..."
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  {/* Project Goal */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Quel est votre objectif ou projet digital ?
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Ex: Je souhaite lancer mon premier e-book et automatiser mes paiements par Mobile Money..."
                      value={projectGoal}
                      onChange={(e) => setProjectGoal(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 px-4 rounded-xl text-sm font-bold bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-[#0b0f19] flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>Confirmer et Ouvrir WhatsApp</span>
                    </button>
                    <p className="text-[11px] text-slate-500 text-center mt-2">
                      Vous serez immédiatement redirigé vers WhatsApp pour valider l'horaire.
                    </p>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Demande de réservation enregistrée !
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
                  Votre message a été préparé pour WhatsApp. Kevin Chris Atchof ou son équipe validera votre session dans les prochaines heures.
                </p>
                <button
                  type="button"
                  onClick={() => setIsBookingModalOpen(false)}
                  className="px-6 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white"
                >
                  Fermer cette fenêtre
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
