import { PortfolioProject } from '../types';

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'startupic-design-system',
    title: "Startupic Consulting — Plateforme & Identité",
    category: "Branding & Web UI/UX",
    client: "Startupic Consulting (Douala, Cameroun)",
    description: "Conception complète de l'expérience utilisateur et de la charte de marque digitale pour le cabinet d'accompagnement entrepreneurial panafricain.",
    tags: ["Figma", "UI/UX Architecture", "Design System", "B2B"],
    behanceUrl: "https://www.behance.net/",
    image: "/images/uiux_startupic_showcase_1790066155637.jpg",
    metrics: "+140% de conversion des leads B2B"
  },
  {
    id: 'fintech-afrique-momo',
    title: "MoMo Pay Gateway & Mobile Banking",
    category: "Mobile App Design (iOS / Android)",
    client: "Fintech Panafricaine",
    description: "Prototypage haute fidélité d'un portefeuille numérique facilitant les micro-transactions Mobile Money (Orange Money, MTN MoMo) pour les commerçants locaux.",
    tags: ["Mobile UX", "Fintech", "Micro-interactions", "Design Tokens"],
    behanceUrl: "https://www.behance.net/",
    image: "/images/uiux_startupic_showcase_1790066155637.jpg",
    metrics: "Adoption 98% sur tests utilisateurs terrain"
  },
  {
    id: 'chariow-creator-hub',
    title: "Creator Checkout & Tunnels de Vente",
    category: "E-commerce & Conversion Rate Optimization",
    client: "Écosystème Créateurs Digitaux",
    description: "Optimisation de flux d'achat mobile ultra-rapides en 2 clics avec confirmation instantanée par SMS/WhatsApp, pensé pour les connexions mobiles à faible débit.",
    tags: ["CRO", "Checkout Flow", "Mobile First", "Chariow Ecosystem"],
    behanceUrl: "https://www.behance.net/",
    image: "/images/uiux_startupic_showcase_1790066155637.jpg",
    metrics: "Chiffre d'affaires multiplié par 4"
  }
];

export const COACHING_OFFERS = [
  {
    id: 'coaching-gestion-monetisation',
    title: "Coaching en Gestion de pages & Monétisation",
    duration: "Programme intensif & Accompagnement stratégique",
    priceUSD: 149,
    priceXAF: 90000,
    target: "Créateurs de contenu, Social Media Managers & Marques (492K followers method)",
    deliverables: [
      "Gestion et croissance accélérée de page Facebook & TikTok",
      "Techniques éprouvées de monétisation et partenariats marques",
      "Création de contenu viral et calendrier éditorial automatisé",
      "Lien officiel programme : facehook.net/coaching/ & suivi WhatsApp"
    ]
  },
  {
    id: 'session-strategique',
    title: "Session Stratégique 1-on-1 (1H)",
    duration: "60 minutes en visioconférence",
    priceUSD: 49,
    priceXAF: 30000,
    target: "Freelances, créateurs de contenu & débutants",
    deliverables: [
      "Audit personnalisé de votre positionnement digital",
      "Plan d'action direct pour lancer votre premier infoproduit",
      "Sélection des 3 meilleurs prompts IA pour votre niche",
      "Recommandations directes de configuration WhatsApp & Mobile Money"
    ]
  },
  {
    id: 'mentorat-intensif',
    title: "Accompagnement 'Tunnel Automatisé' (30 Jours)",
    duration: "4 sessions de 1h30 + Support WhatsApp privé 7j/7",
    priceUSD: 199,
    priceXAF: 120000,
    target: "Entrepreneurs, formateurs & agences",
    deliverables: [
      "Création et validation de votre produit numérique rentable",
      "Mise en place de votre boutique Chariow automatisée de A à Z",
      "Stratégie de scripts viraux TikTok & campagnes Meta Ads rentables",
      "Accompagnement jusqu'à l'obtention de vos premiers 100 000 FCFA de ventes"
    ]
  }
];
