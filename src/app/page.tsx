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
      <footer className="bg-brown pt-10 pb-6 md:pt-12 md:pb-6">
        <div className="mx-auto grid max-w-5xl gap-14 px-8 md:grid-cols-2 md:gap-10">
          <Contact />
          <HoursLocation />
        </div>
        <div>
          <SiteFooter />
        </div>
      </footer>
    </div>
  );
}
