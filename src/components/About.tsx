import Image from "next/image";
import classNames from "classnames";
import type { CSSProperties } from "react";
import { getAboutSection } from "@/lib/content/about";
import {
  renderRichTextBody,
  renderRichTextHeading,
  renderRichTextInline,
} from "@/lib/content/richText";

export default async function About({
  backgroundColor,
  noTopPadding = false,
}: {
  /** Background color when Contentful has none. */
  backgroundColor?: string;
  noTopPadding?: boolean;
}) {
  const content = await getAboutSection();

  return (
    <section
      id="about"
      className={classNames(
        "px-8 pb-10 md:pb-12",
        !noTopPadding && "pt-10 md:pt-12",
      )}
      style={{
        backgroundColor:
          content?.backgroundColor ?? backgroundColor ?? "#f6e2b3",
      }}
    >
      <div
        className={classNames(
          "mx-auto grid max-w-5xl grid-cols-[auto_1fr] gap-x-4 gap-y-6",
          "md:grid-cols-[auto_1fr] md:items-start md:gap-y-4 md:gap-x-10",
        )}
      >
        <span
          className={classNames(
            "relative col-start-1 row-start-1 block h-22 w-22 shrink-0",
            "justify-self-start overflow-hidden rounded-full",
            "md:row-span-2",
            "md:h-36 md:w-36 md:justify-self-start",
          )}
          style={
            content?.detailsColor
              ? ({
                  "--tw-ring-color": content.detailsColor,
                } as CSSProperties)
              : undefined
          }
        >
          <Image
            src={content?.imageUrl ?? "/photos/auntmegan.png"}
            alt={content?.imageAlt ?? "Megan Miller, LCSW"}
            fill
            sizes="144px"
            style={{ objectPosition: content?.objectPosition ?? "50% 50%" }}
            className="object-cover"
          />
        </span>

        <div
          className={classNames(
            "about-header col-start-2 row-start-1 flex h-full flex-col",
            "justify-center",
          )}
        >
          <h2
            className="font-diamond text-3xl text-darkTeal md:text-5xl"
            style={content?.textColor ? { color: content.textColor } : undefined}
          >
            {content?.header ? renderRichTextHeading(content.header) : "Meet Megan"}
          </h2>
          <p
            className="font-aileron-semibold text-lg text-darkTeal md:text-xl"
            style={content?.textColor ? { color: content.textColor } : undefined}
          >
            {content?.subtext
              ? renderRichTextInline(content.subtext)
              : "Megan Miller, LCSW"}
          </p>
        </div>

        <div className="col-span-2 row-start-2 md:col-span-1 md:col-start-2">
          <div
            className="font-aileron space-y-4 text-sm text-darkTeal/80 md:text-base"
            style={content?.textColor ? { color: content.textColor } : undefined}
          >
            {content?.body ? (
              renderRichTextBody(content.body)
            ) : (
              <>
                <p>
                  I am a Licensed Clinical Social Worker with a passion for
                  supporting adults of all ages and backgrounds who are
                  navigating anxiety, loss, uncertainty, or feeling
                  &lsquo;stuck&rsquo;. I see many people who express an
                  uneasiness between the face they feel they need to show the
                  world and the way they feel internally. If this sounds
                  familiar, I offer a compassionate, non-judgmental space
                  away from the pressures of everyday life to slow down and
                  effectively explore your deepest concerns.
                </p>
                <p>
                  Before returning to school for an MSW, I worked in a
                  creative professional field. I believe that living itself
                  is a creative act, worthy of ongoing examination and the
                  application of intention. I also have special experience
                  with people who have been impacted by the criminal legal
                  system. My varied background gives me depth to work
                  effectively with a diversity of challenges including
                  anxiety, major life transitions, grief and loss, anger
                  management, career and relationship challenges, effects of
                  trauma, and impacts of interpersonal or systemic harm.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
