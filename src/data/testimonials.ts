export interface StudentTestimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatarUrl?: string;
  initials: string;
  resultMetric: string;
  metricLabel: string;
  quote: string;
  program: string;
  rating: number;
  verified: boolean;
}

export const STUDENT_TESTIMONIALS: StudentTestimonial[] = [
  {
    id: 'test-1',
    name: 'Marc-Aurèle N.',
    role: 'Créateur de contenu & Infopreneur',
    location: 'Douala, Cameroun',
    initials: 'MN',
    resultMetric: '1 450 000 FCFA',
    metricLabel: 'générés en 45 jours grâce à l’automatisation WhatsApp',
    quote: 'Avant la Masterclass FaceHOOK, j’avais 15k abonnés sur Facebook mais 0 FCFA de gain. Kevin Chris m’a appris à structurer mon hook dès les 3 premières secondes et à rediriger le flux vers un tunnel ManyChat + Mobile Money. Résultat : premier virement encaissé directement sur mon Orange Money !',
    program: 'Masterclass FaceHOOK',
    rating: 5,
    verified: true,
  },
  {
    id: 'test-2',
    name: 'Aïssatou D.',
    role: 'Coach Beauté & E-commerçante',
    location: 'Abidjan, Côte d’Ivoire',
    initials: 'AD',
    resultMetric: '+120 K Vues / vidéo',
    metricLabel: 'et page débloquée pour la monétisation',
    quote: 'Ma page Facebook était bloquée sans explication depuis 6 mois. Grâce aux tutoriels de déblocage et aux réglages de compte bancaire de règlement transmis par Kevin, j’ai non seulement récupéré mon accès, mais mes Reels ont explosé grâce aux scripts IA optimisés.',
    program: 'Ebook Visibilité & Monétisation',
    rating: 5,
    verified: true,
  },
  {
    id: 'test-3',
    name: 'Cédric T.',
    role: 'Community Manager Freelance',
    location: 'Yaoundé, Cameroun',
    initials: 'CT',
    resultMetric: 'x3 Clients Signés',
    metricLabel: 'passage de 80 000 à 350 000 FCFA / mois',
    quote: 'Le mentorat individuel avec Kevin Chris a été le meilleur investissement de mon année. Il m’a montré comment auditer les pages de mes clients avec la grille FaceHOOK Review et leur vendre des forfaits de monétisation à forte valeur ajoutée.',
    program: 'Coaching Stratégique 1-on-1',
    rating: 5,
    verified: true,
  },
  {
    id: 'test-4',
    name: 'Yannick M.',
    role: 'Artiste & Producteur Indépendant',
    location: 'Kinshasa, RDC',
    initials: 'YM',
    resultMetric: '89 000 Nouveaux Abonnés',
    metricLabel: 'en 2 mois sans payer de publicité Meta',
    quote: 'La méthode des 3 piliers (Niche + Audience + Algorithme) est redoutable. Je perdais mon temps à poster sans stratégie. Dès que j’ai appliqué les règles de rétention et le montage dynamique sur Capcut Mobile, le reach a décollé.',
    program: 'Pack Masterclass + Capcut Mobile',
    rating: 5,
    verified: true,
  },
  {
    id: 'test-5',
    name: 'Fatou B.',
    role: 'Formatrice en ligne',
    location: 'Dakar, Sénégal',
    initials: 'FB',
    resultMetric: '2 100 $ Encaissés',
    metricLabel: 'via Chariow en ventes de son propre ebook',
    quote: 'Kevin m’a convaincu de ne pas attendre uniquement les revenus publicitaires de Facebook, mais de créer mon propre infoproduit. En 2 semaines, mon ebook était rédigé avec l’IA et connecté à Wave. C’est la vraie liberté financière !',
    program: 'Ebook Visibilité & Monétisation',
    rating: 5,
    verified: true,
  }
];
