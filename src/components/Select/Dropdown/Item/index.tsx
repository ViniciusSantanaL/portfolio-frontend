import { Variants, motion } from "framer-motion";
import styles from "./styles.module.scss";

const motionVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

interface DropdownItemProps {
  label: string;
  imagePath?: string;
  handleItem: () => void;
}

export function DropdownItem({ label, imagePath, handleItem }: DropdownItemProps) {
  return (
    <motion.li variants={motionVariants} className={styles["select-item"]} onMouseDown={handleItem}>
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
