import Link from "next/link";
import classNames from "classnames";

export const LOGO_OPTIONS = [2, 7, 9];

export function logoOptionUrl(option: number) {
  return `/logos/LogoOptions/LogoOption${option}.svg`;
}

/** Bar for flipping between the logo test pages (/ shows the first option). */
export default function LogoOptionsNav({ current }: { current: number }) {
  return (
    <nav
      aria-label="Logo options"
      className={classNames(
        "flex flex-wrap items-center justify-center gap-1 bg-cream px-4 pt-2",
        "font-work-sans text-xs text-darkTeal",
      )}
    >
      {LOGO_OPTIONS.map((option) => (
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
