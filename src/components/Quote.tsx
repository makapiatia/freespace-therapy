import Image from "next/image";
import classNames from "classnames";

export default function Quote() {
  return (
    <section
      className={classNames(
        "relative flex flex-1 flex-col justify-center overflow-hidden",
        "min-h-72 bg-navyBlue px-8 py-10 text-center md:min-h-96",
        "lg:min-h-137.5 md:py-8 bg-canvas-texture",
      )}
    >
      <Image
        src="/photos/skysthelimit.jpg"
        alt=""
        aria-hidden
        fill
        className="object-cover object-[55%_15%] opacity-20"
      />
      <div className="relative mx-auto max-w-3xl">
        <span
          aria-hidden
          className="font-diamond block text-4xl text-logoLime md:text-6xl mb-4"
        >
          &ldquo;
        </span>
        <blockquote className="font-aileron-semibold -mt-6 text-lg leading-snug text-cream md:text-2xl">
          Not everything that is faced can be changed, but nothing can be
          changed until it is faced.
        </blockquote>
        <cite className="font-aileron mt-2 md:mt-4 block text-base text-cream/90 not-italic">
          ― James Baldwin
        </cite>
      </div>
      <p
        className={classNames(
          "author-text absolute inset-x-0 bottom-3 px-4 font-work-sans text-[10px]",
          "tracking-wide text-cream/60 md:inset-x-auto md:right-6 md:left-auto",
          "md:w-auto md:px-0 md:text-right md:text-xs",
        )}
      >
        &ldquo;Sky&rsquo;s The Limit&rdquo; &mdash; Photography by Kareem W.
      </p>
    </section>
  );
}
