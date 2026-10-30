import Image from "next/image";
import classNames from "classnames";
import type { Document } from "@contentful/rich-text-types";
import { renderRichTextInline } from "@/lib/content/richText";

export default function SiteFooter({
  copyrightText,
  logoUrl,
  logoAlt,
}: {
  copyrightText?: Document;
  logoUrl?: string;
  logoAlt?: string;
}) {
  return (
    <div
      className={classNames(
        "flex flex-col items-center justify-center gap-3 px-8",
        "flex-row justify-end gap-6 pt-8 sm:pt-8 text-left",
      )}
    >
      <p className="font-work-sans text-xs text-cream/70">
        {copyrightText
          ? renderRichTextInline(copyrightText)
          : "© 2026 Free Space Psychotherapy LLC. All rights reserved."}
      </p>
      <span className="relative block h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-logoLime/50">
        <Image
          src={logoUrl ?? "/logos/NewLogoOct30.png"}
          alt={logoAlt ?? "Freespace Therapy"}
          fill
          sizes="64px"
          className="object-cover"
        />
      </span>
    </div>
  );
}
