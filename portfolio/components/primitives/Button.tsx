import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

// Exactly the two variants named in the Product Blueprint's Component
// Inventory (Section 4) — primary (accent-filled, one per screen max) and
// secondary. No third variant is invented here.
type ButtonVariant = "primary" | "secondary";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Required, not defaulted: the VDS's one-accent-per-viewport rule means
   * "primary vs secondary" is a real design decision every call site has
   * to make consciously, not something this primitive should guess at.
   */
  variant: ButtonVariant;
  children: ReactNode;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "bg-accent text-on-accent hover:bg-accent/90 active:bg-accent/80",
  secondary: "border border-ink/20 text-ink hover:border-ink/40 active:border-ink/60",
};

/**
 * The project's only button primitive. Renders a native <button> only —
 * per the Product Blueprint, routing/navigation is the Link primitive's
 * job, not this one's, so there is no `href` escape hatch here.
 *
 * No icon slot, no loading-spinner state, no size variant: none of these
 * are specified by the Product Blueprint, so none are invented.
 */
export function Button({
  variant,
  className,
  disabled,
  type = "button",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      aria-disabled={disabled || undefined}
      className={cn(
        // Layout: flex centering, comfortable horizontal padding, and a
        // minimum height of 44px (Tailwind's default `11` spacing step,
        // not an arbitrary value) — the standard minimum touch target
        // size, satisfying the VDS/EIP accessibility requirement.
        "inline-flex min-h-11 items-center justify-center gap-2 rounded px-4",
        "font-body text-body font-medium",
        // Global :focus-visible styling (app/globals.css) already applies
        // to every focusable element, including this one — no focus ring
        // is redefined here, so there is exactly one place that rule lives.
        "transition-colors duration-local ease-enter",
        VARIANT_CLASSES[variant],
        disabled && "cursor-not-allowed opacity-50",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
