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

export const metadata: Metadata = {
  verification: {
    google: "1e-rdNTf1sfD0foJed17bZ05r1jWnoKvXFq8N3jLW-I",
  },
  
  robots: {
    index: true,
    follow: true,
  },
  title: "Champaran Swad | Homemade Pickles, Papad & Traditional Foods from Bihar",

  description:
    "Champaran Swad offers authentic homemade Bihari pickles, papad and traditional foods from Motihari, Bihar — freshly prepared in small batches using family recipes. Order on WhatsApp.",

  icons: {
    icon: "/favicon/champaran-swad-traditional-homemade-foods-logo.png",
  },

  openGraph: {
    title: "Champaran Swad – Authentic Homemade Bihari Foods",
    description:
      "Homemade Pickles • Papad • Traditional Foods — Freshly Made in Motihari, Bihar. Delivered with Love.",
    url: "https://www.champaranswad.com",
    siteName: "Champaran Swad",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.champaranswad.com/images/champaran-swad-traditional-homemade-foods.png",
        width: 1200,
        height: 630,
        alt: "Champaran Swad homemade pickles, papad and traditional Bihari foods prepared in Motihari",
      },
      {
        url: "https://www.champaranswad.com/images/champaran-swad-family-recipes.png",
        width: 1200,
        height: 630,
        alt: "Authentic homemade foods by Champaran Swad using traditional family recipes from Bihar",
      },
      {
        url: "https://www.champaranswad.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Champaran Swad – Homemade Pickles, Papad and Traditional Bihari Foods from Motihari",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Champaran Swad – Homemade Bihari Foods",
    description:
      "Traditional homemade pickles, papad and foods from Motihari, Bihar.",
    images: [
      "https://www.champaranswad.com/images/champaran-swad-traditional-homemade-foods.png",
      "https://www.champaranswad.com/og-image.png",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FoodEstablishment",
              name: "Champaran Swad",
              url: "https://www.champaranswad.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Motihari",
                addressRegion: "Bihar",
                addressCountry: "IN",
              },
              servesCuisine: "Bihari, Indian",
              sameAs: [],
            }),
          }}
        />
      </body>
    </html>
  );
}
