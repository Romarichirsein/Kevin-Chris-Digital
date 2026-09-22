import { ConversionEvent } from '../types';

const STORAGE_KEY = 'kevinchris_conversion_events';

export const trackConversion = (type: ConversionEvent['type'], label: string, metadata?: Record<string, any>) => {
  const event: ConversionEvent = {
    id: `conv_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
    timestamp: Date.now(),
    type,
    label,
    metadata,
  };

  try {
    const existing = getConversionEvents();
    const updated = [event, ...existing].slice(0, 500); // keep last 500 events
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    
    // Dispatch custom event so reactive UI counters update live
    window.dispatchEvent(new CustomEvent('conversion_tracked', { detail: event }));
  } catch (e) {
    console.error('Failed to save conversion event', e);
  }

  return event;
};

export const getConversionEvents = (): ConversionEvent[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const clearConversionEvents = () => {
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new CustomEvent('conversion_tracked', { detail: null }));
};

export const getConversionStats = () => {
  const events = getConversionEvents();
  const summary: Record<string, number> = {
    chariow_guide_ia: 0,
    chariow_product: 0,
    whatsapp_direct: 0,
    behance_portfolio: 0,
    audit_startupic: 0,
    coaching_booking: 0,
  };

  events.forEach((ev) => {
    if (summary[ev.type] !== undefined) {
      summary[ev.type]++;
    }
  });

  return {
    total: events.length,
    byType: summary,
    recentEvents: events.slice(0, 20),
  };
};
