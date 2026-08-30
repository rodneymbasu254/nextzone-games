export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#05080c] text-white">

      <div className="flex flex-col items-center">

        <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-cyan-400" />

        <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.35em] text-white/30">
          Entering NextZone
        </p>

      </div>

    </main>
  );
}