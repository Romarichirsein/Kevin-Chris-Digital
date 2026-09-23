/**
 * Utilitaire de résolution robuste des URLs d'actifs statiques (images, favicons)
 * Garantit un chargement sans faille en local, sur domaine racine, et sur GitHub Pages (/repo-name/).
 */
export function getAssetUrl(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  
  // Nettoyer les slashes initiaux
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const base = import.meta.env.BASE_URL || './';
  
  if (base.endsWith('/')) {
    return `${base}${cleanPath}`;
  }
  return `${base}/${cleanPath}`;
}

/**
 * Retourne l'URL absolue complète (ex: https://domaine.com/Kevin-Chris-Digital/img/...)
 * Indispensable pour les balises OpenGraph (WhatsApp, Facebook, Twitter) et favicons.
 */
export function getAbsoluteAssetUrl(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const relative = getAssetUrl(path);
  if (typeof window !== 'undefined' && window.location) {
    try {
      return new URL(relative, window.location.href).href;
    } catch {
      // Fallback
    }
  }
  return relative;
}
