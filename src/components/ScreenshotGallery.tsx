"use client";

import { useState } from "react";
import Image from "next/image";
import type { GameScreenshot } from "@/types/game";

interface ScreenshotGalleryProps {
  screenshots: GameScreenshot[];
}

export default function ScreenshotGallery({
  screenshots,
}: ScreenshotGalleryProps) {
  const [selected, setSelected] =
    useState<GameScreenshot | null>(null);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

        {screenshots.map((screenshot, index) => (
          <button
            key={screenshot.id}
            onClick={() => setSelected(screenshot)}
            className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-black text-left ${
              index === 0 ? "sm:col-span-2" : ""
            }`}
          >

            <Image
              src={screenshot.image_url}
              alt={
                screenshot.caption ??
                `Street Football screenshot ${index + 1}`
              }
              width={2460}
              height={1080}
              className="aspect-video w-full object-cover transition duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />

            <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs font-medium text-white/70 opacity-0 backdrop-blur transition duration-300 group-hover:opacity-100">
              View screenshot
            </div>

          </button>
        ))}

      </div>


      {/* LIGHTBOX */}

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl"
          onClick={() => setSelected(null)}
        >

          <button
            onClick={() => setSelected(null)}
            className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-xl text-white transition hover:bg-white/20"
            aria-label="Close screenshot"
          >
            ×
          </button>

          <div
            className="relative max-h-[90vh] max-w-[95vw]"
            onClick={(event) => event.stopPropagation()}
          >

            <Image
              src={selected.image_url}
              alt={selected.caption ?? "Street Football screenshot"}
              width={2460}
              height={1080}
              className="max-h-[90vh] w-auto rounded-xl object-contain"
              sizes="95vw"
            />

          </div>

        </div>
      )}
    </>
  );
}