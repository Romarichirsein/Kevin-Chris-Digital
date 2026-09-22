import React, { useEffect, useState } from 'react';
import { getConversionStats, clearConversionEvents } from '../services/tracker';
import { ConversionEvent } from '../types';
import { 
  BarChart3, 
  X, 
  Trash2, 
  RefreshCw, 
  TrendingUp, 
  MousePointerClick, 
  MessageSquare, 
  BookOpen, 
  Building2, 
  CalendarCheck,
  CheckCircle2
} from 'lucide-react';

interface ConversionTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConversionTrackerModal: React.FC<ConversionTrackerModalProps> = ({ isOpen, onClose }) => {
  const [stats, setStats] = useState(getConversionStats());

  const refresh = () => {
    setStats(getConversionStats());
  };

  useEffect(() => {
    refresh();
    const handleEvent = () => refresh();
    window.addEventListener('conversion_tracked', handleEvent);
    return () => window.removeEventListener('conversion_tracked', handleEvent);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClear = () => {
    if (window.confirm('Voulez-vous réinitialiser les statistiques de tracking local ?')) {
      clearConversionEvents();
      refresh();
    }
  };

  const metricCards = [
    {
      title: 'Guide IA Chariow',
      count: stats.byType.chariow_guide_ia || 0,
      icon: BookOpen,
      color: 'text-blue-600 dark:text-blue-400',
    },
    {
      title: 'Autres Formations',
      count: stats.byType.chariow_product || 0,
      icon: TrendingUp,
      color: 'text-sky-600 dark:text-sky-400',
    },
    {
      title: 'Contacts WhatsApp',
      count: stats.byType.whatsapp_direct || 0,
      icon: MessageSquare,
      color: 'text-indigo-600 dark:text-indigo-400',
    },
    {
      title: 'Portfolio Behance',
      count: stats.byType.behance_portfolio || 0,
      icon: MousePointerClick,
      color: 'text-cyan-700 dark:text-cyan-400',
    },
    {
      title: 'Audits Startupic',
      count: stats.byType.audit_startupic || 0,
      icon: Building2,
      color: 'text-indigo-700 dark:text-indigo-400',
    },
    {
      title: 'Coaching Bookings',
      count: stats.byType.coaching_booking || 0,
      icon: CalendarCheck,
      color: 'text-pink-700 dark:text-pink-400',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#0d1322] border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-['Outfit',sans-serif]">
                Suivi des Conversions & Analytics
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Mesure des interactions et tunnels de vente (Kevin Chris Digital)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={refresh}
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              title="Rafraîchir"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto py-5 space-y-6 flex-1 pr-1">
          
          {/* Total Conversions Banner */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                Total des actions de conversion
              </div>
              <div className="text-3xl font-black text-slate-900 dark:text-white mt-0.5">
                {stats.total} action{stats.total > 1 ? 's' : ''}
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Tracking actif</span>
            </div>
          </div>

          {/* Grid of conversion counters */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {metricCards.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">{m.title}</span>
                    <Icon className={`w-4 h-4 ${m.color}`} />
                  </div>
                  <div className="text-2xl font-black text-slate-900 dark:text-white">{m.count}</div>
                </div>
              );
            })}
          </div>

          {/* Recent Events Log */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Journal des derniers événements :
            </h4>

            {stats.recentEvents.length === 0 ? (
              <div className="text-center py-8 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 text-slate-500 text-xs">
                Aucune conversion enregistrée pour le moment.
              </div>
            ) : (
              <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
                {stats.recentEvents.map((ev: ConversionEvent) => (
                  <div 
                    key={ev.id}
                    className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs"
                  >
                    <div>
                      <div className="font-semibold text-slate-800 dark:text-slate-200">{ev.label}</div>
                      <div className="text-[10px] text-slate-400 font-mono">
                        {new Date(ev.timestamp).toLocaleTimeString('fr-FR')} • {ev.type}
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium">
                      Enregistré
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <button
            type="button"
            onClick={handleClear}
            className="flex items-center gap-1.5 text-xs text-rose-600 dark:text-rose-400 hover:text-rose-700 py-1.5 px-2.5 rounded hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Réinitialiser</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-slate-800 dark:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-xl transition-colors"
          >
            Fermer
          </button>
        </div>

      </div>
    </div>
  );
};
