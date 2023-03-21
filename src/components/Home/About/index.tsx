import { AboutDescription } from "./Description";
import { AboutProfile } from "./Profile";
import styles from "./styles.module.scss";

export function About() {
  return (
    <section className={styles["about-container"]}>
      <div className={styles["about-content"]}>
        <AboutProfile />
        <AboutDescription />
      </div>
    </section>
  );
}
