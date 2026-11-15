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

const SHORT_LINE_LENGTH = 50;

function plainText(node: Block | Inline | Text): string {
  if (node.nodeType === "text") return (node as Text).value;
  return (node as Block | Inline).content
    .map((child) => plainText(child as Block | Inline | Text))
    .join("");
}

function paragraphs(node: Block | Inline | Text): string[] {
  if (node.nodeType === "paragraph") return [plainText(node)];
  if (node.nodeType === "text") return [];
  return (node as Block | Inline).content.flatMap((child) =>
    paragraphs(child as Block | Inline | Text),
  );
}

function hasOnlyShortLines(body: Block | undefined): boolean {
  if (!body) return false;
  const lines = paragraphs(body)
    .flatMap((text) => text.split("\n"))
    .filter((line) => line.trim());
  return (
    lines.length > 1 &&
    lines.every((line) => line.length <= SHORT_LINE_LENGTH)
  );
}

function columnTemplate(blocks: TextBlockContent[], minWidth: string) {
  return blocks
    .map((block) => {
      const weight = Math.sqrt(Math.max(textLength(block.body), 1));
      const min = hasOnlyShortLines(block.body) ? "max-content" : minWidth;
      return `minmax(${min},${weight.toFixed(2)}fr)`;
    })
    .join(" ");
}

function lighten(hex: string, points: number): string | undefined {
  const m = /^#([0-9a-f]{6})$/i.exec(hex);
  if (!m) return undefined;
  const [r, g, b] = [0, 2, 4].map(
    (i) => parseInt(m[1].slice(i, i + 2), 16) / 255,
  );
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  const d = max - min;
  const s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));
  const h =
    d === 0
      ? 0
      : max === r
        ? ((g - b) / d + 6) % 6
        : max === g
          ? (b - r) / d + 2
          : (r - g) / d + 4;
  const hue = (h * 60).toFixed(1);
  const saturation = (s * 100).toFixed(1);
  const lightness = Math.min(100, l * 100 + points).toFixed(1);
  return `hsl(${hue} ${saturation}% ${lightness}%)`;
}

const GRADIENT_STEP = 2;

function cardGradient(color: string, index: number): string | undefined {
  const from = lighten(color, index * GRADIENT_STEP);
  const to = lighten(color, (index + 1) * GRADIENT_STEP);
  return from && to ? `linear-gradient(90deg, ${from}, ${to})` : undefined;
}

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
        {cards.map((card, i) => {
          const theme = themes[i % themes.length];
          return (
            <TextSectionCard
              key={i}
              header={card.header}
              body={card.body}
              dark={theme.dark}
              background={
                card.backgroundColor
                  ? (cardGradient(card.backgroundColor, i) ??
                    card.backgroundColor)
                  : theme.background
              }
              textColor={card.textColor ?? theme.textColor}
              detailColor={card.detailColor ?? theme.detailColor}
            />
          );
        })}
      </div>
    </div>
  );
}
