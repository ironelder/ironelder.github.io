import { about, profile } from "@/data/profile";
import { Avatar } from "./Avatar";
import { Icon } from "./Icon";
import styles from "./About.module.css";

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <p className="eyebrow">about</p>
        <h2 className="section-title">{about.title}</h2>

        <div className={styles.about}>
          <aside className={styles.profile}>
            <Avatar initials={profile.initials} src={profile.avatar} alt={`${profile.name} 프로필 사진`} />
            <p className={styles.name}>{profile.name}</p>
            <p className={styles.handle}>@{profile.githubUser}</p>
            <ul className={styles.meta}>
              <li>
                <Icon name="mobile" />
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
              <li>
                <Icon name="globe" />
                {profile.language}
              </li>
            </ul>
          </aside>

          <div>
            <div className={styles.story}>
              {about.paragraphs.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>

            <ul className={styles.highlights}>
              {about.highlights.map((hl) => (
                <li key={hl.title} className={styles.hl}>
                  <Icon name={hl.icon} />
                  <div>
                    <h3>{hl.title}</h3>
                    <p>{hl.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
