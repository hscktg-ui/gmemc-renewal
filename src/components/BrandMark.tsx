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
  // Original logo, black bg removed + content-cropped for quiet header lockup
  const image = (
    <Image
      src="/assets/logo-header-clean.png"
      alt={company.legalName}
      width={160}
      height={50}
      className="h-7 w-auto max-w-[140px] object-contain object-left md:h-8 md:max-w-[156px]"
      priority
    />
  );

  const content =
    tone === "dark" ? (
      <span className={`inline-flex bg-white/95 px-1.5 py-0.5 ${className}`}>
        {image}
      </span>
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
