export const OFFICIAL_CONTACT = {
  name: "Kevin Chris Atchof",
  brand: "Kevin Chris Digital",
  phone: "+32 477 29 45 42",
  phoneRaw: "32477294542",
  whatsappBaseUrl: "https://wa.me/32477294542",
  emailPubCollab: "team@kevinchrisdigital.com",
  followersCount: "492 K",
  followingsCount: "46",
  socialAudienceFull: "492 K followers • 46 suivi(e)s",
  coachingExternalUrl: "https://facehook.net/coaching/",
  platformFormationUrl: "https://formation.kevinchrisdigital.com",
  motto: "Transformer votre temps en cash",
  experienceYears: "6 ans d'expérience",
  experienceDesc: "6 ans d’expérience en social media management et accompagnement de dizaines d’entreprises, artistes et créateurs à travers le monde.",
  roles: [
    "Formateur Digital & Stratège",
    "Social Media Manager (6 ans d'expérience)",
    "Content Creator Digital",
    "Accompagnateur de Créateurs & Marques"
  ],
  rolesEn: [
    "Digital Trainer & Strategist",
    "Social Media Manager (6 years experience)",
    "Digital Content Creator",
    "Creator & Brand Mentor"
  ]
};

export const getWhatsAppLink = (message: string) => {
  return `${OFFICIAL_CONTACT.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
};
