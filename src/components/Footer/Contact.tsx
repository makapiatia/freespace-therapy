import type { Document } from "@contentful/rich-text-types";
import { renderRichTextBody, renderRichTextHeading } from "@/lib/content/richText";
import { withOpacity } from "@/lib/content/colors";
import { ADDRESS, ADDRESS_MAP_URL } from "@/lib/site";

const CARD_CLASS_NAME = "rounded-2xl border border-cream/15 bg-cream/5 p-4";

export default function Contact({
  header,
  body,
  textColor,
}: {
  header?: Document;
  body?: Document;
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
          renderRichTextBody(body, {
            linkClassName: "hover:text-(--footer-accent)",
            textLinks: { [ADDRESS]: ADDRESS_MAP_URL },
            linkParagraphClassName: CARD_CLASS_NAME,
          })
        ) : (
          <>
            <p>
              Have questions or ready to schedule? Send a message, and
              we&rsquo;ll follow up soon.
            </p>
            <p className={CARD_CLASS_NAME}>
              <a
                href={ADDRESS_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-(--footer-accent)"
              >
                {ADDRESS}
              </a>
              <br />
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
