import { motion } from "framer-motion";
import styles from "./styles.module.scss";

interface ArrowProps {
  direction: "right" | "left";
  onClickEvent: () => void;
}

export function Arrow({ direction, onClickEvent }: ArrowProps) {
  return (
    <motion.div
      className={styles["arrow-container"]}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      onClick={onClickEvent}
    >
      <i className={`${styles.arrow} ${styles[`${direction}`]}`}></i>
    </motion.div>
  );
}
