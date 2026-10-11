import classNames from "classnames";
import WorkingTogether from "./WorkingTogether";

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
}: {
  items: string[];
  tone: "accent" | "outline";
}) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {items.map((item) => (
        <span
          key={item}
          className={classNames(
            "rounded-full px-3 py-1 text-sm font-work-sans",
            tone === "accent"
              ? "bg-mediumGreen text-cream font-bold"
              : "border border-logoLime bg-logoLime/10 text-darkTeal/80",
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
    <section id="services" className="pt-8 md:pt-12">
      <div className="mx-auto max-w-2xl px-8 text-center">
        <h2 className="font-diamond text-3xl text-darkTeal md:text-5xl">
          Individual Therapy
        </h2>
        <p className="font-aileron mt-2 md:mt-4 text-sm text-darkTeal/80 md:text-lg">
          A space for adults navigating anxiety,
          loss, uncertainty, or feeling stuck, sessions offered virtually and in
          person.
        </p>
      </div>

      <div className="mx-auto mt-6 md:mt-10 max-w-6xl px-8">
        <TagRow items={topSpecialties} tone="accent"/>
        <div className="mt-4">
          <TagRow items={moreSpecialties} tone="outline" />
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-8 text-center">
        <h3 className="font-diamond text-lg tracking-wide text-darkTeal">
          Therapy Methods
        </h3>
        <div className="mt-3">
          <TagRow items={therapyMethods} tone="outline" />
        </div>
      </div>

      <WorkingTogether />
    </section>
  );
}
