import { motion, Variants } from "framer-motion";
import { DropdownItem } from "./Item";
import styles from "./styles.module.scss";

const motionVariants: Variants = {
  open: {
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
  closed: {
    clipPath: "inset(10% 50% 90% 50% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
};

export interface DropdownItem {
  label: string;
  value: number;
  imagePath: string;
}

interface DropdownProps {
  items: Array<DropdownItem>;
  isOpen: boolean;
  handleSelectItem: (item: DropdownItem) => void;
}

export function Dropdown({ isOpen, items, handleSelectItem }: DropdownProps) {
  return (
    <motion.ul
      variants={motionVariants}
      className={styles["dropdown-container"]}
      style={{ pointerEvents: isOpen ? "auto" : "none" }}
    >
      {items.map((item, index) => (
        <DropdownItem
          key={index}
          label={item.label}
          imagePath={item.imagePath}
          handleItem={() => handleSelectItem(item)}
        />
      ))}
    </motion.ul>
  );
}
