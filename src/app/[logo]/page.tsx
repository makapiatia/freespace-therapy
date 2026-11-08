import HomePage from "@/components/HomePage";

// Logo test pages: /1–/12 render the full site with one of the logo options
// in public/logos/LogoOptions swapped into the hero and footer.
const LOGO_OPTIONS = Array.from({ length: 12 }, (_, i) => String(i + 1));

export const revalidate = 60;

// Anything other than /1–/4 404s instead of rendering on demand.
export const dynamicParams = false;

export function generateStaticParams() {
  return LOGO_OPTIONS.map((logo) => ({ logo }));
}

export default async function LogoOptionPage({
  params,
}: PageProps<"/[logo]">) {
  const { logo } = await params;

  return <HomePage logoUrl={`/logos/LogoOptions/LogoOption${logo}.svg`} />;
}
