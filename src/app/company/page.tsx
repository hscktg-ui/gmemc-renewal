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
      <section className="blueprint border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-xs font-semibold tracking-[0.28em] text-mark">회사</p>
          <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-bold md:text-6xl">
            설계와 감리를
            <br />
            같은 언어로 연결합니다
          </h1>
          <p className="mt-6 max-w-2xl text-ink-soft">{company.mission}</p>
          <p className="mt-4 text-sm text-ink/55">{company.note}</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[0.85fr_1.15fr] md:px-8 md:py-24">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-field-deep">
            <Image
              src="/assets/ceo.jpg"
              alt={`대표이사 ${company.ceo}`}
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 420px"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-[0.28em] text-mark">대표 인사</p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold">
              대표이사 {company.ceo}
            </h2>
            <p className="mt-6 leading-relaxed text-ink-soft">
              {company.highlight}. 레저·공공·공동주택·복합시설까지 축적한 경험을 바탕으로,
              발주처가 의사결정에 쓸 수 있는 명확한 도면과 감리 기록을 제공합니다.
            </p>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-field p-4">
                <dt className="text-xs text-ink-soft">법인명</dt>
                <dd className="mt-1 font-semibold">{company.legalName}</dd>
              </div>
              <div className="rounded-2xl bg-field p-4">
                <dt className="text-xs text-ink-soft">사업자등록번호</dt>
                <dd className="mt-1 font-semibold">{company.bizNo}</dd>
              </div>
              <div className="rounded-2xl bg-field p-4">
                <dt className="text-xs text-ink-soft">본사</dt>
                <dd className="mt-1 text-sm font-medium leading-relaxed">{company.address}</dd>
              </div>
              <div className="rounded-2xl bg-field p-4">
                <dt className="text-xs text-ink-soft">연락</dt>
                <dd className="mt-1 text-sm font-medium">
                  {company.phone}
                  <br />
                  {company.email}
                </dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={company.nominationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-mark px-5 py-3 text-sm font-semibold text-white hover:bg-mark-deep"
              >
                지명원 다운로드
              </a>
              <Link
                href="/contact"
                className="rounded-full border border-ink/15 px-5 py-3 text-sm font-semibold"
              >
                상담 문의
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-field">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-5 py-14 md:grid-cols-4 md:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white p-5">
              <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-mark">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-ink-soft">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
