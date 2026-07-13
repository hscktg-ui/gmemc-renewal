"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { nav } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-surface/95 backdrop-blur-md">
      <div className="mx-auto flex h-[4.75rem] max-w-6xl items-center gap-6 px-5 md:px-8">
        <div className="min-w-0 shrink-0 overflow-visible pr-2">
          <BrandMark tone="light" />
        </div>

        <nav className="hidden flex-1 items-center justify-center gap-9 lg:flex">
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
                className={`nav-link text-[15px] font-bold tracking-wide ${
                  current ? "text-ink" : "text-ink/70 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto hidden shrink-0 md:block">
          <Link
            href="/contact"
            className="rounded-sm bg-ink px-5 py-2.5 text-xs font-bold tracking-[0.14em] text-surface transition hover:bg-mark"
          >
            문의하기
          </Link>
        </div>

        <button
          type="button"
          className="ml-auto grid h-10 w-10 place-items-center lg:hidden"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="flex w-5 flex-col gap-1.5">
            <span className={`h-0.5 bg-ink transition ${open ? "translate-y-[4px] rotate-45" : ""}`} />
            <span className={`h-0.5 bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-ink transition ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-surface px-5 py-5 lg:hidden">
          <nav className="flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-bold tracking-wide"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="pt-1 font-bold text-signal">
              문의하기
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
