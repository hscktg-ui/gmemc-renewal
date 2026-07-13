import Image from "next/image";
import Link from "next/link";
import { company, nav } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr] md:px-8">
        <div>
          <Image
            src="/assets/logo-white.png"
            alt={company.name}
            width={140}
            height={42}
            className="h-9 w-auto"
          />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            {company.tagline}
            <br />
            {company.description}
          </p>
        </div>
        <div>
          <p className="font-[family-name:var(--font-display)] text-xs tracking-[0.22em] text-accent-soft">
            MENU
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-[family-name:var(--font-display)] text-xs tracking-[0.22em] text-accent-soft">
            CONTACT
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a href={`tel:${company.phone}`}>{company.phone}</a>
            </li>
            <li>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li className="leading-relaxed">{company.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-white/50 md:flex-row md:justify-between md:px-8">
          <p>
            {company.legalName} | 대표 {company.ceo} | 사업자등록번호 {company.bizNo}
          </p>
          <p>© {new Date().getFullYear()} GMEMC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
