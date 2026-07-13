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
  description: `${company.description} ${company.highlight}. 대표 ${company.ceo}. ${company.address}`,
  openGraph: {
    title: company.legalName,
    description: company.description,
    images: ["/assets/logo-renewal.png"],
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
        <main className="min-h-screen pt-[4.25rem] pb-20 md:pb-0">{children}</main>
        <SiteFooter />
        <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-line bg-chalk/95 p-3 backdrop-blur md:hidden">
          <a
            href={`tel:${company.phone}`}
            className="flex-1 rounded-full bg-ink py-3 text-center text-sm font-semibold text-white"
          >
            전화 문의
          </a>
          <a
            href="/contact"
            className="flex-1 rounded-full bg-signal py-3 text-center text-sm font-semibold text-white"
          >
            상담 신청
          </a>
        </div>
      </body>
    </html>
  );
}
