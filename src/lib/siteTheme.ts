export interface CardTheme {
  background: string;
  detailColor: string;
  /** Use cream text for a dark background. */
  dark: boolean;
}

export interface QuoteTheme {
  /** Section background behind the quote and featured image. */
  backgroundClassName: string;
  /** Quote mark color. */
  markClassName: string;
  /** Divider dash color between the quote and image. */
  dashClassName: string;
}

export interface SiteTheme {
  quote: QuoteTheme;
  /** Colors for the hero "Get in Touch" button. */
  buttonClassName: string;
  /** Colors for the highlighted specialty pills. */
  highlightPillClassName: string;
  /** Text section cards, applied in order and cycled. */
  cards: CardTheme[];
}

const MERLOT_QUOTE: QuoteTheme = {
  backgroundClassName: "bg-merlot",
  markClassName: "text-lightYellow",
  dashClassName: "bg-lightYellow",
};

const DEFAULT_THEME: SiteTheme = {
  quote: MERLOT_QUOTE,
  buttonClassName: "bg-brick text-cream",
  highlightPillClassName: "bg-seaGreen text-darkNavy",
  cards: [
    { background: "var(--seaGreen)", detailColor: "var(--brick)", dark: false },
    { background: "var(--darkTeal)", detailColor: "var(--orange)", dark: true },
    { background: "var(--merlot)", detailColor: "var(--yellow)", dark: true },
  ],
};

// Olive greens from where logo #9's swoosh blends toward gold, stepping
// darker to lighter so the gradient flows from one card into the next.
const OLIVE_STEPS = ["#3a6534", "#42713a", "#4e763a", "#5a7a3a"];

const oliveGradientCards: CardTheme[] = [0, 1, 2].map((i) => ({
  background: `linear-gradient(90deg, ${OLIVE_STEPS[i]}, ${OLIVE_STEPS[i + 1]})`,
  // Logo #9's sun yellow.
  detailColor: "var(--yellow)",
  dark: true,
}));

// Finalized: a full theme (not overrides) so default changes can't affect it.
const LOGO_9_THEME: SiteTheme = {
  quote: {
    backgroundClassName: "bg-merlot",
    markClassName: "text-lightYellow",
    dashClassName: "bg-lightYellow",
  },
  buttonClassName: "bg-gold text-darkNavy",
  highlightPillClassName: "bg-[#42713a] text-white",
  cards: oliveGradientCards,
};

const LOGO_7_THEME: SiteTheme = {
  quote: {
    // Brick red from the right side of logo #7's swoosh, with brighter
    // take on the logo's orange for accents.
    backgroundClassName: "bg-[#802820]",
    markClassName: "text-[#f39a4c]",
    dashClassName: "bg-[#f39a4c]",
  },
  buttonClassName: "bg-[#42713a] text-cream",
  highlightPillClassName: "bg-[#42713a] text-white",
  cards: oliveGradientCards,
};

// Per-logo themes for the logo test pages; others use the default.
const LOGO_THEMES: Partial<Record<number, SiteTheme>> = {
  7: LOGO_7_THEME,
  9: LOGO_9_THEME,
};

export function themeForLogo(option: number): SiteTheme {
  return LOGO_THEMES[option] ?? DEFAULT_THEME;
}
