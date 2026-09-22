export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'monetisation' | 'coaching' | 'communaute' | 'paiement' | 'technique';
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'monetisation',
    question: 'Puis-je monétiser ma page Facebook si mon pays n’est pas éligible par défaut ?',
    answer: 'Oui, absolument. C’est précisément l’un des points forts de nos formations et de la Masterclass FaceHOOK. Nous vous enseignons les démarches légales et techniques conformes (configuration des comptes de paiement, structuration administrative, partenariat avec des tiers de confiance et utilisation de comptes de règlement internationaux) pour activer la monétisation et recevoir vos virements même en résidant en Afrique.'
  },
  {
    id: 'faq-2',
    category: 'communaute',
    question: 'Comment fonctionne l’accès à la communauté privée d’apprenants et créateurs ?',
    answer: 'Dès votre commande sur Chariow ou votre inscription en coaching, vous recevez un lien d’invitation exclusif pour rejoindre notre communauté privée VIP (groupe WhatsApp & canal d’alertes stratégiques). Vous y bénéficiez d’échanges continus entre pairs, de retours d’expérience en direct, d’analyses de vidéos virales et des alertes immédiates dès que Facebook met à jour ses algorithmes.'
  },
  {
    id: 'faq-3',
    category: 'coaching',
    question: 'Comment se déroule une session de Coaching ou Masterclass personnalisée ?',
    answer: 'Le coaching se déroule en visioconférence directe 1-on-1 avec Kevin Chris Atchof. Après un diagnostic préalable de votre page (FaceHOOK Review), nous élaborons un plan d’action personnalisé étape par étape (choix de la niche, scripts d’accroche, calendrier éditorial, paramétrage de compte), complété par un suivi direct sur WhatsApp pendant plusieurs semaines pour valider vos premières vidéos.'
  },
  {
    id: 'faq-4',
    category: 'monetisation',
    question: 'Quelle est la méthode des 3 piliers de Kevin Chris ?',
    answer: 'La méthode repose sur : 1) Niche claire & Audience qualifiée (pour attirer des personnes prêtes à interagir ou acheter) ; 2) Maîtrise de l’algorithme Facebook & Hook dès les premières secondes (pour maximiser le temps de rétention) ; 3) Automatisation & Diversification (vendre ses propres infoproduits, formations et prestations via des tunnels WhatsApp sans dépendre uniquement des revenus publicitaires de Meta).'
  },
  {
    id: 'faq-5',
    category: 'communaute',
    question: 'Organisez-vous des sessions de questions/réponses en direct pour la communauté ?',
    answer: 'Oui ! Des lives et sessions Q&A périodiques sont réservés aux membres de la communauté pour analyser les comptes d’abonnés en temps réel, corriger les erreurs de rétention et partager de nouveaux prompts d’intelligence artificielle générative adaptés au contexte africain.'
  },
  {
    id: 'faq-6',
    category: 'technique',
    question: 'Ai-je besoin d’un ordinateur puissant pour appliquer la méthode ?',
    answer: 'Non. La quasi-totalité des stratégies enseignées par Kevin Chris (création de contenu, montage sur Capcut Mobile, génération de scripts par IA, publication et gestion de tunnels WhatsApp) est optimisée pour être exécutée à 100% depuis un simple smartphone avec une connexion internet standard.'
  },
  {
    id: 'faq-7',
    category: 'paiement',
    question: 'Quels sont les moyens de paiement acceptés pour commander les formations ?',
    answer: 'Toutes les commandes sont sécurisées via la plateforme panafricaine Chariow. Vous pouvez régler instantanément par Orange Money, MTN MoMo, Wave, Moov Money, Airtel Money ainsi que par Carte Bancaire (Visa / Mastercard). L’accès au guide et à la communauté est instantané après confirmation du paiement.'
  },
  {
    id: 'faq-8',
    category: 'coaching',
    question: 'Comment réserver un créneau de coaching individuel avec Kevin Chris ?',
    answer: 'Rendez-vous dans la rubrique Coaching de la plateforme, sélectionnez votre date et heure dans le calendrier interactif, puis confirmez votre demande directement sur WhatsApp. Vous recevrez un questionnaire préparatoire pour optimiser chaque minute de la séance.'
  }
];
