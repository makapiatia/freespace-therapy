import HomePage from "@/components/HomePage";
import { PAGE_OPTIONS } from "@/components/LogoOptionsNav";

// Re-fetch Contentful data at most once per minute instead of baking it
// into the page permanently at build time, so CMS edits show up without
// needing a new code deployment.
export const revalidate = 60;

export default function Home() {
  return <HomePage page={PAGE_OPTIONS[0]} />;
}
