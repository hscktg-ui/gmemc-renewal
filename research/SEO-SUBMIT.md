# 검색엔진 등록 가이드 (구글 · 네이버)

사이트: https://gmemc.co.kr  
자동 생성:
- Sitemap: https://gmemc.co.kr/sitemap.xml
- Robots: https://gmemc.co.kr/robots.txt

## 1) Google Search Console

1. https://search.google.com/search-console 접속
2. 속성 추가 → `https://gmemc.co.kr`
3. HTML 태그 인증 코드를 받으면 Vercel 환경변수에 등록  
   `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=인증코드문자열`
4. 재배포 후 「소유권 확인」
5. Sitemaps → `https://gmemc.co.kr/sitemap.xml` 제출
6. URL 검사로 홈·회사·사업·실적·문의 색인 요청

## 2) 네이버 서치어드바이저

1. https://searchadvisor.naver.com 접속
2. 사이트 등록 → `https://gmemc.co.kr`
3. HTML 메타 태그 인증 코드를 받으면 Vercel 환경변수에 등록  
   `NEXT_PUBLIC_NAVER_SITE_VERIFICATION=인증코드문자열`
4. 재배포 후 소유 확인
5. 요청 → 사이트맵 제출: `https://gmemc.co.kr/sitemap.xml`
6. 웹 마스터 도구에서 수집 요청(주요 URL)

## 3) 사이트에 이미 반영된 SEO

- `robots.txt` — Googlebot / Yeti(네이버) 허용
- `sitemap.xml` — 주요 페이지 우선순위 포함
- JSON-LD — Organization / LocalBusiness / ProfessionalService / WebSite
- Open Graph · Twitter Card · canonical · geo 메타
- 페이지별 title / description

## 4) 도메인 DNS

네임서버가 Vercel(`ns1.vercel-dns.com`, `ns2.vercel-dns.com`)로 전파된 뒤
서치콘솔·서치어드바이저에 등록해야 인증이 안정적입니다.
