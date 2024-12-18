import createMDX from "@next/mdx";

import type { NextConfig } from "next";

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

const nextConfig: NextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  /* config options here */
};

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
