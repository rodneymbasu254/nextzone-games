"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">

      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-8 sm:pt-5">

        <nav className="relative flex h-16 items-center justify-between rounded-2xl border border-white/[0.08] bg-[#05080c]/75 px-4 backdrop-blur-xl sm:px-6">

          {/* LOGO */}

          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="group flex items-center"
          >
            <Image
              src="/nextzone-logo.png"
              alt="NextZone Games"
              width={150}
              height={50}
              className="h-9 w-auto object-contain transition duration-300 group-hover:scale-105"
              priority
            />
          </Link>


          {/* DESKTOP NAV */}

          <div className="hidden items-center gap-8 md:flex">

            <Link
              href="/games"
              className="text-sm font-medium text-white/60 transition hover:text-white"
            >
              Games
            </Link>

            <a
              href="/#studio"
              className="text-sm font-medium text-white/60 transition hover:text-white"
            >
              Studio
            </a>

            <a
              href="/#contact"
              className="text-sm font-medium text-white/60 transition hover:text-white"
            >
              Contact
            </a>

          </div>


          {/* DESKTOP CTA */}

          <Link
            href="/games"
            className="hidden rounded-full bg-white px-5 py-2.5 text-xs font-bold text-black transition duration-300 hover:scale-105 md:block"
          >
            Explore Games
          </Link>


          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <div className="flex w-4 flex-col gap-1.5">
              <span
                className={`h-px w-full bg-white transition ${
                  open ? "translate-y-[4px] rotate-45" : ""
                }`}
              />

              <span
                className={`h-px w-full bg-white transition ${
                  open ? "opacity-0" : ""
                }`}
              />

              <span
                className={`h-px w-full bg-white transition ${
                  open ? "-translate-y-[4px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>


          {/* MOBILE MENU */}

          {open && (
            <div className="absolute left-0 right-0 top-[calc(100%+8px)] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#070b10]/95 p-3 shadow-2xl backdrop-blur-xl md:hidden">

              <Link
                href="/games"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-4 text-sm font-medium text-white/70 transition hover:bg-white/[0.05] hover:text-white"
              >
                Games
              </Link>

              <a
                href="/#studio"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-4 text-sm font-medium text-white/70 transition hover:bg-white/[0.05] hover:text-white"
              >
                Studio
              </a>

              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-4 text-sm font-medium text-white/70 transition hover:bg-white/[0.05] hover:text-white"
              >
                Contact
              </a>

              <Link
                href="/games"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-xl bg-white px-4 py-3 text-center text-sm font-bold text-black"
              >
                Explore Games
              </Link>

            </div>
          )}

        </nav>

      </div>

    </header>
  );
}