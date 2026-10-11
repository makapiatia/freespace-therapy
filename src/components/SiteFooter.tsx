import Image from "next/image";
import classNames from "classnames";

export default function SiteFooter() {
  return (
    <div
      className={classNames(
        "flex flex-col items-center justify-center gap-3 px-8",
        "flex-row justify-end gap-6 pt-8 sm:pt-8 text-left",
      )}
    >
      <p className="font-work-sans text-xs text-cream/70">
        &copy; 2026 Freespace Therapy. All rights reserved.
      </p>
      <span className="relative block h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-logoLime/50">
        <Image
          src="/logos/1x/greenDragonflyLogo.png"
          alt="Freespace Therapy"
          fill
          sizes="64px"
          className="scale-125 object-cover"
        />
      </span>
    </div>
  );
}
