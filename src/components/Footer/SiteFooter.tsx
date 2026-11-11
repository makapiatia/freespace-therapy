import Image from "next/image";
import classNames from "classnames";
import type { Document } from "@contentful/rich-text-types";
import { renderRichTextInline } from "@/lib/content/richText";
import { LOGO_URL } from "@/lib/logo";

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
        "mx-8 mt-8 flex items-end gap-3 border-t border-cream/15 pt-6",
        "md:mt-0 md:gap-6 md:border-t-0 md:pt-8",
      )}
    >
      <div
        className={classNames(
          "flex shrink-0 flex-col items-center justify-center gap-0.5",
          "font-work-sans text-[10px] text-cream/60 md:text-[11px]",
        )}
      >
        Site by
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream/90 max-[390px]:h-8 max-[390px]:w-8 md:h-12 md:w-12">
          <Image
            src="/photos/trex-icon.png"
            alt="TREX"
            width={36}
            height={36}
            className="h-7.5 w-7.5 max-[390px]:h-6 max-[390px]:w-6 md:h-9 md:w-9"
          />
        </span>
      </div>
      <div className="flex flex-1 items-center justify-end gap-2 md:gap-4">
        <p className="text-right font-work-sans text-[11px] text-cream/60">
          {copyrightText
            ? renderRichTextInline(copyrightText)
            : "© 2026 Free Space Psychotherapy LLC. All rights reserved."}
        </p>
        <a
          href="#"
          aria-label="Back to top"
          className="relative block h-16 w-16 shrink-0 overflow-hidden rounded-full max-[390px]:h-12 max-[390px]:w-12"
        >
          <Image
            src={logoUrl ?? LOGO_URL}
            alt={logoAlt ?? "Freespace Therapy"}
            fill
            sizes="64px"
            className="object-cover"
          />
        </a>
      </div>
    </div>
  );
}
