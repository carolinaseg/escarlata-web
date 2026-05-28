import Link from "next/link";
import type { User } from "@supabase/supabase-js";
import { AuthNav } from "@/components/layout/AuthNav";
import { DesktopNav, MobileNav } from "@/components/layout/MainNav";
import { siteConfig } from "@/lib/config/site";
import { routes } from "@/lib/constants/routes";

type SiteHeaderProps = {
  user: User | null;
};

export function SiteHeader({ user }: SiteHeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-negro/5 bg-crema/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-5 sm:px-6 md:h-16 md:px-10">
        <div className="flex items-center gap-4">
          <MobileNav user={user} />
          <Link
            href={routes.home}
            className="font-serif text-xl font-light tracking-[0.18em] text-negro md:text-2xl"
            aria-label={`${siteConfig.name} — inicio`}
          >
            {siteConfig.name.toUpperCase()}
          </Link>
        </div>

        <DesktopNav />

        <AuthNav user={user} />
      </div>
    </header>
  );
}
