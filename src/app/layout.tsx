import type { Metadata } from "next";
import { Archivo, Noto_Sans_KR } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { company } from "@/lib/site";
import "./globals.css";

const body = Noto_Sans_KR({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const display = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${company.name} | ${company.tagline}`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  openGraph: {
    title: company.name,
    description: company.description,
    images: ["/assets/company/og.png"],
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
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
        <a
          href={`tel:${company.phone}`}
          className="fixed bottom-5 right-5 z-40 rounded-sm bg-accent px-4 py-3 font-[family-name:var(--font-display)] text-xs tracking-[0.14em] text-ink shadow-lg md:hidden"
        >
          전화 문의
        </a>
      </body>
    </html>
  );
}
