import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { company } from "@/lib/site";
import { siteUrl } from "@/lib/seo";
import "./globals.css";

const titleDefault = `${company.name} | ${company.tagline}`;
const description = `${company.specialty}. ${company.description} ${company.highlight}`;

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const naverVerification = process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: titleDefault,
    template: `%s | ${company.name}`,
  },
  description,
  keywords: [
    "지엠이엠씨",
    "주식회사 지엠이엠씨",
    "GMEMC",
    "설비설계",
    "설비감리",
    "전문소방설계",
    "전기설비 설계",
    "기계설비 설계",
    "통신설비 설계",
    "소방설비 설계",
    "MEP 설계",
    "고양 설비설계",
    "일산 설계사무소",
    company.ceo,
  ],
  applicationName: company.legalName,
  authors: [{ name: company.legalName }],
  creator: company.legalName,
  publisher: company.legalName,
  category: "business",
  classification: "설비 설계·감리",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/",
    languages: {
      "ko-KR": "/",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: company.legalName,
    title: `${company.legalName} | ${company.specialty}`,
    description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${company.legalName} — ${company.specialty}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.legalName} | ${company.specialty}`,
    description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    ...(googleVerification ? { google: googleVerification } : {}),
    other: {
      ...(naverVerification
        ? { "naver-site-verification": naverVerification }
        : {}),
    },
  },
  other: {
    "geo.region": "KR-41",
    "geo.placename": "고양시 일산동구",
    "geo.position": "37.6615;126.7682",
    ICBM: "37.6615, 126.7682",
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
        <JsonLd />
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
