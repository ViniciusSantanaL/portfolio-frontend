import styles from "./styles.module.scss";

interface WorkCard {
  id: number;
  title: string;
  dateStart: string;
  dateEnd: string;
  description: string;
  planetImg: string;
}

interface WorkCardProps {
  work: WorkCard;
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
