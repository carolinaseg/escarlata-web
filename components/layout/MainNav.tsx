"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { authNavigation, mainNavigation } from "@/lib/config/navigation";
import { cn } from "@/lib/utils/cn";
import { motion } from "@/lib/design/tokens";

const linkClass = (active: boolean) =>
  cn(
    "text-[10px] font-medium uppercase tracking-[0.28em]",
    motion.transition,
    active ? "text-negro" : "text-piedra hover:text-negro",
  );

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link href={href} className={linkClass(active)}>
      {label}
    </Link>
  );
}

export function DesktopNav() {
  return (
    <nav className="hidden items-center gap-8 lg:flex lg:gap-10" aria-label="Navegación principal">
      {mainNavigation.map((item) => (
        <NavLink key={item.href} href={item.href} label={item.label} />
      ))}
    </nav>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "flex h-9 w-9 flex-col items-center justify-center gap-1.5",
          motion.transition,
        )}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
      >
        <span
          className={cn(
            "h-px w-5 bg-negro transition-transform",
            open && "translate-y-[3.5px] rotate-45",
          )}
        />
        <span
          className={cn(
            "h-px w-5 bg-negro transition-opacity",
            open && "opacity-0",
          )}
        />
        <span
          className={cn(
            "h-px w-5 bg-negro transition-transform",
            open && "-translate-y-[3.5px] -rotate-45",
          )}
        />
      </button>

      {open && (
        <button
          type="button"
          className="fixed inset-0 top-14 z-40 bg-negro/20 md:top-16"
          aria-label="Cerrar menú"
          onClick={close}
        />
      )}

      <nav
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 top-14 z-50 border-b border-negro/5 bg-crema px-5 py-6 shadow-soft transition-all md:top-16",
          open ? "visible opacity-100" : "invisible pointer-events-none opacity-0",
        )}
        aria-label="Menú móvil"
        aria-hidden={!open}
      >
        <ul className="flex flex-col gap-5">
          {mainNavigation.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  className={linkClass(active)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li className="border-t border-negro/8 pt-5">
            <ul className="flex flex-col gap-4">
              {authNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={close} className={linkClass(pathname === item.href)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
