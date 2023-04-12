import { Research } from "./Research";
import { Table } from "./Table";
import styles from "./styles.module.scss";

export function Project() {
  return (
    <section className={styles["project-container"]}>
      <Research />
      <Table />
    </section>
  );
}
