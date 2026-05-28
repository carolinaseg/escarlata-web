import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { siteConfig } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Escribinos para consultas, pedidos especiales o visitas al taller Escarlata.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Hablemos"
        title="Contacto"
        description="Respondemos en un plazo de 48 horas. Para pedidos personalizados, indicá fragancia y cantidad estimada."
        centered
      />

      <Container className="py-14 md:py-20">
        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-5 md:gap-16">
          <div className="space-y-6 md:col-span-2">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-piedra">
                Correo
              </p>
              <p className="mt-2 text-sm text-negro">{siteConfig.contactEmail}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-piedra">
                Horario
              </p>
              <Text className="mt-2">Lunes a viernes · 10:00 – 18:00</Text>
            </div>
            <Text tone="muted" variant="small">
              El formulario estará conectado próximamente. Por ahora podés escribirnos
              directamente al correo indicado.
            </Text>
          </div>

          <form
            className="space-y-4 md:col-span-3"
            action="#"
            method="post"
            aria-label="Formulario de contacto"
          >
            <div>
              <label htmlFor="nombre" className="sr-only">
                Nombre
              </label>
              <Input id="nombre" name="nombre" placeholder="Nombre" required />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Correo electrónico
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Correo electrónico"
                required
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="mensaje" className="sr-only">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={5}
                placeholder="Mensaje"
                required
                className="w-full resize-y border border-negro/10 bg-transparent px-4 py-3.5 text-sm text-negro placeholder:text-piedra/70 focus:border-rosa focus:outline-none"
              />
            </div>
            <Button type="submit" className="w-full sm:w-auto">
              Enviar mensaje
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
}
