import { contact, githubUrl, profile, repoUrl } from "@/data/profile";
import { Icon } from "./Icon";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className={`${styles.card} reveal`}>
          <p className={`eyebrow ${styles.eyebrow}`}>Contact</p>
          <h2>{contact.title}</h2>
          <p>{contact.desc}</p>
          <div className="btn-row">
            <a className="btn" href={`mailto:${profile.email}`}>
              <Icon name="mail" /> {profile.email}
            </a>
            <a className={`btn ${styles.ghost}`} href={githubUrl} target="_blank" rel="noopener">
              <Icon name="github" /> github.com/{profile.githubUser}
            </a>
            <a className={`btn ${styles.ghost}`} href={repoUrl} target="_blank" rel="noopener">
              <Icon name="book" /> 이 페이지 소스
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
