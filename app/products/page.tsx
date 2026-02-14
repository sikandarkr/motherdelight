import type { Metadata } from "next";
import ProductsCategory from "../component/ProductsCategory";

export const metadata: Metadata = {
  title:
    "Buy Homemade Pickles, Masala, Papad & Makhana Online | Champaran Swad Bihar",

  description:
    "Buy authentic homemade Bihari pickles (Aam, Amla, Garlic), traditional masala, handmade papad, stone-ground atta, dalia and premium makhana from Champaran Swad, Motihari Bihar. Order on WhatsApp.",

  keywords: [
    "homemade pickles in Bihar",
    "Aam ka achar online",
    "Bihari masala",
    "handmade papad Bihar",
    "Chana sattu online",
    "makhana from Bihar",
    "Champaran Swad products",
  ],

  openGraph: {
    title: "Champaran Swad Traditional Products",
    description:
      "Authentic homemade Bihari pickles, masala, papad, grains and makhana from Motihari, Bihar.",
    url: "https://www.champaranswad.com/products",
    type: "website",
  },

  alternates: {
    canonical: "https://www.champaranswad.com/products",
  },
};


export default function ProductsPage() {
  return <ProductsCategory />;
}
