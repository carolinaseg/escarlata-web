import Link from "next/link";
import type { User } from "@supabase/supabase-js";
import { LogoutButton } from "@/components/auth/LogoutButton";
import { routes } from "@/lib/constants/routes";
import { cn } from "@/lib/utils/cn";
import { motion } from "@/lib/design/tokens";

type AuthNavProps = {
  user: User | null;
  className?: string;
};

const linkStyles = cn(
  "text-[10px] font-medium uppercase tracking-[0.28em]",
  motion.transition,
);

export function AuthNav({ user, className }: AuthNavProps) {
  if (!user) {
    return (
      <div className={cn("flex items-center gap-4 md:gap-6", className)}>
        <Link
          href={routes.login}
          className={cn(linkStyles, "text-piedra hover:text-negro")}
        >
          Iniciar sesión
        </Link>
        <Link
          href={routes.register}
          className={cn(linkStyles, "text-negro hover:text-rosa")}
        >
          Crear cuenta
        </Link>
      </div>
    );
  }

  const displayName =
    (user.user_metadata?.full_name as string | undefined) ??
    user.email?.split("@")[0] ??
    "Cuenta";

  return (
    <div className={cn("flex items-center gap-4 md:gap-6", className)}>
      <Link
        href={routes.account}
        className={cn(linkStyles, "hidden text-piedra hover:text-negro sm:inline")}
        title={user.email ?? undefined}
      >
        {displayName}
      </Link>
      <Link
        href={routes.account}
        className={cn(linkStyles, "text-negro hover:text-rosa sm:hidden")}
      >
        Mi cuenta
      </Link>
      <LogoutButton variant="ghost" className="!px-0 !py-0 !tracking-[0.28em]" />
    </div>
  );
}
