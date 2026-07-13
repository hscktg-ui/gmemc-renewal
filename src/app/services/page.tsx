import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { businessAreas, company, processSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "사업",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-mark-deep text-chalk">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-xs font-semibold tracking-[0.28em] text-signal">사업</p>
          <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-bold md:text-6xl">
            전기 · 통신 · 소방 · 기계
            <br />
            그리고 친환경 인증
          </h1>
          <p className="mt-6 max-w-2xl text-white/70">{company.description}</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl space-y-16 px-5 py-16 md:px-8 md:py-24">
          {businessAreas.map((area, index) => {
            const reverse = index % 2 === 1;
            return (
              <article
                key={area.id}
                className={`grid items-center gap-8 md:grid-cols-2 ${
                  reverse ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-field-deep">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <p className="font-[family-name:var(--font-display)] text-sm text-mark">
                    0{index + 1} · {area.en}
                  </p>
                  <h2 className="mt-3 text-3xl font-bold">{area.title}</h2>
                  <p className="mt-4 text-ink-soft leading-relaxed">{area.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-t border-line bg-field">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold">진행 프로세스</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.step} className="rounded-2xl bg-white p-5">
                <p className="text-sm text-mark">{step.step}</p>
                <h3 className="mt-2 font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{step.desc}</p>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-signal px-6 py-3 text-sm font-semibold text-ink"
          >
            사업 범위 상담하기
          </Link>
        </div>
      </section>
    </>
  );
}
