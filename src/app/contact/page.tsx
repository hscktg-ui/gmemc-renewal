import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "CONTACT",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-steel pt-28 text-white md:pt-32">
        <div className="mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-20">
          <p className="font-[family-name:var(--font-display)] text-xs tracking-[0.28em] text-accent-soft">
            CONTACT
          </p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">문의하기</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            설계·감리 상담이 필요하시면 아래 연락처 또는 문의 양식을 이용해 주세요.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div>
            <h2 className="text-2xl font-bold">연락처</h2>
            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="text-ink-soft">전화</dt>
                <dd className="mt-1 text-lg font-medium">
                  <a href={`tel:${company.phone}`}>{company.phone}</a>
                </dd>
              </div>
              <div>
                <dt className="text-ink-soft">팩스</dt>
                <dd className="mt-1">{company.fax}</dd>
              </div>
              <div>
                <dt className="text-ink-soft">이메일</dt>
                <dd className="mt-1">
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </dd>
              </div>
              <div>
                <dt className="text-ink-soft">운영시간</dt>
                <dd className="mt-1">
                  {company.hours} (휴무: {company.closed})
                </dd>
              </div>
              <div>
                <dt className="text-ink-soft">주소</dt>
                <dd className="mt-1 leading-relaxed">{company.address}</dd>
              </div>
            </dl>

            <div className="relative mt-8 aspect-[16/10] overflow-hidden bg-paper-deep">
              <Image
                src="/assets/contact-map.png"
                alt="오시는 길"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="bg-paper p-6 md:p-8">
            <h2 className="text-2xl font-bold">문의 양식</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
