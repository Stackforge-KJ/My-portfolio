import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

// Sprint 0 placeholder route. Real structure per the Product Blueprint's
// About Page Blueprint (Section 3) and the Content System (Section 3) is
// implemented in a later sprint.
export const metadata: Metadata = buildMetadata({
  title: "About",
  description: "Sprint 0 project foundation — no content yet.",
  path: "/about",
});

export default function AboutPage() {
  return <p>About — Sprint 0 placeholder.</p>;
}
