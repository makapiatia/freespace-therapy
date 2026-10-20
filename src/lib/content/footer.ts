import type { Asset, AssetFile, Entry } from "contentful";
import type { Document } from "@contentful/rich-text-types";
import { contentfulClient } from "@/lib/contentful";
import type {
  ColorToken,
  ContactFormSkeleton,
  ContactSectionSkeleton,
  FooterSkeleton,
  ImageSectionSkeleton,
  LinkButtonSkeleton,
  TextSectionSkeleton,
} from "@/lib/content/types";

export interface ContactFormContent {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
  submitTextColor?: string;
  submitBackgroundColor?: string;
}

export interface FooterContent {
  copyrightText?: Document;
  logoUrl: string;
  logoAlt: string;
  contactHeader?: Document;
  contactBody?: Document;
  contactTextColor?: string;
  contactBackgroundColor?: string;
  referencesHeader?: Document;
  referencesBody?: Document;
  form: ContactFormContent | null;
}

function colorValue(token: unknown): string | undefined {
  return (token as ColorToken | undefined)?.value;
}

export async function getFooterSection(): Promise<FooterContent | null> {
  try {
    const res = await contentfulClient.getEntries<FooterSkeleton>({
      content_type: "footer",
      include: 4,
      limit: 1,
    });

    const entry = res.items[0];
    if (!entry) return null;

    const f = entry.fields;

    const logoSection = f.footerLogoImage as
      | Entry<ImageSectionSkeleton>
      | undefined;
    const logoAsset = logoSection?.fields.image as Asset | undefined;
    const logoFile = logoAsset?.fields.file as AssetFile | undefined;

    const contactSection = f.contactSection as
      | Entry<ContactSectionSkeleton>
      | undefined;
    const contactFields = contactSection?.fields;

    const references = contactFields?.referencesTextSection as
      | Entry<TextSectionSkeleton>
      | undefined;
    const referenceFields = references?.fields;

    const contactForm = contactFields?.contactForm as
      | Entry<ContactFormSkeleton>
      | undefined;
    const formFields = contactForm?.fields;

    const submitButton = formFields?.submitButton as
      | Entry<LinkButtonSkeleton>
      | undefined;

    const form: ContactFormContent | null = formFields
      ? {
          nameLabel: (formFields.nameInputLabel as string | undefined) ?? "Name",
          namePlaceholder:
            (formFields.nameInputPlaceholder as string | undefined) ??
            "Jane Smith",
          emailLabel: (formFields.emailInputLabel as string | undefined) ?? "Email",
          emailPlaceholder:
            (formFields.emailInputPlaceholder as string | undefined) ??
            "jane@example.com",
          phoneLabel:
            (formFields.phoneInputLabel as string | undefined) ??
            "Phone (optional)",
          phonePlaceholder:
            (formFields.phoneInputPlaceholder as string | undefined) ??
            "(555) 555-0182",
          messageLabel:
            (formFields.messageInputLabel as string | undefined) ?? "Message",
          messagePlaceholder:
            (formFields.messageInputPlaceholder as string | undefined) ??
            "Tell us a little about what brings you here.",
          submitLabel:
            (submitButton?.fields.linkLabel as string | undefined) ??
            "Send Message",
          submitTextColor: colorValue(submitButton?.fields.buttonLabelTextColor),
          submitBackgroundColor: colorValue(
            submitButton?.fields.buttonBackgroundColor,
          ),
        }
      : null;

    return {
      copyrightText: f.footerCopyrightText as Document | undefined,
      logoUrl: logoFile?.url
        ? `https:${logoFile.url}`
        : "/logos/1x/greenDragonflyLogo.png",
      logoAlt:
        (logoSection?.fields.imageAltText as string | undefined) ??
        "Freespace Therapy",
      contactHeader: contactFields?.contactHeaderText as Document | undefined,
      contactBody: contactFields?.contactTextBody as Document | undefined,
      contactTextColor: colorValue(contactFields?.contactTextColor),
      contactBackgroundColor: colorValue(contactFields?.contactBackgroundColor),
      referencesHeader: referenceFields?.headerText as Document | undefined,
      referencesBody: referenceFields?.textBody as Document | undefined,
      form,
    };
  } catch (error) {
    console.error("Failed to fetch footer from Contentful:", error);
    return null;
  }
}
