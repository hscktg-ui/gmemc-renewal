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
  trustBadges,
} from "@/lib/site";

const featured = landmarks.length
  ? [...landmarks, ...projects.filter((p) => !p.landmark)].slice(0, 6)
  : projects.slice(0, 6);

export default function HomePage() {
  return (
    <>
      <section className="blueprint relative overflow-hidden">
        <div className="mx-auto grid min-h-[calc(100svh-4.25rem)] max-w-6xl lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-center px-5 py-14 md:px-8 md:py-20">
            <p className="animate-slide inline-flex w-fit items-center rounded-full bg-mark/10 px-3 py-1 text-xs font-semibold tracking-wide text-mark">
              {company.specialty}
            </p>
            <h1 className="animate-rise mt-5 font-[family-name:var(--font-display)] text-5xl font-extrabold leading-[1.05] tracking-tight text-ink md:text-7xl">
              {company.name}
            </h1>
            <p className="animate-rise-2 mt-4 max-w-lg text-xl font-medium text-ink">
              {company.tagline}
            </p>
            <p className="animate-rise-2 mt-3 max-w-lg text-sm text-ink-soft">
              {company.description}
            </p>
            <div className="animate-rise-3 mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-signal px-6 py-3 text-sm font-semibold text-ink transition hover:bg-signal-soft"
              >
                문의하기
              </Link>
              <a
                href={`tel:${company.phone}`}
                className="rounded-full bg-mark px-6 py-3 text-sm font-semibold text-white transition hover:bg-mark-deep"
              >
                {company.phone}
              </a>
              <a
                href={company.nominationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-mark/30 bg-white px-6 py-3 text-sm font-semibold text-mark"
              >
                지명원
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-ink-soft"
                >
                  {badge}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-ink-soft">{company.note}</p>
          </div>

          <div className="relative min-h-[52vh] lg:min-h-full">
            <Image
              src={landmarks[0]?.image ?? "/assets/projects/leisure-paganica.png"}
              alt={landmarks[0]?.title ?? "대표 실적"}
              fill
              priority
              className="animate-pan object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mark-deep/80 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 grid gap-2 p-5 sm:grid-cols-3">
              {landmarks.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl bg-white/95 p-3 backdrop-blur"
                >
                  <p className="text-[10px] font-semibold tracking-wide text-mark">
                    {item.region} · {item.scale}
                  </p>
                  <p className="mt-1 text-sm font-bold text-ink">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-line md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white px-5 py-8 md:px-8">
              <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-mark md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-ink-soft">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-mark-deep text-chalk">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <p className="text-xs font-semibold tracking-[0.28em] text-signal">
            WHY GMEMC
          </p>
          <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-bold md:text-4xl">
            경쟁사 대비, 발주처가 고른 이유
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item, i) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/15 bg-white/5 p-5"
              >
                <p className="font-[family-name:var(--font-display)] text-sm text-signal">
                  0{i + 1}
                </p>
                <h3 className="mt-3 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/70">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-field">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.28em] text-mark">사업 영역</p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold md:text-5xl">
                전기 · 통신 · 전문소방 · 기계
              </h2>
            </div>
            <Link href="/services" className="text-sm font-semibold text-mark hover:underline">
              사업 자세히 →
            </Link>
          </div>
          <div className="mt-12 divide-y divide-line border-y border-line bg-white">
            {businessAreas.map((area, index) => (
              <article
                key={area.id}
                className="grid gap-4 px-5 py-6 transition hover:bg-field md:grid-cols-[88px_140px_1fr_180px] md:items-center md:px-8"
              >
                <p className="font-[family-name:var(--font-display)] text-sm text-mark">
                  0{index + 1}
                </p>
                <h3 className="text-xl font-bold">{area.title}</h3>
                <p className="text-sm text-ink-soft">{area.desc}</p>
                <p className="text-xs tracking-[0.18em] text-ink/40">{area.en}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.28em] text-mark">랜드마크 실적</p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold md:text-5xl">
                규모가 보이는 포트폴리오
              </h2>
            </div>
            <Link href="/project" className="text-sm font-semibold text-mark hover:underline">
              용도·지역 필터로 전체 보기 →
            </Link>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-12">
            {featured.map((project, i) => {
              const wide = i === 0 || i === 3;
              return (
                <article
                  key={project.id}
                  className={`group relative overflow-hidden rounded-3xl ${
                    wide ? "md:col-span-7 aspect-[16/10]" : "md:col-span-5 aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 55vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-xs text-white/70">
                      {project.region} · {project.scale}
                    </p>
                    <p className="mt-1 text-lg font-semibold text-white">{project.title}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ink text-chalk">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs font-semibold tracking-[0.28em] text-signal">협업 방식</p>
          <h2 className="mt-3 max-w-xl font-[family-name:var(--font-display)] text-3xl font-bold md:text-5xl">
            문의부터 준공까지, 일정이 보이게
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {processSteps.map((step) => (
              <article key={step.step} className="border-t border-white/15 pt-5">
                <p className="font-[family-name:var(--font-display)] text-sm text-signal">
                  {step.step}
                </p>
                <h3 className="mt-3 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-white/65">{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-field-deep">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 md:flex-row md:items-center md:justify-between md:px-8 md:py-20">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-mark">채용</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold">
              {careers[0].title}
            </h2>
            <p className="mt-3 max-w-xl text-ink-soft">
              {careers[0].summary} ({careers[0].experience})
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/careers"
              className="rounded-full bg-mark px-6 py-3 text-sm font-semibold text-white hover:bg-mark-deep"
            >
              채용 안내
            </Link>
            <a
              href={careers[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-semibold"
            >
              사람인에서 보기
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-mark">문의</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold md:text-4xl">
              3초 안에 연락 가능한
              <br />
              발주처형 전환 구조
            </h2>
            <dl className="mt-8 space-y-3 text-sm">
              <div className="flex gap-4">
                <dt className="w-16 text-ink-soft">전화</dt>
                <dd className="font-semibold">
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
          <div className="flex flex-col justify-center gap-4 rounded-3xl bg-mark-deep p-8 text-white md:p-10">
            <p className="text-sm text-white/70">빠른 전환</p>
            <a
              href={`tel:${company.phone}`}
              className="rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-mark"
            >
              전화 문의 {company.phone}
            </a>
            <a
              href={company.nominationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-mark px-5 py-3 text-center text-sm font-semibold hover:bg-blue-mid"
            >
              지명원 다운로드
            </a>
            <Link
              href="/contact"
              className="rounded-full bg-signal px-5 py-3 text-center text-sm font-semibold text-ink hover:bg-signal-soft"
            >
              문의하기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
