import type { Metadata } from "next";
import { HomeContactCta } from "./_components/HomeContactCta";
import { Card } from "@/components/composed/Card";
import { TimelineEntry } from "@/components/composed/TimelineEntry";
import { Hero } from "@/components/layout/Hero";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Badge } from "@/components/primitives/Badge";
import { Heading } from "@/components/primitives/Heading";
import { Link } from "@/components/primitives/Link";
import { Text } from "@/components/primitives/Text";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Home",
  description:
    "Full-stack engineer building toward founder — selected work, experience, and how to get in touch.",
  path: "/",
});

// Every string below is placeholder/example content. Real copy is the
// Content System's job (Sections 2–4) and hasn't been produced yet — the
// Hero's title and subtitle are the one exception, reusing the BOS's
// already-approved anchor line and mission statement verbatim/paraphrased
// rather than inventing new marketing copy. Everything else here exists
// to prove the Product Blueprint's Home section inventory assembles
// correctly against real components and real tokens, not to be final.
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

const SKILLS = ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL"];

export default function HomePage() {
  return (
    <main>
      <Hero
        title="Software is judgment, not just code."
        subtitle="I build software products with the rigor of an engineer and the judgment of a founder — and I'm making that combination visible through the work itself."
      />

      <section className="flex flex-col gap-4 px-6 py-12">
        <Text size="lg">
          I&rsquo;m a full-stack engineer who likes taking a product from a rough idea to
          something real people use — and I&rsquo;m building toward leading a company that
          does the same at scale.
        </Text>
        <Link href="/about">More about me</Link>
      </section>

      <section id="selected-work" className="flex flex-col gap-8 px-6 py-12">
        <SectionHeader title="Selected work" />
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
      </section>

      <section className="flex flex-col gap-8 px-6 py-12">
        <SectionHeader title="Experience" />
        <ol className="flex flex-col gap-8">
          {EXPERIENCE.map((entry) => (
            <TimelineEntry key={entry.organization} {...entry} />
          ))}
        </ol>
      </section>

      <section className="flex flex-col gap-8 px-6 py-12">
        <SectionHeader title="Skills" />
        <ul className="flex flex-wrap gap-3">
          {SKILLS.map((skill) => (
            <li key={skill}>
              <Badge>{skill}</Badge>
            </li>
          ))}
        </ul>
      </section>

      <section className="px-6 py-12">
        <HomeContactCta
          heading="Let's talk"
          supportingText="If you're building something ambitious and think I could help, I'd like to hear about it."
          ctaLabel="Get in touch"
          secondaryLabel="Connect on LinkedIn"
          secondaryHref="https://www.linkedin.com/in/your-profile"
        />
      </section>
    </main>
  );
}
