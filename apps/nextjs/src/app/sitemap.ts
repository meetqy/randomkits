import type { MetadataRoute } from "next";

import { slugify } from "@randomkits/utils";

import { kits, siteConfig } from "~/config/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  return kits.map((item) => ({
    url: `${siteConfig.site}/kit/${slugify(item, { lower: true })}`,
  }));
}
