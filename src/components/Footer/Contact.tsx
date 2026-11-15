import type { Document } from "@contentful/rich-text-types";
import { renderRichTextBody, renderRichTextHeading } from "@/lib/content/richText";
import { withOpacity } from "@/lib/content/colors";
import { ADDRESS, ADDRESS_MAP_URL } from "@/lib/site";
import ContactIcon from "./ContactIcon";

const LINK_CLASS_NAME =
  "inline-flex max-w-full items-center gap-2 hover:text-(--footer-accent)";

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
        className="font-aileron mt-3 space-y-4 text-sm text-cream/85 max-[396px]:text-[13px] md:text-base"
        style={textColor ? { color: withOpacity(textColor, 85) } : undefined}
      >
        {body ? (
          renderRichTextBody(body, {
            linkClassName: LINK_CLASS_NAME,
            textLinks: { [ADDRESS]: ADDRESS_MAP_URL },
            linkIcon: (href) => <ContactIcon href={href} />,
          })
        ) : (
          <>
            <p>
              Have questions or ready to schedule? Send a message, and
              we&rsquo;ll follow up soon.
            </p>
            <p>
              <a
                href={ADDRESS_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={LINK_CLASS_NAME}
              >
                <ContactIcon href={ADDRESS_MAP_URL} />
                {ADDRESS}
              </a>
              <br />
              <a href="tel:+18622292270" className={LINK_CLASS_NAME}>
                <ContactIcon href="tel:+18622292270" />
                (862) 229-2270
              </a>
              <br />
              <a
                href="mailto:megan@freespace-therapy.com"
                className={LINK_CLASS_NAME}
              >
                <ContactIcon href="mailto:megan@freespace-therapy.com" />
                megan@freespace-therapy.com
              </a>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
