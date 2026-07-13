import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { company, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "회사",
};

export default function CompanyPage() {
  return (
    <>
      <section className="border-b border-line bg-mark-deep text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="eyebrow text-white/50">회사 소개</p>
          <h1 className="display mt-5 max-w-3xl text-4xl md:text-5xl">
            {company.mission}
          </h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 md:grid-cols-[0.9fr_1.1fr] md:items-start md:px-8 md:py-28">
          <div className="relative aspect-[4/5] overflow-hidden bg-field md:sticky md:top-24">
            <Image
              src="/assets/hero-mapo-hq.jpg"
              alt="마포아트홀 실적"
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 420px"
              priority
            />
          </div>

          <div>
            <p className="eyebrow text-mark">대표 인사</p>
            <h2 className="display mt-4 text-3xl text-ink md:text-4xl">
              대표이사 {company.ceo}
            </h2>

            <div className="mt-8 space-y-5 text-[16px] leading-[1.85] text-ink/80">
              {company.ceoMessage.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="pt-2 text-sm font-medium text-ink">
                {company.legalName}
                <br />
                대표이사 {company.ceo}
              </p>
            </div>

            <dl className="mt-12 grid gap-3 sm:grid-cols-2">
              <div className="border border-line bg-field px-4 py-3">
                <dt className="text-[11px] text-ink-soft">법인명</dt>
                <dd className="mt-1 text-sm font-medium">{company.legalName}</dd>
              </div>
              <div className="border border-line bg-field px-4 py-3">
                <dt className="text-[11px] text-ink-soft">사업자등록번호</dt>
                <dd className="mt-1 text-sm font-medium">{company.bizNo}</dd>
              </div>
              <div className="border border-line bg-field px-4 py-3 sm:col-span-2">
                <dt className="text-[11px] text-ink-soft">본사</dt>
                <dd className="mt-1 text-sm leading-relaxed">{company.address}</dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={company.nominationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                지명원 다운로드
              </a>
              <Link href="/contact" className="btn-secondary">
                상담 문의
              </Link>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-ink/45">{company.note}</p>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-field">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white px-5 py-10 md:px-8">
              <p className="display text-2xl text-mark md:text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm text-ink-soft">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
