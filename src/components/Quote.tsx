import classNames from "classnames";
import { getQuoteSection } from "@/lib/content/quote";
import { renderRichTextInline } from "@/lib/content/richText";

export default async function Quote() {
  const content = await getQuoteSection();

  return (
    <section
      className={classNames(
        "relative flex flex-1 flex-col justify-center overflow-hidden",
        "min-h-56 bg-navyBlue px-8 py-10 text-center md:min-h-72",
        "lg:min-h-96 md:py-8 bg-canvas-texture",
      )}
      style={
        content?.backgroundColor
          ? { backgroundColor: content.backgroundColor }
          : undefined
      }
    >
      <div className="relative mx-auto max-w-3xl">
        <span
          aria-hidden
          className="font-diamond block text-4xl text-logoLime md:text-6xl mb-4"
          style={
            content?.quoteMarkColor ? { color: content.quoteMarkColor } : undefined
          }
        >
          &ldquo;
        </span>
        <blockquote
          className="font-aileron-semibold -mt-6 text-lg leading-snug text-cream md:text-2xl"
          style={
            content?.quoteTextColor ? { color: content.quoteTextColor } : undefined
          }
        >
          {content
            ? renderRichTextInline(content.quoteText)
            : "Not everything that is faced can be changed, but nothing can be changed until it is faced."}
        </blockquote>
        <cite
          className="font-aileron mt-2 md:mt-4 block text-base text-cream/90 not-italic"
          style={
            content?.quoteTextColor ? { color: content.quoteTextColor } : undefined
          }
        >
          ― {content?.quoteAuthor || "James Baldwin"}
        </cite>
      </div>
    </section>
  );
}
