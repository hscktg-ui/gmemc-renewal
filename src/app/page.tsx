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
      <section className="relative isolate min-h-[calc(100svh-3.5rem)] overflow-hidden md:min-h-[calc(100svh-4rem)]">
        <Image
          src="/assets/hero-paganica-hq.jpg"
          alt="파가니카 CC 대표 실적"
          fill
          priority
          className="animate-pan object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mark-deep/88 via-mark-deep/55 to-mark-deep/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-mark-deep/70 via-transparent to-mark-deep/20" />

        <div className="relative mx-auto flex min-h-[calc(100svh-3.5rem)] max-w-7xl flex-col justify-end px-5 pb-16 pt-28 md:min-h-[calc(100svh-4rem)] md:px-8 md:pb-24 md:pt-32">
          <p className="eyebrow animate-fade text-white/65">
            {company.nameEn} · {company.region}
          </p>
          <h1 className="display animate-rise mt-5 max-w-3xl text-5xl text-white md:text-6xl lg:text-7xl">
            {company.name}
          </h1>
          <p className="animate-rise-2 mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            {company.specialty}
          </p>
          <div className="animate-rise-3 mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-on-dark">
              문의하기
            </Link>
            <Link href="/project" className="btn-ghost-light">
              실적 보기
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-r border-line px-5 py-10 last:border-r-0 md:px-8 md:py-12 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r"
            >
              <p className="display text-3xl text-ink md:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-ink-soft">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <p className="eyebrow text-mark">Why GMEMC</p>
          <h2 className="display mt-4 max-w-2xl text-3xl text-ink md:text-5xl">
            발주처가 고르는 이유
          </h2>
          <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {differentiators.map((item, i) => (
              <article key={item.title} className="border-t border-line pt-6">
                <p className="text-xs font-medium text-ink-soft">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-field">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-mark">Business</p>
              <h2 className="display mt-4 text-3xl text-ink md:text-5xl">
                전기 · 통신 · 전문소방 · 기계
              </h2>
            </div>
            <Link
              href="/services"
              className="text-sm font-medium text-ink-soft underline-offset-4 hover:text-ink hover:underline"
            >
              사업 자세히
            </Link>
          </div>
          <div className="mt-14 divide-y divide-line border-y border-line bg-white">
            {businessAreas.map((area, index) => (
              <article
                key={area.id}
                className="grid gap-3 px-5 py-8 transition hover:bg-field/60 md:grid-cols-[64px_160px_1fr] md:items-center md:px-8"
              >
                <p className="text-xs font-medium text-ink-soft">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-xl font-semibold tracking-tight">{area.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{area.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-mark">Projects</p>
              <h2 className="display mt-4 text-3xl text-ink md:text-5xl">
                규모가 보이는 포트폴리오
              </h2>
            </div>
            <Link
              href="/project"
              className="text-sm font-medium text-ink-soft underline-offset-4 hover:text-ink hover:underline"
            >
              전체 실적
            </Link>
          </div>
          <div className="mt-14 grid gap-2 md:grid-cols-12 md:gap-3">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-mark-deep/85 via-mark-deep/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                    <p className="text-xs text-white/65">
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

      <section className="bg-mark-deep text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <p className="eyebrow text-white/50">Process</p>
          <h2 className="display mt-4 max-w-xl text-3xl md:text-5xl">
            문의부터 준공까지
          </h2>
          <div className="mt-16 grid gap-10 md:grid-cols-4 md:gap-8">
            {processSteps.map((step) => (
              <article key={step.step} className="border-t border-white/15 pt-6">
                <p className="text-xs font-medium text-white/45">{step.step}</p>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-field">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-20 md:flex-row md:items-center md:justify-between md:px-8 md:py-24">
          <div>
            <p className="eyebrow text-mark">Careers</p>
            <h2 className="display mt-4 text-3xl text-ink">{careers[0].title}</h2>
            <p className="mt-3 max-w-xl text-ink-soft">
              {careers[0].summary} ({careers[0].experience})
            </p>
          </div>
          <Link href="/careers" className="btn-primary">
            채용 안내
          </Link>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-2 md:px-8 md:py-32">
          <div>
            <p className="eyebrow text-mark">Contact</p>
            <h2 className="display mt-4 text-3xl text-ink md:text-4xl">
              도면 전에
              <br />
              한 번의 상담으로
            </h2>
            <dl className="mt-10 space-y-4 text-sm">
              <div className="flex gap-4">
                <dt className="w-14 text-ink-soft">전화</dt>
                <dd className="font-medium">
                  <a href={`tel:${company.phone}`}>{company.phone}</a>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-14 text-ink-soft">메일</dt>
                <dd>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-14 text-ink-soft">위치</dt>
                <dd className="leading-relaxed text-ink-soft">{company.address}</dd>
              </div>
            </dl>
          </div>
          <div className="flex flex-col justify-center gap-3 bg-mark-deep p-8 md:p-12">
            <Link href="/contact" className="btn-on-dark w-full">
              문의하기
            </Link>
            <a
              href={company.nominationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-light w-full"
            >
              지명원 다운로드
            </a>
            <a href={`tel:${company.phone}`} className="btn-ghost-light w-full">
              전화 {company.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
