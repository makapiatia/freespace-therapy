export default function Quote() {
  return (
    <section className="border-y-2 border-logoGreen/30 bg-logoGreen/5 px-8 py-8 text-center md:py-8">
      <div className="relative mx-auto max-w-3xl">
        <span
          aria-hidden
          className="font-diamond block text-4xl text-logoGreen/30 md:text-6xl"
        >
          &ldquo;
        </span>
        <blockquote className="font-aileron-semibold -mt-6 text-xl leading-snug text-darkGreen md:text-2xl">
          Not everything that is faced can be changed, but nothing can be
          changed until it is faced.
        </blockquote>
        <cite className="font-aileron mt-6 block text-base text-mediumGreen not-italic">
          ― James Baldwin
        </cite>
      </div>
    </section>
  );
}
