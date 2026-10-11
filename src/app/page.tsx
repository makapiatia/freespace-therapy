import classNames from "classnames";
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import Services from "@/components/Services";
import Community from "@/components/Community";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ContactForm from "@/components/ContactForm";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-cream">
      <div className="flex min-h-dvh flex-col md:block md:min-h-0">
        <Hero />
        <Quote />
      </div>
      <Services />
      <About />
      <footer className="bg-navyBlue/90 pt-10 pb-6 md:pt-12 md:pb-6">
        <div
          className={classNames(
            "mx-auto grid max-w-5xl gap-8 px-8",
            "md:grid-cols-[2fr_2fr] md:items-start md:gap-10",
          )}
        >
          <div className="space-y-6">
            <Contact />
            <Community />
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
        <div>
          <SiteFooter />
        </div>
      </footer>
    </div>
  );
}
