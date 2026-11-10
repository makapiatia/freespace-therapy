import type { Document } from "@contentful/rich-text-types";
import { renderRichTextBody, renderRichTextHeading } from "@/lib/content/richText";
import { withOpacity } from "@/lib/content/colors";

export default function Contact({
  header,
  body,
  textColor,
}: {
  header?: Document;
  body?: Document;
  /** Contentful text color; cream when unset. */
  textColor?: string;
}) {
  return (
    <div id="contact">
      <h2
        className="font-diamond text-3xl text-cream md:text-5xl"
        style={{ color: textColor }}
      >
        {header ? renderRichTextHeading(header) : "Contact"}
      </h2>
      <span className="mt-2 block h-1 w-12 rounded-full bg-(--footer-accent)" />
      <div
        className="font-aileron mt-3 space-y-4 text-sm text-cream/85 md:text-base"
        style={textColor ? { color: withOpacity(textColor, 85) } : undefined}
      >
        {body ? (
          renderRichTextBody(body, { linkClassName: "hover:text-(--footer-accent)" })
        ) : (
          <>
            <p>
              Have questions or ready to schedule? Send a message, and
              we&rsquo;ll follow up soon.
            </p>
            <p>
              <a href="tel:+18622292270" className="hover:text-(--footer-accent)">
                (862) 229-2270
              </a>
              <br />
              <a
                href="mailto:megan@freespace-therapy.com"
                className="hover:text-(--footer-accent)"
              >
                megan@freespace-therapy.com
              </a>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
