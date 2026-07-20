import type { Metadata } from "next";

// Sprint 0 scope: establishes the *architecture* for metadata (a single
// shared helper every page's metadata export goes through) per EIP Section
// 12. It does not contain real site copy — titles/descriptions below are
// structural placeholders until the Content System's approved copy exists.

const SITE_NAME = "Portfolio — Sprint 0 placeholder";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function buildMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const url = new URL(path, SITE_URL).toString();

  return {
    title: `${title} · ${SITE_NAME}`,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
