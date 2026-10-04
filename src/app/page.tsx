import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Community from "@/components/Community";
import About from "@/components/About";
import Contact from "@/components/Contact";
import HoursLocation from "@/components/HoursLocation";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-cream">
      <SiteHeader />
      <Hero />
      <Services />
      <Community />
      <About />
      <Contact />
      <HoursLocation />
      <SiteFooter />
    </div>
  );
}
