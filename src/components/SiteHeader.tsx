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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-8 px-5 md:h-[4.25rem] md:px-8">
        <BrandMark tone="light" />

        <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
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
                className={`nav-link text-[13px] font-semibold ${
                  current ? "text-mark" : "text-ink/65 hover:text-ink"
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
            className="bg-mark px-4 py-2 text-[11px] font-bold tracking-[0.16em] text-white transition hover:bg-mark-deep"
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
        <div className="border-t border-line bg-white px-5 py-5 lg:hidden">
          <nav className="flex flex-col gap-4">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-semibold">
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="font-bold text-mark">
              문의하기
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
