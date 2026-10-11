import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import classNames from "classnames";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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

const victorMono = localFont({
  src: "../../public/fonts/VictorMonoAll/TTF/VictorMono-Medium.ttf",
  variable: "--font-victor-mono",
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

export const metadata: Metadata = {
  title: "freespace-therapy",
  description: "Freespace Therapy",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={classNames(
        geistSans.variable,
        geistMono.variable,
        diamondGrotesk.variable,
        workSans.variable,
        victorMono.variable,
        aileron.variable,
        aileronSemiBold.variable,
        "h-full antialiased",
      )}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
