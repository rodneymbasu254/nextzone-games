import Image from "next/image";
import Link from "next/link";
import { getGames } from "@/lib/games";

export default async function GamesPage() {
  const games = await getGames();

  return (
    <main className="min-h-screen bg-[#05080c] px-6 py-24 text-white sm:px-10 lg:px-16">

      <div className="mx-auto max-w-7xl">

        <div className="max-w-2xl">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
            NextZone Games
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-[-0.04em] sm:text-6xl">
            Our Games
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/50">
            Worlds built from imagination, technology, and a little
            bit of madness.
          </p>

        </div>


        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

          {games.map((game) => (

            <Link
              key={game.id}
              href={`/games/${game.slug}`}
              className="group overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] transition duration-500 hover:-translate-y-1 hover:border-cyan-400/20"
            >

              <div className="relative aspect-square overflow-hidden">

                {game.cover_image ? (
                  <Image
                    src={game.cover_image}
                    alt={game.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-white/5" />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5">

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                    {game.status.replace("_", " ")}
                  </span>

                  <h2 className="mt-2 text-2xl font-black uppercase">
                    {game.title}
                  </h2>

                </div>

              </div>


              <div className="p-6">

                <p className="text-sm leading-6 text-white/50">
                  {game.short_description}
                </p>

                <div className="mt-5 text-sm font-semibold text-white transition group-hover:text-cyan-300">
                  View game →
                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </main>
  );
}