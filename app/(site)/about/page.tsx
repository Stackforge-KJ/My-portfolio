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

// Sprint 7 note, updated in Sprint 10: the intro and "What I'm building
// toward" now use the BOS's actual approved Manifesto (Section 1) and
// Vision (Section 3) text rather than paraphrase or invented career
// claims. "How I think" was already a faithful condensation of the BOS's
// approved Personal Philosophy (Section 4) since Sprint 7 and is
// unchanged. A "current focus" line that previously appeared here was
// removed — no documentation states what the site owner is actually
// working on right now, and inventing one would be exactly the kind of
// fabrication this sprint's rules forbid. The founder-ambition statement
// itself is present (from BOS Vision); the BOS's own two flagged
// placeholders (a specific founder-ambition memory, a specific brand-
// story memory) remain genuinely unresolved and are not fabricated here.
export default function AboutPage() {
  return (
    <main className="flex flex-col gap-12 px-6 py-16">
      <Heading level={1}>About</Heading>

      <Text size="lg">
        I believe building is an act of respect — for the user&rsquo;s time, for the
        problem&rsquo;s difficulty, and for the truth that most ideas are worthless until
        someone does the unglamorous work of shipping them.
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
            used by millions of people — not as a measure of ego, but because reaching
            that many people is the clearest evidence a product solved something real,
            well enough that adoption compounded on its own. I want to build an
            organization where engineering and product thinking are treated as one
            discipline, not two departments that negotiate with each other.
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
