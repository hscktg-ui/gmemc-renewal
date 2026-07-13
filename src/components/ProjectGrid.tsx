"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  projectCategories,
  projects,
  type ProjectCategory,
} from "@/lib/site";

export function ProjectGrid() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");

  const filtered = useMemo(
    () =>
      active === "all"
        ? projects
        : projects.filter((project) => project.category === active),
    [active],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {projectCategories.map((category) => {
          const selected = active === category.id;
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setActive(category.id)}
              className={`rounded-sm px-4 py-2 font-[family-name:var(--font-display)] text-xs tracking-[0.14em] transition ${
                selected
                  ? "bg-steel text-white"
                  : "bg-white text-ink hover:bg-paper-deep"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <article
            key={project.id}
            className="group relative aspect-[4/3] overflow-hidden bg-paper-deep"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes="(max-width:768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-90 transition group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-sm font-medium text-white">{project.title}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
