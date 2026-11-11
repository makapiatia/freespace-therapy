import classNames from "classnames";
import type { Document } from "@contentful/rich-text-types";
import { renderRichTextBody, renderRichTextHeading } from "@/lib/content/richText";

export default function Community({
  header,
  body,
}: {
  header?: Document;
  body?: Document;
}) {
  if (!header && !body) return null;

  return (
    <div id="community">
      <div
        className={classNames(
          "divide-y divide-cream/15 rounded-2xl border",
          "border-cream/15 bg-cream/5",
        )}
      >
        <div className="p-4">
          {header && (
            <h3 className="font-aileron-semibold text-base md:text-xl text-cream">
              {renderRichTextHeading(header)}
            </h3>
          )}
          {body && (
            <div className="font-aileron text-sm md:text-base text-cream/80">
              {renderRichTextBody(body)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
