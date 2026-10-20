import classNames from "classnames";
import type { TextBlockContent } from "@/lib/content/services";
import {
  renderRichTextBody,
  renderRichTextHeading,
} from "@/lib/content/richText";

function Card({
  header,
  body,
  textColor,
  backgroundColor,
  detailColor,
  fallbackHeader,
  fallbackBody,
}: {
  header?: TextBlockContent["header"];
  body?: TextBlockContent["body"];
  textColor?: string;
  backgroundColor?: string;
  detailColor?: string;
  fallbackHeader: string;
  fallbackBody: React.ReactNode;
}) {
  return (
    <div
      className={classNames(
        "rounded-2xl border border-cream/10 bg-darkGreen p-6 md:p-8",
        "bg-canvas-texture overflow-hidden",
      )}
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <span
        className="block h-1 w-10 rounded-full bg-logoLime"
        style={detailColor ? { backgroundColor: detailColor } : undefined}
      />
      <h3
        className="font-aileron-semibold mt-4 text-lg text-cream md:text-xl"
        style={textColor ? { color: textColor } : undefined}
      >
        {header ? renderRichTextHeading(header) : fallbackHeader}
      </h3>
      <div
        className="mt-3 space-y-3 font-aileron text-sm text-cream/80 md:text-base"
        style={textColor ? { color: textColor } : undefined}
      >
        {body ? renderRichTextBody(body) : fallbackBody}
      </div>
    </div>
  );
}

export default function WorkingTogether({
  blocks,
}: {
  blocks?: TextBlockContent[];
}) {
  const [workingTogether, whatToExpect] = blocks ?? [];

  return (
    <div className="bg-cream py-10 md:py-12">
      <div
        className={classNames(
          "mx-auto grid max-w-5xl gap-6 px-8",
          "md:grid-cols-[3fr_2fr] md:gap-10",
        )}
      >
        <Card
          header={workingTogether?.header}
          body={workingTogether?.body}
          textColor={workingTogether?.textColor}
          backgroundColor={workingTogether?.backgroundColor}
          detailColor={workingTogether?.detailColor}
          fallbackHeader="Working Together"
          fallbackBody={
            <>
              <p>
                My approach to therapy is individualized, blending
                humanistic, psychodynamic, and strengths-based approaches
                with tools from CBT, DBT, and somatic work. I believe much
                of what shows up as stresses in people can be understood in
                terms of deep roots and old relational patterns; we may
                explore those together at your own pace. I welcome
                journaling, dreamwork, and other forms of creative
                expression as a part of our process.
              </p>
              <p>
                In all cases, the most successful therapy arises from a
                solid, trust-based, mutually respectful relationship, so
                building and maintaining that foundation will be an
                important part of our work together.
              </p>
            </>
          }
        />

        <Card
          header={whatToExpect?.header}
          body={whatToExpect?.body}
          textColor={whatToExpect?.textColor}
          backgroundColor={whatToExpect?.backgroundColor}
          detailColor={whatToExpect?.detailColor}
          fallbackHeader="What to Expect"
          fallbackBody={
            <p>
              At the first session you can expect some more information
              about therapy, a few initial assessment questions, and a lot
              of space to share what you are bringing. I will also answer
              any questions or concerns that you may have. Then, together,
              we will start to identify next steps toward the changes that
              you are looking to see.
            </p>
          }
        />
      </div>
    </div>
  );
}
