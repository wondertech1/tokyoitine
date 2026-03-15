import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tokyoitine.com"),
  title: {
    template: "%s | Tokyo Itinerary 2026",
    default: "Tokyo Itinerary 2026 \u2014 Locally Audited Day-by-Day Plans",
  },
  description:
    "Field-tested Tokyo itineraries from 1 to 7 days. Every restaurant named. Every train timed. Locally audited for 2026.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Tokyo Itinerary",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-P6D9HW5S2H" strategy="afterInteractive" />
        <Script id="itine-gtag" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-P6D9HW5S2H');`,
        }} />
        {children}
      </body>
    </html>
  );
}
