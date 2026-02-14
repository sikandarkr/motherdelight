import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = {
    title:
        "About Champaran Swad | Homemade Pickles & Traditional Bihari Foods in India",
    description:
        "Champaran Swad is a trusted homemade pickles, papad and traditional Bihari foods brand based in Motihari, Bihar. Delivering authentic flavors across India.",
    keywords: [
        "homemade pickles in India",
        "Bihari achar brand",
        "Champaran Swad Bihar",
        "traditional papad India",
        "mustard oil pickle India",
        "Motihari homemade food",
    ],
};

export default function AboutPage() {
    return (
        <main className="bg-[#fffaf4] min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FoodEstablishment",
                        name: "Champaran Swad",
                        url: "https://www.champaranswad.com/about",
                        image:
                            "https://www.champaranswad.com/og-image.png",
                        address: {
                            "@type": "PostalAddress",
                            addressLocality: "Motihari",
                            addressRegion: "Bihar",
                            addressCountry: "IN",
                        },
                        areaServed: {
                            "@type": "Country",
                            name: "India",
                        },
                        servesCuisine: "Bihari, Indian",
                    }),
                }}
            />
            <section className="bg-[#fffaf4] border-b border-orange-100">
                <div className="max-w-6xl mx-auto px-6 py-4 text-sm text-gray-500">
                    <Link
                        href="/"
                        className="hover:text-orange-600 transition"
                    >
                        Home
                    </Link>

                    <span className="mx-3 text-gray-400">/</span>

                    <span className="text-[#5A2C14] font-medium">
                        About Us
                    </span>
                </div>
            </section>
            {/* HERO SECTION */}
            <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-24 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-[#5A2C14] mb-6">
                    About Champaran Swad
                </h1>

                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    Bringing authentic homemade Bihari flavors from our kitchen in
                    Motihari to your home — prepared with love, purity and tradition.
                </p>
            </section>

            {/* OUR STORY */}
            <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">

                <div>
                    <h2 className="text-3xl font-bold text-[#5A2C14] mb-6">
                        Our Story
                    </h2>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                        Champaran Swad was born from a simple belief —
                        food should taste like home.
                    </p>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                        Inspired by traditional family recipes passed down through generations,
                        we prepare pickles, papad, masala and traditional foods in small batches
                        using natural ingredients and mustard oil — just like it is done in Bihar.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        Every jar carries the warmth of our kitchen and the authenticity of Champaran.
                    </p>
                </div>

                <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl">
                    <Image
                        src="https://res.cloudinary.com/ddxozicjg/image/upload/v1770994794/champaranswad/champaran-swad-premium-homemade-pickles-bihar_ff7bkc.png"
                        alt="Champaran Swad kitchen preparation"
                        fill
                        className="object-cover"
                    />
                </div>
            </section>

            {/* KITCHEN GALLERY */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-3xl font-bold text-[#5A2C14] mb-12 text-center">
                        Our Kitchen Gallery
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        {[
                            "https://res.cloudinary.com/ddxozicjg/image/upload/v1771002053/champaranswad/masala-storage-and-packing-process-spice-room_do2hsy.png",
                            "https://res.cloudinary.com/ddxozicjg/image/upload/v1770993204/champaranswad/bulk-homemade-pickle-jars-kitchen-platform_in72hh.png",
                            "https://res.cloudinary.com/ddxozicjg/image/upload/v1770993341/champaranswad/raw-mango-pickle-sun-drying-rooftop-table_qobuj8.png",
                            "https://res.cloudinary.com/ddxozicjg/image/upload/v1770993618/champaranswad/indoor-pickle-production-bulk-jar_gnrews.png",
                            "https://res.cloudinary.com/ddxozicjg/image/upload/v1770993837/champaranswad/clean-food-storage-room-grey-tiles_bh6e2p.png",
                            "https://res.cloudinary.com/ddxozicjg/image/upload/v1771001886/champaranswad/papad-storage-room-bulk-stock-tiles-floor_j0mhqk.png",
                        ].map((img, i) => (
                            <div
                                key={i}
                                className="relative h-64 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
                            >
                                <Image
                                    src={img}
                                    alt="Champaran Swad kitchen gallery"
                                    fill
                                    className="object-cover hover:scale-105 transition duration-500"
                                />
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="py-24 px-6 py-24 px-6 bg-[#fff7ed] from-orange-50 to-orange-100">
                <div className="max-w-6xl mx-auto text-center">

                    <h2 className="text-3xl font-bold text-[#5A2C14] mb-14">
                        Why Customers Trust Us
                    </h2>

                    <div className="grid md:grid-cols-3 gap-12">

                        <div>
                            <h3 className="text-xl font-semibold mb-3 text-[#5A2C14]">🌿 Natural Ingredients</h3>
                            <p className="text-gray-700">
                                No preservatives. No artificial flavors. Only authentic traditional ingredients.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-3 text-[#5A2C14]">👩‍🍳 Handmade in Small Batches</h3>
                            <p className="text-gray-700">
                                Carefully prepared in limited quantities to maintain taste and freshness.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-3 text-[#5A2C14]">🏡 Authentic Bihari Recipes</h3>
                            <p className="text-gray-700">
                                Original family recipes from Champaran passed down for generations.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* YOUTUBE SECTION */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-5xl mx-auto text-center">

                    <h2 className="text-3xl font-bold text-[#5A2C14] mb-10">
                        Watch Our Kitchen Stories
                    </h2>

                    <div className="aspect-video rounded-3xl overflow-hidden shadow-xl">
                        <iframe
                            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                            title="Champaran Swad YouTube Video"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>

                </div>
            </section>

            {/* LOCATION */}
            <section className="py-24 px-6 bg-gradient-to-r from-orange-50 to-orange-100">
                <div className="max-w-6xl mx-auto text-center">

                    <h2 className="text-3xl font-bold text-[#5A2C14] mb-10">
                        Visit Us in Motihari, Bihar
                    </h2>

                    <p className="text-gray-700 mb-10">
                        We proudly prepare our products from our home kitchen in Motihari, Bihar.
                    </p>

                    <div className="aspect-video rounded-3xl overflow-hidden shadow-xl">
                        <iframe
                            src="https://www.google.com/maps?q=Motihari,Bihar&output=embed"
                            loading="lazy"
                            className="w-full h-full"
                        ></iframe>
                    </div>

                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-24 px-6 text-center bg-[#5A2C14] text-white">

                <h2 className="text-3xl font-bold mb-6">
                    Experience Authentic Homemade Taste
                </h2>

                <p className="mb-10 text-orange-100 max-w-2xl mx-auto">
                    Order directly on WhatsApp and enjoy traditional Bihari flavors delivered with care.
                </p>

                <a
                    href="https://wa.me/917814338779"
                    target="_blank"
                    className="inline-block bg-green-600 hover:bg-green-700 px-10 py-4 rounded-full text-lg shadow-lg transition"
                >
                    Order on WhatsApp
                </a>

            </section>

        </main>
    );
}
