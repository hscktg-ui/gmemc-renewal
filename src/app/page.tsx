import Image from "next/image";
import Link from "next/link";
import {
  businessAreas,
  careers,
  company,
  differentiators,
  landmarks,
  processSteps,
  projects,
  stats,
} from "@/lib/site";

const featured = landmarks.length
  ? [...landmarks, ...projects.filter((p) => !p.landmark)].slice(0, 6)
  : projects.slice(0, 6);

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-field">
        <div className="mx-auto grid min-h-[calc(100svh-4.75rem)] max-w-6xl lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col justify-center px-5 py-16 md:px-8 md:py-24">
            <p className="animate-slide text-xs font-bold tracking-[0.28em] text-signal">
              {company.nameEn} · {company.region}
            </p>
            <h1 className="animate-rise mt-5 font-[family-name:var(--font-display)] text-5xl font-extrabold leading-[1.05] tracking-tight text-ink md:text-6xl lg:text-7xl">
              {company.name}
            </h1>
            <p className="animate-rise-2 mt-5 max-w-md text-lg leading-relaxed text-ink/85">
              {company.specialty}
            </p>
            <p className="animate-rise-2 mt-3 max-w-md text-sm text-ink-soft">
              {company.description}
            </p>
            <div className="animate-rise-3 mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-sm bg-ink px-7 py-3.5 text-sm font-bold tracking-wide text-surface transition hover:bg-mark"
              >
                문의하기
              </Link>
              <Link
                href="/project"
                className="rounded-sm border border-ink/25 bg-transparent px-7 py-3.5 text-sm font-bold tracking-wide text-ink transition hover:border-ink hover:bg-ink hover:text-surface"
              >
                실적 보기
              </Link>
            </div>
            <p className="mt-8 text-xs leading-relaxed text-ink-soft">
              {company.highlight}
            </p>
          </div>

          <div className="relative min-h-[56vh] lg:min-h-full">
            <Image
              src="/assets/hero-paganica-hq.jpg"
              alt="파가니카 CC 대표 실적"
              fill
              priority
              className="animate-pan object-cover"
              sizes="(max-width:1024px) 100vw, 55vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mark-deep/75 via-mark-deep/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
              <div className="grid gap-2 sm:grid-cols-3">
                {landmarks.slice(0, 3).map((item) => (
                  <div
                    key={item.id}
                    className="border border-white/15 bg-mark-deep/80 p-3 backdrop-blur-sm"
                  >
                    <p className="text-[10px] font-bold tracking-wide text-signal-soft">
                      {item.region} · {item.scale}
                    </p>
                    <p className="mt-1 text-sm font-bold text-surface">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-line md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-surface px-5 py-9 md:px-8">
              <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-ink md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-ink-soft">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-mark-deep text-chalk">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <p className="text-xs font-bold tracking-[0.28em] text-signal">WHY GMEMC</p>
          <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-bold md:text-4xl">
            발주처가 고르는 이유
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item, i) => (
              <article key={item.title} className="border-t border-white/20 pt-5">
                <p className="font-[family-name:var(--font-display)] text-sm text-signal">
                  0{i + 1}
                </p>
                <h3 className="mt-3 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/60">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-field">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold tracking-[0.28em] text-signal">사업 영역</p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold md:text-5xl">
                전기 · 통신 · 전문소방 · 기계
              </h2>
            </div>
            <Link href="/services" className="text-sm font-bold text-ink underline-offset-4 hover:underline">
              사업 자세히 →
            </Link>
          </div>
          <div className="mt-12 divide-y divide-line border-y border-line bg-surface">
            {businessAreas.map((area, index) => (
              <article
                key={area.id}
                className="grid gap-4 px-5 py-7 transition hover:bg-field md:grid-cols-[72px_140px_1fr] md:items-center md:px-8"
              >
                <p className="font-[family-name:var(--font-display)] text-sm text-signal">
                  0{index + 1}
                </p>
                <h3 className="text-xl font-bold">{area.title}</h3>
                <p className="text-sm text-ink-soft">{area.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold tracking-[0.28em] text-signal">랜드마크 실적</p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold md:text-5xl">
                규모가 보이는 포트폴리오
              </h2>
            </div>
            <Link href="/project" className="text-sm font-bold text-ink underline-offset-4 hover:underline">
              전체 실적 →
            </Link>
          </div>
          <div className="mt-12 grid gap-3 md:grid-cols-12">
            {featured.map((project, i) => {
              const wide = i === 0 || i === 3;
              return (
                <article
                  key={project.id}
                  className={`group relative overflow-hidden ${
                    wide ? "md:col-span-7 aspect-[16/10]" : "md:col-span-5 aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width:768px) 100vw, 55vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mark-deep/90 via-mark-deep/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-xs text-white/65">
                      {project.region} · {project.scale}
                    </p>
                    <p className="mt-1 text-lg font-bold text-surface">{project.title}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ink text-chalk">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs font-bold tracking-[0.28em] text-signal">협업 방식</p>
          <h2 className="mt-3 max-w-xl font-[family-name:var(--font-display)] text-3xl font-bold md:text-5xl">
            문의부터 준공까지
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {processSteps.map((step) => (
              <article key={step.step} className="border-t border-white/15 pt-5">
                <p className="font-[family-name:var(--font-display)] text-sm text-signal">
                  {step.step}
                </p>
                <h3 className="mt-3 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-white/60">{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-field-deep">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 md:flex-row md:items-center md:justify-between md:px-8 md:py-20">
          <div>
            <p className="text-xs font-bold tracking-[0.28em] text-signal">채용</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold">
              {careers[0].title}
            </h2>
            <p className="mt-3 max-w-xl text-ink-soft">
              {careers[0].summary} ({careers[0].experience})
            </p>
          </div>
          <Link
            href="/careers"
            className="inline-flex rounded-sm bg-ink px-6 py-3 text-sm font-bold text-surface hover:bg-mark"
          >
            채용 안내
          </Link>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
          <div>
            <p className="text-xs font-bold tracking-[0.28em] text-signal">문의</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold md:text-4xl">
              도면 전에
              <br />
              한 번의 상담으로
            </h2>
            <dl className="mt-8 space-y-3 text-sm">
              <div className="flex gap-4">
                <dt className="w-16 text-ink-soft">전화</dt>
                <dd className="font-bold">
                  <a href={`tel:${company.phone}`}>{company.phone}</a>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-16 text-ink-soft">메일</dt>
                <dd>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-16 text-ink-soft">위치</dt>
                <dd className="leading-relaxed">{company.address}</dd>
              </div>
            </dl>
          </div>
          <div className="flex flex-col justify-center gap-3 bg-mark-deep p-8 text-surface md:p-10">
            <Link
              href="/contact"
              className="bg-signal px-5 py-3.5 text-center text-sm font-bold text-ink hover:bg-signal-soft"
            >
              문의하기
            </Link>
            <a
              href={company.nominationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/25 px-5 py-3.5 text-center text-sm font-bold hover:bg-white/5"
            >
              지명원 다운로드
            </a>
            <a
              href={`tel:${company.phone}`}
              className="border border-white/25 px-5 py-3.5 text-center text-sm font-bold hover:bg-white/5"
            >
              전화 {company.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
