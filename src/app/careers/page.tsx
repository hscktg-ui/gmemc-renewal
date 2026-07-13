import type { Metadata } from "next";
import Link from "next/link";
import { careers, company } from "@/lib/site";

export const metadata: Metadata = {
  title: "채용",
};

export default function CareersPage() {
  return (
    <>
      <section className="bg-mark-deep text-chalk">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-xs font-semibold tracking-[0.28em] text-white/55">채용</p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold md:text-6xl">
            함께 도면을 다듬을
            <br />
            동료를 찾습니다
          </h1>
          <p className="mt-6 max-w-2xl text-white/70">
            공개 채용 정보는 사람인 등 외부 채널 기준으로 반영했습니다. 지원 전 최신 공고를
            확인해 주세요.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl space-y-4 px-5 py-16 md:px-8 md:py-20">
          {careers.map((job) => (
            <article
              key={job.title}
              className="rounded-3xl border border-line p-6 md:flex md:items-center md:justify-between md:gap-8 md:p-8"
            >
              <div>
                <p className="text-xs font-semibold text-mark">{job.source} · {job.experience}</p>
                <h2 className="mt-2 text-2xl font-bold">{job.title}</h2>
                <p className="mt-3 max-w-2xl text-ink-soft">{job.summary}</p>
              </div>
              <a
                href={job.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex shrink-0 bg-mark px-5 py-3 text-sm font-semibold text-white hover:bg-mark-deep md:mt-0"
              >
                공고 보기
              </a>
            </article>
          ))}

          <div className="rounded-3xl bg-field p-6 md:p-8">
            <h3 className="text-lg font-bold">지원 · 문의</h3>
            <p className="mt-2 text-sm text-ink-soft">
              채용 관련 문의는 {company.email} 또는 {company.phone}으로 연락해 주세요.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex text-sm font-semibold text-mark hover:underline"
            >
              문의 페이지로 이동 →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
