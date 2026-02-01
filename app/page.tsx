import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Products from "./component/Products";
import About from "./component/About";
import Footer from "./component/Footer";
export const metadata = {
  title: "MotherDelight Kitchen | Homemade Pickles, Papad & Grains",
  description:
    "MotherDelight Kitchen offers traditional homemade Indian pickles, papad and grains — freshly prepared using family recipes. Order on WhatsApp.",
};

export default function Home() {
  return (
    <main className="bg-[#fffaf4]">
      {/* <Navbar />
      <Hero />
      <Products />
      <About />
      <Footer /> */}
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="products">
        <Products />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Footer />
      </section>

    </main>
  );
}
