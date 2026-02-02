"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = ["home", "products", "about", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const NavLink = ({ id, label }: any) => (
    <a
      href={`#${id}`}
      onClick={() => setOpen(false)}
      className={`block transition ${
        active === id
          ? "text-orange-600 font-semibold"
          : "text-gray-700 hover:text-orange-500"
      }`}
    >
      {label}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 bg-[#fffaf4] shadow-sm">

      <div className="flex justify-between items-center px-6 md:px-10 py-4 max-w-7xl mx-auto">

        {/* Logo */}
        <Image
          src="/favicon/champaran-swad-traditional-homemade-foods-logo.png"
          alt="MotherDelight Kitchen logo – homemade Indian pickles, papad and grains prepared with traditional family recipes"
          width={60}
          height={60}
          className="mix-blend-multiply"
          priority
        />

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 font-medium">
          <NavLink id="home" label="Home" />
          <NavLink id="products" label="Products" />
          <NavLink id="about" label="About" />
          <NavLink id="contact" label="Contact" />
        </nav>

        {/* Desktop WhatsApp */}
        <a
          href="https://wa.me/+917814338779"
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
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/30 z-40"
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <div className="md:hidden fixed top-[72px] left-0 right-0 bg-[#fffaf4] px-10 pb-8 flex flex-col space-y-5 z-50 shadow-xl animate-fadeIn">

            <NavLink id="home" label="Home" />
            <NavLink id="products" label="Products" />
            <NavLink id="about" label="About" />
            <NavLink id="contact" label="Contact" />

            <a
              href="https://wa.me/+917814338779"
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
