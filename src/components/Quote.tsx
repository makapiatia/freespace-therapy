export default function Quote() {
  return (
    <section className="bg-logoGreen/5 px-8 py-16 text-center md:py-24">
      <div className="relative mx-auto max-w-3xl">
        <span
          aria-hidden
          className="font-diamond block text-7xl text-logoGreen/30 md:text-8xl"
        >
          &ldquo;
        </span>
        <blockquote className="font-cooper-hewitt-medium -mt-6 text-2xl leading-snug text-darkGreen md:text-4xl">
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
