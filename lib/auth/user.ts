import type { User } from "@supabase/supabase-js";

export function getUserDisplayName(user: User): string {
  const metadata = user.user_metadata?.full_name;
  if (typeof metadata === "string" && metadata.trim()) {
    return metadata.trim();
  }
  if (user.email) {
    return user.email.split("@")[0];
  }
  return "Usuario";
}
