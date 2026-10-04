import Image from "next/image";
import classNames from "classnames";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#community", label: "Community" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header
      className={classNames(
        "sticky top-0 z-10 border-b border-logoGreen/20 bg-cream/90",
        "backdrop-blur",
      )}
    >
      <div
        className={classNames(
          "mx-auto flex max-w-5xl items-center justify-between",
          "px-8 py-4",
        )}
      >
        <a href="#top" className="flex items-center gap-3">
          <span className="relative block h-10 w-10 overflow-hidden rounded-full">
            <Image
              src="/logos/4x/Asset 1@4x.png"
              alt="Freespace Therapy logo"
              fill
              sizes="40px"
              className="object-cover"
            />
          </span>
          <span className="font-cooper-hewitt-medium text-lg text-darkGreen">
            freespace therapy
          </span>
        </a>
        <nav className="hidden gap-8 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={classNames(
                "font-work-sans text-sm text-darkGreen/80",
                "transition-colors hover:text-clay",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
