import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Bungee_Shade, VT323 } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const bungeeShade = Bungee_Shade({
  variable: "--font-bungee-shade",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Matthew St Pierre — Music industry builder · Founder, Lisnin.io",
  description:
    "Founder of Lisnin.io. Building tools and platforms for independent artists. Music marketing, web3, and artist development.",
  openGraph: {
    title: "Matthew St Pierre - Professional Career",
    description:
      "Founder of Lisnin.io. Building tools and platforms for independent artists.",
    type: "website",
    url: "https://matthewstpierre.com",
    images: [{ url: "/images/matthewstpierrethumbnail.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@lonelymatts",
    images: ["/images/matthewstpierrethumbnail.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${bungeeShade.variable} ${vt323.variable}`}
    >
      <body className="bg-jet text-bone min-h-screen antialiased overflow-x-hidden">
        <a href="#main-content" className="skip-nav">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
