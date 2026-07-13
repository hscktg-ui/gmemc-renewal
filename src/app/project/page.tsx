import type { Metadata } from "next";
import { ProjectGrid } from "@/components/ProjectGrid";

export const metadata: Metadata = {
  title: "실적",
};

export default function ProjectPage() {
  return (
    <>
      <section className="blueprint border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <p className="text-xs font-bold tracking-[0.28em] text-mark">실적</p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold md:text-5xl">
            용도 · 지역으로 찾는 포트폴리오
          </h1>
          <p className="mt-4 max-w-2xl text-ink-soft">
            대분류 · 용도(석우형 세분) · 지역 · 키워드로 실적을 즉시 찾습니다. 랜드마크 프로젝트는 배지로 표시됩니다.
          </p>
        </div>
      </section>

      <section className="bg-field">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <ProjectGrid />
        </div>
      </section>
    </>
  );
}
