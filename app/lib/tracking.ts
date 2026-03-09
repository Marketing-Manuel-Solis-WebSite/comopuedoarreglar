// lib/tracking.ts — Flight Check: Sistema de tracking propio (Fase 4)
// Registra cada conversion en /api/conversions para verificacion independiente de GA4

export type ConversionType = 'form_submit' | 'phone_click' | 'whatsapp_click' | 'qualified_lead';

interface ConversionEvent {
  type: ConversionType;
  source: string;
  medium: string;
  campaign?: string;
  domain: string;
  timestamp: string;
  label?: string;
  page?: string;
}

/**
 * Envia una conversion al endpoint propio para Flight Check.
 * No bloquea la UI — se ejecuta en background.
 */
export function trackConversion(event: ConversionEvent): void {
  try {
    fetch('/api/conversions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event),
    }).catch((err) => {
      console.error('[Flight Check] Error enviando conversion:', err);
    });
  } catch (e) {
    // Silenciar errores para no afectar UX
    console.error('[Flight Check] Error:', e);
  }
}

/**
 * Lee un parametro UTM desde la URL actual.
 */
export function getUTMParam(param: string): string {
  if (typeof window === 'undefined') return '';
  try {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param) || '';
  } catch {
    return '';
  }
}

/**
 * Obtiene todos los UTM params de la URL actual con defaults.
 */
export function getUTMData() {
  return {
    source: getUTMParam('utm_source') || 'direct',
    medium: getUTMParam('utm_medium') || 'none',
    campaign: getUTMParam('utm_campaign') || '',
  };
}

/**
 * Push estandarizado al dataLayer para GTM.
 * Fase 3: Cada conversion se envia al dataLayer para que GTM la capture.
 */
export function pushToDataLayer(event: string, params: Record<string, string>): void {
  if (typeof window !== 'undefined') {
    (window as any).dataLayer?.push({
      event,
      ...params,
    });
  }
}
