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
  const isDark = tone === "dark";
  const image = (
    <Image
      src={isDark ? "/assets/logo-footer-white.png" : "/assets/logo-header-clean.png"}
      alt={company.legalName}
      width={120}
      height={37}
      className="h-[18px] w-auto max-w-[108px] object-contain object-left md:h-5 md:max-w-[120px]"
      priority
    />
  );

  const content = (
    <span className={`inline-flex items-center ${className}`}>{image}</span>
  );

  if (!href) return content;
  return (
    <Link href={href} aria-label={`${company.name} 홈`} className="shrink-0">
      {content}
    </Link>
  );
}
