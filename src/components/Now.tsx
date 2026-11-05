import { nowItems } from "@/data/profile";
import { revealDelay } from "./reveal";
import styles from "./Now.module.css";

export function Now() {
  return (
    <section className="section" id="now">
      <div className="container">
        <p className="eyebrow reveal">Now</p>
        <h2 className="section-title reveal d1">요즘 하고 있는 것</h2>
        <p className="section-desc reveal d1">관심사가 바뀌면 여기부터 고쳐 쓸 예정입니다.</p>

        <ul className={styles.list}>
          {nowItems.map((item, i) => (
            <li key={item.title} className={`${styles.item} reveal ${revealDelay(i)}`}>
              <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
