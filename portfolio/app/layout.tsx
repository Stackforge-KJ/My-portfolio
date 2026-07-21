import type { Metadata } from "next";
import { bodyFont, displayFont } from "@/lib/fonts";
import { buildMetadata } from "@/lib/metadata";
import "./globals.css";

// Sprint 1 scope: this proves the font and metadata wiring works end to
// end against the VDS's actual token infrastructure. Navigation and
// Footer are real components (Product Blueprint Section 4) and belong to
// the sprint that implements layout components — not this one.

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
      <body>{children}</body>
    </html>
  );
}
