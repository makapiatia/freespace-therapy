import Link from "next/link";
import classNames from "classnames";

// Logo test pages. A decimal page (e.g. 2.1) is a color variant that reuses
// the whole-number logo.
export const PAGE_OPTIONS = ["2", "2.1", "7", "9", "9.1"];

export function logoOptionUrl(page: string) {
  return `/logos/LogoOptions/LogoOption${page.split(".")[0]}.svg`;
}

/** Bar for flipping between the logo test pages (/ shows the first option). */
export default function LogoOptionsNav({ current }: { current: string }) {
  return (
    <nav
      aria-label="Logo options"
      className={classNames(
        "flex flex-wrap items-center justify-center gap-1 bg-cream px-4 pt-2",
        "font-work-sans text-xs text-darkTeal",
      )}
    >
      {PAGE_OPTIONS.map((option) => (
        <Link
          key={option}
          href={`/${option}`}
          aria-current={option === current ? "page" : undefined}
          className={classNames(
            "flex size-8 items-center justify-center rounded-full",
            "transition-colors",
            // Warm darker creams so the bar blends into the cream header.
            option === current
              ? "bg-[#efe4d0] font-semibold text-[#a8936a]"
              : "text-[#d3c3a2] hover:text-[#a8936a]",
          )}
        >
          {option}
        </Link>
      ))}
    </nav>
  );
}
