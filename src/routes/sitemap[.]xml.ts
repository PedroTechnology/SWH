import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { products } from "@/lib/products";
import { getProductSlug, productSlugsBySku } from "@/lib/product-slugs";

const BASE_URL = "https://www.swh.net.br";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/empresa", changefreq: "monthly", priority: "0.7" },
          { path: "/solucoes", changefreq: "monthly", priority: "0.9" },
          { path: "/produtos", changefreq: "weekly", priority: "0.9" },
          { path: "/segmentos", changefreq: "monthly", priority: "0.7" },
          { path: "/suporte", changefreq: "monthly", priority: "0.6" },
          { path: "/contato", changefreq: "monthly", priority: "0.7" },
          ...products.map((product) => ({
            path: `/produtos/${getProductSlug(product.sku)}`,
            changefreq: "weekly" as const,
            priority: "0.8",
          })),
          ...Object.entries(productSlugsBySku)
            .filter(([sku]) => !products.some((product) => product.sku === sku))
            .map(([, slug]) => ({
              path: `/produtos/${slug}`,
              changefreq: "weekly" as const,
              priority: "0.8",
            })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
