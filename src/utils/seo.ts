import { useEffect } from 'react';
import { PageId, Language } from '../types';

export interface SeoMetadata {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogImage?: string;
  keywords: string;
  canonicalPath: string;
  structuredData?: Record<string, any>;
}

export const SEO_PAGES: Record<Language, Record<PageId, SeoMetadata>> = {
  fr: {
    home: {
      title: "Kevin Chris Digital | Monétisation & IA en Afrique",
      description: "Plateforme officielle de Kevin Chris Atchof. Formations concrètes, masterclass FaceHOOK et méthodes éprouvées pour monétiser vos compétences et transformer votre temps en cash.",
      ogTitle: "Kevin Chris Digital | Expert IA & Stratégie Digitale",
      ogDescription: "Monétisez vos réseaux sociaux, développez votre visibilité et maîtrisez l'Intelligence Artificielle avec Kevin Chris.",
      ogImage: "/og-image.jpg",
      keywords: "monétisation facebook afrique, kevin chris digital, kevin chris atchof, facehook masterclass, chariow, mobile money, orange money, mtn momo",
      canonicalPath: "/",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Kevin Chris Digital",
        "url": "https://formation.kevinchrisdigital.com/",
        "description": "Plateforme de formation et d'accompagnement digital pour créateurs et entrepreneurs.",
        "author": {
          "@type": "Person",
          "name": "Kevin Chris Atchof",
          "jobTitle": "Formateur Digital & Social Media Manager"
        }
      }
    },
    'guide-ia': {
      title: "Boutique & Guide Monétisation IA Afrique | Kevin Chris",
      description: "Guide pratique officiel et catalogue de formations numériques. Encaissez vos premiers revenus en ligne avec Orange Money, MTN MoMo et Wave sur Chariow.",
      ogTitle: "Boutique Officielle Chariow & Guide Monétisation IA | Kevin Chris",
      ogDescription: "Commandez le Guide Pratique Monétisation IA Afrique et accédez aux stratégies concrètes de création de contenu automatisé.",
      ogImage: "/images/book_cover_preview.png",
      keywords: "guide monetisation ia afrique, ebook kevin chris, chariow kevin chris, formation intelligence artificielle cameroun côte d'ivoire senegal",
      canonicalPath: "/#/guide-ia",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Guide Pratique Monétisation IA Afrique 2026",
        "image": "https://formation.kevinchrisdigital.com/images/book_cover_preview.png",
        "description": "Méthode pas-à-pas pour exploiter l'intelligence artificielle et monétiser ses contenus sur Facebook en Afrique.",
        "offers": {
          "@type": "Offer",
          "price": "9.99",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      }
    },
    'a-propos': {
      title: "À Propos de Kevin Chris Atchof | Biographie & Vision",
      description: "Parcours de Kevin Chris Atchof : 6 ans d'expérience en Social Media Management, formateur digital et mentor de plus de 492 000 créateurs et marques.",
      ogTitle: "Biographie & Mission • Kevin Chris Atchof",
      ogDescription: "Découvrez l'histoire, la philosophie et les piliers de la méthode Kevin Chris Digital : Transformer votre temps en cash.",
      ogImage: "/img/kevin_executive_portrait.jpg",
      keywords: "qui est kevin chris atchof, formateur digital cameroun afrique, social media manager kevin chris, parcours digital creator",
      canonicalPath: "/#/a-propos",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Kevin Chris Atchof",
        "jobTitle": "Formateur Digital & Social Media Manager",
        "sameAs": [
          "https://www.facebook.com/kevinchristatchof/",
          "https://www.tiktok.com/@kevinchrisatchof01",
          "https://www.instagram.com/kevinchris_atchof/"
        ]
      }
    },
    'solutions-entreprises': {
      title: "Solutions Entreprises & Stratégie Social Media | Kevin Chris",
      description: "Audits de réputation, production de contenu à fort impact et accompagnement stratégique pour marques, PME et institutions africaines.",
      ogTitle: "Solutions Entreprises & Accompagnement B2B | Kevin Chris Digital",
      ogDescription: "Startupic Consulting & Kevin Chris Digital : transformez votre présence sociale en levier de croissance d'affaires mesurable.",
      ogImage: "/img/office_facehook.jpg",
      keywords: "consulting social media afrique, audit visibilité entreprise afrique, agence contenu digital douala yaounde abidjan",
      canonicalPath: "/#/solutions-entreprises",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Social Media Strategy & Content Production",
        "provider": {
          "@type": "Organization",
          "name": "Kevin Chris Digital"
        }
      }
    },
    coaching: {
      title: "Masterclass FaceHOOK & Coaching Personnalisé | Kevin Chris",
      description: "Réservez votre séance de coaching 1-on-1 ou rejoignez la Masterclass FaceHOOK. Analyse approfondie de page, monétisation et validation de créneaux en direct.",
      ogTitle: "Mentorat Individuel & Audit Stratégique • FaceHOOK Coaching",
      ogDescription: "Plan d'action sur-mesure pour débloquer votre monétisation Facebook et rentabiliser votre audience sous quelques semaines.",
      ogImage: "/img/kevin_success_mic.jpg",
      keywords: "facehook coaching, mentorat monetisation facebook, reservation kevin chris, masterclass facehook kevin chris",
      canonicalPath: "/#/coaching",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Masterclass FaceHOOK & Coaching Personnalisé",
        "description": "Accompagnement intensif pour structurer, monétiser et sécuriser une audience Facebook qualifiée.",
        "provider": {
          "@type": "Person",
          "name": "Kevin Chris Atchof"
        }
      }
    },
    contact: {
      title: "Contact Officiel & Collaborations | Kevin Chris Digital",
      description: "Contactez Kevin Chris Atchof via WhatsApp direct, email professionnel ou réseaux officiels (Facebook, TikTok, Instagram, LinkedIn, Behance).",
      ogTitle: "Canaux Officiels & Contact Direct • Kevin Chris Digital",
      ogDescription: "Ligne WhatsApp directe (+237 659 133 937), demande d'audit et partenariats sponsorisés pour créateurs et marques.",
      ogImage: "/img/kevin_radio_studio.jpg",
      keywords: "contact kevin chris, whatsapp kevin chris atchof, email team kevinchrisdigital, partenariat sponsoring afrique",
      canonicalPath: "/#/contact",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "mainEntity": {
          "@type": "Person",
          "name": "Kevin Chris Atchof",
          "telephone": "+237 659 133 937",
          "email": "team@kevinchrisdigital.com"
        }
      }
    }
  },
  en: {
    home: {
      title: "Kevin Chris Digital | Monetization & AI in Africa",
      description: "Official platform of Kevin Chris Atchof. Proven courses, FaceHOOK masterclass, and practical strategies to monetize your skills and turn your time into cash.",
      ogTitle: "Kevin Chris Digital | AI & Digital Growth Expert",
      ogDescription: "Monetize your social media, expand your visibility, and master Artificial Intelligence with Kevin Chris.",
      ogImage: "/og-image.jpg",
      keywords: "facebook monetization africa, kevin chris digital, kevin chris atchof, facehook masterclass, chariow, mobile money",
      canonicalPath: "/",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Kevin Chris Digital",
        "url": "https://formation.kevinchrisdigital.com/",
        "description": "Online training and digital mentorship for creators and entrepreneurs."
      }
    },
    'guide-ia': {
      title: "Official Store & AI Monetization Guide | Kevin Chris",
      description: "Practical digital guide and courses. Start earning online with Orange Money, MTN MoMo, and Wave via Chariow secure checkout.",
      ogTitle: "Chariow Store & AI Monetization Guide | Kevin Chris",
      ogDescription: "Get the Africa AI Monetization Practical Guide and access high-converting automated content workflows.",
      ogImage: "/images/book_cover_preview.png",
      keywords: "ai monetization guide africa, kevin chris ebook, chariow store kevin chris",
      canonicalPath: "/#/guide-ia"
    },
    'a-propos': {
      title: "About Kevin Chris Atchof | Biography & Vision",
      description: "Meet Kevin Chris Atchof: 6 years experience in Social Media Management, digital mentor for over 492,000 creators and brands.",
      ogTitle: "Biography & Mission • Kevin Chris Atchof",
      ogDescription: "Discover the story and core pillars behind Kevin Chris Digital: Turn your time into cash.",
      ogImage: "/img/kevin_executive_portrait.jpg",
      keywords: "who is kevin chris atchof, digital trainer africa, social media expert kevin chris",
      canonicalPath: "/#/a-propos"
    },
    'solutions-entreprises': {
      title: "Corporate Solutions & Social Media Strategy | Kevin Chris",
      description: "Reputation audits, high-impact content production, and executive consulting for African brands, SMEs, and institutions.",
      ogTitle: "Corporate Solutions & B2B Consulting | Kevin Chris Digital",
      ogDescription: "Startupic Consulting & Kevin Chris Digital: transform social visibility into measurable business growth.",
      ogImage: "/img/office_facehook.jpg",
      keywords: "social media consulting africa, brand visibility audit, digital content agency",
      canonicalPath: "/#/solutions-entreprises"
    },
    coaching: {
      title: "FaceHOOK Masterclass & 1-on-1 Coaching | Kevin Chris",
      description: "Book your 1-on-1 coaching session or join the FaceHOOK Masterclass. In-depth page analysis, monetization unlocks, and live slot booking.",
      ogTitle: "1-on-1 Mentorship & Strategic Audit • FaceHOOK Coaching",
      ogDescription: "Customized step-by-step roadmap to monetize and scale your social audience quickly.",
      ogImage: "/img/kevin_success_mic.jpg",
      keywords: "facehook coaching, facebook monetization mentor, kevin chris coaching booking",
      canonicalPath: "/#/coaching"
    },
    contact: {
      title: "Official Contact & Partnerships | Kevin Chris Digital",
      description: "Connect directly with Kevin Chris Atchof via WhatsApp, business email, or official social channels (Facebook, TikTok, Instagram, LinkedIn, Behance).",
      ogTitle: "Official Channels & Direct Inquiries • Kevin Chris Digital",
      ogDescription: "Direct WhatsApp support line (+237 659 133 937), corporate audit requests, and sponsorship partnerships.",
      ogImage: "/img/kevin_radio_studio.jpg",
      keywords: "contact kevin chris, whatsapp kevin chris atchof, partnerships kevin chris digital",
      canonicalPath: "/#/contact"
    }
  }
};

/**
 * Utility to dynamically update document title and head meta tags based on active page and language
 */
export function updatePageMeta(pageId: PageId, language: Language = 'fr'): void {
  const meta = SEO_PAGES[language]?.[pageId] || SEO_PAGES.fr.home;

  // 1. Update Title
  document.title = meta.title;

  // Helper to set or create a meta tag
  const setMetaTag = (attribute: 'name' | 'property', key: string, content: string) => {
    let el = document.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attribute, key);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  // 2. Standard Meta Tags
  setMetaTag('name', 'description', meta.description);
  setMetaTag('name', 'keywords', meta.keywords);

  // 3. OpenGraph Social Cards
  setMetaTag('property', 'og:title', meta.ogTitle);
  setMetaTag('property', 'og:description', meta.ogDescription);
  setMetaTag('property', 'og:type', 'website');
  setMetaTag('property', 'og:site_name', 'Kevin Chris Digital');

  const origin = window.location.origin;
  const currentUrl = `${origin}${window.location.pathname}${meta.canonicalPath === '/' ? '' : meta.canonicalPath}`;
  setMetaTag('property', 'og:url', currentUrl);

  const defaultImage = `${origin}/img/kevin_ai_hologram.avif`;
  const pageImage = meta.ogImage 
    ? (meta.ogImage.startsWith('http') ? meta.ogImage : `${origin}${meta.ogImage}`)
    : defaultImage;
  setMetaTag('property', 'og:image', pageImage);

  // 4. Twitter Cards
  setMetaTag('name', 'twitter:card', 'summary_large_image');
  setMetaTag('name', 'twitter:title', meta.ogTitle);
  setMetaTag('name', 'twitter:description', meta.ogDescription);
  setMetaTag('name', 'twitter:image', pageImage);

  // 5. Canonical Link
  let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', currentUrl);

  // 6. Schema.org JSON-LD Structured Data
  if (meta.structuredData) {
    let scriptEl = document.getElementById('schema-org-page-ld') as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = 'schema-org-page-ld';
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(meta.structuredData, null, 2);
  }
}

/**
 * React Hook to sync SEO tags whenever currentPage or language updates
 */
export function usePageSeo(currentPage: PageId, language: Language): void {
  useEffect(() => {
    updatePageMeta(currentPage, language);
  }, [currentPage, language]);
}
