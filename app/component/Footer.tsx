import Image from "next/image";

export default function Footer() {
    return (
        <footer id="contact" className="bg-[#F4E9DC] pt-20 pb-10 px-10">

            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

                {/* BRAND */}
                <div>
                    <Image
                        src="/images/champaranswad-homemade-pickles-papad-grains-indian-foods.png"
                        alt="ChamparanSwad-homemade-pickles-papad-grains-indian-foods.png Kitchen logo – homemade Indian pickles, papad and grains prepared fresh using traditional family recipes"
                        width={120}
                        height={120}
                        className="rounded-2xl bg-transparent mix-blend-multiply drop-shadow-sm"
                    />
                    <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                      champaranswad brings authentic homemade foods from our kitchen to your table —
                        prepared with love, traditional recipes, and pure ingredients.
                    </p>
                    <p className="mt-2 text-gray-600 text-sm">
                        Serving homemade pickles, papad and grains in Motihari, Bihar, India.
                    </p>
                </div>

                {/* QUICK LINKS */}
                <div>
                    <h4 className="font-semibold text-[#5A2C14] mb-4">Quick Links</h4>

                    <ul className="space-y-2 text-gray-700 text-sm">
                        <li>Home</li>
                        <li>Products</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* CONTACT */}
                <div>
                    <h4 className="font-semibold text-[#5A2C14] mb-4">Contact</h4>

                    <p className="text-sm text-gray-700">📍 East Champaran,Motihari -, Bihar, India</p>
                    <p className="text-sm text-gray-700 mt-2">📞 WhatsApp: +917814338779</p>

                    <a
                        href="https://wa.me/+917814338779"
                        className="inline-block mt-4 bg-green-700 text-white px-5 py-2 rounded-full text-sm"
                    >
                        Order on WhatsApp
                    </a>
                </div>

                {/* SOCIAL */}
                <div>
                    <h4 className="font-semibold text-[#5A2C14] mb-4">Follow Us</h4>

                    <div className="flex gap-4">

                        <a href="https://www.facebook.com/profile.php?id=61587448436061" className="text-gray-700 hover:text-orange-600">
                            Facebook
                        </a>

                        <a href="#" className="text-gray-700 hover:text-orange-600">
                            Instagram
                        </a>

                        <a href="#" className="text-gray-700 hover:text-orange-600">
                            YouTube
                        </a>

                    </div>

                    <p className="text-sm text-gray-600 mt-4">
                        Watch preparation videos & behind-the-scenes on YouTube.
                    </p>
                </div>

            </div>

            {/* BOTTOM BAR */}
            <div className="border-t border-[#d6bfa8] mt-12 pt-6 text-center text-sm text-gray-600">

                © {new Date().getFullYear()} ChamparanSwad Homemade Foods • Crafted with ❤️

            </div>

        </footer>
    );
}
