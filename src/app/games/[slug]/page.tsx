import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  getGameBySlug,
  getGameScreenshots,
} from "@/lib/games";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import { getYouTubeEmbedUrl } from "@/lib/youtube";
import { notFound } from "next/navigation";

interface GamePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: GamePageProps): Promise<Metadata> {
  const { slug } = await params;

  const game = await getGameBySlug(slug);

  if (!game) {
    return {
      title: "Game Not Found",
    };
  }

  return {
    title: game.title,
    description: game.short_description ?? undefined,

    openGraph: {
      title: `${game.title} | NextZone Games`,
      description: game.short_description ?? undefined,
      type: "website",
      images: game.hero_image
        ? [
            {
              url: game.hero_image,
              width: 2460,
              height: 1080,
              alt: game.title,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: `${game.title} | NextZone Games`,
      description: game.short_description ?? undefined,
      images: game.hero_image
        ? [game.hero_image]
        : [],
    },
  };
}

export default async function GamePage({
  params,
}: GamePageProps) {
  const { slug } = await params;

  const game = await getGameBySlug(slug);

  if (!game) {
    notFound();
  }

  const screenshots = await getGameScreenshots(game.id);
  const youtubeEmbedUrl = game.youtube_url
    ? getYouTubeEmbedUrl(game.youtube_url)
    : null;

  return (
    <main className="min-h-screen bg-[#05080c] text-white">

      {/* HERO */}
      <section className="relative min-h-[85vh] overflow-hidden">

        {game.hero_image && (
          <Image
            src={game.hero_image}
            alt={game.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        )}

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#05080c] via-transparent to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl items-end px-6 pb-20 sm:px-10 lg:px-16">

          <div className="max-w-3xl">

            <Link
              href="/games"
              className="mb-8 inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
            >
              ← All Games
            </Link>

            <div className="mb-5 flex items-center gap-3">

              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                {game.status.replace("_", " ")}
              </span>

              {game.platform?.map((platform) => (
                <span
                  key={platform}
                  className="text-sm text-white/50"
                >
                  {platform}
                </span>
              ))}

            </div>

            <h1 className="text-6xl font-black uppercase tracking-[-0.05em] sm:text-7xl lg:text-8xl">
              {game.title}
            </h1>

            <p className="mt-6 max-w-2xl text-xl font-medium leading-8 text-white/75 sm:text-2xl">
              {game.short_description}
            </p>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/50">
              {game.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

             {game.play_store_url && (
               <a
                  href={game.play_store_url}
                  target="_blank"
                  rel="noopener noreferrer"
                 className="rounded-full bg-white px-7 py-3.5 text-sm font-bold text-black transition duration-300 hover:scale-105"
               >
                 Get it on Google Play
               </a>
              )}

              {youtubeEmbedUrl && (
               <a
                  href="#trailer"
                  className="rounded-full border border-white/15 bg-white/[0.05] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
                >
                 Watch Trailer
                </a>
             )}

              <a
                href="#screenshots"
               className="rounded-full border border-white/10 px-7 py-3.5 text-sm font-semibold text-white/60 transition duration-300 hover:border-white/20 hover:text-white"
             >
                Explore the Game
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">

        <div className="max-w-3xl">

          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
            The Game
          </p>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Built for the streets.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/50">
            Street Football brings fast-paced football to a raw,
            competitive environment where every possession matters.
          </p>

        </div>

      </section>


      {/* FEATURED GAMEPLAY */}
      {screenshots.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-10 lg:px-16">

          <div className="mb-8">

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
              Gameplay
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Get on the pitch.
            </h2>

          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08]">

            <Image
              src={screenshots[8]?.image_url ?? screenshots[0].image_url}
              alt={`${game.title} gameplay`}
              width={2460}
              height={1080}
              className="w-full object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />

          </div>

        </section>
      )}


      {/* SCREENSHOTS */}
      <section
        id="screenshots"
        className="border-y border-white/[0.06] bg-white/[0.015] px-6 py-24 sm:px-10 lg:px-16"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-10">

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
              Screenshots
            </p>

            <h2 className="mt-3 text-4xl font-black">
              See the game.
            </h2>

          </div>

          <ScreenshotGallery screenshots={screenshots} />

        </div>

      </section>

      {/* TRAILER */}

      {youtubeEmbedUrl && (
        <section
          id="trailer"
          className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16"
        >

          <div className="max-w-2xl">

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
              Trailer
            </p>

            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              Watch {game.title}.
            </h2>

            <p className="mt-5 text-white/40">
              Get a look at the gameplay, atmosphere, and experience
              behind {game.title}.
            </p>

          </div>


          <div className="mt-10 overflow-hidden rounded-3xl border border-white/[0.08] bg-black shadow-2xl">

            <div className="aspect-video">

              <iframe
                src={youtubeEmbedUrl}
                title={`${game.title} trailer`}
                className="h-full w-full"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />

            </div>

          </div>

        </section>
      )}


      {/* FINAL CTA */}
      <section className="px-6 py-28 sm:px-10">

        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-cyan-400/[0.08] to-blue-500/[0.03] px-8 py-16 text-center sm:px-16">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
            Ready?
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            Step onto the pitch.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-white/50">
            {game.title} is available
            {game.platform?.length
              ? ` on ${game.platform.join(" and ")}.`
              : "."}
          </p>

          {game.play_store_url && (
            <a
              href={game.play_store_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition duration-300 hover:scale-105"
            >
              Get {game.title}
            </a>
          )}

        </div>

      </section>

    </main>
  );
}