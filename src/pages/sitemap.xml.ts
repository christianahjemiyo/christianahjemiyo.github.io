import { navigation, site } from "@data/profile";

const staticPages = navigation.map((item) => item.href);

export function GET() {
  const urls = staticPages
    .map((path) => {
      const loc = new URL(path, site.url).toString();
      return `<url><loc>${loc}</loc><changefreq>monthly</changefreq></url>`;
    })
    .join("");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    {
      headers: {
        "Content-Type": "application/xml"
      }
    }
  );
}
