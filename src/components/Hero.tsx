import classNames from "classnames";
import MobileHero from "./MobileHero";
import DesktopHero from "./DesktopHero";

export default function Hero() {
  return (
    <section id="top" className="bg-darkIndigo">
      <div className="mx-auto max-w-4xl px-8 pt-10 md:pt-14">
        <MobileHero />
        <DesktopHero />
      </div>

      <div className="mx-auto max-w-4xl px-8 pt-8 pb-8 text-center md:pb-10">
        <a
          href="#contact"
          className={classNames(
            "inline-block rounded-full bg-cream px-10 py-4",
            "font-work-sans text-base text-darkTeal transition-colors",
            "hover:bg-logoLime",
          )}
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
