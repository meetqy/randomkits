import createMDX from "@next/mdx";
import javascript from "highlight.js/lib/languages/javascript";
import shell from "highlight.js/lib/languages/shell";
import typescript from "highlight.js/lib/languages/typescript";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

/** @type {import("next").NextConfig} */
const nextConfig = {
  crossOrigin: "anonymous",
  images: {
    domains: ["*.github.com"],
  },
  reactStrictMode: true,

  /** Enables hot reloading for local packages without a build step */
  transpilePackages: [
    "next-mdx-remote",
    "@randomkits/ui",
    "@randomkits/utils",
    "@randomkits/genshin-impact-character",
  ],

  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [rehypeHighlight, { languages: { javascript, typescript, shell } }],
    ],
  },
});

export default withMDX(nextConfig);
