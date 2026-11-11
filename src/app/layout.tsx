import type { Metadata } from "next";
import localFont from "next/font/local";
import classNames from "classnames";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "freespace-therapy",
  description: "Freespace Therapy",
};

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
