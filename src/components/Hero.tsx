import classNames from "classnames";
import MobileHero from "./MobileHero";
import DesktopHero from "./DesktopHero";

export default function Hero() {
  return (
    <section
      id="top"
      className="flex flex-1 flex-col justify-center bg-cream"
    >
      <div className="hero:hidden mt-6 flex justify-center">
        <p
          className={classNames(
            "hero-tagline inline-block w-fit font-diamond text-base font-semibold",
            "tracking-widest text-grassGreen",
          )}
        >
          a free space to feel, heal, and be yourself
        </p>
      </div>

      <div className="mx-auto max-w-4xl px-8 md:pt-14">
        <MobileHero />
        <DesktopHero />
      </div>

      <div className="mx-auto max-w-4xl px-8 pt-4 pb-8 text-center md:pt-6 md:pb-10">
        <a
          href="#contact"
          className={classNames(
            "inline-block rounded-full bg-gold/90 px-6 py-3 font-bold",
            "font-work-sans text-base text-darkGreen transition-colors",
            "hover:bg-gold",
          )}
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
