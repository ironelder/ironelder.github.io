import { skillGroups } from "@/data/profile";
import styles from "./Skills.module.css";

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <p className="eyebrow">skills</p>
        <h2 className="section-title">주로 쓰는 기술</h2>
        <p className="section-desc">모바일에서 웹·서버·AI 까지, 실무에서 써 온 기술들입니다.</p>

        <div className={styles.skills}>
          {skillGroups.map((group) => (
            <div key={group.title} className={styles.group}>
              <h3>{group.title}</h3>
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
