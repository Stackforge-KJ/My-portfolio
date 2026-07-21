import type { Config } from "tailwindcss";

// Sprint 1 scope: the VDS's tokens (Sections 2, 4, 5, 6, 10) are encoded
// here as the *only* values available to components — per the EIP's
// styling strategy (Section 5), a value outside this config should not
// exist as an option, not merely be discouraged by convention.
//
// Colors and radius/shadow scales below REPLACE Tailwind's defaults
// (`theme.colors`, not `theme.extend.colors`) rather than extending them.
// This is deliberate: leaving Tailwind's default 20+ color palette in
// place would mean "one accent color" is only a style-guide suggestion,
// not something the type system and editor autocomplete actually enforce.
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{mdx}",
  ],
  theme: {
    // Screens (EIP Section 19): the VDS's three named responsive contexts
    // — mobile is the unprefixed default, per Tailwind's mobile-first
    // convention. This REPLACES Tailwind's default sm/md/lg/xl/2xl
    // five-tier scale rather than adding to it, so a breakpoint outside
    // these three named contexts isn't available to reach for.
    screens: {
      tablet: "768px",
      desktop: "1280px",
    },
    // Spacing scale (VDS Section 4): intentionally NOT redefined.
    // Tailwind's default scale already is a single base unit (4px / 0.25rem)
    // multiplied consistently — which is exactly what the VDS asks for.
    // Defining a second, parallel spacing scale on top of it would create
    // the "two competing systems" problem the EIP explicitly warns against
    // (Section 3). The VDS's named steps (1x, 2–3x, 4–6x, 8–12x) map onto
    // Tailwind's existing 1, 2–3, 4–6, 8–12 out of the box.
    colors: {
      transparent: "transparent",
      current: "currentColor",
      surface: "rgb(var(--color-surface) / <alpha-value>)",
      "surface-secondary": "rgb(var(--color-surface-secondary) / <alpha-value>)",
      ink: "rgb(var(--color-ink) / <alpha-value>)",
      "ink-muted": "rgb(var(--color-ink-muted) / <alpha-value>)",
      accent: "rgb(var(--color-accent) / <alpha-value>)",
      "on-accent": "rgb(var(--color-on-accent) / <alpha-value>)",
      success: "rgb(var(--color-success) / <alpha-value>)",
      warning: "rgb(var(--color-warning) / <alpha-value>)",
      error: "rgb(var(--color-error) / <alpha-value>)",
    },
    // Type scale (VDS Section 2): a fixed modular scale (~1.25 ratio), each
    // size paired with its own line-height so a size can never be used
    // without the rhythm it was designed to keep.
    fontSize: {
      caption: ["0.8rem", { lineHeight: "1.5" }],
      body: ["1rem", { lineHeight: "1.6" }],
      lg: ["1.25rem", { lineHeight: "1.55" }],
      xl: ["1.5625rem", { lineHeight: "1.4" }],
      "2xl": ["1.953rem", { lineHeight: "1.3" }],
      "3xl": ["2.441rem", { lineHeight: "1.2" }],
      "4xl": ["3.052rem", { lineHeight: "1.1" }],
    },
    fontFamily: {
      // Neutral sans for interface/body; serif reserved for display
      // moments only (VDS Section 2). Both resolve through next/font
      // CSS variables set in the root layout — see lib/fonts.ts.
      body: ["var(--font-body)", "system-ui", "sans-serif"],
      display: ["var(--font-display)", "Georgia", "serif"],
      // Monospace uses the system stack directly — VDS Section 2 reserves
      // it for literal code only, which doesn't warrant a downloaded
      // webfont's cost for this project's scope.
      mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
    },
    // Surface & elevation (VDS Section 6): flat is the default; only ONE
    // elevated state exists, for the narrow case of something genuinely
    // floating above the page (a menu, a modal). No decorative shadow
    // scale is available to reach for instead.
    boxShadow: {
      none: "none",
      floating: "0 4px 16px -4px rgb(0 0 0 / 0.12)",
    },
    // Anti-pattern guard (VDS Section 13, "random border radii"): exactly
    // one non-zero radius exists project-wide, plus `full` for genuinely
    // circular elements (an avatar, a dot indicator).
    borderRadius: {
      none: "0",
      DEFAULT: "0.5rem",
      full: "9999px",
    },
    // Font weight (VDS Section 2: "no more than two or three font weights
    // in the entire system"). These three names are the only weights
    // lib/fonts.ts actually loads — the scale and the download match
    // exactly, so reaching for a weight this config doesn't offer isn't
    // just discouraged, it silently falls back to the nearest one that
    // exists rather than downloading a fourth file no one decided to add.
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
    },
    // Letter spacing (VDS Section 2: "tight letter-spacing" for display
    // type only — body text keeps its natural spacing).
    letterSpacing: {
      normal: "0",
      tight: "-0.02em",
    },
    extend: {
      // Motion durations (VDS Section 10 / EIP Section 7): the exact
      // figures from both governing documents, not re-derived here.
      transitionDuration: {
        local: "200ms", // 150–250ms range, local interactions
        transitional: "350ms", // 300–400ms range, page/section transitions
      },
      // Easing (VDS Section 10): ease-out on every entrance, ease-in on
      // every exit — named and valued to match lib/tokens.ts's EASING
      // object exactly (enter/exit), so a JS-driven animation and a
      // Tailwind class never disagree about which curve "entrance" means.
      // No elastic/bounce curve is defined anywhere in this file; the VDS
      // forbids them, so they're not offered as an option to reach for.
      transitionTimingFunction: {
        enter: "ease-out",
        exit: "ease-in",
      },
      // Z-index (VDS Section 6: layering depth tops out at two levels —
      // the page, and the one thing temporarily floating above it). Two
      // values exist because the VDS says two levels, not because more
      // weren't thought of.
      zIndex: {
        base: "0",
        elevated: "50",
      },
    },
  },
  plugins: [],
};

export default config;
