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
  tagline: "건축물에 생명을 넣는 MEP 엔지니어링",
  description:
    "전기 · 통신 · 전문소방 · 기계 설계 및 감리, 친환경 인증까지 한곳에서.",
  highlight: "서울·경기·인천 설계·감리 용역 1,200건+",
  mission:
    "발주처와 설계·시공이 같은 도면을 보게 만드는 것이 우리의 일입니다. 신뢰를 숫자로 증명하고, 현장 언어로 답합니다.",
  nominationUrl:
    "https://drive.google.com/file/d/1BGux-RVgzpWDSuTMsjlSF9wD4Ynd2jfQ/view?usp=drive_link",
  careersUrl:
    "https://www.saramin.co.kr/zf_user/jobs/relay/view?rec_idx=53232142",
  note:
    "의료기기 기업 ‘지엠엠씨(GMMC)’와는 다른, 설비 설계·감리 전문 법인입니다.",
} as const;

export const stats = [
  { value: "1,200+", label: "수도권 설계·감리 실적" },
  { value: "4", label: "핵심 MEP 전문 분야" },
  { value: "고양", label: "본사 · 일산 호수공원 인근" },
  { value: "채용중", label: "기계·소방기계 설계" },
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

export const projects: {
  id: string;
  title: string;
  category: ProjectCategory;
  region: string;
  image: string;
}[] = [
  { id: "leisure-gamgok", title: "감곡 CC", category: "leisure", region: "충북", image: "/assets/projects/leisure-gamgok.png" },
  { id: "leisure-ganghwa", title: "강화 루지하우스", category: "leisure", region: "인천", image: "/assets/projects/leisure-ganghwa.png" },
  { id: "leisure-starhue", title: "더스타휴빌리지", category: "leisure", region: "경기", image: "/assets/projects/leisure-starhue.png" },
  { id: "leisure-yangyang", title: "양양 더블루힐", category: "leisure", region: "강원", image: "/assets/projects/leisure-yangyang.png" },
  { id: "leisure-jangseong", title: "장성 동화 CC", category: "leisure", region: "전남", image: "/assets/projects/leisure-jangseong.png" },
  { id: "leisure-paganica", title: "파가니카 CC", category: "leisure", region: "경기", image: "/assets/projects/leisure-paganica.png" },
  { id: "public-ubipark", title: "유비파크", category: "public", region: "경기", image: "/assets/projects/public-ubipark.jpg" },
  { id: "public-gwangju", title: "광주 음식물 자원화 시설", category: "public", region: "광주", image: "/assets/projects/public-gwangju.png" },
  { id: "public-mapo", title: "마포아트홀", category: "public", region: "서울", image: "/assets/projects/public-mapo.png" },
  { id: "public-medical", title: "메디칼의료센터 (구로)", category: "public", region: "서울", image: "/assets/projects/public-medical.png" },
  { id: "public-saekyeong", title: "세경대학교 호텔조리학과", category: "public", region: "경북", image: "/assets/projects/public-saekyeong.png" },
  { id: "public-inu", title: "인천대학교 E-BIZ 센터", category: "public", region: "인천", image: "/assets/projects/public-inu.png" },
  { id: "housing-dongil", title: "동일스위트 1단지", category: "housing", region: "경기", image: "/assets/projects/housing-dongil.jpg" },
  { id: "housing-uijeongbu", title: "의정부중앙역 공동주택", category: "housing", region: "경기", image: "/assets/projects/housing-uijeongbu.jpg" },
  { id: "housing-bangbae", title: "방배 남부시장 재건축", category: "housing", region: "서울", image: "/assets/projects/housing-bangbae.png" },
  { id: "housing-samcheon", title: "삼천 주공 3단지", category: "housing", region: "전북", image: "/assets/projects/housing-samcheon.png" },
  { id: "housing-suncheon", title: "순천 왕지동 연립주택", category: "housing", region: "전남", image: "/assets/projects/housing-suncheon.png" },
  { id: "housing-iksan", title: "익산 신동 청솔아파트", category: "housing", region: "전북", image: "/assets/projects/housing-iksan.png" },
  { id: "other-yueun", title: "유은타워 7차", category: "other", region: "경기", image: "/assets/projects/other-yueun.jpg" },
  { id: "other-zoom", title: "고양 줌시티", category: "other", region: "경기", image: "/assets/projects/other-zoom.jpg" },
  { id: "other-yanggok", title: "김포 양곡 복합", category: "other", region: "경기", image: "/assets/projects/other-yanggok.jpg" },
  { id: "other-geomdan", title: "검단신도시 근생", category: "other", region: "인천", image: "/assets/projects/other-geomdan.jpg" },
  { id: "other-gwangyang", title: "광양터미널 주상복합", category: "other", region: "전남", image: "/assets/projects/other-gwangyang.png" },
  { id: "other-dangha", title: "인천 당하동 근생", category: "other", region: "인천", image: "/assets/projects/other-dangha.jpg" },
];
