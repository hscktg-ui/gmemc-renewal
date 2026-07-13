"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { company, nav } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-steel/80 text-white backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link href="/" className="relative z-10 flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/assets/logo-white.png"
            alt={company.name}
            width={120}
            height={36}
            className="h-8 w-auto md:h-9"
            priority
          />
          <span className="hidden font-[family-name:var(--font-display)] text-sm tracking-[0.18em] text-white/80 sm:inline">
            {company.nameEn}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const current =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className="underline-draw font-[family-name:var(--font-display)] text-xs tracking-[0.22em] text-white/85"
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-sm bg-accent px-4 py-2 font-[family-name:var(--font-display)] text-xs tracking-[0.16em] text-ink transition hover:bg-accent-soft"
          >
            문의하기
          </Link>
        </nav>

        <button
          type="button"
          className="relative z-10 grid h-10 w-10 place-items-center md:hidden"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">메뉴</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span className={`h-px bg-white transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px bg-white transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-px bg-white transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-steel px-5 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-[family-name:var(--font-display)] text-sm tracking-[0.2em]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href={`tel:${company.phone}`} className="pt-2 text-sm text-accent-soft">
              {company.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
