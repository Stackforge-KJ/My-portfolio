import { Inter } from "next/font/google";

// Sprint 0 scope: this wires up next/font's self-hosting and CSS-variable
// mechanism (per EIP Section 9) so later sprints only need to swap the
// imported typeface — not build the font pipeline from scratch.
//
// Inter is a placeholder. The VDS (Section 2) specifies the *characteristics*
// of the real typefaces (a neutral sans for interface/body, a serif for
// display moments) but not a final named typeface — that selection and its
// swap into this file happens in a later, dedicated sprint.
export const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
