import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <>
      <SiteHeader />
      <main className="min-h-[calc(100svh-3.5rem)] pt-14 md:min-h-[calc(100svh-4rem)] md:pt-16">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
