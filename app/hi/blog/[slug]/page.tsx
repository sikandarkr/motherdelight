import { notFound } from "next/navigation";
import { getBlogBySlug } from "../../../lib/getBlogs";
import Image from "next/image";
import parse, {
  domToReact,
  HTMLReactParserOptions,
  Element,
  DOMNode,
} from "html-react-parser";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug, "hi");

  if (!blog) return {};

  return {
    title: blog.hi.title,
    description: blog.hi.description,
    openGraph: {
      title: blog.hi.title,
      description: blog.hi.description,
      url: `https://www.champaranswad.com/blog/hi/${slug}`,
      images: [
        {
          url: blog.featuredImage,
          width: 1200,
          height: 630,
          alt: blog.hi.title,
        },
      ],
      type: "article",
    },
  };
}

export default async function HindiBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug, "hi");

  if (!blog) notFound();

  const wordCount = blog.hi.content
    .replace(/<[^>]+>/g, "")
    .split(" ").length;

  const readingTime = Math.ceil(wordCount / 200);

  const blogUrl = `https://www.champaranswad.com/blog/hi/${slug}`;
  const encodedUrl = encodeURIComponent(blogUrl);
  const encodedTitle = encodeURIComponent(blog.hi.title);

  /* ---------------------------
     SAFE PARSER
  ----------------------------*/

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode.type !== "tag") return;

      const { name, attribs, children } = domNode as Element;

      if (/^h[1-6]$/.test(name)) {
        return (
          <div className="mt-12 mb-6 font-semibold text-[#5A2C14] text-3xl">
            {domToReact(children as DOMNode[], options)}
          </div>
        );
      }

      if (name === "p") {
        return (
          <p className="text-lg leading-8 text-gray-800 mb-6">
            {domToReact(children as DOMNode[], options)}
          </p>
        );
      }

      if (name === "ul") {
        return (
          <ul className="list-disc pl-6 space-y-2 mb-8 text-lg text-gray-800">
            {domToReact(children as DOMNode[], options)}
          </ul>
        );
      }

      if (name === "ol") {
        return (
          <ol className="list-decimal pl-6 space-y-2 mb-8 text-lg text-gray-800">
            {domToReact(children as DOMNode[], options)}
          </ol>
        );
      }

      if (name === "li") {
        return (
          <li className="marker:text-orange-600">
            {domToReact(children as DOMNode[], options)}
          </li>
        );
      }

      if (name === "img") {
        return (
          <div className="my-10">
            <Image
              src={attribs?.src}
              alt={attribs?.alt || ""}
              width={800}
              height={500}
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
        );
      }
    },
  };

  const parsedContent = parse(blog.hi.content, options);

  return (
    <main className="bg-[#fffaf4] min-h-screen">

      {/* HERO */}
      {blog.featuredImage && (
        <div className="relative w-full h-[380px] md:h-[480px]">
          <Image
            src={blog.featuredImage}
            alt={blog.hi.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      )}

      <section className="max-w-6xl mx-auto px-6 py-16 flex gap-10">

        {/* STICKY SHARE */}
        <div className="hidden lg:flex flex-col gap-5 sticky top-40 h-fit">

          <a
            href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
            target="_blank"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-green-600 text-white shadow-lg hover:scale-110 transition"
          >
            WA
          </a>

          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            target="_blank"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white shadow-lg hover:scale-110 transition"
          >
            FB
          </a>

          <a
            href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
            target="_blank"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white shadow-lg hover:scale-110 transition"
          >
            X
          </a>
        </div>

        {/* CONTENT */}
        <article className="flex-1 max-w-4xl mx-auto">

          <h1 className="text-4xl md:text-5xl font-bold text-[#5A2C14] mb-6 leading-tight">
            {blog.hi.title}
          </h1>

          <div className="text-sm text-gray-500 mb-12">
            {blog.publishedAt} • {readingTime} मिनट पढ़ें
          </div>

          <div>{parsedContent}</div>

          {/* CTA */}
          <div className="mt-20 bg-gradient-to-r from-orange-100 to-orange-50 border border-orange-200 rounded-3xl p-10 text-center shadow-lg">
            <h3 className="text-2xl font-bold text-[#5A2C14] mb-4">
              और भी पारंपरिक रेसिपी पढ़ें
            </h3>
            <p className="text-gray-700 mb-6">
              घर जैसा स्वाद और असली बिहारी परंपरा जानने के लिए और लेख पढ़ें।
            </p>

            <a
              href="/blog"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full transition shadow-md"
            >
              और लेख देखें
            </a>
          </div>

        </article>

      </section>
    </main>
  );
}
