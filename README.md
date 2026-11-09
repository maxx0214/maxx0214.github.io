# 이승윤 · AI / LLM Portfolio

[공개 웹사이트](https://maxx0214.github.io/) · [GitHub 저장소](https://github.com/maxx0214/maxx0214.github.io)

PDF 포트폴리오를 바탕으로 제작한 한국어 취업용 포트폴리오입니다. 빌드와 서버, API 키 없이 동작하는 HTML/CSS/JavaScript 정적 사이트입니다.

## 내용 수정

- `index.html`: 소개, 프로젝트 요약, 기술, 연락처
- `script.js`: 프로젝트 상세 내용
- `styles.css`: 디자인과 모바일 대응
- `assets/`: PDF에서 추출한 이미지와 원본 포트폴리오

## GitHub Pages

1. `maxx0214.github.io`라는 공개 저장소를 만들고 이 폴더의 **내용 전체**를 main 브랜치에 업로드합니다. 이미 저장소가 있다면 기존 내용을 확인한 후 반영합니다.
2. Settings → Pages → Build and deployment → Source에서 **Deploy from a branch**를 선택합니다. 브랜치는 **main**, 폴더는 **/ (root)**로 저장합니다.
3. GitHub Pages 배포가 완료되면 `https://maxx0214.github.io/`에서 확인할 수 있습니다. 이후 main 브랜치를 수정하면 자동으로 다시 배포됩니다.

일반 프로젝트 저장소에서도 상대 경로를 사용하므로 그대로 동작합니다. GitHub Free에서는 공개 저장소의 Pages를 무료로 사용할 수 있습니다. 별도 도메인 구매는 필요 없습니다.

## 로컬 확인

이 폴더에서 `python -m http.server 4173`을 실행하고 `http://localhost:4173`을 엽니다. 또는 `index.html`을 브라우저로 열어 볼 수 있습니다.

