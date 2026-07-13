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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center gap-10 px-5 md:h-16 md:px-8">
        <BrandMark tone="light" />

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
                className={`nav-link text-[13px] font-medium ${
                  current ? "text-ink" : "text-ink-soft hover:text-ink"
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
            className="btn-primary !px-4 !py-2 !text-[12px]"
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
            <span className={`h-px bg-ink transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-px bg-ink transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-5">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-[15px] font-medium">
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary w-full">
              문의하기
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
