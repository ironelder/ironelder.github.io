import type { CSSProperties } from "react";
import { skillGroups } from "@/data/profile";
import { revealDelay } from "./reveal";
import styles from "./Skills.module.css";

export function Skills() {
  return (
    <section className="section alt" id="skills">
      <div className="container">
        <p className="eyebrow reveal">Skills</p>
        <h2 className="section-title reveal d1">주로 쓰는 기술</h2>
        <p className="section-desc reveal d1">매일 손에 익히고 있는 도구들입니다.</p>

        <div className={styles.skills}>
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              className={`${styles.group} reveal ${revealDelay(i)}`}
              style={{ "--c": group.color } as CSSProperties}
            >
              <h3>
                <span className={styles.bar} />
                {group.title}
              </h3>
              <ul className={styles.chips}>
                {group.items.map((item) => (
                  <li key={item} className={styles.chip}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
