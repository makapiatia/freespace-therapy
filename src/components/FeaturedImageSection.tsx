import Image from "next/image";
import classNames from "classnames";
import { getFeaturedImageSection } from "@/lib/content/featuredImage";
import { renderRichTextInline } from "@/lib/content/richText";

const IMAGE_OPACITY_GRADIENT =
  "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 85%, rgba(0,0,0,0.75) 100%)";

export default async function FeaturedImageSection() {
  const content = await getFeaturedImageSection();

  return (
    <section
      className={classNames(
        "relative overflow-hidden",
        "min-h-96 md:min-h-150 lg:min-h-200",
      )}
      style={
        content?.overlayColor
          ? { backgroundColor: content.overlayColor }
          : undefined
      }
    >
      <Image
        src={content?.imageUrl ?? "/photos/skysthelimit.jpg"}
        alt={content?.imageAlt ?? ""}
        aria-hidden
        fill
        style={{
          objectPosition: content?.objectPosition ?? "55% 15%",
          maskImage: IMAGE_OPACITY_GRADIENT,
          WebkitMaskImage: IMAGE_OPACITY_GRADIENT,
        }}
        className="object-cover"
      />
      <p
        className={classNames(
          "author-text absolute top-0 right-0 tracking-wide text-darkNavy",
          "px-3 py-1 font-work-sans text-[9px] md:text-[11px] font-semibold"
        )}
        style={
          content?.descriptionColor
            ? { color: content.descriptionColor }
            : undefined
        }
      >
        {content?.description
          ? renderRichTextInline(content.description)
          : "“Sky’s The Limit” — Photography by Kareem W."}
      </p>
    </section>
  );
}
