import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#5A2C14",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.champaranswad.com"),

  verification: {
    google: "1e-rdNTf1sfD0foJed17bZ05r1jWnoKvXFq8N3jLW-I",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  title: {
    default:
      "Champaran Swad | Homemade Pickles, Papad & Traditional Foods in India",
    template: "%s | Champaran Swad",
  },

  description:
    "Champaran Swad offers authentic homemade Bihari pickles, papad, masala and traditional foods from Motihari, Bihar. Delivering fresh homemade flavors across India.",

  keywords: [
    "homemade pickles in India",
    "Bihari achar online",
    "mustard oil pickle India",
    "traditional papad India",
    "Champaran Swad Bihar",
    "Motihari homemade food",
    "authentic Bihari food brand",
  ],

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon/champaran-swad-traditional-homemade-foods-logo.png",
  },

  openGraph: {
    title: "Champaran Swad – Authentic Homemade Bihari Foods",
    description:
      "Homemade Pickles • Papad • Traditional Foods — Freshly Made in Bihar. Delivered Across India.",
    url: "https://www.champaranswad.com",
    siteName: "Champaran Swad",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/champaran-swad-traditional-homemade-foods.png",
        width: 1200,
        height: 630,
        alt: "Champaran Swad homemade pickles and traditional Bihari foods",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Champaran Swad – Homemade Bihari Foods",
    description:
      "Traditional homemade pickles, papad and foods from Bihar, India.",
    images: ["/images/champaran-swad-traditional-homemade-foods.png"],
  },
};

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en-IN">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fffaf4]`}
//       >
//         {/* GLOBAL NAVBAR */}
//         <Navbar />

//         {/* PAGE CONTENT */}
//         {children}

//         {/* GLOBAL FOOTER */}
//         <Footer />

//         {/* ORGANIZATION + LOCAL BUSINESS SCHEMA */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "Organization",
//               name: "Champaran Swad",
//               url: "https://www.champaranswad.com",
//               logo:
//                 "https://www.champaranswad.com/favicon/champaran-swad-traditional-homemade-foods-logo.png",
//               image:
//                 "https://www.champaranswad.com/images/champaran-swad-traditional-homemade-foods.png",
//               address: {
//                 "@type": "PostalAddress",
//                 addressLocality: "Motihari",
//                 addressRegion: "Bihar",
//                 addressCountry: "IN",
//               },
//               areaServed: {
//                 "@type": "Country",
//                 name: "India",
//               },
//               contactPoint: {
//                 "@type": "ContactPoint",
//                 telephone: "+91-7814338779",
//                 contactType: "customer service",
//                 areaServed: "IN",
//                 availableLanguage: ["English", "Hindi"],
//               },
//               sameAs: [
//                 "https://www.facebook.com/",
//                 "https://www.instagram.com/",
//                 "https://www.youtube.com/"
//               ],
//             }),
//           }}
//         />

//         {/* SITE NAVIGATION SCHEMA */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "SiteNavigationElement",
//               name: ["Home", "Products", "About", "Contact", "Blog"],
//               url: [
//                 "https://www.champaranswad.com/",
//                 "https://www.champaranswad.com/products",
//                 "https://www.champaranswad.com/about",
//                 "https://www.champaranswad.com/contact",
//                 "https://www.champaranswad.com/blog",
//               ],
//             }),
//           }}
//         />
//       </body>
//     </html>
//   );
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN">
      <head>
        {/* ✅ Google Analytics (must load in head for proper detection) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZQ0QFNG1BM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZQ0QFNG1BM', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fffaf4]`}
      >
        <Navbar />
        {children}
        <Footer />

        {/* ✅ LOCAL BUSINESS SCHEMA */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FoodEstablishment",
            name: "Champaran Swad",
            url: "https://www.champaranswad.com",
            logo:
              "https://www.champaranswad.com/favicon/champaran-swad-traditional-homemade-foods-logo.png",
            image:
              "https://www.champaranswad.com/images/champaran-swad-traditional-homemade-foods.png",
            description:
              "Authentic homemade Bihari pickles, papad, masala and traditional foods prepared in Motihari, Bihar.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Motihari",
              addressRegion: "Bihar",
              postalCode: "845401",
              addressCountry: "IN",
            },
            telephone: "+91-7814338779",
            servesCuisine: ["Bihari", "Indian"],
          })}
        </Script>

        {/* ✅ WEBSITE SCHEMA */}
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Champaran Swad",
            url: "https://www.champaranswad.com",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://www.champaranswad.com/blog?search={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </Script>
      </body>
    </html>
  );
}
