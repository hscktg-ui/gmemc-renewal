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
          <p className="eyebrow text-white/50">Company</p>
          <h1 className="display mt-5 max-w-3xl text-4xl md:text-5xl">
            설계와 감리를
            <br />
            같은 언어로 연결합니다
          </h1>
          <p className="mt-6 max-w-2xl text-white/60">{company.mission}</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
          <div className="relative aspect-[4/5] overflow-hidden bg-field">
            <Image
              src="/assets/ceo-arch-sketch.jpg"
              alt="건축 개념 스케치"
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 480px"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-mark-deep/85 px-5 py-4 text-white">
              <p className="eyebrow text-white/55">Concept</p>
              <p className="mt-1 text-sm font-medium">건축 설비 엔지니어링 스케치</p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="eyebrow text-mark">CEO</p>
            <h2 className="display mt-4 text-3xl text-ink">
              대표이사 {company.ceo}
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-soft">
              <p>
                {company.legalName}는 전기·정보통신·소방·기계설비의 설계와 감리를 수행하는
                종합 엔지니어링 기업입니다.
              </p>
              <p>
                {company.highlight}. 에너지 분석과 친환경 건축을 고려한 설계로, 발주처와
                시공이 같은 도면 위에서 의사결정할 수 있도록 돕습니다.
              </p>
              <p className="font-medium text-ink">신뢰를 기술로 증명하겠습니다.</p>
              <p className="text-sm text-ink/60">— {company.name} 대표 {company.ceo}</p>
            </div>

            <dl className="mt-10 grid gap-3 sm:grid-cols-2">
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
            <p className="mt-6 text-xs text-ink/45">{company.note}</p>
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
