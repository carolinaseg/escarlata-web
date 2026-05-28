/**
 * Configuración centralizada de Mercado Pago.
 * Implementar checkout cuando el flujo de carrito esté listo.
 */
export const mercadoPagoConfig = {
  publicKey: process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY,
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN,
  webhookSecret: process.env.MERCADOPAGO_WEBHOOK_SECRET,
} as const;

export function isMercadoPagoConfigured(): boolean {
  return Boolean(
    mercadoPagoConfig.publicKey && mercadoPagoConfig.accessToken,
  );
}
