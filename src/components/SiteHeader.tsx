"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { company, nav } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-chalk/90 backdrop-blur-md">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <BrandMark />

        <nav className="hidden items-center gap-6 lg:flex">
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
                className="nav-link text-sm font-medium text-ink/80"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={company.nominationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-mark underline-offset-4 hover:underline"
          >
            지명원
          </a>
          <a
            href={`tel:${company.phone}`}
            className="rounded-full bg-ink px-4 py-2 text-xs font-semibold tracking-wide text-white transition hover:bg-mark"
          >
            {company.phone}
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center lg:hidden"
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
        <div className="border-t border-line bg-chalk px-5 py-5 lg:hidden">
          <nav className="flex flex-col gap-3">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-base font-medium">
                {item.label}
              </Link>
            ))}
            <a href={`tel:${company.phone}`} className="pt-2 text-mark">
              {company.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
