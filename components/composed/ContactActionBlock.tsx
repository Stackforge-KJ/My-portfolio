import { Button } from "@/components/primitives/Button";
import { Heading } from "@/components/primitives/Heading";
import { Link } from "@/components/primitives/Link";
import { Text } from "@/components/primitives/Text";
import { cn } from "@/lib/cn";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface ContactActionBlockProps {
  heading: string;
  supportingText: string;
  ctaLabel: string;
  /**
   * Deliberately generic. The Product Blueprint's real contact mechanism
   * (a mailto action, or something else) is a decision the actual Contact
   * page makes with real content — this component only needs to fire
   * something when its one primary action is taken, not decide what that
   * action does.
   */
  onCtaClick: () => void;
  secondaryLabel?: string;
  secondaryHref?: string;
  headingLevel?: HeadingLevel;
  className?: string;
}

/**
 * The project's only contact-conversion composition. Product Blueprint:
 * "the single primary conversion moment" — one Button, one optional
 * secondary Link, nothing else.
 *
 * No form fields exist here. The Blueprint treats a form as a fallback
 * variant only if a direct contact method proves insufficient, and
 * Sprint 3 explicitly excludes building that fallback now — this is the
 * direct-action path only.
 */
export function ContactActionBlock({
  heading,
  supportingText,
  ctaLabel,
  onCtaClick,
  secondaryLabel,
  secondaryHref,
  headingLevel = 2,
  className,
}: ContactActionBlockProps) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <Heading level={headingLevel} size="2xl">
        {heading}
      </Heading>
      <Text size="lg" muted>
        {supportingText}
      </Text>
      <div className="flex flex-wrap items-center gap-4">
        <Button variant="primary" onClick={onCtaClick}>
          {ctaLabel}
        </Button>
        {secondaryLabel && secondaryHref ? (
          <Link href={secondaryHref}>{secondaryLabel}</Link>
        ) : null}
      </div>
    </div>
  );
}
