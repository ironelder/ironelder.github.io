import { careerYears, githubUrl, profile } from "@/data/profile";
import { CodeCard } from "./CodeCard";
import { Icon } from "./Icon";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={`${styles.meta} reveal`}>
            {profile.name} · {profile.role} · 경력 {careerYears()}년
          </p>
          <h1 className={`${styles.title} reveal d1`}>
            {profile.headline[0]}
            <br />
            {profile.headline[1]}
          </h1>
          <p className={`${styles.lead} reveal d2`}>{profile.lead}</p>
          <div className="btn-row reveal d3">
            <a className="btn primary" href="#experience">
              경력 보기 <Icon name="down" />
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
    </section>
  );
}
