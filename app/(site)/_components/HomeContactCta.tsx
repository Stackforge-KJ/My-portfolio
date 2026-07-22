"use client";

import { useRouter } from "next/navigation";
import { ContactActionBlock } from "@/components/composed/ContactActionBlock";

interface HomeContactCtaProps {
  heading: string;
  supportingText: string;
  ctaLabel: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

/**
 * Thin client-boundary wrapper around ContactActionBlock (Sprint 3) for
 * this one page. Home is otherwise fully server-rendered by default (EIP
 * Section 6). ContactActionBlock's `onCtaClick` can't be a bare closure
 * passed down from a Server Component — functions aren't serializable
 * across that boundary — so this isolates the one interactive piece
 * rather than marking the entire Home page a Client Component for one
 * button.
 *
 * Colocated under `_components` (excluded from routing by the leading
 * underscore) instead of `components/composed/`, since this is Home-
 * page-specific glue — the navigation target ("/contact") is a decision
 * this page makes, not something ContactActionBlock itself should know
 * about.
 */
export function HomeContactCta({
  heading,
  supportingText,
  ctaLabel,
  secondaryLabel,
  secondaryHref,
}: HomeContactCtaProps) {
  const router = useRouter();

  return (
    <ContactActionBlock
      heading={heading}
      supportingText={supportingText}
      ctaLabel={ctaLabel}
      onCtaClick={() => router.push("/contact")}
      secondaryLabel={secondaryLabel}
      secondaryHref={secondaryHref}
    />
  );
}
