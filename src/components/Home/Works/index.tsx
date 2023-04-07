import { Carousel } from "./Carousel";
import { CarouselStepper } from "./CarouselStepper";
import { useState } from "react";
import { Work } from "src/model/Work.types";
import styles from "./styles.module.scss";
import data from "./data.json";

export function Works() {
  const works: Array<Work> = data.works;
  const [actualIndexWork, setActualIndexWork] = useState<number>(0);

  return (
    <section className={styles["works-container"]}>
      <Carousel
        actualIndexWork={actualIndexWork}
        setActualIndexWork={setActualIndexWork}
        works={works}
      />
      <CarouselStepper carouselSize={works.length} currentStepIndex={actualIndexWork} />
    </section>
  );
}
