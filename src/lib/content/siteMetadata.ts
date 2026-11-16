import { cache } from "react";
import { contentfulClient } from "@/lib/contentful";
import type { PageSkeleton } from "@/lib/content/types";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/site";

export interface SiteMetadata {
  title: string;
  description: string;
}

export const getSiteMetadata = cache(async (): Promise<SiteMetadata> => {
  try {
    const res = await contentfulClient.getEntries<PageSkeleton>({
      content_type: "page",
      limit: 1,
      select: ["sys", "fields.siteTitle", "fields.siteDescription"],
    });

    const f = res.items[0]?.fields;
    const title = f?.siteTitle as string | undefined;
    const description = f?.siteDescription as string | undefined;
    return {
      title: title?.trim() || SITE_TITLE,
      description: description?.trim() || SITE_DESCRIPTION,
    };
  } catch (error) {
    console.error("Failed to fetch site metadata from Contentful:", error);
    return { title: SITE_TITLE, description: SITE_DESCRIPTION };
  }
});
