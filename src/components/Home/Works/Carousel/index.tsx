import { useState } from "react";
import worksData from "./data.json";
import { Card } from "./Card";
import { Arrow } from "./Arrow";
import styles from "./styles.module.scss";

export function Carousel() {
  const works = worksData.works;
  const [actualCard, setActualCard] = useState(works[0]);

  return (
    <div className={styles["carousel-container"]}>
      <Arrow direction="left" />
      <Card work={actualCard} />
      <Arrow direction="right" />
    </div>
  );
}
