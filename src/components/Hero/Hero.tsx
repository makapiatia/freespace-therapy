import classNames from "classnames";
import MobileHero from "./MobileHero";
import DesktopHero from "./DesktopHero";
import { getHeroSection } from "@/lib/content/hero";
import { renderRichTextInline } from "@/lib/content/richText";

export default async function Hero({
  logoUrl,
  buttonClassName,
  taglineColor,
}: {
  logoUrl?: string;
  buttonClassName: string;
  /** Tagline color when Contentful has none. */
  taglineColor?: string;
}) {
  const cmsContent = await getHeroSection();
  const content =
    cmsContent && !cmsContent.taglineColor && taglineColor
      ? { ...cmsContent, taglineColor }
      : cmsContent;
  const logo = logoUrl ?? content?.logoUrl;

  return (
    <section
      id="top"
      className="flex flex-1 flex-col justify-center bg-cream"
      style={
        content?.backgroundColor
          ? { backgroundColor: content.backgroundColor }
          : undefined
      }
    >
      <div className="hero:hidden mt-6 flex justify-center">
        <p
          className={classNames(
            "hero-tagline inline-block w-fit font-diamond text-base font-semibold",
            "tracking-widest text-grassGreen max-[499px]:text-[13px]",
          )}
          style={
            content?.taglineColor ? { color: content.taglineColor } : undefined
          }
        >
          {content
            ? renderRichTextInline(content.tagline)
            : "Free Space Psychotherapy LLC"}
        </p>
      </div>

      <div className="mx-auto max-w-4xl px-8 md:pt-14">
        <MobileHero content={content} logoUrl={logo} />
        <DesktopHero content={content} logoUrl={logo} />
      </div>

      <div className="mx-auto max-w-4xl px-8 pt-4 pb-8 text-center md:pt-6 md:pb-10">
        <a
          href={content?.buttonUrl ?? "#contact"}
          className={classNames(
            "inline-block rounded-full px-6 py-3 font-bold",
            "font-work-sans text-base transition-[filter]",
            "hover:brightness-90",
            // Fallback when Contentful has no button colors.
            buttonClassName,
          )}
          style={{
            backgroundColor: content?.buttonBackgroundColor,
            color: content?.buttonTextColor,
          }}
        >
          {content?.buttonLabel ?? "Get in Touch"}
        </a>
      </div>
    </section>
  );
}
