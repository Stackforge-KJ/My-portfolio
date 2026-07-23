"use client";

import { ContactActionBlock } from "@/components/composed/ContactActionBlock";

interface ContactPageCtaProps {
  heading: string;
  supportingText: string;
  ctaLabel: string;
  mailto: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

/**
 * Thin client-boundary wrapper around ContactActionBlock (Sprint 3),
 * following the same pattern as Home's HomeContactCta (Sprint 6) and for
 * the identical reason: `onCtaClick` can't be a bare closure from a
 * Server Component.
 *
 * Unlike Home's wrapper, this one's action is real: it opens a `mailto:`
 * link. PRD Section 9.5 names "a direct email" as the primary contact
 * method, and `mailto:` requires no backend, API, or email service — the
 * browser/OS handles it entirely, so this stays within Sprint 7's "no
 * backend, no API, no email service" constraint while still being the
 * one genuinely functional action this page needs.
 */
export function ContactPageCta({
  heading,
  supportingText,
  ctaLabel,
  mailto,
  secondaryLabel,
  secondaryHref,
}: ContactPageCtaProps) {
  return (
    <ContactActionBlock
      heading={heading}
      supportingText={supportingText}
      ctaLabel={ctaLabel}
      onCtaClick={() => {
        window.location.href = mailto;
      }}
      secondaryLabel={secondaryLabel}
      secondaryHref={secondaryHref}
    />
  );
}
