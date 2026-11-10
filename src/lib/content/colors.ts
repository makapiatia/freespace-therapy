import type { ColorToken } from "@/lib/content/types";

// Site colors that per-page themes can remap: Contentful values matching one
// of these resolve to its CSS variable instead of a fixed hex.
const THEMEABLE_COLORS: Record<string, string> = {
  "#003d50": "var(--darkTeal)",
};

export function colorValue(token: unknown): string | undefined {
  const value = (token as ColorToken | undefined)?.value;
  return value ? (THEMEABLE_COLORS[value.toLowerCase()] ?? value) : undefined;
}
