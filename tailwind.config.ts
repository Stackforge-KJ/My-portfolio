import type { Config } from "tailwindcss";

// Sprint 0 scope: Tailwind is initialized and wired into the build only.
// The VDS's actual design tokens (type scale, spacing scale, color roles,
// the single accent, motion durations) are deliberately NOT encoded here —
// per the EIP (Section 5), that token encoding is its own later sprint,
// not part of "project foundation."
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
