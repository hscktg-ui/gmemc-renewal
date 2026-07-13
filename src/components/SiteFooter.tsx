import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { company, nav } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-mark-deep text-chalk">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <BrandMark tone="dark" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/55">
            {company.tagline}
            <br />
            {company.description}
          </p>
          <p className="mt-4 text-xs text-white/35">{company.note}</p>
        </div>
        <div>
          <p className="eyebrow text-white/40">바로가기</p>
          <ul className="mt-5 space-y-3 text-sm text-white/65">
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
          <p className="eyebrow text-white/40">연락</p>
          <ul className="mt-5 space-y-3 text-sm text-white/65">
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
                className="hover:text-white hover:underline"
              >
                지명원 다운로드
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-white/35 md:flex-row md:justify-between md:px-8">
          <p>
            {company.legalName} | 대표 {company.ceo} | 사업자 {company.bizNo}
          </p>
          <p>© {new Date().getFullYear()} GMEMC</p>
        </div>
      </div>
    </footer>
  );
}
