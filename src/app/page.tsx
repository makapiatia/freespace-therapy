import HomePage from "@/components/HomePage";
import { getSiteMetadata } from "@/lib/content/siteMetadata";
import { LOGO_URL } from "@/lib/logo";
import { ADDRESS_MAP_URL, SITE_NAME, SITE_URL } from "@/lib/site";

export const revalidate = 60;

function jsonLd(description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${SITE_URL}/#practice`,
    name: SITE_NAME,
    legalName: "Free Space Psychotherapy LLC",
    url: SITE_URL,
    logo: `${SITE_URL}${LOGO_URL}`,
    image: `${SITE_URL}/opengraph-image.png`,
    description,
    telephone: "+1-862-229-2270",
    email: "megan@freespace-therapy.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "96 Park Street",
      addressLocality: "Montclair",
      addressRegion: "NJ",
      postalCode: "07042",
      addressCountry: "US",
    },
    hasMap: ADDRESS_MAP_URL,
    areaServed: ["Essex County", "Passaic County"].map((name) => ({
      "@type": "AdministrativeArea",
      name,
      containedInPlace: { "@type": "State", name: "New Jersey" },
    })),
    knowsAbout: [
      "Psychotherapy",
      "Anxiety",
      "Depression",
      "Grief and Loss",
      "Trauma",
      "Family Issues",
      "Relationship Issues",
      "Stress Management",
      "Life Transitions",
      "Incarceration and Reentry",
    ],
    founder: {
      "@type": "Person",
      name: "Megan Miller",
      honorificSuffix: "LCSW",
      jobTitle: "Licensed Clinical Social Worker",
    },
  };
}

export default async function Home() {
  const { description } = await getSiteMetadata();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd(description)).replace(/</g, "\\u003c"),
        }}
      />
      <HomePage />
    </>
  );
}
