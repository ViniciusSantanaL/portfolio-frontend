import { motion } from "framer-motion";
import { HiArrowSmDown } from "react-icons/hi";
import { useState, useRef } from "react";
import { MyInput } from "../Input";
import styles from "./styles.module.scss";
import { Technology } from "src/model/Technology.types";
import { SelectInput } from "./Input";

interface SelectProps {
  label: string;
  items: Array<SelectItem>;
  handleSelectItem: (value: SelectItem) => void;
}

export function Select({ label, items, handleSelectItem }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSelectOpen = (value: boolean) => setIsOpen(value);

  return (
    <motion.div className={styles["select-container"]} animate={isOpen ? "open" : "closed"}>
      <SelectInput label={label} isOpen={isOpen} handleSelectOpen={handleSelectOpen} />
      <motion.ul
        variants={{
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
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        {items.map((item, index) => (
          <SelectItem
            key={index}
            handleItem={() => {
              handleSelectItem(item);
              inputRef.current!.value = "";
            }}
            label={item.label}
            imagePath={item.imagePath}
          />
        ))}
      </motion.ul>
    </motion.div>
  );
}
