import { about, profile } from "@/data/profile";
import { Avatar } from "./Avatar";
import { Icon } from "./Icon";
import { revealDelay } from "./reveal";
import styles from "./About.module.css";

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <p className="eyebrow reveal">About</p>
        <h2 className="section-title reveal d1">{about.title}</h2>
        <p className="section-desc reveal d1">{about.desc}</p>

        <div className={styles.about}>
          <aside className={`${styles.profile} reveal`}>
            <Avatar initials={profile.initials} src={profile.avatar} alt={`${profile.name} 프로필 사진`} />
            <p className={styles.name}>{profile.name}</p>
            <p className={styles.handle}>@{profile.githubUser}</p>
            <ul className={styles.meta}>
              <li>
                <Icon name="android" />
                {profile.role}
              </li>
              <li>
                <Icon name="code" />
                {profile.focus}
              </li>
              <li>
                <Icon name="school" />
                {profile.education}
              </li>
            </ul>
          </aside>

          <div>
            {about.paragraphs.map((text, i) => (
              <p key={i} className={`${styles.paragraph} ${i > 0 ? styles.muted : ""} reveal ${revealDelay(i)}`}>
                {text}
              </p>
            ))}

            <div className={styles.highlights}>
              {about.highlights.map((hl, i) => (
                <div key={hl.title} className={`${styles.hl} reveal ${revealDelay(i)}`}>
                  <div className={styles.ic}>
                    <Icon name={hl.icon} />
                  </div>
                  <h3>{hl.title}</h3>
                  <p>{hl.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
