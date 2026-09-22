import { CoachingSlot } from '../types';

export const COACHING_OFFERS: CoachingSlot[] = [
  {
    id: 'express',
    title: 'Audit & Diagnostic Express (1h30)',
    duration: '1h30 en direct (Google Meet ou WhatsApp Vidéo)',
    priceUSD: 49,
    priceXAF: 30000,
    target: 'Créateurs, freelances et porteurs de projet souhaitant débloquer leur monétisation.',
    deliverables: [
      'Audit complet de votre profil ou page Facebook',
      'Diagnostic du tunnel de vente et points de friction',
      'Recommandations immédiates d’optimisation IA',
      'Feuille de route concrète sur 30 jours',
      'Enregistrement vidéo de la session fourni',
    ],
  },
  {
    id: 'intensive',
    title: 'Mentorat Monétisation & Tunnels (1 Mois)',
    duration: '4 sessions de 1h30 + Suivi WhatsApp 30 jours',
    priceUSD: 149,
    priceXAF: 90000,
    target: 'Infopreneurs, consultants et créateurs voulant lancer leur premier produit digital rentable.',
    deliverables: [
      'Structuration complète de votre produit sur Chariow',
      'Intégration des paiements Mobile Money (Orange Money, MTN MoMo, Wave)',
      'Création des scripts de vente et visuels avec l’IA',
      'Campagnes de lancement Facebook Ads & trafic organique',
      'Accès direct à Kevin Chris sur WhatsApp durant 30 jours',
    ],
  },
];
