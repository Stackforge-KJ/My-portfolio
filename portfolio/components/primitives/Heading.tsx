import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type HeadingSize = "xl" | "2xl" | "3xl" | "4xl";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /** Semantic level (h1–h6) — always required, and never inferred from size. */
  level: HeadingLevel;
  /**
   * Visual size, decoupled from semantic level so document structure
   * (accessibility, SEO) never has to be bent to match a design's visual
   * hierarchy. Defaults to a sensible size per level if omitted.
   */
  size?: HeadingSize;
  children: ReactNode;
}

// See Text.tsx for why this is a literal lookup map, not a template string.
const SIZE_CLASSES: Record<HeadingSize, string> = {
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
};

const DEFAULT_SIZE_BY_LEVEL: Record<HeadingLevel, HeadingSize> = {
  1: "4xl",
  2: "3xl",
  3: "2xl",
  4: "xl",
  5: "xl",
  6: "xl",
};

/**
 * The project's only primitive for headings. Family (display serif),
 * weight (semibold), and letter-spacing (tight) are already applied
 * globally to every h1–h6 in app/globals.css — this component's job is
 * narrower: pick the right semantic tag and the right size from the
 * VDS's closed scale, nothing else.
 */
export function Heading({ level, size, className, children, ...props }: HeadingProps) {
  const Component = `h${level}` as const;
  const resolvedSize = size ?? DEFAULT_SIZE_BY_LEVEL[level];

  return (
    <Component className={cn(SIZE_CLASSES[resolvedSize], className)} {...props}>
      {children}
    </Component>
  );
}
