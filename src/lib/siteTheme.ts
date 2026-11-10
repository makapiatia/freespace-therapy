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
  /** Featured image tint color and strength; defaults to dark green. */
  imageTintClassName?: string;
}

// Near-black merlot featured image tint.
const DARK_MERLOT_TINT = "bg-[#240511] opacity-35";

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
  /** "Meet Megan" background; omit to use the Contentful color. */
  aboutBackgroundColor?: string;
  /** Drop "Meet Megan"'s top padding. */
  aboutNoTopPadding?: boolean;
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

// Deep seafoam greens (from logo #2's seafoam), stepping darker to lighter
// so the gradient flows from one card into the next.
// The lightest step still passes 4.5:1 with white text.
const SEAFOAM_STEPS = ["#3a6e54", "#3f765a", "#43795e", "#478063"];

const seafoamGradientCards: CardTheme[] = [0, 1, 2].map((i) => ({
  background: `linear-gradient(90deg, ${SEAFOAM_STEPS[i]}, ${SEAFOAM_STEPS[i + 1]})`,
  textColor: "#ffffff",
  detailColor: "var(--yellow)",
  dark: true,
}));

// Base for the logo #2 pages, which each swap in their own section color.
const LOGO_2_THEME: SiteTheme = {
  // Dark navy text, matching the hero button text.
  textColor: "var(--darkNavy)",
  // All details use the footer yellow.
  quote: {
    backgroundClassName: "bg-merlot",
    markClassName: "text-yellow",
    dashClassName: "bg-yellow",
    imageTintClassName: DARK_MERLOT_TINT,
  },
  footer: {
    backgroundClassName: "bg-merlot",
    // Submit button matches the hero button.
    accentColor: "var(--yellow)",
    buttonColor: "var(--gold)",
    buttonTextColor: "var(--darkNavy)",
  },
  // Marigold button.
  buttonClassName: "bg-gold text-darkNavy",
  // Deep teal from logo #2's swoosh.
  taglineColor: "#006059",
  // Light seafoam pills (about 3.5:1 with white text).
  highlightPillClassName: "bg-[#5a9376] text-white",
  cards: seafoamGradientCards,
  // "Meet Megan" on cream with no top padding.
  aboutBackgroundColor: "var(--cream)",
  aboutNoTopPadding: true,
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
  // Deep brown halfway between wenge and merlot.
  "2.1": withSectionBackground(LOGO_2_THEME, "bg-[#4a1e28]"),
  // Raisin.
  "2.3": withSectionBackground(LOGO_2_THEME, "bg-[#392b2d]"),
  // Velvet cloak.
  "2.4": withSectionBackground(LOGO_2_THEME, "bg-[#382930]"),
};

export function themeForLogo(page: string): SiteTheme {
  return LOGO_THEMES[page] ?? DEFAULT_THEME;
}
