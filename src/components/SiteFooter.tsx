import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { company, nav } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-chalk">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <BrandMark tone="light" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
            {company.tagline}
            <br />
            {company.description}
          </p>
          <p className="mt-4 text-xs text-white/45">{company.note}</p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-mark">바로가기</p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
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
          <p className="text-xs font-semibold tracking-[0.2em] text-mark">연락</p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>
              <a href={`tel:${company.phone}`}>{company.phone}</a>
            </li>
            <li>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li className="leading-relaxed">{company.address}</li>
            <li>
              <a
                href={company.nominationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-signal-soft hover:underline"
              >
                지명원 다운로드
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-white/45 md:flex-row md:justify-between md:px-8">
          <p>
            {company.legalName} | 대표 {company.ceo} | 사업자 {company.bizNo}
          </p>
          <p>© {new Date().getFullYear()} GMEMC</p>
        </div>
      </div>
    </footer>
  );
}
