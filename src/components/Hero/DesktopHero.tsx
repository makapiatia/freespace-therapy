import Image from "next/image";
import classNames from "classnames";
import type { HeroContent } from "@/lib/content/hero";
import { renderRichTextHeading, renderRichTextInline } from "@/lib/content/richText";

export default function DesktopHero({
  content,
  logoUrl,
}: {
  content: HeroContent | null;
  logoUrl?: string;
}) {
  return (
    <div
      className={classNames(
        "hidden hero:grid hero:grid-cols-[auto_1fr] hero:items-start",
        "hero:gap-x-12",
      )}
    >
      <span className="relative row-span-3 block h-52 w-52 shrink-0 overflow-hidden rounded-full">
        <Image
          src={logoUrl ?? "/logos/NewLogoOct30.png"}
          alt={content?.logoAlt ?? "Freespace Therapy"}
          fill
          sizes="208px"
          priority
          className="object-cover"
        />
      </span>

      <p
        className={classNames(
          "hero-tagline inline-block w-fit font-diamond text-base font-semibold",
          "tracking-widest text-grassGreen",
        )}
        style={content?.taglineColor ? { color: content.taglineColor } : undefined}
      >
        {content
          ? renderRichTextInline(content.tagline)
          : "Free Space Psychotherapy LLC"}
      </p>

      <h1
        className={classNames(
          "hero-heading mt-3 max-w-137.5 font-diamond text-6xl",
          "leading-[1.05] text-darkTeal tracking-wide lg:text-7xl",
        )}
        style={content?.headingColor ? { color: content.headingColor } : undefined}
      >
        {content ? (
          renderRichTextHeading(content.heading)
        ) : (
          <>
            welcome to
            <br />
            free space
          </>
        )}
      </h1>

      <p
        className="hero-body mt-4 max-w-137.5 font-aileron text-lg text-darkTeal/80 lg:mt-4"
        style={content?.bodyColor ? { color: content.bodyColor } : undefined}
      >
        {content
          ? renderRichTextInline(content.body)
          : "Offering a compassionate, non-judgmental space to slow down and explore what’s really going on beneath the surface, for adults navigating anxiety, loss, uncertainty, or feeling stuck."}
      </p>
    </div>
  );
}
