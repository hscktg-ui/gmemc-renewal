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
      <section className="bg-mark-deep text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="eyebrow text-white/50">사업</p>
          <h1 className="display mt-5 max-w-3xl text-4xl md:text-5xl">
            네 분야를 한 팀이
            <br />
            설계하고 감리합니다
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-white/60">
            {company.description}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl space-y-20 px-5 py-20 md:px-8 md:py-28">
          {businessAreas.map((area, index) => {
            const reverse = index % 2 === 1;
            return (
              <article
                key={area.id}
                className={`grid items-center gap-10 md:grid-cols-2 ${
                  reverse ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-field">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <p className="eyebrow text-mark">
                    {String(index + 1).padStart(2, "0")} · {area.en}
                  </p>
                  <h2 className="display mt-4 text-3xl">{area.title}</h2>
                  <p className="mt-4 leading-relaxed text-ink-soft">{area.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-t border-line bg-field">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <h2 className="display text-3xl">업무 진행 순서</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.step} className="border-t border-line bg-white pt-5">
                <p className="text-xs font-medium text-ink-soft">{step.step}</p>
                <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{step.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/contact" className="btn-primary mt-12">
            사업 범위 상담
          </Link>
        </div>
      </section>
    </>
  );
}
