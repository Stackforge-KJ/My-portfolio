import type { ReactNode } from "react";
import { QuoteBlock, type QuoteBlockProps } from "@/components/composed/QuoteBlock";
import { Heading } from "@/components/primitives/Heading";
import { Link } from "@/components/primitives/Link";
import {
  MetricStatement,
  type MetricStatementProps,
} from "@/components/primitives/MetricStatement";
import { Text } from "@/components/primitives/Text";
import { cn } from "@/lib/cn";

interface CaseStudyExternalLink {
  label: string;
  href: string;
}

export interface CaseStudyLayoutProps {
  title: string;
  /** One or two sentences stating the human problem — Content System
   *  Section 5: "if a non-technical friend read only this sentence,
   *  would they understand what was at stake?" */
  openingFrame: string;
  /** Context, constraints, AND the owner's stated role/scope of
   *  ownership — PRD Section 9.3 says this belongs here, not as its own
   *  section. */
  context: string;
  /** The longest beat: the reasoning behind key decisions. */
  decisionNarrative: string;
  /**
   * Optional diagram slot, rendered inside the decision narrative, where
   * the reader needs it to follow the reasoning. Deliberately a ReactNode
   * the caller supplies (an <Image>, an inline SVG) rather than this
   * component owning an image pipeline it would have to guess the src/
   * dimensions/alt text for — no real diagrams exist yet to build that
   * against.
   */
  diagram?: ReactNode;
  /** The single tradeoff confession — rendered via QuoteBlock (Sprint 3),
   *  per the Product Blueprint's explicit reuse of that component for
   *  this purpose rather than a new, near-duplicate one. */
  tradeoff: QuoteBlockProps;
  /** One or more quantified outcomes, held until after the reasoning
   *  that produced them. */
  metrics: MetricStatementProps[];
  /** Short, genuinely self-critical closing paragraph. */
  reflection: string;
  /** Quiet close — a link back to Selected Work or forward to Contact,
   *  never a forced mid-narrative CTA. */
  exitLabel: string;
  exitHref: string;
  /** PRD Section 9.3: "links to live product and/or public code where
   *  appropriate." Both optional and independent of each other. */
  liveLink?: CaseStudyExternalLink;
  repoLink?: CaseStudyExternalLink;
  className?: string;
}

/**
 * The project's only case study structural shell. Product Blueprint
 * Section 5 / Content System Section 5: the same seven-beat sequence,
 * in this fixed order, for every project — no per-project structural
 * variation. This is a single component, not seven separate sub-
 * components, because most beats are a single styled paragraph; splitting
 * them into their own files would be the "speculative abstraction" this
 * sprint was explicitly told to avoid, not better architecture.
 *
 * Deliberately has no visible section headings between beats beyond the
 * one <h1> title — see the explanation given before this file was
 * written.
 */
export function CaseStudyLayout({
  title,
  openingFrame,
  context,
  decisionNarrative,
  diagram,
  tradeoff,
  metrics,
  reflection,
  exitLabel,
  exitHref,
  liveLink,
  repoLink,
  className,
}: CaseStudyLayoutProps) {
  return (
    <article className={cn("flex flex-col gap-12", className)}>
      <header className="flex flex-col gap-4">
        <Heading level={1} size="4xl">
          {title}
        </Heading>

        {/* Opening frame: given room to breathe — no logo, metric, or
            diagram yet, per the Content System's writing framework. */}
        <Text size="lg" muted>
          {openingFrame}
        </Text>

        {liveLink || repoLink ? (
          <div className="flex gap-4">
            {liveLink ? <Link href={liveLink.href}>{liveLink.label}</Link> : null}
            {repoLink ? <Link href={repoLink.href}>{repoLink.label}</Link> : null}
          </div>
        ) : null}
      </header>

      {/* Context and constraints, including the owner's role/scope of
          ownership (PRD Section 9.3) — not a separate section. */}
      <Text size="body">{context}</Text>

      {/* Decision narrative — the longest beat; the diagram, if any, sits
          exactly where the reader needs it to follow the reasoning. */}
      <div className="flex flex-col gap-6">
        <Text size="body">{decisionNarrative}</Text>
        {diagram}
      </div>

      {/* Tradeoff confession — visually isolated via QuoteBlock; its own
          blockquote semantics already mark it, no heading needed. */}
      <QuoteBlock {...tradeoff} />

      {/* Metrics reveal — held until after the reasoning that produced
          them. */}
      {metrics.length > 0 ? (
        <div className="flex flex-wrap gap-8">
          {metrics.map((metric) => (
            <MetricStatement key={metric.label} {...metric} />
          ))}
        </div>
      ) : null}

      {/* Reflection — short, self-critical, no summarizing flourish. */}
      <Text size="body">{reflection}</Text>

      {/* Exit — a quiet close. */}
      <Link href={exitHref}>{exitLabel}</Link>
    </article>
  );
}
