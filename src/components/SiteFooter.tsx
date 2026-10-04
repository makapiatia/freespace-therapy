import Image from "next/image";
import classNames from "classnames";

export default function SiteFooter() {
  return (
    <footer className="border-t-4 border-logoLime bg-darkGreen">
      <div
        className={classNames(
          "mx-auto flex max-w-5xl flex-col items-center gap-3",
          "px-8 py-10 text-center sm:flex-row sm:justify-between",
          "sm:text-left",
        )}
      >
        <span className="relative block h-20 w-20 overflow-hidden rounded-full">
          <Image
            src="/logos/4x/Asset 1@4x.png"
            alt="Freespace Therapy"
            fill
            sizes="80px"
            className="object-cover"
          />
        </span>
        <p className="font-work-sans text-xs text-cream/70">
          &copy; 2026 Freespace Therapy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
