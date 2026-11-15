import { cache } from "react";
import { contentfulClient } from "@/lib/contentful";
import type { PageSkeleton } from "@/lib/content/types";
import { SITE_DESCRIPTION } from "@/lib/site";

export const getSiteDescription = cache(async (): Promise<string> => {
  try {
    const res = await contentfulClient.getEntries<PageSkeleton>({
      content_type: "page",
      limit: 1,
      select: ["sys", "fields.siteDescription"],
    });

    const description = res.items[0]?.fields.siteDescription as
      | string
      | undefined;
    return description?.trim() || SITE_DESCRIPTION;
  } catch (error) {
    console.error("Failed to fetch siteDescription from Contentful:", error);
    return SITE_DESCRIPTION;
  }
});
