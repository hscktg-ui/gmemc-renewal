import Image from "next/image";
import Link from "next/link";
import {
  businessAreas,
  careers,
  company,
  processSteps,
  projects,
  stats,
} from "@/lib/site";

const featured = [
  projects[5],
  projects[8],
  projects[12],
  projects[19],
  projects[2],
  projects[11],
];

export default function HomePage() {
  return (
    <>
      {/* Hero: brand-first, not the old dark full-bleed clone */}
      <section className="blueprint relative overflow-hidden">
        <div className="mx-auto grid min-h-[calc(100svh-4.25rem)] max-w-6xl lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-center px-5 py-16 md:px-8 md:py-24">
            <p className="animate-slide text-xs font-semibold tracking-[0.28em] text-mark">
              MEP DESIGN & SUPERVISION · {company.region}
            </p>
            <h1 className="animate-rise mt-5 font-[family-name:var(--font-display)] text-5xl font-extrabold leading-[1.05] tracking-tight text-ink md:text-7xl">
              {company.name}
            </h1>
            <p className="animate-rise-2 mt-5 max-w-md text-lg text-ink-soft">
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
              <Link
                href="/project"
                className="rounded-full border border-mark/30 bg-white px-6 py-3 text-sm font-semibold text-mark transition hover:bg-mark hover:text-white"
              >
                실적 살펴보기
              </Link>
            </div>
            <p className="mt-8 text-xs text-ink-soft">{company.note}</p>
          </div>

          <div className="relative min-h-[48vh] lg:min-h-full">
            <Image
              src="/assets/projects/leisure-paganica.png"
              alt="대표 실적 이미지"
              fill
              priority
              className="animate-pan object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent lg:bg-gradient-to-l" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-4 backdrop-blur md:left-8 md:right-auto md:w-72">
              <p className="text-xs font-semibold tracking-wide text-mark">신뢰 지표</p>
              <p className="mt-1 text-2xl font-bold text-ink">{company.highlight}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
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

      {/* Services: numbered list, not old 4-card gallery */}
      <section className="bg-field">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.28em] text-mark">사업 영역</p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold md:text-5xl">
                네 가지 전문으로
                <br />
                건물의 시스템을 완성합니다
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

      {/* Works: asymmetric, info-dense */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.28em] text-mark">실적</p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold md:text-5xl">
                현장에서 검증된 포트폴리오
              </h2>
            </div>
            <Link href="/project" className="text-sm font-semibold text-mark hover:underline">
              전체 실적 →
            </Link>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-12">
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
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 55vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-xs text-white/70">{project.region}</p>
                    <p className="mt-1 text-lg font-semibold text-white">{project.title}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-mark-deep text-chalk">
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

      {/* Careers from latest public info */}
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

      {/* Contact CTA */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-mark">문의</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold md:text-4xl">
              도면 전에, 한 통의 통화로
              <br />
              범위를 맞춰 드립니다
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
            <p className="text-sm text-white/70">빠른 자료</p>
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
            <Link
              href="/company"
              className="rounded-full border border-white/20 px-5 py-3 text-center text-sm font-semibold hover:bg-white/5"
            >
              회사·대표 소개
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
