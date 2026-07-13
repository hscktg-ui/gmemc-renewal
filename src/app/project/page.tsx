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
          <p className="text-xs font-semibold tracking-[0.28em] text-mark">실적</p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold md:text-5xl">
            용도 · 지역으로 찾는 포트폴리오
          </h1>
          <p className="mt-4 max-w-2xl text-ink-soft">
            레저·공공·공동주택·복합시설 실적을 카테고리와 지역, 키워드로 바로 걸러 보세요.
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
