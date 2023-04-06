import styles from "./styles.module.scss";

interface ArrowProps {
  direction: "right" | "left";
}
export function Arrow({ direction }: ArrowProps) {
  return <i className={`${styles.arrow} ${styles[`${direction}`]}`}></i>;
}
