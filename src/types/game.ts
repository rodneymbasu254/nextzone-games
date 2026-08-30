export type GameStatus =
  | "in_development"
  | "released"
  | "coming_soon"
  | "discontinued";

export interface Game {
  id: string;
  slug: string;
  title: string;

  short_description: string | null;
  description: string | null;

  cover_image: string | null;
  hero_image: string | null;

  youtube_url: string | null;
  play_store_url: string | null;

  status: GameStatus;
  platform: string[];

  release_date: string | null;

  featured: boolean;

  created_at: string;
  updated_at: string;
}

export interface GameScreenshot {
  id: string;
  game_id: string;

  image_url: string;
  caption: string | null;

  sort_order: number;

  created_at: string;
}