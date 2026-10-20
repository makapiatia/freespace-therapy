import type { Document } from "@contentful/rich-text-types";
import { contentfulClient } from "@/lib/contentful";
import type {
  ColorToken,
  ServiceListSectionSkeleton,
  ServicesSectionSkeleton,
  TextSectionSkeleton,
} from "@/lib/content/types";
import type { Entry } from "contentful";

export interface TextListContent {
  header?: Document;
  headerColor?: string;
  description?: Document;
  highlighted: string[];
  highlightedTextColor?: string;
  highlightedBackgroundColor?: string;
  items: string[];
  itemsColor?: string;
  itemsBackgroundColor?: string;
}

export interface TextBlockContent {
  header?: Document;
  body?: Document;
  textColor?: string;
  backgroundColor?: string;
  detailColor?: string;
}

export interface ServicesContent {
  lists: TextListContent[];
  blocks: TextBlockContent[];
}

function colorValue(token: unknown): string | undefined {
  return (token as ColorToken | undefined)?.value;
}

export async function getServicesSection(): Promise<ServicesContent | null> {
  try {
    const res = await contentfulClient.getEntries<ServicesSectionSkeleton>({
      content_type: "servicesSection",
      include: 2,
      limit: 1,
    });

    const entry = res.items[0];
    if (!entry) return null;

    const lists = (
      (entry.fields.textListSections ?? []) as unknown as (
        | Entry<ServiceListSectionSkeleton>
        | undefined
      )[]
    )
      .filter((item) => !!item)
      .map((list) => {
        const f = list.fields;
        return {
          header: f.listHeaderText as Document | undefined,
          headerColor: colorValue(f.listHeaderTextColor),
          description: f.listDescriptionText as Document | undefined,
          highlighted: (f.highlightedTextList as string[] | undefined) ?? [],
          highlightedTextColor: colorValue(f.highlightedListTextColor),
          highlightedBackgroundColor: colorValue(
            f.highlightedListBackgroundColor,
          ),
          items: (f.textList as string[] | undefined) ?? [],
          itemsColor: colorValue(f.textListColor),
          itemsBackgroundColor: colorValue(f.textListBackgroundColor),
        };
      });

    const blocks = (
      (entry.fields.textSections ?? []) as unknown as (
        | Entry<TextSectionSkeleton>
        | undefined
      )[]
    )
      .filter((item) => !!item)
      .map((block) => {
        const f = block.fields;
        return {
          header: f.headerText as Document | undefined,
          body: f.textBody as Document | undefined,
          textColor: colorValue(f.textColor),
          backgroundColor: colorValue(f.backgroundColor),
          detailColor: colorValue(f.detailColor),
        };
      });

    return { lists, blocks };
  } catch (error) {
    console.error("Failed to fetch servicesSection from Contentful:", error);
    return null;
  }
}
