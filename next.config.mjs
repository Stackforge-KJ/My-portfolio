import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // .md/.mdx files can be treated as pages/components in the App Router.
  pageExtensions: ["ts", "tsx", "mdx"],

  // Image domains / remote patterns are intentionally left empty for Sprint 0.
  // Real project screenshots and diagrams are added in a later sprint per
  // the VDS's imagery guidance (Section 8) and PRD's performance targets.
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

const withMDX = createMDX({
  // Remark/rehype plugins are intentionally deferred — Sprint 0 configures
  // MDX support only, not the authoring pipeline for real case studies.
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
