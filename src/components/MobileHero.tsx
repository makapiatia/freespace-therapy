import Image from "next/image";
import classNames from "classnames";

export default function MobileHero() {
  return (
    <div className="hero:hidden max-w-112.5 mx-auto flex flex-col items-center justify-center text-center">
      <p
        className={classNames(
          "hero-tagline font-diamond text-sm font-semibold",
          "tracking-widest whitespace-nowrap text-darkGreen",
          "rounded-full bg-logoLime/50 px-4 py-1",
        )}
      >
        a free space to feel, heal, and be yourself
      </p>
      <span
        className={classNames(
          "relative block aspect-square shrink-0 overflow-hidden rounded-full",
          "w-[clamp(7rem,40vw,18rem)] min-[570px]:w-57 mt-4",
        )}
      >
        <Image
          src="/logos/1x/greenDragonflyLogo.png"
          alt="Freespace Therapy"
          fill
          sizes="288px"
          priority
          className="object-cover"
        />
      </span>
      <h1
        className={classNames(
          "hero-heading mt-2 font-diamond leading-[1.05] text-darkTeal",
          "tracking-wide whitespace-nowrap",
          "text-[clamp(2rem,10vw,4.5rem)] min-[570px]:text-[57px]",
        )}
      >
        welcome to
        <br />
        free space
      </h1>

      <p className="hero-body mt-4 font-aileron text-sm text-darkTeal/80">
        Offering a compassionate, non-judgmental space to slow down and
        explore what&rsquo;s really going on beneath the surface, for
        adults navigating anxiety, loss, uncertainty, or feeling stuck.
      </p>
    </div>
  );
}
