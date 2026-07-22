import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { cn } from "@/lib/cn";

export interface HeroProps {
  title: string;
  subtitle: string;
  className?: string;
}

/**
 * The project's only Hero. Product Blueprint Component Inventory names
 * it explicitly ("Reuse: Home only, by design") — a real, required piece
 * of Home's structure, not page markup improvised for this sprint.
 *
 * `title` renders as the page's one <h1> at its default level-1 size
 * (Heading's own default-by-level mapping already resolves level 1 to
 * the largest step on the type scale, so no size override is needed
 * here — passing one would just repeat what the primitive already does).
 */
export function Hero({ title, subtitle, className }: HeroProps) {
  return (
    <div className={cn("flex flex-col gap-4 px-6 py-24 tablet:py-32", className)}>
      <Heading level={1}>{title}</Heading>
      <Text size="lg" muted>
        {subtitle}
      </Text>
    </div>
  );
}
