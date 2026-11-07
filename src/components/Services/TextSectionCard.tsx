import classNames from "classnames";
import type { TextBlockContent } from "@/lib/content/services";
import {
  renderRichTextBody,
  renderRichTextHeading,
} from "@/lib/content/richText";

export default function TextSectionCard({
  header,
  body,
  textColor,
  backgroundColor,
  detailColor,
  className,
}: {
  header?: TextBlockContent["header"];
  body?: TextBlockContent["body"];
  textColor?: string;
  backgroundColor?: string;
  detailColor?: string;
  className?: string;
}) {
  return (
    <div
      className={classNames(
        "rounded-2xl border border-cream/10 bg-darkGreen p-6 md:p-8",
        "bg-canvas-texture overflow-hidden",
        className,
      )}
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <span
        className="block h-1 w-10 rounded-full bg-logoLime"
        style={detailColor ? { backgroundColor: detailColor } : undefined}
      />
      {header && (
        <h3
          className="font-aileron-semibold mt-4 text-lg text-cream md:text-xl"
          style={textColor ? { color: textColor } : undefined}
        >
          {renderRichTextHeading(header)}
        </h3>
      )}
      {body && (
        <div
          className="mt-3 space-y-3 font-aileron text-sm text-cream/80 md:text-base"
          style={textColor ? { color: textColor } : undefined}
        >
          {renderRichTextBody(body)}
        </div>
      )}
    </div>
  );
}
