import NextLink from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}

type HrefKind = "internal" | "external" | "other";

// "Other" covers mailto:, tel:, and anything else that isn't a routable
// internal path or a browsable external URL — those shouldn't get
// target="_blank" (opening a mail client in a new tab makes no sense).
function getHrefKind(href: string): HrefKind {
  if (href.startsWith("/") || href.startsWith("#")) return "internal";
  if (href.startsWith("http://") || href.startsWith("https://")) return "external";
  return "other";
}

/**
 * The project's only link primitive. Internal hrefs render through
 * next/link (client-side navigation); external hrefs get a real new-tab
 * anchor with the correct security attributes; everything else (mailto:,
 * tel:) renders as a plain same-tab anchor. No app-specific routing logic
 * lives here — only generic internal/external detection, per the Product
 * Blueprint's spec for this component.
 */
export function Link({ href, className, children, ...props }: LinkProps) {
  const kind = getHrefKind(href);
  const sharedClassName = cn("text-ink underline-offset-2 hover:underline", className);

  if (kind === "internal") {
    return (
      <NextLink href={href} className={sharedClassName} {...props}>
        {children}
      </NextLink>
    );
  }

  if (kind === "external") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={sharedClassName}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <a href={href} className={sharedClassName} {...props}>
      {children}
    </a>
  );
}
