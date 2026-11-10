import Link from "next/link";
import classNames from "classnames";

// Logo test pages. A decimal page (e.g. 2.1) is a color variant that reuses
// the whole-number logo.
export const PAGE_OPTIONS = ["2.1", "2.3", "2.4"];

export function logoOptionUrl(page: string) {
  return `/logos/LogoOptions/LogoOption${page.split(".")[0]}.svg`;
}

// Pages grouped by logo, e.g. [["2", "2.1"], ["9", "9.1"]].
const PAGE_GROUPS = Object.values(
  Object.groupBy(PAGE_OPTIONS, (page) => page.split(".")[0]),
) as string[][];

/** Bar for flipping between the logo test pages (/ shows the first option). */
export default function LogoOptionsNav({ current }: { current: string }) {
  return (
    <nav
      aria-label="Logo options"
      className={classNames(
        // One row per logo on mobile; a single row from md up.
        "flex flex-col items-center gap-1 bg-cream px-4 pt-2",
        "md:flex-row md:justify-center",
        "font-work-sans text-xs text-darkTeal",
      )}
    >
      {PAGE_GROUPS.map((group) => (
        <div
          key={group[0]}
          className="flex flex-wrap justify-center gap-1"
        >
          {group.map((option) => (
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
        </div>
      ))}
    </nav>
  );
}
