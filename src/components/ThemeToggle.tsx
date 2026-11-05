"use client";

import { useEffect } from "react";
import { Icon } from "./Icon";
import styles from "./Nav.module.css";

const STORAGE_KEY = "theme";

function readSaved(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

export function ThemeToggle() {
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => {
      if (!readSaved()) document.documentElement.dataset.theme = e.matches ? "dark" : "light";
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // 사생활 보호 모드 등 저장 불가 — 이번 방문에만 적용
    }
  };

  // 아이콘 전환은 CSS(:root[data-theme]) 담당 — 서버 HTML 과 hydration 결과를 같게 유지
  return (
    <button className={`icon-btn ${styles.themeToggle}`} type="button" onClick={toggle} aria-label="다크/라이트 모드 전환">
      <Icon name="moon" className={styles.moon} />
      <Icon name="sun" className={styles.sun} />
    </button>
  );
}
