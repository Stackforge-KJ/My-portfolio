import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge only knows how to resolve conflicts between Tailwind's
 * DEFAULT class names out of the box. Sprint 1 replaced several of those
 * scales entirely with closed, VDS-specific names (fontSize, colors,
 * fontWeight, borderRadius — see tailwind.config.ts) rather than
 * Tailwind's stock ones. Without this extension, twMerge wouldn't know
 * that `text-body` and `text-caption` are two values of the same
 * "pick one" font-size group, and would incorrectly keep both instead of
 * letting the later one win — silently breaking the one thing this
 * helper exists to do.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-caption",
        "text-body",
        "text-lg",
        "text-xl",
        "text-2xl",
        "text-3xl",
        "text-4xl",
      ],
      "font-weight": ["font-normal", "font-medium", "font-semibold"],
      "text-color": [
        "text-ink",
        "text-ink-muted",
        "text-surface",
        "text-surface-secondary",
        "text-accent",
        "text-on-accent",
        "text-success",
        "text-warning",
        "text-error",
      ],
      "background-color": [
        "bg-surface",
        "bg-surface-secondary",
        "bg-ink",
        "bg-ink-muted",
        "bg-accent",
        "bg-on-accent",
        "bg-success",
        "bg-warning",
        "bg-error",
      ],
      rounded: ["rounded-none", "rounded", "rounded-full"],
    },
  },
});

/**
 * The project's single class-merging helper. clsx handles conditional
 * joining (`cn("a", isActive && "b")`); the extended twMerge above
 * resolves conflicting Tailwind classes so a consumer overriding a
 * primitive's `className` (e.g. passing a different text size) doesn't
 * end up with two font sizes or two colors applied at once.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
