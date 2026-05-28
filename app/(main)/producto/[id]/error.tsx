"use client";

import { useEffect } from "react";
import { ProductError } from "@/components/products/ProductFeedback";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { routes } from "@/lib/constants/routes";

type ProductoErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ProductoError({ error, reset }: ProductoErrorProps) {
  useEffect(() => {
    console.error("[producto]", error);
  }, [error]);

  return (
    <Container className="space-y-8 py-14 md:py-20">
      <ProductError />
      <div className="flex flex-wrap justify-center gap-4">
        <Button type="button" onClick={reset} variant="outline">
          Reintentar
        </Button>
        <Link
          href={routes.catalog}
          className="inline-flex items-center px-7 py-3.5 text-[10px] font-medium uppercase tracking-[0.32em] text-piedra hover:text-negro"
        >
          Ir al catálogo
        </Link>
      </div>
    </Container>
  );
}
