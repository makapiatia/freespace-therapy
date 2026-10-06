import Image from "next/image";
import classNames from "classnames";

export default function MobileHero() {
  return (
    <div className="hero:hidden max-w-112.5 mx-auto flex flex-col items-center justify-center">
      <p
        className={classNames(
          "hero-tagline font-diamond text-sm font-semibold self-end",
          "tracking-widest whitespace-nowrap text-logoLime",
        )}
      >
        a free space to feel, heal, and be yourself
      </p>

      <div className="mt-3 flex max-w-112.5 items-center gap-5 self-start">
        <span
          className={classNames(
            "relative block aspect-square shrink-0 overflow-hidden",
            "rounded-full ring-4 ring-logoLime",
            "w-[clamp(3.5rem,22vw,11rem)] min-[570px]:w-[125.4px]",
          )}
        >
          <Image
            src="/logos/4x/Asset 1@4x.png"
            alt="Freespace Therapy"
            fill
            sizes="176px"
            priority
            className="object-cover"
          />
        </span>
        <h1
          className={classNames(
            "hero-heading font-diamond leading-[1.05] text-cream",
            "tracking-wide whitespace-nowrap",
            "text-[clamp(2rem,10vw,4.5rem)] min-[570px]:text-[57px]",
          )}
        >
          welcome to
          <br />
          free space
        </h1>
      </div>

      <p className="hero-body mt-6 font-aileron text-md text-cream/80">
        Offering a compassionate, non-judgmental space to slow down and
        explore what&rsquo;s really going on beneath the surface, for
        adults navigating anxiety, loss, uncertainty, or feeling stuck.
      </p>
    </div>
  );
}
