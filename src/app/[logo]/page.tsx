import HomePage from "@/components/HomePage";
import { PAGE_OPTIONS } from "@/lib/logoOptions";

// Logo test pages: /<option> renders the full site with one of the logo
// options in public/logos/LogoOptions swapped into the hero and footer.

export const revalidate = 60;

// Anything other than the listed options 404s instead of rendering on demand.
export const dynamicParams = false;

export function generateStaticParams() {
  return PAGE_OPTIONS.map((logo) => ({ logo }));
}

export default async function LogoOptionPage({
  params,
}: PageProps<"/[logo]">) {
  const { logo } = await params;

  return <HomePage page={logo} />;
}
