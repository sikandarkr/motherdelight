"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getBlogs } from "../../lib/getBlogs";

export default function HindiBlogListPage() {
  const blogs = getBlogs();
  const [search, setSearch] = useState("");

  const filteredBlogs = blogs.filter((blog) =>
    blog.hi.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="bg-[#fffaf4] min-h-screen">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-20 px-6 text-center relative">

        {/* Home Link */}
        <Link
          href="/"
          className="absolute left-6 top-6 text-sm text-orange-600 hover:underline"
        >
          ← होम पेज
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-[#5A2C14] mb-6">
          Champaran Swad ब्लॉग
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          घर के बने अचार, पारंपरिक बिहारी व्यंजन और स्वादिष्ट रेसिपी पढ़ें।
        </p>

        {/* PREMIUM SEARCH */}
        <div className="mt-12 flex justify-center">
          <div className="relative w-full max-w-2xl">

            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-orange-600 text-lg pointer-events-none">
              🔍
            </span>

            <input
              type="text"
              placeholder="रेसिपी, अचार या लेख खोजें..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full
                pl-14 pr-6
                py-5
                text-lg
                text-gray-800
                bg-white
                rounded-full
                border-2 border-orange-400
                shadow-md
                placeholder-gray-500
                focus:outline-none
                focus:ring-4
                focus:ring-orange-200
                focus:border-orange-500
                transition
              "
            />

          </div>
        </div>

      </section>

      {/* BLOG GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        {filteredBlogs.length === 0 && (
          <p className="text-center text-gray-500 text-lg">
            कोई लेख नहीं मिला।
          </p>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredBlogs.map((blog) => {

            const wordCount = blog.hi.content
              .replace(/<[^>]+>/g, "")
              .split(" ").length;

            const readingTime = Math.ceil(wordCount / 200);

            return (
              <article
                key={blog.id}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group"
              >

                {/* IMAGE */}
                {blog.featuredImage && (
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={blog.featuredImage}
                      alt={blog.hi.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                )}

                {/* CONTENT */}
                <div className="p-6">

                  <div className="text-sm text-gray-500 mb-3">
                    {blog.publishedAt} • {readingTime} मिनट पढ़ें
                  </div>

                  <h2 className="text-xl font-semibold text-[#5A2C14] mb-3 group-hover:text-orange-600 transition">
                    {blog.hi.title}
                  </h2>

                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {blog.hi.description}
                  </p>

                  <Link
                    href={`/hi/blog/${blog.hi.slug}`}
                    className="inline-block bg-orange-600 text-white px-5 py-2 rounded-full text-sm hover:bg-orange-700 transition"
                  >
                    पूरा लेख पढ़ें →
                  </Link>

                </div>
              </article>
            );
          })}
        </div>

      </section>

      {/* FOOTER CTA */}
      <section className="bg-orange-600 text-white text-center py-16 px-6 mt-20">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          पारंपरिक बिहारी स्वाद पसंद है?
        </h3>
        <p className="mb-6 text-orange-100">
          हमारे घर के बने अचार और खास उत्पाद देखें।
        </p>
        <Link
          href="/products"
          className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition"
        >
          उत्पाद देखें
        </Link>
      </section>

    </main>
  );
}
