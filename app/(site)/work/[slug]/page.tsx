import type { Metadata } from "next";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { buildMetadata } from "@/lib/metadata";

// Sprint 0 placeholder route. Real case studies live as MDX files under
// content/case-studies (none exist yet — see Content System Section 9,
// Week 2). The seven-beat CaseStudyLayout (Product Blueprint Section 5)
// is implemented in a later sprint; this file only proves the dynamic
// route itself resolves.

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

// No case studies exist yet, so there are no static params to generate.
// This will be populated from content/case-studies once real projects
// are written, per the Content System's production roadmap.
export function generateStaticParams() {
  return [];
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;

  return buildMetadata({
    title: `Case study: ${slug}`,
    description: "Sprint 0 project foundation — no content yet.",
    path: `/work/${slug}`,
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;

  return (
    <main className="flex flex-col gap-4 px-6 py-16">
      <Heading level={1}>Case study</Heading>
      <Text size="body" muted>
        Case study &ldquo;{slug}&rdquo; — Sprint 0 placeholder.
      </Text>
    </main>
  );
}
