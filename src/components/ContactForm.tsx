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
      <p className="mt-8 rounded-2xl bg-field p-4 text-ink-soft">
        접수되었습니다. 담당자가 확인 후 연락드리겠습니다.
      </p>
    );
  }

  return (
    <form className="mt-6 space-y-4" onSubmit={onSubmit}>
      {[
        { name: "company", label: "회사명", type: "text" },
        { name: "name", label: "담당자", type: "text" },
        { name: "phone", label: "연락처", type: "tel" },
      ].map((field) => (
        <label key={field.name} className="block text-sm">
          <span className="text-ink-soft">{field.label}</span>
          <input
            required
            name={field.name}
            type={field.type}
            className="mt-1 w-full rounded-xl border border-line bg-field px-3 py-2.5 outline-none focus:border-mark"
          />
        </label>
      ))}
      <label className="block text-sm">
        <span className="text-ink-soft">문의내용</span>
        <textarea
          required
          name="message"
          rows={5}
          className="mt-1 w-full resize-y rounded-xl border border-line bg-field px-3 py-2.5 outline-none focus:border-mark"
        />
      </label>
      <button
        type="submit"
      className="bg-mark px-5 py-3 text-sm font-bold text-white hover:bg-mark-deep"
      >
        문의 보내기
      </button>
    </form>
  );
}
