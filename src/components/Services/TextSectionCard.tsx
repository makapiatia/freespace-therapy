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
  textColor,
  className,
}: {
  header?: TextBlockContent["header"];
  body?: TextBlockContent["body"];
  background?: string;
  detailColor?: string;
  dark?: boolean;
  textColor?: string;
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
          style={textColor ? { color: textColor } : undefined}
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
          style={textColor ? { color: textColor } : undefined}
        >
          {renderRichTextBody(body)}
        </div>
      )}
    </div>
  );
}
