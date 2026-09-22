import React, { useState } from 'react';
import { Currency, Product } from '../types';
import { FEATURED_PRODUCT, PRODUCTS_CATALOG } from '../data/products';
import { trackConversion } from '../services/tracker';
import { getWhatsAppLink } from '../data/contact';
import { 
  Sparkles, 
  Check, 
  ExternalLink, 
  CreditCard, 
  Smartphone, 
  ShieldCheck, 
  Flame, 
  Layers, 
  ArrowRight,
  MessageCircleQuestion,
  Gift
} from 'lucide-react';

interface ProductsSectionProps {
  currency: Currency;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ currency }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const formatPrice = (usd: number, xaf: number) => {
    if (currency === 'XAF') {
      return `${xaf.toLocaleString('fr-FR')} FCFA`;
    }
    if (currency === 'EUR') {
      return `${(usd * 0.92).toFixed(2)} €`;
    }
    return `$${usd.toFixed(2)}`;
  };

  const handleBuyChariow = (product: Product, isFeatured = false) => {
    trackConversion(
      isFeatured ? 'chariow_guide_ia' : 'chariow_product',
      `Boutique Chariow - ${product.title}`,
      { productId: product.id, priceUSD: product.priceUSD, priceXAF: product.priceXAF }
    );
    window.open(product.chariowUrl, '_blank');
  };

  const handleWhatsAppHelp = (productTitle: string) => {
    trackConversion('whatsapp_direct', `Question Produit - ${productTitle}`);
    const message = `Bonjour Kevin Chris, j'ai une question avant de commander la ressource : "${productTitle}".`;
    window.open(getWhatsAppLink(message), '_blank');
  };

  const categories = [
    { id: 'all', label: 'Tous les programmes' },
    { id: 'ia', label: 'Intelligence Artificielle' },
    { id: 'reseaux-sociaux', label: 'Réseaux Sociaux' },
    { id: 'video', label: 'Montage Vidéo' },
    { id: 'ads', label: 'Publicité Facebook' },
    { id: 'pack', label: 'Packs Complets' },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS_CATALOG
    : PRODUCTS_CATALOG.filter(p => p.category === selectedCategory);

  return (
    <section className="py-20 lg:py-28 bg-[#0b0f19] border-b border-slate-800/80 relative" id="guide-ia">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
            Passez à l'action : Nos ressources de pointe
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Formations pratiques et e-books conçus pour rentabiliser le digital en Afrique avec un smartphone et Mobile Money.
          </p>
        </div>

        {/* PRODUIT VEDETTE (Guide Pratique de la Monétisation de l'IA) */}
        <div className="relative mb-20 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-emerald-950/20 border border-emerald-500/30 shadow-2xl p-6 sm:p-10 overflow-hidden" id="produit-vedette">
          {/* Top highlight ribbon */}
          <div className="absolute top-0 right-0 transform translate-x-12 translate-y-6 rotate-45 bg-gradient-to-r from-emerald-500 to-teal-400 text-[#0b0f19] font-black text-xs py-1 px-14 shadow-lg hidden md:block">
            BEST-SELLER 2026
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: 3D Book Cover & Badges */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group max-w-[280px] sm:max-w-xs">
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500" />
                <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-2xl bg-slate-950">
                  <img
                    src="/images/guide_ia_book_cover_1790066130075.jpg"
                    alt="Guide Pratique de la Monétisation de l'IA - Kevin Chris Atchof"
                    className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-[#0b0f19]/90 backdrop-blur-sm p-3 border-t border-slate-800 text-center">
                    <span className="text-xs font-bold text-emerald-400">Format E-Book Numérique Téléchargeable</span>
                  </div>
                </div>
              </div>

              {/* Payment Methods Pill */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-[11px] text-slate-300 font-medium">
                <span className="px-2 py-1 rounded-md bg-slate-800 border border-slate-700 flex items-center gap-1">
                  <Smartphone className="w-3.5 h-3.5 text-amber-400" />
                  Orange Money
                </span>
                <span className="px-2 py-1 rounded-md bg-slate-800 border border-slate-700 flex items-center gap-1">
                  <Smartphone className="w-3.5 h-3.5 text-yellow-400" />
                  MTN MoMo
                </span>
                <span className="px-2 py-1 rounded-md bg-slate-800 border border-slate-700 flex items-center gap-1">
                  <CreditCard className="w-3.5 h-3.5 text-cyan-400" />
                  Carte Visa / Mastercard
                </span>
              </div>
            </div>

            {/* Right: Pitch, Learning Points & CTA */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/40">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Produit Vedette Officiel</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {FEATURED_PRODUCT.title}
                </h3>
                <p className="text-sm font-semibold text-emerald-400">
                  {FEATURED_PRODUCT.subtitle}
                </p>
              </div>

              {/* La promesse */}
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/80">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  La promesse :
                </div>
                <p className="text-sm text-slate-100 font-medium leading-relaxed">
                  « {FEATURED_PRODUCT.description} »
                </p>
              </div>

              {/* Ce que vous allez apprendre */}
              <div>
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                  Ce que vous allez apprendre concrètement :
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {FEATURED_PRODUCT.bulletPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing & CTA Button */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] text-slate-400">Tarif promotionnel spécial :</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl sm:text-3xl font-black text-white font-['Outfit',sans-serif]">
                      {formatPrice(FEATURED_PRODUCT.priceUSD, FEATURED_PRODUCT.priceXAF)}
                    </span>
                    {FEATURED_PRODUCT.originalPriceUSD && (
                      <span className="text-sm text-slate-500 line-through">
                        {formatPrice(FEATURED_PRODUCT.originalPriceUSD, FEATURED_PRODUCT.originalPriceXAF || 0)}
                      </span>
                    )}
                    <span className="px-2 py-0.5 text-[11px] font-bold bg-emerald-500/20 text-emerald-400 rounded-md">
                      Économisez 54%
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    id="buy-guide-ia-btn"
                    onClick={() => handleBuyChariow(FEATURED_PRODUCT, true)}
                    className="px-6 py-3.5 text-sm font-bold text-[#0b0f19] bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 rounded-xl shadow-xl shadow-emerald-500/25 active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Acheter maintenant sur Chariow</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleWhatsAppHelp(FEATURED_PRODUCT.title)}
                    className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 flex items-center justify-center"
                    title="Poser une question avant d'acheter sur WhatsApp"
                  >
                    <MessageCircleQuestion className="w-5 h-5 text-emerald-400" />
                  </button>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Paiement 100% sécurisé via Chariow • Téléchargement instantané dès validation</span>
              </div>

            </div>

          </div>
        </div>

        {/* OTHER PRODUCTS SECTION / CATALOG */}
        <div className="space-y-8" id="formations">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit',sans-serif]">
                Catalogue des formations & e-books disponibles
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Accédez à nos programmes spécialisés hébergés sur la plateforme panafricaine Chariow.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-emerald-500 text-[#0b0f19]'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((prod) => (
              <div 
                key={prod.id}
                className="rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 flex flex-col justify-between p-6 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 text-[11px] font-bold rounded-md bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      {prod.badge || 'Formation Chariow'}
                    </span>
                    {prod.discountPercentage && (
                      <span className="text-[11px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                        -{prod.discountPercentage}%
                      </span>
                    )}
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {prod.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-medium mt-1 mb-3">
                    {prod.subtitle}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {prod.description}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    {prod.bulletPoints.map((bp, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{bp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <div className="text-[10px] text-slate-400">Prix :</div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-bold text-white">
                          {formatPrice(prod.priceUSD, prod.priceXAF)}
                        </span>
                        {prod.originalPriceUSD && (
                          <span className="text-xs text-slate-500 line-through">
                            {formatPrice(prod.originalPriceUSD, prod.originalPriceXAF || 0)}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-400 flex items-center gap-1">
                      <Smartphone className="w-3 h-3 text-amber-400" />
                      MoMo & OM
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => handleBuyChariow(prod)}
                      className="flex-1 py-2.5 px-3 text-xs font-bold text-[#0b0f19] bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 rounded-lg shadow-md transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>Accéder sur Chariow</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleWhatsAppHelp(prod.title)}
                      className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-emerald-400 border border-slate-700"
                      title="Poser une question sur WhatsApp"
                    >
                      <MessageCircleQuestion className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
