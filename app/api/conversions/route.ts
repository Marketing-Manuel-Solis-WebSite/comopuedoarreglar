import { NextRequest, NextResponse } from 'next/server';

// Flight Check API — Fase 4
// Registra cada conversion del lado del servidor para comparar con GA4 (Double Check)
// Los logs de Vercel sirven como registro. Conectar a Supabase/PlanetScale para persistencia.

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      type,
      source,
      medium,
      campaign,
      domain,
      timestamp,
      label,
      page,
    } = body;

    // Validacion basica
    const validTypes = ['form_submit', 'phone_click', 'whatsapp_click', 'qualified_lead'];
    if (!type || !validTypes.includes(type)) {
      return NextResponse.json(
        { success: false, error: 'Invalid conversion type' },
        { status: 400 }
      );
    }

    // Log estructurado para Vercel — Flight Check record
    console.log(
      JSON.stringify({
        _flightCheck: true,
        type,
        source: source || 'direct',
        medium: medium || 'none',
        campaign: campaign || '',
        domain: domain || '',
        label: label || '',
        page: page || '',
        timestamp: timestamp || new Date().toISOString(),
        serverTimestamp: new Date().toISOString(),
      })
    );

    return NextResponse.json({ success: true, recorded: type });
  } catch (error) {
    console.error('[Flight Check] Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
