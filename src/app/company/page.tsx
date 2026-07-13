import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { businessAreas, company } from "@/lib/site";

export const metadata: Metadata = {
  title: "COMPANY",
};

export default function CompanyPage() {
  return (
    <>
      <section className="bg-steel pt-28 text-white md:pt-32">
        <div className="mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-20">
          <p className="font-[family-name:var(--font-display)] text-xs tracking-[0.28em] text-accent-soft">
            COMPANY
          </p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">회사 소개</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            {company.legalName}는 {company.description}을 수행하는 종합 엔지니어링 기업입니다.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-24">
          <div className="relative aspect-[4/5] overflow-hidden bg-paper-deep">
            <Image
              src="/assets/ceo.jpg"
              alt={`${company.ceo} 대표`}
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 420px"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-[family-name:var(--font-display)] text-xs tracking-[0.28em] text-steel-bright">
              CEO MESSAGE
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight">
              신뢰로 쌓은 설계와 감리,
              <br />
              그 중심에 {company.name}가 있습니다.
            </h2>
            <p className="mt-6 text-ink-soft leading-relaxed">
              {company.highlight}. {company.mission}
            </p>
            <p className="mt-8 font-[family-name:var(--font-display)] text-sm tracking-[0.12em] text-ink">
              대표이사 {company.ceo}
            </p>
            <a
              href={company.nominationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit rounded-sm bg-steel px-5 py-3 font-[family-name:var(--font-display)] text-xs tracking-[0.16em] text-white transition hover:bg-steel-bright"
            >
              지명원 다운로드
            </a>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="font-[family-name:var(--font-display)] text-xs tracking-[0.28em] text-steel-bright">
            BUSINESS AREA
          </p>
          <h2 className="mt-3 text-3xl font-bold">사업 영역</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {businessAreas.map((area) => (
              <article key={area.id} className="overflow-hidden bg-white">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold">{area.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{area.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-14 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <h2 className="text-2xl font-bold">실적과 문의</h2>
            <p className="mt-2 text-ink-soft">프로젝트 포트폴리오를 확인하거나 바로 상담하세요.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/project"
              className="rounded-sm border border-ink/20 px-5 py-3 font-[family-name:var(--font-display)] text-xs tracking-[0.16em]"
            >
              PROJECT
            </Link>
            <Link
              href="/contact"
              className="rounded-sm bg-accent px-5 py-3 font-[family-name:var(--font-display)] text-xs tracking-[0.16em] text-ink"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
