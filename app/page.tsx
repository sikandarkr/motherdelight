import type { Metadata } from "next";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Products from "./component/Products";
import About from "./component/About";
import Footer from "./component/Footer";

export const metadata: Metadata = {
  title: "Champaran Swad | Homemade Pickles, Papad & Traditional Foods from Bihar",
  description:
    "Champaran Swad serves authentic homemade Bihari pickles, papad and traditional foods from Motihari, Bihar — freshly prepared using family recipes. Order directly on WhatsApp.",
};

export default function Home() {
  return (
    <main className="bg-[#fffaf4]">

     

      {/* HERO / HOME */}
      <section id="home">
        <Hero />
      </section>

      {/* PRODUCTS */}
      <section id="products">
        <Products />
      </section>

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>

      {/* CONTACT / FOOTER */}
      {/* <section id="contact">
        <Footer />
      </section> */}

    </main>
  );
}
