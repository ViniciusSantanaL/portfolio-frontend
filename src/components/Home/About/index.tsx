import styles from "./styles.module.scss";

export function About() {
  return (
    <section className={styles["about-container"]}>
      <div className={styles["about-box-container"]}>
        <h1>Hello World !</h1>
      </div>
    </section>
  );
}
