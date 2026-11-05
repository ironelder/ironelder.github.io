"use client";

import { useEffect, useState } from "react";
import { repoUrl } from "@/data/profile";
import { Icon } from "./Icon";
import styles from "./Projects.module.css";

type Repo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  pushed_at: string | null;
  fork?: boolean;
  archived?: boolean;
};

type State = { status: "loading" } | { status: "loaded"; repos: Repo[] } | { status: "fallback" };

const MAX_REPOS = 6;
const COLUMNS = 3;

const LANG_COLORS: Record<string, string> = {
  Kotlin: "#A97BFF",
  Java: "#b07219",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Swift: "#F05138",
  Dart: "#00B4AB",
  Shell: "#89e051",
  "C++": "#f34b7d",
  C: "#555555",
  Go: "#00ADD8",
};

const FALLBACK_REPO: Repo = {
  name: "ironelder.github.io",
  html_url: repoUrl,
  description: "지금 보고 있는 이 홈페이지입니다. Next.js 로 만들었어요.",
  language: "TypeScript",
  stargazers_count: 0,
  pushed_at: null,
};

const TIME_UNITS: [Intl.RelativeTimeFormatUnit, number][] = [
  ["year", 31536000],
  ["month", 2592000],
  ["week", 604800],
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
];

function relativeTime(iso: string): string {
  const diffSec = (new Date(iso).getTime() - Date.now()) / 1000;
  const rtf = new Intl.RelativeTimeFormat("ko", { numeric: "auto" });
  for (const [unit, sec] of TIME_UNITS) {
    if (Math.abs(diffSec) >= sec || unit === "minute") return rtf.format(Math.round(diffSec / sec), unit);
  }
  return "";
}

export function RepoGrid({ githubUser }: { githubUser: string }) {
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => {
    const controller = new AbortController();
    fetch(`https://api.github.com/users/${githubUser}/repos?sort=pushed&per_page=30`, {
      headers: { Accept: "application/vnd.github+json" },
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<Repo[]>;
      })
      .then((repos) => {
        const list = repos.filter((r) => !r.fork && !r.archived).slice(0, MAX_REPOS);
        setState(list.length ? { status: "loaded", repos: list } : { status: "fallback" });
      })
      .catch(() => {
        if (!controller.signal.aborted) setState({ status: "fallback" });
      });
    return () => controller.abort();
  }, [githubUser]);

  if (state.status === "loading") {
    return (
      <div className={styles.grid} aria-busy="true">
        {Array.from({ length: COLUMNS }, (_, i) => (
          <div key={i} className={`${styles.repo} ${styles.skeleton}`}>
            <div className={`${styles.sk} ${styles.w60}`} />
            <div className={`${styles.sk} ${styles.w90}`} />
            <div className={`${styles.sk} ${styles.w70}`} />
          </div>
        ))}
      </div>
    );
  }

  const repos = state.status === "loaded" ? state.repos : [FALLBACK_REPO];
  // 마지막 줄이 비면 "준비 중" 카드 1장으로 채움
  const showPlaceholder = repos.length % COLUMNS !== 0 && repos.length < MAX_REPOS;

  return (
    <div className={styles.grid}>
      {repos.map((repo) => (
        <RepoCard key={repo.name} repo={repo} />
      ))}
      {showPlaceholder && <PlaceholderCard />}
    </div>
  );
}

function RepoCard({ repo }: { repo: Repo }) {
  return (
    <a className={`${styles.repo} ${styles.link}`} href={repo.html_url} target="_blank" rel="noopener">
      <div className={styles.top}>
        <div className={styles.title}>
          <Icon name="repo" />
          <span>{repo.name}</span>
        </div>
        <Icon name="arrow" className={styles.arrow} />
      </div>
      <p className={styles.desc}>{repo.description || "설명이 아직 없는 저장소입니다."}</p>
      <div className={styles.foot}>
        {repo.language && (
          <span className={styles.lang}>
            <i style={{ background: LANG_COLORS[repo.language] ?? "var(--muted)" }} />
            {repo.language}
          </span>
        )}
        {repo.stargazers_count > 0 && (
          <span className={styles.star}>
            <Icon name="star" />
            {repo.stargazers_count}
          </span>
        )}
        {repo.pushed_at && <span>{relativeTime(repo.pushed_at)}</span>}
      </div>
    </a>
  );
}

function PlaceholderCard() {
  return (
    <div className={`${styles.repo} ${styles.placeholder}`}>
      <div className={styles.plus}>
        <Icon name="plus" />
      </div>
      <strong>다음 프로젝트 준비 중</strong>
      <span>곧 여기에 채워질 예정이에요.</span>
    </div>
  );
}
