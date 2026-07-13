export const company = {
  name: "지엠이엠씨",
  legalName: "주식회사 지엠이엠씨",
  nameEn: "GMEMC",
  ceo: "강원구",
  bizNo: "506-86-00201",
  email: "gmemc@naver.com",
  phone: "031-938-0999",
  fax: "031-938-0998",
  hours: "평일 09:00 – 18:00",
  closed: "토·일·공휴일 휴무",
  address: "경기도 고양시 일산동구 호수로 358-25, 동문굿모닝타워 2차 821·822호",
  region: "고양 · 수도권",
  tagline: "전문소방까지 아우르는 수도권 MEP 원스톱",
  description:
    "전기 · 통신 · 전문소방 · 기계 설계·감리와 친환경 인증을 한 팀이 끝까지 책임집니다.",
  highlight: "서울·경기·인천 설계·감리 용역 1,200건+",
  specialty:
    "전문소방·친환경 인증까지 — 설계와 감리를 분리하지 않는 통합 MEP",
  mission:
    "발주처와 설계·시공이 같은 도면을 보게 만드는 것이 우리의 일입니다. 신뢰를 숫자로 증명하고, 현장 언어로 답합니다.",
  nominationUrl:
    "https://drive.google.com/file/d/1BGux-RVgzpWDSuTMsjlSF9wD4Ynd2jfQ/view?usp=drive_link",
  careersUrl:
    "https://www.saramin.co.kr/zf_user/jobs/relay/view?rec_idx=53232142",
  note:
    "의료기기 기업 ‘지엠엠씨(GMMC)’와는 다른, 설비 설계·감리 전문 법인입니다.",
  keywords:
    "MEP 설계 감리, 전문소방, 전기설비, 통신설비, 기계설비, 친환경 인증, 고양 엔지니어링",
} as const;

export const differentiators = [
  {
    title: "전문소방 포함 4대 MEP",
    desc: "전기·통신·전문소방·기계를 한 회사에서 — 협의 창구를 하나로.",
  },
  {
    title: "1,200건+ 수도권 실적",
    desc: "레저·공공·공동주택·복합까지 용도별·지역별로 바로 검색.",
  },
  {
    title: "지명원·전화 즉시 연결",
    desc: "헤더에서 지명원 다운로드와 031-938-0999로 바로 상담.",
  },
  {
    title: "친환경 인증 지원",
    desc: "설계·감리와 함께 친환경·인허가 자료 정리까지 지원.",
  },
] as const;

export const trustBadges = [
  "지명원 공개",
  "사업자 506-86-00201",
  "대표 강원구",
  "채용·성장 중",
] as const;

export const stats = [
  { value: "1,200+", label: "수도권 설계·감리 실적" },
  { value: "4", label: "전기·통신·소방·기계" },
  { value: "24", label: "대표 포트폴리오 공개" },
  { value: "즉시", label: "전화·지명원·문의 CTA" },
] as const;

export const nav = [
  { href: "/", label: "홈" },
  { href: "/company", label: "회사" },
  { href: "/services", label: "사업" },
  { href: "/project", label: "실적" },
  { href: "/careers", label: "채용" },
  { href: "/contact", label: "문의" },
] as const;

export const businessAreas = [
  {
    id: "electrical",
    title: "전기",
    en: "Electrical",
    desc: "수배전, 조명, 동력, 피뢰 등 전기설비 설계·감리",
    image: "/assets/company/biz-electrical.jpg",
  },
  {
    id: "telecom",
    title: "통신",
    en: "Telecom",
    desc: "정보통신, 방송, 보안·네트워크 시스템 설계·감리",
    image: "/assets/company/biz-telecom.jpg",
  },
  {
    id: "fire",
    title: "전문소방",
    en: "Fire Safety",
    desc: "소방전기·소방기계 전문 설계·감리로 인명 안전 확보",
    image: "/assets/company/biz-fire.jpg",
  },
  {
    id: "mech",
    title: "기계",
    en: "Mechanical",
    desc: "공조, 위생, 열원 등 기계설비 설계·감리",
    image: "/assets/company/biz-mech.jpg",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "요구사항 정리",
    desc: "용도·일정·법규를 먼저 맞춰 과설계를 줄입니다.",
  },
  {
    step: "02",
    title: "설계·협의",
    desc: "건축·구조와 간섭을 조기에 조정합니다.",
  },
  {
    step: "03",
    title: "감리·현장대응",
    desc: "시공 중 변경에 빠르게 답하고 기록을 남깁니다.",
  },
  {
    step: "04",
    title: "준공·인증지원",
    desc: "친환경·인허가 관련 자료를 정리해 드립니다.",
  },
] as const;

export const careers = [
  {
    title: "기계 설계 및 소방기계설계",
    experience: "경력 5년 이상",
    source: "사람인",
    href: "https://www.saramin.co.kr/zf_user/jobs/relay/view?rec_idx=53232142",
    summary:
      "기계설비·소방기계 설계 역량을 갖춘 인재를 모집 중입니다. 수도권 프로젝트 중심으로 협업합니다.",
  },
] as const;

export type ProjectCategory =
  | "leisure"
  | "public"
  | "housing"
  | "other";

/** Sukwoo-style fine filters mapped onto our portfolio */
export type ProjectUse =
  | "all"
  | "office"
  | "housing"
  | "culture"
  | "sports"
  | "hotel"
  | "education"
  | "healthcare"
  | "industrial"
  | "complex";

export const projectCategories: {
  id: ProjectCategory | "all";
  label: string;
}[] = [
  { id: "all", label: "전체" },
  { id: "leisure", label: "레저·숙박" },
  { id: "public", label: "공공·교육" },
  { id: "housing", label: "공동주택" },
  { id: "other", label: "복합·근생" },
];

export const projectUses: { id: ProjectUse; label: string }[] = [
  { id: "all", label: "용도 전체" },
  { id: "office", label: "업무·오피스" },
  { id: "housing", label: "주거" },
  { id: "culture", label: "문화" },
  { id: "sports", label: "스포츠·레저" },
  { id: "hotel", label: "숙박·호텔" },
  { id: "education", label: "교육·연구" },
  { id: "healthcare", label: "의료" },
  { id: "industrial", label: "산업·인프라" },
  { id: "complex", label: "복합·근생" },
];

export const projects: {
  id: string;
  title: string;
  category: ProjectCategory;
  use: ProjectUse;
  region: string;
  scale: string;
  image: string;
  landmark?: boolean;
}[] = [
  { id: "leisure-gamgok", title: "감곡 CC", category: "leisure", use: "sports", region: "충북", scale: "골프·클럽하우스", image: "/assets/projects/leisure-gamgok.png", landmark: true },
  { id: "leisure-ganghwa", title: "강화 루지하우스", category: "leisure", use: "hotel", region: "인천", scale: "레저 숙박", image: "/assets/projects/leisure-ganghwa.png" },
  { id: "leisure-starhue", title: "더스타휴빌리지", category: "leisure", use: "hotel", region: "경기", scale: "빌리지형 숙박", image: "/assets/projects/leisure-starhue.png" },
  { id: "leisure-yangyang", title: "양양 더블루힐", category: "leisure", use: "hotel", region: "강원", scale: "리조트", image: "/assets/projects/leisure-yangyang.png" },
  { id: "leisure-jangseong", title: "장성 동화 CC", category: "leisure", use: "sports", region: "전남", scale: "골프장", image: "/assets/projects/leisure-jangseong.png" },
  { id: "leisure-paganica", title: "파가니카 CC", category: "leisure", use: "sports", region: "경기", scale: "골프·클럽", image: "/assets/projects/leisure-paganica.png", landmark: true },
  { id: "public-ubipark", title: "유비파크", category: "public", use: "industrial", region: "경기", scale: "공공·산업시설", image: "/assets/projects/public-ubipark.jpg" },
  { id: "public-gwangju", title: "광주 음식물 자원화 시설", category: "public", use: "industrial", region: "광주", scale: "환경 인프라", image: "/assets/projects/public-gwangju.png" },
  { id: "public-mapo", title: "마포아트홀", category: "public", use: "culture", region: "서울", scale: "문화시설", image: "/assets/projects/public-mapo.png", landmark: true },
  { id: "public-medical", title: "메디칼의료센터 (구로)", category: "public", use: "healthcare", region: "서울", scale: "의료시설", image: "/assets/projects/public-medical.png" },
  { id: "public-saekyeong", title: "세경대학교 호텔조리학과", category: "public", use: "education", region: "경북", scale: "교육시설", image: "/assets/projects/public-saekyeong.png" },
  { id: "public-inu", title: "인천대학교 E-BIZ 센터", category: "public", use: "education", region: "인천", scale: "대학·연구", image: "/assets/projects/public-inu.png" },
  { id: "housing-dongil", title: "동일스위트 1단지", category: "housing", use: "housing", region: "경기", scale: "공동주택", image: "/assets/projects/housing-dongil.jpg" },
  { id: "housing-uijeongbu", title: "의정부중앙역 공동주택", category: "housing", use: "housing", region: "경기", scale: "역세권 주거", image: "/assets/projects/housing-uijeongbu.jpg" },
  { id: "housing-bangbae", title: "방배 남부시장 재건축", category: "housing", use: "housing", region: "서울", scale: "재건축", image: "/assets/projects/housing-bangbae.png", landmark: true },
  { id: "housing-samcheon", title: "삼천 주공 3단지", category: "housing", use: "housing", region: "전북", scale: "공동주택", image: "/assets/projects/housing-samcheon.png" },
  { id: "housing-suncheon", title: "순천 왕지동 연립주택", category: "housing", use: "housing", region: "전남", scale: "연립", image: "/assets/projects/housing-suncheon.png" },
  { id: "housing-iksan", title: "익산 신동 청솔아파트", category: "housing", use: "housing", region: "전북", scale: "아파트", image: "/assets/projects/housing-iksan.png" },
  { id: "other-yueun", title: "유은타워 7차", category: "other", use: "complex", region: "경기", scale: "복합건축", image: "/assets/projects/other-yueun.jpg" },
  { id: "other-zoom", title: "고양 줌시티", category: "other", use: "complex", region: "경기", scale: "복합·상업", image: "/assets/projects/other-zoom.jpg", landmark: true },
  { id: "other-yanggok", title: "김포 양곡 복합", category: "other", use: "complex", region: "경기", scale: "복합", image: "/assets/projects/other-yanggok.jpg" },
  { id: "other-geomdan", title: "검단신도시 근생", category: "other", use: "complex", region: "인천", scale: "근린생활", image: "/assets/projects/other-geomdan.jpg" },
  { id: "other-gwangyang", title: "광양터미널 주상복합", category: "other", use: "complex", region: "전남", scale: "주상복합", image: "/assets/projects/other-gwangyang.png" },
  { id: "other-dangha", title: "인천 당하동 근생", category: "other", use: "complex", region: "인천", scale: "근린생활", image: "/assets/projects/other-dangha.jpg" },
];

export const landmarks = projects.filter((p) => p.landmark);
