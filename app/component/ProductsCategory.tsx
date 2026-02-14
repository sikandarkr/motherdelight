
"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Link from "next/link";

const productData = [
  {
    category: "Homemade Pickles (Achar)",
    icon: "🥭",
    items: [
      { name: "Aam Ka Achar", image: "https://res.cloudinary.com/ddxozicjg/image/upload/v1770995196/champaranswad/premium-aam-ka-achar-fresh-mango-pickle_imsxhb.png" },
      { name: "Amla Achar", image: "https://res.cloudinary.com/ddxozicjg/image/upload/v1770995452/champaranswad/premium-amla-achar-traditional-gooseberry-pickle_sn4mov.png" },
      { name: "Mixed Vegetable Pickle", image: "https://res.cloudinary.com/ddxozicjg/image/upload/v1770995729/champaranswad/premium-mixed-vegetable-pickle-traditional-indian_x2upjd.png" },
      { name: "Green Chilli Pickle", image: "https://res.cloudinary.com/ddxozicjg/image/upload/v1770995956/champaranswad/premium-green-chilli-pickle-traditional-hari-mirch-achar_zgtc3v.png" },
      { name: "Garlic Pickle", image: "https://res.cloudinary.com/ddxozicjg/image/upload/v1770996213/champaranswad/premium-garlic-pickle-traditional-lahsun-achar_u0m7rm.png" },
      { name: "Lemon Pickle", image: "https://res.cloudinary.com/ddxozicjg/image/upload/v1770996574/champaranswad/premium-lemon-pickle-traditional-nimbu-achar_b4oiu2.png" },
    ],
  },
  {
    category: "Traditional Masala",
    icon: "🌶️",
    items: [
      { name: "Pure Haldi Powder", image: "https://res.cloudinary.com/ddxozicjg/image/upload/v1770997194/champaranswad/premium-turmeric-powder-rustic-traditional-haldi-masala_enm4ef.png" },
      { name: "Homemade Garam Masala", image: "https://res.cloudinary.com/ddxozicjg/image/upload/v1770997609/champaranswad/premium-homemade-garam-masala-traditional-spice-blend_cfuhi2.png" },
      { name: "Premium Mixed Masala", image: "https://res.cloudinary.com/ddxozicjg/image/upload/v1770997934/champaranswad/premium-mixed-masala-traditional-indian-spice-blend_epdewm.png" },
      { name: "Premium Dhaniya Powder", image: "https://res.cloudinary.com/ddxozicjg/image/upload/v1770998347/champaranswad/premium-dhaniya-powder-traditional-coriander-masala_a0hvzw.png" },
      { name: "Premium Sarso Masala", image: "https://res.cloudinary.com/ddxozicjg/image/upload/v1770998853/champaranswad/premium-sarso-masala-traditional-mustard-spice-blend_dw1rrt.png" },
    ],
  },
  {
    category: "Handmade Papad",
    icon: "🍘",
    items: [
      { name: "Urad Dal Papad", image: "https://res.cloudinary.com/ddxozicjg/image/upload/v1770999129/champaranswad/premium-urad-dal-papad-authentic-traditional-handmade_hys3qf.png" },
      { name: "Masala Papad", image: "https://res.cloudinary.com/ddxozicjg/image/upload/v1770999402/champaranswad/premium-masala-papad-authentic-traditional-indian-snack_wh2ytu.png" },
      { name: "Premium Moong Dal Papad", image: "https://res.cloudinary.com/ddxozicjg/image/upload/v1771000017/champaranswad/premium-moong-dal-papad-authentic-traditional-handmade_u8ppch.png" },
    ],
  },
  {
    category: "Natural Grains & Dalia",
    icon: "🌾",
    items: [
      { name: "Stone-ground Dalia", image: "https://res.cloudinary.com/ddxozicjg/image/upload/v1771000439/champaranswad/premium-stone-ground-dalia-authentic-traditional-broken-wheat_g4e4cy.png" },
      { name: "Whole Wheat Flour", image: "https://res.cloudinary.com/ddxozicjg/image/upload/v1771000617/champaranswad/premium-whole-wheat-flour-traditional-stone-ground-atta_qjjwag.png" },
      { name: "Chana Sattu", image: "https://res.cloudinary.com/ddxozicjg/image/upload/v1771000774/champaranswad/premium-chana-sattu-authentic-traditional-roasted-gram-flour_nb33g8.png" },
    ],
  },
  {
    category: "Premium Makhana",
    icon: "🌰",
    items: [
      { name: "Plain Makhana", image: "https://res.cloudinary.com/ddxozicjg/image/upload/v1771001005/champaranswad/premium-plain-makhana-authentic-traditional-fox-nuts_qiu0ht.png" },
      { name: "Roasted Makhana", image: "https://res.cloudinary.com/ddxozicjg/image/upload/v1771001209/champaranswad/premium-roasted-makhana-authentic-traditional-fox-nuts_vnlmvh.png" },
    ],
  },
];

export default function ProductsPage() {
  const [search, setSearch] = useState("");

  const filteredData = productData.map((category) => ({
    ...category,
    items: category.items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    ),
  }));

  return (
    <main className="bg-[#fffaf4] min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 pt-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-orange-600">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[#5A2C14] font-medium">
          Products
        </span>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Store",
            name: "Champaran Swad",
            url: "https://www.champaranswad.com/products",
            image: "https://www.champaranswad.com/og-image.png",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Motihari",
              addressRegion: "Bihar",
              addressCountry: "IN",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Traditional Homemade Products",
              itemListElement: productData.flatMap((category) =>
                category.items.map((item) => ({
                  "@type": "Product",
                  name: item.name,
                  image: item.image,
                  brand: {
                    "@type": "Brand",
                    name: "Champaran Swad",
                  },
                }))
              ),
            },
          }),
        }}
      />
      {/* HERO */}
      <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-20 px-6 text-center mt-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#5A2C14] mb-6">
          Our Traditional Products
        </h1>

        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
          Authentic homemade Bihari pickles, masala, papad, grains and makhana —
          prepared using traditional family recipes from Bihar.
        </p>

        {/* SEARCH */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-xl">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-600 text-lg">
              🔍
            </span>
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-full border-2 border-orange-300 focus:ring-4 focus:ring-orange-200 focus:outline-none text-gray-800 bg-white shadow-md"
            />
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-6xl mx-auto px-6 py-20 space-y-20">

        {filteredData.map((category, index) =>
          category.items.length > 0 && (
            <div key={index}>
              <h2 className="text-3xl font-bold text-[#5A2C14] mb-10">
                {category.icon} {category.category}
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {category.items.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-3xl shadow-md hover:shadow-xl transition overflow-hidden group"
                  >
                    <div className="relative h-52">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="font-semibold text-lg text-[#5A2C14] mb-2">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Authentic traditional preparation using natural ingredients.
                      </p>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          )
        )}

        {/* CTA */}
        <div className="text-center mt-20">
          <a
            href="https://wa.me/917814338779"
            target="_blank"
            className="inline-block bg-green-700 hover:bg-green-800 text-white px-10 py-4 rounded-full text-lg shadow-lg transition hover:scale-105"
          >
            Order on WhatsApp
          </a>
        </div>

      </section>

     

    </main>
  );
}
