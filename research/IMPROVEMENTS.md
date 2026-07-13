# 개선안 → 리뉴얼 매핑

| 패널 이슈 | 개선안 | 리뉴얼 반영 |
|-----------|--------|-------------|
| 브랜드 약함 | 히어로에 로고+사명+한 문장+CTA | `src/app/page.tsx` Hero |
| 지명원 숨김 | COMPANY에 지명원 다운로드 CTA | Drive 링크 유지 |
| 알림/로그인 잔재 | 커스텀 헤더만 사용 | `SiteHeader` |
| 프로젝트 탐색 | 탭 필터 4종 | `/project` |
| 문의 전환 | 전화·메일·폼·지도 통합 | `/contact` |
| 시각 품질 | 기존 실사 + AI 히어로 보완 | `hero-renewal.jpg` |
| 모바일 | sticky 하단 CTA, 단순 드로어 | Header/Footer |

## 유지 자산 (업로드 원본)

- 로고: `public/assets/logo-*.png`
- CEO 사진: `public/assets/ceo.jpg`
- 프로젝트 갤러리: `public/assets/projects/*`
- 업무영역 이미지: `public/assets/company/biz-*.jpg`
- 지도/연락 비주얼: `public/assets/contact-*.png`
- 지명원: Google Drive 기존 링크
