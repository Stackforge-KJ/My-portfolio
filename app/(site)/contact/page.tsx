import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

// Sprint 0 placeholder route. The primary contact action and its states
// (Product Blueprint Section 4, Interaction Inventory Section 7) are
// implemented in a later sprint.
export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Sprint 0 project foundation — no content yet.",
  path: "/contact",
});

export default function ContactPage() {
  return <p>Contact — Sprint 0 placeholder.</p>;
}
