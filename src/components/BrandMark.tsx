import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/site";

type BrandMarkProps = {
  href?: string;
  tone?: "dark" | "light";
  className?: string;
};

export function BrandMark({
  href = "/",
  tone = "light",
  className = "",
}: BrandMarkProps) {
  // HQ lockup on white — avoids black-box crop of original upload
  const image = (
    <Image
      src="/assets/logo-header-hq.png"
      alt={company.legalName}
      width={220}
      height={64}
      className="h-11 w-auto max-w-[200px] object-contain object-left md:h-12 md:max-w-[240px]"
      priority
    />
  );

  const content =
    tone === "dark" ? (
      <span
        className={`inline-flex max-w-full overflow-visible rounded-md bg-[#f7f4ef] px-2.5 py-1.5 ${className}`}
      >
        {image}
      </span>
    ) : (
      <span className={`inline-flex max-w-full items-center overflow-visible ${className}`}>
        {image}
      </span>
    );

  if (!href) return content;
  return (
    <Link href={href} aria-label={`${company.name} 홈`} className="shrink-0">
      {content}
    </Link>
  );
}
