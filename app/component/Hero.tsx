

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function HeroSlider() {
    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4500 }}
            loop
            pagination={{ clickable: true }}
            className="heroSwiper"
        >

            {/* Slide 1 */}
            <SwiperSlide>
                <HeroSlide
                    title="Taste the Tradition of Homemade Foods"
                    subtitle="Pickles • Papad • Masala • Grains"
                    tagline="Freshly Made. Delivered with Love"
                    image="/images/champaranswad-homemade-pickles-papad-grains-indian-foods.png"
                />
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
                <HeroSlide
                    title="Pure Homemade Goodness"
                    subtitle="No Preservatives • Family Recipes"
                    tagline="Authentic flavors in every bite"
                    image="/images/ChamparanSwad-kitchen-pure-family-recipes.png"
                />
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
                <HeroSlide
                    title="Fresh Foods Made Daily"
                    subtitle="Traditional Taste • Modern Hygiene"
                    tagline="Order easily on WhatsApp"
                    image="/images/champaranswad-kitchen-fresh-daily-homemade.png"
                />
            </SwiperSlide>

        </Swiper>
    );
}

function HeroSlide({
    title,
    subtitle,
    tagline,
    image,
}: {
    title: string;
    subtitle: string;
    tagline: string;
    image: string;
}) {
    return (
        <section id="home" className="bg-[#F4E9DC] px-10 md:px-24 py-20">

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">

                {/* LEFT TEXT */}
                <div>

                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#5A2C14] leading-tight">
                        {title}
                    </h1>

                    <p className="mt-4 text-lg text-[#6B3A1E] font-medium">
                        {subtitle}
                    </p>

                    <p className="mt-2 text-gray-600 italic">
                        {tagline}
                    </p>

                    <a
                        href="https://wa.me/+917814338779"
                        className="inline-block mt-8 bg-green-700 hover:bg-green-800 transition text-white px-8 py-3 rounded-full shadow"
                    >
                        Order on WhatsApp
                    </a>

                </div>

                {/* RIGHT IMAGE */}
                <div>
                    <Image
                        src={image}
                        alt={`${title} – homemade pickles, papad and grains by ChamparanSwad Kitchen`}
                        width={650}
                        height={420}
                        className="rounded-xl"
                    />

                </div>

            </div>

        </section>
    );
}
