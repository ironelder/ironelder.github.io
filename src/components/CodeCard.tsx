import { profile } from "@/data/profile";
import styles from "./CodeCard.module.css";

export function CodeCard() {
  const [first, second, third] = profile.stack;
  return (
    <div className={styles.card} role="img" aria-label="Kotlin 으로 쓴 자기소개 코드">
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.head}>
        <i />
        <i />
        <i />
        <span className={styles.file}>Developer.kt</span>
      </div>
      <pre>
        <code>
          <span className={styles.kw}>data class</span> <span className={styles.type}>Developer</span>({"\n"}
          {"    "}
          <span className={styles.kw}>val</span> <span className={styles.prop}>name</span>: <span className={styles.type}>String</span> ={" "}
          <span className={styles.str}>&quot;{profile.name}&quot;</span>,{"\n"}
          {"    "}
          <span className={styles.kw}>val</span> <span className={styles.prop}>handle</span>: <span className={styles.type}>String</span> ={" "}
          <span className={styles.str}>&quot;@{profile.githubUser}&quot;</span>,{"\n"}
          {"    "}
          <span className={styles.kw}>val</span> <span className={styles.prop}>role</span>: <span className={styles.type}>String</span> ={" "}
          <span className={styles.str}>&quot;{profile.roles[0]}&quot;</span>,{"\n"}
          {"    "}
          <span className={styles.kw}>val</span> <span className={styles.prop}>stack</span>: <span className={styles.type}>List</span>&lt;
          <span className={styles.type}>String</span>&gt; = <span className={styles.fn}>listOf</span>({"\n"}
          {"        "}
          <span className={styles.str}>&quot;{first}&quot;</span>, <span className={styles.str}>&quot;{second}&quot;</span>,{" "}
          <span className={styles.str}>&quot;{third}&quot;</span>,{"\n"}
          {"    "}),{"\n"}){"\n"}
          {"\n"}
          <span className={styles.com}>{"// 오늘도 한 줄씩 더 나은 코드로"}</span>
          {"\n"}
          <span className={styles.kw}>fun</span> <span className={styles.fn}>main</span>() {"{"}
          {"\n"}
          {"    "}
          <span className={styles.type}>Developer</span>().<span className={styles.fn}>also</span> {"{"}
          {"\n"}
          {"        "}
          <span className={styles.fn}>println</span>(<span className={styles.str}>&quot;Hello, </span>
          {"${it."}
          <span className={styles.prop}>handle</span>
          {"}"}
          <span className={styles.str}>!&quot;</span>){"\n"}
          {"    }"}
          {"\n"}
          {"}"}
        </code>
      </pre>
    </div>
  );
}
