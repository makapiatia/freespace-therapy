import classNames from "classnames";

export default function Quote() {
  return (
    <section
      className={classNames(
        "flex flex-1 flex-col justify-center bg-navyBlue px-8 py-10",
        "text-center md:py-8 bg-canvas-texture",
      )}
    >
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
    </section>
  );
}
