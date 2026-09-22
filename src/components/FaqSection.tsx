import React, { useState } from 'react';
import { FAQ_ITEMS, FaqItem } from '../data/faq';
import { motion, AnimatePresence } from 'motion/react';
import { getWhatsAppLink } from '../data/contact';
import { 
  HelpCircle, 
  ChevronDown, 
  MessageSquare, 
  Sparkles
} from 'lucide-react';

interface FaqSectionProps {
  onAskWhatsApp?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onAskWhatsApp }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const categories = [
    { id: 'all', label: 'Toutes les questions' },
    { id: 'monetisation', label: 'Monétisation Facebook' },
    { id: 'coaching', label: 'Coaching & Masterclass' },
    { id: 'communaute', label: 'Accès & Communauté' },
    { id: 'paiement', label: 'Paiements Mobile Money' },
    { id: 'technique', label: 'Mobile & IA' },
  ];

  const filteredFaq = selectedCategory === 'all'
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter((item) => item.category === selectedCategory);

  const handleCustomQuestion = () => {
    if (onAskWhatsApp) {
      onAskWhatsApp();
      return;
    }
    const msg = "Bonjour Kevin Chris, j'ai une question spécifique sur vos formations et la monétisation Facebook qui n'est pas dans la FAQ.";
    window.open(getWhatsAppLink(msg), '_blank');
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      
      {/* Section Header */}
      <div className="text-center space-y-3 mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-['Outfit',sans-serif] tracking-tight">
          Questions Fréquentes sur la Monétisation & le Coaching
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Toutes les réponses indispensables pour démarrer sereinement, sécuriser vos pages et encaisser vos premiers revenus numériques.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => {
              setSelectedCategory(cat.id);
              // if active item isn't in this category, reset or keep first
            }}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedCategory === cat.id
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 scale-102'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Accordion List with Fluid Transitions */}
      <div className="space-y-4">
        {filteredFaq.map((item: FaqItem) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={`rounded-2xl border transition-all overflow-hidden ${
                isOpen
                  ? 'bg-white dark:bg-slate-900/90 border-blue-500/70 shadow-lg shadow-blue-950/20 ring-1 ring-blue-500/20'
                  : 'bg-white/80 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-900'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                className="w-full py-4 sm:py-5 px-6 flex items-center justify-between gap-4 text-left transition-colors"
                aria-expanded={isOpen}
              >
                <span className={`text-sm sm:text-base font-bold font-['Outfit',sans-serif] ${
                  isOpen ? 'text-blue-600 dark:text-blue-400' : 'text-slate-900 dark:text-white'
                }`}>
                  {item.question}
                </span>

                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                    isOpen 
                      ? 'bg-blue-600 text-white shadow-sm' 
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Direct WhatsApp Prompt */}
      <div className="mt-10 p-6 rounded-3xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
            Une question spécifique à votre page ou votre projet ?
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
            Kevin Chris et son équipe répondent directement sur WhatsApp sous quelques heures.
          </p>
        </div>

        <button
          type="button"
          onClick={handleCustomQuestion}
          className="cta-pulse-glow px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-2 shrink-0 shadow-md active:scale-98"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Poser ma question sur WhatsApp</span>
        </button>
      </div>

    </section>
  );
};

export { FaqSection as FAQSection };
