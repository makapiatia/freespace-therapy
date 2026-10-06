import Image from "next/image";
import classNames from "classnames";

export default function Hero() {
  return (
    <section id="top" className="bg-darkIndigo">
      <div className="mx-auto max-w-4xl px-8 pt-10 md:pt-14">
        <div
          className={classNames(
            "grid grid-cols-[auto_auto] items-start hero:gap-x-8",
            "text-left",
            "hero:grid-cols-[auto_1fr] hero:gap-x-12",
          )}
        >
          <p
            className={classNames(
              "hero-tagline col-span-2 row-start-1 font-diamond text-sm",
              "font-semibold tracking-widest text-logoLime",
              "whitespace-nowrap hero:col-span-1 hero:col-start-2",
              "hero:text-base hero:whitespace-normal",
            )}
          >
            a free space to feel, heal, and be yourself
          </p>
          <h1
            className={classNames(
              "hero-heading col-start-1 row-start-2 mt-3 mr-1.5 w-fit",
              "max-w-137.5 self-center font-diamond whitespace-nowrap",
              "text-[clamp(2rem,11vw,3.25rem)] leading-[1.05]",
              "text-cream tracking-wide hero:col-start-2",
              "hero:mr-0 hero:self-start",
              "hero:text-6xl lg:text-7xl",
            )}
          >
            welcome to
            <br />
            free space
          </h1>
          <span
            className={classNames(
              "relative col-start-2 row-start-2 block aspect-square",
              "w-[clamp(3.5rem,18vw,5rem)] shrink-0 self-center",
              "overflow-hidden rounded-full ring-4 ring-logoLime",
              "hero:col-start-1 hero:row-start-1",
              "hero:row-span-3 hero:w-20",
              "hero:self-start md:h-52 md:w-52",
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
              "hero-body col-span-2 row-start-3 mt-4 font-aileron text-md",
              "text-cream/80 hero:mt-0 hero:col-span-1",
              "hero:col-start-2 hero:max-w-137.5",
              "hero:text-lg lg:mt-4",
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
