import Image from "next/image";

export default function Products() {
  return (
    <section id="products" className="bg-[#F4E9DC] py-20 px-10">

      <h2 className="text-3xl font-serif font-bold text-center text-[#5A2C14] mb-12">
        Our Products
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {/* PRODUCT */}
        <ProductCard
          name="Pickles"
          desc="Traditional homemade pickles prepared in small batches using fresh vegetables, cold-pressed oils, and hand-ground spices."
          price="Amla • Mango • Lemon • Mixed"
          image="/images/motherdelight-kitchen-traditional-homemade-pickles.png"
        />

        {/* COMING SOON */}
        <ProductCard
          name="Grains / Dalia"
          desc="Stone-ground grains and dalia made from premium quality wheat — hygienically packed for everyday cooking."
          price="Wheat Dalia • Suji • Other grains"
          image="/images/motherdelight-kitchen-wheat-grains-dalia.png"
        />

        {/* FUTURE */}
        <ProductCard
          name="Papad"
          desc="Handmade papad dried naturally under sunlight for authentic taste and perfect crispness."
          price="Classic • Spiced • Garlic"
          image="/images/motherdelight-kitchen-handmade-papad.png"
        />


      </div>
    </section>
  );
}

function ProductCard({
  name,
  desc,
  price,
  image,
}: any) {
  return (
    <div  className="bg-white rounded-3xl p-6 shadow hover:shadow-xl transition text-center">

      <Image
        src={image}
        alt={`${name} by MotherDelight Kitchen`}
        width={200}
        height={200}

        className="mx-auto rounded-xl"
      />

      <h3 className="mt-4 font-semibold text-xl text-[#5A2C14]">
        {name}
      </h3>

      <p className="text-gray-600 text-sm mt-2">
        {desc}
      </p>

      <p className="mt-2 font-semibold text-[#6B3A1E]">
        {price}
      </p>

      <a
        href="https://wa.me/+917814338779"
        className="inline-block mt-4 bg-green-700 text-white px-6 py-2 rounded-full"
      >
        Order on WhatsApp
      </a>
    </div>
  );
}

function InfoCard({ title, items }: any) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow text-center">

      <h3 className="font-semibold text-xl text-[#5A2C14]">
        {title}
      </h3>

      <ul className="mt-4 space-y-2 text-gray-600">
        {items.map((item: string) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>

    </div>
  );
}
