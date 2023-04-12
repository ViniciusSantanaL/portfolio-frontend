import { motion } from "framer-motion";
import { HiArrowSmDown } from "react-icons/hi";
import { useState, useRef } from "react";
import { MyInput } from "../Input";
import styles from "./styles.module.scss";
import { SelectItem } from "./Item";
import { Technology } from "src/model/Technology.types";

interface SelectItem {
  label: string;
  value: number;
  imagePath: string;
}

interface SelectProps {
  items: Array<SelectItem>;
  handleSelectItem: (value: SelectItem) => void;
}

export function Select({ items, handleSelectItem }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMouseHover, setIsMouseHover] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleMouseOver = () => setIsMouseHover(true);
  const handleMouseLeave = () => setIsMouseHover(false);

  const handleCloseDropDown = () => {
    if (!isMouseHover) {
      setIsOpen(false);
    }
  };

  const handleClickIcon = () => {
    if (inputRef.current) {
      if (!isOpen) {
        inputRef.current.focus();
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    }
  };

  return (
    <motion.div className={styles["select-container"]} animate={isOpen ? "open" : "closed"}>
      <MyInput
        onButtonMouseHover={handleMouseOver}
        onButtonMouseLeave={handleMouseLeave}
        ref={inputRef}
        label="Test"
        onBlur={handleCloseDropDown}
        handleClickIcon={handleClickIcon}
        whileTap={{ scale: 0.97 }}
      >
        <HiArrowSmDown
          style={{
            transition: `transform 0.5s ease-in-out`,
            transform: `rotate(${isOpen ? 180 : 0}deg)`,
          }}
        />
      </MyInput>
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
            handleItem={() => handleSelectItem(item)}
            label={item.label}
            imagePath={item.imagePath}
          />
        ))}
      </motion.ul>
    </motion.div>
  );
}
