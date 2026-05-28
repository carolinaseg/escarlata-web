import Link from "next/link";
import { footerNavigation } from "@/lib/config/navigation";
import { siteConfig } from "@/lib/config/site";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";
import { motion } from "@/lib/design/tokens";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-negro/5 py-10 md:py-12">
      <Container className="flex flex-col items-center gap-8 text-center md:flex-row md:items-end md:justify-between md:text-left">
        <div className="space-y-2">
          <p className="font-serif text-2xl font-light tracking-wide text-negro">
            {siteConfig.name}
          </p>
          <p className="text-xs text-piedra">{siteConfig.tagline}</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 md:gap-8" aria-label="Pie de página">
          {footerNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[10px] uppercase tracking-[0.28em] text-piedra",
                motion.transition,
                "hover:text-negro",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <p className="text-[10px] uppercase tracking-[0.2em] text-piedra">
          © {year} {siteConfig.name}
        </p>
      </Container>
    </footer>
  );
}
