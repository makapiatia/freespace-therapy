import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import Services from "@/components/Services";
import Community from "@/components/Community";
import About from "@/components/About";
import Contact from "@/components/Contact";
import HoursLocation from "@/components/HoursLocation";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-cream">
      <Hero />
      <Quote />
      <Services />
      <Community />
      <About />
      <section className="bg-clay/5 px-8 py-16 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-14 md:grid-cols-2 md:gap-10">
          <Contact />
          <HoursLocation />
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
