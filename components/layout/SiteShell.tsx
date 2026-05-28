import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { getUser } from "@/lib/services/auth";

type SiteShellProps = {
  children: ReactNode;
};

export async function SiteShell({ children }: SiteShellProps) {
  const user = await getUser();

  return (
    <>
      <SiteHeader user={user} />
      <main className="min-h-[calc(100svh-3.5rem)] pt-14 md:min-h-[calc(100svh-4rem)] md:pt-16">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
