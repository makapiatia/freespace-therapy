import HomePage from "@/components/HomePage";
import { LOGO_URL } from "@/lib/logo";
import {
  ADDRESS_MAP_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

export const revalidate = 60;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": `${SITE_URL}/#practice`,
  name: SITE_NAME,
  legalName: "Free Space Psychotherapy LLC",
  url: SITE_URL,
  logo: `${SITE_URL}${LOGO_URL}`,
  image: `${SITE_URL}/opengraph-image.png`,
  description: SITE_DESCRIPTION,
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
  areaServed: {
    "@type": "City",
    name: "Montclair",
    containedInPlace: { "@type": "State", name: "New Jersey" },
  },
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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <HomePage />
    </>
  );
}
