import Image from "next/image";
import classNames from "classnames";

export default function SiteFooter() {
  return (
    <div
      className={classNames(
        "mx-auto flex max-w-5xl flex-col items-center gap-3",
        "border-t border-cream/15 pt-8 text-center sm:flex-row",
        "sm:justify-between sm:text-left",
      )}
    >
      <span className="relative block h-16 w-16 overflow-hidden rounded-full">
        <Image
          src="/logos/4x/Asset 1@4x.png"
          alt="Freespace Therapy"
          fill
          sizes="64px"
          className="object-cover"
        />
      </span>
      <p className="font-work-sans text-xs text-cream/70">
        &copy; 2026 Freespace Therapy. All rights reserved.
      </p>
    </div>
  );
}
