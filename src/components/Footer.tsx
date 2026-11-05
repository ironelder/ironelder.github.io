import { profile } from "@/data/profile";
import { Icon } from "./Icon";
import styles from "./Footer.module.css";

export function Footer() {
  // 정적 export 라 빌드 시점 연도가 박힘 — push 마다 다시 빌드되므로 충분
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span>
          &copy; {year} <span className={styles.mono}>{profile.githubUser}</span>. Built with Next.js.
        </span>
        <a className={styles.toTop} href="#top">
          <Icon name="up" size={14} /> 맨 위로
        </a>
      </div>
    </footer>
  );
}
