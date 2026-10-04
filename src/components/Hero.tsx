import classNames from "classnames";

export default function Hero() {
  return (
    <section
      id="top"
      className={classNames(
        "mx-auto max-w-3xl px-8 pt-16 pb-20 text-center",
        "md:pt-24 md:pb-28",
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
      <blockquote
        className={classNames(
          "font-cooper-hewitt-medium mx-auto mt-10 max-w-md text-xl",
          "text-darkGreen md:text-2xl",
        )}
      >
        &ldquo;Not everything that is faced can be changed,
        <br />
        but nothing can be changed until it is faced.&rdquo;
      </blockquote>
      <cite className="font-cooper-hewitt mt-2 block text-sm text-mediumGreen not-italic">
        ― James Baldwin
      </cite>
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
