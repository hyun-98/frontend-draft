# universal-web-starter

빌드 도구 없이 **HTML + CSS + JS**만으로 동작하는 범용 랜딩/문서용 프론트 스켈레톤입니다. 폴더를 통째로 복사한 뒤 문구와 색만 바꿔 쓰는 용도로 만들었습니다.

## 폴더 구조
universal-web-starter/ ├── index.html # 페이지 구조 (헤더, 히어로, 섹션, 푸터) ├── css/ │ └── styles.css # 레이아웃·타이포·테마(CSS 변수) └── js/ └── app.js # 테마 토글, 모바일 메뉴, 연도 등 소량 스크립트
## 바로 보기

- `index.html`을 브라우저로 직접 열어도 됩니다.
- 로컬 서버를 쓰고 싶다면 (예): `npx --yes serve .` 후 안내 URL로 접속합니다.

## 커스터마이즈 할 곳

1. **`index.html`**
   - `<title>`, `<meta name="description">`
   - 브랜드명, 내비 링크(`#section-...`), 히어로/섹션 문구
   - 푸터 저작권·링크 텍스트
2. **`css/styles.css` 상단 `:root`**
   - `--color-accent`, `--font-sans`, `--max-width`, `--radius` 등 **디자인 토큰**
   - `[data-theme="dark"]` 블록은 수동 다크 테마용 오버라이드입니다.
3. **`js/app.js`**
   - `THEME_KEY`: 로컬스토리지에 저장되는 테마 키 문자열(다른 프로젝트와 겹치면 변경)
   - 폼은 `data-no-submit` 데모용입니다. 실제 전송 시 `action`·`method`를 연결하고 해당 속성을 제거하세요.

## 동작 요약

| 기능 | 설명 |
|------|------|
| 테마 | 시스템 라이트/다크를 따르다가, 버튼으로 고정하면 `localStorage`에 저장됩니다. |
| 모바일 메뉴 | 768px 이하에서 햄버거 버튼으로 내비를 열고 닫습니다. `Esc`로 닫힘. |
| 연도 | `[data-year]` 요소에 현재 연도가 자동으로 들어갑니다. |
| 접근성 | 본문 건너뛰기 링크, 포커스 스타일, `prefers-reduced-motion` 대응을 포함합니다. |

## 라이선스

개인·사내용으로 자유롭게 수정해 사용하면 됩니다.
