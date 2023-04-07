import { Card } from "./Card";
import { Arrow } from "./Arrow";
import { Work } from "src/model/Work.types";
import styles from "./styles.module.scss";

interface CarouselProps {
  works: Array<Work>;
  actualIndexWork: number;
  setActualIndexWork: React.Dispatch<React.SetStateAction<number>>;
}
export function Carousel({ works, actualIndexWork, setActualIndexWork }: CarouselProps) {
  const getPreviousOrNextIndex = (
    currentIndex: number,
    direction: "previous" | "next",
    lastIndex: number
  ) => {
    if (direction === "previous") {
      return currentIndex === 0 ? lastIndex : currentIndex - 1;
    } else if (direction === "next") {
      return currentIndex === lastIndex ? 0 : currentIndex + 1;
    } else {
      return currentIndex;
    }
  };

  const handleNextWork = (): void => {
    const lastIndex = works.length - 1;
    const nextPosition = getPreviousOrNextIndex(actualIndexWork, "next", lastIndex);
    setActualIndexWork(nextPosition);
  };

  const handlePreviousWork = (): void => {
    const lastIndex = works.length - 1;
    const previousIndex = getPreviousOrNextIndex(actualIndexWork, "previous", lastIndex);
    setActualIndexWork(previousIndex);
  };

  return (
    <div className={styles["carousel-container"]}>
      <Arrow direction="left" onClickEvent={handlePreviousWork} />
      <Card work={works[actualIndexWork]} />
      <Arrow direction="right" onClickEvent={handleNextWork} />
    </div>
  );
}
