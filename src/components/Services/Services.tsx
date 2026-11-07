import classNames from "classnames";
import TextSection from "./TextSection";
import { getServicesSection } from "@/lib/content/services";
import { renderRichTextHeading, renderRichTextInline } from "@/lib/content/richText";

const fallbackTopSpecialties = ["Anxiety", "Family Issues", "Grief or Loss"];

const fallbackMoreSpecialties = [
  "Depression",
  "Sleep Disorder",
  "Stress Management",
  "Anger Management",
  "Cultural Issues",
  "Men's Issues",
  "Women's Issues",
  "Relationship Issues",
  "Identity Issues",
  "Trauma",
  "Transgender Issues",
];

const fallbackTherapyMethods = [
  "Humanistic",
  "Psychodynamic",
  "Strengths-Based",
  "Interpersonal",
];

function TagRow({
  items,
  textColor,
  backgroundColor,
  bold,
}: {
  items: string[];
  textColor?: string;
  backgroundColor?: string;
  bold?: boolean;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {items.map((item) => (
        <span
          key={item}
          className={classNames(
            "rounded-full px-3 py-1 text-sm font-work-sans",
            bold
              ? "bg-mediumGreen/90 text-cream font-bold"
              : "bg-logoLime/30 text-darkTeal/80",
          )}
          style={{ backgroundColor, color: textColor }}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default async function Services() {
  const content = await getServicesSection();
  const specialtyList = content?.lists[0];
  const methodsList = content?.lists[1];

  const topSpecialties = specialtyList?.highlighted.length
    ? specialtyList.highlighted
    : fallbackTopSpecialties;
  const moreSpecialties = specialtyList?.items.length
    ? specialtyList.items
    : fallbackMoreSpecialties;
  const therapyMethods = methodsList?.items.length
    ? methodsList.items
    : fallbackTherapyMethods;

  return (
    <section id="services" className="pt-8 md:pt-12">
      <div className="mx-auto max-w-2xl px-8 text-center">
        <h2
          className="font-diamond text-3xl text-darkTeal md:text-5xl"
          style={
            specialtyList?.headerColor
              ? { color: specialtyList.headerColor }
              : undefined
          }
        >
          {specialtyList?.header
            ? renderRichTextHeading(specialtyList.header)
            : "Individual Therapy"}
        </h2>
        <p className="font-aileron mt-2 md:mt-4 text-sm text-darkTeal/80 md:text-lg">
          {specialtyList?.description
            ? renderRichTextInline(specialtyList.description)
            : "A space for adults navigating anxiety, loss, uncertainty, or feeling stuck; sessions offered virtually and in person."}
        </p>
      </div>

      <div className="mx-auto mt-6 md:mt-10 max-w-6xl px-8">
        <TagRow
          items={topSpecialties}
          textColor={specialtyList?.highlightedTextColor}
          backgroundColor={specialtyList?.highlightedBackgroundColor}
          bold
        />
        <div className="mt-4">
          <TagRow
            items={moreSpecialties}
            textColor={specialtyList?.itemsColor}
            backgroundColor={specialtyList?.itemsBackgroundColor}
          />
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-8 text-center">
        <h3
          className="font-diamond text-3xl text-darkTeal md:text-5xl"
          style={
            methodsList?.headerColor
              ? { color: methodsList.headerColor }
              : undefined
          }
        >
          {methodsList?.header
            ? renderRichTextHeading(methodsList.header)
            : "Therapy Methods"}
        </h3>
        <div className="mt-3">
          <TagRow
            items={therapyMethods}
            textColor={methodsList?.itemsColor}
            backgroundColor={methodsList?.itemsBackgroundColor}
          />
        </div>
      </div>

      <TextSection blocks={content?.blocks} />
    </section>
  );
}
