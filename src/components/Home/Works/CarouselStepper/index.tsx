import styles from "./styles.module.scss";

interface CarouselStepperProps {
  carouselSize: number;
  currentStepIndex: number;
}

export function CarouselStepper({
  carouselSize,
  currentStepIndex,
}: CarouselStepperProps) {
  return (
    <div className={styles["carousel-stepper-container"]}>
      {Array(carouselSize)
        .fill(null)
        .map((__, index) => (
          <div
            className={`${styles["carousel-step"]} ${
              index === currentStepIndex ? styles.current : ""
            }`}
          ></div>
        ))}
    </div>
  );
}
