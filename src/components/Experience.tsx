import { careerYears, education, experiences } from "@/data/profile";
import { Icon } from "./Icon";
import styles from "./Experience.module.css";

export function Experience() {
  return (
    <section className="section alt" id="experience">
      <div className="container">
        <p className="eyebrow">experience</p>
        <h2 className="section-title">경력</h2>
        <p className="section-desc">
          총 경력 {careerYears()}년. Android 를 중심으로 웹 프론트엔드, 서버 인프라, AI Agent 까지 다뤄 왔습니다.
        </p>

        <ol className={styles.timeline}>
          {experiences.map((exp) => (
            <li key={exp.company} className={styles.company}>
              <div className={styles.companyHead}>
                <span className={styles.marker} aria-hidden="true">
                  <Icon name="briefcase" />
                </span>
                <h3>{exp.company}</h3>
                <span className={styles.period}>{exp.period}</span>
              </div>

              <div className={styles.projects}>
                {exp.projects.map((project) => (
                  <article key={project.title} className={styles.project}>
                    <div className={styles.projectHead}>
                      <h4>{project.title}</h4>
                      <span className={styles.period}>{project.period}</span>
                    </div>
                    <ul className={styles.points}>
                      {project.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    <ul className={styles.tags} aria-label="사용 기술">
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </li>
          ))}

          <li className={styles.company}>
            <div className={styles.companyHead}>
              <span className={styles.marker} aria-hidden="true">
                <Icon name="school" />
              </span>
              <h3>{education.school}</h3>
              <span className={styles.period}>{education.period}</span>
            </div>
            <p className={styles.educationNote}>{education.major}</p>
          </li>
        </ol>
      </div>
    </section>
  );
}
