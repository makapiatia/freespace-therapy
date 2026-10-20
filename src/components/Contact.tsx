import type { Document } from "@contentful/rich-text-types";
import { renderRichTextBody, renderRichTextHeading } from "@/lib/content/richText";

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
        style={textColor ? { color: textColor } : undefined}
      >
        {header ? renderRichTextHeading(header) : "Contact"}
      </h2>
      <span className="mt-2 block h-1 w-12 rounded-full bg-logoLime" />
      <div
        className="font-aileron mt-3 space-y-4 text-md text-cream/80 md:text-lg"
        style={textColor ? { color: textColor } : undefined}
      >
        {body ? (
          renderRichTextBody(body, { linkClassName: "hover:text-logoLime" })
        ) : (
          <>
            <p>
              Have questions or ready to schedule? Send a message and
              we&rsquo;ll follow up soon.
            </p>
            <p>
              <a href="tel:+10000000000" className="hover:text-logoLime">
                (000) 000-0000
              </a>
              <br />
              <a
                href="mailto:megan@freespace-therapy.com"
                className="hover:text-logoLime"
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
