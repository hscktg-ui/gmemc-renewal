import Link from "next/link";

type BrandMarkProps = {
  href?: string;
  tone?: "dark" | "light";
  className?: string;
};

export function BrandMark({
  href = "/",
  tone = "dark",
  className = "",
}: BrandMarkProps) {
  const ink = tone === "dark" ? "#101418" : "#F8FAF9";
  const mark = tone === "dark" ? "#0F766E" : "#5EEAD4";

  const content = (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <rect x="1" y="1" width="38" height="38" stroke={mark} strokeWidth="1.5" />
        <path
          d="M10 28V12h8.2c3.3 0 5.4 1.9 5.4 4.7 0 2.1-1.1 3.6-2.9 4.3L26 28h-4.2l-4.5-6.4H14V28H10Zm4-10h3.8c1.5 0 2.4-.8 2.4-2s-.9-2-2.4-2H14v4Z"
          fill={ink}
        />
        <path
          d="M22.5 12h3.6l3.4 9.2L33 12H36l-4.8 16h-3.5L22.5 12Z"
          fill={mark}
        />
      </svg>
      <span className="leading-none">
        <span
          className="block font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight"
          style={{ color: ink }}
        >
          지엠이엠씨
        </span>
        <span
          className="mt-1 block font-[family-name:var(--font-display)] text-[10px] tracking-[0.28em]"
          style={{ color: mark }}
        >
          GMEMC
        </span>
      </span>
    </span>
  );

  if (!href) return content;
  return <Link href={href}>{content}</Link>;
}
