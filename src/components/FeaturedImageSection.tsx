import Image from "next/image";
import classNames from "classnames";

export default function FeaturedImageSection() {
  return (
    <section>
      <div className="bg-skyBlue px-4 py-2 text-center md:text-right">
        <p
          className={classNames(
            "author-text font-work-sans text-[10px] font-semibold",
            "tracking-wide text-darkNavy md:text-xs",
          )}
        >
          &ldquo;Sky&rsquo;s The Limit&rdquo; &mdash; Photography by Kareem W.
        </p>
      </div>
      <div
        className={classNames(
          "relative overflow-hidden",
          "min-h-96 bg-navyBlue md:min-h-150 lg:min-h-200",
        )}
      >
        <Image
          src="/photos/skysthelimit.jpg"
          alt=""
          aria-hidden
          fill
          className="object-cover object-[55%_15%] opacity-75"
        />
      </div>
    </section>
  );
}
