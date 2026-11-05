"use client";

import { useEffect, useState } from "react";
import { githubUrl, profile } from "@/data/profile";
import { Icon } from "./Icon";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Nav.module.css";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "now", label: "Now" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <a className={styles.logo} href="#top" aria-label="맨 위로">
          <span className={styles.bracket}>&lt;</span>
          {profile.githubUser}
          <span className={styles.bracket}>/&gt;</span>
          <span className={styles.cursor} aria-hidden="true" />
        </a>
        <nav aria-label="주요 메뉴">
          <ul className={styles.links}>
            {links.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className={active === id ? styles.active : undefined}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.actions}>
          <a className="icon-btn" href={githubUrl} target="_blank" rel="noopener" aria-label="GitHub 프로필 열기">
            <Icon name="github" />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
