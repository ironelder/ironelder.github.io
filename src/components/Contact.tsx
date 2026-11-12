import { contact, githubUrl, profile, repoUrl } from "@/data/profile";
import { Icon } from "./Icon";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className={styles.card}>
          <div>
            <p className="eyebrow">contact</p>
            <h2>{contact.title}</h2>
            <p className={styles.desc}>{contact.desc}</p>
          </div>
          <div>
            <div className="btn-row">
              <a className="btn primary" href={`mailto:${profile.email}`}>
                <Icon name="mail" /> {profile.email}
              </a>
              <a className="btn" href={githubUrl} target="_blank" rel="noopener">
                <Icon name="github" /> github.com/{profile.githubUser}
              </a>
            </div>
            <a className={styles.source} href={repoUrl} target="_blank" rel="noopener">
              이 페이지 소스 보기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
