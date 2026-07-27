import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Traditional search crawlers.
        userAgent: "*",
        allow: "/",
      },
      {
        // AI answer engines and their training/retrieval crawlers. Allowing
        // these is what makes the site eligible to be cited in AI answers.
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "PerplexityBot",
          "Perplexity-User",
          "ClaudeBot",
          "Claude-User",
          "Claude-SearchBot",
          "Google-Extended",
          "Applebot-Extended",
          "Bingbot",
          "DuckDuckBot",
          "cohere-ai",
          "meta-externalagent",
        ],
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
