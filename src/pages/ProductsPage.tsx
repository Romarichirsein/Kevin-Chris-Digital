import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Currency, Language, Product } from '../types';
import { PRODUCTS_CATALOG, FEATURED_PRODUCT } from '../data/products';
import { translations } from '../i18n/translations';
import { trackConversion } from '../services/tracker';
import { getWhatsAppLink } from '../data/contact';
import { 
  ExternalLink, 
  CheckCircle, 
  ShieldCheck, 
  MessageSquare, 
  BookOpen,
  Sparkles,
  Zap,
  Laptop
} from 'lucide-react';

interface ProductsPageProps {
  currency: Currency;
  language: Language;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ currency, language }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
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

  const handleChariowBuy = (productTitle: string, url: string, isFeatured = false) => {
    trackConversion(
      isFeatured ? 'chariow_guide_ia' : 'chariow_product',
      `Clic Achat Chariow - ${productTitle}`,
      { productTitle, url, currency }
    );
    window.open(url, '_blank');
  };

  const handleAskQuestion = (productTitle: string) => {
    trackConversion('whatsapp_direct', `Question Produit WhatsApp - ${productTitle}`);
    const msg = language === 'fr'
      ? `Bonjour Kevin Chris, je m'intéresse à la formation "${productTitle}" sur votre site et j'ai une question avant de commander.`
      : `Hello Kevin Chris, I am interested in the program "${productTitle}" and have a quick question before ordering.`;
    window.open(getWhatsAppLink(msg), '_blank');
  };

  const filteredProducts: Product[] = selectedCategory === 'all'
    ? PRODUCTS_CATALOG
    : PRODUCTS_CATALOG.filter((p: Product) => p.category === selectedCategory);

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16">
      
      {/* Page Header with Blue Badge & Stagger */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl"
      >
        <motion.h1 variants={itemFadeInUp} className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-['Outfit',sans-serif]">
          {t.products.pageTitle}
        </motion.h1>
        <motion.p variants={itemFadeInUp} className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {t.products.pageSub}
        </motion.p>
      </motion.div>

      {/* PRODUIT VEDETTE AVEC FAISCEAU LUMINEUX & EFFET HOVER BLUE HALO */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.div variants={itemFadeInUp} className="blue-perimeter-beam shadow-2xl shadow-blue-950/40 hover-blue-halo transition-all">
          <div className="blue-perimeter-inner bg-white dark:bg-slate-900 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
              
              {/* Left: Book Cover Image & Mobile Money Badges */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border border-blue-500/30 group">
                  <img 
                    src="/images/book_cover_preview.png" 
                    alt="Guide Pratique Monétisation IA Afrique - Kevin Chris Atchof"
                    className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-[10px] tracking-wider uppercase px-3 py-1 rounded-full shadow-lg">
                    BEST-SELLER 2026
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[11px] text-slate-600 dark:text-slate-400">
                  <span className="font-semibold text-slate-900 dark:text-slate-200">Paiement Mobile direct :</span>
                  <span className="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-slate-800 text-blue-800 dark:text-slate-200 font-semibold border border-blue-100 dark:border-slate-700">Orange Money</span>
                  <span className="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-slate-800 text-blue-800 dark:text-slate-200 font-semibold border border-blue-100 dark:border-slate-700">MTN MoMo</span>
                  <span className="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-slate-800 text-blue-800 dark:text-slate-200 font-semibold border border-blue-100 dark:border-slate-700">Wave</span>
                </div>
              </div>

              {/* Right: Pitch, Promise, Curriculum */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                    {t.products.featuredBadge}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1 font-['Outfit',sans-serif]">
                    {t.products.featuredTitle}
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
                    {t.products.featuredSubtitle}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <div className="text-xs font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>{t.products.promiseLabel}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {t.products.promiseText}
                  </p>
                </div>

                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                    {t.products.learnLabel}
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {t.products.points.map((pt: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing and Action in Electric Blue */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-baseline gap-2.5">
                      <span className="text-3xl font-black text-slate-900 dark:text-white font-['Outfit',sans-serif]">
                        {formatPrice(FEATURED_PRODUCT.priceUSD, FEATURED_PRODUCT.priceXAF)}
                      </span>
                      {FEATURED_PRODUCT.originalPriceUSD && (
                        <span className="text-sm line-through text-slate-400 dark:text-slate-500">
                          {formatPrice(FEATURED_PRODUCT.originalPriceUSD, FEATURED_PRODUCT.originalPriceXAF || 0)}
                        </span>
                      )}
                      <span className="text-xs font-bold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 px-2.5 py-0.5 rounded-full">
                        -35% OFF
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      {t.products.instantDownload}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto">
                    <button
                      type="button"
                      id="buy-guide-chariow-btn"
                      onClick={() => handleChariowBuy(FEATURED_PRODUCT.title, FEATURED_PRODUCT.chariowUrl, true)}
                      className="cta-pulse-glow px-7 py-3.5 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/30 hover-glow-blue transition-all flex items-center justify-center gap-2 active:scale-95"
                    >
                      <span>{t.products.buyChariowBtn}</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleAskQuestion(FEATURED_PRODUCT.title)}
                      className="px-4 py-3.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                      title="Poser une question sur WhatsApp"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>{t.products.paymentNotice}</span>
                </div>

              </div>

            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Workflow & Tech Showcase Banner with Real Photo from img folder */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.div variants={itemFadeInUp} className="relative rounded-3xl overflow-hidden border border-blue-500/30 shadow-2xl hover-blue-halo group">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center bg-slate-900 text-white">
            <div className="lg:col-span-5 h-72 lg:h-80 overflow-hidden relative">
              <img 
                src="/img/kevin_laptop_coding.jpg" 
                alt="Kevin Chris travail sur laptop et analyse de données"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/90 hidden lg:block"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent lg:hidden"></div>
            </div>
            <div className="lg:col-span-7 p-7 sm:p-10 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit',sans-serif]">
                Des méthodes testées en conditions réelles
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Toutes nos formations sont créées à partir d'expérimentations directes sur des pages réelles : analyse des algorithmes Meta, rétention vidéo, tunnels WhatsApp et intégration des outils IA les plus puissants du moment.
              </p>
              <div className="flex items-center gap-4 pt-2 text-xs text-blue-300 font-semibold">
                <span>✓ Accès instantané</span>
                <span>•</span>
                <span>✓ Support communauté VIP</span>
                <span>•</span>
                <span>✓ Mises à jour continues</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* FULL CATALOGUE */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="space-y-6 pt-4"
      >
        <motion.div variants={itemFadeInUp}>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-['Outfit',sans-serif]">
            {t.products.catalogTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            {t.products.catalogSub}
          </p>
        </motion.div>

        {/* Category filter pills in Blue */}
        <motion.div variants={itemFadeInUp} className="flex flex-wrap gap-2 pb-2">
          {[
            { id: 'all', label: t.products.allCategories },
            { id: 'ia', label: 'Intelligence Artificielle' },
            { id: 'reseaux-sociaux', label: 'Facebook & Monétisation' },
            { id: 'video', label: 'Capcut Mobile & Montage' },
            { id: 'ads', label: 'Publicité Facebook Ads' },
            { id: 'pack', label: 'Packs Complets & Bundles' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-bold'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Product Cards Grid with Blue Glow on Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((p: Product) => (
            <motion.div 
              key={p.id}
              variants={itemFadeInUp}
              className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/70 p-6 flex flex-col justify-between hover-blue-halo shadow-sm transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {p.category}
                  </span>
                  {p.discountPercentage && (
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-800">
                      -{p.discountPercentage}%
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  {p.subtitle}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {p.description}
                </p>

                <div className="space-y-1.5 mb-6">
                  {p.bulletPoints.map((bp: string, i: number) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                      <span>{bp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-baseline justify-between mb-3">
                  <div>
                    <span className="text-xl font-black text-slate-900 dark:text-white font-['Outfit',sans-serif]">
                      {formatPrice(p.priceUSD, p.priceXAF)}
                    </span>
                    {p.originalPriceUSD && (
                      <span className="ml-2 text-xs line-through text-slate-400">
                        {formatPrice(p.originalPriceUSD, p.originalPriceXAF || 0)}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">
                    Chariow Instant
                  </span>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => handleChariowBuy(p.title, p.chariowUrl)}
                    className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 shadow-md shadow-blue-600/20 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>{t.products.buyNow}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleAskQuestion(p.title)}
                    className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-blue-600 transition-colors"
                    title={t.products.askQuestion}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </motion.section>

    </div>
  );
};
