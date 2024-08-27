import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

/** @type {import("next").NextConfig} */
const nextConfig = {
  crossOrigin: "anonymous",
  images: {
    domains: ["*.github.com"],
  },
  reactStrictMode: true,

  /** Enables hot reloading for local packages without a build step */
  transpilePackages: ["@randomkits/ui", "next-mdx-remote", "@randomkits/utils"],

  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
