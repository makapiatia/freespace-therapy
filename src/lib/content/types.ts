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
    imageFocalPoint: EntryFieldTypes.Object;
    imageAltText: EntryFieldTypes.Symbol;
    imageDescriptionText: EntryFieldTypes.RichText;
    imageDescriptionTextColor: EntryFieldTypes.Object;
    imageOverlayColor: EntryFieldTypes.Object;
  };
}

export interface QuoteSectionSkeleton extends EntrySkeletonType {
  contentTypeId: "quoteSection";
  fields: {
    internalTitle: EntryFieldTypes.Symbol;
    quoteText: EntryFieldTypes.RichText;
    quoteTextColor: EntryFieldTypes.Object;
    quoteAuthor: EntryFieldTypes.Symbol;
    quoteMarkColor: EntryFieldTypes.Object;
    quoteBackgroundColor: EntryFieldTypes.Object;
  };
}

export interface TextSectionSkeleton extends EntrySkeletonType {
  contentTypeId: "textSection";
  fields: {
    internalTitle: EntryFieldTypes.Symbol;
    headerText: EntryFieldTypes.RichText;
    headerSubtext: EntryFieldTypes.RichText;
    textBody: EntryFieldTypes.RichText;
    textColor: EntryFieldTypes.Object;
    backgroundColor: EntryFieldTypes.Object;
    detailColor: EntryFieldTypes.Object;
  };
}

export interface ServiceListSectionSkeleton extends EntrySkeletonType {
  contentTypeId: "serviceListSection";
  fields: {
    internalTitle: EntryFieldTypes.Symbol;
    listHeaderText: EntryFieldTypes.RichText;
    listDescriptionText: EntryFieldTypes.RichText;
    listHeaderTextColor: EntryFieldTypes.Object;
    highlightedTextList: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    highlightedListTextColor: EntryFieldTypes.Object;
    highlightedListBackgroundColor: EntryFieldTypes.Object;
    textList: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    textListColor: EntryFieldTypes.Object;
    textListBackgroundColor: EntryFieldTypes.Object;
    showBulletPoints: EntryFieldTypes.Boolean;
    bulletPointColor: EntryFieldTypes.Object;
  };
}

export interface ServicesSectionSkeleton extends EntrySkeletonType {
  contentTypeId: "servicesSection";
  fields: {
    internalTitle: EntryFieldTypes.Symbol;
    textListSections: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<ServiceListSectionSkeleton>
    >;
    textSections: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<TextSectionSkeleton>
    >;
  };
}

export interface AboutSectionSkeleton extends EntrySkeletonType {
  contentTypeId: "aboutSection";
  fields: {
    internalTitle: EntryFieldTypes.Symbol;
    image: EntryFieldTypes.EntryLink<ImageSectionSkeleton>;
    textSection: EntryFieldTypes.EntryLink<TextSectionSkeleton>;
    textList: EntryFieldTypes.EntryLink<ServiceListSectionSkeleton>;
    backgroundColor: EntryFieldTypes.Object;
    detailsColor: EntryFieldTypes.Object;
  };
}

export interface ContactFormSkeleton extends EntrySkeletonType {
  contentTypeId: "contactForm";
  fields: {
    internalTitle: EntryFieldTypes.Symbol;
    nameInputLabel: EntryFieldTypes.Symbol;
    nameInputPlaceholder: EntryFieldTypes.Symbol;
    emailInputLabel: EntryFieldTypes.Symbol;
    emailInputPlaceholder: EntryFieldTypes.Symbol;
    phoneInputLabel: EntryFieldTypes.Symbol;
    phoneInputPlaceholder: EntryFieldTypes.Symbol;
    messageInputLabel: EntryFieldTypes.Symbol;
    messageInputPlaceholder: EntryFieldTypes.Symbol;
    submitButton: EntryFieldTypes.EntryLink<LinkButtonSkeleton>;
  };
}

export interface ContactSectionSkeleton extends EntrySkeletonType {
  contentTypeId: "contactSection";
  fields: {
    internalTitle: EntryFieldTypes.Symbol;
    contactHeaderText: EntryFieldTypes.RichText;
    contactTextBody: EntryFieldTypes.RichText;
    referencesTextSection: EntryFieldTypes.EntryLink<TextSectionSkeleton>;
    contactTextColor: EntryFieldTypes.Object;
    contactBackgroundColor: EntryFieldTypes.Object;
    contactForm: EntryFieldTypes.EntryLink<ContactFormSkeleton>;
  };
}

export interface FooterSkeleton extends EntrySkeletonType {
  contentTypeId: "footer";
  fields: {
    internalTitle: EntryFieldTypes.Symbol;
    contactSection: EntryFieldTypes.EntryLink<ContactSectionSkeleton>;
    footerCopyrightText: EntryFieldTypes.RichText;
    footerLogoImage: EntryFieldTypes.EntryLink<ImageSectionSkeleton>;
  };
}

export interface PageSkeleton extends EntrySkeletonType {
  contentTypeId: "page";
  fields: {
    internalTitle: EntryFieldTypes.Symbol;
    imageSection: EntryFieldTypes.EntryLink<ImageSectionSkeleton>;
    siteTitle: EntryFieldTypes.Text;
    siteDescription: EntryFieldTypes.Text;
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
