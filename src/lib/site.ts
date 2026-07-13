export const company = {
  name: "지엠이엠씨",
  legalName: "주식회사 지엠이엠씨",
  nameEn: "GMEMC",
  ceo: "강원구",
  bizNo: "506-86-00201",
  email: "gmemc@naver.com",
  phone: "031-938-0999",
  fax: "031-938-0998",
  hours: "09:00 – 18:00",
  closed: "토·일·공휴일",
  address: "경기도 고양시 일산동구 호수로 358-25, 동문굿모닝타워 2차 821·822호",
  tagline: "종합 엔지니어링 시스템",
  description:
    "전기, 통신, 전문소방, 기계 설계 및 감리, 친환경 관련 인증",
  highlight: "서울·경기·인천 건축 설계 및 감리 용역 1,200개 완수",
  mission:
    "고객의 신뢰를 얻고 다져가기 위해 (주)지엠이엠씨는 항상 노력합니다.",
  nominationUrl:
    "https://drive.google.com/file/d/1BGux-RVgzpWDSuTMsjlSF9wD4Ynd2jfQ/view?usp=drive_link",
} as const;

export const nav = [
  { href: "/", label: "HOME" },
  { href: "/company", label: "COMPANY" },
  { href: "/project", label: "PROJECT" },
  { href: "/contact", label: "CONTACT" },
] as const;

export const businessAreas = [
  {
    id: "electrical",
    title: "전기",
    desc: "수배전·조명·동력 등 전기설비 설계·감리",
    image: "/assets/company/biz-electrical.jpg",
  },
  {
    id: "telecom",
    title: "통신",
    desc: "정보통신·방송·보안 시스템 설계·감리",
    image: "/assets/company/biz-telecom.jpg",
  },
  {
    id: "fire",
    title: "전문소방",
    desc: "소방전기·소방기계 전문 설계·감리",
    image: "/assets/company/biz-fire.jpg",
  },
  {
    id: "mech",
    title: "기계",
    desc: "공조·위생·열원 등 기계설비 설계·감리",
    image: "/assets/company/biz-mech.jpg",
  },
] as const;

export type ProjectCategory =
  | "leisure"
  | "public"
  | "housing"
  | "other";

export const projectCategories: {
  id: ProjectCategory | "all";
  label: string;
}[] = [
  { id: "all", label: "전체" },
  { id: "leisure", label: "레저숙박" },
  { id: "public", label: "공공시설" },
  { id: "housing", label: "공동주택" },
  { id: "other", label: "복합·기타" },
];

export const projects: {
  id: string;
  title: string;
  category: ProjectCategory;
  image: string;
}[] = [
  { id: "leisure-gamgok", title: "감곡 CC", category: "leisure", image: "/assets/projects/leisure-gamgok.png" },
  { id: "leisure-ganghwa", title: "강화 루지하우스", category: "leisure", image: "/assets/projects/leisure-ganghwa.png" },
  { id: "leisure-starhue", title: "더스타휴빌리지", category: "leisure", image: "/assets/projects/leisure-starhue.png" },
  { id: "leisure-yangyang", title: "양양 더블루힐", category: "leisure", image: "/assets/projects/leisure-yangyang.png" },
  { id: "leisure-jangseong", title: "장성 동화 CC", category: "leisure", image: "/assets/projects/leisure-jangseong.png" },
  { id: "leisure-paganica", title: "파가니카 CC", category: "leisure", image: "/assets/projects/leisure-paganica.png" },
  { id: "public-ubipark", title: "유비파크", category: "public", image: "/assets/projects/public-ubipark.jpg" },
  { id: "public-gwangju", title: "광주 음식물 자원화 시설", category: "public", image: "/assets/projects/public-gwangju.png" },
  { id: "public-mapo", title: "마포아트홀", category: "public", image: "/assets/projects/public-mapo.png" },
  { id: "public-medical", title: "메디칼의료센터 (서울 구로동)", category: "public", image: "/assets/projects/public-medical.png" },
  { id: "public-saekyeong", title: "세경대학교 호텔조리학과", category: "public", image: "/assets/projects/public-saekyeong.png" },
  { id: "public-inu", title: "인천대학교 E-BIZ 센터", category: "public", image: "/assets/projects/public-inu.png" },
  { id: "housing-dongil", title: "동일스위트 1단지", category: "housing", image: "/assets/projects/housing-dongil.jpg" },
  { id: "housing-uijeongbu", title: "의정부중앙역 공동주택", category: "housing", image: "/assets/projects/housing-uijeongbu.jpg" },
  { id: "housing-bangbae", title: "방배동 남부시장 재건축 공동주택", category: "housing", image: "/assets/projects/housing-bangbae.png" },
  { id: "housing-samcheon", title: "삼천 주공 3단지", category: "housing", image: "/assets/projects/housing-samcheon.png" },
  { id: "housing-suncheon", title: "순천 왕지동 연립주택", category: "housing", image: "/assets/projects/housing-suncheon.png" },
  { id: "housing-iksan", title: "익산 신동 청솔아파트", category: "housing", image: "/assets/projects/housing-iksan.png" },
  { id: "other-yueun", title: "복합건축물 유은타워 7차", category: "other", image: "/assets/projects/other-yueun.jpg" },
  { id: "other-zoom", title: "복합건축물 고양 줌시티", category: "other", image: "/assets/projects/other-zoom.jpg" },
  { id: "other-yanggok", title: "복합건축물 김포 양곡 소재", category: "other", image: "/assets/projects/other-yanggok.jpg" },
  { id: "other-geomdan", title: "검단신도시 C6 1-1블럭 근생건물", category: "other", image: "/assets/projects/other-geomdan.jpg" },
  { id: "other-gwangyang", title: "광양터미널 주상 복합시설", category: "other", image: "/assets/projects/other-gwangyang.png" },
  { id: "other-dangha", title: "인천 서구 당하동 1029-5 근생건물", category: "other", image: "/assets/projects/other-dangha.jpg" },
];
