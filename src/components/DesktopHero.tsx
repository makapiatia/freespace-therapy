import Image from "next/image";
import classNames from "classnames";

export default function DesktopHero() {
  return (
    <div
      className={classNames(
        "hidden hero:grid hero:grid-cols-[auto_1fr] hero:items-start",
        "hero:gap-x-12",
      )}
    >
      <span className="relative row-span-3 block h-52 w-52 shrink-0 overflow-hidden rounded-full ring-4 ring-logoLime">
        <Image
          src="/logos/4x/Asset 1@4x.png"
          alt="Freespace Therapy"
          fill
          sizes="208px"
          priority
          className="object-cover"
        />
      </span>

      <p className="hero-tagline font-diamond text-base font-semibold tracking-widest text-logoLime">
        a free space to feel, heal, and be yourself
      </p>

      <h1
        className={classNames(
          "hero-heading mt-3 max-w-137.5 font-diamond text-6xl",
          "leading-[1.05] text-cream tracking-wide lg:text-7xl",
        )}
      >
        welcome to
        <br />
        free space
      </h1>

      <p className="hero-body mt-4 max-w-137.5 font-aileron text-lg text-cream/80 lg:mt-4">
        Offering a compassionate, non-judgmental space to slow down and
        explore what&rsquo;s really going on beneath the surface, for
        adults navigating anxiety, loss, uncertainty, or feeling stuck.
      </p>
    </div>
  );
}
