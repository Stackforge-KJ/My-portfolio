import type { Metadata } from "next";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Heading } from "@/components/primitives/Heading";
import { Link } from "@/components/primitives/Link";
import { ScrollReveal } from "@/components/primitives/ScrollReveal";
import { Text } from "@/components/primitives/Text";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: "How I think, what I'm building toward, and how to reach me.",
  path: "/about",
});

// As with Home, most of the copy below is placeholder pending real
// Content System deliverables (Section 4's Founder Story Framework in
// particular — the BOS's own founder-ambition and brand-story
// placeholders are still unresolved). Two exceptions: the "How I think"
// paragraph condenses the BOS's already-approved Personal Philosophy
// (Section 4), and the ambition paragraph paraphrases the BOS's already-
// approved Vision (Section 3) — both real, locked content, not invented
// for this page.
export default function AboutPage() {
  return (
    <main className="flex flex-col gap-12 px-6 py-16">
      <Heading level={1}>About</Heading>

      <Text size="lg">
        I&rsquo;ve spent my career moving from curiosity about how software works toward
        taking full ownership of products end to end. These days I care less about any one
        language or framework and more about whether what I ship actually solves the
        problem it was meant to.
      </Text>

      <section aria-labelledby="how-i-think-heading" className="flex flex-col gap-4">
        <ScrollReveal className="flex flex-col gap-4">
          <SectionHeader id="how-i-think-heading" title="How I think" />
          <Text size="body">
            I default to first principles over precedent, and I narrow scope aggressively
            before I narrow effort. Most architecture decisions I treat as reversible bets
            — I&rsquo;d rather ship something simple I can change in a week than something
            clever I can&rsquo;t change at all. For anything that isn&rsquo;t reversible,
            I slow down and actively look for disagreement before committing.
          </Text>
        </ScrollReveal>
      </section>

      <section aria-labelledby="building-toward-heading" className="flex flex-col gap-4">
        <ScrollReveal className="flex flex-col gap-4">
          <SectionHeader id="building-toward-heading" title="What I'm building toward" />
          <Text size="body">
            Long-term, I want to found and lead a technology company whose products are
            used by millions of people — not as a vanity metric, but because reaching that
            many people is the clearest evidence a product solved something real.
          </Text>
          <Text size="body" muted>
            Right now, I&rsquo;m focused on shipping the case studies on this site and
            sharpening how I explain technical decisions to non-technical audiences.
          </Text>
        </ScrollReveal>
      </section>

      <ScrollReveal className="flex flex-col gap-4">
        <Text size="body">
          The best way to see how I think in practice is through the work itself.
        </Text>

        <div className="flex flex-wrap gap-4">
          <Link href="/#selected-work">See selected work</Link>
          <Link href="/resume.pdf">Download my résumé (PDF)</Link>
        </div>
      </ScrollReveal>
    </main>
  );
}
