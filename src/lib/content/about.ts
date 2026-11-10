import type { Asset, AssetFile, Entry } from "contentful";
import type { Document } from "@contentful/rich-text-types";
import { contentfulClient } from "@/lib/contentful";
import { colorValue } from "@/lib/content/colors";
import type {
  AboutSectionSkeleton,
  ImageSectionSkeleton,
  ServiceListSectionSkeleton,
  TextSectionSkeleton,
} from "@/lib/content/types";

export interface AboutContent {
  imageUrl: string;
  imageAlt: string;
  objectPosition: string;
  header?: Document;
  subtext?: Document;
  body?: Document;
  textColor?: string;
  credentials: string[];
  credentialsTextColor?: string;
  credentialsBackgroundColor?: string;
  showBulletPoints: boolean;
  bulletPointColor?: string;
  backgroundColor?: string;
  detailsColor?: string;
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

export async function getAboutSection(): Promise<AboutContent | null> {
  try {
    const res = await contentfulClient.getEntries<AboutSectionSkeleton>({
      content_type: "aboutSection",
      include: 3,
      limit: 1,
    });

    const entry = res.items[0];
    if (!entry) return null;

    const f = entry.fields;

    const imageSection = f.image as Entry<ImageSectionSkeleton> | undefined;
    const asset = imageSection?.fields.image as Asset | undefined;
    const file = asset?.fields.file as AssetFile | undefined;

    const textSection = f.textSection as Entry<TextSectionSkeleton> | undefined;
    const textFields = textSection?.fields;

    const textList = f.textList as Entry<ServiceListSectionSkeleton> | undefined;
    const listFields = textList?.fields;

    return {
      imageUrl: file?.url
        ? `https:${file.url}`
        : "/photos/auntmegan.png",
      imageAlt:
        (imageSection?.fields.imageAltText as string | undefined) ??
        "Megan Miller, LCSW",
      objectPosition: objectPositionFromFocalPoint(
        imageSection?.fields.imageFocalPoint,
        file?.details?.image?.width,
        file?.details?.image?.height,
      ),
      header: textFields?.headerText as Document | undefined,
      subtext: textFields?.headerSubtext as Document | undefined,
      body: textFields?.textBody as Document | undefined,
      textColor: colorValue(textFields?.textColor),
      credentials: (listFields?.textList as string[] | undefined) ?? [],
      credentialsTextColor: colorValue(listFields?.textListColor),
      credentialsBackgroundColor: colorValue(listFields?.textListBackgroundColor),
      showBulletPoints: (listFields?.showBulletPoints as boolean | undefined) ?? true,
      bulletPointColor: colorValue(listFields?.bulletPointColor),
      backgroundColor: colorValue(f.backgroundColor),
      detailsColor: colorValue(f.detailsColor),
    };
  } catch (error) {
    console.error("Failed to fetch aboutSection from Contentful:", error);
    return null;
  }
}
