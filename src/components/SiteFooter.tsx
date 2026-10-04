import Image from "next/image";
import classNames from "classnames";

export default function SiteFooter() {
  return (
    <footer className="bg-darkGreen">
      <div
        className={classNames(
          "mx-auto flex max-w-5xl flex-col items-center gap-3",
          "px-8 py-10 text-center sm:flex-row sm:justify-between",
          "sm:text-left",
        )}
      >
        <div className="flex items-center gap-3">
          <span className="relative block h-8 w-8 overflow-hidden rounded-full">
            <Image
              src="/logos/4x/Asset 1@4x.png"
              alt="Freespace Therapy logo"
              fill
              sizes="32px"
              className="object-cover"
            />
          </span>
          <span className="font-cooper-hewitt-medium text-sm text-cream">
            freespace therapy
          </span>
        </div>
        <p className="font-work-sans text-xs text-cream/70">
          &copy; 2026 Freespace Therapy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
