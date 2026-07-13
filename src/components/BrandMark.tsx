import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/site";

type BrandMarkProps = {
  href?: string;
  /** light = white header; dark = navy footer (logo on white chip for legibility) */
  tone?: "dark" | "light";
  className?: string;
};

export function BrandMark({
  href = "/",
  tone = "light",
  className = "",
}: BrandMarkProps) {
  // Always use original uploaded logo asset
  const image = (
    <Image
      src="/assets/logo-main.png"
      alt={company.legalName}
      width={180}
      height={52}
      className="h-9 w-auto md:h-10"
      priority
    />
  );

  const content =
    tone === "dark" ? (
      <span className={`inline-flex rounded-xl bg-white px-3 py-2 ${className}`}>
        {image}
      </span>
    ) : (
      <span className={`inline-flex items-center ${className}`}>{image}</span>
    );

  if (!href) return content;
  return (
    <Link href={href} aria-label={`${company.name} 홈`}>
      {content}
    </Link>
  );
}
