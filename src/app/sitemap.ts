import type { MetadataRoute } from "next";
import { getGames } from "@/lib/games";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const games = await getGames();

  return [
    {
      url: "https://nextzonegames.co.ke",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: "https://nextzonegames.co.ke/games",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    ...games.map((game) => ({
      url: `https://nextzonegames.co.ke/games/${game.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}