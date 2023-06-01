import { Research } from "./Research";
import styles from "./styles.module.scss";
import {ListCard} from "src/pages/Home/Project/ListCard";

export function Project() {
  return (
    <section className={styles["project-container"]}>
      <Research />
      <ListCard />
    </section>
  );
}
