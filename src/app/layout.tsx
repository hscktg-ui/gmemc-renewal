import type { Metadata } from "next";
import { Noto_Sans_KR, Syne } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { company } from "@/lib/site";
import "./globals.css";

const body = Noto_Sans_KR({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

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
      <body className={`${body.variable} ${display.variable} antialiased`}>
        <SiteHeader />
        <main className="min-h-screen pt-16 pb-20 md:pt-[4.25rem] md:pb-0">{children}</main>
        <SiteFooter />
        <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-line bg-surface/95 p-3 backdrop-blur md:hidden">
          <a
            href={`tel:${company.phone}`}
            className="flex-1 bg-mark py-3 text-center text-sm font-bold text-white"
          >
            전화
          </a>
          <a
            href="/contact"
            className="flex-1 border border-mark bg-white py-3 text-center text-sm font-bold text-mark"
          >
            문의하기
          </a>
        </div>
      </body>
    </html>
  );
}
