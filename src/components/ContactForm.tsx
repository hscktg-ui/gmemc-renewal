"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <p className="mt-8 text-ink-soft">
        정상적으로 접수되었습니다. 담당자가 확인 후 연락드리겠습니다.
      </p>
    );
  }

  return (
    <form className="mt-6 space-y-4" onSubmit={onSubmit}>
      <label className="block text-sm">
        <span className="text-ink-soft">회사명</span>
        <input
          required
          name="company"
          className="mt-1 w-full border border-line bg-white px-3 py-2 outline-none focus:border-steel"
        />
      </label>
      <label className="block text-sm">
        <span className="text-ink-soft">담당자</span>
        <input
          required
          name="name"
          className="mt-1 w-full border border-line bg-white px-3 py-2 outline-none focus:border-steel"
        />
      </label>
      <label className="block text-sm">
        <span className="text-ink-soft">연락처</span>
        <input
          required
          name="phone"
          type="tel"
          className="mt-1 w-full border border-line bg-white px-3 py-2 outline-none focus:border-steel"
        />
      </label>
      <label className="block text-sm">
        <span className="text-ink-soft">문의내용</span>
        <textarea
          required
          name="message"
          rows={5}
          className="mt-1 w-full resize-y border border-line bg-white px-3 py-2 outline-none focus:border-steel"
        />
      </label>
      <button
        type="submit"
        className="rounded-sm bg-steel px-5 py-3 font-[family-name:var(--font-display)] text-xs tracking-[0.16em] text-white transition hover:bg-steel-bright"
      >
        문의하기
      </button>
    </form>
  );
}
