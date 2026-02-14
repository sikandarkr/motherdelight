
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const navItemClass = (path: string) =>
    `transition ${
      pathname === path
        ? "text-orange-600 font-semibold"
        : "text-gray-700 hover:text-orange-500"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-[#fffaf4] shadow-sm">
      <div className="flex justify-between items-center px-6 md:px-10 py-4 max-w-7xl mx-auto">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/favicon/champaran-swad-traditional-homemade-foods-logo.png"
            alt="Champaran Swad logo"
            width={60}
            height={60}
            className="mix-blend-multiply"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 font-medium items-center">
          <Link href="/" className={navItemClass("/")}>
            Home
          </Link>

          <Link href="/products" aria-label="View homemade pickles and papad products" className={navItemClass("/products")}>
            Products
          </Link>

          <Link href="/about" className={navItemClass("/about")}>
            About Us
          </Link>

          <Link href="/contact" className={navItemClass("/contact")}>
            Contact
          </Link>

          <Link href="/blog" className={navItemClass("/blog")}>
            Blog
          </Link>
        </nav>

        {/* Desktop WhatsApp */}
        <a
          href="https://wa.me/917814338779"
          className="hidden md:block bg-green-600 hover:bg-green-700 hover:scale-105 transition text-white px-5 py-2 rounded-full shadow"
        >
          Order on WhatsApp
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <>
          <div
            className="fixed inset-0 bg-black/30 z-40"
            onClick={() => setOpen(false)}
          />

          <div className="md:hidden fixed top-[72px] left-0 right-0 bg-[#fffaf4] px-10 pb-8 flex flex-col space-y-5 z-50 shadow-xl">

            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={navItemClass("/")}
            >
              Home
            </Link>

            <Link
              href="/products"
              onClick={() => setOpen(false)}
              className={navItemClass("/products")}
            >
              Products
            </Link>

            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className={navItemClass("/about")}
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className={navItemClass("/contact")}
            >
              Contact
            </Link>

            <Link
              href="/blog"
              onClick={() => setOpen(false)}
              className={navItemClass("/blog")}
            >
              Blog
            </Link>

            <a
              href="https://wa.me/917814338779"
              className="mt-2 bg-green-600 text-white text-center py-3 rounded-full shadow"
            >
              Order on WhatsApp
            </a>
          </div>
        </>
      )}
    </header>
  );
}
