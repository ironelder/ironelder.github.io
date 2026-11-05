import type { IconName } from "@/components/Icon";

export const profile = {
  name: "장진혁",
  initials: "JH",
  githubUser: "ironelder",
  role: "Android Client Developer",
  focus: "Kotlin · Jetpack Compose",
  location: "Seoul, Korea",
  badge: "Android 앱을 만들고 있어요",
  roles: ["Android Developer", "Kotlin Lover", "Clean Architecture 탐구 중", "AI 개발 도구 실험가"],
  lead:
    "Kotlin 으로 Android 앱을 만드는 클라이언트 개발자입니다. 읽기 쉬운 구조와 반복 작업을 줄이는 도구에 관심이 많고, 공부하고 만든 것들을 이곳에 모아 두려고 합니다.",
  stack: ["Kotlin", "Compose", "Coroutines"],
};

export const githubUrl = `https://github.com/${profile.githubUser}`;
export const repoUrl = `${githubUrl}/${profile.githubUser}.github.io`;

export const about = {
  title: "이런 개발을 좋아합니다",
  desc: "오래 쓰이는 앱일수록 코드는 읽기 쉬워야 하고, 사람이 반복하는 일은 도구가 대신해야 한다고 생각합니다.",
  paragraphs: [
    "Android 앱의 화면부터 아키텍처까지 클라이언트 전반을 다룹니다. 요즘은 오래된 Java 코드를 Kotlin 으로 옮기고, 모듈과 레이어 경계를 정리해 바꾸기 쉬운 구조로 만드는 일에 시간을 많이 쓰고 있습니다.",
    "AI 도구를 개발 흐름에 붙이는 실험도 즐깁니다. 코드 리뷰, 정적 분석 이슈 수정, 빌드 확인처럼 매번 반복되는 일을 자동화하며 배운 것을 정리해 나갈 예정입니다.",
  ],
  highlights: [
    { icon: "code", title: "Kotlin First", desc: "Java 레거시를 Kotlin 으로 옮기며 null 안전성을 지키는 코드를 씁니다." },
    { icon: "layers", title: "Clean Architecture", desc: "레이어와 모듈 경계를 나눠 기능을 안전하게 바꿀 수 있게 만듭니다." },
    { icon: "compose", title: "Jetpack Compose", desc: "XML 화면을 Compose 로 옮기며 선언형 UI 를 다룹니다." },
    { icon: "spark", title: "AI × Dev", desc: "Claude Code 같은 AI 도구로 리뷰·빌드·반복 작업을 자동화합니다." },
  ] satisfies { icon: IconName; title: string; desc: string }[],
};

export const skillGroups = [
  { title: "Language", color: "#a97bff", items: ["Kotlin", "Java", "Python", "Shell"] },
  { title: "Android", color: "#3ddc84", items: ["Jetpack Compose", "Coroutines · Flow", "Hilt", "Android Jetpack", "Gradle"] },
  {
    title: "Architecture & Quality",
    color: "#82aaff",
    items: ["Clean Architecture", "Multi-module", "Kotest · MockK", "detekt · ktlint", "SonarQube"],
  },
  { title: "Tools & AI", color: "#ff8a5c", items: ["Git", "Android Studio", "Claude Code", "Figma"] },
];

export const nowItems = [
  { title: "Android 앱 아키텍처 개선", desc: "규모가 큰 앱의 모듈을 나누고 레이어 의존 방향을 바로잡고 있습니다." },
  { title: "개발 자동화 실험", desc: "코드 리뷰와 정적 분석 이슈 수정을 AI 도구로 자동화해 보고 있습니다." },
  { title: "AI 개념 공부", desc: "RAG, 에이전트, 그래프 같은 개념을 직접 만들어 보며 익히는 중입니다." },
  { title: "이 홈페이지 꾸미기", desc: "공부 기록과 프로젝트 회고를 하나씩 채워 나갈 예정입니다." },
];

export const contact = {
  title: "함께 이야기해요",
  desc: "Android, Kotlin, 개발 자동화에 관한 이야기라면 언제든 환영합니다. GitHub 에서 편하게 연락 주세요.",
};
