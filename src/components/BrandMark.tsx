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
  // Compact lockup — keeps presence low in corporate header
  const image = (
    <Image
      src="/assets/logo-header-compact.png"
      alt={company.legalName}
      width={160}
      height={44}
      className="h-7 w-auto max-w-[148px] object-contain object-left opacity-95 md:h-8 md:max-w-[168px]"
      priority
    />
  );

  const content =
    tone === "dark" ? (
      <span className={`inline-flex bg-white px-2 py-1 ${className}`}>{image}</span>
    ) : (
      <span className={`inline-flex items-center ${className}`}>{image}</span>
    );

  if (!href) return content;
  return (
    <Link href={href} aria-label={`${company.name} 홈`} className="shrink-0">
      {content}
    </Link>
  );
}
