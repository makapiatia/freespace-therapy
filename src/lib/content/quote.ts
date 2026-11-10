import type { Document } from "@contentful/rich-text-types";
import { contentfulClient } from "@/lib/contentful";
import { colorValue } from "@/lib/content/colors";
import type { QuoteSectionSkeleton } from "@/lib/content/types";

export interface QuoteContent {
  quoteText: Document;
  quoteTextColor?: string;
  quoteAuthor: string;
  quoteMarkColor?: string;
  backgroundColor?: string;
}

export async function getQuoteSection(): Promise<QuoteContent | null> {
  try {
    const res = await contentfulClient.getEntries<QuoteSectionSkeleton>({
      content_type: "quoteSection",
      limit: 1,
    });

    const entry = res.items[0];
    if (!entry) return null;

    const f = entry.fields;

    return {
      quoteText: f.quoteText as Document,
      quoteTextColor: colorValue(f.quoteTextColor),
      quoteAuthor: (f.quoteAuthor as string | undefined) ?? "",
      quoteMarkColor: colorValue(f.quoteMarkColor),
      backgroundColor: colorValue(f.quoteBackgroundColor),
    };
  } catch (error) {
    console.error("Failed to fetch quoteSection from Contentful:", error);
    return null;
  }
}
