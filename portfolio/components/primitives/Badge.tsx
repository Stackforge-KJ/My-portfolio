import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

/**
 * The project's only badge/tag primitive. Product Blueprint Component
 * Inventory: "single style only — no color-coding by category, consistent
 * with the VDS's one-accent rule." Accordingly, there is no `variant`
 * prop here at all — one visual treatment, full stop.
 *
 * Renders a <span> with no interactive semantics (no onClick handled,
 * no tabIndex) — "static, non-interactive by default" per the Blueprint.
 */
export function Badge({ className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded px-3 py-1",
        "bg-surface-secondary font-body text-caption font-medium text-ink-muted",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
