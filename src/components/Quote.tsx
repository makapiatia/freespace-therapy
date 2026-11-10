import Image from "next/image";
import classNames from "classnames";
import { getQuoteSection } from "@/lib/content/quote";
import { getFeaturedImageSection } from "@/lib/content/featuredImage";
import { renderRichTextInline } from "@/lib/content/richText";
import { withOpacity } from "@/lib/content/colors";
import type { QuoteTheme } from "@/lib/siteTheme";

export default async function Quote({ theme }: { theme: QuoteTheme }) {
  const [content, image] = await Promise.all([
    getQuoteSection(),
    getFeaturedImageSection(),
  ]);

  return (
    <section
      className={classNames(
        "relative flex flex-1 flex-col justify-center overflow-hidden",
        "min-h-56 px-8 py-10 text-center md:min-h-72",
        "lg:min-h-96 md:py-8",
        theme.backgroundClassName,
      )}
      style={{ backgroundColor: content?.backgroundColor }}
    >
      <div className="relative mx-auto flex max-w-5xl flex-col">
        <div className="relative mx-auto max-w-3xl">
          <span
            aria-hidden
            className={classNames(
              "font-diamond block text-4xl md:text-6xl mb-4",
              theme.markClassName,
            )}
            style={{ color: content?.quoteMarkColor }}
          >
            &ldquo;
          </span>
          <blockquote
            className="font-aileron-semibold -mt-6 text-lg leading-snug text-cream md:text-2xl"
            style={{ color: content?.quoteTextColor }}
          >
            {content
              ? renderRichTextInline(content.quoteText)
              : "Not everything that is faced can be changed, but nothing can be changed until it is faced."}
          </blockquote>
          <cite
            className="font-aileron mt-2 md:mt-4 block text-sm text-cream/85 not-italic md:text-base"
            style={
              content?.quoteTextColor
                ? { color: withOpacity(content.quoteTextColor, 85) }
                : undefined
            }
          >
            ― {content?.quoteAuthor || "James Baldwin"}
          </cite>
        </div>

        <span
          aria-hidden
          className={classNames(
            "mx-auto mt-8 block h-1 w-12 rounded-full md:mt-10 opacity-90",
            theme.dashClassName,
          )}
        />

        <div className="relative mt-8 md:mt-10">
          <div
            className={classNames(
              "relative aspect-4/3 overflow-hidden rounded-2xl",
              "mx-auto border border-cream/10 md:max-h-125",
            )}
          >
            <Image
              src={image?.imageUrl ?? "/photos/skysthelimit.jpg"}
              alt={image?.imageAlt ?? ""}
              aria-hidden
              fill
              sizes="(min-width: 1088px) 1024px, 100vw"
              style={{ objectPosition: "45% 0%" }}
              className="object-cover"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-cream opacity-50 mix-blend-multiply"
            />
            <div
              aria-hidden
              className={classNames(
                "pointer-events-none absolute inset-0 mix-blend-screen",
                theme.imageTintClassName ?? "bg-darkGreen opacity-25",
              )}
              style={{ backgroundColor: image?.overlayColor }}
            />
          </div>
          <p
            className={classNames(
              "author-text mt-3 text-center tracking-wide text-cream/70",
              "font-work-sans text-xs font-semibold",
            )}
            style={
              image?.descriptionColor
                ? { color: withOpacity(image.descriptionColor, 70) }
                : undefined
            }
          >
            {image?.description
              ? renderRichTextInline(image.description)
              : "“Sky’s The Limit” — Photography by Kareem Wilder"}
          </p>
        </div>
      </div>
    </section>
  );
}
