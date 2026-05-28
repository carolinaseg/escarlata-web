import { cn } from "@/lib/utils/cn";

type AuthAlertProps = {
  variant: "error" | "success";
  message: string;
};

export function AuthAlert({ variant, message }: AuthAlertProps) {
  return (
    <p
      role="alert"
      className={cn(
        "border px-4 py-3 text-sm leading-relaxed",
        variant === "error" &&
          "border-negro/10 bg-beige/60 text-negro",
        variant === "success" &&
          "border-rosa/40 bg-rosa/10 text-negro",
      )}
    >
      {message}
    </p>
  );
}
