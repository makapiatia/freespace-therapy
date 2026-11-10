import classNames from "classnames";
import Hero from "@/components/Hero/Hero";
import Quote from "@/components/Quote";
import Services from "@/components/Services/Services";
import Community from "@/components/Footer/Community";
import About from "@/components/About";
import Contact from "@/components/Footer/Contact";
import ContactForm from "@/components/Footer/ContactForm";
import SiteFooter from "@/components/Footer/SiteFooter";
import { LOGO_URL } from "@/lib/logo";
import { siteTheme as theme, type FooterTheme } from "@/lib/siteTheme";
import { getFooterSection, type FooterContent } from "@/lib/content/footer";

async function SiteFooterSection({
  footerPromise,
  logoUrl,
  theme,
}: {
  footerPromise: Promise<FooterContent | null>;
  logoUrl?: string;
  theme: FooterTheme;
}) {
  const footer = await footerPromise;

  return (
    <footer
      className={classNames(
        "pt-10 pb-6 md:pt-12 md:pb-6",
        theme.backgroundClassName,
      )}
      style={
        {
          backgroundColor: footer?.contactBackgroundColor,
          "--footer-accent": theme.accentColor,
          "--footer-button":
            footer?.form?.submitBackgroundColor ??
            theme.buttonColor ??
            theme.accentColor,
          "--footer-button-text":
            footer?.form?.submitTextColor ??
            theme.buttonTextColor ??
            "var(--darkTeal)",
        } as React.CSSProperties
      }
    >
      <div
        className={classNames(
          "mx-auto grid max-w-5xl gap-8 px-8",
          "md:grid-cols-[2fr_2fr] md:items-start md:gap-10",
        )}
      >
        <div className="space-y-6">
          <Contact
            header={footer?.contactHeader}
            body={footer?.contactBody}
            textColor={footer?.contactTextColor}
          />
          <Community
            header={footer?.referencesHeader}
            body={footer?.referencesBody}
          />
        </div>
        <div>
          <ContactForm form={footer?.form ?? undefined} />
        </div>
      </div>
      <div>
        <SiteFooter
          copyrightText={footer?.copyrightText}
          logoUrl={logoUrl ?? footer?.logoUrl}
          logoAlt={footer?.logoAlt}
        />
      </div>
    </footer>
  );
}

export default function HomePage() {
  const logoUrl = LOGO_URL;
  const footerPromise = getFooterSection();

  return (
    <div
      className="flex flex-1 flex-col bg-cream"
      style={
        theme.textColor
          ? ({ "--darkTeal": theme.textColor } as React.CSSProperties)
          : undefined
      }
    >
      <div className="flex min-h-dvh flex-col md:block md:min-h-0">
        <Hero
          logoUrl={logoUrl}
          buttonClassName={theme.buttonClassName}
          taglineColor={theme.taglineColor}
        />
        <Quote theme={theme.quote} />
      </div>
      <Services theme={theme} />
      <About
        backgroundColor={theme.aboutBackgroundColor}
        noTopPadding={theme.aboutNoTopPadding}
      />
      <SiteFooterSection
        footerPromise={footerPromise}
        logoUrl={logoUrl}
        theme={theme.footer}
      />
    </div>
  );
}
