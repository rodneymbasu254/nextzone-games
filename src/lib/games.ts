import { supabase } from "./supabase";
import type { Game, GameScreenshot } from "@/types/game";

export async function getGames(): Promise<Game[]> {
  const { data, error } = await supabase
    .from("games")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching games:", error);
    return [];
  }

  return (data ?? []) as Game[];
}

export async function getFeaturedGame(): Promise<Game | null> {
  const { data, error } = await supabase
    .from("games")
    .select("*")
    .eq("featured", true)
    .maybeSingle();

  if (error) {
    console.error("Error fetching featured game:", error);
    return null;
  }

  return data as Game | null;
}

export async function getGameBySlug(
  slug: string
): Promise<Game | null> {
  const { data, error } = await supabase
    .from("games")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    console.error("Error fetching game:", error);
    return null;
  }

  return data as Game | null;
}

export async function getGameScreenshots(
  gameId: string
): Promise<GameScreenshot[]> {
  const { data, error } = await supabase
    .from("game_screenshots")
    .select("*")
    .eq("game_id", gameId)
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("Error fetching screenshots:", error);
    return [];
  }

  return (data ?? []) as GameScreenshot[];
}