import classNames from "classnames";

const topSpecialties = ["Anxiety", "Family Issues", "Grief or Loss"];

const moreSpecialties = [
  "Bipolar Disorder",
  "Depression",
  "OCD",
  "Sleep Disorder",
  "Stress Management",
  "Anger Management",
  "Cultural & Ethnic Issues",
  "Men's Issues",
  "Relationship Issues",
  "Women's Issues",
  "Identity Issues",
  "Trauma",
  "PTSD",
  "Transgender Issues",
];

const therapyMethods = [
  "Strength-Based",
  "Motivational Interviewing",
  "Interpersonal Psychotherapy (IPT)",
  "Cognitive Behavioral (CBT)",
  "Humanistic",
  "Psychodynamic",
];

function TagRow({
  items,
  tone,
  mono = false,
}: {
  items: string[];
  tone: "clay" | "outline";
  mono?: boolean;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {items.map((item) => (
        <span
          key={item}
          className={classNames(
            "rounded-full px-3 py-1 text-xs",
            mono ? "font-victor-mono" : "font-work-sans",
            tone === "clay"
              ? "bg-clay text-cream"
              : "border border-logoLime bg-logoLime/10 text-darkGreen/80",
          )}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-20">
      <div className="mx-auto max-w-2xl px-8 text-center">
        <h2 className="font-diamond text-4xl text-darkGreen md:text-5xl">
          Services &amp; Specialties
        </h2>
        <p className="font-cooper-hewitt mt-4 text-base text-darkGreen/80 md:text-lg">
          Individual therapy for adults and seniors navigating anxiety,
          loss, uncertainty, or feeling stuck, offered virtually and in
          person.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl px-8">
        <TagRow items={topSpecialties} tone="clay" mono />
        <div className="mt-4">
          <TagRow items={moreSpecialties} tone="outline" />
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-2xl px-8 text-center">
        <h3 className="font-victor-mono text-sm tracking-wide text-mediumGreen uppercase">
          Therapy Methods
        </h3>
        <div className="mt-3">
          <TagRow items={therapyMethods} tone="outline" mono />
        </div>
      </div>

      <div className="mt-16 border-t border-logoGreen/20 pt-12">
        <div className="mx-auto grid max-w-5xl gap-10 px-8 md:grid-cols-2">
          <div>
            <h3 className="font-cooper-hewitt-medium text-xl text-darkGreen">
              My Approach to Therapy
            </h3>
            <p className="font-cooper-hewitt mt-3 text-base text-darkGreen/80">
              My approach to therapy is individualized, blending
              humanistic, psychodynamic, and strengths-based approaches
              with tools from CBT, DBT, and somatic work. I believe much
              of what shows up as stresses in people can be understood in
              terms of deep roots and old relational patterns; we may
              explore those together at your own pace. I welcome
              journaling, dreamwork, and other forms of creative
              expression as a part of our process.
            </p>
            <p className="font-cooper-hewitt mt-4 text-base text-darkGreen/80">
              In all cases, the most successful therapy arises from a
              solid, trust-based, mutually respectful relationship, so
              building and maintaining that foundation will be an
              important part of our work together.
            </p>
          </div>

          <div>
            <h3 className="font-cooper-hewitt-medium text-xl text-darkGreen">
              What to Expect
            </h3>
            <p className="font-cooper-hewitt mt-3 text-base text-darkGreen/80">
              At the first session you can expect some more information
              about therapy, a few initial assessment questions, and a
              lot of space to share what you are bringing. I will also
              answer any questions or concerns that you may have. Then,
              together, we will start to identify next steps toward the
              changes that you are looking to see.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
