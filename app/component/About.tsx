import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-[#FFF7ED] py-24 px-10">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div>
          <Image
            src="/images/homemade-pickles-papad-grains-champaranswad.png"
            alt="Homemade preparation"
            width={500}
            height={400}
            className="rounded-3xl shadow-lg"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>

          <h2 className="text-3xl font-serif font-bold text-[#5A2C14]">
            About ChamparanSwad
          </h2>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Rooted in tradition and made with love, ChamparanSwad brings
            authentic homemade flavors straight from our kitchen to your table.
            Every product is prepared in small batches using family recipes,
            pure ingredients, and traditional methods.
          </p>

          <ul className="mt-6 space-y-3 text-gray-700">

            <li>✅ 100% Homemade</li>
            <li>✅ Pure Ingredients</li>
            <li>✅ Traditional Recipes</li>
            <li>✅ No Preservatives</li>

          </ul>

        </div>

      </div>

    </section>
  );
}
