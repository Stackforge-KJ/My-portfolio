import type { Metadata } from "next";
import { ContactPageCta } from "./_components/ContactPageCta";
import { Heading } from "@/components/primitives/Heading";
import { Link } from "@/components/primitives/Link";
import { ScrollReveal } from "@/components/primitives/ScrollReveal";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "The single, direct way to get in touch.",
  path: "/contact",
});

// The mailto address, LinkedIn URL, GitHub URL, and résumé path below are
// all placeholders — real values are Content Requirements deliverables
// (Content System Section 6) not yet produced. The mechanism itself
// (mailto, not a form) is real and matches PRD Section 9.5's primary
// contact method and the Product Blueprint's ContactActionBlock spec,
// which names a direct link as the primary path and a form only as a
// fallback "if a direct method proves insufficient" — no such gap has
// been identified, so no form was built.
export default function ContactPage() {
  return (
    <main className="flex flex-col gap-8 px-6 py-16">
      <Heading level={1}>Contact</Heading>

      <ContactPageCta
        heading="Let's talk"
        supportingText="The fastest way to reach me is directly by email. I try to reply within a few business days."
        ctaLabel="Email me"
        mailto="mailto:hello@example.com"
        secondaryLabel="Connect on LinkedIn"
        secondaryHref="https://www.linkedin.com/in/your-profile"
      />

      <ScrollReveal className="flex flex-wrap gap-4">
        <Link href="https://github.com/your-username">GitHub</Link>
        <Link href="/resume.pdf">Résumé (PDF)</Link>
      </ScrollReveal>
    </main>
  );
}
