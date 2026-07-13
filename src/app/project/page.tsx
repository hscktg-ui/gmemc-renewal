import type { Metadata } from "next";
import { ProjectGrid } from "@/components/ProjectGrid";

export const metadata: Metadata = {
  title: "실적",
};

export default function ProjectPage() {
  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <p className="eyebrow text-mark">Projects</p>
          <h1 className="display mt-5 text-4xl md:text-5xl">
            용도 · 지역으로 찾는 포트폴리오
          </h1>
          <p className="mt-4 max-w-2xl text-ink-soft">
            대분류 · 용도 · 지역 · 키워드로 실적을 찾습니다. 랜드마크 프로젝트는 배지로 표시됩니다.
          </p>
        </div>
      </section>

      <section className="bg-field">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
          <ProjectGrid />
        </div>
      </section>
    </>
  );
}
