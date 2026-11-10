import type { Asset, Entry } from "contentful";
import type { Document } from "@contentful/rich-text-types";
import { contentfulClient } from "@/lib/contentful";
import { colorValue } from "@/lib/content/colors";
import type {
  HeroSectionSkeleton,
  ImageSectionSkeleton,
  LinkButtonSkeleton,
} from "@/lib/content/types";

export interface HeroContent {
  tagline: Document;
  taglineColor?: string;
  heading: Document;
  headingColor?: string;
  body: Document;
  bodyColor?: string;
  backgroundColor?: string;
  buttonLabel: string;
  buttonUrl: string;
  buttonTextColor?: string;
  buttonBackgroundColor?: string;
  logoUrl: string;
  logoAlt: string;
}

export async function getHeroSection(): Promise<HeroContent | null> {
  let entry: Entry<HeroSectionSkeleton> | undefined;

  try {
    const res = await contentfulClient.getEntries<HeroSectionSkeleton>({
      content_type: "heroSection",
      include: 3,
      limit: 1,
    });
    entry = res.items[0];
  } catch (error) {
    console.error("Failed to fetch heroSection from Contentful:", error);
    return null;
  }

  if (!entry) return null;

  const f = entry.fields;

  const button = f.heroContactButton as
    | Entry<LinkButtonSkeleton>
    | undefined;
  const logo = f.heroLogoImage as Entry<ImageSectionSkeleton> | undefined;
  const logoAsset = logo?.fields.image as Asset | undefined;
  const logoFile = logoAsset?.fields.file;

  return {
    tagline: f.heroTagline as Document,
    taglineColor: colorValue(f.heroTaglineTextColor),
    heading: f.heroHeaderText as Document,
    headingColor: colorValue(f.heroHeadingTextColor),
    body: f.heroDescriptionText as Document,
    bodyColor: colorValue(f.heroDescriptionTextColor),
    backgroundColor: colorValue(f.heroBackgroundColor),
    buttonLabel: (button?.fields.linkLabel as string | undefined) ?? "Get in Touch",
    buttonUrl: (button?.fields.buttonUrl as string | undefined) ?? "#contact",
    buttonTextColor: colorValue(button?.fields.buttonLabelTextColor),
    buttonBackgroundColor: colorValue(button?.fields.buttonBackgroundColor),
    logoUrl: logoFile?.url
      ? `https:${logoFile.url}`
      : "/logos/NewLogoOct30.png",
    logoAlt: (logo?.fields.imageAltText as string | undefined) ?? "Freespace Therapy",
  };
}
