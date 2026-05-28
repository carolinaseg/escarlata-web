import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

type AuthCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  footer: ReactNode;
};

export function AuthCard({
  eyebrow,
  title,
  description,
  children,
  footer,
}: AuthCardProps) {
  return (
    <Container className="py-14 md:py-20">
      <div className="mx-auto max-w-md">
        <div className="mb-10 text-center">
          <Eyebrow tone="accent" className="mb-3">
            {eyebrow}
          </Eyebrow>
          <Heading as={1}>{title}</Heading>
          <Text tone="muted" className="mt-4">
            {description}
          </Text>
        </div>

        {children}

        <p className="mt-8 text-center text-sm text-piedra">{footer}</p>
      </div>
    </Container>
  );
}

export function AuthFooterLink({
  text,
  linkText,
  href,
}: {
  text: string;
  linkText: string;
  href: string;
}) {
  return (
    <>
      {text}{" "}
      <Link href={href} className="text-negro underline-offset-4 hover:underline">
        {linkText}
      </Link>
    </>
  );
}
