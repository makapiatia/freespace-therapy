export interface CardTheme {
  background: string;
  detailColor: string;
  dark: boolean;
  textColor?: string;
}

export interface QuoteTheme {
  backgroundClassName: string;
  markClassName: string;
  dashClassName: string;
  imageTintClassName?: string;
}

const DARK_MERLOT_TINT = "bg-[#240511] opacity-35";

export interface FooterTheme {
  backgroundClassName: string;
  accentColor: string;
  buttonColor?: string;
  buttonTextColor?: string;
}

export interface SiteTheme {
  textColor?: string;
  quote: QuoteTheme;
  footer: FooterTheme;
  buttonClassName: string;
  taglineColor?: string;
  highlightPillClassName: string;
  cards: CardTheme[];
  aboutBackgroundColor?: string;
  aboutNoTopPadding?: boolean;
}

const SEAFOAM_STEPS = ["#3a6e54", "#3f765a", "#43795e", "#478063"];

const seafoamGradientCards: CardTheme[] = [0, 1, 2].map((i) => ({
  background: `linear-gradient(90deg, ${SEAFOAM_STEPS[i]}, ${SEAFOAM_STEPS[i + 1]})`,
  textColor: "#ffffff",
  detailColor: "var(--yellow)",
  dark: true,
}));

export const siteTheme: SiteTheme = {
  textColor: "var(--darkNavy)",
  quote: {
    backgroundClassName: "bg-[#4a1e28]",
    markClassName: "text-yellow",
    dashClassName: "bg-yellow",
    imageTintClassName: DARK_MERLOT_TINT,
  },
  footer: {
    backgroundClassName: "bg-[#4a1e28]",
    accentColor: "var(--yellow)",
    buttonColor: "var(--gold)",
    buttonTextColor: "var(--darkNavy)",
  },
  buttonClassName: "bg-gold text-darkNavy",
  taglineColor: "#006059",
  highlightPillClassName: "bg-[#5a9376] text-white",
  cards: seafoamGradientCards,
  aboutBackgroundColor: "var(--cream)",
  aboutNoTopPadding: true,
};
