import type { ColorToken } from "@/lib/content/types";

const THEMEABLE_COLORS: Record<string, string> = {
  "#003d50": "var(--darkTeal)",
};

export function colorValue(token: unknown): string | undefined {
  const value = (token as ColorToken | undefined)?.value;
  return value ? (THEMEABLE_COLORS[value.toLowerCase()] ?? value) : undefined;
}

export function withOpacity(color: string, percent: number): string {
  return `color-mix(in srgb, ${color} ${percent}%, transparent)`;
}
