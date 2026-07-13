import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "문의",
};

const faqs = [
  {
    q: "어떤 단계부터 상담이 가능한가요?",
    a: "기획·기본설계 단계부터 가능합니다. 용도와 일정을 알려주시면 범위를 먼저 맞춰 드립니다.",
  },
  {
    q: "지명원·회사소개 자료는 어디서 받나요?",
    a: "회사 페이지와 문의 페이지의 ‘지명원 다운로드’ 링크에서 바로 확인할 수 있습니다.",
  },
  {
    q: "수도권 외 현장도 가능한가요?",
    a: "수도권 중심이지만 전국 실적이 있습니다. 현장 위치와 일정을 남겨 주시면 검토합니다.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="blueprint border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <p className="text-xs font-semibold tracking-[0.28em] text-mark">문의</p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold md:text-5xl">
            필요한 정보만 빠르게
          </h1>
          <p className="mt-4 max-w-2xl text-ink-soft">
            전화 · 메일 · 지명원 · 오시는 길 · 문의 폼을 한곳에 모아 두었습니다.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[0.95fr_1.05fr] md:px-8 md:py-20">
          <div className="space-y-6">
            <div className="rounded-3xl bg-field p-6">
              <h2 className="text-xl font-bold">바로 연락</h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <span className="text-ink-soft">전화 </span>
                  <a className="font-semibold" href={`tel:${company.phone}`}>
                    {company.phone}
                  </a>
                </li>
                <li>
                  <span className="text-ink-soft">팩스 </span>
                  {company.fax}
                </li>
                <li>
                  <span className="text-ink-soft">메일 </span>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </li>
                <li>
                  <span className="text-ink-soft">시간 </span>
                  {company.hours} ({company.closed})
                </li>
                <li className="leading-relaxed">
                  <span className="text-ink-soft">주소 </span>
                  {company.address}
                </li>
              </ul>
              <a
                href={company.nominationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex bg-mark px-5 py-3 text-sm font-semibold text-white"
              >
                지명원 다운로드
              </a>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-field-deep">
              <Image
                src="/assets/contact-map.png"
                alt="오시는 길"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 45vw"
              />
            </div>

            <div>
              <h2 className="text-lg font-bold">자주 묻는 질문</h2>
              <div className="mt-4 space-y-3">
                {faqs.map((faq) => (
                  <details key={faq.q} className="rounded-2xl border border-line p-4">
                    <summary className="cursor-pointer font-medium">{faq.q}</summary>
                    <p className="mt-2 text-sm text-ink-soft">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-line p-6 md:p-8">
            <h2 className="text-xl font-bold">온라인 문의</h2>
            <p className="mt-2 text-sm text-ink-soft">
              회사명 · 담당자 · 연락처 · 문의내용을 남겨 주세요.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
