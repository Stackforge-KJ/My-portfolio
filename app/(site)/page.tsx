import type { Metadata } from "next";
import { HomeContactCta } from "./_components/HomeContactCta";
import { Card } from "@/components/composed/Card";
import { TimelineEntry } from "@/components/composed/TimelineEntry";
import { Hero } from "@/components/layout/Hero";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Badge } from "@/components/primitives/Badge";
import { Heading } from "@/components/primitives/Heading";
import { Link } from "@/components/primitives/Link";
import { ScrollReveal } from "@/components/primitives/ScrollReveal";
import { Text } from "@/components/primitives/Text";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Home",
  description:
    "Full-stack engineer building toward founder — selected work, experience, and how to get in touch.",
  path: "/",
});

// Sprint 6 note, updated in Sprint 10: most strings below are still
// placeholder/example content — real project names, employment history,
// and contact details don't exist in any governing document and were
// never provided, so none were invented (Sprint 10's explicit rule).
// Three exceptions are real: the Hero's title and subtitle (the BOS's
// approved anchor line and Mission statement) and the Skills list
// (this project's own actual, verifiable stack).
const SELECTED_WORK = [
  {
    title: "Example project one",
    summary: "A one-sentence problem statement for the first flagship case study.",
    href: "/work/example-project-one",
  },
  {
    title: "Example project two",
    summary: "A one-sentence problem statement for the second flagship case study.",
    href: "/work/example-project-two",
  },
  {
    title: "Example project three",
    summary: "A one-sentence problem statement for the third flagship case study.",
    href: "/work/example-project-three",
  },
];

const EXPERIENCE = [
  {
    organization: "Example Company",
    role: "Senior Software Engineer",
    duration: "2022 — Present",
    description: "A one-sentence description of scope and impact in this role.",
  },
  {
    organization: "Previous Company",
    role: "Software Engineer",
    duration: "2019 — 2022",
    description: "A one-sentence description of scope and impact in this role.",
  },
];

// Sprint 10 content audit: this list is limited to technologies that are
// objectively true of this project itself (its own stack), not a claim
// about the site owner's full professional skill set, which no
// documentation has ever specified. Node.js and PostgreSQL were removed
// here — nothing in this project touches a backend or a database, so
// listing them would have been fabrication, not placeholder.
const SKILLS = ["TypeScript", "React", "Next.js", "Tailwind CSS"];

export default function HomePage() {
  return (
    <main>
      <Hero
        title="Software is judgment, not just code."
        subtitle="I build software products with the rigor of an engineer and the judgment of a founder, and I make that combination visible through the work itself — not through claims about it."
      />

      <section className="flex flex-col gap-4 px-6 py-12">
        <ScrollReveal className="flex flex-col gap-4">
          <Text size="lg">
            I&rsquo;m a full-stack engineer who likes taking a product from a rough idea
            to something real people use — and I&rsquo;m building toward leading a company
            that does the same at scale.
          </Text>
          <Link href="/about">More about me</Link>
        </ScrollReveal>
      </section>

      <section
        id="selected-work"
        aria-labelledby="selected-work-heading"
        className="flex flex-col gap-8 px-6 py-12"
      >
        <ScrollReveal className="flex flex-col gap-8">
          <SectionHeader id="selected-work-heading" title="Selected work" />
          <div className="grid grid-cols-1 gap-6 tablet:grid-cols-3">
            {SELECTED_WORK.map((project) => (
              <Card key={project.href} href={project.href}>
                <Heading level={3} size="xl">
                  {project.title}
                </Heading>
                <Text size="body" muted className="mt-2">
                  {project.summary}
                </Text>
              </Card>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section
        aria-labelledby="experience-heading"
        className="flex flex-col gap-8 px-6 py-12"
      >
        <ScrollReveal className="flex flex-col gap-8">
          <SectionHeader id="experience-heading" title="Experience" />
          <ol className="flex flex-col gap-8">
            {EXPERIENCE.map((entry) => (
              <TimelineEntry key={entry.organization} {...entry} headingLevel={3} />
            ))}
          </ol>
        </ScrollReveal>
      </section>

      <section
        aria-labelledby="skills-heading"
        className="flex flex-col gap-8 px-6 py-12"
      >
        <ScrollReveal className="flex flex-col gap-8">
          <SectionHeader id="skills-heading" title="Skills" />
          <ul className="flex flex-wrap gap-3">
            {SKILLS.map((skill) => (
              <li key={skill}>
                <Badge>{skill}</Badge>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </section>

      <section className="px-6 py-12">
        <ScrollReveal>
          <HomeContactCta
            heading="Let's talk"
            supportingText="If you're building something ambitious and think I could help, I'd like to hear about it."
            ctaLabel="Get in touch"
            secondaryLabel="Connect on LinkedIn"
            secondaryHref="https://www.linkedin.com/in/your-profile"
          />
        </ScrollReveal>
      </section>
    </main>
  );
}
