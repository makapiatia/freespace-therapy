import Image from "next/image";
import classNames from "classnames";
import type { HeroContent } from "@/lib/content/hero";
import { renderRichTextHeading, renderRichTextInline } from "@/lib/content/richText";
import { LOGO_URL } from "@/lib/logo";

export default function MobileHero({
  content,
  logoUrl,
}: {
  content: HeroContent | null;
  logoUrl?: string;
}) {
  return (
    <div className="hero:hidden max-w-112.5 mx-auto flex flex-col items-center justify-center text-center">
      <span
        className={classNames(
          "relative my-4 block aspect-square shrink-0 overflow-hidden rounded-full",
          "w-[clamp(8rem,46vw,20rem)] min-[570px]:w-66",
        )}
      >
        <Image
          src={logoUrl ?? LOGO_URL}
          alt={content?.logoAlt ?? "Freespace Therapy"}
          fill
          sizes="320px"
          priority
          className="object-cover"
        />
      </span>
      <h1
        className={classNames(
          "hero-heading font-diamond leading-[1.05] text-darkTeal",
          "tracking-wide whitespace-nowrap",
          "text-[clamp(2rem,10vw,4.5rem)] min-[570px]:text-[57px]",
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
        className="hero-body mt-3 font-aileron text-sm text-darkTeal/80"
        style={content?.bodyColor ? { color: content.bodyColor } : undefined}
      >
        {content
          ? renderRichTextInline(content.body)
          : "Offering a compassionate, non-judgmental space to slow down and explore what’s really going on beneath the surface, for adults navigating anxiety, loss, uncertainty, or feeling stuck."}
      </p>
    </div>
  );
}
