import { githubUrl, profile } from "@/data/profile";
import { RepoGrid } from "./RepoGrid";
import styles from "./Projects.module.css";

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <p className="eyebrow reveal">Projects</p>
        <h2 className="section-title reveal d1">GitHub 저장소</h2>
        <p className="section-desc reveal d1">최근에 손본 공개 저장소를 GitHub 에서 바로 불러옵니다.</p>

        <RepoGrid githubUser={profile.githubUser} />

        <p className={`${styles.note} reveal`}>
          전체 목록은{" "}
          <a href={`${githubUrl}?tab=repositories`} target="_blank" rel="noopener">
            github.com/{profile.githubUser}
          </a>{" "}
          에서 볼 수 있어요.
        </p>
      </div>
    </section>
  );
}
