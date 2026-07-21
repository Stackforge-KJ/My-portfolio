import type { ReactNode } from "react";
import { Link } from "@/components/primitives/Link";
import { cn } from "@/lib/cn";

type CardPadding = "default" | "compact";

export interface CardProps {
  /**
   * If present, the entire card becomes one focusable, labeled link
   * target — Product Blueprint: "entire card is one focusable, labeled
   * target, not a cluster of nested links." Rendered via the Link
   * primitive, never a raw <a>, per Sprint 3's "built only from
   * primitives" requirement.
   */
  href?: string;
  padding?: CardPadding;
  className?: string;
  children: ReactNode;
}

const PADDING_CLASSES: Record<CardPadding, string> = {
  default: "p-6",
  compact: "p-4",
};

// Flat by default (VDS Section 6) — a hairline border marks the boundary,
// not a shadow.
const BASE_CLASSES = "rounded border border-ink/10 bg-surface-secondary";

// The Product Blueprint's Card entry describes elevation only as a hover
// *state* on the interactive form ("hover: subtle lift"), not as a
// variant the caller chooses — so there is no `elevated`/`flat` prop
// here. Elevation only ever appears here, and only in response to the
// one interaction that justifies it.
const INTERACTIVE_CLASSES =
  "block no-underline transition-shadow duration-local ease-enter hover:no-underline hover:shadow-floating";

/**
 * The project's only card composition. Built entirely from the Link
 * primitive (Sprint 2) plus VDS tokens — no new styling primitives, no
 * duplicated typography (text inside a Card is expected to come from the
 * Text/Heading primitives, not styled locally here).
 */
export function Card({ href, padding = "default", className, children }: CardProps) {
  const classes = cn(
    BASE_CLASSES,
    PADDING_CLASSES[padding],
    href && INTERACTIVE_CLASSES,
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <article className={classes}>{children}</article>;
}
