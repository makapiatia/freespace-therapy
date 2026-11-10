import type { Asset, AssetFile, Entry } from "contentful";
import type { Document } from "@contentful/rich-text-types";
import { contentfulClient } from "@/lib/contentful";
import { colorValue } from "@/lib/content/colors";
import type {
  ImageSectionSkeleton,
  PageSkeleton,
} from "@/lib/content/types";

export interface FeaturedImageContent {
  imageUrl: string;
  imageAlt: string;
  objectPosition: string;
  description?: Document;
  descriptionColor?: string;
  overlayColor?: string;
}

function objectPositionFromFocalPoint(
  focalPoint: unknown,
  width: number | undefined,
  height: number | undefined,
): string {
  const point = (
    focalPoint as { focalPoint?: { x?: number; y?: number } } | undefined
  )?.focalPoint;

  if (!point || !width || !height) return "50% 50%";

  const x = ((point.x ?? width / 2) / width) * 100;
  const y = ((point.y ?? height / 2) / height) * 100;
  return `${x.toFixed(1)}% ${y.toFixed(1)}%`;
}

export async function getFeaturedImageSection(): Promise<FeaturedImageContent | null> {
  try {
    const res = await contentfulClient.getEntries<PageSkeleton>({
      content_type: "page",
      include: 3,
      limit: 1,
      select: ["sys", "fields.imageSection"],
    });

    const page = res.items[0];
    const imageSection = page?.fields.imageSection as
      | Entry<ImageSectionSkeleton>
      | undefined;
    if (!imageSection) return null;

    const f = imageSection.fields;
    const asset = f.image as Asset | undefined;
    const file = asset?.fields.file as AssetFile | undefined;
    if (!file?.url) return null;

    return {
      imageUrl: `https:${file.url}`,
      imageAlt: (f.imageAltText as string | undefined) ?? "",
      objectPosition: objectPositionFromFocalPoint(
        f.imageFocalPoint,
        file.details?.image?.width,
        file.details?.image?.height,
      ),
      description: f.imageDescriptionText as Document | undefined,
      descriptionColor: colorValue(f.imageDescriptionTextColor),
      overlayColor: colorValue(f.imageOverlayColor),
    };
  } catch (error) {
    console.error("Failed to fetch imageSection from Contentful:", error);
    return null;
  }
}
