import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { cn } from "@/lib/cn";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  supportingText?: string;
  /**
   * Not assumed: correct heading level depends on where this section
   * lands in a real page's document outline, which no page exists yet to
   * define — same reasoning as TimelineEntry/ContactActionBlock in
   * Sprint 3. Defaults to 2 (a section header is typically one level
   * below a page's h1) but any real usage should pass its actual level.
   */
  headingLevel?: HeadingLevel;
  /**
   * Sprint 9 addition: forwarded to the underlying Heading (which already
   * accepts `id` via HTMLAttributes passthrough — no change needed there).
   * Lets a wrapping <section> reference this heading via
   * `aria-labelledby`, turning it into a properly named landmark region
   * for screen-reader navigation. Optional and additive; every existing
   * call site without an id renders exactly as before.
   */
  id?: string;
  className?: string;
}

/**
 * The project's only section-heading composition — marks a chapter
 * change in the site's narrative (XA Narrative Architecture), built
 * entirely from the Heading and Text primitives. No typography is
 * redeclared here; every text treatment below is a primitive prop, not a
 * local font/size/color class.
 */
export function SectionHeader({
  eyebrow,
  title,
  supportingText,
  headingLevel = 2,
  id,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {eyebrow ? (
        <Text as="span" size="caption" weight="medium" className="uppercase text-accent">
          {eyebrow}
        </Text>
      ) : null}
      <Heading id={id} level={headingLevel} size="3xl">
        {title}
      </Heading>
      {supportingText ? (
        <Text size="lg" muted>
          {supportingText}
        </Text>
      ) : null}
    </div>
  );
}
