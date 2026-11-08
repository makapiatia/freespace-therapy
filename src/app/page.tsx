import HomePage from "@/components/HomePage";

// Re-fetch Contentful data at most once per minute instead of baking it
// into the page permanently at build time, so CMS edits show up without
// needing a new code deployment.
export const revalidate = 60;

export default function Home() {
  return <HomePage logoOption={1} />;
}
