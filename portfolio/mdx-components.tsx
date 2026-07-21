import type { MDXComponents } from "mdx/types";

// Required by Next.js App Router MDX support. Sprint 0 scope: an empty
// override map, proving MDX rendering works. Real component overrides
// (mapping markdown elements to the VDS-styled primitives) are added once
// those primitives exist, in a later sprint.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
