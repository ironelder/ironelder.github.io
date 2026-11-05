import type { Metadata, Viewport } from "next";
import { IconSprite } from "@/components/Icon";
import "./globals.css";

export const metadata: Metadata = {
  title: "ironelder",
  description: "모바일·웹 서비스 아키텍처와 AI Agent 를 다루는 엔지니어 장진혁(ironelder)의 홈페이지",
};

export const viewport: Viewport = {
  themeColor: "#0b0d14",
};

// 첫 페인트 전에 테마를 정해 깜빡임 방지 — 저장값 > 시스템 설정 순
const themeInitScript = `(function(){var s=null;try{s=localStorage.getItem('theme')}catch(e){}var d=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.dataset.theme=(s==='light'||s==='dark')?s:(d?'dark':'light');})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&display=swap" />
      </head>
      <body>
        <IconSprite />
        {children}
      </body>
    </html>
  );
}
