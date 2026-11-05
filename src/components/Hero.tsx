import { careerYears, githubUrl, profile } from "@/data/profile";
import { CodeCard } from "./CodeCard";
import { Icon } from "./Icon";
import { TypingRole } from "./TypingRole";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.orb} ${styles.o1}`} aria-hidden="true" />
      <div className={`${styles.orb} ${styles.o2}`} aria-hidden="true" />
      <div className={`${styles.orb} ${styles.o3}`} aria-hidden="true" />
      <div className={styles.gridBg} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div>
          <span className={`${styles.badge} reveal`}>
            <span className={styles.dot} />
            경력 {careerYears()}년 · {profile.badgeSuffix}
          </span>
          <h1 className={`${styles.title} reveal d1`}>
            안녕하세요,
            <br />
            <span className="grad-text">{profile.name}</span>입니다.
          </h1>
          <p className={`${styles.role} reveal d2`}>
            <span className={styles.prompt}>$</span> <TypingRole roles={profile.roles} className={styles.typed} />
            <span className={styles.caret} aria-hidden="true" />
          </p>
          <p className={`${styles.lead} reveal d2`}>{profile.lead}</p>
          <div className="btn-row reveal d3">
            <a className="btn primary" href="#projects">
              프로젝트 보기 <Icon name="down" />
            </a>
            <a className="btn" href={githubUrl} target="_blank" rel="noopener">
              <Icon name="github" /> GitHub
            </a>
          </div>
        </div>

        <div className="reveal d2">
          <CodeCard />
        </div>
      </div>

      <div className={`container ${styles.scrollHint}`}>
        <a href="#about" aria-label="아래로 스크롤">
          <span className={styles.mouse} aria-hidden="true" />
          SCROLL
        </a>
      </div>
    </section>
  );
}
