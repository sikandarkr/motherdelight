import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const viewport = {
  width: "device-width",
  initialScale: 1,
};


export const metadata = {
  title: "MotherDelight Kitchen | Homemade Pickles, Papad & Grains",

  icons: {
    icon: "/favicon/motherdelight-kitchen-favicon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "MotherDelight Kitchen – Traditional Homemade Indian Foods",
    description:
      "Homemade Pickles • Papad • Grains — Freshly Made. Delivered with Love.",
    images: [
      "https://motherdelight.com/images/motherdelight-kitchen-traditional-homemade-foods.png",
    ],
  },
  
  description:
    "MotherDelight Kitchen offers traditional homemade Indian pickles, papad and grains — freshly prepared in small batches using family recipes. Order on WhatsApp.",

  openGraph: {
    title: "MotherDelight Kitchen – Traditional Homemade Indian Foods",

    description:
      "Homemade Pickles • Papad • Grains — Freshly Made. Delivered with Love.",

    url: "https://motherdelight.com",

    siteName: "MotherDelight Kitchen",

    images: [
      {
        url: "https://motherdelight.com/images/motherdelight-kitchen-traditional-homemade-foods.png",
        width: 1200,
        height: 630,
        alt: "Traditional homemade Indian pickles, papad and grains by MotherDelight Kitchen prepared using family recipes",
      },

      {
        url: "https://motherdelight.com/images/motherdelight-kitchen-pure-family-recipes.png",
        width: 1200,
        height: 630,
        alt: "Pure homemade pickles and papad made with fresh ingredients and traditional family recipes at MotherDelight Kitchen",
      },

      {
        url: "https://motherdelight.com/images/motherdelight-kitchen-fresh-daily-homemade.png",
        width: 1200,
        height: 630,
        alt: "Freshly prepared homemade Indian foods including pickles, papad and grains by MotherDelight Kitchen",
      },
    ],

    locale: "en_IN",

    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FoodEstablishment",
              name: "MotherDelight Kitchen",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Motihari",
                addressRegion: "Bihar",
                addressCountry: "IN",
              },
              servesCuisine: "Indian",
              url: "https://motherdelight.com",
            }),
          }}
        />
      </body>
    </html>
  );
}
