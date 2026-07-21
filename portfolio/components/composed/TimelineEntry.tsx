import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { cn } from "@/lib/cn";

// Duplicated narrowly from Heading.tsx rather than importing an exported
// type that file doesn't currently expose — a one-line type alias isn't
// the kind of duplication Sprint 3 is guarding against (duplicated
// styling/typography), and it avoids touching a Sprint 2 file for a
// cosmetic import.
type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface TimelineEntryProps {
  organization: string;
  role: string;
  duration: string;
  description: string;
  achievements?: string[];
  /**
   * Not assumed: which heading level a role title should be depends on
   * where this entry ends up in a real page's document outline, which is
   * page-assembly work later sprints own — not this component's job to
   * guess. Defaults to 4 (a plausible depth for a repeated list entry)
   * but every real usage should pass the level its actual context needs.
   */
  headingLevel?: HeadingLevel;
  className?: string;
}

/**
 * One entry in an experience timeline. Renders as a semantic <li> — the
 * Product Blueprint specifies the list this belongs to is a real ordered
 * list ("presented as an ordered list, not purely visual positioning"),
 * so this component assumes an <ol> ancestor supplies that; it does not
 * render its own list wrapper.
 *
 * Responsive here means the entry's own internal layout (role/org stacked
 * above duration on mobile, side-by-side from `tablet:` up) — not
 * page-level composition, which belongs to whatever eventually assembles
 * a full list of these.
 */
export function TimelineEntry({
  organization,
  role,
  duration,
  description,
  achievements,
  headingLevel = 4,
  className,
}: TimelineEntryProps) {
  return (
    <li
      className={cn(
        "flex flex-col gap-2 tablet:flex-row tablet:items-baseline tablet:justify-between tablet:gap-6",
        className,
      )}
    >
      <div className="tablet:flex-1">
        <Heading level={headingLevel} size="xl">
          {role}
        </Heading>
        <Text size="body" muted>
          {organization}
        </Text>
        <Text size="body" className="mt-2">
          {description}
        </Text>
        {achievements && achievements.length > 0 ? (
          <ul className="mt-2 list-disc pl-5">
            {achievements.map((achievement) => (
              <li key={achievement}>
                <Text size="body">{achievement}</Text>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <Text as="span" size="caption" muted className="shrink-0 tablet:text-right">
        {duration}
      </Text>
    </li>
  );
}
