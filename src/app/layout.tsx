import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { company } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gmemc-renewal.vercel.app"),
  title: {
    default: `${company.name} | ${company.tagline}`,
    template: `%s | ${company.name}`,
  },
  description: `${company.specialty} ${company.description} ${company.highlight}. 대표 ${company.ceo}. ${company.address}`,
  keywords: company.keywords.split(", ").concat([
    "지엠이엠씨",
    "GMEMC",
    "설비설계",
    "설비감리",
    "전문소방설계",
  ]),
  openGraph: {
    title: `${company.legalName} | ${company.specialty}`,
    description: company.description,
    images: ["/assets/logo-main.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="antialiased">
        <SiteHeader />
        <main className="min-h-screen pt-14 pb-20 md:pt-16 md:pb-0">{children}</main>
        <SiteFooter />
        <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-line bg-white/95 p-3 backdrop-blur md:hidden">
          <a href={`tel:${company.phone}`} className="btn-primary flex-1 !py-3">
            전화
          </a>
          <a href="/contact" className="btn-secondary flex-1 !py-3">
            문의하기
          </a>
        </div>
      </body>
    </html>
  );
}
