import type { MetadataRoute } from "next";

/**
 * robots.txt — SEO + AEO
 * LLM docs: https://kmestetica.cl/llms.txt
 */
export default function robots(): MetadataRoute.Robots {
  const aiAgents = [
    "GPTBot",
    "ChatGPT-User",
    "OAI-SearchBot",
    "ClaudeBot",
    "Claude-User",
    "anthropic-ai",
    "PerplexityBot",
    "Google-Extended",
    "Bingbot",
    "Applebot-Extended",
    "CCBot",
    "Googlebot",
  ];

  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiAgents.map((userAgent) => ({ userAgent, allow: "/" as const })),
    ],
    sitemap: "https://kmestetica.cl/sitemap.xml",
    host: "https://kmestetica.cl",
  };
}
