import { AboutDescription } from "./Description";
import { AboutProfile } from "./Profile";
import BabyYoda from "src/assets/baby-yoda.png";
import styles from "./styles.module.scss";

export function About() {
  return (
    <section className={styles["about-container"]}>
      <div className={styles["about-content"]}>
        <img src={BabyYoda} className={styles["about-baby-yoda"]} />
        <AboutProfile />
        <AboutDescription />
      </div>
    </section>
  );
}
