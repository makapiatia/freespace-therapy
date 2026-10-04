import classNames from "classnames";

export default function Hero() {
  return (
    <section
      id="top"
      className={classNames(
        "mx-auto max-w-3xl px-8 pt-10 pb-20 text-center",
        "md:pt-12 md:pb-28",
      )}
    >
      <p className="font-work-sans text-sm tracking-wide text-mediumGreen uppercase">
        A free space to feel, heal, and be yourself
      </p>
      <h1
        className={classNames(
          "font-diamond mt-4 text-4xl leading-tight text-darkGreen",
          "md:text-5xl",
        )}
      >
        Welcome to Freespace Therapy
      </h1>
      <p
        className={classNames(
          "font-cooper-hewitt mx-auto mt-6 max-w-xl text-base text-darkGreen/80",
          "md:text-lg",
        )}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        libero quam, dignissim at posuere a, posuere at mi. Suspendisse
        potenti, nulla eget cursus sagittis, nunc elit laoreet justo.
      </p>

      <div
        className={classNames(
          "relative mx-auto mt-12 max-w-xl rounded-3xl bg-brown",
          "px-8 py-12 md:px-14",
        )}
      >
        <span
          aria-hidden
          className="font-diamond absolute top-2 left-6 text-7xl text-clay/70 md:text-8xl"
        >
          &ldquo;
        </span>
        <blockquote
          className={classNames(
            "font-cooper-hewitt-medium text-xl leading-snug text-cream",
            "md:text-2xl",
          )}
        >
          Not everything that is faced can be changed, but nothing can be
          changed until it is faced.
        </blockquote>
        <cite className="font-cooper-hewitt mt-4 block text-sm text-logoLime not-italic">
          ― James Baldwin
        </cite>
      </div>

      <a
        href="#contact"
        className={classNames(
          "mt-10 inline-block rounded-full bg-clay px-8 py-3",
          "font-work-sans text-sm text-cream transition-colors",
          "hover:bg-darkGreen",
        )}
      >
        Book a free consultation
      </a>
    </section>
  );
}
