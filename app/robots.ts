import { MetadataRoute } from "next";
import sitemap from "./sitemap";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.jobnexa.in/sitemap.xml"
  };
}
