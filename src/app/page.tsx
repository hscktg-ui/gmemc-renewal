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
          alt="파가니카 CC"
          fill
          priority
          className="animate-pan object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mark-deep/90 via-mark-deep/58 to-mark-deep/28" />
        <div className="absolute inset-0 bg-gradient-to-t from-mark-deep/75 via-transparent to-mark-deep/25" />

        <div className="relative mx-auto flex min-h-[calc(100svh-3.5rem)] max-w-7xl flex-col justify-end px-5 pb-16 pt-28 md:min-h-[calc(100svh-4rem)] md:px-8 md:pb-24 md:pt-32">
          <p className="eyebrow animate-fade text-white/60">
            {company.legalName} · {company.region}
          </p>
          <h1 className="display animate-rise mt-5 max-w-3xl text-5xl text-white md:text-6xl lg:text-7xl">
            {company.name}
          </h1>
          <p className="animate-rise-2 mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            {company.heroLead}
          </p>
          <p className="animate-rise-2 mt-3 max-w-xl text-sm text-white/55">
            {company.specialty}
          </p>
          <div className="animate-rise-3 mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-on-dark">
              상담 문의
            </Link>
            <Link href="/project" className="btn-ghost-light">
              실적 보기
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16">
          <p className="max-w-3xl text-[15px] leading-relaxed text-ink-soft md:text-base">
            {company.description} {company.highlight}
          </p>
          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="display text-3xl text-ink md:text-4xl">{stat.value}</p>
                <p className="mt-2 text-sm text-ink-soft">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <p className="eyebrow text-mark">선택 기준</p>
          <h2 className="display mt-4 max-w-2xl text-3xl text-ink md:text-4xl">
            발주처가 우리를 찾는 이유
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            설비는 눈에 잘 띄지 않습니다. 그래서 협의 창구가 단순하고, 설계와 감리가
            끊기지 않는 파트너가 필요합니다.
          </p>
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
              <p className="eyebrow text-mark">사업 영역</p>
              <h2 className="display mt-4 text-3xl text-ink md:text-4xl">
                전기 · 통신 · 전문소방 · 기계
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft">
                네 분야를 한 팀이 설계하고, 같은 팀이 감리합니다.
              </p>
            </div>
            <Link
              href="/services"
              className="text-sm font-medium text-ink-soft underline-offset-4 hover:text-ink hover:underline"
            >
              사업 안내
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
              <p className="eyebrow text-mark">주요 실적</p>
              <h2 className="display mt-4 text-3xl text-ink md:text-4xl">
                현장에서 검증된 프로젝트
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft">
                레저·공공·주거·복합 등 용도별로 공개 실적을 확인하실 수 있습니다.
              </p>
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
          <p className="eyebrow text-white/45">업무 진행</p>
          <h2 className="display mt-4 max-w-xl text-3xl md:text-4xl">
            상담에서 준공까지
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/55">
            범위를 먼저 확정하고, 도면에서 간섭을 줄이며, 현장에서 결정을 남깁니다.
          </p>
          <div className="mt-16 grid gap-10 md:grid-cols-4 md:gap-8">
            {processSteps.map((step) => (
              <article key={step.step} className="border-t border-white/15 pt-6">
                <p className="text-xs font-medium text-white/40">{step.step}</p>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-field">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-20 md:flex-row md:items-center md:justify-between md:px-8 md:py-24">
          <div>
            <p className="eyebrow text-mark">채용</p>
            <h2 className="display mt-4 text-3xl text-ink">{careers[0].title}</h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-soft">
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
            <p className="eyebrow text-mark">문의</p>
            <h2 className="display mt-4 text-3xl text-ink md:text-4xl">
              프로젝트 상담을
              <br />
              남겨 주십시오
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft">
              용도와 일정만 알려 주셔도 됩니다. 지명원과 연락처를 함께 준비해 두었습니다.
            </p>
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
