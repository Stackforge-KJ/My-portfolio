import { Inter, Source_Serif_4 } from "next/font/google";

// Sprint 1 scope: wires up next/font's self-hosting and CSS-variable
// mechanism (EIP Section 9) for both typefaces the VDS specifies
// (Section 2) — a neutral sans for interface/body, and a serif reserved
// for display moments only (hero statements, section titles).
//
// Weight budget: the VDS caps the ENTIRE system at two or three font
// weights, full stop (Section 2). Body carries two (regular, medium);
// display carries exactly one (semibold), since it only ever appears at
// large sizes where a single confident weight is enough. That's three
// weights, total, site-wide — not three per typeface.
export const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500"],
});

export const displayFont = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600"],
});
