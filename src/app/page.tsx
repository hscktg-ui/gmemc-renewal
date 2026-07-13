import Image from "next/image";
import Link from "next/link";
import { businessAreas, company, projects } from "@/lib/site";

const featured = projects.filter((_, i) => i % 4 === 0).slice(0, 4);

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden bg-steel text-white">
        <Image
          src="/assets/hero-renewal.jpg"
          alt=""
          fill
          priority
          className="animate-ken object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-steel/90 via-steel/55 to-steel/25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(176,141,87,0.18),transparent_45%)]" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-20 pt-32 md:px-8 md:pb-28">
          <p className="animate-rise font-[family-name:var(--font-display)] text-xs tracking-[0.35em] text-accent-soft">
            {company.nameEn}
          </p>
          <h1 className="animate-rise-delay mt-4 max-w-3xl font-[family-name:var(--font-display)] text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            {company.name}
          </h1>
          <p className="animate-rise-delay-2 mt-5 max-w-xl text-base text-white/85 md:text-lg">
            {company.tagline} — {company.description}
          </p>
          <div className="animate-rise-delay-2 mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-sm bg-accent px-6 py-3 font-[family-name:var(--font-display)] text-xs tracking-[0.18em] text-ink transition hover:bg-accent-soft"
            >
              프로젝트 문의
            </Link>
            <Link
              href="/project"
              className="rounded-sm border border-white/35 px-6 py-3 font-[family-name:var(--font-display)] text-xs tracking-[0.18em] text-white transition hover:bg-white/10"
            >
              실적 보기
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-24">
          <div>
            <p className="font-[family-name:var(--font-display)] text-xs tracking-[0.28em] text-steel-bright">
              COMPANY
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight text-ink md:text-4xl">
              {company.highlight}
            </h2>
            <p className="mt-5 max-w-lg text-ink-soft">{company.mission}</p>
            <Link
              href="/company"
              className="mt-8 inline-flex font-[family-name:var(--font-display)] text-xs tracking-[0.2em] text-steel underline-draw"
            >
              VIEW MORE
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {businessAreas.map((area) => (
              <article key={area.id} className="group relative aspect-[4/3] overflow-hidden bg-paper-deep">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width:768px) 50vw, 240px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 to-transparent" />
                <p className="absolute bottom-3 left-3 font-[family-name:var(--font-display)] text-sm tracking-wide text-white">
                  {area.title}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-[family-name:var(--font-display)] text-xs tracking-[0.28em] text-steel-bright">
                PROJECT
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">대표 실적</h2>
            </div>
            <Link
              href="/project"
              className="font-[family-name:var(--font-display)] text-xs tracking-[0.2em] text-steel underline-draw"
            >
              VIEW MORE
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((project) => (
              <article key={project.id} className="group relative aspect-[3/4] overflow-hidden bg-paper-deep">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width:768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-sm font-medium text-white">{project.title}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-steel text-white">
        <Image
          src="/assets/contact-visual.png"
          alt=""
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-20 md:flex-row md:items-center md:justify-between md:px-8 md:py-28">
          <div>
            <p className="font-[family-name:var(--font-display)] text-xs tracking-[0.28em] text-accent-soft">
              CONTACT
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">프로젝트를 상담해 보세요</h2>
            <p className="mt-3 text-white/75">
              {company.phone} · {company.email}
            </p>
          </div>
          <Link
            href="/contact"
            className="rounded-sm bg-accent px-6 py-3 font-[family-name:var(--font-display)] text-xs tracking-[0.18em] text-ink transition hover:bg-accent-soft"
          >
            문의하기
          </Link>
        </div>
      </section>
    </>
  );
}
