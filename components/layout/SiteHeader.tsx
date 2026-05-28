import Link from "next/link";
import { DesktopNav, MobileNav } from "@/components/layout/MainNav";
import { siteConfig } from "@/lib/config/site";
import { routes } from "@/lib/constants/routes";
import { cn } from "@/lib/utils/cn";
import { motion } from "@/lib/design/tokens";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-negro/5 bg-crema/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-5 sm:px-6 md:h-16 md:px-10">
        <div className="flex items-center gap-4">
          <MobileNav />
          <Link
            href={routes.home}
            className="font-serif text-xl font-light tracking-[0.18em] text-negro md:text-2xl"
            aria-label={`${siteConfig.name} — inicio`}
          >
            {siteConfig.name.toUpperCase()}
          </Link>
        </div>

        <DesktopNav />

        <div className="flex items-center gap-4 md:gap-6">
          <Link
            href={routes.login}
            className={cn(
              "hidden text-[10px] font-medium uppercase tracking-[0.28em] text-piedra sm:inline",
              motion.transition,
              "hover:text-negro",
            )}
          >
            Iniciar sesión
          </Link>
          <Link
            href={routes.register}
            className={cn(
              "hidden text-[10px] font-medium uppercase tracking-[0.28em] text-negro md:inline",
              motion.transition,
              "hover:text-rosa",
            )}
          >
            Crear cuenta
          </Link>
        </div>
      </div>
    </header>
  );
}
