import type { Document } from "@contentful/rich-text-types";
import { renderRichTextBody, renderRichTextHeading } from "@/lib/content/richText";

export default function Contact({
  header,
  body,
}: {
  header?: Document;
  body?: Document;
}) {
  return (
    <div id="contact">
      <h2 className="font-diamond text-3xl text-cream md:text-5xl">
        {header ? renderRichTextHeading(header) : "Contact"}
      </h2>
      <span className="mt-2 block h-1 w-12 rounded-full bg-(--footer-accent)" />
      <div className="font-aileron mt-3 space-y-4 text-md text-cream/85 md:text-lg">
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
