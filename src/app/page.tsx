import classNames from "classnames";
import Hero from "@/components/Hero/Hero";
import Quote from "@/components/Quote";
import Services from "@/components/Services/Services";
import Community from "@/components/Footer/Community";
import About from "@/components/About";
import Contact from "@/components/Footer/Contact";
import ContactForm from "@/components/Footer/ContactForm";
import SiteFooter from "@/components/Footer/SiteFooter";
import { getFooterSection, type FooterContent } from "@/lib/content/footer";

// Re-fetch Contentful data at most once per minute instead of baking it
// into the page permanently at build time, so CMS edits show up without
// needing a new code deployment.
export const revalidate = 60;

// Awaits the already-in-flight footer fetch rather than blocking on it at
// the top of Home(), so it resolves in parallel with Hero/Quote/
// Services/About's own Contentful fetches instead of gating all of them
// behind it.
async function SiteFooterSection({
  footerPromise,
}: {
  footerPromise: Promise<FooterContent | null>;
}) {
  const footer = await footerPromise;

  return (
    <footer
      className="bg-navyBlue bg-canvas-texture pt-10 pb-6 md:pt-12 md:pb-6"
      style={
        footer?.contactBackgroundColor
          ? { backgroundColor: footer.contactBackgroundColor }
          : undefined
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
          logoUrl={footer?.logoUrl}
          logoAlt={footer?.logoAlt}
        />
      </div>
    </footer>
  );
}

export default function Home() {
  // Kick off the fetch now, without awaiting it here — awaiting inline
  // would block React from even starting to render (and fetch data for)
  // the rest of the tree below.
  const footerPromise = getFooterSection();

  return (
    <div className="flex flex-1 flex-col bg-cream">
      <div className="flex min-h-dvh flex-col md:block md:min-h-0">
        <Hero />
        <Quote />
      </div>
      <Services />
      <About />
      <SiteFooterSection footerPromise={footerPromise} />
    </div>
  );
}
