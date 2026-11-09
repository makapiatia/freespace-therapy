import classNames from "classnames";
import type { Block, Inline, Text } from "@contentful/rich-text-types";
import type { TextBlockContent } from "@/lib/content/services";
import type { CardTheme } from "@/lib/siteTheme";
import TextSectionCard from "./TextSectionCard";

const MAX_CARDS = 3;

function textLength(node: Block | Inline | Text | undefined): number {
  if (!node) return 0;
  if (node.nodeType === "text") return (node as Text).value.length;
  return (node as Block | Inline).content.reduce(
    (sum, child) => sum + textLength(child as Block | Inline | Text),
    0,
  );
}

// Columns grow with body length, softened with sqrt so a longer card
// takes a bit more room without crowding out the others.
function columnTemplate(blocks: TextBlockContent[], minWidth: string) {
  return blocks
    .map((block) => {
      const weight = Math.sqrt(Math.max(textLength(block.body), 1));
      return `minmax(${minWidth},${weight.toFixed(2)}fr)`;
    })
    .join(" ");
}

// Card colors come from the site theme rather than Contentful.
export default function TextSection({
  blocks,
  themes,
}: {
  blocks?: TextBlockContent[];
  themes: CardTheme[];
}) {
  const cards = (blocks ?? []).slice(0, MAX_CARDS);
  if (cards.length === 0) return null;

  return (
    <div className="bg-cream py-10 md:py-12">
      <div
        className={classNames(
          "grid gap-6 px-8",
          // 350px minimums don't fit two cards at md, so they only kick in at lg.
          cards.length === 2 &&
            "md:grid-cols-(--text-cols) md:gap-10 lg:grid-cols-(--text-cols-min)",
          cards.length === 3 && "xl:grid-cols-(--text-cols-min)",
        )}
        style={
          {
            "--text-cols": columnTemplate(cards, "0"),
            "--text-cols-min": columnTemplate(cards, "350px"),
          } as React.CSSProperties
        }
      >
        {cards.map((card, i) => (
          <TextSectionCard
            key={i}
            header={card.header}
            body={card.body}
            {...themes[i % themes.length]}
          />
        ))}
      </div>
    </div>
  );
}
