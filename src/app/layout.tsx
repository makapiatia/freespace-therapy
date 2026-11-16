import type { Metadata } from "next";
import localFont from "next/font/local";
import classNames from "classnames";
import "./globals.css";
import { getSiteMetadata } from "@/lib/content/siteMetadata";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const diamondGrotesk = localFont({
  src: "../../public/fonts/DiamondGrotesk-VF.ttf",
  variable: "--font-diamond-grotesk",
  display: "swap",
});

const workSans = localFont({
  src: "../../public/fonts/Work Sans/WorkSans-Regular.ttf",
  variable: "--font-work-sans",
  display: "swap",
});

const aileron = localFont({
  src: "../../public/fonts/Aileron/Aileron-Regular.otf",
  variable: "--font-aileron",
  display: "swap",
});

const aileronSemiBold = localFont({
  src: "../../public/fonts/Aileron/Aileron-SemiBold.otf",
  variable: "--font-aileron-semibold",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const { title, description } = await getSiteMetadata();

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: { canonical: "/" },
    openGraph: {
      title,
      description,
      url: "/",
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={classNames(
        diamondGrotesk.variable,
        workSans.variable,
        aileron.variable,
        aileronSemiBold.variable,
        "h-full antialiased",
      )}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <div
          hidden
          dangerouslySetInnerHTML={{
            __html:
              "<!-- Designed and built by Tia Rexine (https://github.com/makapiatia) -->",
          }}
        />
        {children}
      </body>
    </html>
  );
}
