import Image from "next/image";
import classNames from "classnames";
import { getFeaturedImageSection } from "@/lib/content/featuredImage";
import { getQuoteSection } from "@/lib/content/quote";
import { renderRichTextInline } from "@/lib/content/richText";

export default async function FeaturedImageSection() {
  const [content, quote] = await Promise.all([
    getFeaturedImageSection(),
    getQuoteSection(),
  ]);

  return (
    <section
      className="bg-navyBlue bg-canvas-texture py-10 md:py-12"
      style={
        quote?.backgroundColor
          ? { backgroundColor: quote.backgroundColor }
          : undefined
      }
    >
      <div className="mx-auto max-w-5xl px-8">
        <div
          className={classNames(
            "relative aspect-16/10 overflow-hidden rounded-2xl",
            "border border-cream/10",
          )}
        >
          <Image
            src={content?.imageUrl ?? "/photos/skysthelimit.jpg"}
            alt={content?.imageAlt ?? ""}
            aria-hidden
            fill
            style={{ objectPosition: content?.objectPosition ?? "55% 15%" }}
            className="object-cover"
          />
        </div>
        <p
          className={classNames(
            "author-text mt-3 text-center tracking-wide text-cream/70",
            "font-work-sans text-xs font-semibold",
          )}
          style={
            content?.descriptionColor
              ? { color: content.descriptionColor }
              : undefined
          }
        >
          {content?.description
            ? renderRichTextInline(content.description)
            : "“Sky’s The Limit” — Photography by Kareem Wilder"}
        </p>
      </div>
    </section>
  );
}
