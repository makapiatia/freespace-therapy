import classNames from "classnames";
import type { TextBlockContent } from "@/lib/content/services";
import WorkingTogetherCard from "./WorkingTogetherCard";

export default function WorkingTogether({
  blocks,
}: {
  blocks?: TextBlockContent[];
}) {
  const [workingTogether, whatToExpect] = blocks ?? [];
  const singleCard = blocks?.length === 1;

  return (
    <div className="bg-cream py-10 md:py-12">
      <div
        className={classNames(
          "mx-auto grid max-w-5xl gap-6 px-8",
          "md:grid-cols-[3fr_2fr] md:gap-10",
        )}
      >
        <WorkingTogetherCard
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
          className={singleCard ? "md:col-span-2" : undefined}
        />

        {!singleCard && (
          <WorkingTogetherCard
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
        )}
      </div>
    </div>
  );
}
