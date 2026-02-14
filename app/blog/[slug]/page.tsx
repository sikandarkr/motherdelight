

import { notFound } from "next/navigation";
import { getBlogBySlug } from "../../lib/getBlogs";
import Image from "next/image";
import parse, {
    domToReact,
    HTMLReactParserOptions,
    Element,
    DOMNode,
} from "html-react-parser";

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const blog = getBlogBySlug(slug, "en");

//   if (!blog) return {};

//   return {
//     title: blog.en.title,
//     description: blog.en.description,
//     openGraph: {
//       title: blog.en.title,
//       description: blog.en.description,
//       url: `https://www.champaranswad.com/blog/${slug}`,
//       images: [
//         {
//           url: blog.featuredImage,
//           width: 1200,
//           height: 630,
//           alt: blog.en.title,
//         },
//       ],
//       type: "article",
//     },
//   };
// }
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const blog = getBlogBySlug(slug, "en");

    if (!blog) return {};

    const blogUrl = `https://www.champaranswad.com/blog/${slug}`;

    return {
        title: `${blog.en.title} | Champaran Swad`,
        description: blog.en.description,
        keywords: [
            "homemade pickles India",
            "Bihari recipes",
            "traditional achar",
            "Champaran Swad blog",
            blog.en.title,
        ],
        alternates: {
            canonical: blogUrl,
        },
        openGraph: {
            title: blog.en.title,
            description: blog.en.description,
            url: blogUrl,
            siteName: "Champaran Swad",
            locale: "en_IN",
            type: "article",
            images: [
                {
                    url: blog.featuredImage,
                    width: 1200,
                    height: 630,
                    alt: blog.en.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: blog.en.title,
            description: blog.en.description,
            images: [blog.featuredImage],
        },
    };
}

export default async function BlogPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const blog = getBlogBySlug(slug, "en");

    if (!blog) notFound();

    const wordCount = blog.en.content
        .replace(/<[^>]+>/g, "")
        .split(" ").length;

    const readingTime = Math.ceil(wordCount / 200);
    const blogUrl = `https://www.champaranswad.com/blog/${slug}`;

    const encodedUrl = encodeURIComponent(blogUrl);
    const encodedTitle = encodeURIComponent(blog.en.title);

    /* ---------------------------
       SAFE & STABLE PARSER
    ----------------------------*/

    const options: HTMLReactParserOptions = {
        replace: (domNode) => {
            if (domNode.type !== "tag") return;

            const { name, attribs, children } = domNode as Element;

            /* HEADINGS */
            if (/^h[1-6]$/.test(name)) {
                const sizes: Record<string, string> = {
                    h1: "text-4xl md:text-5xl",
                    h2: "text-3xl md:text-4xl",
                    h3: "text-2xl md:text-3xl",
                    h4: "text-xl",
                    h5: "text-lg",
                    h6: "text-base",
                };

                return (
                    <div className={`mt-12 mb-6 font-semibold text-[#5A2C14] ${sizes[name]}`}>
                        {domToReact(children as DOMNode[], options)}
                    </div>
                );
            }

            /* Paragraph */
            if (name === "p") {
                return (
                    <p className="text-lg leading-8 text-gray-800 mb-6">
                        {domToReact(children as DOMNode[], options)}
                    </p>
                );
            }

            /* Strong */
            if (name === "strong") {
                return (
                    <strong className="text-[#5A2C14] font-semibold">
                        {domToReact(children as DOMNode[], options)}
                    </strong>
                );
            }

            /* Links */
            if (name === "a") {
                return (
                    <a
                        href={attribs?.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 underline hover:text-orange-700"
                    >
                        {domToReact(children as DOMNode[], options)}
                    </a>
                );
            }

            /* Lists */
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

            /* Blockquote */
            if (name === "blockquote") {
                return (
                    <blockquote className="border-l-4 border-orange-500 pl-6 italic bg-orange-50 py-4 rounded-lg my-10 text-gray-700">
                        {domToReact(children as DOMNode[], options)}
                    </blockquote>
                );
            }




            /* Normal IMG */
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

            /* Video */
            if (name === "video") {
                return (
                    <div className="my-10">
                        <video
                            controls
                            className="w-full rounded-xl shadow-lg"
                            {...attribs}
                        />
                    </div>
                );
            }

            /* Audio */
            if (name === "audio") {
                return (
                    <div className="my-8">
                        <audio controls className="w-full" {...attribs} />
                    </div>
                );
            }

            /* Iframe */
            if (name === "iframe") {
                return (
                    <div className="my-10 aspect-video">
                        <iframe
                            {...attribs}
                            className="w-full h-full rounded-xl shadow-lg"
                            allowFullScreen
                        />
                    </div>
                );
            }

            /* Table */
            if (name === "table") {
                return (
                    <div className="overflow-x-auto my-10">
                        <table className="min-w-full border border-gray-200 text-left text-sm">
                            {domToReact(children as DOMNode[], options)}
                        </table>
                    </div>
                );
            }

            if (name === "th") {
                return (
                    <th className="border px-4 py-3 bg-orange-50 font-semibold text-[#5A2C14]">
                        {domToReact(children as DOMNode[], options)}
                    </th>
                );
            }

            if (name === "td") {
                return (
                    <td className="border px-4 py-3">
                        {domToReact(children as DOMNode[], options)}
                    </td>
                );
            }

            /* Code */
            if (name === "pre") {
                return (
                    <pre className="bg-gray-900 text-white p-6 rounded-xl overflow-x-auto my-8 text-sm">
                        {domToReact(children as DOMNode[], options)}
                    </pre>
                );
            }

            if (name === "code") {
                return (
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                        {domToReact(children as DOMNode[], options)}
                    </code>
                );
            }

            /* HR */
            if (name === "hr") {
                return <hr className="my-12 border-orange-200" />;
            }

            /* Section / Article */
            if (name === "section" || name === "article") {
                return (
                    <div className="my-12">
                        {domToReact(children as DOMNode[], options)}
                    </div>
                );
            }

            /* Figure */
            if (name === "figure") {
                return (
                    <figure className="my-10">
                        {domToReact(children as DOMNode[], options)}
                    </figure>
                );
            }

            if (name === "figcaption") {
                return (
                    <figcaption className="text-center text-sm text-gray-500 mt-2">
                        {domToReact(children as DOMNode[], options)}
                    </figcaption>
                );
            }
        },
    };

    const parsedContent = parse(blog.en.content, options);

    //   return (
    //     <main className="bg-[#fffaf4] min-h-screen">

    //       {/* HERO IMAGE */}
    //       {blog.featuredImage && (
    //         <div className="relative w-full h-[380px] md:h-[480px]">
    //           <Image
    //             src={blog.featuredImage}
    //             alt={blog.en.title}
    //             fill
    //             priority
    //             className="object-cover"
    //           />
    //           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    //         </div>
    //       )}

    //       <article className="max-w-4xl mx-auto px-6 py-16">

    //         <h1 className="text-4xl md:text-5xl font-bold text-[#5A2C14] mb-6">
    //           {blog.en.title}
    //         </h1>

    //         <div className="text-sm text-gray-500 mb-12">
    //           By <strong>{blog.author}</strong> • {blog.publishedAt} • {readingTime} min read
    //         </div>

    //         <div>{parsedContent}</div>

    //       </article>
    //     </main>
    //   );
    return (
        <main className="bg-[#fffaf4] min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        headline: blog.en.title,
                        description: blog.en.description,
                        image: blog.featuredImage,
                        author: {
                            "@type": "Person",
                            name: blog.author,
                        },
                        publisher: {
                            "@type": "Organization",
                            name: "Champaran Swad",
                            logo: {
                                "@type": "ImageObject",
                                url: "https://www.champaranswad.com/og-image.png",
                            },
                        },
                        mainEntityOfPage: blogUrl,
                        datePublished: blog.publishedAt,
                        dateModified: blog.publishedAt,
                        inLanguage: "en-IN",
                    }),
                }}
            />

            {/* HERO IMAGE */}
            {blog.featuredImage && (
                <div className="relative w-full h-[380px] md:h-[480px]">
                    <Image
                        src={blog.featuredImage}
                        alt={blog.en.title}
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
            )}

            <section className="max-w-6xl mx-auto px-6 py-16 flex gap-10">

                {/* STICKY SHARE (Desktop) */}
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

                {/* BLOG CONTENT */}
                <article className="flex-1 max-w-4xl mx-auto">

                    <h1 className="text-4xl md:text-5xl font-bold text-[#5A2C14] mb-6 leading-tight">
                        {blog.en.title}
                    </h1>

                    <div className="text-sm text-gray-500 mb-12">
                        By <strong>{blog.author}</strong> • {blog.publishedAt} • {readingTime} min read
                    </div>

                    {/* BLOG BODY */}
                    <div className="space-y-2">
                        {parsedContent}
                    </div>

                    {/* MOBILE SHARE */}
                    <div className="mt-16 pt-8 border-t lg:hidden">
                        <p className="font-semibold text-lg mb-4 text-[#5A2C14]">
                            Share this article
                        </p>

                        <div className="flex gap-4">
                            <a
                                href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
                                target="_blank"
                                className="bg-green-600 text-white px-6 py-2 rounded-full text-sm shadow-md"
                            >
                                WhatsApp
                            </a>

                            <a
                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                                target="_blank"
                                className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm shadow-md"
                            >
                                Facebook
                            </a>
                        </div>
                    </div>

                    {/* ENGAGEMENT CTA */}
                    <div className="mt-20 bg-gradient-to-r from-orange-100 to-orange-50 border border-orange-200 rounded-3xl p-10 text-center shadow-lg">
                        <h3 className="text-2xl font-bold text-[#5A2C14] mb-4">
                            Loved This Recipe?
                        </h3>
                        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                            Discover more traditional Bihari recipes, homemade pickles, and authentic flavors crafted with love.
                        </p>

                        <a
                            href="/blog"
                            className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full transition shadow-md"
                        >
                            Explore More Articles
                        </a>
                    </div>

                    {/* AUTHOR BOX */}
                    <div className="mt-20 pt-10 border-t flex items-center gap-6">
                        <div className="w-16 h-16 rounded-full bg-orange-200 flex items-center justify-center text-orange-700 font-bold text-xl">
                            CS
                        </div>
                        <div>
                            <p className="font-semibold text-[#5A2C14] text-lg">
                                {blog.author}
                            </p>
                            <p className="text-gray-600 text-sm">
                                Sharing authentic recipes, local food guides, and traditional flavors from Bihar.
                            </p>
                        </div>
                    </div>

                    {/* BLOG FOOTER */}
                    <div className="mt-24 text-center border-t pt-12">

                        <h4 className="text-xl font-semibold text-[#5A2C14] mb-4">
                            🍲 Taste Tradition. Share Culture.
                        </h4>

                        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                            At Champaran Swad, we believe food is more than flavor —
                            it’s heritage, emotion, and memories passed down through generations.
                        </p>

                        <div className="flex justify-center gap-6 text-sm text-gray-500">
                            <a href="/about" className="hover:text-orange-600">About Us</a>
                            <a href="/products" className="hover:text-orange-600">Our Products</a>
                            <a href="/contact" className="hover:text-orange-600">Contact</a>
                        </div>

                    </div>

                </article>

            </section>
        </main>
    );


}
