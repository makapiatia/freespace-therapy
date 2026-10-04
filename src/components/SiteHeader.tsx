import Image from "next/image";

export default function SiteHeader() {
  return (
    <header className="mx-auto w-full max-w-5xl px-8 pt-8">
      <a href="#top" className="inline-block">
        <span className="relative block h-24 w-24 overflow-hidden rounded-full">
          <Image
            src="/logos/4x/Asset 1@4x.png"
            alt="Freespace Therapy"
            fill
            sizes="96px"
            priority
            className="object-cover"
          />
        </span>
      </a>
    </header>
  );
}
