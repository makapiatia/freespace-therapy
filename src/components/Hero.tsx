import Image from "next/image";
import classNames from "classnames";

export default function Hero() {
  return (
    <section id="top" className="bg-darkIndigo">
      <div className="mx-auto max-w-4xl px-8 pt-10 md:pt-14">
        <div
          className={classNames(
            "grid grid-cols-[auto_1fr] items-start gap-x-8 text-left",
            "min-[540px]:gap-x-12",
          )}
        >
          <span
            className={classNames(
              "relative col-start-2 row-start-1 block h-20 w-20 shrink-0",
              "self-center overflow-hidden rounded-full ring-4",
              "ring-logoLime min-[540px]:col-start-1 min-[540px]:row-span-2",
              "min-[540px]:self-start md:h-52 md:w-52",
            )}
          >
            <Image
              src="/logos/4x/Asset 1@4x.png"
              alt="Freespace Therapy"
              fill
              sizes="(min-width: 768px) 192px, 80px"
              priority
              className="object-cover"
            />
          </span>
          <p
            className={classNames(
              "hero-tagline col-start-1 row-start-1 self-center",
              "font-diamond text-sm font-semibold tracking-widest",
              "text-logoLime min-[540px]:col-start-2 min-[540px]:text-base",
            )}
          >
            a free space to feel, heal, and be yourself
          </p>
          <h1
            className={classNames(
              "hero-heading col-span-2 row-start-2 mt-3 max-w-137.5",
              "font-diamond text-5xl leading-[1.05] text-cream",
              "tracking-wide min-[540px]:col-span-1 min-[540px]:col-start-2",
              "min-[540px]:text-6xl lg:text-7xl",
            )}
          >
            welcome to
            <br />
            free space
          </h1>
          <p
            className={classNames(
              "hero-body col-span-2 row-start-3 mt-4 font-aileron text-md",
              "text-cream/80 min-[540px]:mt-0 min-[540px]:col-span-1",
              "min-[540px]:col-start-2 min-[540px]:max-w-137.5",
              "min-[540px]:text-lg lg:mt-4",
            )}
          >
            We offer a compassionate, non-judgmental space to slow down
            and explore what&rsquo;s really going on beneath the
            surface, for adults navigating anxiety, loss,
            uncertainty, or feeling stuck.
          </p>
        </div>
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
