import { company } from "@/lib/site";
import { absoluteUrl, siteUrl } from "@/lib/seo";

export function JsonLd() {
  const orgId = `${siteUrl}/#organization`;
  const websiteId = `${siteUrl}/#website`;

  const organization = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
    "@id": orgId,
    name: company.legalName,
    alternateName: [company.name, company.nameEn, "GMEMC", "지엠이엠씨"],
    url: siteUrl,
    logo: absoluteUrl("/icon-512.png"),
    image: absoluteUrl("/og-image.jpg"),
    description: `${company.specialty}. ${company.description}`,
    email: company.email,
    telephone: company.phone,
    faxNumber: company.fax,
    foundingLocation: {
      "@type": "Place",
      name: company.region,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "호수로 358-25, 동문굿모닝타워 2차 821·822호",
      addressLocality: "고양시 일산동구",
      addressRegion: "경기도",
      addressCountry: "KR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.6615,
      longitude: 126.7682,
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "서울특별시" },
      { "@type": "AdministrativeArea", name: "경기도" },
      { "@type": "AdministrativeArea", name: "인천광역시" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: company.phone,
        contactType: "customer service",
        areaServed: "KR",
        availableLanguage: ["ko"],
      },
    ],
    sameAs: [company.careersUrl],
    knowsAbout: [
      "전기설비 설계",
      "정보통신설비 설계",
      "전문소방 설계",
      "기계설비 설계",
      "설비감리",
      "MEP",
      "친환경 건축 인증",
    ],
    taxID: company.bizNo,
    founder: {
      "@type": "Person",
      name: company.ceo,
      jobTitle: "대표이사",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url: siteUrl,
    name: company.legalName,
    alternateName: company.name,
    description: company.description,
    inLanguage: "ko-KR",
    publisher: { "@id": orgId },
  };

  const siteNav = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: ["홈", "회사", "사업", "실적", "채용", "문의"],
    url: [
      absoluteUrl("/"),
      absoluteUrl("/company"),
      absoluteUrl("/services"),
      absoluteUrl("/project"),
      absoluteUrl("/careers"),
      absoluteUrl("/contact"),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNav) }}
      />
    </>
  );
}
