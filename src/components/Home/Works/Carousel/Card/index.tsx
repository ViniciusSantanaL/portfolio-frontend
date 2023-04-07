import { Work } from "src/model/Work.types";
import styles from "./styles.module.scss";

interface WorkCardProps {
  work: Work;
}

export function Card({ work }: WorkCardProps) {
  return (
    <div className={styles["cards-container"]}>
      <h2>{work.title}</h2>
      <img src={`src/assets/${work.planetImg}`} />
      <span>{`${work.dateStart} - ${work.dateEnd.toUpperCase()}`}</span>
      <p>{work.description}</p>
    </div>
  );
}
