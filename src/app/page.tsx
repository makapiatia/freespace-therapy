import classNames from "classnames";
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import FeaturedImageSection from "@/components/FeaturedImageSection";
import Services from "@/components/Services";
import Community from "@/components/Community";
import About from "@/components/About";
import Contact from "@/components/Footer/Contact";
import ContactForm from "@/components/Footer/ContactForm";
import SiteFooter from "@/components/Footer/SiteFooter";
import { getFooterSection } from "@/lib/content/footer";

export default async function Home() {
  const footer = await getFooterSection();

  return (
    <div className="flex flex-1 flex-col bg-cream">
      <div className="flex min-h-dvh flex-col md:block md:min-h-0">
        <Hero />
        <Quote />
      </div>
      <FeaturedImageSection />
      <Services />
      <About />
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
    </div>
  );
}
