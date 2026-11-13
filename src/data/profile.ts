import type { IconName } from "@/components/Icon";

export const profile = {
  name: "장진혁",
  initials: "JH",
  avatar: "/profile.jpg",
  githubUser: "ironelder",
  email: "ironelder@gmail.com",
  role: "Product Engineer",
  focus: "Android · React · AI Agent",
  language: "영어 일상 회화",
  education: "백석대학교 소프트웨어공학과",
  headline: ["대규모 모바일·웹 서비스와", "AI Agent 개발 환경을 만듭니다"],
  lead: "원스토어·제주항공 같은 상용 서비스를 개발·운영하며 안정적인 아키텍처 설계, 레거시 현대화, AI 기반 개발 자동화를 해 왔습니다.",
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
  title: "사람들과 배운 것을 나누는 개발자",
  paragraphs: [
    "첫 회사에서는 모바일 앱을 개발하며 대부분의 문제를 혼자 공부하고 해결했습니다. 그러다 잠깐 함께 일했던 분의 제안으로 이직했고, 컨퍼런스와 스터디, 개발자 모임을 적극 권하는 회사를 만나 여러 분야의 컨퍼런스와 개발자 토크에 나가기 시작했습니다.",
    "커뮤니티에서 모르던 지식을 쌓고 최신 흐름을 함께 이야기하다 보니 개발이 더 재미있어졌고, 저도 누군가에게 도움이 되고 싶어 공부의 폭을 넓혔습니다. 지금도 퇴근 후 소규모 개발자 컨퍼런스와 랜선 런치 미팅에서 개발자분들과 이야기하며 흐름을 놓치지 않고, 스스로 다시 동기를 다지고 있습니다.",
    "지금 다니는 회사는 AI 활용을 적극 장려합니다. 업무 프로세스 자동화와 AI Agent 튜닝·오케스트레이션을 실무에 적용하면서 프롬프트·컨텍스트·루프/하네스 엔지니어링, 사내 지식 검색(kb_search)과 RAG 구성 방식을 비교하고 직접 부딪혀 왔습니다.",
    "그 과정에서 겪은 오류와 예상하지 못한 실수까지 정리해 사내 동료들과 나누고, 카카오톡 오픈채팅방과 Slack, 스터디 그룹에서 발표하고 있습니다. 발표를 준비하며 배운 것을 한 번 더 복습하고, 그 내용이 주변 개발자분들께 도움이 되도록 노력하고 있습니다.",
  ],
  highlights: [
    { icon: "mobile", title: "대규모 서비스", desc: "원스토어·제주항공 모바일 서비스 개발과 운영, 플랫폼 호환성 대응과 핵심 기능 고도화" },
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
        period: "2024.10 – 2026.11",
        points: [
          "Sonnet 3.5 기반 프롬프트 엔지니어링으로 소규모 기능 개발 에이전트 구성",
          "Opus 4.1 기반 컨텍스트 엔지니어링으로 메모리 저장, 입력·결과물 일관성, 토큰 소모 최적화",
          "Cursor 기반 팀 공통 AI Agent 운영 규칙과 역할 기반 Multi-Agent Orchestration 구성",
          "AI Skills·Plugins 패키징·배포 체계 구축, Claude Code 로 Agent Harness 마이그레이션",
          "RAG 기반 프로젝트 컨텍스트 검색 구조 개선, Rules·Hooks·Skills 운영 체계 정비",
          "망분리 환경에서 sLLM 으로 VOC 고객 정보 추출 Agent 구성",
        ],
        tags: ["MCP", "LangGraph", "Claude Code", "Cursor", "RAG", "sLLM"],
      },
      {
        title: "React 기반 WebView 서비스 개발 및 Android 연동",
        period: "2025.09 – 2026.11",
        points: [
          "jQuery·iframe 기반 Admin 페이지를 React 컴포넌트 구조로 점진 전환",
          "jQuery 와 React 가 공존하는 전환 구간의 이벤트 충돌·중복 렌더링 대응",
          "사전예약·웹게임 전시 WebView 패널을 React Hooks 로 설계·구현",
          "Android Native ↔ React WebView 간 JavaScript Interface 양방향 통신 설계",
        ],
        tags: ["React", "React Hooks", "WebView", "JS Bridge"],
      },
      {
        title: "글로벌 원스토어 개발 및 운영",
        period: "2023.10 – 2026.11",
        points: [
          "기존 MVC/MVVM 을 대체하는 MVI 공통 아키텍처를 직접 설계해 전체 화면에 적용",
          "MVI·Compose 레퍼런스 화면을 먼저 구현해 팀 내 아키텍처 전환과 개발 표준화 주도",
          "XML → Jetpack Compose(WDS 디자인 시스템), Java → Kotlin 전환으로 레거시 현대화",
          "국가별 Gradle Product Flavor 빌드 환경과 CI/CD 자동화 구축",
        ],
        tags: ["MVI", "Jetpack Compose", "StateFlow", "Multi-module", "CI/CD"],
      },
      {
        title: "국내 원스토어 개발 및 운영",
        period: "2022.09 – 2026.11",
        points: [
          "앱 다운로드·설치·복구의 복잡한 비동기 상태를 MVI 로 재구성",
          "PackageInstaller·WorkManager·Foreground Service 기반 설치·백그라운드 작업 개발",
          "Android Multi-User 환경에서 사용자별 앱 다운로드·설치 기능 구현",
          "Android 15 정책 변경·앱 서명키 로테이션·iARC 등급 정책 등 플랫폼 호환성 대응",
          "MVC 기반 마이페이지를 MVVM·Jetpack Compose 로 전환",
        ],
        tags: ["PackageInstaller", "WorkManager", "Multi-User", "Dynamic Feature", "Compose"],
      },
    ],
  },
  {
    company: "AKIS",
    period: "2020.09 – 2022.08",
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
          "객실·운항 승무원, 정비사, 임직원용 업무 앱 개발과 운영",
        ],
        tags: ["MVVM", "Hilt", "Coroutines", "iOS"],
      },
    ],
  },
  {
    company: "푸드노트 서비스",
    period: "2020.03 – 2020.09",
    projects: [
      {
        title: "React Native 앱 및 웹 프론트엔드 개발",
        period: "2020.03 – 2020.09",
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
    company: "DOCL · 재능기부 (재직 중 병행)",
    period: "2019.10 – 2020.04",
    projects: [
      {
        title: "코로나19 자가검진 앱 개발",
        period: "2019.10 – 2020.04",
        points: [
          "코로나19 확산 시기에 자가검진 앱 개발에 재능기부로 참여",
          "Flutter 로 Android·iOS 크로스플랫폼 앱 개발",
          "플랫폼별 빌드 환경 구성부터 스토어 배포까지 직접 수행",
        ],
        tags: ["Flutter", "Android", "iOS"],
      },
    ],
  },
  {
    company: "지니언스",
    period: "2016.02 – 2020.03",
    projects: [
      {
        title: "Genian NAC Mobile 앱 개발",
        period: "2016.02 – 2020.02",
        points: [
          "React Native 기반 기업용 모바일 보안 앱 개발",
          "다양한 Android 단말·OS 환경의 호환성 문제 분석과 대응",
          "외부 모바일 보안 솔루션과의 연동 기능 개발",
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
          "IEEE 802.1X 인증 환경의 VLAN 적용 정책 설계",
        ],
        tags: ["Vue.js", "2FA", "Elasticsearch", "802.1X"],
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
        points: [
          "단말 탑재용 기본 런처 구조 개발",
          "제조사 연동용 Android 프레임워크 API 정의서 작성",
          "단말별 요구사항에 맞춘 커스텀 UI 개발",
        ],
        tags: ["Launcher", "Framework API"],
      },
      {
        title: "SKBB IPTV 그래픽 엔진 개선",
        period: "2012.12 – 2013.06",
        points: ["GX 엔진 메모리 누수 제거", "페이지별 파셜 렌더링 적용과 데드락 구간 제거"],
        tags: ["Graphics", "Performance"],
      },
      {
        title: "쿠키 런처 개선",
        period: "2012.03 – 2012.12",
        points: ["사내 그래픽 엔진 메모리 누수 제거", "OpenGL ES 를 OpenVG 로 개선해 다해상도 대응", "Play 스토어 게시와 유지보수"],
        tags: ["OpenGL ES", "OpenVG"],
      },
      {
        title: "현대산업개발 ERP 모바일 앱 개발",
        period: "2012.01 – 2012.03",
        points: ["ERP 시스템 게시판 앱 개발"],
        tags: ["Android"],
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
    items: ["Kotlin", "Java", "Jetpack Compose", "Coroutines · StateFlow · Channel", "Hilt · Dagger", "MVI · MVVM", "Multi-module · Dynamic Feature", "Gradle · CI/CD", "Flutter"],
  },
  {
    title: "Web Frontend",
    items: ["React", "React Hooks", "React Native", "Vue.js", "JavaScript", "jQuery → React 전환", "WebView JS Bridge"],
  },
  {
    title: "Backend & Infra",
    items: ["AWS", "Docker", "Kubernetes", "Redis", "Elasticsearch", "NoSQL", "802.1X · VLAN"],
  },
  {
    title: "AI Engineering",
    items: ["MCP", "LangGraph", "Tool Calling", "Multi-Agent", "Claude Code", "Cursor", "RAG", "sLLM", "Prompt · Context · Harness Engineering"],
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
