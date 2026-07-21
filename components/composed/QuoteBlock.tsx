import { Text } from "@/components/primitives/Text";
import { cn } from "@/lib/cn";

export interface QuoteBlockProps {
  quote: string;
  attribution: string;
  /** Optional role/title shown alongside the attribution (e.g. "CTO, Acme"). */
  role?: string;
  className?: string;
}

/**
 * The project's only quote/pull-quote composition — real <blockquote>
 * and <cite> semantics, per the Product Blueprint's explicit accessibility
 * requirement ("marked up as a real blockquote, not styled paragraph
 * text").
 *
 * The attribution line uses the Text primitive directly (its "caption,
 * muted" treatment is exactly what's needed, unmodified). The quote line
 * does NOT go through Text: Text is scoped to body copy and always
 * applies the body sans; a pull-quote needs the display serif in italics,
 * which is a genuinely different typographic role, not a style Text
 * already expresses that would be wasteful to duplicate.
 */
export function QuoteBlock({ quote, attribution, role, className }: QuoteBlockProps) {
  return (
    <blockquote className={cn("border-l-2 border-accent pl-4", className)}>
      <p className="font-display text-lg italic text-ink">{quote}</p>
      <Text as="footer" size="caption" muted className="mt-2">
        <cite className="font-medium not-italic text-ink">{attribution}</cite>
        {role ? `, ${role}` : null}
      </Text>
    </blockquote>
  );
}
