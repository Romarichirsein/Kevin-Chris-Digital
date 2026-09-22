import React, { useState } from 'react';
import { trackConversion } from '../services/tracker';
import { OFFICIAL_CONTACT, getWhatsAppLink } from '../data/contact';
import { Building2, X, CheckCircle2, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose }) => {
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [whatsappPhone, setWhatsappPhone] = useState('');
  const [serviceNeeded, setServiceNeeded] = useState('Prototypage & UI/UX App Mobile');
  const [budget, setBudget] = useState('500 000 FCFA – 1 500 000 FCFA');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackConversion('audit_startupic', `Demande Audit Startupic - ${companyName || contactName}`, {
      companyName,
      contactName,
      whatsappPhone,
      serviceNeeded,
      budget,
    });

    setSubmitted(true);

    const message = 
      `Bonjour Kevin Chris & Startupic Consulting,\n\nJe souhaite réserver un audit de produit digital / design UI/UX :\n\n• Entreprise / Projet : ${companyName || 'Projet en création'}\n• Contact : ${contactName}\n• WhatsApp : ${whatsappPhone}\n• Besoin : ${serviceNeeded}\n• Fourchette budgétaire : ${budget}`;
    window.open(getWhatsAppLink(message), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-white dark:bg-[#0b1120] border border-blue-500/30 rounded-3xl shadow-2xl shadow-blue-950/50 p-6 sm:p-8 overflow-hidden max-h-[90vh] overflow-y-auto">
        
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 mb-1">
              <Building2 className="w-4 h-4" />
              <span>Startupic Consulting • Douala, Cameroun</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-2 font-['Outfit',sans-serif]">
              Réserver un audit UI/UX & Stratégie
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              Vous êtes une startup ou une PME en pleine croissance ? Confiez l'analyse de votre produit à Kevin Chris Atchof (Designer Senior) et aux consultants de Startupic.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Nom de votre entreprise ou startup :
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: PayTech Africa, AgroMarket..."
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Votre Nom & Rôle :
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Alain N., CEO"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    WhatsApp Professionnel :
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+237 6..."
                    value={whatsappPhone}
                    onChange={(e) => setWhatsappPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Domaine prioritaire de votre besoin :
                </label>
                <select
                  value={serviceNeeded}
                  onChange={(e) => setServiceNeeded(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="Prototypage & UI/UX App Mobile">Prototypage & UI/UX App Mobile (iOS/Android)</option>
                  <option value="Création de Charte Graphique & Branding">Création de Charte Graphique & Identité de Marque</option>
                  <option value="Optimisation Tunnels & Conversion Rate (CRO)">Optimisation Tunnels & Taux de Conversion (CRO)</option>
                  <option value="Refonte Plateforme Web & Dashboard">Refonte Plateforme Web & Dashboard SaaS</option>
                  <option value="Accompagnement Startup Global">Accompagnement Startup Global (Startupic Consulting)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Budget estimé :
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="< 500 000 FCFA">&lt; 500 000 FCFA (&lt; $800)</option>
                  <option value="500 000 FCFA – 1 500 000 FCFA">500 000 FCFA – 1 500 000 FCFA ($800 – $2 500)</option>
                  <option value="1 500 000 FCFA – 4 000 000 FCFA">1 500 000 FCFA – 4 000 000 FCFA ($2 500 – $6 500)</option>
                  <option value="> 4 000 000 FCFA">&gt; 4 000 000 FCFA (&gt; $6 500)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 hover-glow-blue transition-all active:scale-98"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Transmettre la demande d'audit sur WhatsApp</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Réponse sous 24h ouvrées par Startupic Consulting</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Demande d'audit transmise avec succès !
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-sm mx-auto">
              Votre demande a été enregistrée et pré-remplie sur WhatsApp pour un échange direct avec l'équipe de Kevin Chris Atchof & Startupic Consulting.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200"
            >
              Fermer
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
