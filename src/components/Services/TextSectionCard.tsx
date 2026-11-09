import classNames from "classnames";
import type { TextBlockContent } from "@/lib/content/services";
import {
  renderRichTextBody,
  renderRichTextHeading,
} from "@/lib/content/richText";

export default function TextSectionCard({
  header,
  body,
  background,
  detailColor,
  dark,
  className,
}: {
  header?: TextBlockContent["header"];
  body?: TextBlockContent["body"];
  /** Any CSS background, e.g. a color or gradient. */
  background?: string;
  detailColor?: string;
  /** Use cream text for a dark background. */
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={classNames(
        "rounded-2xl border border-darkTeal/5 bg-lightGold p-6 md:p-8",
        "overflow-hidden",
        className,
      )}
      style={background ? { background } : undefined}
    >
      <span
        className="block h-1 w-10 rounded-full bg-grassGreen"
        style={detailColor ? { backgroundColor: detailColor } : undefined}
      />
      {header && (
        <h3
          className={classNames(
            "font-aileron-semibold mt-4 text-lg md:text-xl",
            dark ? "text-cream" : "text-darkNavy",
          )}
        >
          {renderRichTextHeading(header)}
        </h3>
      )}
      {body && (
        <div
          className={classNames(
            "mt-3 space-y-3 font-aileron text-sm md:text-base",
            dark ? "text-cream/85" : "text-darkNavy",
          )}
        >
          {renderRichTextBody(body)}
        </div>
      )}
    </div>
  );
}
