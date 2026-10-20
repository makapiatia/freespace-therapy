import type { EntryFieldTypes, EntrySkeletonType } from "contentful";

export interface ColorToken {
  id: string;
  name: string;
  value: string;
}

export interface LinkButtonSkeleton extends EntrySkeletonType {
  contentTypeId: "linkButton";
  fields: {
    internalTitle: EntryFieldTypes.Symbol;
    linkLabel: EntryFieldTypes.Symbol;
    buttonLabelTextColor: EntryFieldTypes.Object;
    buttonUrl: EntryFieldTypes.Text;
    buttonBackgroundColor: EntryFieldTypes.Object;
  };
}

export interface ImageSectionSkeleton extends EntrySkeletonType {
  contentTypeId: "imageSection";
  fields: {
    internalTitle: EntryFieldTypes.Symbol;
    image: EntryFieldTypes.AssetLink;
    imageAltText: EntryFieldTypes.Symbol;
  };
}

export interface HeroSectionSkeleton extends EntrySkeletonType {
  contentTypeId: "heroSection";
  fields: {
    internalTitle: EntryFieldTypes.Symbol;
    heroTagline: EntryFieldTypes.RichText;
    heroTaglineTextColor: EntryFieldTypes.Object;
    heroHeaderText: EntryFieldTypes.RichText;
    heroHeadingTextColor: EntryFieldTypes.Object;
    heroDescriptionText: EntryFieldTypes.RichText;
    heroDescriptionTextColor: EntryFieldTypes.Object;
    heroContactButton: EntryFieldTypes.EntryLink<LinkButtonSkeleton>;
    heroLogoImage: EntryFieldTypes.EntryLink<ImageSectionSkeleton>;
    heroBackgroundColor: EntryFieldTypes.Object;
  };
}
