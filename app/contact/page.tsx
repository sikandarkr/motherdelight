import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title:
      "Contact Champaran Swad | Homemade Pickles, Papad & Masala Supplier in India",
  
    description:
      "Contact Champaran Swad – trusted homemade pickles, papad, masala and traditional Bihari foods supplier in India. Order authentic mango achar, amla pickle and makhana online from Motihari, Bihar.",
  
    keywords: [
      "homemade pickles in India",
      "buy achar online India",
      "Bihari mango pickle online",
      "authentic aam ka achar",
      "mustard oil pickle India",
      "homemade papad supplier",
      "Bihar traditional food brand",
      "Bihari masala online",
      "makhana supplier Bihar",
      "Motihari homemade food",
      "Champaran Swad India",
      "Indian traditional pickles",
    ],
  };
  

export default function ContactPage() {
    return (
        <main className="bg-[#fffaf4] min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FoodEstablishment",
                        name: "Champaran Swad",
                        image: "https://www.champaranswad.com/og-image.png",
                        url: "https://www.champaranswad.com/contact",
                        telephone: "+917814338779",
                        email: "champaranswad65@gmail.com",
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
                        Contact
                    </span>
                </div>
            </section>
            {/* HERO SECTION */}
            <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-24 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-[#5A2C14] mb-6">
                    Get in Touch With Us
                </h1>

                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    Have questions about our homemade pickles or want to place an order?
                    We’d love to hear from you.
                </p>
            </section>

            {/* CONTACT INFO CARDS */}
            <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">

                <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:shadow-xl transition">
                    <div className="text-3xl mb-4">📞</div>
                    <h3 className="font-semibold text-lg text-[#5A2C14] mb-2">
                        Call / WhatsApp
                    </h3>
                    <p className="text-gray-600 mb-4">+91 78143 38779</p>
                    <a
                        href="https://wa.me/917814338779"
                        target="_blank"
                        className="inline-block bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition"
                    >
                        Chat on WhatsApp
                    </a>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:shadow-xl transition">
                    <div className="text-3xl mb-4">📧</div>
                    <h3 className="font-semibold text-lg text-[#5A2C14] mb-2">
                        Email Us
                    </h3>
                    <p className="text-gray-600 mb-4">champaranswad65@gmail.com
                    </p>
                    <a
                        href="mailto:support@champaranswad.com"
                        className="inline-block bg-orange-600 text-white px-5 py-2 rounded-full hover:bg-orange-700 transition"
                    >
                        Send Email
                    </a>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:shadow-xl transition">
                    <div className="text-3xl mb-4">📍</div>
                    <h3 className="font-semibold text-lg text-[#5A2C14] mb-2">
                        Our Location
                    </h3>
                    <p className="text-gray-600">
                        Motihari, East Champaran,<br />
                        Bihar, India
                    </p>
                </div>

            </section>

            {/* CONTACT FORM */}
            <section className="max-w-4xl mx-auto px-6 pb-20">

                <div className="bg-white rounded-3xl shadow-xl p-10">

                    <h2 className="text-2xl font-bold text-[#5A2C14] mb-8 text-center">
                        Send Us a Message
                    </h2>

                    <form className="grid gap-6">

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-5 py-4 rounded-xl border border-gray-300 
  placeholder:text-gray-600 placeholder:font-medium
  focus:ring-2 focus:ring-orange-400 focus:border-orange-400 
  focus:outline-none transition"
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-5 py-4 rounded-xl border border-gray-300 
  placeholder:text-gray-600 placeholder:font-medium
  focus:ring-2 focus:ring-orange-400 focus:border-orange-400 
  focus:outline-none transition"
                        />

                        <textarea
                            rows={5}
                            placeholder="Your Message"
                            className="w-full px-5 py-4 rounded-xl border border-gray-300 
  placeholder:text-gray-600 placeholder:font-medium
  focus:ring-2 focus:ring-orange-400 focus:border-orange-400 
  focus:outline-none transition"
                        />


                        <button
                            type="submit"
                            className="bg-orange-600 text-white py-4 rounded-xl font-semibold hover:bg-orange-700 transition shadow-md"
                        >
                            Send Message
                        </button>

                    </form>

                </div>

            </section>

            {/* GOOGLE MAP */}
            <section className="max-w-6xl mx-auto px-6 pb-24">

                <h2 className="text-2xl font-bold text-[#5A2C14] mb-8 text-center">
                    Visit Our Kitchen
                </h2>

                <div className="rounded-3xl overflow-hidden shadow-xl">

                    <iframe
                        src="https://www.google.com/maps?q=Motihari,Bihar&output=embed"
                        width="100%"
                        height="400"
                        loading="lazy"
                        className="border-0"
                    ></iframe>

                </div>

            </section>

            {/* TRUST SECTION */}
            <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white text-center py-20 px-6">
                <h3 className="text-3xl font-bold mb-4">
                    Taste Tradition. Share Culture.
                </h3>

                <p className="max-w-2xl mx-auto text-orange-100 mb-8">
                    At Champaran Swad, we prepare every product in small batches
                    using traditional family recipes from Bihar — ensuring freshness,
                    purity and authentic flavor.
                </p>

                <Link
                    href="/products"
                    className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition"
                >
                    Explore Our Products
                </Link>
            </section>

        </main>
    );
}
