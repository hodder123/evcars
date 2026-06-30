import { MetadataRoute } from "next/server";
export default function sitemap(): MetadataRoute.Sitemap {
  const b = "https://evcars-hodder123s-projects.vercel.app";
  return [
    { url: b,             lastModified: new Date(), changeFrequency: "weekly",  priority: 1   },
    { url: `${b}/cars`,   lastModified: new Date(), changeFrequency: "daily",   priority: 0.9 },
    { url: `${b}/about`,  lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${b}/blog`,   lastModified: new Date(), changeFrequency: "weekly",  priority: 0.6 },
    { url: `${b}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${b}/parts`,  lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${b}/contact`,lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];
}
