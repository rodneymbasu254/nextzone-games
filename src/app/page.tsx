import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import {
  getFeaturedGame,
  getGames,
} from "@/lib/games";

export default async function Home() {
  const [featuredGame, games] = await Promise.all([
    getFeaturedGame(),
    getGames(),
  ]);

  const otherGames = games.filter(
    (game) => game.id !== featuredGame?.id
  );

  return (
    <main className="min-h-screen bg-[#05080c] text-white">

      <Navbar />


      {/* ====================================================== */}
      {/* HERO */}
      {/* ====================================================== */}

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

         {/* Ambient lighting */}

         <div className="absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-400/[0.06] blur-[140px]" />

         <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/[0.05] blur-[130px]" />


         {/* Hero content */}

        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 pt-24 text-center sm:px-10">

           <div className="mb-7 flex items-center justify-center gap-3">

             <span className="h-px w-10 bg-cyan-400" />

             <span className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-400">
               NextZone Games
             </span>

             <span className="h-px w-10 bg-cyan-400" />

           </div>


          <h1 className="text-6xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-[110px]">

             We build
            <br />

            <span className="text-white/30">
              worlds.
             </span>

          </h1>


          <p className="mt-10 max-w-2xl text-lg leading-8 text-white/50 sm:text-xl">
            We create games, experiences, and worlds designed
            to push imagination beyond the expected.
           </p>


           <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/games"
               className="rounded-full bg-white px-7 py-3.5 text-sm font-bold text-black transition duration-300 hover:scale-105"
             >
               Explore Our Games
             </Link>

             <a
              href="#studio"
               className="rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white/70 backdrop-blur transition duration-300 hover:border-cyan-400/30 hover:text-white"
            >
              Discover NextZone
            </a>

          </div>

        </div>


        {/* Scroll indicator */}

        <a
          href="#games"
           className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/25 transition hover:text-white/50 sm:flex"
        >

          <span className="h-8 w-px bg-white/20" />

           <span>
             Scroll
           </span>

        </a>

      </section>


      {/* ====================================================== */}
      {/* FEATURED GAME */}
      {/* ====================================================== */}

      {featuredGame && (
        <section className="px-6 py-20 sm:px-10 lg:px-16">

          <div className="mx-auto max-w-7xl">

            <div className="mb-8 flex items-end justify-between">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                  Featured
                </p>

                <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                  Our latest game.
                </h2>

              </div>

              <Link
                href="/games"
                className="hidden text-sm font-semibold text-white/40 transition hover:text-white sm:block"
              >
                View all games →
              </Link>

            </div>


            <Link
              href={`/games/${featuredGame.slug}`}
              className="group relative block overflow-hidden rounded-[2rem] border border-white/[0.08]"
            >

              <div className="relative min-h-[600px]">

                {featuredGame.hero_image && (
                  <Image
                    src={featuredGame.hero_image}
                    alt={featuredGame.title}
                    fill
                    className="object-cover transition duration-[1200ms] group-hover:scale-105"
                    sizes="100vw"
                  />
                )}


                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#05080c] via-transparent to-black/10" />


                <div className="relative z-10 flex min-h-[600px] items-end p-8 sm:p-12 lg:p-16">

                  <div className="max-w-2xl">

                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                      {featuredGame.status.replace("_", " ")}
                    </span>


                    <h3 className="mt-5 text-5xl font-black uppercase tracking-[-0.05em] sm:text-6xl">
                      {featuredGame.title}
                    </h3>


                    <p className="mt-5 text-lg font-medium text-white/70">
                      {featuredGame.short_description}
                    </p>


                    <div className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition duration-300 group-hover:scale-105">
                      Discover the game →
                    </div>

                  </div>

                </div>

              </div>

            </Link>

          </div>

        </section>
      )}


      {/* ====================================================== */}
      {/* OUR GAMES */}
      {/* ====================================================== */}

      <section
        id="games"
        className="px-6 py-24 sm:px-10 lg:px-16"
      >

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
              The Collection
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              More worlds.
            </h2>

            <p className="mt-5 text-white/40">
              Explore the games we're building and the worlds
              waiting to be discovered.
            </p>

          </div>


          {otherGames.length > 0 ? (

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {otherGames.map((game) => (

                <Link
                  key={game.id}
                  href={`/games/${game.slug}`}
                  className="group overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] transition duration-500 hover:-translate-y-1 hover:border-cyan-400/20"
                >

                  <div className="relative aspect-square overflow-hidden bg-[#0a1017]">

                    {game.cover_image ? (
                      <Image
                        src={game.cover_image}
                        alt={`${game.title} cover`}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <span className="text-sm text-white/20">
                          No cover image
                        </span>
                      </div>
                    )}

                  </div>


                  <div className="p-6">

                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">
                      {game.status.replace("_", " ")}
                    </p>

                    <h3 className="mt-2 text-2xl font-black uppercase">
                      {game.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/40">
                      {game.short_description}
                    </p>

                  </div>

                </Link>

              ))}

            </div>

          ) : (

            <div className="mt-12 rounded-3xl border border-white/[0.06] bg-white/[0.015] p-12 text-center">

              <p className="text-white/30">
                More games are currently in development.
              </p>

            </div>

          )}

        </div>

      </section>


      {/* ====================================================== */}
      {/* STUDIO */}
      {/* ====================================================== */}

      <section
        id="studio"
        className="border-y border-white/[0.06] bg-white/[0.015] px-6 py-32 sm:px-10 lg:px-16"
      >

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-end">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                The Studio
              </p>

              <h2 className="mt-4 text-5xl font-black tracking-[-0.04em] sm:text-6xl">
                More than
                <br />
                <span className="text-white/30">
                  games.
                </span>
              </h2>

            </div>


            <div>

              <p className="text-xl leading-9 text-white/60 sm:text-2xl">
                NextZone Games is an independent game studio
                focused on creating memorable interactive
                experiences through technology, creativity,
                and relentless experimentation.
              </p>

              <p className="mt-7 text-base leading-7 text-white/35">
                From the first idea to the final build, we believe
                great games are born where imagination meets
                engineering.
              </p>

            </div>

          </div>


          <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.06] sm:grid-cols-3">

            <div className="bg-[#05080c] p-8">

              <p className="text-3xl font-black text-cyan-400">
                01
              </p>

              <h3 className="mt-5 text-xl font-bold">
                Imagination
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/35">
                Ideas first. Constraints later.
              </p>

            </div>


            <div className="bg-[#05080c] p-8">

              <p className="text-3xl font-black text-cyan-400">
                02
              </p>

              <h3 className="mt-5 text-xl font-bold">
                Technology
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/35">
                Building the systems that make those ideas possible.
              </p>

            </div>


            <div className="bg-[#05080c] p-8">

              <p className="text-3xl font-black text-cyan-400">
                03
              </p>

              <h3 className="mt-5 text-xl font-bold">
                Experience
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/35">
                Every detail exists to make the player feel something.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ====================================================== */}
      {/* CONTACT / CTA */}
      {/* ====================================================== */}

      <section
        id="contact"
        className="px-6 py-32 sm:px-10 lg:px-16"
      >

        <div className="mx-auto max-w-5xl rounded-[2rem] border border-cyan-400/10 bg-gradient-to-br from-cyan-400/[0.08] to-blue-500/[0.02] px-8 py-20 text-center sm:px-16">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
            NextZone Games
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
            Let's build the
            <br />
            next world.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-white/40">
            Follow our journey as we build the games and
            experiences that define NextZone.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
               href="/games"
               className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition duration-300 hover:scale-105"
             >
              Explore NextZone Games
            </Link>
          </div>

          <a
            href="mailto:contact@nextzonegames.co.ke"
            className="mt-5 inline-flex text-sm font-semibold text-white/40 transition hover:text-cyan-300"
          >
            Get in touch →
          </a>

        </div>

      </section>


      {/* ====================================================== */}
      {/* FOOTER */}
      {/* ====================================================== */}

      <footer className="border-t border-white/[0.06] px-6 py-10 sm:px-10 lg:px-16">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">

            {/* Brand */}

            <div>

              <p className="text-sm font-bold text-white/70">
                NextZone Games
              </p>

              <p className="mt-2 text-xs text-white/25">
                A subsidiary of Wiz@rd Group Holdings.
              </p>

              <p className="mt-2 text-xs text-white/20">
                © {new Date().getFullYear()} NextZone Games. All rights reserved.
              </p>

            </div>


            {/* Links */}

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-white/35">

              <a
                href="mailto:contact@nextzonegames.co.ke"
                className="transition hover:text-white"
              >
                Contact
              </a>

              <Link
                href="/privacy"
                className="transition hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="transition hover:text-white"
              >
                Terms of Use
              </Link>

            </div>

          </div>

        </div>

      </footer>

    </main>
  );
}