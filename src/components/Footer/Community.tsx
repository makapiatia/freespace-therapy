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
  return (
    <div id="community">
      <div
        className={classNames(
          "divide-y divide-cream/15 rounded-2xl border",
          "border-cream/15 bg-cream/5",
        )}
      >
        <div className="p-4">
          <h3 className="font-aileron-semibold text-base md:text-xl text-cream">
            {header
              ? renderRichTextHeading(header)
              : "Resources for Clients & Therapists"}
          </h3>
          <div className="font-aileron text-sm md:text-base text-cream/80">
            {body ? (
              renderRichTextBody(body)
            ) : (
              <p>
                Community resources for clients and therapists are on the
                way, hoping to include guidance on Medicaid and Medicare
                coverage.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
