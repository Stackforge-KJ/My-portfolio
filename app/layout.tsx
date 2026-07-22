import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import { bodyFont, displayFont } from "@/lib/fonts";
import { buildMetadata } from "@/lib/metadata";
import "./globals.css";

// Sprint 6: Navigation and Footer (Sprint 4) are wired in here rather
// than per-page, since they're global chrome every route needs — the
// only architecturally correct place for them is the root layout, not a
// duplicated import in each page.tsx. This is additive: About, Contact,
// and the Work placeholder pages are untouched and still render their
// own Sprint 0 placeholder content inside this shell.
//
// Link labels/targets and site name are placeholder, matching Home's own
// placeholder copy — real values are a Content System deliverable not
// yet produced.
const NAV_LINKS = [
  { label: "Work", href: "/#selected-work" },
  { label: "About", href: "/about" },
];

const FOOTER_LINKS = [
  { label: "Work", href: "/#selected-work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const metadata: Metadata = buildMetadata({
  title: "Home",
  description: "Sprint 1 design system foundation — no content yet.",
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body>
        <Navigation
          siteName="Portfolio"
          links={NAV_LINKS}
          primaryActionLabel="Contact"
          primaryActionHref="/contact"
        />
        {children}
        <Footer copyrightHolder="Portfolio" links={FOOTER_LINKS} />
      </body>
    </html>
  );
}
