// import mustardOil from "../content/blog/mustard-oil-benefits";
// import aamAchar from "../content/blog/aam-ka-achar-recipe";

// export const blogs = [
//   mustardOil,
//   aamAchar,
// ];

// export function getBlogs() {
//   return blogs;
// }

// export function getBlogBySlug(slug: string, lang: "en" | "hi") {
//   return blogs.find((blog) => blog[lang].slug === slug);
// }
import { Blog } from "./types";
import garlicPickle from "../content/blog/bihari-lehsun-ka-achar-recipe";
import aamAchar from "../content/blog/aam-ka-achar-recipe";
import awlaAchar from "../content/blog/bihari-awla-achar-recipe";

export const blogs: Blog[] = [
    garlicPickle,
aamAchar,
  awlaAchar
];

export function getBlogs(): Blog[] {
  return blogs;
}

export function getBlogBySlug(
  slug: string,
  lang: "en" | "hi"
): Blog | undefined {
  return blogs.find((blog) => blog[lang].slug === slug);
}
