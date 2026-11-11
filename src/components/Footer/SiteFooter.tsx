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
    <div className="flex items-center gap-3 px-8 pt-8 md:gap-6">
      <div className="flex flex-1 items-center gap-3 md:gap-5">
        <a
          href="#"
          aria-label="Back to top"
          className="relative block h-16 w-16 shrink-0 overflow-hidden rounded-full"
        >
          <Image
            src={logoUrl ?? LOGO_URL}
            alt={logoAlt ?? "Freespace Therapy"}
            fill
            sizes="64px"
            className="object-cover"
          />
        </a>
        <p className="font-work-sans text-xs text-cream/60">
          {copyrightText
            ? renderRichTextInline(copyrightText)
            : "© 2026 Free Space Psychotherapy LLC. All rights reserved."}
        </p>
      </div>
      <a
        href="https://github.com/makapiatia"
        target="_blank"
        rel="noopener noreferrer"
        className={classNames(
          "flex shrink-0 flex-col items-center justify-center gap-2 self-stretch border-l border-cream/15 pl-3 md:border-l-0 md:pl-0",
          "font-work-sans text-xs text-cream/60",
        )}
      >
        Site by
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream/90 md:h-12 md:w-12">
          <Image
            src="/photos/trex-icon.png"
            alt=""
            width={36}
            height={36}
            className="h-7.5 w-7.5 md:h-9 md:w-9"
          />
        </span>
      </a>
    </div>
  );
}
