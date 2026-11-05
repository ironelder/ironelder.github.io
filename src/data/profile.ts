import type { IconName } from "@/components/Icon";

export const profile = {
  name: "장진혁",
  initials: "JH",
  avatar: "/profile.jpg",
  githubUser: "ironelder",
  email: "ironelder@gmail.com",
  role: "Mobile & Web Engineer",
  focus: "Android · React · AI Agent",
  education: "백석대학교 소프트웨어공학과",
  badgeSuffix: "Mobile · Web · AI Agent",
  roles: ["Android Engineer", "React Developer", "AI Agent Engineer", "Mobile Architect"],
  lead:
    "대규모 모바일·웹 서비스 아키텍처와 AI Agent 를 다루는 엔지니어입니다. 원스토어·제주항공 같은 상용 서비스를 개발·운영하며 안정적인 아키텍처 설계, 레거시 현대화, AI 기반 개발 자동화를 해 왔습니다.",
  stack: ["Kotlin", "React", "AI Agent"],
};

export const githubUrl = `https://github.com/${profile.githubUser}`;
export const repoUrl = `${githubUrl}/${profile.githubUser}.github.io`;

const CAREER_START = { year: 2012, month: 1 };

/** 첫 입사월부터 오늘까지 만 경력 연수 (시작 달 포함) */
export function careerYears(now: Date = new Date()): number {
  const months = (now.getFullYear() - CAREER_START.year) * 12 + (now.getMonth() + 1 - CAREER_START.month) + 1;
  return Math.floor(months / 12);
}

export const about = {
  title: "이런 엔지니어입니다",
  desc: "상용 서비스 운영 경험을 바탕으로 기술 문제를 구조적으로 풀고, 안정적인 아키텍처와 AI 자동화로 개발 효율을 높이는 데 강점이 있습니다.",
  paragraphs: [
    "Android 를 중심으로 iOS·Hybrid·React 웹까지 다뤄 왔습니다. MVI/MVVM 공통 프레임워크를 직접 설계하고, Java → Kotlin, XML → Jetpack Compose 전환과 멀티모듈 구조 개선으로 레거시를 현대화했습니다.",
    "웹에서는 jQuery 화면을 React 컴포넌트 구조로 점진 전환하고 Android 앱과 React WebView 사이 양방향 통신 구조를 만들었습니다. AWS·Docker·Kubernetes·Redis 로 데이터 수집 서버를 구축한 경험도 있고, 최근에는 MCP·Claude Code 로 팀 공통 AI Agent 개발 환경을 만들고 있습니다.",
  ],
  highlights: [
    { icon: "android", title: "대규모 서비스", desc: "원스토어·제주항공 모바일 서비스 개발과 운영, 플랫폼 호환성 대응과 핵심 기능 고도화" },
    { icon: "layers", title: "아키텍처 설계", desc: "MVI/MVVM 공통 프레임워크 직접 설계, Coroutines·StateFlow·Channel 기반 상태 관리 표준화" },
    { icon: "globe", title: "모바일 + 웹", desc: "Android, iOS, Hybrid, React WebView 기반 서비스 기능 개발" },
    { icon: "spark", title: "AI Engineering", desc: "MCP·LangGraph·Tool Calling 기반 AI Agent 오케스트레이션과 개발 자동화" },
    { icon: "bot", title: "AI 개발 환경", desc: "Cursor·Claude Code 기반 Multi-Agent, Rules·Skills·Hooks·Harness·RAG 환경 구축" },
    { icon: "code", title: "기술 현대화", desc: "Java → Kotlin, XML → Compose, jQuery → React 전환과 멀티모듈 구조 개선" },
  ] satisfies { icon: IconName; title: string; desc: string }[],
};

export type Project = {
  title: string;
  period: string;
  points: string[];
  tags: string[];
};

export type Experience = {
  company: string;
  period: string;
  projects: Project[];
};

export const experiences: Experience[] = [
  {
    company: "원스토어",
    period: "2022.09 – 현재",
    projects: [
      {
        title: "AI 기반 개발 자동화 환경 설계 및 구축",
        period: "2026.01 – 2026.11",
        points: [
          "Cursor 기반 팀 공통 AI Agent 운영 규칙과 역할 기반 Multi-Agent 아키텍처 구성",
          "AI Skills·Plugins 패키징·배포 체계 구축, Claude Code 로 Agent Harness 마이그레이션",
          "RAG 기반 프로젝트 컨텍스트 검색 구조 개선, Rules·Hooks·Skills 운영 체계 정비",
        ],
        tags: ["MCP", "LangGraph", "Claude Code", "Cursor", "RAG"],
      },
      {
        title: "React 기반 WebView 서비스 개발 및 Android 연동",
        period: "2025.09 – 2026.11",
        points: [
          "jQuery·iframe 기반 Admin 페이지를 React 컴포넌트 구조로 점진 전환",
          "사전예약·웹게임 전시 WebView 패널을 React Hooks 로 설계·구현",
          "Android Native ↔ React WebView 간 JavaScript Interface 양방향 통신 설계",
        ],
        tags: ["React", "React Hooks", "WebView", "JS Bridge"],
      },
      {
        title: "글로벌 원스토어 개발 및 운영",
        period: "2024.01 – 2026.09",
        points: [
          "기존 MVC/MVVM 을 대체하는 MVI 공통 아키텍처를 직접 설계해 전체 화면에 적용",
          "XML → Jetpack Compose, Java → Kotlin 전환으로 레거시 현대화",
          "국가별 Gradle Product Flavor 빌드 환경과 CI/CD 자동화 구축",
        ],
        tags: ["MVI", "Jetpack Compose", "StateFlow", "Multi-module", "CI/CD"],
      },
      {
        title: "국내 원스토어 개발 및 운영",
        period: "2022.09 – 2026.09",
        points: [
          "앱 다운로드·설치·복구의 복잡한 비동기 상태를 MVI 로 재구성",
          "PackageInstaller·WorkManager·Foreground Service 기반 설치·백그라운드 작업 개발",
          "Android 15 정책 변경·앱 서명키 로테이션 등 플랫폼 호환성 대응",
        ],
        tags: ["PackageInstaller", "WorkManager", "MVVM", "Compose"],
      },
    ],
  },
  {
    company: "AKIS",
    period: "2020.08 – 2022.08",
    projects: [
      {
        title: "제주항공 예약 서비스 개발 및 운영",
        period: "2020.09 – 2022.08",
        points: [
          "jQuery 기반 항공 예약 시스템을 React 기반 구조로 점진 리팩토링",
          "예약 단계별 화면 상태와 사용자 입력 데이터 관리 구조 개선",
          "페이지 전환 시 상태 불일치·이벤트 중복 처리 문제 개선",
        ],
        tags: ["React", "jQuery → React"],
      },
      {
        title: "제주항공 대고객 앱 및 사내 업무용 앱 개발",
        period: "2020.09 – 2022.08",
        points: [
          "대고객 Android 앱 UI/UX 개편, 인증·로그인 기능 개발",
          "차세대 PSS 모바일 앱의 MVVM 아키텍처와 Hilt/Dagger 공통 기반 설계",
          "모바일 탑승권·Wallet 연동·OCR SDK 등 항공 핵심 기능, Android·iOS 병행 개발",
        ],
        tags: ["MVVM", "Hilt", "Coroutines", "iOS"],
      },
    ],
  },
  {
    company: "푸드노트 서비스",
    period: "2020.02 – 2020.08",
    projects: [
      {
        title: "React Native 앱 및 웹 프론트엔드 개발",
        period: "2020.02 – 2020.08",
        points: [
          "React Native 앱의 초기 프로젝트 구조와 개발 환경 설계",
          "React 기반 서비스 웹페이지 프론트엔드 개발",
          "오픈소스 라이브러리 선정 기준과 개발 가이드라인 수립",
        ],
        tags: ["React Native", "React"],
      },
    ],
  },
  {
    company: "지니언스",
    period: "2016.02 – 2020.02",
    projects: [
      {
        title: "Genian NAC Mobile 앱 개발",
        period: "2016.02 – 2020.02",
        points: [
          "React Native 기반 기업용 모바일 보안 앱 개발",
          "다양한 Android 단말·OS 환경의 호환성 문제 분석과 대응",
        ],
        tags: ["React Native", "Android"],
      },
      {
        title: "Genian NAC 관리 웹 콘솔 개발",
        period: "2019.01 – 2020.02",
        points: [
          "Vue.js MVVM 기반 기업용 네트워크 접근 제어 관리 콘솔 개발",
          "관리자 계정 보호를 위한 2단계 인증(2FA) 기능 개발",
          "Elasticsearch Node Snapshot 백업·복구 관리 기능 추가",
        ],
        tags: ["Vue.js", "2FA", "Elasticsearch"],
      },
      {
        title: "AWS 기반 NoSQL 데이터 수집 서버 구축",
        period: "2016.02 – 2016.09",
        points: [
          "AWS 에 데이터 수집 서버와 데이터베이스 인프라 구축",
          "Docker 컨테이너화, Kubernetes 다중 인스턴스와 Round Robin 부하 분산 구성",
          "Redis 기반 데이터 수집 서버 구성",
        ],
        tags: ["AWS", "Docker", "Kubernetes", "Redis", "NoSQL"],
      },
    ],
  },
  {
    company: "에스피테크놀러지 (구 SK이노에이스)",
    period: "2012.01 – 2016.02",
    projects: [
      {
        title: "T스토어 및 원스토어 개발",
        period: "2014.07 – 2016.02",
        points: [
          "IntentFilter 기반 외부 앱 연동 구조 정리로 연동 안정성 향상",
          "GCM 기반 푸시 기능 구현, 음악 상세·미리듣기 기능 개발",
        ],
        tags: ["Android", "GCM"],
      },
      {
        title: "T간편모드 개발",
        period: "2013.08 – 2014.06",
        points: ["단말 탑재용 기본 런처 구조 개발", "제조사 연동용 Android 프레임워크 API 정의서 작성"],
        tags: ["Launcher", "Framework API"],
      },
      {
        title: "SKBB IPTV 그래픽 엔진 개선",
        period: "2012.12 – 2013.06",
        points: ["GX 엔진 메모리 누수 제거", "페이지별 파셜 렌더링 적용과 데드락 구간 제거"],
        tags: ["Graphics", "Performance"],
      },
      {
        title: "쿠키 런처 개선 · ERP 모바일 앱 개발",
        period: "2012.01 – 2012.12",
        points: ["OpenGL ES 를 OpenVG 로 개선해 다해상도 대응", "현대산업개발 ERP 게시판 앱 개발"],
        tags: ["OpenGL ES", "OpenVG"],
      },
    ],
  },
];

export const education = {
  school: "백석대학교",
  major: "소프트웨어공학과 · 학사",
  period: "2005.03 – 2012.02",
};

export const skillGroups = [
  {
    title: "Mobile",
    color: "#3ddc84",
    items: ["Kotlin", "Java", "Jetpack Compose", "Coroutines · StateFlow · Channel", "Hilt · Dagger", "MVI · MVVM", "Multi-module", "Gradle · CI/CD"],
  },
  {
    title: "Web Frontend",
    color: "#61dafb",
    items: ["React", "React Hooks", "React Native", "Vue.js", "JavaScript", "jQuery → React 전환", "WebView JS Bridge"],
  },
  {
    title: "Backend & Infra",
    color: "#ff8a5c",
    items: ["AWS", "Docker", "Kubernetes", "Redis", "Elasticsearch", "NoSQL"],
  },
  {
    title: "AI Engineering",
    color: "#a97bff",
    items: ["MCP", "LangGraph", "Tool Calling", "Multi-Agent", "Claude Code", "Cursor", "RAG", "Context Engineering"],
  },
];

export const nowItems = [
  {
    title: "웹 프론트엔드 넓히기",
    desc: "React 실무 경험을 바탕으로 Next.js·TypeScript 로 영역을 넓히고 있습니다. 이 홈페이지도 Next.js 로 만들었습니다.",
  },
  {
    title: "백엔드 다시 깊게",
    desc: "AWS·Kubernetes·Redis 로 데이터 수집 서버를 구축했던 경험을 이어 서버 개발을 다시 깊게 공부하고 있습니다.",
  },
  {
    title: "AI Agent 개발 환경",
    desc: "MCP·Claude Code 로 팀 공통 Agent Harness 와 RAG 기반 개발 자동화 체계를 만들고 있습니다.",
  },
  {
    title: "모바일 아키텍처",
    desc: "MVI·Jetpack Compose 기반 공통 아키텍처로 대규모 앱 구조를 계속 다듬고 있습니다.",
  },
];

export const contact = {
  title: "함께 이야기해요",
  desc: "모바일, 웹 프론트엔드, 백엔드, AI Agent 에 관한 이야기라면 언제든 환영합니다.",
};
