import type { Metadata } from "next";
import { ProjectGrid } from "@/components/ProjectGrid";

export const metadata: Metadata = {
  title: "PROJECT",
};

export default function ProjectPage() {
  return (
    <>
      <section className="bg-steel pt-28 text-white md:pt-32">
        <div className="mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-20">
          <p className="font-[family-name:var(--font-display)] text-xs tracking-[0.28em] text-accent-soft">
            PROJECT
          </p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">프로젝트</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            레저숙박, 공공시설, 공동주택, 복합·기타 시설까지 — 축적된 설계·감리 실적입니다.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <ProjectGrid />
        </div>
      </section>
    </>
  );
}
