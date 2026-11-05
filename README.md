# ironelder.github.io

ironelder 의 GitHub Pages 홈페이지입니다. Next.js(App Router)로 만들고 정적 파일로 내보내 배포합니다.

## 로컬에서 보기

```bash
npm install
npm run dev      # http://localhost:3000
```

## 빌드

```bash
npm run build    # out/ 에 정적 파일 생성
```

## 배포

`main` 에 push 하면 GitHub Actions(`.github/workflows/deploy.yml`)가 빌드한 뒤 GitHub Pages 에 올립니다.
저장소 Settings → Pages → Source 가 **GitHub Actions** 로 설정돼 있어야 합니다.

## 글 고치기

소개 문구·기술 목록·Now 항목은 `src/data/profile.ts` 한 파일에 모여 있습니다.
