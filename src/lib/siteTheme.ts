export interface CardTheme {
  background: string;
  detailColor: string;
  /** Use cream text for a dark background. */
  dark: boolean;
  /** Overrides the card's heading and body text color. */
  textColor?: string;
}

export interface QuoteTheme {
  /** Section background behind the quote and featured image. */
  backgroundClassName: string;
  /** Quote mark color. */
  markClassName: string;
  /** Divider dash color between the quote and image. */
  dashClassName: string;
}

export interface FooterTheme {
  backgroundClassName: string;
  /** Accent bar, link hovers, input focus and submit button color. */
  accentColor: string;
  /** Submit button background; defaults to `accentColor`. */
  buttonColor?: string;
  /** Submit button text color; defaults to dark teal. */
  buttonTextColor?: string;
}

export interface SiteTheme {
  /** Replaces dark teal text across the page (including Contentful's). */
  textColor?: string;
  quote: QuoteTheme;
  footer: FooterTheme;
  /** Colors for the hero "Get in Touch" button. */
  buttonClassName: string;
  /** Hero tagline color; omit to use the Contentful color. */
  taglineColor?: string;
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

const MERLOT_FOOTER: FooterTheme = {
  backgroundClassName: "bg-merlot",
  accentColor: "var(--yellow)",
};

const DEFAULT_THEME: SiteTheme = {
  quote: MERLOT_QUOTE,
  footer: MERLOT_FOOTER,
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
    // Same yellow as the footer details.
    markClassName: "text-yellow",
    dashClassName: "bg-yellow",
  },
  footer: {
    backgroundClassName: "bg-merlot",
    accentColor: "var(--yellow)",
    // Submit button matches the hero button, like /2.
    buttonColor: "var(--gold)",
    buttonTextColor: "var(--darkNavy)",
  },
  buttonClassName: "bg-gold text-darkNavy",
  highlightPillClassName: "bg-[#4e8244] text-white",
  cards: oliveGradientCards,
};

// Deep seafoam greens (from logo #2's seafoam), stepping darker to lighter
// across the cards like the /9 olive gradient.
// The lightest step still passes 4.5:1 with white text.
const SEAFOAM_STEPS = ["#3a6e54", "#3f765a", "#43795e", "#478063"];

const seafoamGradientCards: CardTheme[] = [0, 1, 2].map((i) => ({
  background: `linear-gradient(90deg, ${SEAFOAM_STEPS[i]}, ${SEAFOAM_STEPS[i + 1]})`,
  textColor: "#ffffff",
  // Same light orange as the /7 quote and footer accents.
  detailColor: "#f5a762",
  dark: true,
}));

const LOGO_7_THEME: SiteTheme = {
  quote: {
    // Brick red from the right side of logo #7's swoosh, with brighter
    // take on the logo's orange for accents.
    backgroundClassName: "bg-[#802820]",
    markClassName: "text-[#f5a762]",
    dashClassName: "bg-[#f5a762]",
  },
  // Matches the quote section; submit button uses logo #7's orange sun,
  // with cream text.
  footer: {
    backgroundClassName: "bg-[#802820]",
    accentColor: "#f5a762",
    buttonColor: "#c06327",
    buttonTextColor: "var(--cream)",
  },
  // Deeper take on logo #2's seafoam green.
  buttonClassName: "bg-[#43795e] text-white",
  // Same deep teal tagline as /2.
  taglineColor: "#006059",
  highlightPillClassName: "bg-[#43795e] text-white",
  cards: seafoamGradientCards,
};

const LOGO_2_THEME: SiteTheme = {
  // Dark navy text, matching the hero button text.
  textColor: "var(--darkNavy)",
  // Brick sections, pills and cards follow /7; all details use the footer
  // yellow.
  quote: {
    backgroundClassName: "bg-[#802820]",
    markClassName: "text-yellow",
    dashClassName: "bg-yellow",
  },
  footer: {
    backgroundClassName: "bg-[#802820]",
    // Same yellow as the /9 footer; submit button matches the hero button.
    accentColor: "var(--yellow)",
    buttonColor: "var(--gold)",
    buttonTextColor: "var(--darkNavy)",
  },
  // Same marigold button as /9.
  buttonClassName: "bg-gold text-darkNavy",
  // Deep teal from logo #2's swoosh.
  taglineColor: "#006059",
  // Lighter than /7's pills (about 4:1 with white text).
  highlightPillClassName: "bg-[#528a6e] text-white",
  // /7's seafoam gradient with yellow dashes.
  cards: seafoamGradientCards.map((card) => ({
    ...card,
    detailColor: "var(--yellow)",
  })),
};

// `theme` with a different background for its quote and footer sections.
function withSectionBackground(
  theme: SiteTheme,
  backgroundClassName: string,
): SiteTheme {
  return {
    ...theme,
    quote: { ...theme.quote, backgroundClassName },
    footer: { ...theme.footer, backgroundClassName },
  };
}

// Per-page themes for the logo test pages; others use the default.
const LOGO_THEMES: Partial<Record<string, SiteTheme>> = {
  "2": LOGO_2_THEME,
  // Cinnamon brown in place of brick.
  "2.1": withSectionBackground(LOGO_2_THEME, "bg-[#7e5236]"),
  "7": LOGO_7_THEME,
  "9": LOGO_9_THEME,
  // Redder take on the /2.1 brown, in place of merlot.
  "9.1": withSectionBackground(LOGO_9_THEME, "bg-[#7f4332]"),
};

export function themeForLogo(page: string): SiteTheme {
  return LOGO_THEMES[page] ?? DEFAULT_THEME;
}
