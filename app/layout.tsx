import type { Metadata } from "next";
import { bodyFont } from "@/lib/fonts";
import { buildMetadata } from "@/lib/metadata";
import "./globals.css";

// Sprint 0 scope: root layout exists only to prove the wiring (font,
// metadata, global stylesheet) works end-to-end. Navigation and footer
// (per the Product Blueprint's layout components) are added in the sprint
// that implements those components — not here.

export const metadata: Metadata = buildMetadata({
  title: "Home",
  description: "Sprint 0 project foundation — no content yet.",
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bodyFont.variable}>
      <body>{children}</body>
    </html>
  );
}
