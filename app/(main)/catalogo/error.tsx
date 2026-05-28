"use client";

import { useEffect } from "react";
import { ProductError } from "@/components/products/ProductFeedback";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";

type CatalogoErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function CatalogoError({ error, reset }: CatalogoErrorProps) {
  useEffect(() => {
    console.error("[catalogo]", error);
  }, [error]);

  return (
    <>
      <PageHeader eyebrow="Colección" title="Catálogo" />
      <Container className="space-y-8 py-14 md:py-20">
        <ProductError />
        <div className="flex justify-center">
          <Button type="button" onClick={reset} variant="outline">
            Reintentar
          </Button>
        </div>
      </Container>
    </>
  );
}
