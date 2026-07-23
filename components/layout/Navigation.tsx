"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Link } from "@/components/primitives/Link";
import { cn } from "@/lib/cn";

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationProps {
  siteName: string;
  siteHref?: string;
  links: NavLink[];
  primaryActionLabel: string;
  primaryActionHref: string;
  className?: string;
}

// Product Blueprint Section 2: the nav is transparent over Hero and only
// gains its "materialized" hairline-border/background treatment once the
// visitor scrolls past it. No Hero component exists yet to measure (it's
// explicitly out of Sprint 4's scope), so this uses a small, generic
// scroll threshold as a stand-in until a real page assembles the two
// together — not a page-specific assumption, just a placeholder number.
const MATERIALIZE_SCROLL_THRESHOLD_PX = 8;

function isActiveHref(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  // Hash links (e.g. "/#selected-work") belong to the page they point
  // at, not to their own route — only compare the path portion.
  const [path = ""] = href.split("#");
  return path !== "" && pathname.startsWith(path);
}

/**
 * The project's only site navigation. Content-agnostic by design — site
 * name, links, and the primary action are all props (Product Blueprint
 * Section 4: components accept content as props, never hardcode it). No
 * real copy or real routes are wired in here; that happens whenever a
 * later sprint assembles an actual page around this component.
 *
 * Client component: current-page indication needs `usePathname()`, and
 * the scroll-triggered materialize state and mobile menu toggle both need
 * local state — exactly the two nav-related surfaces the EIP's state
 * management strategy (Section 6) already names as expected local state,
 * nothing beyond that.
 */
export function Navigation({
  siteName,
  siteHref = "/",
  links,
  primaryActionLabel,
  primaryActionHref,
  className,
}: NavigationProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMaterialized, setIsMaterialized] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleScroll() {
      setIsMaterialized(window.scrollY > MATERIALIZE_SCROLL_THRESHOLD_PX);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sprint 9: Escape closes the mobile menu and returns focus to the
  // button that opened it — the standard disclosure-widget keyboard
  // pattern (WAI-ARIA Authoring Practices). This is not a full focus
  // trap; the menu is a simple inline disclosure, not a modal, so a trap
  // isn't required — only a way to close it without a mouse and without
  // losing your place.
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <nav
      aria-label="Primary"
      className={cn(
        "top-0 z-elevated transition-colors duration-local ease-enter",
        // Never sticky and transparent at once (Product Blueprint Section
        // 2) — the nav scrolls away with the page until it materializes,
        // at which point it becomes sticky and gains its background.
        isMaterialized
          ? "sticky border-b border-ink/10 bg-surface"
          : "static border-b border-transparent bg-transparent",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-6 px-6 py-4">
        <Link
          href={siteHref}
          className="font-display text-lg font-semibold tracking-tight no-underline"
        >
          {siteName}
        </Link>

        <ul className="hidden items-center gap-6 tablet:flex">
          {links.map((link) => {
            const active = isActiveHref(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "no-underline",
                    active && "border-b-2 border-accent pb-1 text-accent",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          <Link href={primaryActionHref} className="hidden no-underline tablet:inline">
            {primaryActionLabel}
          </Link>

          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="rounded p-2 text-body font-medium text-ink tablet:hidden"
          >
            {isMobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {isMobileMenuOpen ? (
        <ul
          id="mobile-nav-menu"
          className="flex flex-col gap-4 border-t border-ink/10 px-6 py-4 tablet:hidden"
        >
          {links.map((link) => {
            const active = isActiveHref(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn("no-underline", active && "text-accent")}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href={primaryActionHref}
              onClick={() => setIsMobileMenuOpen(false)}
              className="no-underline"
            >
              {primaryActionLabel}
            </Link>
          </li>
        </ul>
      ) : null}
    </nav>
  );
}
