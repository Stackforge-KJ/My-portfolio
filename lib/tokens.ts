// Re-exports the VDS's motion figures (Section 10) and EIP's Section 7 for
// use anywhere Tailwind's classes don't reach — e.g. a JS-driven
// IntersectionObserver reveal, or a setTimeout matching a CSS transition's
// duration. Tailwind's `duration-local` / `duration-transitional` classes
// (tailwind.config.ts) and these constants must always agree; if one
// changes, the other is updated in the same commit.

export const MOTION_DURATION_MS = {
  /** Hover, focus, small local interactions. 150–250ms range, VDS Section 10. */
  local: 200,
  /** Page or section-level transitions. 300–400ms range, VDS Section 10. */
  transitional: 350,
} as const;

export const EASING = {
  /** Applied to every entrance, per VDS Section 10 — never elastic/bounce. */
  enter: "ease-out",
  /** Applied to every exit, per VDS Section 10 — never elastic/bounce. */
  exit: "ease-in",
} as const;

/**
 * The single base spacing unit in pixels (VDS Section 4), for the rare
 * case a spacing-derived value is needed in JS rather than a Tailwind
 * class (e.g. calculating a scroll offset). Prefer Tailwind's spacing
 * scale directly wherever a class can express the value instead.
 */
export const SPACING_BASE_PX = 4;

/**
 * VDS Section 13's anti-pattern rule against "random border radii" in one
 * number: this is the only non-zero radius that exists anywhere in the
 * system. Mirrors tailwind.config.ts's `borderRadius.DEFAULT` — needed in
 * JS for cases like a canvas-drawn element that can't use a CSS class.
 */
export const RADIUS_PX = 8;

/**
 * VDS Section 6: layering tops out at two levels, the page and the one
 * thing temporarily floating above it. Mirrors tailwind.config.ts's
 * `zIndex` scale.
 */
export const Z_INDEX = {
  base: 0,
  elevated: 50,
} as const;

/**
 * VDS Section 11 / EIP Section 19: the three named responsive contexts,
 * not Tailwind's unexamined five-tier default. Mirrors
 * tailwind.config.ts's `screens` — needed in JS for any `matchMedia`
 * check that has to agree with what a Tailwind breakpoint class means.
 */
export const BREAKPOINT_PX = {
  tablet: 768,
  desktop: 1280,
} as const;
