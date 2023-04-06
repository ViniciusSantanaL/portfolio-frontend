import { Carousel } from "./Carousel";
import { CarouselStepper } from "./CarouselStepper";
import styles from "./styles.module.scss";

export function Works() {
  return (
    <section className={styles["works-container"]}>
      <Carousel />
      <CarouselStepper carouselSize={5} currentStepIndex={0} />
    </section>
  );
}
