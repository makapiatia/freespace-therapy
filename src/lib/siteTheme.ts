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
  // Same dark navy text as /2.
  textColor: "var(--darkNavy)",
  quote: {
    backgroundClassName: "bg-merlot",
    // Same yellow as the footer details.
    markClassName: "text-yellow",
    dashClassName: "bg-yellow",
    imageTintClassName: DARK_MERLOT_TINT,
  },
  footer: {
    backgroundClassName: "bg-merlot",
    accentColor: "var(--yellow)",
    // Submit button matches the hero button, like /2.
    buttonColor: "var(--gold)",
    buttonTextColor: "var(--darkNavy)",
  },
  buttonClassName: "bg-gold text-darkNavy",
  // A bit darker than Contentful's grass green (#2a8b23).
  taglineColor: "#237a1d",
  highlightPillClassName: "bg-[#4e8244] text-white",
  cards: oliveGradientCards,
  // "Meet Megan" on cream with no top padding, like /2.1.
  aboutBackgroundColor: "var(--cream)",
  aboutNoTopPadding: true,
};

// Deep seafoam greens (from logo #2's seafoam), stepping darker to lighter
// across the cards like the /9 olive gradient.
// The lightest step still passes 4.5:1 with white text.
const SEAFOAM_STEPS = ["#3a6e54", "#3f765a", "#43795e", "#478063"];

const seafoamGradientCards: CardTheme[] = [0, 1, 2].map((i) => ({
  background: `linear-gradient(90deg, ${SEAFOAM_STEPS[i]}, ${SEAFOAM_STEPS[i + 1]})`,
  textColor: "#ffffff",
  detailColor: "var(--yellow)",
  dark: true,
}));

const LOGO_2_THEME: SiteTheme = {
  // Dark navy text, matching the hero button text.
  textColor: "var(--darkNavy)",
  // Brick sections; all details use the footer yellow.
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
  // Light seafoam pills (about 3.5:1 with white text).
  highlightPillClassName: "bg-[#5a9376] text-white",
  cards: seafoamGradientCards,
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

// `theme` with a different featured image tint.
function withImageTint(
  theme: SiteTheme,
  imageTintClassName: string,
): SiteTheme {
  return { ...theme, quote: { ...theme.quote, imageTintClassName } };
}

// Per-page themes for the logo test pages; others use the default.
const LOGO_THEMES: Partial<Record<string, SiteTheme>> = {
  "2": LOGO_2_THEME,
  // Same merlot and image tint as /9, with "Meet Megan" on cream with no top
  // padding.
  "2.1": {
    ...withImageTint(
      withSectionBackground(LOGO_2_THEME, "bg-merlot"),
      DARK_MERLOT_TINT,
    ),
    aboutBackgroundColor: "var(--cream)",
    aboutNoTopPadding: true,
  },
  "9": LOGO_9_THEME,
};

export function themeForLogo(page: string): SiteTheme {
  return LOGO_THEMES[page] ?? DEFAULT_THEME;
}
