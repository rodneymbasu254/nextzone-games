import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#05080c] px-6 text-white">

      <div className="text-center">

        <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
          NextZone Games
        </p>

        <h1 className="mt-6 text-8xl font-black tracking-[-0.06em] text-white/10">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-black">
          World not found.
        </h2>

        <p className="mx-auto mt-4 max-w-md text-white/40">
          Looks like you've wandered outside the map.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-bold text-black transition hover:scale-105"
        >
          Return to NextZone
        </Link>

      </div>

    </main>
  );
}