import { Variants, motion } from "framer-motion";
import styles from "./styles.module.scss";
import { useEffect, useRef } from "react";
const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

interface SelectItem<T> {
  label: string;
  value: number;
  imagePath: string;
}

interface SelectItemProps {
  label: string;
  imagePath?: string;
  handleItem: () => void;
}
export function SelectItem({ label, imagePath, handleItem }: SelectItemProps) {
  return (
    <motion.li variants={itemVariants} className={styles["select-item"]} onMouseDown={handleItem}>
      <div className={styles["select-item-label-container"]}>
        <span>{label}</span>
        {imagePath && <img src={imagePath} />}
      </div>
      <div className={styles["select-item-line-container"]}>
        <div className={styles["select-item-line"]}></div>
      </div>
    </motion.li>
  );
}
