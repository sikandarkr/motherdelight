import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Root
    {
      url: "https://www.champaranswad.com/",
      lastModified: new Date(),
    },

    // English
    {
      url: "https://www.champaranswad.com/en",
      lastModified: new Date(),
    },
    {
      url: "https://www.champaranswad.com/en/about",
      lastModified: new Date(),
    },
    {
      url: "https://www.champaranswad.com/en/products",
      lastModified: new Date(),
    },
    {
      url: "https://www.champaranswad.com/en/contact",
      lastModified: new Date(),
    },
    {
      url: "https://www.champaranswad.com/en/blog",
      lastModified: new Date(),
    },

    // Hindi
    {
      url: "https://www.champaranswad.com/hi",
      lastModified: new Date(),
    },
    {
      url: "https://www.champaranswad.com/hi/blog",
      lastModified: new Date(),
    },
  ];
}
