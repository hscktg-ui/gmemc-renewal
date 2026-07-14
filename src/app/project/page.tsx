import type { Metadata } from "next";
import { ProjectGrid } from "@/components/ProjectGrid";

export const metadata: Metadata = {
  title: "실적",
  description:
    "지엠이엠씨 설계·감리 실적. 레저·공공·공동주택·복합 등 용도·지역별 포트폴리오를 확인하세요.",
  alternates: { canonical: "/project" },
  openGraph: {
    title: "실적 | 지엠이엠씨",
    description: "용도와 지역으로 찾는 지엠이엠씨 포트폴리오",
    url: "/project",
  },
};

export default function ProjectPage() {
  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <p className="eyebrow text-mark">실적</p>
          <h1 className="display mt-5 text-4xl md:text-5xl">
            용도와 지역으로
            <br />
            찾는 포트폴리오
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            대분류·용도·지역·키워드로 공개 실적을 살펴보실 수 있습니다. 규모가 큰 프로젝트는
            랜드마크로 표시됩니다.
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
