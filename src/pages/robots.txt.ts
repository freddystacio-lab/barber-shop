import type { APIRoute } from "astro";
import { siteConfig } from "../config/site";

export const GET: APIRoute = () => new Response(
  siteConfig.seo.indexable
    ? `User-agent: *\nAllow: /\nSitemap: ${new URL("sitemap.xml", siteConfig.seo.canonicalUrl)}\n`
    : "User-agent: *\nDisallow: /\n",
  { headers: { "Content-Type": "text/plain; charset=utf-8" } },
);
