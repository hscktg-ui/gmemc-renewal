"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  projectCategories,
  projects,
  projectUses,
  type ProjectCategory,
  type ProjectUse,
} from "@/lib/site";

export function ProjectGrid() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");
  const [useFilter, setUseFilter] = useState<ProjectUse>("all");
  const [region, setRegion] = useState("전체");
  const [query, setQuery] = useState("");

  const regions = useMemo(
    () => ["전체", ...Array.from(new Set(projects.map((p) => p.region))).sort()],
    [],
  );

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const byCat = active === "all" || project.category === active;
      const byUse = useFilter === "all" || project.use === useFilter;
      const byRegion = region === "전체" || project.region === region;
      const byQuery =
        !query.trim() ||
        project.title.toLowerCase().includes(query.trim().toLowerCase()) ||
        project.scale.toLowerCase().includes(query.trim().toLowerCase());
      return byCat && byUse && byRegion && byQuery;
    });
  }, [active, useFilter, region, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 rounded-sm bg-surface p-4 md:p-5">
        <div>
          <p className="mb-2 text-xs font-bold text-ink-soft">대분류</p>
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((category) => {
              const selected = active === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActive(category.id)}
                  className={`rounded-sm px-4 py-2 text-sm font-bold transition ${
                    selected
                      ? "bg-ink text-surface"
                      : "bg-field text-ink hover:bg-field-deep"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-bold text-ink-soft">용도 필터</p>
          <div className="flex flex-wrap gap-2">
            {projectUses.map((item) => {
              const selected = useFilter === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setUseFilter(item.id)}
                  className={`rounded-sm px-3 py-1.5 text-xs font-bold transition ${
                    selected
                      ? "bg-signal text-ink"
                      : "bg-field text-ink-soft hover:bg-field-deep"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-3 md:flex-row">
          <label className="flex-1 text-sm">
            <span className="sr-only">실적 검색</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="프로젝트명 · 규모 검색"
              className="w-full rounded-full border border-line bg-field px-4 py-2.5 outline-none focus:border-mark"
            />
          </label>
          <label className="text-sm md:w-48">
            <span className="sr-only">지역</span>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-full rounded-full border border-line bg-field px-4 py-2.5 outline-none focus:border-mark"
            >
              {regions.map((item) => (
                <option key={item} value={item}>
                  {item === "전체" ? "지역 전체" : item}
                </option>
              ))}
            </select>
          </label>
        </div>
        <p className="text-xs text-ink-soft">{filtered.length}건 표시</p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <article
            key={project.id}
            className="group overflow-hidden bg-surface"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width:768px) 100vw, 33vw"
              />
              {project.landmark && (
                <span className="absolute left-3 top-3 bg-signal px-2.5 py-1 text-[10px] font-bold text-ink">
                  LANDMARK
                </span>
              )}
            </div>
            <div className="p-4">
              <p className="text-xs text-signal">
                {project.region} · {project.scale}
              </p>
              <h3 className="mt-1 font-semibold">{project.title}</h3>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-ink-soft">조건에 맞는 실적이 없습니다.</p>
      )}
    </div>
  );
}
