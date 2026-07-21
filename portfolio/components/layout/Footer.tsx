import { Link } from "@/components/primitives/Link";
import { Text } from "@/components/primitives/Text";
import { cn } from "@/lib/cn";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterProps {
  copyrightHolder: string;
  links: FooterLink[];
  /** Placeholders only — no real platforms or URLs are assumed here. */
  socialLinks?: FooterLink[];
  className?: string;
}

/**
 * The project's only site footer. Content-agnostic — copyright holder
 * name, the link list, and social links are all props; nothing real is
 * hardcoded (Product Blueprint: "social link placeholders only").
 *
 * Footer links sit inside their own <nav aria-label="Footer">, distinct
 * from the primary Navigation's landmark, so assistive-technology users
 * can tell the two apart by name, not just by page position.
 */
export function Footer({ copyrightHolder, links, socialLinks, className }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className={cn("border-t border-ink/10 px-6 py-8", className)}>
      <div className="flex flex-col gap-6 tablet:flex-row tablet:items-center tablet:justify-between">
        <Text size="caption" muted>
          © {year} {copyrightHolder}. All rights reserved.
        </Text>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-caption">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {socialLinks && socialLinks.length > 0 ? (
          <ul className="flex gap-4">
            {socialLinks.map((social) => (
              <li key={social.href}>
                <Link href={social.href} className="text-caption">
                  {social.label}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </footer>
  );
}
