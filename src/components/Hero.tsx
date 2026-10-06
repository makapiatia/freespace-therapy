import Image from "next/image";
import classNames from "classnames";

export default function Hero() {
  return (
    <section id="top" className="bg-darkGreen">
      <div className="mx-auto max-w-4xl px-8 pt-10 md:pt-14">
        <div
          className={classNames(
            "grid gap-8 text-center md:grid-cols-[auto_1fr]",
            "md:items-start md:gap-12 md:text-left",
          )}
        >
          <span
            className={classNames(
              "relative mx-auto block h-40 w-40 shrink-0 overflow-hidden",
              "rounded-full ring-4 ring-logoLime md:mx-0 md:h-48 md:w-48",
            )}
          >
            <Image
              src="/logos/4x/Asset 1@4x.png"
              alt="Freespace Therapy"
              fill
              sizes="192px"
              priority
              className="object-cover"
            />
          </span>

          <div className="max-w-137.5">
            <p
              className={classNames(
                "font-diamond text-sm font-semibold tracking-widest",
                "text-logoLime md:text-base",
              )}
            >
              a free space to feel, heal, and be yourself
            </p>
            <h1
              className={classNames(
                "font-diamond mt-5 text-5xl leading-[1.05] text-cream",
                "sm:text-6xl md:text-6xl lg:text-7xl tracking-wide",
              )}
            >
              welcome to
              <br />
              free space
            </h1>
            <p
              className={classNames(
                "font-aileron mx-auto mt-5 text-md",
                "text-cream/80 md:mx-0 md:text-lg",
              )}
            >
              We offer a compassionate, non-judgmental space to slow down
              and explore what&rsquo;s really going on beneath the
              surface, for adults navigating anxiety, loss,
              uncertainty, or feeling stuck.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-8 pt-10 pb-12 text-center md:pb-14">
        <a
          href="#contact"
          className={classNames(
            "inline-block rounded-full bg-cream px-10 py-4",
            "font-work-sans text-base text-darkGreen transition-colors",
            "hover:bg-logoLime",
          )}
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
