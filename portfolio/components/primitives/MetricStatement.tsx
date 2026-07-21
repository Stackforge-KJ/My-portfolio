import { cn } from "@/lib/cn";

interface MetricStatementSingleProps {
  variant?: "single";
  label: string;
  value: string;
  className?: string;
}

interface MetricStatementBeforeAfterProps {
  variant: "before-after";
  label: string;
  before: string;
  after: string;
  className?: string;
}

// Exactly the two variants named in the Product Blueprint's Component
// Inventory (Section 4): "single number + label; before/after pair."
export type MetricStatementProps =
  MetricStatementSingleProps | MetricStatementBeforeAfterProps;

/**
 * The project's only metric primitive. Deliberately not extended with
 * generic HTML attribute passthrough or extra props — the Product
 * Blueprint specifies exactly two variants and nothing more, and this
 * component does not format, parse, or validate the value/before/after
 * strings it's given (no "additional functionality"); the caller supplies
 * already-formatted, already-sourced text (Content System Section 7,
 * Claims & Proof Matrix — the sourcing obligation lives with the content,
 * not this component).
 */
export function MetricStatement(props: MetricStatementProps) {
  const { label, className } = props;

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      {props.variant === "before-after" ? (
        <p className="font-display text-2xl font-semibold text-ink">
          <span className="text-ink-muted line-through">{props.before}</span>{" "}
          <span>{props.after}</span>
        </p>
      ) : (
        <p className="font-display text-2xl font-semibold text-ink">{props.value}</p>
      )}
      <p className="text-caption text-ink-muted">{label}</p>
    </div>
  );
}
