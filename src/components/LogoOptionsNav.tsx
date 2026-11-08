import Link from "next/link";
import classNames from "classnames";

export const LOGO_OPTIONS = Array.from({ length: 13 }, (_, i) => i + 1);

export function logoOptionUrl(option: number) {
  return `/logos/LogoOptions/LogoOption${option}.svg`;
}

/** Bar for flipping between the logo test pages (/ shows option 1). */
export default function LogoOptionsNav({ current }: { current: number }) {
  return (
    <nav
      aria-label="Logo options"
      className={classNames(
        "flex flex-wrap items-center justify-center gap-1.5 bg-cream px-4 pt-3",
        "font-work-sans text-sm text-darkTeal",
      )}
    >
      {LOGO_OPTIONS.map((option) => (
        <Link
          key={option}
          href={`/${option}`}
          aria-current={option === current ? "page" : undefined}
          className={classNames(
            "flex size-10 items-center justify-center rounded-full border",
            "transition-colors",
            option === current
              ? "border-darkTeal bg-darkTeal font-semibold text-cream"
              : "border-darkTeal/20 hover:border-darkTeal/50 hover:bg-darkTeal/5",
          )}
        >
          {option}
        </Link>
      ))}
    </nav>
  );
}
