import classNames from "classnames";

export default function Hero() {
  return (
    <section
      id="top"
      className={classNames(
        "mx-auto max-w-4xl px-8 pt-10 pb-20 text-center",
        "md:pt-14 md:pb-28",
      )}
    >
      <p
        className={classNames(
          "font-work-sans text-sm font-semibold tracking-wide",
          "text-logoGreen uppercase md:text-base",
        )}
      >
        A free space to feel, heal, and be yourself
      </p>
      <h1
        className={classNames(
          "font-diamond mt-5 text-5xl leading-[1.05] text-darkGreen",
          "sm:text-6xl md:text-7xl",
        )}
      >
        Welcome to <span className="text-clay">Freespace</span> Therapy
      </h1>
      <p
        className={classNames(
          "font-cooper-hewitt mx-auto mt-7 max-w-2xl text-lg text-darkGreen/80",
          "md:text-xl",
        )}
      >
        Freespace Therapy offers a compassionate, non-judgmental space to
        slow down and explore what&rsquo;s really going on beneath the
        surface — for adults and seniors navigating anxiety, loss,
        uncertainty, or feeling stuck.
      </p>

      <div
        className={classNames(
          "relative mx-auto mt-14 max-w-2xl rounded-3xl bg-clay",
          "px-8 py-14 md:px-16",
        )}
      >
        <span
          aria-hidden
          className="font-diamond absolute top-4 left-8 text-8xl text-cream/25 md:text-9xl"
        >
          &ldquo;
        </span>
        <blockquote
          className={classNames(
            "font-cooper-hewitt-medium text-2xl leading-snug text-cream",
            "md:text-3xl",
          )}
        >
          Not everything that is faced can be changed, but nothing can be
          changed until it is faced.
        </blockquote>
        <cite className="font-cooper-hewitt mt-5 block text-base text-darkGreen not-italic">
          ― James Baldwin
        </cite>
      </div>

      <a
        href="#contact"
        className={classNames(
          "mt-12 inline-block rounded-full bg-darkGreen px-10 py-4",
          "font-work-sans text-base text-cream transition-colors",
          "hover:bg-logoGreen hover:text-navy",
        )}
      >
        Book a free consultation
      </a>
    </section>
  );
}
