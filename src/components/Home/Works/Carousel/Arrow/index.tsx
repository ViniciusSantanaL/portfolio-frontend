import styles from "./styles.module.scss";

interface ArrowProps {
  direction: "right" | "left";
  onClickEvent: () => void;
}

export function Arrow({ direction, onClickEvent }: ArrowProps) {
  return (
    <i
      className={`${styles.arrow} ${styles[`${direction}`]}`}
      onClick={onClickEvent}
    ></i>
  );
}
