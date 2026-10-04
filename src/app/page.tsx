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
      <About />
      <Community />
      <footer className="bg-brown pt-16 pb-10 md:pt-20 md:pb-10">
        <div className="mx-auto grid max-w-5xl gap-14 px-8 md:grid-cols-2 md:gap-10">
          <Contact />
          <HoursLocation />
        </div>
        <div className="mt-16 border-t border-cream/15 pt-8">
          <SiteFooter />
        </div>
      </footer>
    </div>
  );
}
