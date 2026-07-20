import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type TextSize = "caption" | "body" | "lg";
type TextWeight = "normal" | "medium";

export interface TextProps extends HTMLAttributes<HTMLElement> {
  /** Underlying element. Defaults to <p> — override for <span>, <li>, etc. */
  as?: ElementType;
  size?: TextSize;
  weight?: TextWeight;
  /** Uses the VDS's one muted-ink token instead of the default ink color. */
  muted?: boolean;
  children: ReactNode;
}

// Full literal class strings in a lookup map, never a template-literal
// concatenation like `text-${size}` — Tailwind's build-time scanner only
// detects class names that appear verbatim in source, so a dynamically
// assembled string would silently fail to generate the CSS.
const SIZE_CLASSES: Record<TextSize, string> = {
  caption: "text-caption",
  body: "text-body",
  lg: "text-lg",
};

const WEIGHT_CLASSES: Record<TextWeight, string> = {
  normal: "font-normal",
  medium: "font-medium",
};

/**
 * The project's only primitive for running body copy. Every size and
 * weight it can render traces to the VDS's closed type scale
 * (tailwind.config.ts) — there is no escape hatch to an arbitrary size.
 */
export function Text({
  as: Component = "p",
  size = "body",
  weight = "normal",
  muted = false,
  className,
  children,
  ...props
}: TextProps) {
  return (
    <Component
      className={cn(
        "font-body",
        SIZE_CLASSES[size],
        WEIGHT_CLASSES[weight],
        muted ? "text-ink-muted" : "text-ink",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
